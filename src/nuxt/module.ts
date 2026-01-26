import { defineNuxtModule, addComponent, addPlugin, createResolver, addImports, addVitePlugin } from '@nuxt/kit'
import type { DevInspectorOptions } from '../composables/useDevInspector'
import { vitePluginDevInspector } from '../vite/plugin'

export interface ModuleOptions extends DevInspectorOptions {
  /**
   * Enable the module
   * @default true in development
   */
  enabled?: boolean

  /**
   * Path to analysis JSON file for DB mapping
   */
  analysisPath?: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'vue-dev-inspector',
    configKey: 'devInspector',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    enabled: process.env.NODE_ENV === 'development',
    storageKey: 'devInspector:elementConfigs',
    enabledInProduction: false
  },
  setup(options, nuxt) {
    if (!options.enabled) {
      return
    }

    const resolver = createResolver(import.meta.url)

    // Add Vite plugin for template transformation
    addVitePlugin(vitePluginDevInspector({
      enabled: options.enabled,
      analysisPath: options.analysisPath,
    }))

    // Add auto-imports for composables
    addImports([
      {
        name: 'useDevInspector',
        from: resolver.resolve('../src/composables/useDevInspector')
      },
      {
        name: 'useDevInspectorStore',
        from: resolver.resolve('../src/composables/useDevInspector')
      }
    ])

    // Add DevInspector component
    addComponent({
      name: 'DevInspector',
      filePath: resolver.resolve('../src/components/DevInspector.vue')
    })

    // Add plugin for initialization
    addPlugin({
      src: resolver.resolve('./plugin'),
      mode: 'client'
    })

    // Pass options to runtime
    nuxt.options.runtimeConfig.public.devInspector = {
      storageKey: options.storageKey,
      enabledInProduction: options.enabledInProduction
    }
  }
})

// Type augmentation for Nuxt
declare module '@nuxt/schema' {
  interface PublicRuntimeConfig {
    devInspector: {
      storageKey?: string
      enabledInProduction?: boolean
    }
  }
}
