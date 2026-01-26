// Plugin
export { VueDevInspector, default } from './plugin'
export type { PluginOptions } from './plugin'

// Vite Plugin (build-time attribute injection)
export { vitePluginDevInspector } from './vite/plugin'
export type { DevInspectorVitePluginOptions } from './vite/plugin'

// Composable
export {
  useDevInspector,
  useDevInspectorStore,
  type DevInspectorOptions,
  type ElementConfig,
  type FieldInfo,
  type ActionInfo,
  type ElementNote,
  type LinkInfo,
  type DevMeta,
  type ScreenSpec,
  type SourceBindingInfo,
  type AnalyzedElement,
  type ProjectAnalysis,
} from './composables/useDevInspector'

// Components
export { default as DevInspector } from './components/DevInspector.vue'
export { default as DevPanel } from './components/DevPanel.vue'
export { default as DevElementEditor } from './components/DevElementEditor.vue'
export { default as DevPickOverlay } from './components/DevPickOverlay.vue'
