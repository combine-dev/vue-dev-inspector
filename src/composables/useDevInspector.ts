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

export interface DevInspectorOptions {
  storageKey?: string
  enabledInProduction?: boolean
  initialAnnotations?: Record<string, ElementConfig>
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
  const currentScreenSpec = ref<ScreenSpec | null>(null)
  const isPanelOpen = ref(false)
  const elementConfigs = ref<Record<string, ElementConfig>>({})
  const editingElementId = ref<string | null>(null)
  const hoveredSelector = ref<string | null>(null)

  // Computed
  const storageKey = computed(() => options.value.storageKey || STORAGE_KEY_DEFAULT)

  const isAvailable = computed(() => {
    if (options.value.enabledInProduction) return true
    // Check for development environment
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.DEV || import.meta.env.VITE_DEV_INSPECTOR_ENABLED === 'true'
    }
    return process.env.NODE_ENV === 'development'
  })

  // Initialize with options
  function init(opts: DevInspectorOptions = {}) {
    options.value = opts
    loadConfigs()
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
  function toggle() {
    if (!isAvailable.value) return
    isEnabled.value = !isEnabled.value
    if (!isEnabled.value) {
      isEditMode.value = false
      editingElementId.value = null
    }
  }

  function enable() {
    if (!isAvailable.value) return
    isEnabled.value = true
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
    // Check for various Vue binding patterns
    const textContent = element.textContent?.trim() || ''

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

    // Check for data attributes that might indicate binding
    const dataSource = element.dataset.source || element.dataset.field || element.dataset.bind
    if (dataSource) {
      return {
        type: 'prop',
        source: dataSource,
        isStatic: false,
      }
    }

    // Heuristic: If the element text looks like static content (no special chars, short text)
    // This is a simple heuristic - in practice, we'd need build-time analysis
    const isLikelyStatic = (
      textContent.length > 0 &&
      textContent.length < 100 &&
      !textContent.includes('{{') &&
      !textContent.match(/^\d+$/) && // Not just a number
      !textContent.match(/^\d{4}[-/]\d{2}[-/]\d{2}/) && // Not a date
      element.children.length === 0 && // No child elements
      !element.closest('[v-for]') && // Not inside a loop
      !element.hasAttribute(':') && // No dynamic bindings visible
      (element.tagName === 'SPAN' || element.tagName === 'LABEL' || element.tagName === 'P' || element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || element.tagName === 'TH' || element.tagName === 'BUTTON')
    )

    if (isLikelyStatic) {
      return {
        type: 'static',
        isStatic: true,
      }
    }

    // Check if text looks like dynamic data (dates, numbers, IDs)
    if (textContent.match(/^\d+$/) || textContent.match(/^\d{4}[-/]\d{2}[-/]\d{2}/)) {
      return {
        type: 'api',
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

      // If static, add a note indicating fixed text
      if (binding.isStatic) {
        result.note = {
          type: 'info',
          text: '固定文言',
        }
      }
    }

    return result
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
  }
})

// ===== Composable wrapper =====
export function useDevInspector() {
  return useDevInspectorStore()
}
