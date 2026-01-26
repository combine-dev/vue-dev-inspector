#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'

// ===== Types =====

interface DbColumnInfo {
  name: string
  type: string
  comment: string | null
  nullable: boolean
}

interface DbTableInfo {
  name: string
  comment: string | null
  columns: Record<string, DbColumnInfo>
}

interface DbSchema {
  tables: Record<string, DbTableInfo>
}

interface ElementMapping {
  selector: string
  type: 'static' | 'data' | 'button' | 'link' | 'form' | 'unknown'
  text?: string
  binding?: string
  api?: {
    endpoint: string
    method: string
    description?: string
  }
  db?: {
    table: string
    column: string
    type?: string
    comment?: string  // DBコメント追加
  }
  component?: string
  line?: number
}

interface ComponentAnalysis {
  filePath: string
  componentName: string
  elements: ElementMapping[]
  apis: {
    endpoint: string
    method: string
    composable: string
    responseType?: string
  }[]
  imports: string[]
  usedComponents: string[]  // Component names used in this file (e.g., ['NotificationList', 'UserCard'])
}

interface ProjectAnalysis {
  projectPath: string
  analyzedAt: string
  components: Record<string, ComponentAnalysis>
  apiMappings: Record<string, {
    endpoint: string
    method: string
    responseFields: { name: string; type: string; dbColumn?: string }[]
  }>
}

// ===== Utilities =====

function findFiles(dir: string, pattern: RegExp, results: string[] = []): string[] {
  if (!fs.existsSync(dir)) return results

  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // Skip node_modules and hidden directories
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findFiles(filePath, pattern, results)
      }
    } else if (pattern.test(file)) {
      results.push(filePath)
    }
  }

  return results
}

// ===== Vue SFC Parser =====

interface ParsedSFC {
  template: string
  script: string
  scriptSetup: string
}

function parseSFC(content: string): ParsedSFC {
  const templateMatch = content.match(/<template[^>]*>([\s\S]*?)<\/template>/i)
  const scriptMatch = content.match(/<script(?!\s+setup)[^>]*>([\s\S]*?)<\/script>/i)
  const scriptSetupMatch = content.match(/<script\s+setup[^>]*>([\s\S]*?)<\/script>/i)

  return {
    template: templateMatch?.[1] || '',
    script: scriptMatch?.[1] || '',
    scriptSetup: scriptSetupMatch?.[1] || '',
  }
}

// ===== Template Analyzer =====

interface TemplateElement {
  tag: string
  text: string
  isStatic: boolean
  binding?: string
  attributes: Record<string, string>
  line: number
}

function analyzeTemplate(template: string): TemplateElement[] {
  const elements: TemplateElement[] = []
  const seen = new Set<string>() // Avoid duplicates

  // Helper to add element if unique
  const addElement = (el: TemplateElement) => {
    const key = `${el.line}:${el.tag}:${el.text}:${el.binding || ''}`
    if (!seen.has(key) && (el.text || el.binding)) {
      seen.add(key)
      elements.push(el)
    }
  }

  // 1. Find all tags with their content (supports multiline and nested tags)
  const tagRegex = /<([A-Za-z][\w-]*)((?:\s+[^>]*)?)\s*>([\s\S]*?)<\/\1>/g
  let match

  while ((match = tagRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, content] = match
    const line = template.substring(0, match.index).split('\n').length
    const parsedAttrs = parseAttributes(attrs)

    // Extract text content (remove nested tags, keep text)
    const textContent = content
      .replace(/<[^>]+>/g, ' ')  // Remove nested tags
      .replace(/\s+/g, ' ')      // Normalize whitespace
      .trim()

    // Check for {{ bindings }} in content
    const bindingMatches = content.match(/\{\{\s*([^}]+)\s*\}\}/g)
    const hasBinding = !!bindingMatches || attrs.includes(':') || attrs.includes('v-')

    // Determine if content has meaningful text
    const cleanText = textContent.replace(/\{\{[^}]+\}\}/g, '').trim()

    if (cleanText && cleanText.length > 0) {
      // Has static text content
      addElement({
        tag,
        text: cleanText,
        isStatic: !hasBinding,
        binding: bindingMatches ? bindingMatches.map(b => b.replace(/[{}]/g, '').trim()).join(', ') : undefined,
        attributes: parsedAttrs,
        line,
      })
    } else if (bindingMatches) {
      // Only dynamic binding, no static text
      for (const bindingMatch of bindingMatches) {
        const binding = bindingMatch.replace(/[{}\s]/g, '')
        addElement({
          tag,
          text: `{{ ${binding} }}`,
          isStatic: false,
          binding,
          attributes: parsedAttrs,
          line,
        })
      }
    }
  }

  // 2. Find attribute values with static text (placeholder, title, label, field-name, etc.)
  const attrTextRegex = /<([A-Za-z][\w-]*)([^>]*(?:placeholder|title|label|field-name|aria-label|alt)="([^"]+)"[^>]*)>/gi

  while ((match = attrTextRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, attrValue] = match
    const line = template.substring(0, match.index).split('\n').length

    // Skip if it's a binding (starts with : or v-)
    if (!attrs.match(/[:v-](?:placeholder|title|label|field-name|aria-label|alt)/)) {
      addElement({
        tag,
        text: attrValue,
        isStatic: true,
        attributes: parseAttributes(attrs),
        line,
      })
    }
  }

  // 3. Find v-text and v-html bindings
  const vTextRegex = /<([A-Za-z][\w-]*)([^>]*\sv-(?:text|html)="([^"]+)"[^>]*)>/g

  while ((match = vTextRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, binding] = match
    const line = template.substring(0, match.index).split('\n').length
    addElement({
      tag,
      text: `v-text: ${binding}`,
      isStatic: false,
      binding: binding.trim(),
      attributes: parseAttributes(attrs),
      line,
    })
  }

  // 4. Find form inputs with v-model
  const vModelRegex = /<([A-Za-z][\w-]*)([^>]*\sv-model(?:\.[\w]+)*="([^"]+)"[^>]*)>/gi

  while ((match = vModelRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, binding] = match
    const line = template.substring(0, match.index).split('\n').length
    const parsedAttrs = parseAttributes(attrs)

    // Get placeholder or label for context
    const placeholder = parsedAttrs.placeholder || ''

    addElement({
      tag,
      text: placeholder ? `[${placeholder}] v-model: ${binding}` : `v-model: ${binding}`,
      isStatic: false,
      binding: binding.trim(),
      attributes: parsedAttrs,
      line,
    })
  }

  // 5. Find standalone {{ bindings }} not caught by tag regex
  const standaloneBindingRegex = /\{\{\s*([^}]+)\s*\}\}/g

  while ((match = standaloneBindingRegex.exec(template)) !== null) {
    const binding = match[1].trim()
    const line = template.substring(0, match.index).split('\n').length

    // Check if already captured
    const alreadyExists = elements.some(e => e.line === line && e.binding?.includes(binding))
    if (!alreadyExists) {
      addElement({
        tag: 'text',
        text: `{{ ${binding} }}`,
        isStatic: false,
        binding,
        attributes: {},
        line,
      })
    }
  }

  // 6. Find elements with @click (buttons/links)
  const clickableRegex = /<([A-Za-z][\w-]*)([^>]*@click[^>]*)>/g

  while ((match = clickableRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs] = match
    const line = template.substring(0, match.index).split('\n').length
    const parsedAttrs = parseAttributes(attrs)

    // Try to find associated text
    const afterMatch = template.substring(match.index + fullMatch.length)
    const textMatch = afterMatch.match(/^([^<]*)/)?.[1]?.trim()

    if (textMatch && textMatch.length < 100) {
      addElement({
        tag,
        text: textMatch.replace(/\{\{[^}]+\}\}/g, '').trim() || '[クリック要素]',
        isStatic: !textMatch.includes('{{'),
        attributes: parsedAttrs,
        line,
      })
    }
  }

  // 7. Find NuxtLink/RouterLink with to attribute
  const linkRegex = /<(NuxtLink|RouterLink|router-link|nuxt-link)([^>]*)>([\s\S]*?)<\/\1>/gi

  while ((match = linkRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs, content] = match
    const line = template.substring(0, match.index).split('\n').length
    const parsedAttrs = parseAttributes(attrs)
    const textContent = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

    if (textContent) {
      addElement({
        tag: 'link',
        text: textContent,
        isStatic: !content.includes('{{'),
        binding: parsedAttrs.to || parsedAttrs[':to'],
        attributes: parsedAttrs,
        line,
      })
    }
  }

  // 8. Find self-closing Vue components (PascalCase)
  const selfClosingRegex = /<([A-Z][\w]*)([^>]*)\s*\/>/g

  while ((match = selfClosingRegex.exec(template)) !== null) {
    const [fullMatch, tag, attrs] = match
    const line = template.substring(0, match.index).split('\n').length
    const parsedAttrs = parseAttributes(attrs)

    // Extract meaningful attributes for description
    const meaningfulAttrs = ['type', 'title', 'label', 'name', 'placeholder']
    let description = ''
    for (const attr of meaningfulAttrs) {
      if (parsedAttrs[attr]) {
        description = parsedAttrs[attr]
        break
      }
    }

    // Check for dynamic props (bindings)
    const hasBinding = attrs.includes(':') || attrs.includes('v-')
    const bindingAttrs = attrs.match(/:(\w+)="([^"]+)"/g)
    const bindings = bindingAttrs?.map(b => {
      const m = b.match(/:(\w+)="([^"]+)"/)
      return m ? `${m[1]}=${m[2]}` : ''
    }).filter(Boolean).join(', ')

    addElement({
      tag,
      text: description || `[${tag}コンポーネント]`,
      isStatic: !hasBinding,
      binding: bindings || undefined,
      attributes: parsedAttrs,
      line,
    })
  }

  // 9. Find HTML comments (useful for section markers)
  const commentRegex = /<!--\s*(.+?)\s*-->/g

  while ((match = commentRegex.exec(template)) !== null) {
    const commentText = match[1].trim()
    const line = template.substring(0, match.index).split('\n').length

    // Only capture meaningful comments (not empty or just dashes)
    if (commentText && commentText.length > 1 && !commentText.match(/^-+$/)) {
      addElement({
        tag: 'comment',
        text: `[コメント] ${commentText}`,
        isStatic: true,
        attributes: {},
        line,
      })
    }
  }

  return elements
}

function parseAttributes(attrString: string): Record<string, string> {
  const attrs: Record<string, string> = {}
  const regex = /([\w:-]+)(?:="([^"]*)")?/g
  let match

  while ((match = regex.exec(attrString)) !== null) {
    attrs[match[1]] = match[2] || ''
  }

  return attrs
}

function extractBinding(content: string): string | undefined {
  const match = content.match(/\{\{\s*([^}]+)\s*\}\}/)
  return match?.[1]?.trim()
}

// ===== Script Analyzer =====

interface ScriptAnalysis {
  apiCalls: {
    composable: string
    endpoint?: string
    method?: string
    variable?: string
  }[]
  dataBindings: {
    name: string
    source: string
    type: 'ref' | 'reactive' | 'computed' | 'store' | 'prop'
  }[]
  imports: string[]
}

function analyzeScript(script: string, scriptSetup: string): ScriptAnalysis & { componentImports: string[] } {
  const combined = script + '\n' + scriptSetup

  const apiCalls: ScriptAnalysis['apiCalls'] = []
  const dataBindings: ScriptAnalysis['dataBindings'] = []
  const imports: string[] = []
  const componentImports: string[] = []

  // Find imports
  const importRegex = /import\s+(?:\{[^}]+\}|\w+)\s+from\s+['"]([^'"]+)['"]/g
  let match

  while ((match = importRegex.exec(combined)) !== null) {
    imports.push(match[1])
  }

  // Find component imports (PascalCase default imports from .vue files or component paths)
  // Pattern: import ComponentName from '...'
  const componentImportRegex = /import\s+([A-Z][a-zA-Z0-9]*)\s+from\s+['"]([^'"]+)['"]/g
  while ((match = componentImportRegex.exec(combined)) !== null) {
    const componentName = match[1]
    componentImports.push(componentName)
  }

  // Also find named imports that look like components
  const namedImportRegex = /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]([^'"]+)['"]/g
  while ((match = namedImportRegex.exec(combined)) !== null) {
    const names = match[1].split(',').map(n => n.trim().split(' as ').pop()?.trim() || '')
    for (const name of names) {
      // PascalCase = likely a component
      if (name && /^[A-Z][a-zA-Z0-9]*$/.test(name)) {
        componentImports.push(name)
      }
    }
  }

  // Find API calls - multiple patterns

  // Pattern 1: const data = await api.resource.action() or useApi().resource.action()
  const apiCallRegex1 = /(?:const|let)\s+(\w+)(?::\s*\w+)?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g
  while ((match = apiCallRegex1.exec(combined)) !== null) {
    const [, variable, resource, action] = match
    apiCalls.push({
      composable: `${resource}.${action}`,
      variable,
    })
  }

  // Pattern 2: api.resource.action() without assignment (result goes to existing variable)
  // e.g., notifications.value = await api.notifications.list(...)
  const apiCallRegex2 = /(\w+)(?:\.value)?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g
  while ((match = apiCallRegex2.exec(combined)) !== null) {
    const [, variable, resource, action] = match
    // Skip if already captured
    if (!apiCalls.some(c => c.composable === `${resource}.${action}`)) {
      apiCalls.push({
        composable: `${resource}.${action}`,
        variable,
      })
    }
  }

  // Pattern 3: Standalone api call like const { data } = await api.resource.action()
  const apiCallRegex3 = /(?:const|let)\s+\{\s*(\w+)\s*\}\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g
  while ((match = apiCallRegex3.exec(combined)) !== null) {
    const [, variable, resource, action] = match
    if (!apiCalls.some(c => c.composable === `${resource}.${action}`)) {
      apiCalls.push({
        composable: `${resource}.${action}`,
        variable,
      })
    }
  }

  // Pattern 4: Direct function calls like usersShow(), notificationsList(), etc.
  const directApiRegex = /(?:const|let)\s+(\w+)\s*=\s*(?:await\s+)?(\w+(?:Show|List|Create|Update|Destroy))\s*\(/g
  while ((match = directApiRegex.exec(combined)) !== null) {
    const [, variable, funcName] = match
    apiCalls.push({
      composable: funcName,
      variable,
    })
  }

  // Find ref/reactive/computed definitions
  const refRegex = /(?:const|let)\s+(\w+)\s*=\s*(ref|reactive|computed)\s*[(<]/g

  while ((match = refRegex.exec(combined)) !== null) {
    const [, name, type] = match
    dataBindings.push({
      name,
      source: 'local',
      type: type as 'ref' | 'reactive' | 'computed',
    })
  }

  // Find store usage
  const storeRegex = /(?:const|let)\s+(\w+)\s*=\s*use(\w+)Store\s*\(/g

  while ((match = storeRegex.exec(combined)) !== null) {
    const [, variable, storeName] = match
    dataBindings.push({
      name: variable,
      source: `${storeName}Store`,
      type: 'store',
    })
  }

  // Find props
  const propsRegex = /defineProps\s*<?\s*\{([^}]+)\}/
  const propsMatch = combined.match(propsRegex)
  if (propsMatch) {
    const propsContent = propsMatch[1]
    const propNames = propsContent.match(/(\w+)\s*[?:]?\s*:/g) || []
    for (const prop of propNames) {
      const name = prop.replace(/[?:]/g, '').trim()
      dataBindings.push({
        name,
        source: 'props',
        type: 'prop',
      })
    }
  }

  return { apiCalls, dataBindings, imports, componentImports }
}

// ===== API Composable Analyzer =====

interface ApiComposableAnalysis {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  description?: string
  tableName: string
  responseFields: { name: string; type: string; dbColumn: string }[]
  requestFields: { name: string; type: string; dbColumn: string }[]
}

// Extract balanced braces content
function extractBalancedBraces(content: string, startIndex: number): string {
  let depth = 0
  let started = false
  let result = ''

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i]
    if (char === '{') {
      depth++
      started = true
    }
    if (started) {
      result += char
    }
    if (char === '}') {
      depth--
      if (depth === 0 && started) {
        return result
      }
    }
  }
  return result
}

// Parse interface fields including nested objects
function parseInterfaceFields(content: string, prefix: string = ''): { name: string; type: string; dbColumn: string }[] {
  const fields: { name: string; type: string; dbColumn: string }[] = []

  // Remove outer braces
  const inner = content.slice(1, -1)

  // Split by top-level fields (not inside nested braces)
  let depth = 0
  let currentField = ''
  const fieldStrings: string[] = []

  for (const char of inner) {
    if (char === '{' || char === '<') depth++
    if (char === '}' || char === '>') depth--

    if (char === '\n' && depth === 0) {
      if (currentField.trim()) {
        fieldStrings.push(currentField.trim())
      }
      currentField = ''
    } else {
      currentField += char
    }
  }
  if (currentField.trim()) {
    fieldStrings.push(currentField.trim())
  }

  for (const fieldStr of fieldStrings) {
    // Match field: type pattern ([\s\S]+ to include newlines for multi-line types)
    const match = fieldStr.match(/^(\w+)\??:\s*([\s\S]+)$/)
    if (!match) continue

    const [, fieldName, fieldType] = match
    const fullName = prefix ? `${prefix}.${fieldName}` : fieldName
    const dbColumn = camelToSnake(fieldName)

    // Check if it's a nested object (inline or multiline)
    const trimmedType = fieldType.trim()
    if (trimmedType.startsWith('{') || fieldStr.includes(': {')) {
      // Inline nested object
      const braceIndex = fieldStr.indexOf('{')
      if (braceIndex !== -1) {
        const nestedContent = extractBalancedBraces(fieldStr, braceIndex)
        if (nestedContent && nestedContent.length > 2) {
          fields.push(...parseInterfaceFields(nestedContent, fullName))
        }
      }
    } else if (trimmedType.includes('Array<{') || fieldStr.includes('Array<{')) {
      // Array of objects
      const arrayStart = fieldStr.indexOf('Array<{') + 6
      const nestedContent = extractBalancedBraces(fieldStr, arrayStart)
      if (nestedContent && nestedContent.length > 2) {
        fields.push(...parseInterfaceFields(nestedContent, `${fullName}[]`))
      }
    } else {
      // Simple field - extract just the type (first line if multiline)
      const simpleType = trimmedType.split('\n')[0].trim()
      fields.push({
        name: fullName,
        type: simpleType,
        dbColumn: prefix ? `${camelToSnake(prefix.replace('[]', ''))}.${dbColumn}` : dbColumn,
      })
    }
  }

  return fields
}

// Convert camelCase to snake_case
function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).replace(/^_/, '')
}

// ===== Rails Schema Parser =====

function parseRailsSchema(schemaPath: string): DbSchema | null {
  if (!fs.existsSync(schemaPath)) {
    return null
  }

  const content = fs.readFileSync(schemaPath, 'utf-8')
  const tables: Record<string, DbTableInfo> = {}

  // Match create_table blocks
  // Pattern: create_table "table_name", ... do |t|
  const tableRegex = /create_table\s+"(\w+)"[^]*?(?:comment:\s*"([^"]*)")?[^]*?do\s*\|t\|([\s\S]*?)(?=^\s*end\s*$)/gm

  let tableMatch
  while ((tableMatch = tableRegex.exec(content)) !== null) {
    const tableName = tableMatch[1]
    const tableComment = tableMatch[2] || null
    const columnsBlock = tableMatch[3]

    const columns: Record<string, DbColumnInfo> = {}

    // Match column definitions
    // Pattern: t.type "column_name", ... comment: "comment"
    const columnRegex = /t\.(\w+)\s+"(\w+)"(?:[^,\n]*,\s*comment:\s*"([^"]*)")?/g

    let colMatch
    while ((colMatch = columnRegex.exec(columnsBlock)) !== null) {
      const colType = colMatch[1]
      const colName = colMatch[2]
      const colComment = colMatch[3] || null

      // Skip index definitions
      if (colType === 'index') continue

      columns[colName] = {
        name: colName,
        type: colType,
        comment: colComment,
        nullable: !columnsBlock.includes(`"${colName}"`) || !columnsBlock.match(new RegExp(`"${colName}"[^,]*null:\\s*false`))
      }
    }

    tables[tableName] = {
      name: tableName,
      comment: tableComment,
      columns
    }
  }

  return { tables }
}

// Find Rails schema.rb in common locations
function findRailsSchema(projectPath: string): string | null {
  const possiblePaths = [
    path.join(projectPath, '../api/db/schema.rb'),
    path.join(projectPath, 'api/db/schema.rb'),
    path.join(projectPath, '../db/schema.rb'),
    path.join(projectPath, 'db/schema.rb'),
    path.join(projectPath, '../../api/db/schema.rb'),
  ]

  for (const schemaPath of possiblePaths) {
    if (fs.existsSync(schemaPath)) {
      return schemaPath
    }
  }

  return null
}

// Extract table name from endpoint
function extractTableName(endpoint: string): string {
  // /api/v1/users/:id -> users
  // /api/v1/user_subjects -> user_subjects
  const match = endpoint.match(/\/api\/v\d+\/([a-z_]+)/)
  if (match) {
    return match[1]
  }
  // Fallback: last path segment
  const segments = endpoint.split('/').filter(s => s && !s.startsWith(':') && !s.startsWith('{'))
  return segments[segments.length - 1] || ''
}

function analyzeApiComposable(content: string, filePath: string): ApiComposableAnalysis | null {
  // Extract API PATH comment
  const pathMatch = content.match(/\/\/\s*API\s*PATH:\s*([^\n]+)/i)
  const endpoint = pathMatch?.[1]?.trim() || ''

  // Determine method from file name or content
  let method: ApiComposableAnalysis['method'] = 'GET'
  const fileName = path.basename(filePath, '.ts')

  if (fileName.includes('create') || content.includes('method: \'POST\'') || content.includes('method: "POST"')) {
    method = 'POST'
  } else if (fileName.includes('update') || content.includes('method: \'PUT\'') || content.includes('method: "PUT"')) {
    method = 'PUT'
  } else if (fileName.includes('destroy') || fileName.includes('delete') || content.includes('method: \'DELETE\'')) {
    method = 'DELETE'
  } else if (content.includes('method: \'PATCH\'')) {
    method = 'PATCH'
  }

  // Extract description from comment
  const descMatch = content.match(/\/\/\s*Description:\s*([^\n]+)/i)
  const description = descMatch?.[1]?.trim()

  // Extract table name
  const tableName = extractTableName(endpoint)

  // Extract response interface fields with nested object support
  let responseFields: ApiComposableAnalysis['responseFields'] = []
  const responseInterfaceStart = content.search(/interface\s+\w*Response\s*\{/)

  if (responseInterfaceStart !== -1) {
    const braceStart = content.indexOf('{', responseInterfaceStart)
    const interfaceContent = extractBalancedBraces(content, braceStart)
    responseFields = parseInterfaceFields(interfaceContent)
  }

  // Extract request interface fields
  let requestFields: ApiComposableAnalysis['requestFields'] = []
  const requestInterfaceStart = content.search(/interface\s+\w*(?:Request|Body|Params)\s*\{/)

  if (requestInterfaceStart !== -1) {
    const braceStart = content.indexOf('{', requestInterfaceStart)
    const interfaceContent = extractBalancedBraces(content, braceStart)
    requestFields = parseInterfaceFields(interfaceContent)
  }

  if (!endpoint && responseFields.length === 0) {
    return null
  }

  return {
    endpoint,
    method,
    description,
    tableName,
    responseFields,
    requestFields,
  }
}

// ===== Type Definition Analyzer =====

interface TypeDefinition {
  name: string
  fields: { name: string; type: string; optional: boolean; dbColumn?: string }[]
  tableName?: string // Inferred DB table name
  isDbType?: boolean // true if this is a DB model type (not API response)
}

// Global registry of DB types (populated from server/types/*.ts)
let globalDbTypes: Record<string, TypeDefinition> = {}

function analyzeTypeFile(content: string, filePath?: string): TypeDefinition[] {
  const types: TypeDefinition[] = []

  // Check if this is in api/ subfolder (API response type) or root types/ (DB type)
  const isApiType = filePath?.includes('/types/api/') || false

  // Infer table name from filename for DB types
  // e.g., server/types/user.ts -> users table
  let inferredTableName: string | undefined
  if (filePath && !isApiType) {
    const fileName = path.basename(filePath, '.ts')
    if (fileName !== 'index') {
      // Pluralize: user -> users, notification -> notifications
      inferredTableName = fileName.endsWith('s') ? fileName : fileName + 's'
    }
  }

  // Use balanced brace extraction for nested interfaces
  const interfaceStartRegex = /(?:export\s+)?(?:interface|type)\s+(\w+)\s*(?:=\s*)?\{/g
  let match

  while ((match = interfaceStartRegex.exec(content)) !== null) {
    const name = match[1]
    const braceStart = match.index + match[0].length - 1
    const interfaceContent = extractBalancedBraces(content, braceStart)

    if (!interfaceContent) continue

    const fields = parseTypeFields(interfaceContent, inferredTableName)

    types.push({
      name,
      fields,
      tableName: inferredTableName,
      isDbType: !isApiType,
    })
  }

  return types
}

// Parse type/interface fields with DB column inference
function parseTypeFields(content: string, tableName?: string): TypeDefinition['fields'] {
  const fields: TypeDefinition['fields'] = []

  // Remove outer braces
  const inner = content.slice(1, -1)

  // Match field definitions
  const fieldRegex = /(\w+)(\?)?:\s*([^;\n,]+)/g
  let fieldMatch

  while ((fieldMatch = fieldRegex.exec(inner)) !== null) {
    const fieldName = fieldMatch[1]
    const fieldType = fieldMatch[3].trim()

    // Convert camelCase field to snake_case for DB column
    const dbColumn = camelToSnake(fieldName)

    fields.push({
      name: fieldName,
      type: fieldType,
      optional: !!fieldMatch[2],
      dbColumn,
    })
  }

  return fields
}

// Resolve type references to get actual DB fields
function resolveTypeToDbFields(
  typeName: string,
  typeDefinitions: Record<string, TypeDefinition>
): { tableName: string; fields: TypeDefinition['fields'] } | null {
  // Direct match
  let typeDef = typeDefinitions[typeName]

  // Try without common suffixes
  if (!typeDef) {
    const baseName = typeName.replace(/(Response|Request|Data|Item|List)$/, '')
    typeDef = typeDefinitions[baseName]
  }

  if (!typeDef) return null

  // If this type references another type (e.g., UsersShowResponse = User)
  // follow the chain
  if (typeDef.fields.length === 0) {
    // Check if it's an alias to another type
    return null
  }

  // Infer table name from type name if not set
  let tableName = typeDef.tableName
  if (!tableName) {
    // UserResponse -> users, NotificationListResponse -> notifications
    const baseName = typeName
      .replace(/(Response|Request|Data|Item|List|Show|Create|Update|Destroy)$/g, '')
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, '')
    tableName = baseName.endsWith('s') ? baseName : baseName + 's'
  }

  return { tableName, fields: typeDef.fields }
}

// ===== Component Usage Extraction =====

// Extract component names used in template (PascalCase or kebab-case)
function extractUsedComponents(template: string): string[] {
  const components = new Set<string>()

  // Find PascalCase components: <ComponentName> or <ComponentName />
  const pascalRegex = /<([A-Z][a-zA-Z0-9]+)[\s/>]/g
  let match
  while ((match = pascalRegex.exec(template)) !== null) {
    components.add(match[1])
  }

  // Find kebab-case components that might be custom: <my-component>
  // Convert to PascalCase and add
  const kebabRegex = /<([a-z]+-[a-z-]+)[\s/>]/g
  while ((match = kebabRegex.exec(template)) !== null) {
    const kebab = match[1]
    // Convert kebab-case to PascalCase: notification-list -> NotificationList
    const pascal = kebab.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')
    components.add(pascal)
  }

  return [...components]
}

// ===== Main Analyzer =====

// Extract static strings from script (useHead, definePageMeta, etc.)
function extractScriptStaticStrings(script: string): { text: string; source: string; line: number }[] {
  const results: { text: string; source: string; line: number }[] = []

  // useHead({ title: '...' })
  const useHeadRegex = /useHead\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g
  let match
  while ((match = useHeadRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split('\n').length
    results.push({ text: match[1], source: 'useHead.title', line })
  }

  // definePageMeta({ title: '...' })
  const pageMetaRegex = /definePageMeta\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g
  while ((match = pageMetaRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split('\n').length
    results.push({ text: match[1], source: 'definePageMeta.title', line })
  }

  // useSeoMeta({ title: '...' })
  const seoMetaRegex = /useSeoMeta\s*\(\s*\{[^}]*title:\s*['"]([^'"]+)['"]/g
  while ((match = seoMetaRegex.exec(script)) !== null) {
    const line = script.substring(0, match.index).split('\n').length
    results.push({ text: match[1], source: 'useSeoMeta.title', line })
  }

  return results
}

function analyzeComponent(filePath: string, apiMappings: Record<string, ApiComposableAnalysis>): ComponentAnalysis {
  const content = fs.readFileSync(filePath, 'utf-8')
  const sfc = parseSFC(content)
  const componentName = path.basename(filePath, '.vue')

  const templateElements = analyzeTemplate(sfc.template)
  const scriptAnalysis = analyzeScript(sfc.script, sfc.scriptSetup)

  // Extract used components from template and script
  const templateComponents = extractUsedComponents(sfc.template)
  const scriptComponents = scriptAnalysis.componentImports || []
  const usedComponents = [...new Set([...templateComponents, ...scriptComponents])]

  // Extract static strings from script
  const scriptStaticStrings = extractScriptStaticStrings(sfc.script + '\n' + sfc.scriptSetup)

  const elements: ElementMapping[] = []

  // Add script static strings as elements
  for (const ss of scriptStaticStrings) {
    elements.push({
      selector: `script:${ss.source}`,
      type: 'static',
      text: ss.text,
      line: ss.line,
      component: componentName,
    })
  }

  for (const el of templateElements) {
    const mapping: ElementMapping = {
      selector: generateSelector(el),
      type: determineElementType(el),
      line: el.line,
      component: componentName,
    }

    if (el.isStatic) {
      mapping.text = el.text
    } else if (el.binding) {
      mapping.binding = el.binding

      // Try to trace binding to API
      const apiInfo = traceBindingToApi(el.binding, scriptAnalysis, apiMappings)
      if (apiInfo) {
        mapping.api = {
          endpoint: apiInfo.endpoint,
          method: apiInfo.method,
          description: apiInfo.description,
        }

        // Try to map to DB
        const dbInfo = mapToDatabase(el.binding, apiInfo)
        if (dbInfo) {
          mapping.db = dbInfo
        }
      }
    }

    elements.push(mapping)
  }

  return {
    filePath,
    componentName,
    elements,
    apis: scriptAnalysis.apiCalls.map(api => ({
      endpoint: apiMappings[api.composable]?.endpoint || '',
      method: apiMappings[api.composable]?.method || 'GET',
      composable: api.composable,
      responseType: api.variable,
    })),
    imports: scriptAnalysis.imports,
    usedComponents,
  }
}

function generateSelector(el: TemplateElement): string {
  const parts: string[] = [el.tag]

  if (el.attributes.id) {
    return `#${el.attributes.id}`
  }

  if (el.attributes.class) {
    const classes = el.attributes.class.split(/\s+/).slice(0, 2)
    parts.push(...classes.map(c => `.${c}`))
  }

  return parts.join('')
}

function determineElementType(el: TemplateElement): ElementMapping['type'] {
  if (el.tag === 'button' || el.attributes['@click'] || el.attributes.role === 'button') {
    return 'button'
  }

  if (el.tag === 'a' || el.attributes.href || el.attributes.to) {
    return 'link'
  }

  if (['input', 'select', 'textarea'].includes(el.tag)) {
    return 'form'
  }

  if (el.isStatic) {
    return 'static'
  }

  if (el.binding) {
    return 'data'
  }

  return 'unknown'
}

function traceBindingToApi(
  binding: string,
  scriptAnalysis: ScriptAnalysis,
  apiMappings: Record<string, ApiComposableAnalysis>
): ApiComposableAnalysis | null {
  // Extract parts from binding (e.g., "notification.title" -> ["notification", "title"])
  const parts = binding.split('.')
  const rootVar = parts[0].split('[')[0]
  const fieldName = parts[parts.length - 1]

  // Method 1: Check if binding variable directly matches an API call variable
  for (const apiCall of scriptAnalysis.apiCalls) {
    if (apiCall.variable === rootVar || binding.includes(apiCall.variable || '')) {
      return apiMappings[apiCall.composable] || null
    }
  }

  // Method 2: Check if the field name exists in any of the component's API responses
  // This handles cases like v-for="item in items" where item.name should match API
  for (const apiCall of scriptAnalysis.apiCalls) {
    const apiInfo = apiMappings[apiCall.composable]
    if (!apiInfo) continue

    // Check if any response field matches the binding field name
    const matchingField = apiInfo.responseFields.find(f => {
      const fName = f.name.split('.').pop() || f.name
      return fName === fieldName || f.name.endsWith(`.${fieldName}`) || f.name.endsWith(`[].${fieldName}`)
    })

    if (matchingField) {
      return apiInfo
    }
  }

  // Method 3: Check data bindings for store connections and try to match fields
  for (const dataBinding of scriptAnalysis.dataBindings) {
    if (dataBinding.name === rootVar && dataBinding.type === 'store') {
      // Try to find API from store name pattern
      const storeName = dataBinding.source.replace('Store', '').toLowerCase()
      const matchingApi = Object.entries(apiMappings).find(([key]) =>
        key.toLowerCase().includes(storeName)
      )
      if (matchingApi) {
        return matchingApi[1]
      }
    }
  }

  return null
}

function mapToDatabase(binding: string, apiInfo: ApiComposableAnalysis): ElementMapping['db'] | null {
  // Clean binding - remove function calls like dispDate(notification.startDate) -> notification.startDate
  let cleanBinding = binding
  const funcMatch = binding.match(/\w+\(([^)]+)\)/)
  if (funcMatch) {
    cleanBinding = funcMatch[1]
  }

  // Extract field path from binding (e.g., "user.name" -> "name", "data.user.email" -> "user.email")
  const parts = cleanBinding.split('.')
  const fieldName = parts[parts.length - 1]
  const rootVar = parts[0]

  // Method 1: Try to match using API's responseFields
  for (let i = parts.length - 1; i >= 0; i--) {
    const fieldPath = parts.slice(i).join('.')
    const field = apiInfo.responseFields.find(f =>
      f.name === fieldPath ||
      f.name.endsWith(`.${fieldPath}`) ||
      f.name.endsWith(`[].${fieldPath}`)
    )

    if (field) {
      // Get the actual column name (last part of dbColumn path)
      const columnParts = field.dbColumn.split('.')
      const column = columnParts[columnParts.length - 1]

      // Look up comment from Rails schema
      let comment: string | undefined
      if (globalDbSchema) {
        const table = globalDbSchema.tables[apiInfo.tableName]
        if (table && table.columns[column]) {
          comment = table.columns[column].comment || undefined
        }
      }

      return {
        table: apiInfo.tableName,
        column: column,
        type: field.type,
        comment,
      }
    }
  }

  // Method 2: Try to find field in globalDbTypes
  // This handles cases where API response uses DB model types from server/types/
  for (const [typeName, typeDef] of Object.entries(globalDbTypes)) {
    // Check if this type might be related to the binding
    // e.g., User type for user.name binding, Notification for notification.title
    const typeNameLower = typeName.toLowerCase()
    const rootVarLower = rootVar.toLowerCase()

    if (typeNameLower === rootVarLower ||
        rootVarLower.includes(typeNameLower) ||
        typeNameLower.includes(rootVarLower.replace(/s$/, ''))) {

      // Find the field in this type
      const typeField = typeDef.fields.find(f =>
        f.name === fieldName || f.dbColumn === camelToSnake(fieldName)
      )

      if (typeField && typeDef.tableName) {
        // Verify column exists in Rails schema
        if (globalDbSchema) {
          const table = globalDbSchema.tables[typeDef.tableName]
          const dbColumn = typeField.dbColumn || camelToSnake(fieldName)

          if (table && table.columns[dbColumn]) {
            return {
              table: typeDef.tableName,
              column: dbColumn,
              type: table.columns[dbColumn].type || typeField.type,
              comment: table.columns[dbColumn].comment || undefined,
            }
          }
        }
      }
    }
  }

  // Fallback: just use the last part with snake_case conversion
  // BUT only if the column actually exists in Rails schema (to avoid false positives)
  const lastPart = parts[parts.length - 1]

  if (apiInfo.tableName && globalDbSchema) {
    const table = globalDbSchema.tables[apiInfo.tableName]
    if (table) {
      // Try multiple column name possibilities:
      // 1. Full snake_case: userName -> user_name
      // 2. Just the last word: userName -> name (user might be table prefix)
      // 3. Without common prefixes: notificationTitle -> title
      const snakeColumn = camelToSnake(lastPart)
      const lastWord = lastPart.replace(/^[a-z]+(?=[A-Z])/, '').toLowerCase() // userName -> name
      const candidates = [snakeColumn, lastWord]

      // Also try removing table name prefix: userName with users table -> name
      const singularTable = apiInfo.tableName.replace(/s$/, '') // users -> user
      if (lastPart.toLowerCase().startsWith(singularTable)) {
        const withoutPrefix = lastPart.slice(singularTable.length)
        if (withoutPrefix) {
          candidates.push(withoutPrefix.toLowerCase())
          candidates.push(camelToSnake(withoutPrefix))
        }
      }

      // Find first matching column
      for (const candidate of candidates) {
        if (table.columns[candidate]) {
          return {
            table: apiInfo.tableName,
            column: candidate,
            type: table.columns[candidate].type || 'unknown',
            comment: table.columns[candidate].comment || undefined,
          }
        }
      }
    }
  }

  // No valid DB mapping found
  return null
}

// ===== CLI Entry Point =====

// Global variable to store DB schema for use in mapping functions
let globalDbSchema: DbSchema | null = null

export async function analyzeProject(projectPath: string, options: {
  output?: string
  verbose?: boolean
  schemaPath?: string
} = {}): Promise<ProjectAnalysis> {
  const { output, verbose, schemaPath } = options

  console.log(`\n🔍 Analyzing project: ${projectPath}\n`)

  // Load Rails schema if available
  const railsSchemaPath = schemaPath || findRailsSchema(projectPath)
  if (railsSchemaPath) {
    console.log(`📊 Loading Rails schema: ${railsSchemaPath}`)
    globalDbSchema = parseRailsSchema(railsSchemaPath)
    if (globalDbSchema && verbose) {
      console.log(`   Found ${Object.keys(globalDbSchema.tables).length} tables`)
    }
  } else {
    console.log('⚠️  Rails schema.rb not found - DB comments will not be available')
    globalDbSchema = null
  }

  // Find all relevant files
  const vueFiles = findFiles(projectPath, /\.vue$/)
  const apiFiles = findFiles(path.join(projectPath, 'composables', 'useApi'), /\.ts$/)
  const altApiFiles = findFiles(path.join(projectPath, 'front', 'composables', 'useApi'), /\.ts$/)
  const typeFiles = findFiles(path.join(projectPath, 'server', 'types'), /\.ts$/)
  const altTypeFiles = findFiles(path.join(projectPath, 'front', 'server', 'types'), /\.ts$/)

  const allApiFiles = [...apiFiles, ...altApiFiles]
  const allTypeFiles = [...typeFiles, ...altTypeFiles]

  if (verbose) {
    console.log(`Found ${vueFiles.length} Vue files`)
    console.log(`Found ${allApiFiles.length} API composable files`)
    console.log(`Found ${allTypeFiles.length} type definition files`)
  }

  // Analyze API composables first
  console.log('📡 Analyzing API composables...')
  const apiMappings: Record<string, ApiComposableAnalysis> = {}

  for (const apiFile of allApiFiles) {
    const content = fs.readFileSync(apiFile, 'utf-8')
    const analysis = analyzeApiComposable(content, apiFile)

    if (analysis) {
      // Generate composable key from file path
      // e.g., composables/useApi/users/show.ts -> users.show
      const relativePath = apiFile.replace(/.*useApi\//, '').replace(/\.ts$/, '')
      const key = relativePath.replace(/\//g, '.').replace(/\/index$/, '')
      apiMappings[key] = analysis

      if (verbose) {
        console.log(`  ✓ ${key}: ${analysis.method} ${analysis.endpoint}`)
      }
    }
  }

  // Analyze type definitions (separate DB types from API types)
  console.log('📋 Analyzing type definitions...')
  const typeDefinitions: Record<string, TypeDefinition> = {}
  globalDbTypes = {} // Reset global DB types

  for (const typeFile of allTypeFiles) {
    const content = fs.readFileSync(typeFile, 'utf-8')
    const types = analyzeTypeFile(content, typeFile)
    const isApiType = typeFile.includes('/types/api/')

    for (const type of types) {
      typeDefinitions[type.name] = type

      // Store DB types separately for DB column lookups
      if (type.isDbType && type.tableName) {
        globalDbTypes[type.name] = type
        if (verbose) {
          console.log(`  ✓ [DB] ${type.name} -> ${type.tableName}: ${type.fields.length} fields`)
        }
      } else if (verbose) {
        console.log(`  ✓ [API] ${type.name}: ${type.fields.length} fields`)
      }
    }
  }

  if (verbose) {
    console.log(`  Total: ${Object.keys(globalDbTypes).length} DB types, ${Object.keys(typeDefinitions).length - Object.keys(globalDbTypes).length} API types`)
  }

  // Analyze Vue components
  console.log('🧩 Analyzing Vue components...')
  const components: Record<string, ComponentAnalysis> = {}

  for (const vueFile of vueFiles) {
    try {
      const analysis = analyzeComponent(vueFile, apiMappings)
      const relativePath = path.relative(projectPath, vueFile)
      components[relativePath] = analysis

      if (verbose) {
        const staticCount = analysis.elements.filter(e => e.type === 'static').length
        const dataCount = analysis.elements.filter(e => e.type === 'data').length
        console.log(`  ✓ ${relativePath}: ${staticCount} static, ${dataCount} data`)
      }
    } catch (e) {
      console.error(`  ✗ Error analyzing ${vueFile}:`, e)
    }
  }

  const result: ProjectAnalysis = {
    projectPath,
    analyzedAt: new Date().toISOString(),
    components,
    apiMappings,
  }

  // Output results
  if (output) {
    const outputPath = path.resolve(output)
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2))
    console.log(`\n✅ Analysis saved to: ${outputPath}`)
  }

  // Print summary
  const totalElements = Object.values(components).reduce((sum, c) => sum + c.elements.length, 0)
  const staticElements = Object.values(components).reduce(
    (sum, c) => sum + c.elements.filter(e => e.type === 'static').length, 0
  )
  const dataElements = Object.values(components).reduce(
    (sum, c) => sum + c.elements.filter(e => e.type === 'data').length, 0
  )

  console.log(`
📊 Analysis Summary:
   Components: ${Object.keys(components).length}
   Total elements: ${totalElements}
   - Static: ${staticElements}
   - Data: ${dataElements}
   - Other: ${totalElements - staticElements - dataElements}
   API endpoints: ${Object.keys(apiMappings).length}
`)

  return result
}

// CLI execution
if (typeof require !== 'undefined' && require.main === module) {
  const args = process.argv.slice(2)
  const projectPath = args[0] || '.'
  const outputFlag = args.indexOf('-o')
  const output = outputFlag !== -1 ? args[outputFlag + 1] : 'dev-inspector-analysis.json'
  const verbose = args.includes('-v') || args.includes('--verbose')

  analyzeProject(projectPath, { output, verbose }).catch(console.error)
}
