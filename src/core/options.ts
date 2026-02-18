export interface DevInspectorPluginOptions {
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

export interface DbMapping {
  table: string
  column: string
  type?: string
  comment?: string
}

export interface AnalysisElement {
  binding?: string
  db?: DbMapping
}

export interface AnalysisComponent {
  elements: AnalysisElement[]
}

export interface AnalysisData {
  components: Record<string, AnalysisComponent>
}
