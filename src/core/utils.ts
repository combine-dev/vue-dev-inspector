import * as fs from 'fs'
import * as path from 'path'
import type { DbMapping, AnalysisData } from './options'

/**
 * Parse analysis JSON and create binding -> DB mapping
 */
export function buildBindingToDbMap(analysisPath: string): Map<string, DbMapping> {
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

/**
 * Extract component name from file path
 */
export function getComponentName(filePath: string): string {
  const basename = path.basename(filePath, path.extname(filePath))
  return basename
}

/**
 * Convert page path to safe filename
 */
export function pagePathToFileName(pagePath: string): string {
  if (!pagePath || pagePath === '/') return 'index.json'
  return pagePath.slice(1).replace(/\//g, '_') + '.json'
}
