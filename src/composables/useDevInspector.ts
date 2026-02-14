import { ref, computed, watch, nextTick } from 'vue'
import { defineStore } from 'pinia'
import { exportForSDD, exportForClient } from '../utils/exportMarkdown'

// ===== Types =====

export interface SourceBindingInfo {
  type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api' | 'data'
  source?: string // e.g., 'form.userName', 'userStore.currentUser.name'
  apiEndpoint?: string
  apiMethod?: string
  storeKey?: string
  isStatic?: boolean // true = 固定文言
}

export interface FieldInfo {
  table: string
  column: string
  type?: string
  validation?: string[]
  description?: string
}

export interface CsvColumnDef {
  name: string              // CSVヘッダー名 (例: "受注番号")
  dbMapping?: string        // table.column (例: "orders.order_number")
  processing?: string       // 加工ロジック (例: "姓 + ' ' + 名", "IF status=1 THEN '有効'")
  type?: string             // string, integer, date, decimal, etc.
  required?: boolean
  validation?: string       // バリデーションルール (例: "max:255, 日付形式")
  format?: string           // 出力フォーマット (例: "YYYY/MM/DD")
  defaultValue?: string     // 取込時のデフォルト値
  description?: string      // 備考
}

export interface CsvErrorDef {
  condition: string         // エラー条件 (例: "必須項目が空", "日付形式不正")
  message: string           // エラーメッセージ (例: "受注番号は必須です")
  column?: string           // 対象列名 (空なら全体チェック)
  severity?: 'error' | 'warning'
}

export interface CsvSpec {
  columns: CsvColumnDef[]
  encoding?: 'UTF-8' | 'Shift_JIS' | 'EUC-JP' | 'UTF-8 BOM'
  delimiter?: ',' | '\t' | '|'
  hasHeaderRow?: boolean
  filenamePattern?: string        // 例: "users_{YYYYMMDD}.csv"
  // 出力用
  sortOrder?: string
  filterCondition?: string
  maxRows?: number
  // 取込用
  errorHandling?: 'stop_on_first' | 'skip_and_continue' | 'collect_all'
  duplicateHandling?: 'skip' | 'overwrite' | 'error'
  preValidation?: string
  // エラー定義
  errorDefs?: CsvErrorDef[]
}

export interface ActionInfo {
  type: 'navigate' | 'api' | 'modal' | 'emit' | 'function' | 'csv_export' | 'csv_import' | 'email' | 'sort'
  target?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  description?: string
  params?: Record<string, string>
  csvSpec?: CsvSpec
  emailSpec?: EmailSpec
  sortSpec?: SortInfo
}

export interface FormInfo {
  inputType?: string        // text, number, email, select, textarea, checkbox...
  required?: boolean
  validation?: string[]     // ['max:255', 'email', '必須']
  placeholder?: string
  defaultValue?: string
  description?: string
}

export interface SortInfo {
  sortable: boolean                                     // ソート可能か
  sortType?: 'string' | 'number' | 'date' | 'custom'   // ソートのデータ型
  sortKey?: string                                      // ソートに使うDBカラムやAPIフィールド
  defaultDirection?: 'asc' | 'desc'                     // デフォルトのソート方向
  isDefaultSort?: boolean                               // ページ読み込み時のデフォルトソートか
  unsortedOrder?: string                                // 未ソート時の並び順 (例: "ID昇順", "登録日降順")
  description?: string                                  // ソートに関する補足説明
}

export interface ElementNote {
  text: string
  author?: string
  type?: 'info' | 'warning' | 'todo' | 'question'
  // 表示データの出どころ
  displayType?: 'db_direct' | 'db_formatted' | 'calculated' | 'static' | 'other'
  formatDescription?: string   // db_formatted 時: 整形方法の説明
  calcDescription?: string     // calculated 時: 計算ロジックの説明
  calcSources?: string[]       // calculated 時: 参照テーブル.カラム
  // 共通表示メタ情報
  sampleValue?: string         // サンプル値 (例: "12,500", "田中太郎")
  decimalHandling?: string     // 小数点の扱い (例: "四捨五入", "切り捨て", "小数第2位まで")
  unit?: string                // 単位 (例: "円", "%", "個", "件")
  nullDisplay?: string         // NULL/ゼロ時の表示 (例: "-", "0", "非表示", "N/A")
  displayFormat?: string       // 表示フォーマット (例: "カンマ区切り", "¥記号付き")
  // 保存済み計算値 (db_direct / db_formatted 時)
  storedCalc?: boolean                    // このカラムは計算値を保存しているか
  storedCalcLogic?: string                // 計算ロジック (例: "SUM(order_items.price * quantity)")
  storedCalcSources?: string[]            // 元テーブル.カラム
  storedCalcTiming?: 'on_save' | 'trigger' | 'batch' | 'realtime'  // 計算タイミング
  // 条件付き表示
  condition?: string           // 表示条件の説明 (例: "管理者ロール時のみ", "ステータスがactiveの時")
  conditionColumn?: string     // 判定に使うDBカラム (例: "users.role", "orders.status")
  hiddenBehavior?: 'hidden' | 'disabled' | 'different_value' | 'empty'  // 条件不一致時の挙動
  hiddenNote?: string          // different_value 時: 代わりに表示する値の説明
}

export interface MasterEntry {
  value: string          // '1', 'admin', 'active'
  label: string          // '受付', '管理者', '有効'
  color?: string         // '#3b82f6'
  description?: string   // 説明
}

export interface StateTransition {
  from: string        // マスタ値 (例: "1" = 受付)
  to: string          // マスタ値 (例: "2" = 処理中)
  trigger: string     // トリガー (例: "承認ボタン", "バッチ処理")
  condition?: string  // 条件 (例: "承認者権限が必要")
  description?: string
}

export interface MasterDefinition {
  id: string             // 'orders.status'
  table: string
  column: string
  name: string           // 表示名 (例: 'ステータス')
  columnType?: string    // 'integer', 'varchar'
  description?: string
  entries: MasterEntry[]
  transitions?: StateTransition[]
  updatedAt: string
}

export interface EmailSpec {
  trigger: string             // 送信トリガー (例: "注文確定時", "ボタンクリック")
  to: string                  // 宛先 (例: "ユーザーメール", "管理者固定")
  cc?: string
  bcc?: string
  subject: string             // 件名テンプレート
  bodyTemplate?: string       // 本文テンプレート概要
  templatePath?: string       // テンプレートファイルパス
  variables?: string[]        // 差し込み変数 (例: ["userName", "orderNumber"])
  attachments?: string        // 添付ファイル説明
  conditions?: string         // 送信条件
  errorHandling?: string      // 送信失敗時の処理
}

export interface ChartSeries {
  label: string          // 系列名 (例: "予習", "復習①")
  field: string          // DBカラムやAPIフィールド (例: "preview_count")
  color?: string         // 系列の色
}

export interface ChartSpec {
  chartType: 'bar' | 'line' | 'pie' | 'area' | 'scatter' | 'doughnut' | 'radar' | 'other'
  title?: string          // グラフタイトル
  xAxis?: string          // X軸 (例: "月", "日付")
  yAxis?: string          // Y軸 (例: "件数", "金額")
  series?: ChartSeries[]  // 系列定義
  dataSource?: string     // データ取得元 (例: "GET /api/stats/monthly")
  aggregation?: string    // 集計方法 (例: "月別集計")
  filters?: string        // フィルタ条件
  description?: string    // 説明
}

export interface BatchStep {
  order: number
  description: string          // 処理内容
  target?: string              // 対象テーブル or API
  type?: 'query' | 'api' | 'file' | 'mail' | 'other'
  errorHandling?: string       // エラー時の処理
}

export interface BatchDefinition {
  id: string                   // ユニークID (例: "batch_monthly_report")
  name: string                 // バッチ名 (例: "月次レポート生成")
  schedule?: string            // スケジュール (例: "毎月1日 AM2:00", "cron: 0 2 1 * *")
  trigger?: string             // 手動トリガー (例: "管理画面から実行")
  description?: string
  inputTables?: string[]       // 入力テーブル
  outputTables?: string[]      // 出力テーブル
  steps: BatchStep[]
  timeout?: string             // タイムアウト (例: "30分")
  retryPolicy?: string         // リトライ (例: "3回まで、5分間隔")
  notifyOnError?: string       // エラー通知先
  notifyOnComplete?: string    // 完了通知先
  updatedAt: string
}

export interface LinkInfo {
  testPath?: string
  figmaUrl?: string
  githubIssue?: string
  githubPr?: string
  relatedDocs?: string
}

export interface DevMeta {
  usedStores?: string[]
  usedComponents?: string[]
  i18nKeys?: string[]
  designTokens?: string[]
  accessibility?: string
  responsive?: string
}

export interface ElementConfig {
  id: string
  componentPath: string
  pagePath?: string  // URL pathname this annotation belongs to
  elementType?: 'datasource' | 'action' | 'form' | 'chart'  // 要素の役割
  isConditional?: boolean  // true if element is inside modal/dialog (conditionally rendered)
  modalName?: string        // モーダル名（例: "確認ダイアログ", "ユーザー編集"）
  tabContext?: string       // タブ名（例: "予習", "受講者一覧"）
  fieldInfo?: FieldInfo
  fieldInfoList?: FieldInfo[]  // Multiple DB columns
  actionInfo?: ActionInfo
  formInfo?: FormInfo                               // フォーム固有情報
  chartSpec?: ChartSpec                              // チャート仕様
  note?: ElementNote
  links?: LinkInfo
  devMeta?: DevMeta
  sourceBinding?: SourceBindingInfo
  createdAt: string
  updatedAt: string
}

export interface ScreenSpec {
  name: string
  description: string
  componentPath: string
  figmaUrl?: string
  apis: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    endpoint: string
    description: string
  }[]
  notes?: string[]
}

export interface ScreenConfig {
  path: string                  // URL pathname (key)
  name: string                  // Screen name (e.g., "ユーザー詳細")
  description?: string          // Screen description
  componentPath?: string        // Vue component path
  // API
  apis: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    endpoint: string
    description?: string
    loadTiming?: 'onMount' | 'action' | 'conditional'
  }[]
  // Auth
  auth?: {
    required: boolean
    roles?: string[]
    description?: string
  }
  // Links
  figmaUrl?: string
  // Notes
  notes?: string
  updatedAt: string
}

// Element tags
export type ElementTag = 'db' | 'form' | 'button' | 'link' | 'modal' | 'conditional' | 'computed' | 'api'

export interface AnalyzedElement {
  selector: string
  tags: ElementTag[]  // Multiple tags allowed
  text?: string
  binding?: string
  api?: {
    endpoint: string
    method: string
    description?: string
  }
  db?: {
    table: string
    column: string
    type?: string
  }
  modal?: {
    target?: string
  }
  conditional?: {
    expression: string
  }
  computed?: {
    expression?: string
  }
  component?: string
  line?: number
}

export interface DbColumnSchema {
  name: string
  type: string
  comment: string | null
  nullable: boolean
}

export interface DbTableSchema {
  name: string
  comment: string | null
  columns: Record<string, DbColumnSchema>
}

// Load trigger for API calls
export type LoadTrigger = 'onMount' | 'useFetch' | 'useAsyncData' | 'watch' | 'action' | 'unknown'

export interface ComponentApi {
  endpoint: string
  method: string
  composable: string
  loadTrigger: LoadTrigger
  variable?: string  // Variable that stores the result
  responseType?: string
}

// ===== Cross Search =====
export type CrossSearchMode = 'column' | 'api' | 'text'

export interface CrossSearchResult {
  pagePath: string
  pageName: string
  selector: string
  elementType?: 'datasource' | 'action' | 'form' | 'chart'
  matchedField: string
  matchContext: string
}

// ===== Unannotated Detection =====
export interface UnannotatedElement {
  selector: string
  tagName: string
  category: 'binding' | 'form' | 'action'
  text: string
  suggestedType: 'datasource' | 'action' | 'form'
}

// ===== Screen Flow =====
export interface ScreenFlowNode {
  path: string
  name: string
  annotationCount: number
}

export interface ScreenFlowEdge {
  from: string
  to: string
  label: string
  selector: string
}

// Binding candidate for manual mapping UI
export interface BindingCandidate {
  binding: string
  db?: {
    table: string
    column: string
    type?: string
  }
  api?: {
    endpoint: string
    method: string
  }
  component: string
}

// Schema column option for table.column selector
export interface SchemaColumnOption {
  table: string
  column: string
  type: string
  comment: string | null
  fullName: string // "table.column"
}

export interface ProjectAnalysis {
  projectPath: string
  analyzedAt: string
  components: Record<string, {
    filePath: string
    componentName: string
    elements: AnalyzedElement[]
    apis?: ComponentApi[]  // API calls with load triggers
    usedComponents?: string[]  // Component names used in this file (e.g., ['NotificationList', 'UserCard'])
  }>
  apiMappings: Record<string, {
    endpoint: string
    method: string
    responseFields: { name: string; type: string }[]
  }>
  // DB schema for table.column selector
  dbSchema?: {
    tables: Record<string, DbTableSchema>
  }
}

export interface DevInspectorOptions {
  storageKey?: string
  enabledInProduction?: boolean
  initialAnnotations?: Record<string, ElementConfig>
  analysisData?: ProjectAnalysis
  /** URL to auto-load analysis data from (default: '/dev-inspector-analysis.json') */
  analysisDataUrl?: string
  /** Auto-load analysis data on init (default: true) */
  autoLoadAnalysis?: boolean
  /** Auto-apply analysis to page after loading (default: true) */
  autoApplyAnalysis?: boolean
}

// ===== Store =====
const STORAGE_KEY_DEFAULT = 'devInspector:elementConfigs'
const SCREEN_STORAGE_KEY = 'devInspector:screenConfigs'
const MASTER_STORAGE_KEY = 'devInspector:masterDefinitions'
const BATCH_STORAGE_KEY = 'devInspector:batchDefinitions'

export const useDevInspectorStore = defineStore('devInspector', () => {
  // Options (set via init)
  const options = ref<DevInspectorOptions>({})

  // State
  const isEnabled = ref(false)
  const isEditMode = ref(false)
  const isPickMode = ref(false)
  const isInitializing = ref(false) // Loading state for initial analysis data load
  const currentScreenSpec = ref<ScreenSpec | null>(null)
  const isPanelOpen = ref(false)
  const elementConfigs = ref<Record<string, ElementConfig>>({})
  const editingElementId = ref<string | null>(null)
  const hoveredSelector = ref<string | null>(null)

  // Screen configs (pathname → ScreenConfig)
  const screenConfigs = ref<Record<string, ScreenConfig>>({})
  const editingScreen = ref(false)

  // Master definitions (table.column → MasterDefinition)
  const masterDefinitions = ref<Record<string, MasterDefinition>>({})

  // Batch definitions (id → BatchDefinition)
  const batchDefinitions = ref<Record<string, BatchDefinition>>({})

  // Computed
  const storageKey = computed(() => options.value.storageKey || STORAGE_KEY_DEFAULT)
  // Analysis data (from CLI tool)
  const analysisData = ref<ProjectAnalysis | null>(null)

  // Analysis display filter
  const analysisFilter = ref<'all' | 'db-api' | 'form' | 'button' | 'link' | 'modal' | 'conditional' | 'computed' | 'other' | 'none'>('all')

  // Note highlights visibility
  const showNoteHighlights = ref(true)

  // Note highlight filter by displayType
  const noteHighlightFilter = ref<'all' | 'db' | 'calculated' | 'storedCalc' | 'static' | 'conditional' | 'action' | 'form' | 'other'>('all')

  // Cross Search state
  const showCrossSearch = ref(false)
  const crossSearchQuery = ref('')
  const crossSearchMode = ref<CrossSearchMode>('column')

  // Unannotated Detection state
  const showUnannotatedDetection = ref(false)
  const unannotatedElements = ref<UnannotatedElement[]>([])
  const hoveredUnannotatedSelector = ref<string | null>(null)

  // Screen Flow state
  const showScreenFlow = ref(false)

  // Hidden analysis selectors (persisted to localStorage)
  const hiddenAnalysisSelectors = ref<Set<string>>(new Set())
  const HIDDEN_SELECTORS_KEY = 'devInspector:hiddenAnalysisSelectors'

  const isAvailable = computed(() => {
    if (options.value.enabledInProduction) return true
    // Check for development environment
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.DEV || import.meta.env.VITE_DEV_INSPECTOR_ENABLED === 'true'
    }
    return process.env.NODE_ENV === 'development'
  })

  // Track if analysis has been applied on first enable
  const analysisAppliedOnce = ref(false)

  // Initialize with options
  function init(opts: DevInspectorOptions = {}) {
    options.value = opts
    loadConfigs()
    loadScreenConfigs()
    loadMasterDefinitions()
    loadBatchDefinitions()
    loadHiddenSelectors()

    // Load analysis data if provided directly
    if (opts.analysisData) {
      analysisData.value = opts.analysisData
    }

    // Auto-load analysis data from JSON file in development mode (background, no loading UI)
    const autoLoadUrl = opts.analysisDataUrl ?? '/dev-inspector-analysis.json'
    const shouldAutoLoad = opts.autoLoadAnalysis !== false // Default: true

    if (shouldAutoLoad && isAvailable.value) {
      loadAnalysisData(autoLoadUrl)
    }

  }

  // Load analysis data from JSON file (can be called separately)
  async function loadAnalysisData(url: string): Promise<boolean> {
    try {
      const response = await fetch(url)
      if (response.ok) {
        analysisData.value = await response.json()
        console.log('[DevInspector] Analysis data loaded:', Object.keys(analysisData.value?.components || {}).length, 'components')
        return true
      }
    } catch (e) {
      // Silently fail - analysis data is optional
      console.debug('[DevInspector] Analysis data not found at', url)
    }
    return false
  }

  // Get analyzed element info for a selector
  function getAnalyzedElement(selector: string): AnalyzedElement | null {
    if (!analysisData.value) return null

    for (const component of Object.values(analysisData.value.components)) {
      const element = component.elements.find(e => e.selector === selector)
      if (element) return element
    }

    return null
  }

  // Get all analyzed elements for current page
  function getAnalyzedElementsForPage(componentPath?: string): AnalyzedElement[] {
    if (!analysisData.value) return []

    const results: AnalyzedElement[] = []

    for (const [path, component] of Object.entries(analysisData.value.components)) {
      if (!componentPath || path.includes(componentPath)) {
        results.push(...component.elements)
      }
    }

    return results
  }

  // Load configs from localStorage
  function loadConfigs() {
    try {
      // Load initial annotations if provided
      const initialConfigs = options.value.initialAnnotations || {}

      // Load from localStorage
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(storageKey.value)
        const localConfigs = stored ? JSON.parse(stored) : {}

        // Merge: localStorage takes priority
        elementConfigs.value = { ...initialConfigs, ...localConfigs }
      } else {
        elementConfigs.value = initialConfigs
      }
    } catch (e) {
      console.error('[DevInspector] Failed to load configs:', e)
    }
  }

  // Save configs to localStorage
  function saveConfigs() {
    try {
      if (typeof window !== 'undefined') {
        const data = JSON.stringify(elementConfigs.value)
        localStorage.setItem(storageKey.value, data)
        console.log('[DevInspector] Saved configs:', Object.keys(elementConfigs.value).length, 'items')
      }
    } catch (e) {
      console.error('[DevInspector] Failed to save configs:', e)
    }
  }


  // Watch for changes and save
  watch(elementConfigs, () => {
    nextTick(() => {
      saveConfigs()
    })
  }, { deep: true })

  // Screen configs persistence
  function loadScreenConfigs() {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(SCREEN_STORAGE_KEY)
        if (stored) {
          screenConfigs.value = JSON.parse(stored)
        }
      }
    } catch (e) {
      console.error('[DevInspector] Failed to load screen configs:', e)
    }
  }

  function saveScreenConfigs() {
    try {
      if (typeof window !== 'undefined') {
        const data = JSON.stringify(screenConfigs.value)
        localStorage.setItem(SCREEN_STORAGE_KEY, data)
      }
    } catch (e) {
      console.error('[DevInspector] Failed to save screen configs:', e)
    }
  }

  watch(screenConfigs, () => {
    nextTick(() => {
      saveScreenConfigs()
    })
  }, { deep: true })

  function getScreenConfig(path?: string): ScreenConfig | undefined {
    const p = path || (typeof window !== 'undefined' ? window.location.pathname : '/')
    return screenConfigs.value[p]
  }

  function setScreenConfig(config: ScreenConfig) {
    screenConfigs.value = {
      ...screenConfigs.value,
      [config.path]: config,
    }
    nextTick(() => saveScreenConfigs())
  }

  function deleteScreenConfig(path: string) {
    const { [path]: _, ...rest } = screenConfigs.value
    screenConfigs.value = rest
    nextTick(() => saveScreenConfigs())
  }

  // ===== Master Definitions =====
  function loadMasterDefinitions() {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(MASTER_STORAGE_KEY)
        if (stored) {
          masterDefinitions.value = JSON.parse(stored)
        }
      }
    } catch (e) {
      console.error('[DevInspector] Failed to load master definitions:', e)
    }
  }

  function saveMasterDefinitions() {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(MASTER_STORAGE_KEY, JSON.stringify(masterDefinitions.value))
      }
    } catch (e) {
      console.error('[DevInspector] Failed to save master definitions:', e)
    }
  }

  watch(masterDefinitions, () => {
    nextTick(() => {
      saveMasterDefinitions()
    })
  }, { deep: true })

  function getMasterDefinition(tableColumn: string): MasterDefinition | undefined {
    return masterDefinitions.value[tableColumn]
  }

  function setMasterDefinition(def: MasterDefinition) {
    masterDefinitions.value = {
      ...masterDefinitions.value,
      [def.id]: { ...def, updatedAt: new Date().toISOString() },
    }
    nextTick(() => saveMasterDefinitions())
  }

  function deleteMasterDefinition(id: string) {
    const { [id]: _, ...rest } = masterDefinitions.value
    masterDefinitions.value = rest
    nextTick(() => saveMasterDefinitions())
  }

  // Get all masters for a specific table
  function getMastersForTable(table: string): MasterDefinition[] {
    return Object.values(masterDefinitions.value).filter(m => m.table === table)
  }

  // Get master entries for a table.column (shortcut for displaying in UI)
  function getMasterEntries(tableColumn: string): MasterEntry[] {
    return masterDefinitions.value[tableColumn]?.entries || []
  }

  // ===== Batch Definitions =====
  function loadBatchDefinitions() {
    try {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem(BATCH_STORAGE_KEY)
        if (stored) {
          batchDefinitions.value = JSON.parse(stored)
        }
      }
    } catch (e) {
      console.error('[DevInspector] Failed to load batch definitions:', e)
    }
  }

  function saveBatchDefinitions() {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(BATCH_STORAGE_KEY, JSON.stringify(batchDefinitions.value))
      }
    } catch (e) {
      console.error('[DevInspector] Failed to save batch definitions:', e)
    }
  }

  watch(batchDefinitions, () => {
    nextTick(() => {
      saveBatchDefinitions()
    })
  }, { deep: true })

  function getBatchDefinition(id: string): BatchDefinition | undefined {
    return batchDefinitions.value[id]
  }

  function setBatchDefinition(def: BatchDefinition) {
    batchDefinitions.value = {
      ...batchDefinitions.value,
      [def.id]: { ...def, updatedAt: new Date().toISOString() },
    }
    nextTick(() => saveBatchDefinitions())
  }

  function deleteBatchDefinition(id: string) {
    const { [id]: _, ...rest } = batchDefinitions.value
    batchDefinitions.value = rest
    nextTick(() => saveBatchDefinitions())
  }

  // Suggest APIs based on element annotations + analysis data
  function suggestScreenApis(): ScreenConfig['apis'] {
    const suggestions: ScreenConfig['apis'] = []
    const seenEndpoints = new Set<string>()

    // 1. Analyze element configs — group by table, detect read vs write
    const tableUsage: Record<string, { read: boolean; write: boolean; isList: boolean }> = {}

    for (const config of Object.values(elementConfigs.value)) {
      const fields = config.fieldInfoList || (config.fieldInfo ? [config.fieldInfo] : [])
      const isFormElement = config.sourceBinding?.type === 'v-model'

      for (const field of fields) {
        if (!field.table) continue
        if (!tableUsage[field.table]) {
          tableUsage[field.table] = { read: false, write: false, isList: false }
        }
        tableUsage[field.table].read = true
        if (isFormElement) {
          tableUsage[field.table].write = true
        }
      }

      // Check if list context (multiple rows of same table → list API)
      if (config.note?.displayType === 'db_direct' || config.note?.displayType === 'db_formatted') {
        for (const field of fields) {
          if (field.table && tableUsage[field.table]) {
            // Heuristic: if selector contains tbody/tr/td, it's a list
            if (config.id.includes('tbody') || config.id.includes(' tr') || config.id.includes(' td')) {
              tableUsage[field.table].isList = true
            }
          }
        }
      }

      // Direct API actions from element annotations
      if (config.actionInfo?.type === 'api' && config.actionInfo.target) {
        const key = `${config.actionInfo.method || 'GET'}:${config.actionInfo.target}`
        if (!seenEndpoints.has(key)) {
          seenEndpoints.add(key)
          suggestions.push({
            method: config.actionInfo.method || 'GET',
            endpoint: config.actionInfo.target,
            description: config.actionInfo.description || '',
            loadTiming: 'action',
          })
        }
      }
    }

    // 2. Generate API suggestions from table usage
    for (const [table, usage] of Object.entries(tableUsage)) {
      if (usage.read) {
        const endpoint = usage.isList ? `/api/${table}` : `/api/${table}/:id`
        const key = `GET:${endpoint}`
        if (!seenEndpoints.has(key)) {
          seenEndpoints.add(key)
          suggestions.push({
            method: 'GET',
            endpoint,
            description: usage.isList ? `${table} 一覧取得` : `${table} 詳細取得`,
            loadTiming: 'onMount',
          })
        }
      }

      if (usage.write) {
        // Suggest both POST (create) and PUT (update) — user can remove unwanted
        const putEndpoint = `/api/${table}/:id`
        const putKey = `PUT:${putEndpoint}`
        if (!seenEndpoints.has(putKey)) {
          seenEndpoints.add(putKey)
          suggestions.push({
            method: 'PUT',
            endpoint: putEndpoint,
            description: `${table} 更新`,
            loadTiming: 'action',
          })
        }
      }
    }

    // 3. Merge analysis data APIs for matching page components
    if (analysisData.value?.components) {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

      for (const [componentPath, component] of Object.entries(analysisData.value.components)) {
        // Match page components by path pattern
        const pagePath = componentPath
          .replace(/^pages/, '')
          .replace(/\.vue$/, '')
          .replace(/\/index$/, '')
          .replace(/\[.*?\]/g, '[^/]+')

        let isMatch = false
        if (currentPath === '/' && componentPath.includes('index')) {
          isMatch = true
        } else if (componentPath.includes('pages/')) {
          try {
            isMatch = !!currentPath.match(new RegExp(`^${pagePath}$`))
          } catch { /* invalid regex */ }
        }

        if (isMatch && component.apis) {
          for (const api of component.apis) {
            if (!api.endpoint) continue
            const key = `${api.method}:${api.endpoint}`
            if (!seenEndpoints.has(key)) {
              seenEndpoints.add(key)
              suggestions.push({
                method: api.method as ScreenConfig['apis'][0]['method'],
                endpoint: api.endpoint,
                description: api.variable ? `→ ${api.variable}` : '',
                loadTiming: ['onMount', 'useFetch', 'useAsyncData'].includes(api.loadTrigger) ? 'onMount' : 'action',
              })
            }
          }
        }
      }
    }

    return suggestions
  }

  // ===== Cross Search =====
  const crossSearchResults = computed<CrossSearchResult[]>(() => {
    const query = crossSearchQuery.value.trim().toLowerCase()
    if (!query) return []

    const mode = crossSearchMode.value
    const results: CrossSearchResult[] = []

    for (const [id, config] of Object.entries(elementConfigs.value)) {
      const pagePath = config.pagePath || '/'
      const screenCfg = screenConfigs.value[pagePath]
      const pageName = screenCfg?.name || pagePath

      if (mode === 'column') {
        // Search fieldInfo/fieldInfoList/calcSources/storedCalcSources
        const fields = config.fieldInfoList?.length ? config.fieldInfoList : (config.fieldInfo ? [config.fieldInfo] : [])
        for (const field of fields) {
          const fullName = `${field.table}.${field.column}`.toLowerCase()
          if (fullName.includes(query) || field.table.toLowerCase().includes(query) || field.column.toLowerCase().includes(query)) {
            results.push({
              pagePath,
              pageName,
              selector: id,
              elementType: config.elementType,
              matchedField: `${field.table}.${field.column}`,
              matchContext: `${field.type || ''} ${field.description || ''}`.trim(),
            })
          }
        }
        // Also search calcSources and storedCalcSources
        const calcSources = config.note?.calcSources || []
        const storedCalcSources = config.note?.storedCalcSources || []
        for (const src of [...calcSources, ...storedCalcSources]) {
          if (src.toLowerCase().includes(query)) {
            results.push({
              pagePath,
              pageName,
              selector: id,
              elementType: config.elementType,
              matchedField: src,
              matchContext: config.note?.calcDescription || config.note?.storedCalcLogic || '参照元',
            })
          }
        }
      } else if (mode === 'api') {
        // Search actionInfo.target + screenConfigs apis
        if (config.actionInfo?.target?.toLowerCase().includes(query)) {
          results.push({
            pagePath,
            pageName,
            selector: id,
            elementType: config.elementType,
            matchedField: `${config.actionInfo.method || ''} ${config.actionInfo.target}`.trim(),
            matchContext: config.actionInfo.description || config.actionInfo.type,
          })
        }
      } else if (mode === 'text') {
        // Search note.text, description, selector, etc.
        const searchTargets = [
          config.note?.text,
          config.note?.calcDescription,
          config.note?.formatDescription,
          config.note?.condition,
          config.actionInfo?.description,
          config.formInfo?.description,
          id, // selector itself
        ].filter(Boolean) as string[]

        for (const target of searchTargets) {
          if (target.toLowerCase().includes(query)) {
            results.push({
              pagePath,
              pageName,
              selector: id,
              elementType: config.elementType,
              matchedField: target.substring(0, 60),
              matchContext: config.note?.text?.substring(0, 40) || '',
            })
            break // Only one match per element in text mode
          }
        }
      }
    }

    // Also search screen config APIs in api mode
    if (mode === 'api') {
      for (const [path, sc] of Object.entries(screenConfigs.value)) {
        for (const api of sc.apis || []) {
          if (api.endpoint.toLowerCase().includes(query)) {
            results.push({
              pagePath: path,
              pageName: sc.name || path,
              selector: '',
              elementType: undefined,
              matchedField: `${api.method} ${api.endpoint}`,
              matchContext: api.description || '画面API',
            })
          }
        }
      }
    }

    return results
  })

  // ===== Unannotated Detection =====
  function detectUnannotatedElements(): UnannotatedElement[] {
    if (typeof document === 'undefined') return []

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    const configuredSelectors = new Set<string>()

    // Collect all configured selectors for the current page
    for (const [id, config] of Object.entries(elementConfigs.value)) {
      if (!config.pagePath || config.pagePath === currentPath) {
        configuredSelectors.add(id)
      }
    }

    // Resolve configured selectors to DOM elements for ancestor check
    const configuredElements = new Set<Element>()
    for (const sel of configuredSelectors) {
      try {
        const el = document.querySelector(sel)
        if (el) configuredElements.add(el)
      } catch { /* invalid selector */ }
    }

    const detected: UnannotatedElement[] = []
    const seenSelectors = new Set<string>()
    const seenBindings = new Set<string>()
    const detectedElements = new Set<Element>() // Track DOM elements for nesting check

    function isAlreadySeen(element: HTMLElement): boolean {
      if (element.closest('[data-dev-inspector]')) return true
      const selector = generateSelector(element)
      if (configuredSelectors.has(selector) || seenSelectors.has(selector)) return true
      // Check if this element is a child of any configured (annotated) element
      for (const configured of configuredElements) {
        if (configured.contains(element) && configured !== element) return true
      }
      return false
    }

    function addDetected(element: HTMLElement, category: UnannotatedElement['category'], text: string, suggestedType: UnannotatedElement['suggestedType']) {
      const selector = generateSelector(element)
      seenSelectors.add(selector)
      detectedElements.add(element)
      detected.push({ selector, tagName: element.tagName.toLowerCase(), category, text: text.substring(0, 50), suggestedType })
    }

    // 1. data-di-binding elements → datasource
    // Deduplicate by binding value to avoid v-for duplicates
    document.querySelectorAll('[data-di-binding]').forEach((el) => {
      const element = el as HTMLElement
      if (element.closest('[data-dev-inspector]')) return
      const bindingValue = element.getAttribute('data-di-binding') || ''
      if (seenBindings.has(bindingValue)) return
      if (isAlreadySeen(element)) return
      seenBindings.add(bindingValue)
      addDetected(element, 'binding', element.textContent?.trim() || '', 'datasource')
    })

    // 2. Table first-row cells → datasource
    // Detect <td> cells in the first data row, using <th> headers as labels
    document.querySelectorAll('table').forEach((table) => {
      if (table.closest('[data-dev-inspector]')) return
      const style = window.getComputedStyle(table)
      if (style.display === 'none' || style.visibility === 'hidden') return

      // Get headers
      const headers: string[] = []
      table.querySelectorAll('thead th, thead td').forEach((th) => {
        headers.push(th.textContent?.trim() || '')
      })
      // Fallback: first tr if no thead
      if (headers.length === 0) {
        const firstRow = table.querySelector('tr')
        if (firstRow) {
          firstRow.querySelectorAll('th, td').forEach((cell) => {
            headers.push(cell.textContent?.trim() || '')
          })
        }
      }

      // Get first data row
      const dataRow = table.querySelector('tbody tr') || table.querySelectorAll('tr')[headers.length > 0 ? 1 : 0]
      if (!dataRow) return

      const cells = dataRow.querySelectorAll('td')
      cells.forEach((cell, i) => {
        const td = cell as HTMLElement
        const text = td.textContent?.trim() || ''
        if (!text) return
        // Skip if already covered by data-di-binding detection
        if (td.querySelector('[data-di-binding]')) return
        if (isAlreadySeen(td)) return
        const headerName = headers[i] || `列${i + 1}`
        addDetected(td, 'binding', `${headerName}: ${text}`, 'datasource')
      })
    })

    // 3. input, select, textarea (exclude hidden) → form
    document.querySelectorAll('input, select, textarea').forEach((el) => {
      const element = el as HTMLInputElement
      if (element.closest('[data-dev-inspector]')) return
      if (element.type === 'hidden') return
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden') return
      if (isAlreadySeen(element)) return
      const label = element.closest('label')?.textContent?.trim() ||
        element.getAttribute('aria-label') ||
        element.placeholder || element.name || element.tagName.toLowerCase()
      addDetected(element, 'form', label || '', 'form')
    })

    // 4. button, a[href], [role="button"] (exclude empty text) → action
    // For buttons inside table rows, only detect from the first data row
    const tableFirstRows = new Set<Element>()
    document.querySelectorAll('table').forEach((table) => {
      const firstRow = table.querySelector('tbody tr') || table.querySelectorAll('tr')[1]
      if (firstRow) tableFirstRows.add(firstRow)
    })

    document.querySelectorAll('button, a[href], [role="button"]').forEach((el) => {
      const element = el as HTMLElement
      if (element.closest('[data-dev-inspector]')) return
      const text = element.textContent?.trim() || ''
      if (!text) return
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden') return
      // Skip if inside a table row that is NOT the first data row
      const parentRow = element.closest('tr')
      if (parentRow) {
        const parentTable = parentRow.closest('table')
        if (parentTable) {
          const firstRow = tableFirstRows.has(parentRow)
          if (!firstRow) return
        }
      }
      if (isAlreadySeen(element)) return
      addDetected(element, 'action', text, 'action')
    })

    // 5. Remove nested: if a detected element is inside another detected element, drop the inner one
    const filteredDetected = detected.filter((entry) => {
      try {
        const el = document.querySelector(entry.selector)
        if (!el) return true
        for (const other of detectedElements) {
          if (other !== el && other.contains(el)) {
            return false // This element is a child of another detected element
          }
        }
        return true
      } catch {
        return true
      }
    })

    unannotatedElements.value = filteredDetected
    return filteredDetected
  }

  function quickAnnotate(selector: string, suggestedType: 'datasource' | 'action' | 'form') {
    const config: Partial<ElementConfig> = {
      elementType: suggestedType,
      pagePath: typeof window !== 'undefined' ? window.location.pathname : '/',
      note: { text: '', type: 'todo' },
    }

    if (suggestedType === 'action') {
      config.actionInfo = { type: 'function', description: '' }
    } else if (suggestedType === 'form') {
      config.formInfo = { inputType: 'text' }
    }

    setElementConfig(selector, config)
    // Open editor for this element
    editingElementId.value = selector
    // Remove from unannotated list
    unannotatedElements.value = unannotatedElements.value.filter(e => e.selector !== selector)
  }

  // ===== Screen Flow =====
  const screenFlowData = computed(() => {
    const nodesMap = new Map<string, ScreenFlowNode>()
    const edges: ScreenFlowEdge[] = []
    const edgeSet = new Set<string>()

    // Build nodes from screenConfigs
    for (const [path, sc] of Object.entries(screenConfigs.value)) {
      nodesMap.set(path, {
        path,
        name: sc.name || path,
        annotationCount: Object.values(elementConfigs.value).filter(c => c.pagePath === path).length,
      })
    }

    // Build edges from navigate-type actions
    for (const [id, config] of Object.entries(elementConfigs.value)) {
      if (config.actionInfo?.type === 'navigate' && config.actionInfo.target) {
        const fromPath = config.pagePath || '/'
        const toPath = config.actionInfo.target
        const edgeKey = `${fromPath}→${toPath}`

        // Ensure from node exists
        if (!nodesMap.has(fromPath)) {
          const sc = screenConfigs.value[fromPath]
          nodesMap.set(fromPath, {
            path: fromPath,
            name: sc?.name || fromPath,
            annotationCount: Object.values(elementConfigs.value).filter(c => c.pagePath === fromPath).length,
          })
        }

        // Ensure to node exists
        if (!nodesMap.has(toPath)) {
          const sc = screenConfigs.value[toPath]
          nodesMap.set(toPath, {
            path: toPath,
            name: sc?.name || toPath,
            annotationCount: Object.values(elementConfigs.value).filter(c => c.pagePath === toPath).length,
          })
        }

        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey)
          // Extract button text from the element for the label
          let label = config.actionInfo.description || config.note?.text || ''
          if (!label && typeof document !== 'undefined') {
            try {
              const el = document.querySelector(id) as HTMLElement | null
              if (el) label = el.textContent?.trim()?.substring(0, 20) || ''
            } catch { /* ignore */ }
          }
          edges.push({
            from: fromPath,
            to: toPath,
            label,
            selector: id,
          })
        }
      }
    }

    const nodes = Array.from(nodesMap.values())

    // Find orphan pages (pages with no incoming or outgoing edges)
    const connectedPaths = new Set<string>()
    for (const edge of edges) {
      connectedPaths.add(edge.from)
      connectedPaths.add(edge.to)
    }
    const orphanPages = nodes.filter(n => !connectedPaths.has(n.path))

    return { nodes, edges, orphanPages }
  })

  // ===== Actions =====
  async function toggle() {
    if (!isAvailable.value) return
    if (isEnabled.value) {
      // Disabling
      isEnabled.value = false
      isEditMode.value = false
      editingElementId.value = null
    } else {
      // Enabling - show loading and apply analysis
      await enable()
    }
  }

  async function enable() {
    if (!isAvailable.value) return

    // Show loading on first enable if we have analysis data
    const shouldApplyAnalysis = analysisData.value &&
                                 !analysisAppliedOnce.value &&
                                 options.value.autoApplyAnalysis !== false

    if (shouldApplyAnalysis) {
      isInitializing.value = true
      isEnabled.value = true
      try {
        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 300))
        applyAnalysisToPage()
        analysisAppliedOnce.value = true
      } finally {
        isInitializing.value = false
      }
    } else {
      isEnabled.value = true
    }
  }

  function disable() {
    isEnabled.value = false
    isEditMode.value = false
    editingElementId.value = null
  }

  function toggleEditMode() {
    isEditMode.value = !isEditMode.value
    if (!isEditMode.value) {
      editingElementId.value = null
    }
    if (isEditMode.value) {
      isPickMode.value = false
    }
  }

  function togglePickMode() {
    isPickMode.value = !isPickMode.value
    if (isPickMode.value) {
      isEditMode.value = false
    }
    hoveredSelector.value = null
  }

  function setHoveredSelector(selector: string | null) {
    hoveredSelector.value = selector
  }

  // Generate a unique selector for an element
  function generateSelector(element: HTMLElement): string {
    if (element.id) {
      return `#${element.id}`
    }

    if (element.dataset.devId) {
      return `[data-dev-id="${element.dataset.devId}"]`
    }

    const path: string[] = []
    let current: HTMLElement | null = element

    while (current && current !== document.body) {
      let selector = current.tagName.toLowerCase()

      if (current.id) {
        selector = `#${current.id}`
        path.unshift(selector)
        break
      }

      const classes = Array.from(current.classList)
        .filter(c =>
          !c.startsWith('hover:') &&
          !c.startsWith('focus:') &&
          !c.startsWith('-') &&
          !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?.~]/.test(c)
        )
        .slice(0, 2)
      if (classes.length > 0) {
        selector += '.' + classes.join('.')
      }

      const parent = current.parentElement
      if (parent) {
        const siblings = Array.from(parent.children).filter(
          c => c.tagName === current!.tagName
        )
        if (siblings.length > 1) {
          const index = siblings.indexOf(current) + 1
          selector += `:nth-of-type(${index})`
        }
      }

      path.unshift(selector)
      current = current.parentElement
    }

    return path.join(' > ')
  }

  function getConfiguredSelectors(): string[] {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    return Object.keys(elementConfigs.value).filter(id => {
      const config = elementConfigs.value[id]
      if (!config) return false
      return (id.includes('>') || id.startsWith('#') || id.startsWith('[') || id.startsWith('.')) &&
        (!config.componentPath || config.componentPath.includes(currentPath) || currentPath === '/')
    })
  }

  function setScreenSpec(spec: ScreenSpec) {
    currentScreenSpec.value = spec
  }

  function clearScreenSpec() {
    currentScreenSpec.value = null
  }

  function togglePanel() {
    if (isPanelOpen.value) {
      closePanel()
    } else {
      openPanel()
    }
  }

  function triggerLayoutRecalc() {
    // Fire multiple times during transition for smooth highlight tracking
    const times = [0, 50, 100, 150, 200, 250, 320]
    times.forEach(t => setTimeout(() => window.dispatchEvent(new Event('resize')), t))
  }

  function openPanel() {
    isPanelOpen.value = true
    if (typeof document !== 'undefined') {
      document.body.style.transition = 'margin-right 0.3s ease'
      document.body.style.marginRight = '360px'
      triggerLayoutRecalc()
    }
  }

  function closePanel() {
    isPanelOpen.value = false
    if (typeof document !== 'undefined') {
      document.body.style.transition = 'margin-right 0.3s ease'
      document.body.style.marginRight = ''
      triggerLayoutRecalc()
    }
  }

  // Element config management
  function getElementConfig(id: string): ElementConfig | undefined {
    return elementConfigs.value[id]
  }

  // Detect if an element is inside a modal/dialog container
  function isInsideConditionalContainer(selector: string): boolean {
    if (typeof document === 'undefined') return false
    try {
      const el = document.querySelector(selector)
      if (!el) return false
      let parent = el.parentElement
      while (parent && parent !== document.body) {
        // Check for dialog element
        if (parent.tagName === 'DIALOG') return true
        // Check for role="dialog" or role="alertdialog"
        const role = parent.getAttribute('role')
        if (role === 'dialog' || role === 'alertdialog') return true
        // Check for common modal class patterns
        const cls = parent.className || ''
        if (typeof cls === 'string' && /\b(modal|dialog|v-dialog|el-dialog|v-overlay|drawer)\b/i.test(cls)) return true
        // Check for Vue teleport target (commonly used for modals)
        if (parent.id === 'teleported' || parent.hasAttribute('data-teleport')) return true
        // Check for fixed full-screen overlay (Tailwind pattern: fixed inset-0 z-50)
        if (typeof cls === 'string') {
          const style = window.getComputedStyle(parent)
          if (style.position === 'fixed') {
            const z = parseInt(style.zIndex, 10)
            if (!isNaN(z) && z >= 40) {
              const rect = parent.getBoundingClientRect()
              if (rect.width >= window.innerWidth * 0.9 && rect.height >= window.innerHeight * 0.9) {
                return true
              }
            }
          }
        }
        parent = parent.parentElement
      }
    } catch { /* invalid selector */ }
    return false
  }

  /** Try to detect the modal title from the closest modal container */
  function detectModalName(selector: string): string | undefined {
    if (typeof document === 'undefined') return undefined
    try {
      const el = document.querySelector(selector)
      if (!el) return undefined
      // Collect all modal layers from inner to outer
      const layers: string[] = []
      let parent = el.parentElement
      while (parent && parent !== document.body) {
        const role = parent.getAttribute('role')
        const cls = parent.className || ''
        const isModal = parent.tagName === 'DIALOG'
          || role === 'dialog' || role === 'alertdialog'
          || (typeof cls === 'string' && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(cls))
        if (isModal) {
          // Look for heading or title inside this modal (direct children area, not nested modals)
          const heading = findModalHeading(parent)
          if (heading) {
            layers.push(heading)
          }
        }
        parent = parent.parentElement
      }
      if (layers.length === 0) return undefined
      // Reverse: outer > inner order
      layers.reverse()
      return layers.join(' > ')
    } catch { /* invalid selector */ }
    return undefined
  }

  /** Find heading text for a modal container, avoiding text from nested modals */
  function findModalHeading(modalEl: Element): string | undefined {
    const candidates = modalEl.querySelectorAll('h1, h2, h3, h4, [class*="title"], [class*="header"] h1, [class*="header"] h2, [class*="header"] h3, [class*="header"] span')
    for (const heading of candidates) {
      // Skip if this heading is inside a nested modal
      let p = heading.parentElement
      let insideNested = false
      while (p && p !== modalEl) {
        const r = p.getAttribute('role')
        const c = p.className || ''
        if (p.tagName === 'DIALOG' || r === 'dialog' || r === 'alertdialog'
          || (typeof c === 'string' && /\b(modal|dialog|v-dialog|el-dialog|drawer)\b/i.test(c))) {
          insideNested = true
          break
        }
        p = p.parentElement
      }
      if (insideNested) continue
      const text = heading.textContent?.trim()
      if (text && text.length <= 30) return text
    }
    return undefined
  }

  /** Determine if a button looks "active" compared to its siblings */
  function isActiveTab(btn: HTMLElement, allBtns: HTMLElement[]): boolean {
    if (btn.getAttribute('aria-selected') === 'true') return true
    if (btn.classList.contains('active') || btn.classList.contains('is-active')) return true
    const cls = btn.className || ''
    // border-t or border-b (active tab indicator)
    if (/border-[tb]-[2-9]/.test(cls)) return true
    // Colored background (primary/blue etc)
    if (/\b(bg-blue|bg-primary|bg-indigo)\b/.test(cls)) return true
    // text-white usually = active on colored bg
    if (/\btext-white\b/.test(cls) && allBtns.some(s => s !== btn && !/\btext-white\b/.test(s.className || ''))) return true
    // bg-white/bg-surface without inset shadow, when siblings differ
    if (/\b(bg-white|bg-surface)\b/.test(cls) && !/shadow-inset|shadow-\[inset/.test(cls)) {
      if (allBtns.some(s => s !== btn && !/\b(bg-white|bg-surface)\b/.test(s.className || ''))) return true
    }
    return false
  }

  /** Try to find a tab group in candidate element, return active tab text */
  function findActiveTabIn(candidate: Element): string | undefined {
    const buttons = [...candidate.querySelectorAll(':scope > button, :scope > a, :scope > [role="tab"]')] as HTMLElement[]
    if (buttons.length < 2 || buttons.length > 12) return undefined
    for (const btn of buttons) {
      if (isActiveTab(btn, buttons)) {
        const text = btn.textContent?.trim()
        if (text && text.length <= 30) return text
      }
    }
    return undefined
  }

  /** Search an element and its direct children for a tab button group, return active tab text */
  function findTabInElement(candidate: Element): string | undefined {
    let activeText = findActiveTabIn(candidate)
    if (activeText) return activeText
    // Check direct children (the tab bar might be wrapped in a div)
    for (const child of candidate.children) {
      activeText = findActiveTabIn(child)
      if (activeText) return activeText
    }
    return undefined
  }

  /** Try to detect the tab context by finding all tab layers from inner to outer */
  function detectTabContext(selector: string): string | undefined {
    if (typeof document === 'undefined') return undefined
    try {
      const el = document.querySelector(selector)
      if (!el) return undefined
      const layers: string[] = []
      const checkedContainers = new Set<Element>()
      let parent = el.parentElement
      while (parent && parent !== document.body) {
        // Walk ALL previous siblings (tab bar may not be the immediate prev sibling)
        let prevSib = parent.previousElementSibling
        while (prevSib) {
          if (!checkedContainers.has(prevSib)) {
            checkedContainers.add(prevSib)
            const activeText = findTabInElement(prevSib)
            if (activeText) {
              layers.push(activeText)
              break // found tab at this level, move to parent
            }
          }
          prevSib = prevSib.previousElementSibling
        }
        parent = parent.parentElement
      }
      if (layers.length === 0) return undefined
      // Reverse: outer first
      layers.reverse()
      return layers.join(' > ')
    } catch { /* invalid selector */ }
    return undefined
  }

  function setElementConfig(id: string, config: Partial<ElementConfig>) {
    const now = new Date().toISOString()
    const existing = elementConfigs.value[id]

    const currentPage = typeof window !== 'undefined' ? window.location.pathname : '/'

    // Auto-detect if element is inside a modal/dialog
    const isConditional = config.isConditional ?? existing?.isConditional ?? isInsideConditionalContainer(id)

    const modalName = 'modalName' in config ? config.modalName : existing?.modalName
    const tabContext = 'tabContext' in config ? config.tabContext : existing?.tabContext
    const chartSpec = 'chartSpec' in config ? config.chartSpec : existing?.chartSpec

    const newConfig: ElementConfig = {
      ...existing,
      ...config,
      id,
      isConditional,
      modalName,
      tabContext,
      chartSpec,
      pagePath: config.pagePath || existing?.pagePath || currentPage,
      componentPath: config.componentPath || currentScreenSpec.value?.componentPath || '',
      createdAt: existing?.createdAt || now,
      updatedAt: now,
    }

    // Create new object to ensure reactivity triggers
    elementConfigs.value = {
      ...elementConfigs.value,
      [id]: newConfig,
    }

    // Force immediate save
    nextTick(() => saveConfigs())
  }

  function deleteElementConfig(id: string) {
    // Create new object without the deleted key to ensure reactivity
    const { [id]: _, ...rest } = elementConfigs.value
    elementConfigs.value = rest

    // Force immediate save
    nextTick(() => saveConfigs())
  }

  // Auto-detect source binding for an element
  function detectSourceBinding(element: HTMLElement): SourceBindingInfo | null {
    const textContent = element.textContent?.trim() || ''
    const tagName = element.tagName.toUpperCase()

    // Skip empty elements
    if (!textContent && tagName !== 'INPUT' && tagName !== 'SELECT' && tagName !== 'TEXTAREA') {
      return null
    }

    // Check if element has v-model (via Vue's internal data)
    const vueInstance = (element as any).__vueParentComponent
    if (vueInstance) {
      const props = vueInstance.props || {}
      const attrs = vueInstance.attrs || {}

      // Check for modelValue (v-model)
      if ('modelValue' in props || 'model-value' in attrs) {
        return {
          type: 'v-model',
          source: 'form binding detected',
          isStatic: false,
        }
      }
    }

    // Form elements are typically bound to data
    if (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
      const inputType = (element as HTMLInputElement).type || 'text'
      const placeholder = (element as HTMLInputElement).placeholder || ''
      return {
        type: 'v-model',
        source: `${tagName.toLowerCase()}[type=${inputType}]${placeholder ? ` placeholder="${placeholder}"` : ''}`,
        isStatic: false,
      }
    }

    // Check for data attributes that might indicate binding
    const dataSource = element.dataset.source || element.dataset.field || element.dataset.bind
    if (dataSource) {
      return {
        type: 'prop',
        source: dataSource,
        isStatic: false,
      }
    }

    // ============ DYNAMIC DATA DETECTION (more aggressive) ============

    // Check if inside a table body - table data is almost always dynamic
    if (element.closest('tbody') || element.closest('[role="rowgroup"]')) {
      return {
        type: 'data',
        source: 'table data',
        isStatic: false,
      }
    }

    // Check if inside a list that looks like it's rendering data
    const listParent = element.closest('ul, ol, [role="list"]')
    if (listParent && listParent.children.length > 1) {
      return {
        type: 'data',
        source: 'list item',
        isStatic: false,
      }
    }

    // Check if inside common dynamic containers
    const dynamicContainers = [
      '[class*="card"]', '[class*="Card"]',
      '[class*="item"]', '[class*="Item"]',
      '[class*="row"]', '[class*="Row"]',
      '[class*="list"]', '[class*="List"]',
      '[class*="grid"]', '[class*="Grid"]',
      '[role="listitem"]', '[role="row"]', '[role="gridcell"]',
    ]
    for (const selector of dynamicContainers) {
      const container = element.closest(selector)
      if (container) {
        // Check if this container has siblings with same class (indicating a loop)
        const parent = container.parentElement
        if (parent) {
          const similarSiblings = Array.from(parent.children).filter(c =>
            c !== container && c.className === container.className
          )
          if (similarSiblings.length > 0) {
            return {
              type: 'data',
              source: 'repeated container',
              isStatic: false,
            }
          }
        }
      }
    }

    // Check if inside a v-for loop (likely dynamic)
    const isInLoop = element.closest('[v-for]') !== null ||
      element.closest('[data-v-for]') !== null

    if (isInLoop) {
      return {
        type: 'data',
        source: 'loop item',
        isStatic: false,
      }
    }

    // Check parent for repeated similar siblings (strong indicator of loop)
    if (element.parentElement) {
      const parent = element.parentElement
      const siblings = Array.from(parent.children)
      const sameTags = siblings.filter(c => c.tagName === element.tagName)

      // If there are 2+ siblings with same tag and similar structure, it's likely a loop
      if (sameTags.length >= 2) {
        const sameStructure = sameTags.filter(c =>
          c.children.length === element.children.length
        )
        if (sameStructure.length >= 2) {
          return {
            type: 'data',
            source: 'repeated element',
            isStatic: false,
          }
        }
      }
    }

    // Check if text looks like dynamic data patterns
    const dynamicPatterns = [
      /^\d+$/, // Just numbers (likely IDs or counts)
      /^\d{4}[-/]\d{1,2}[-/]\d{1,2}/, // Dates
      /^\d{1,2}:\d{2}/, // Times
      /^¥[\d,]+/, // Currency
      /^\$[\d,]+/, // Currency USD
      /^[\d,]+円$/, // Japanese currency
      /^[a-f0-9]{8}-[a-f0-9]{4}/, // UUIDs
      /^[A-Z0-9]{6,}$/, // IDs/codes
      /^\d+\.\d+$/, // Decimal numbers
      /^https?:\/\//, // URLs
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Emails
      /^\d+件$/, // Japanese count
      /^\d+個$/, // Japanese count
      /^第?\d+/, // Numbered items
    ]

    for (const pattern of dynamicPatterns) {
      if (pattern.test(textContent)) {
        return {
          type: 'data',
          source: 'dynamic data pattern',
          isStatic: false,
        }
      }
    }

    // Check if content looks like a name (likely from DB)
    // Names often have specific patterns: 2-4 characters for Japanese, or First Last for English
    const namePatterns = [
      /^[\u4e00-\u9faf]{2,4}$/, // Japanese Kanji names (2-4 chars)
      /^[\u3040-\u309f\u30a0-\u30ff]{2,6}$/, // Hiragana/Katakana names
      /^[A-Z][a-z]+ [A-Z][a-z]+$/, // English names like "John Smith"
    ]
    for (const pattern of namePatterns) {
      if (pattern.test(textContent)) {
        return {
          type: 'data',
          source: 'name pattern',
          isStatic: false,
        }
      }
    }

    // ============ STATIC TEXT DETECTION (more conservative) ============

    // Only consider static if it's a UI label element
    const staticLabelTags = ['LABEL', 'TH', 'LEGEND', 'FIGCAPTION']
    const isLabelTag = staticLabelTags.includes(tagName)

    // Check for common static UI text patterns
    const staticPatterns = [
      /^(保存|キャンセル|閉じる|開く|編集|削除|追加|検索|送信|確認|戻る|次へ|完了|OK|Yes|No|Cancel|Save|Submit|Close|Open|Edit|Delete|Add|Search|Back|Next|Done)$/,
      /^[\u30a0-\u30ff]+$/, // Pure katakana (often UI labels)
      /項目$/, // Ends with 項目
      /一覧$/, // Ends with 一覧
      /設定$/, // Ends with 設定
      /情報$/, // Ends with 情報
    ]

    const isStaticPattern = staticPatterns.some(p => p.test(textContent))

    // Check if it's a button/action text
    const isActionElement = tagName === 'BUTTON' ||
      element.closest('button') !== null ||
      element.getAttribute('role') === 'button'

    // Only mark as static if:
    // 1. It's a known label tag, OR
    // 2. It matches static UI patterns, OR
    // 3. It's an action/button element with short text
    if (isLabelTag || isStaticPattern || (isActionElement && textContent.length < 20)) {
      return {
        type: 'static',
        source: textContent.substring(0, 50) + (textContent.length > 50 ? '...' : ''),
        isStatic: true,
      }
    }

    // If text is very short and looks like a label, might be static
    if (textContent.length <= 10 && /^[\u3040-\u30ff\u4e00-\u9faf]+$/.test(textContent)) {
      // Short Japanese text - could be label OR data, mark as unknown/prop
      return {
        type: 'prop',
        source: 'short text (verify manually)',
        isStatic: false,
      }
    }

    // Default: assume dynamic (conservative - less false positives for static)
    if (textContent.length > 0 && textContent.length < 200) {
      return {
        type: 'data',
        source: 'content (assumed dynamic)',
        isStatic: false,
      }
    }

    return null
  }

  // Try to auto-fill element config based on detection
  // Priority: 1. data-di-* attributes (from Vite plugin), 2. heuristic detection
  function autoDetectElementInfo(element: HTMLElement, id: string): Partial<ElementConfig> {
    const result: Partial<ElementConfig> = {}
    const textContent = element.textContent?.trim() || ''

    // ========== PRIORITY 1: Check data-di-* attributes from Vite plugin ==========
    const diBinding = element.getAttribute('data-di-binding')
    const diDb = element.getAttribute('data-di-db')
    const diComponent = element.getAttribute('data-di-component')
    const diDbComment = element.getAttribute('data-di-db-comment')

    // Also check parent elements (the span might wrap the text)
    let targetElement = element
    if (!diBinding) {
      const parentWithBinding = element.closest('[data-di-binding]') as HTMLElement
      if (parentWithBinding) {
        targetElement = parentWithBinding
      }
    }

    const binding = targetElement.getAttribute('data-di-binding')
    const db = targetElement.getAttribute('data-di-db')
    const component = targetElement.getAttribute('data-di-component')
    const dbType = targetElement.getAttribute('data-di-db-type')
    const dbComment = targetElement.getAttribute('data-di-db-comment')

    if (binding || db) {
      // Use Vite plugin injected data (100% reliable)
      result.sourceBinding = {
        type: 'api',
        source: binding || undefined,
        isStatic: false,
      }

      // Parse DB info (format: "table.column")
      if (db) {
        const [table, column] = db.split('.')
        if (table && column) {
          result.fieldInfo = {
            table,
            column,
            type: dbType || undefined,
            description: dbComment || undefined,
          }
        }
      }

      // Add component info to devMeta
      if (component) {
        result.devMeta = {
          usedComponents: [component],
        }
      }

      result.note = {
        type: 'info',
        text: `【データバインディング】${binding}${db ? ` → ${db}` : ''}`,
      }

      return result
    }

    // ========== PRIORITY 2: Fallback to heuristic detection ==========
    const heuristicBinding = detectSourceBinding(element)

    if (heuristicBinding) {
      result.sourceBinding = heuristicBinding

      // If static, add a note with the actual text content
      if (heuristicBinding.isStatic) {
        result.note = {
          type: 'info',
          text: `【固定文言】${textContent}`,
        }
      } else if (heuristicBinding.type === 'v-model') {
        // For form elements, note the binding type
        const tagName = element.tagName.toUpperCase()
        if (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
          const placeholder = (element as HTMLInputElement).placeholder || ''
          const label = element.closest('label')?.textContent?.trim() ||
            element.getAttribute('aria-label') ||
            document.querySelector(`label[for="${element.id}"]`)?.textContent?.trim() || ''
          result.note = {
            type: 'todo',
            text: `【フォーム要素】${label || placeholder || tagName.toLowerCase()}`,
          }
        }
      } else if (heuristicBinding.type === 'api') {
        // For dynamic data
        result.note = {
          type: 'question',
          text: `【動的データ】${textContent.substring(0, 100)}${textContent.length > 100 ? '...' : ''}`,
        }
      }
    }

    return result
  }

  // Scan state
  const isScanning = ref(false)
  const scanProgress = ref(0)
  const scanResults = ref<Array<{ selector: string; element: HTMLElement; detected: Partial<ElementConfig> }>>([])

  // Scan all elements on the current page
  async function scanCurrentPage(options: { rescan?: boolean } = {}): Promise<number> {
    isScanning.value = true
    scanProgress.value = 0
    scanResults.value = []

    const { rescan = false } = options

    // If rescan mode, clear existing configs for this page first
    if (rescan) {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
      const keysToDelete = Object.keys(elementConfigs.value).filter(key => {
        const config = elementConfigs.value[key]
        return !config.componentPath || config.componentPath.includes(currentPath)
      })
      for (const key of keysToDelete) {
        delete elementConfigs.value[key]
      }
      // Trigger save
      nextTick(() => saveConfigs())
    }

    try {
      // Target elements for scanning - expanded list
      const targetSelectors = [
        // Text elements
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'p', 'span', 'label', 'a',
        'th', 'td',
        'li',
        'button',
        'div', // Include divs but filter later
        // Form elements
        'input', 'select', 'textarea',
        // Other interactive
        '[role="button"]', '[role="link"]', '[role="menuitem"]',
      ].join(',')

      const allElements = document.querySelectorAll(targetSelectors)
      const candidateElements: HTMLElement[] = []

      allElements.forEach((el) => {
        const element = el as HTMLElement

        // Skip dev inspector elements
        if (element.closest('[data-dev-inspector]')) return

        // Skip hidden elements
        const style = window.getComputedStyle(element)
        if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return

        // Skip if already configured
        const existingSelector = generateSelector(element)
        if (elementConfigs.value[existingSelector]) return

        const tagName = element.tagName.toUpperCase()
        const text = element.textContent?.trim() || ''

        // For form elements, always include
        if (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
          candidateElements.push(element)
          return
        }

        // Skip elements with too much text (likely containers)
        if (text.length > 300) return

        // Skip empty non-form elements
        if (text.length === 0) return

        // For DIVs, only include if they have direct text and few/no children
        if (tagName === 'DIV') {
          const directText = Array.from(element.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE)
            .map(node => node.textContent?.trim() || '')
            .join('')
            .trim()

          if (directText.length === 0) return
          if (element.children.length > 3) return
        }

        // For other elements, check if they have meaningful content
        const hasDirectText = Array.from(element.childNodes)
          .some(node => node.nodeType === Node.TEXT_NODE && (node.textContent?.trim() || '').length > 0)

        const hasNoBlockChildren = !Array.from(element.children)
          .some(c => ['DIV', 'P', 'UL', 'OL', 'TABLE', 'SECTION', 'ARTICLE'].includes(c.tagName))

        if (hasDirectText || (element.children.length === 0 && text.length > 0) || hasNoBlockChildren) {
          candidateElements.push(element)
        }
      })

      const total = candidateElements.length
      let processed = 0
      let added = 0

      // Process in batches for better UI responsiveness
      const batchSize = 20

      for (let i = 0; i < candidateElements.length; i += batchSize) {
        const batch = candidateElements.slice(i, i + batchSize)

        for (const element of batch) {
          const selector = generateSelector(element)
          const detected = autoDetectElementInfo(element, selector)

          if (detected.sourceBinding) {
            scanResults.value.push({ selector, element, detected })

            // Auto-save detected elements
            setElementConfig(selector, detected)
            added++
          }

          processed++
          scanProgress.value = Math.round((processed / total) * 100)
        }

        // Yield to UI between batches
        await new Promise(resolve => setTimeout(resolve, 10))
      }

      return added
    } finally {
      isScanning.value = false
      scanProgress.value = 100
    }
  }

  // Scan all pages (requires Vue Router)
  const allPagesRoutes = ref<string[]>([])
  const currentScanPage = ref('')

  async function scanAllPages(router: any): Promise<{ page: string; count: number }[]> {
    if (!router) {
      console.warn('[DevInspector] Router not provided for all pages scan')
      return []
    }

    isScanning.value = true
    const results: { page: string; count: number }[] = []

    try {
      // Get all routes from Vue Router
      const routes = router.getRoutes()
      const pagePaths: string[] = []

      for (const route of routes) {
        // Skip dynamic routes with required params, redirects, and special routes
        if (route.path.includes(':') && !route.path.includes('?')) continue
        if (route.redirect) continue
        if (route.path === '/:pathMatch(.*)*') continue
        if (route.meta?.devInspectorSkip) continue

        pagePaths.push(route.path)
      }

      allPagesRoutes.value = pagePaths

      for (const path of pagePaths) {
        currentScanPage.value = path

        try {
          // Navigate to page
          await router.push(path)

          // Wait for page to render
          await new Promise(resolve => setTimeout(resolve, 500))

          // Scan the page
          const count = await scanCurrentPage()
          results.push({ page: path, count })
        } catch (e) {
          console.warn(`[DevInspector] Failed to scan page ${path}:`, e)
          results.push({ page: path, count: 0 })
        }
      }

      return results
    } finally {
      isScanning.value = false
      currentScanPage.value = ''
    }
  }

  // Clear scan results
  function clearScanResults() {
    scanResults.value = []
    scanProgress.value = 0
  }

  // Analysis results from CLI data
  const analysisResults = ref<Array<{
    selector: string
    element: AnalyzedElement
    matched: boolean
  }>>([])

  // Apply CLI analysis data to current page
  async function applyAnalysisToPage(): Promise<number> {
    if (!analysisData.value) {
      console.warn('[DevInspector] No analysis data loaded. Call loadAnalysisData first.')
      return 0
    }

    analysisResults.value = []

    // Get current page path to find matching components
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'

    // Helper: find component by name (case-insensitive, handles partial matches)
    const findComponentByName = (name: string): typeof analysisData.value.components[string] | null => {
      if (!analysisData.value) return null
      for (const [path, comp] of Object.entries(analysisData.value.components)) {
        if (comp.componentName === name ||
            comp.componentName.toLowerCase() === name.toLowerCase() ||
            path.toLowerCase().includes(`/${name.toLowerCase()}.vue`)) {
          return comp
        }
      }
      return null
    }

    // Helper: recursively collect elements from a component and its children
    const collectComponentElements = (
      component: typeof analysisData.value.components[string],
      visited: Set<string> = new Set()
    ): AnalyzedElement[] => {
      const elements: AnalyzedElement[] = []
      if (visited.has(component.componentName)) return elements
      visited.add(component.componentName)

      // Add this component's elements
      elements.push(...component.elements)

      // Recursively add child component elements
      if (component.usedComponents) {
        for (const childName of component.usedComponents) {
          const childComponent = findComponentByName(childName)
          if (childComponent) {
            elements.push(...collectComponentElements(childComponent, visited))
          }
        }
      }

      return elements
    }

    // Find components that might match current page
    const matchingComponents: AnalyzedElement[] = []
    const includedComponentNames = new Set<string>()

    for (const [componentPath, component] of Object.entries(analysisData.value.components)) {
      // Match by page path or include all components for now
      // pages/sign-in.vue -> /sign-in
      const pagePath = componentPath
        .replace(/^pages/, '')
        .replace(/\.vue$/, '')
        .replace(/\/index$/, '')
        .replace(/\[.*?\]/g, '[^/]+') // Convert [id] to regex

      let isMatchingPage = false

      if (currentPath === '/' && componentPath.includes('index')) {
        isMatchingPage = true
      } else if (componentPath.includes('pages/') && currentPath.match(new RegExp(`^${pagePath}$`))) {
        isMatchingPage = true
      }

      if (isMatchingPage) {
        // This is the matching page - include its elements and all child components recursively
        const elements = collectComponentElements(component)
        matchingComponents.push(...elements)
        includedComponentNames.add(component.componentName)

        // Mark child components as included
        if (component.usedComponents) {
          component.usedComponents.forEach(name => includedComponentNames.add(name))
        }
      }
    }

    // Also include standalone components that weren't already included via page dependencies
    // This handles global/shared components that might be rendered on the page
    for (const [componentPath, component] of Object.entries(analysisData.value.components)) {
      if (componentPath.includes('components/') && !includedComponentNames.has(component.componentName)) {
        matchingComponents.push(...component.elements)
      }
    }

    // Try to match analysis elements to actual DOM elements
    for (const analysisEl of matchingComponents) {
      // Skip hidden selectors
      if (hiddenAnalysisSelectors.value.has(analysisEl.selector)) {
        continue
      }

      let matched = false
      let matchedSelector = analysisEl.selector

      // Try to find the element in DOM by various strategies
      // Strategy 1: Direct selector match
      try {
        const el = document.querySelector(analysisEl.selector)
        if (el) {
          matched = true
        }
      } catch { /* invalid selector */ }

      // Strategy 2: Match by text content (for elements with text and no dynamic binding)
      if (!matched && analysisEl.text && !analysisEl.binding) {
        const textToFind = analysisEl.text.replace(/\[コメント\]\s*/, '')
        const walker = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_TEXT,
          null
        )
        while (walker.nextNode()) {
          const node = walker.currentNode
          if (node.textContent?.includes(textToFind)) {
            const parent = node.parentElement
            if (parent) {
              matched = true
              matchedSelector = generateSelector(parent)
              break
            }
          }
        }
      }

      // Strategy 3: Match by tag and class combination (strict - must match exactly)
      if (!matched && analysisEl.selector.includes('.')) {
        const parts = analysisEl.selector.match(/^(\w+)\.(.+)$/)
        if (parts) {
          const [, tag, className] = parts
          // Only match if the full class selector exists
          try {
            const el = document.querySelector(analysisEl.selector)
            if (el) {
              matched = true
              matchedSelector = generateSelector(el as HTMLElement)
            }
          } catch { /* invalid selector */ }
        }
      }

      // Strategy 4: For elements with binding, try to match by explicit data attributes
      if (!matched && analysisEl.binding) {
        const dataAttrSelector = `[data-bind="${analysisEl.binding}"]`
        try {
          const el = document.querySelector(dataAttrSelector)
          if (el) {
            matched = true
            matchedSelector = generateSelector(el as HTMLElement)
          }
        } catch { /* invalid selector */ }
      }

      // Note: Removed aggressive Strategy 5 (class-name guessing) to prevent false positives

      analysisResults.value.push({
        selector: matchedSelector,
        element: analysisEl,
        matched,
      })
    }

    console.log(`[DevInspector] Applied analysis: ${analysisResults.value.filter(r => r.matched).length}/${analysisResults.value.length} elements matched`)
    return analysisResults.value.filter(r => r.matched).length
  }

  // Clear analysis results
  function clearAnalysisResults() {
    analysisResults.value = []
  }

  function removeAnalysisResult(selector: string) {
    analysisResults.value = analysisResults.value.filter(r => r.selector !== selector)
    // Persist to localStorage
    hiddenAnalysisSelectors.value.add(selector)
    saveHiddenSelectors()
  }

  function loadHiddenSelectors() {
    try {
      const stored = localStorage.getItem(HIDDEN_SELECTORS_KEY)
      if (stored) {
        hiddenAnalysisSelectors.value = new Set(JSON.parse(stored))
      }
    } catch {
      // Ignore errors
    }
  }

  function saveHiddenSelectors() {
    try {
      localStorage.setItem(
        HIDDEN_SELECTORS_KEY,
        JSON.stringify([...hiddenAnalysisSelectors.value])
      )
    } catch {
      // Ignore errors
    }
  }

  function clearHiddenSelectors() {
    hiddenAnalysisSelectors.value.clear()
    localStorage.removeItem(HIDDEN_SELECTORS_KEY)
  }

  // Export changes (hidden/removed selectors) for CLI merge
  function exportChangesForCli(): string {
    const changes = {
      removed: [...hiddenAnalysisSelectors.value],
      exportedAt: new Date().toISOString(),
    }
    return JSON.stringify(changes, null, 2)
  }

  // Download changes as JSON file
  function downloadChanges(filename = 'dev-inspector-changes.json') {
    const content = exportChangesForCli()
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Get all unique bindings with DB info from analysis data (for manual mapping UI)
  function getAvailableBindings(): BindingCandidate[] {
    if (!analysisData.value) return []

    const bindings: BindingCandidate[] = []
    const seen = new Set<string>()

    for (const component of Object.values(analysisData.value.components)) {
      for (const el of component.elements) {
        if (el.binding && !seen.has(el.binding)) {
          seen.add(el.binding)
          bindings.push({
            binding: el.binding,
            db: el.db,
            api: el.api,
            component: component.componentName,
          })
        }
      }
    }

    // Sort: DB bindings first, then by binding name
    return bindings.sort((a, b) => {
      if (a.db && !b.db) return -1
      if (!a.db && b.db) return 1
      return a.binding.localeCompare(b.binding)
    })
  }

  // Search bindings by keyword
  function searchBindings(query: string): BindingCandidate[] {
    const all = getAvailableBindings()
    if (!query) return all

    const q = query.toLowerCase()
    return all.filter(b =>
      b.binding.toLowerCase().includes(q) ||
      b.db?.table.toLowerCase().includes(q) ||
      b.db?.column.toLowerCase().includes(q) ||
      b.component.toLowerCase().includes(q)
    )
  }

  // Get all table.column options from schema.rb
  function getSchemaColumns(): SchemaColumnOption[] {
    if (!analysisData.value?.dbSchema?.tables) return []

    const options: SchemaColumnOption[] = []

    for (const [tableName, table] of Object.entries(analysisData.value.dbSchema.tables)) {
      for (const [columnName, column] of Object.entries(table.columns)) {
        options.push({
          table: tableName,
          column: columnName,
          type: column.type,
          comment: column.comment,
          fullName: `${tableName}.${columnName}`,
        })
      }
    }

    // Sort by table name, then column name
    return options.sort((a, b) => {
      if (a.table !== b.table) return a.table.localeCompare(b.table)
      return a.column.localeCompare(b.column)
    })
  }

  // Search schema columns by keyword
  function searchSchemaColumns(query: string): SchemaColumnOption[] {
    const all = getSchemaColumns()
    if (!query) return all

    const q = query.toLowerCase()
    return all.filter(c =>
      c.table.toLowerCase().includes(q) ||
      c.column.toLowerCase().includes(q) ||
      c.fullName.toLowerCase().includes(q) ||
      c.comment?.toLowerCase().includes(q)
    )
  }

  // Get APIs for the current page grouped by load trigger
  function getCurrentPageApis(): {
    pageLoad: ComponentApi[]
    action: ComponentApi[]
  } {
    const pageLoad: ComponentApi[] = []
    const action: ComponentApi[] = []

    if (!analysisData.value?.components) return { pageLoad, action }

    // Get the current page component from analysis results
    for (const result of analysisResults.value) {
      if (!result.matched) continue

      const component = result.element.component
      if (component && analysisData.value.components[component]?.apis) {
        for (const api of analysisData.value.components[component].apis) {
          // Categorize by load trigger
          if (['onMount', 'useFetch', 'useAsyncData'].includes(api.loadTrigger)) {
            // Avoid duplicates
            if (!pageLoad.some(a => a.endpoint === api.endpoint && a.method === api.method)) {
              pageLoad.push(api)
            }
          } else if (api.loadTrigger === 'action') {
            if (!action.some(a => a.endpoint === api.endpoint && a.method === api.method)) {
              action.push(api)
            }
          }
        }
      }
    }

    return { pageLoad, action }
  }

  // Get API source for a variable/binding
  function getApiSourceForBinding(binding: string): ComponentApi | null {
    if (!analysisData.value?.components) return null

    // Search through all components to find an API that matches this variable
    for (const component of Object.values(analysisData.value.components)) {
      if (!component.apis) continue

      for (const api of component.apis) {
        if (api.variable && binding.startsWith(api.variable)) {
          return api
        }
      }
    }

    return null
  }

  function isAnalysisSelectorHidden(selector: string): boolean {
    return hiddenAnalysisSelectors.value.has(selector)
  }

  // Detect element type based on DOM element
  function detectElementType(element: HTMLElement): 'datasource' | 'action' | 'form' {
    const tagName = element.tagName.toUpperCase()

    // Form elements
    if (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
      return 'form'
    }

    // Action elements
    if (tagName === 'BUTTON' || tagName === 'A' && element.hasAttribute('href')) {
      return 'action'
    }
    if (element.getAttribute('role') === 'button') {
      return 'action'
    }
    // Check if inside a button or link
    if (element.closest('button') || element.closest('a[href]')) {
      return 'action'
    }

    // Default: datasource
    return 'datasource'
  }

  // ===== Broken Annotation Detection =====
  const brokenAnnotations = ref<string[]>([])
  const remapTargetId = ref<string | null>(null) // When set, pick mode will remap this annotation

  function detectBrokenAnnotations(): string[] {
    if (typeof document === 'undefined') return []

    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    const broken: string[] = []

    for (const [id, config] of Object.entries(elementConfigs.value)) {
      // Skip annotations that belong to a different page
      if (config.componentPath && !config.componentPath.includes(currentPath) && currentPath !== '/') {
        continue
      }

      // Skip conditional elements (modal/dialog) — they may not be in DOM
      if (config.isConditional) {
        continue
      }

      // Skip tab context elements — they may be on inactive tab
      if (config.tabContext) {
        continue
      }

      try {
        const el = document.querySelector(id)
        if (!el) {
          broken.push(id)
        }
      } catch {
        // Invalid selector — also broken
        broken.push(id)
      }
    }
    brokenAnnotations.value = broken
    return broken
  }

  // Remap a broken annotation to a new selector
  function remapAnnotation(oldId: string, newId: string) {
    const config = elementConfigs.value[oldId]
    if (!config) return

    // Delete old
    const { [oldId]: _, ...rest } = elementConfigs.value

    // Set new with updated id
    elementConfigs.value = {
      ...rest,
      [newId]: { ...config, id: newId, updatedAt: new Date().toISOString() },
    }
    brokenAnnotations.value = brokenAnnotations.value.filter(id => id !== oldId)
    nextTick(() => saveConfigs())
  }

  // Start remap pick mode for a broken annotation
  function startRemap(oldId: string) {
    remapTargetId.value = oldId
    isPickMode.value = true
    isEditMode.value = false
    closePanel()
  }

  // Delete all broken annotations
  function deleteBrokenAnnotations() {
    const broken = brokenAnnotations.value
    if (broken.length === 0) return

    const configs = { ...elementConfigs.value }
    for (const id of broken) {
      delete configs[id]
    }
    elementConfigs.value = configs
    brokenAnnotations.value = []
    nextTick(() => saveConfigs())
  }

  function toggleNoteHighlights() {
    showNoteHighlights.value = !showNoteHighlights.value
  }

  function startEditing(id: string) {
    editingElementId.value = id
  }

  function stopEditing() {
    editingElementId.value = null
  }

  function exportConfigs(): string {
    return JSON.stringify({
      elementConfigs: elementConfigs.value,
      screenConfigs: screenConfigs.value,
    }, null, 2)
  }

  function exportAsFile(): string {
    const fileContent = {
      _meta: {
        version: '1.0.0',
        description: 'Dev Inspector annotations',
        lastUpdated: new Date().toISOString(),
      },
      annotations: elementConfigs.value,
      screenConfigs: screenConfigs.value,
    }
    return JSON.stringify(fileContent, null, 2)
  }

  function downloadAnnotations(filename = 'dev-annotations.json') {
    const content = exportAsFile()
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function importConfigs(json: string) {
    try {
      const parsed = JSON.parse(json)
      // Support both direct configs and wrapped format
      const configs = parsed.annotations || parsed.elementConfigs || parsed
      elementConfigs.value = { ...elementConfigs.value, ...configs }
      // Import screen configs if present
      if (parsed.screenConfigs) {
        screenConfigs.value = { ...screenConfigs.value, ...parsed.screenConfigs }
      }
    } catch (e) {
      console.error('[DevInspector] Failed to import configs:', e)
      throw new Error('Invalid JSON format')
    }
  }

  function clearAllConfigs() {
    elementConfigs.value = {}
  }

  function downloadSddSpec(filename = 'screen-spec-sdd.md') {
    const content = exportForSDD(elementConfigs.value, screenConfigs.value, masterDefinitions.value, batchDefinitions.value)
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function downloadClientSpec(filename = 'screen-spec-client.md') {
    const content = exportForClient(elementConfigs.value, screenConfigs.value, masterDefinitions.value, batchDefinitions.value)
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return {
    // State
    isEnabled,
    isAvailable,
    isEditMode,
    isPickMode,
    isInitializing,
    hoveredSelector,
    currentScreenSpec,
    isPanelOpen,
    elementConfigs,
    editingElementId,
    // Screen configs
    screenConfigs,
    editingScreen,
    getScreenConfig,
    setScreenConfig,
    deleteScreenConfig,
    suggestScreenApis,
    // Actions
    init,
    toggle,
    enable,
    disable,
    toggleEditMode,
    togglePickMode,
    setHoveredSelector,
    generateSelector,
    getConfiguredSelectors,
    setScreenSpec,
    clearScreenSpec,
    togglePanel,
    openPanel,
    closePanel,
    getElementConfig,
    setElementConfig,
    deleteElementConfig,
    startEditing,
    stopEditing,
    exportConfigs,
    exportAsFile,
    downloadAnnotations,
    downloadSddSpec,
    downloadClientSpec,
    importConfigs,
    clearAllConfigs,
    detectSourceBinding,
    autoDetectElementInfo,
    // Scan
    isScanning,
    scanProgress,
    scanResults,
    scanCurrentPage,
    scanAllPages,
    allPagesRoutes,
    currentScanPage,
    clearScanResults,
    // Analysis data
    analysisData,
    loadAnalysisData,
    getAnalyzedElement,
    getAnalyzedElementsForPage,
    analysisResults,
    applyAnalysisToPage,
    clearAnalysisResults,
    removeAnalysisResult,
    clearHiddenSelectors,
    hiddenAnalysisSelectors,
    analysisFilter,
    exportChangesForCli,
    downloadChanges,
    getAvailableBindings,
    searchBindings,
    getSchemaColumns,
    searchSchemaColumns,
    getCurrentPageApis,
    getApiSourceForBinding,
    // Note highlights
    showNoteHighlights,
    toggleNoteHighlights,
    noteHighlightFilter,
    // Element type detection
    detectElementType,
    // Master definitions
    masterDefinitions,
    getMasterDefinition,
    setMasterDefinition,
    deleteMasterDefinition,
    getMastersForTable,
    getMasterEntries,
    // Batch definitions
    batchDefinitions,
    getBatchDefinition,
    setBatchDefinition,
    deleteBatchDefinition,
    // Broken annotation detection
    brokenAnnotations,
    remapTargetId,
    detectBrokenAnnotations,
    detectModalName,
    detectTabContext,
    remapAnnotation,
    startRemap,
    deleteBrokenAnnotations,
    // Cross Search
    showCrossSearch,
    crossSearchQuery,
    crossSearchMode,
    crossSearchResults,
    // Unannotated Detection
    showUnannotatedDetection,
    unannotatedElements,
    hoveredUnannotatedSelector,
    detectUnannotatedElements,
    quickAnnotate,
    // Screen Flow
    showScreenFlow,
    screenFlowData,
  }
})

// ===== Composable wrapper =====
export function useDevInspector() {
  return useDevInspectorStore()
}
