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
  type FormInfo,
  type MasterEntry,
  type MasterDefinition,
  type ElementNote,
  type LinkInfo,
  type DevMeta,
  type ScreenSpec,
  type ScreenConfig,
  type SourceBindingInfo,
  type AnalyzedElement,
  type ProjectAnalysis,
  type CrossSearchMode,
  type CrossSearchResult,
  type UnannotatedElement,
  type ScreenFlowNode,
  type ScreenFlowEdge,
} from './composables/useDevInspector'

// Components
export { default as DevInspector } from './components/DevInspector.vue'
export { default as DevPanel } from './components/DevPanel.vue'
export { default as DevElementEditor } from './components/DevElementEditor.vue'
export { default as DevPickOverlay } from './components/DevPickOverlay.vue'
export { default as DevScreenEditor } from './components/DevScreenEditor.vue'
