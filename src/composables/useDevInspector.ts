import { ref, computed, watch, nextTick } from 'vue'
import { defineStore } from 'pinia'

// ===== Types =====

export interface SourceBindingInfo {
  type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api'
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

export interface ActionInfo {
  type: 'navigate' | 'api' | 'modal' | 'emit' | 'function'
  target?: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  description?: string
  params?: Record<string, string>
}

export interface FormInfo {
  inputType?: string        // text, number, email, select, textarea, checkbox...
  required?: boolean
  validation?: string[]     // ['max:255', 'email', '必須']
  placeholder?: string
  defaultValue?: string
  description?: string
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

export interface MasterDefinition {
  id: string             // 'orders.status'
  table: string
  column: string
  name: string           // 表示名 (例: 'ステータス')
  columnType?: string    // 'integer', 'varchar'
  description?: string
  entries: MasterEntry[]
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
  elementType?: 'datasource' | 'action' | 'form'  // 要素の役割
  fieldInfo?: FieldInfo
  fieldInfoList?: FieldInfo[]  // Multiple DB columns
  actionInfo?: ActionInfo
  formInfo?: FormInfo                               // フォーム固有情報
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
  elementType?: 'datasource' | 'action' | 'form'
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
  /** Enable real-time server sync via Vite dev server (default: true in dev mode) */
  serverSync?: boolean
  /** Supabase sync for remote collaboration (overrides serverSync) */
  supabase?: {
    url: string       // e.g., 'https://xxx.supabase.co'
    anonKey: string   // public anon key
    table?: string    // default: 'dev_inspector'
    pollInterval?: number  // default: 3000 (ms)
  }
}

// ===== Store =====
const STORAGE_KEY_DEFAULT = 'devInspector:elementConfigs'
const SCREEN_STORAGE_KEY = 'devInspector:screenConfigs'
const MASTER_STORAGE_KEY = 'devInspector:masterDefinitions'

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

  // Computed
  const storageKey = computed(() => options.value.storageKey || STORAGE_KEY_DEFAULT)
  const syncRowId = computed(() => options.value.storageKey || 'shared')

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

    // Server sync: Supabase or Vite dev server
    if (getSyncMode() !== 'none' && isAvailable.value) {
      loadFromServer().then((loaded) => {
        if (loaded) {
          console.log(`[DevInspector] ${getSyncMode()} sync active`)
        }
      })
      loadMastersFromServer()
      setupServerSync()
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

  // ===== Server Sync =====
  const syncClientId = ref(Math.random().toString(36).slice(2, 10))
  const isReceivingFromServer = ref(false)
  let sseSource: EventSource | null = null
  let saveToServerTimer: ReturnType<typeof setTimeout> | null = null
  let pollTimer: ReturnType<typeof setInterval> | null = null
  let lastSyncHash = '' // Detect actual changes to avoid unnecessary updates

  function getSyncMode(): 'supabase' | 'vite' | 'none' {
    if (options.value.supabase?.url) return 'supabase'
    if (options.value.serverSync !== false) return 'vite'
    return 'none'
  }

  // --- Supabase helpers ---
  function supabaseHeaders(): Record<string, string> {
    const sb = options.value.supabase!
    return {
      'apikey': sb.anonKey,
      'Authorization': `Bearer ${sb.anonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
    }
  }

  function supabaseRestUrl(): string {
    const sb = options.value.supabase!
    const table = sb.table || 'dev_inspector'
    return `${sb.url}/rest/v1/${table}`
  }

  // Helper: get current page path
  function getCurrentPage(): string {
    return typeof window !== 'undefined' ? window.location.pathname : '/'
  }

  // Helper: get annotations for a specific page
  function getAnnotationsForPage(page: string): Record<string, ElementConfig> {
    const result: Record<string, ElementConfig> = {}
    for (const [id, config] of Object.entries(elementConfigs.value)) {
      if (config.pagePath === page || (!config.pagePath && page === '/')) {
        result[id] = config
      }
    }
    return result
  }

  // Helper: get screen config for a specific page
  function getScreenConfigForPage(page: string): ScreenConfig | null {
    return screenConfigs.value[page] || null
  }

  // --- Unified sync functions ---
  async function loadFromServer(page?: string): Promise<boolean> {
    const mode = getSyncMode()
    if (mode === 'none') return false

    const targetPage = page || getCurrentPage()

    try {
      let data: { annotations?: Record<string, ElementConfig>; screenConfig?: ScreenConfig | null } | null = null

      if (mode === 'supabase') {
        const res = await fetch(`${supabaseRestUrl()}?id=eq.${encodeURIComponent(syncRowId.value)}&select=annotations,screen_configs,updated_at`, {
          headers: supabaseHeaders(),
        })
        if (!res.ok) return false
        const rows = await res.json()
        if (rows.length > 0) {
          // Supabase still stores everything — filter client-side
          data = {
            annotations: rows[0].annotations || {},
            screenConfig: rows[0].screen_configs?.[targetPage] || null,
          }
        } else {
          data = { annotations: {}, screenConfig: null }
        }
      } else {
        // Vite: per-page file
        const res = await fetch(`/__dev-inspector/annotations?page=${encodeURIComponent(targetPage)}`)
        if (!res.ok) return false
        data = await res.json()
      }

      if (data) {
        const hash = JSON.stringify(data)
        if (hash === lastSyncHash) return true
        lastSyncHash = hash

        isReceivingFromServer.value = true

        if (mode === 'supabase') {
          // Supabase: full replace (all pages in one row)
          if (data.annotations) {
            elementConfigs.value = { ...data.annotations }
          }
        } else {
          // Vite: merge page annotations into store
          if (data.annotations) {
            const existing = { ...elementConfigs.value }
            // Remove old annotations for this page, add new ones
            for (const id of Object.keys(existing)) {
              if (existing[id].pagePath === targetPage) {
                delete existing[id]
              }
            }
            elementConfigs.value = { ...existing, ...data.annotations }
          }
        }

        if (data.screenConfig) {
          screenConfigs.value = {
            ...screenConfigs.value,
            [targetPage]: data.screenConfig,
          }
        }

        nextTick(() => {
          saveConfigs()
          saveScreenConfigs()
          isReceivingFromServer.value = false
        })
        console.log('[DevInspector] Loaded from server:', Object.keys(data.annotations || {}).length, 'annotations for', targetPage)
        return true
      }
    } catch {
      // Server not available — use localStorage only
    }
    return false
  }

  function saveToServer() {
    if (isReceivingFromServer.value) return
    if (saveToServerTimer) clearTimeout(saveToServerTimer)

    const mode = getSyncMode()
    if (mode === 'none') return

    saveToServerTimer = setTimeout(() => {
      const currentPage = getCurrentPage()

      if (mode === 'supabase') {
        const annotations = elementConfigs.value
        const screenConfigsData = screenConfigs.value

        const hash = JSON.stringify({ annotations, screenConfigs: screenConfigsData })
        if (hash === lastSyncHash) return
        lastSyncHash = hash

        // Upsert to Supabase (all pages in one row)
        const row = {
          id: syncRowId.value,
          annotations,
          screen_configs: screenConfigsData,
          updated_at: new Date().toISOString(),
          updated_by: syncClientId.value,
        }
        fetch(supabaseRestUrl(), {
          method: 'POST',
          headers: { ...supabaseHeaders(), 'Prefer': 'resolution=merge-duplicates' },
          body: JSON.stringify(row),
        }).catch(() => {})
      } else {
        // Vite: save only current page's annotations
        const pageAnnotations = getAnnotationsForPage(currentPage)
        const screenConfig = getScreenConfigForPage(currentPage)

        const hash = JSON.stringify({ annotations: pageAnnotations, screenConfig })
        if (hash === lastSyncHash) return
        lastSyncHash = hash

        const payload = {
          clientId: syncClientId.value,
          page: currentPage,
          annotations: pageAnnotations,
          screenConfig,
          _meta: {
            lastUpdated: new Date().toISOString(),
            updatedBy: syncClientId.value,
          },
        }
        fetch('/__dev-inspector/annotations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => {})
      }
    }, 500)
  }

  function setupServerSync() {
    if (typeof window === 'undefined') return

    const mode = getSyncMode()
    if (mode === 'none') return

    if (mode === 'supabase') {
      // Polling mode for Supabase
      const interval = options.value.supabase?.pollInterval || 3000
      pollTimer = setInterval(async () => {
        try {
          const res = await fetch(`${supabaseRestUrl()}?id=eq.${encodeURIComponent(syncRowId.value)}&select=annotations,screen_configs,updated_by`, {
            headers: supabaseHeaders(),
          })
          if (!res.ok) return
          const rows = await res.json()
          if (rows.length === 0) return

          const row = rows[0]
          // Skip own updates
          if (row.updated_by === syncClientId.value) return

          const hash = JSON.stringify({ annotations: row.annotations, screenConfigs: row.screen_configs })
          if (hash === lastSyncHash) return
          lastSyncHash = hash

          isReceivingFromServer.value = true
          if (row.annotations) {
            elementConfigs.value = { ...row.annotations }
          }
          if (row.screen_configs) {
            screenConfigs.value = { ...row.screen_configs }
          }
          nextTick(() => {
            saveConfigs()
            saveScreenConfigs()
            isReceivingFromServer.value = false
          })
          console.log('[DevInspector] Synced from Supabase')
        } catch {
          // Silent fail
        }
      }, interval)
      console.log(`[DevInspector] Supabase polling started (${interval}ms)`)
    } else {
      // SSE mode for Vite dev server
      if (typeof EventSource === 'undefined') return

      sseSource = new EventSource('/__dev-inspector/events')

      sseSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data)
          if (data.type === 'connected') {
            console.log('[DevInspector] SSE connected')
            return
          }
          if (data.type === 'update' && data.clientId !== syncClientId.value) {
            const currentPage = getCurrentPage()
            // Only apply updates for the current page
            if (data.page && data.page !== currentPage) return

            isReceivingFromServer.value = true
            if (data.annotations) {
              // Merge: remove old annotations for this page, add new ones
              const existing = { ...elementConfigs.value }
              for (const id of Object.keys(existing)) {
                if (existing[id].pagePath === currentPage) {
                  delete existing[id]
                }
              }
              elementConfigs.value = { ...existing, ...data.annotations }
            }
            if (data.screenConfig) {
              screenConfigs.value = {
                ...screenConfigs.value,
                [currentPage]: data.screenConfig,
              }
            }
            nextTick(() => {
              saveConfigs()
              saveScreenConfigs()
              isReceivingFromServer.value = false
            })
            console.log('[DevInspector] Synced from another client (page:', currentPage + ')')
          }
          // Master definitions update
          if (data.type === 'masters' && data.clientId !== syncClientId.value) {
            isReceivingFromServer.value = true
            if (data.masters) {
              masterDefinitions.value = { ...data.masters }
            }
            nextTick(() => {
              saveMasterDefinitions()
              isReceivingFromServer.value = false
            })
            console.log('[DevInspector] Masters synced from another client')
          }
        } catch {
          // Ignore parse errors
        }
      }

      sseSource.onerror = () => {
        // SSE will auto-reconnect
      }
    }
  }

  function teardownServerSync() {
    if (sseSource) {
      sseSource.close()
      sseSource = null
    }
    if (pollTimer) {
      clearInterval(pollTimer)
      pollTimer = null
    }
    if (saveToServerTimer) {
      clearTimeout(saveToServerTimer)
      saveToServerTimer = null
    }
  }

  // Watch for changes and save - use immediate flush to ensure save happens
  watch(elementConfigs, () => {
    nextTick(() => {
      saveConfigs()
      saveToServer()
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
      saveToServer()
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
      saveMastersToServer()
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

  // Server sync for masters
  function saveMastersToServer() {
    if (isReceivingFromServer.value) return
    const mode = getSyncMode()
    if (mode === 'none') return

    if (mode === 'vite') {
      fetch('/__dev-inspector/masters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: syncClientId.value,
          masters: masterDefinitions.value,
        }),
      }).catch(() => {})
    }
    // Supabase: masters could be added to the existing row — skip for now
  }

  async function loadMastersFromServer(): Promise<boolean> {
    const mode = getSyncMode()
    if (mode !== 'vite') return false

    try {
      const res = await fetch('/__dev-inspector/masters')
      if (!res.ok) return false
      const data = await res.json()
      if (data.masters) {
        masterDefinitions.value = { ...data.masters }
        nextTick(() => saveMasterDefinitions())
      }
      return true
    } catch {
      return false
    }
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

    const detected: UnannotatedElement[] = []
    const seenSelectors = new Set<string>()

    // 1. data-di-binding elements → datasource
    document.querySelectorAll('[data-di-binding]').forEach((el) => {
      const element = el as HTMLElement
      if (element.closest('[data-dev-inspector]')) return
      const selector = generateSelector(element)
      if (configuredSelectors.has(selector) || seenSelectors.has(selector)) return
      seenSelectors.add(selector)
      detected.push({
        selector,
        tagName: element.tagName.toLowerCase(),
        category: 'binding',
        text: (element.textContent?.trim() || '').substring(0, 50),
        suggestedType: 'datasource',
      })
    })

    // 2. input, select, textarea (exclude hidden) → form
    document.querySelectorAll('input, select, textarea').forEach((el) => {
      const element = el as HTMLInputElement
      if (element.closest('[data-dev-inspector]')) return
      if (element.type === 'hidden') return
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden') return
      const selector = generateSelector(element)
      if (configuredSelectors.has(selector) || seenSelectors.has(selector)) return
      seenSelectors.add(selector)
      const label = element.closest('label')?.textContent?.trim() ||
        element.getAttribute('aria-label') ||
        element.placeholder || element.name || element.tagName.toLowerCase()
      detected.push({
        selector,
        tagName: element.tagName.toLowerCase(),
        category: 'form',
        text: (label || '').substring(0, 50),
        suggestedType: 'form',
      })
    })

    // 3. button, a[href], [role="button"] (exclude empty text) → action
    document.querySelectorAll('button, a[href], [role="button"]').forEach((el) => {
      const element = el as HTMLElement
      if (element.closest('[data-dev-inspector]')) return
      const text = element.textContent?.trim() || ''
      if (!text) return
      const style = window.getComputedStyle(element)
      if (style.display === 'none' || style.visibility === 'hidden') return
      const selector = generateSelector(element)
      if (configuredSelectors.has(selector) || seenSelectors.has(selector)) return
      seenSelectors.add(selector)
      detected.push({
        selector,
        tagName: element.tagName.toLowerCase(),
        category: 'action',
        text: text.substring(0, 50),
        suggestedType: 'action',
      })
    })

    unannotatedElements.value = detected
    return detected
  }

  function quickAnnotate(selector: string, suggestedType: 'datasource' | 'action' | 'form') {
    const config: Partial<ElementConfig> = {
      elementType: suggestedType,
      pagePath: getCurrentPage(),
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
          !/[/\[\]()!@#$%^&*=+{}|\\:'"<>,?]/.test(c)
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
          selector += `:nth-child(${index})`
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
    isPanelOpen.value = !isPanelOpen.value
  }

  function openPanel() {
    isPanelOpen.value = true
  }

  function closePanel() {
    isPanelOpen.value = false
  }

  // Element config management
  function getElementConfig(id: string): ElementConfig | undefined {
    return elementConfigs.value[id]
  }

  function setElementConfig(id: string, config: Partial<ElementConfig>) {
    const now = new Date().toISOString()
    const existing = elementConfigs.value[id]

    const currentPage = typeof window !== 'undefined' ? window.location.pathname : '/'
    const newConfig: ElementConfig = {
      ...existing,
      ...config,
      id,
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
        type: 'api',
        source: 'table data',
        isStatic: false,
      }
    }

    // Check if inside a list that looks like it's rendering data
    const listParent = element.closest('ul, ol, [role="list"]')
    if (listParent && listParent.children.length > 1) {
      return {
        type: 'api',
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
              type: 'api',
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
        type: 'api',
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
            type: 'api',
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
          type: 'api',
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
          type: 'api',
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
        type: 'api',
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
    isPanelOpen.value = false
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
    // Broken annotation detection
    brokenAnnotations,
    remapTargetId,
    detectBrokenAnnotations,
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
    detectUnannotatedElements,
    quickAnnotate,
    // Screen Flow
    showScreenFlow,
    screenFlowData,
    // Server sync
    syncClientId,
    loadFromServer,
    saveToServer,
    teardownServerSync,
  }
})

// ===== Composable wrapper =====
export function useDevInspector() {
  return useDevInspectorStore()
}
