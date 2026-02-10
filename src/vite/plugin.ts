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
   * Directory for per-page annotation JSON files
   * (default: './dev-inspector-annotations')
   */
  syncDir?: string

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

// Convert page path to safe filename
function pagePathToFileName(pagePath: string): string {
  if (!pagePath || pagePath === '/') return 'index.json'
  return pagePath.slice(1).replace(/\//g, '_') + '.json'
}

export function vitePluginDevInspector(options: DevInspectorVitePluginOptions = {}): Plugin {
  const {
    enabled = process.env.NODE_ENV !== 'production',
    analysisPath,
    syncDir = './dev-inspector-annotations',
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude = ['node_modules/**', '**/node_modules/**'],
  } = options

  let bindingToDb = new Map<string, DbMapping>()
  let resolvedSyncDir = ''

  // SSE clients for real-time broadcast
  const sseClients = new Set<import('http').ServerResponse>()

  return {
    name: 'vite-plugin-dev-inspector',
    enforce: 'pre',  // Run before @vitejs/plugin-vue processes templates

    configResolved() {
      if (!enabled) {
        console.log('[vue-dev-inspector] Plugin disabled')
        return
      }

      console.log('[vue-dev-inspector] Plugin enabled')

      // Resolve sync directory path
      resolvedSyncDir = path.isAbsolute(syncDir)
        ? syncDir
        : path.resolve(process.cwd(), syncDir)

      // Load analysis data if path provided
      if (analysisPath) {
        const resolvedPath = path.isAbsolute(analysisPath)
          ? analysisPath
          : path.resolve(process.cwd(), analysisPath)
        bindingToDb = buildBindingToDbMap(resolvedPath)
      }
    },

    configureServer(server) {
      if (!enabled) return

      // Ensure sync directory exists
      if (!fs.existsSync(resolvedSyncDir)) {
        fs.mkdirSync(resolvedSyncDir, { recursive: true })
      }

      // Middleware for annotation sync API
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url || '', 'http://localhost')

        // GET: Read annotations for a page
        if (url.pathname === '/__dev-inspector/annotations' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          try {
            const page = url.searchParams.get('page') || '/'
            const filePath = path.join(resolvedSyncDir, pagePathToFileName(page))

            if (fs.existsSync(filePath)) {
              const data = fs.readFileSync(filePath, 'utf-8')
              res.end(data)
            } else {
              res.end(JSON.stringify({ annotations: {}, screenConfig: null }))
            }
          } catch (e) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: String(e) }))
          }
          return
        }

        // POST: Write annotations for a page + broadcast
        if (url.pathname === '/__dev-inspector/annotations' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Access-Control-Allow-Origin', '*')
            try {
              const payload = JSON.parse(body)
              const { clientId, page, ...data } = payload
              const filePath = path.join(resolvedSyncDir, pagePathToFileName(page || '/'))

              // Ensure directory exists
              if (!fs.existsSync(resolvedSyncDir)) {
                fs.mkdirSync(resolvedSyncDir, { recursive: true })
              }

              // Write to file
              fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

              // Broadcast to all SSE clients (except sender)
              const event = `data: ${JSON.stringify({ type: 'update', clientId, page: page || '/', ...data })}\n\n`
              for (const client of sseClients) {
                try { client.write(event) } catch { sseClients.delete(client) }
              }

              res.end(JSON.stringify({ ok: true }))
              console.log('[vue-dev-inspector] Annotations synced:', pagePathToFileName(page || '/'))
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ error: String(e) }))
            }
          })
          return
        }

        // GET: Read master definitions
        if (url.pathname === '/__dev-inspector/masters' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          try {
            const filePath = path.join(resolvedSyncDir, '_masters.json')
            if (fs.existsSync(filePath)) {
              const data = fs.readFileSync(filePath, 'utf-8')
              res.end(data)
            } else {
              res.end(JSON.stringify({ masters: {} }))
            }
          } catch (e) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: String(e) }))
          }
          return
        }

        // POST: Write master definitions + broadcast
        if (url.pathname === '/__dev-inspector/masters' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            res.setHeader('Content-Type', 'application/json')
            res.setHeader('Access-Control-Allow-Origin', '*')
            try {
              const payload = JSON.parse(body)
              const { clientId, ...data } = payload
              const filePath = path.join(resolvedSyncDir, '_masters.json')

              if (!fs.existsSync(resolvedSyncDir)) {
                fs.mkdirSync(resolvedSyncDir, { recursive: true })
              }

              fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

              // Broadcast master update
              const event = `data: ${JSON.stringify({ type: 'masters', clientId, ...data })}\n\n`
              for (const client of sseClients) {
                try { client.write(event) } catch { sseClients.delete(client) }
              }

              res.end(JSON.stringify({ ok: true }))
              console.log('[vue-dev-inspector] Masters synced:', Object.keys(data.masters || {}).length, 'definitions')
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ error: String(e) }))
            }
          })
          return
        }

        // SSE: Event stream for real-time updates
        if (url.pathname === '/__dev-inspector/events' && req.method === 'GET') {
          res.setHeader('Content-Type', 'text/event-stream')
          res.setHeader('Cache-Control', 'no-cache')
          res.setHeader('Connection', 'keep-alive')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.flushHeaders()

          // Send initial heartbeat
          res.write('data: {"type":"connected"}\n\n')

          sseClients.add(res)
          req.on('close', () => { sseClients.delete(res) })
          return
        }

        // CORS preflight
        if (req.url?.startsWith('/__dev-inspector/') && req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
          res.statusCode = 204
          res.end()
          return
        }

        next()
      })

      console.log('[vue-dev-inspector] Sync server ready (dir:', resolvedSyncDir + ')')
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
