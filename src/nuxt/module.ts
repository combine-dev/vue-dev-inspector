import { defineNuxtModule, addComponent, addPlugin, createResolver, addImports } from '@nuxt/kit'
import type { DevInspectorOptions } from '../composables/useDevInspector'

export interface ModuleOptions extends DevInspectorOptions {
  /**
   * Enable the module
   * @default true in development
   */
  enabled?: boolean
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

    // Add auto-imports for composables
    addImports([
      {
        name: 'useDevInspector',
        from: resolver.resolve('../composables/useDevInspector')
      },
      {
        name: 'useDevInspectorStore',
        from: resolver.resolve('../composables/useDevInspector')
      }
    ])

    // Add DevInspector component
    addComponent({
      name: 'DevInspector',
      filePath: resolver.resolve('../components/DevInspector.vue')
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
