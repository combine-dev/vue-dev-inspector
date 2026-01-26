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

export interface ElementNote {
  text: string
  author?: string
  type?: 'info' | 'warning' | 'todo' | 'question'
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
  fieldInfo?: FieldInfo
  actionInfo?: ActionInfo
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

export interface AnalyzedElement {
  selector: string
  type: 'static' | 'data' | 'button' | 'link' | 'form' | 'unknown'
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
  component?: string
  line?: number
}

export interface ProjectAnalysis {
  projectPath: string
  analyzedAt: string
  components: Record<string, {
    filePath: string
    componentName: string
    elements: AnalyzedElement[]
  }>
  apiMappings: Record<string, {
    endpoint: string
    method: string
    responseFields: { name: string; type: string }[]
  }>
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

  // Computed
  const storageKey = computed(() => options.value.storageKey || STORAGE_KEY_DEFAULT)

  // Analysis data (from CLI tool)
  const analysisData = ref<ProjectAnalysis | null>(null)

  // Analysis display filter
  const analysisFilter = ref<'all' | 'db-api' | 'static' | 'data' | 'other' | 'none'>('all')

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

  // Watch for changes and save - use immediate flush to ensure save happens
  watch(elementConfigs, () => {
    nextTick(() => {
      saveConfigs()
    })
  }, { deep: true })

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
        .filter(c => !c.startsWith('hover:') && !c.startsWith('focus:'))
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

    const newConfig: ElementConfig = {
      ...existing,
      ...config,
      id,
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
  function autoDetectElementInfo(element: HTMLElement, id: string): Partial<ElementConfig> {
    const binding = detectSourceBinding(element)
    const result: Partial<ElementConfig> = {}

    if (binding) {
      result.sourceBinding = binding

      // Get the actual text content
      const textContent = element.textContent?.trim() || ''

      // If static, add a note with the actual text content
      if (binding.isStatic) {
        result.note = {
          type: 'info',
          text: `【固定文言】${textContent}`,
        }
      } else if (binding.type === 'v-model') {
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
      } else if (binding.type === 'api') {
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

    // Find components that might match current page
    const matchingComponents: AnalyzedElement[] = []

    for (const [componentPath, component] of Object.entries(analysisData.value.components)) {
      // Match by page path or include all components for now
      // pages/sign-in.vue -> /sign-in
      const pagePath = componentPath
        .replace(/^pages/, '')
        .replace(/\.vue$/, '')
        .replace(/\/index$/, '')
        .replace(/\[.*?\]/g, '[^/]+') // Convert [id] to regex

      if (currentPath === '/' && componentPath.includes('index')) {
        matchingComponents.push(...component.elements)
      } else if (componentPath.includes('pages/') && currentPath.match(new RegExp(`^${pagePath}$`))) {
        matchingComponents.push(...component.elements)
      } else if (componentPath.includes('components/')) {
        // Include component elements too
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

      // Strategy 2: Match by text content for static elements
      if (!matched && analysisEl.type === 'static' && analysisEl.text) {
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

      // Strategy 3: Match by tag and class combination
      if (!matched && analysisEl.selector.includes('.')) {
        const parts = analysisEl.selector.match(/^(\w+)\.(.+)$/)
        if (parts) {
          const [, tag, className] = parts
          const els = document.querySelectorAll(`${tag}.${className.split('.')[0]}`)
          if (els.length > 0) {
            matched = true
            matchedSelector = generateSelector(els[0] as HTMLElement)
          }
        }
      }

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

  function isAnalysisSelectorHidden(selector: string): boolean {
    return hiddenAnalysisSelectors.value.has(selector)
  }

  function startEditing(id: string) {
    editingElementId.value = id
  }

  function stopEditing() {
    editingElementId.value = null
  }

  function exportConfigs(): string {
    return JSON.stringify(elementConfigs.value, null, 2)
  }

  function exportAsFile(): string {
    const fileContent = {
      _meta: {
        version: '1.0.0',
        description: 'Dev Inspector annotations',
        lastUpdated: new Date().toISOString(),
      },
      annotations: elementConfigs.value,
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
      const configs = parsed.annotations || parsed
      elementConfigs.value = { ...elementConfigs.value, ...configs }
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
  }
})

// ===== Composable wrapper =====
export function useDevInspector() {
  return useDevInspectorStore()
}
