import { createUnplugin } from 'unplugin'
import * as fs from 'fs'
import * as path from 'path'
import type { DevInspectorPluginOptions, DbMapping } from '../core/options'
import { buildBindingToDbMap, getComponentName } from '../core/utils'
import { transformTemplate } from '../core/transform-vue'
import { transformJsx } from '../core/transform-jsx'
import { createNodeMiddleware } from '../core/middleware'

export const unpluginDevInspector = createUnplugin((options: DevInspectorPluginOptions = {}) => {
  const {
    enabled = process.env.NODE_ENV !== 'production',
    analysisPath,
    syncDir = './dev-inspector-annotations',
    exclude = ['node_modules/**', '**/node_modules/**'],
    include,
  } = options

  let bindingToDb = new Map<string, DbMapping>()
  let resolvedSyncDir = ''

  // Resolve paths eagerly for Webpack (no configResolved hook)
  function ensureResolved() {
    if (resolvedSyncDir) return
    resolvedSyncDir = path.isAbsolute(syncDir)
      ? syncDir
      : path.resolve(process.cwd(), syncDir)

    if (analysisPath) {
      const resolvedPath = path.isAbsolute(analysisPath)
        ? analysisPath
        : path.resolve(process.cwd(), analysisPath)
      bindingToDb = buildBindingToDbMap(resolvedPath)
    }
  }

  function isExcluded(id: string): boolean {
    const relativePath = path.relative(process.cwd(), id)
    return exclude.some(pattern => {
      if (pattern.includes('**')) {
        return relativePath.includes(pattern.replace('**/', '').replace('/**', ''))
      }
      return relativePath.startsWith(pattern)
    })
  }

  function isIncluded(id: string): boolean {
    if (!include) return true
    const relativePath = path.relative(process.cwd(), id)
    return include.some(pattern => {
      if (pattern.includes('**')) {
        const ext = pattern.replace('**/', '').replace('/**', '')
        return relativePath.endsWith(ext) || relativePath.includes(ext)
      }
      return relativePath.endsWith(pattern)
    })
  }

  return [
    // Vue template transform plugin
    {
      name: 'dev-inspector-vue-transform',
      enforce: 'pre' as const,

      transformInclude(id: string) {
        if (!enabled) return false
        return id.endsWith('.vue') && !isExcluded(id) && isIncluded(id)
      },

      transform(code: string, id: string) {
        ensureResolved()

        // Extract template section
        const templateMatch = code.match(/<template[^>]*>([\s\S]*?)<\/template>/i)
        if (!templateMatch) return null

        const originalTemplate = templateMatch[1]
        const componentName = getComponentName(id)

        const transformedTemplate = transformTemplate(originalTemplate, bindingToDb, componentName)

        if (transformedTemplate === originalTemplate) return null

        const newCode = code.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${transformedTemplate}</template>`
        )

        return { code: newCode, map: null }
      },

      // Vite-specific hooks
      vite: {
        configResolved() {
          if (!enabled) {
            console.log('[vue-dev-inspector] Plugin disabled')
            return
          }
          console.log('[vue-dev-inspector] Plugin enabled')
          ensureResolved()
        },
      },
    },

    // JSX/TSX transform plugin
    {
      name: 'dev-inspector-jsx-transform',
      enforce: 'pre' as const,

      transformInclude(id: string) {
        if (!enabled) return false
        return /\.[jt]sx$/.test(id) && !isExcluded(id) && isIncluded(id)
      },

      transform(code: string, id: string) {
        ensureResolved()

        const componentName = getComponentName(id)
        const transformed = transformJsx(code, bindingToDb, componentName)

        if (transformed === code) return null

        return { code: transformed, map: null }
      },
    },

    // Dev server middleware plugin
    {
      name: 'dev-inspector-server',

      vite: {
        configureServer(server: any) {
          if (!enabled) return
          ensureResolved()

          // Ensure sync directory exists
          if (!fs.existsSync(resolvedSyncDir)) {
            fs.mkdirSync(resolvedSyncDir, { recursive: true })
          }

          server.middlewares.use(createNodeMiddleware(resolvedSyncDir))
          console.log('[vue-dev-inspector] Sync server ready (dir:', resolvedSyncDir + ')')
        },
      },

      webpack(compiler: any) {
        if (!enabled) return
        ensureResolved()

        // For Webpack (Next.js), middleware is handled via Route Handlers
        // so no dev server setup needed here.
        // Ensure sync directory exists for any direct file access.
        if (!fs.existsSync(resolvedSyncDir)) {
          fs.mkdirSync(resolvedSyncDir, { recursive: true })
        }
        console.log('[vue-dev-inspector] Webpack plugin initialized (syncDir:', resolvedSyncDir + ')')
      },
    },
  ]
})

// Wrapped exports to avoid leaking unplugin internal types (e.g. WebpackPluginInstance)
// which cause issues with dts rollup
export const vitePlugin: (options: DevInspectorPluginOptions) => any = unpluginDevInspector.vite
export const webpackPlugin: (options: DevInspectorPluginOptions) => any = unpluginDevInspector.webpack
