#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'

// ===== Types =====

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

function analyzeScript(script: string, scriptSetup: string): ScriptAnalysis {
  const combined = script + '\n' + scriptSetup

  const apiCalls: ScriptAnalysis['apiCalls'] = []
  const dataBindings: ScriptAnalysis['dataBindings'] = []
  const imports: string[] = []

  // Find imports
  const importRegex = /import\s+(?:\{[^}]+\}|\w+)\s+from\s+['"]([^'"]+)['"]/g
  let match

  while ((match = importRegex.exec(combined)) !== null) {
    imports.push(match[1])
  }

  // Find API calls (useApi pattern)
  const apiCallRegex = /(?:const|let)\s+\{?\s*(\w+)\s*\}?\s*=\s*(?:await\s+)?(?:api|useApi\(\))\.(\w+)\.(\w+)\s*\(/g

  while ((match = apiCallRegex.exec(combined)) !== null) {
    const [, variable, resource, action] = match
    apiCalls.push({
      composable: `${resource}.${action}`,
      variable,
    })
  }

  // Find direct API calls
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

  return { apiCalls, dataBindings, imports }
}

// ===== API Composable Analyzer =====

interface ApiComposableAnalysis {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  description?: string
  responseFields: { name: string; type: string }[]
  requestFields: { name: string; type: string }[]
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

  // Extract response interface fields
  const responseFields: { name: string; type: string }[] = []
  const responseInterfaceMatch = content.match(/interface\s+\w*Response\s*\{([^}]+)\}/s)

  if (responseInterfaceMatch) {
    const fieldsContent = responseInterfaceMatch[1]
    const fieldRegex = /(\w+)\??\s*:\s*([^;\n]+)/g
    let fieldMatch

    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      responseFields.push({
        name: fieldMatch[1],
        type: fieldMatch[2].trim(),
      })
    }
  }

  // Extract request interface fields
  const requestFields: { name: string; type: string }[] = []
  const requestInterfaceMatch = content.match(/interface\s+\w*(?:Request|Body|Params)\s*\{([^}]+)\}/s)

  if (requestInterfaceMatch) {
    const fieldsContent = requestInterfaceMatch[1]
    const fieldRegex = /(\w+)\??\s*:\s*([^;\n]+)/g
    let fieldMatch

    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      requestFields.push({
        name: fieldMatch[1],
        type: fieldMatch[2].trim(),
      })
    }
  }

  if (!endpoint && responseFields.length === 0) {
    return null
  }

  return {
    endpoint,
    method,
    description,
    responseFields,
    requestFields,
  }
}

// ===== Type Definition Analyzer =====

interface TypeDefinition {
  name: string
  fields: { name: string; type: string; optional: boolean }[]
}

function analyzeTypeFile(content: string): TypeDefinition[] {
  const types: TypeDefinition[] = []

  const interfaceRegex = /(?:export\s+)?interface\s+(\w+)\s*\{([^}]+)\}/gs
  let match

  while ((match = interfaceRegex.exec(content)) !== null) {
    const [, name, fieldsContent] = match
    const fields: TypeDefinition['fields'] = []

    const fieldRegex = /(\w+)(\?)?:\s*([^;\n]+)/g
    let fieldMatch

    while ((fieldMatch = fieldRegex.exec(fieldsContent)) !== null) {
      fields.push({
        name: fieldMatch[1],
        type: fieldMatch[3].trim(),
        optional: !!fieldMatch[2],
      })
    }

    types.push({ name, fields })
  }

  return types
}

// ===== Main Analyzer =====

function analyzeComponent(filePath: string, apiMappings: Record<string, ApiComposableAnalysis>): ComponentAnalysis {
  const content = fs.readFileSync(filePath, 'utf-8')
  const sfc = parseSFC(content)
  const componentName = path.basename(filePath, '.vue')

  const templateElements = analyzeTemplate(sfc.template)
  const scriptAnalysis = analyzeScript(sfc.script, sfc.scriptSetup)

  const elements: ElementMapping[] = []

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
  // Extract the root variable from binding (e.g., "user.name" -> "user")
  const rootVar = binding.split('.')[0].split('[')[0]

  // Check if this variable comes from an API call
  for (const apiCall of scriptAnalysis.apiCalls) {
    if (apiCall.variable === rootVar || binding.includes(apiCall.variable || '')) {
      return apiMappings[apiCall.composable] || null
    }
  }

  // Check data bindings for store connections
  for (const dataBinding of scriptAnalysis.dataBindings) {
    if (dataBinding.name === rootVar && dataBinding.type === 'store') {
      // Could trace further into store definitions
    }
  }

  return null
}

function mapToDatabase(binding: string, apiInfo: ApiComposableAnalysis): ElementMapping['db'] | null {
  // Extract field path from binding (e.g., "user.name" -> "name")
  const parts = binding.split('.')
  const fieldName = parts[parts.length - 1]

  // Find matching field in API response
  const field = apiInfo.responseFields.find(f => f.name === fieldName)
  if (!field) return null

  // Infer table name from endpoint
  // e.g., /api/v1/users/:id -> users
  const tableMatch = apiInfo.endpoint.match(/\/api\/v\d+\/(\w+)/)
  const tableName = tableMatch?.[1] || ''

  if (!tableName) return null

  return {
    table: tableName,
    column: fieldName,
    type: field.type,
  }
}

// ===== CLI Entry Point =====

export async function analyzeProject(projectPath: string, options: {
  output?: string
  verbose?: boolean
} = {}): Promise<ProjectAnalysis> {
  const { output, verbose } = options

  console.log(`\n🔍 Analyzing project: ${projectPath}\n`)

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

  // Analyze type definitions
  console.log('📋 Analyzing type definitions...')
  const typeDefinitions: Record<string, TypeDefinition> = {}

  for (const typeFile of allTypeFiles) {
    const content = fs.readFileSync(typeFile, 'utf-8')
    const types = analyzeTypeFile(content)

    for (const type of types) {
      typeDefinitions[type.name] = type
      if (verbose) {
        console.log(`  ✓ ${type.name}: ${type.fields.length} fields`)
      }
    }
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
