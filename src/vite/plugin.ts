import { vitePlugin } from '../unplugin'
import type { DevInspectorPluginOptions } from '../core/options'

// Re-export types for backward compatibility
export type { DevInspectorPluginOptions as DevInspectorVitePluginOptions } from '../core/options'

// Wrap unplugin's vite export to match existing API signature
export function vitePluginDevInspector(options: DevInspectorPluginOptions = {}) {
  return vitePlugin(options)
}

// Default export for convenience
export default vitePluginDevInspector
