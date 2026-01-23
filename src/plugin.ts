import type { App, Plugin } from 'vue'
import DevInspector from './components/DevInspector.vue'
import type { DevInspectorOptions } from './composables/useDevInspector'

export interface PluginOptions extends DevInspectorOptions {
  /**
   * Whether to auto-register the DevInspector component globally
   * @default true
   */
  autoRegister?: boolean
}

export const VueDevInspector: Plugin<PluginOptions[]> = {
  install(app: App, options: PluginOptions = {}) {
    const { autoRegister = true, ...storeOptions } = options

    // Register component globally if autoRegister is true
    if (autoRegister) {
      app.component('DevInspector', DevInspector)
    }

    // Provide options for component to use
    app.provide('devInspectorOptions', storeOptions)
  }
}

export default VueDevInspector
