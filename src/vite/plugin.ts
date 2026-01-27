import type { Plugin } from 'vite'
import * as fs from 'fs'
import * as path from 'path'

export interface DevInspectorVitePluginOptions {
  /**
   * Enable the plugin (default: process.env.NODE_ENV === 'development')
   */
  enabled?: boolean

  /**
   * Path to analysis JSON file for DB mapping
   * If not provided, only data-di-binding will be added
   */
  analysisPath?: string

  /**
   * Include file patterns (default: ['**\/*.vue'])
   */
  include?: string[]

  /**
   * Exclude file patterns (default: ['node_modules/**'])
   */
  exclude?: string[]
}

interface DbMapping {
  table: string
  column: string
  type?: string
  comment?: string
}

interface AnalysisElement {
  binding?: string
  db?: DbMapping
}

interface AnalysisComponent {
  elements: AnalysisElement[]
}

interface AnalysisData {
  components: Record<string, AnalysisComponent>
}

// Build binding to DB mapping from analysis data
function buildBindingToDbMap(analysisPath: string): Map<string, DbMapping> {
  const map = new Map<string, DbMapping>()

  try {
    if (!fs.existsSync(analysisPath)) {
      console.warn(`[vue-dev-inspector] Analysis file not found: ${analysisPath}`)
      return map
    }

    const data: AnalysisData = JSON.parse(fs.readFileSync(analysisPath, 'utf-8'))

    for (const [, component] of Object.entries(data.components)) {
      for (const element of component.elements) {
        if (element.binding && element.db) {
          // Normalize binding key (remove leading dots, handle nested)
          const bindingKey = element.binding.replace(/^\./, '')
          if (!map.has(bindingKey)) {
            map.set(bindingKey, element.db)
          }
        }
      }
    }

    console.log(`[vue-dev-inspector] Loaded ${map.size} binding->DB mappings from analysis`)
  } catch (error) {
    console.warn(`[vue-dev-inspector] Failed to load analysis file:`, error)
  }

  return map
}

// Transform template to inject data attributes
function transformTemplate(
  template: string,
  bindingToDb: Map<string, DbMapping>,
  componentName: string
): string {
  let result = template

  // Pattern to match {{ expression }} that's not already wrapped
  // Captures: mustache expressions like {{ item.name }}, {{ user.email }}, etc.
  const mustachePattern = /\{\{\s*([^{}]+?)\s*\}\}/g

  // Track replacements to avoid double-wrapping
  const replacements: Array<{ original: string; replacement: string }> = []

  let match
  while ((match = mustachePattern.exec(template)) !== null) {
    const fullMatch = match[0]  // {{ expression }}
    const expression = match[1].trim()  // expression

    // Skip if:
    // - Already wrapped in a span with data-di-binding
    // - Is a complex expression (ternary, function call, etc.)
    // - Is just a simple variable without dot notation (might be local)
    const beforeContext = template.slice(Math.max(0, match.index - 100), match.index)
    if (beforeContext.includes('data-di-binding')) {
      continue
    }

    // Skip ternary and pipes (too complex)
    if (expression.includes('?') && expression.includes(':')) {
      continue  // Ternary operator
    }
    if (expression.includes('|')) {
      continue  // Vue filters/pipes
    }

    // Extract the binding path (handle things like item.title, user?.name, etc.)
    let bindingPath = expression
      .replace(/\?\.?/g, '.')  // item?.name -> item.name
      .replace(/\s+/g, '')     // Remove whitespace
      .replace(/^\(|\)$/g, '') // Remove wrapping parens

    // Handle function calls like dispDate(notification.startDate) -> notification.startDate
    const funcCallMatch = bindingPath.match(/^\w+\(([^)]+)\)$/)
    if (funcCallMatch) {
      bindingPath = funcCallMatch[1]  // Extract the argument
    }

    // Build attributes
    let attrs = `data-di-binding="${bindingPath}"`
    attrs += ` data-di-component="${componentName}"`

    // Look up DB mapping
    // Try exact match first, then try the last part (e.g., 'notification.title' -> 'title')
    let dbMapping = bindingToDb.get(bindingPath)
    if (!dbMapping && bindingPath.includes('.')) {
      const lastPart = bindingPath.split('.').pop()!
      // Try common patterns: item.X, notification.X, user.X, etc.
      for (const [key, value] of bindingToDb.entries()) {
        if (key.endsWith('.' + lastPart) || key === lastPart) {
          dbMapping = value
          break
        }
      }
    }

    if (dbMapping) {
      attrs += ` data-di-db="${dbMapping.table}.${dbMapping.column}"`
      if (dbMapping.type) {
        attrs += ` data-di-db-type="${dbMapping.type}"`
      }
      if (dbMapping.comment) {
        attrs += ` data-di-db-comment="${dbMapping.comment.replace(/"/g, '&quot;')}"`
      }
    }

    // Wrap in span
    const replacement = `<span ${attrs}>${fullMatch}</span>`
    replacements.push({ original: fullMatch, replacement })
  }

  // Apply replacements (from end to start to preserve indices)
  for (const { original, replacement } of replacements.reverse()) {
    result = result.replace(original, replacement)
  }

  return result
}

// Extract component name from file path
function getComponentName(filePath: string): string {
  const basename = path.basename(filePath, '.vue')
  return basename
}

export function vitePluginDevInspector(options: DevInspectorVitePluginOptions = {}): Plugin {
  const {
    enabled = process.env.NODE_ENV !== 'production',
    analysisPath,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude = ['node_modules/**', '**/node_modules/**'],
  } = options

  let bindingToDb = new Map<string, DbMapping>()

  return {
    name: 'vite-plugin-dev-inspector',
    enforce: 'pre',  // Run before @vitejs/plugin-vue processes templates

    configResolved() {
      if (!enabled) {
        console.log('[vue-dev-inspector] Plugin disabled')
        return
      }

      console.log('[vue-dev-inspector] Plugin enabled')

      // Load analysis data if path provided
      if (analysisPath) {
        const resolvedPath = path.isAbsolute(analysisPath)
          ? analysisPath
          : path.resolve(process.cwd(), analysisPath)
        bindingToDb = buildBindingToDbMap(resolvedPath)
      }
    },

    transform(code, id) {
      if (!enabled) return null

      // Only process .vue files
      if (!id.endsWith('.vue')) return null

      console.log(`[vue-dev-inspector] transform called: ${id}`)

      // Check include/exclude patterns
      const relativePath = path.relative(process.cwd(), id)

      // Simple pattern matching
      const isExcluded = exclude.some(pattern => {
        if (pattern.includes('**')) {
          return relativePath.includes(pattern.replace('**/', '').replace('/**', ''))
        }
        return relativePath.startsWith(pattern)
      })

      if (isExcluded) return null

      // Extract template section
      const templateMatch = code.match(/<template[^>]*>([\s\S]*?)<\/template>/i)
      if (!templateMatch) {
        console.log(`[vue-dev-inspector] No template found in: ${id}`)
        return null
      }

      const originalTemplate = templateMatch[1]
      const componentName = getComponentName(id)

      console.log(`[vue-dev-inspector] Processing template for: ${componentName}`)

      // Transform template
      const transformedTemplate = transformTemplate(originalTemplate, bindingToDb, componentName)

      // If no changes, return null
      if (transformedTemplate === originalTemplate) {
        console.log(`[vue-dev-inspector] No changes for: ${componentName}`)
        return null
      }

      console.log(`[vue-dev-inspector] Transformed: ${componentName}`)

      // Replace template in code
      const newCode = code.replace(
        /<template([^>]*)>([\s\S]*?)<\/template>/i,
        `<template$1>${transformedTemplate}</template>`
      )

      return {
        code: newCode,
        map: null, // TODO: proper source map support
      }
    },
  }
}

// Default export for convenience
export default vitePluginDevInspector
