<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useDevInspectorStore } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const highlightStyle = ref<{
  top: string
  left: string
  width: string
  height: string
} | null>(null)

const hoveredElement = ref<HTMLElement | null>(null)

// Scroll position for reactive updates
const scrollY = ref(0)
const scrollX = ref(0)

// Display type colors
const displayTypeColors: Record<string, string> = {
  db_direct: '#3b82f6',
  db_formatted: '#8b5cf6',
  calculated: '#f59e0b',
  static: '#10b981',
  other: '#94a3b8',
}

// Element type colors (action/form)
const elementTypeColors: Record<string, string> = {
  action: '#a78bfa',
  form: '#ec4899',
}

// Tag labels for display
function getTagLabel(tag: string): string {
  const labels: Record<string, string> = {
    db: 'DB',
    form: 'フォーム',
    button: 'ボタン',
    link: 'リンク',
    modal: 'モーダル',
    conditional: '条件',
    computed: '計算',
    api: 'API',
    other: 'その他',
  }
  return labels[tag] || tag
}

// Get note type color (prioritizes elementType, then displayType)
function getNoteColor(selector: string): string {
  const config = store.getElementConfig(selector)

  // Priority 1: elementType color (action/form)
  if (config?.elementType && elementTypeColors[config.elementType]) {
    return elementTypeColors[config.elementType]
  }

  // Priority 2: displayType color
  if (config?.note?.displayType) {
    return displayTypeColors[config.note.displayType] || '#60a5fa'
  }

  if (!config?.sourceBinding) {
    const noteType = config?.note?.type || 'info'
    const colors: Record<string, string> = {
      info: '#60a5fa',
      warning: '#fbbf24',
      todo: '#10b981',
      question: '#a78bfa',
    }
    return colors[noteType] || '#60a5fa'
  }

  // Color based on source binding type
  if (config.sourceBinding.isStatic) return '#10b981'
  if (config.sourceBinding.type === 'v-model') return '#8b5cf6'
  if (config.sourceBinding.type === 'api') return '#f59e0b'
  return '#60a5fa'
}

// Check if a note annotation matches the current noteHighlightFilter
function matchesNoteFilter(selector: string): boolean {
  const filter = store.noteHighlightFilter
  if (filter === 'all') return true

  const config = store.getElementConfig(selector)
  if (!config) return false

  const dt = config.note?.displayType
  const hasCondition = !!(config.note?.condition || config.note?.conditionColumn)
  const isStoredCalc = !!(config.note?.storedCalc)

  switch (filter) {
    case 'db':
      return dt === 'db_direct' || dt === 'db_formatted'
    case 'calculated':
      return dt === 'calculated'
    case 'storedCalc':
      return isStoredCalc
    case 'static':
      return dt === 'static'
    case 'conditional':
      return hasCondition
    case 'action':
      return config.elementType === 'action'
    case 'form':
      return config.elementType === 'form'
    case 'other':
      return dt === 'other' || (!dt && !config.elementType && !!config.note?.text)
    default:
      return true
  }
}

// Existing annotations on current page (as highlight boxes)
const existingAnnotations = computed(() => {
  // Access scroll values to make this reactive
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const annotations: Array<{
    selector: string
    top: string
    left: string
    width: string
    height: string
    color: string
    isStatic: boolean
    label: string
    noteText: string
    noteType: 'info' | 'warning' | 'todo' | 'question'
    hasNote: boolean
  }> = []

  if (!store.isEnabled) return annotations

  const selectors = store.getConfiguredSelectors()
  for (const selector of selectors) {
    try {
      const element = document.querySelector(selector) as HTMLElement | null
      if (element) {
        const rect = element.getBoundingClientRect()
        const config = store.getElementConfig(selector)
        const isStatic = config?.sourceBinding?.isStatic || false
        const bindingType = config?.sourceBinding?.type || ''

        // Build label based on elementType (priority) > displayType > fallback
        let label = ''
        let tooltipText = ''
        const dt = config?.note?.displayType

        // Build meta details line for tooltip
        const metaParts: string[] = []
        if (config?.note?.sampleValue) metaParts.push(`例: ${config.note.sampleValue}${config.note.unit ? config.note.unit : ''}`)
        else if (config?.note?.unit) metaParts.push(`単位: ${config.note.unit}`)
        if (config?.note?.decimalHandling) {
          const dh: Record<string, string> = { round: '四捨五入', floor: '切り捨て', ceil: '切り上げ', decimal_1: '小数第1位', decimal_2: '小数第2位', integer: '整数' }
          metaParts.push(dh[config.note.decimalHandling] || config.note.decimalHandling)
        }
        if (config?.note?.nullDisplay) metaParts.push(`NULL時: ${config.note.nullDisplay}`)
        if (config?.note?.displayFormat) metaParts.push(config.note.displayFormat)
        const metaLine = metaParts.length > 0 ? `\n${metaParts.join(' / ')}` : ''

        // Condition info
        const hasCondition = !!(config?.note?.condition || config?.note?.conditionColumn)
        let conditionLine = ''
        if (hasCondition) {
          const bhLabels: Record<string, string> = { hidden: '非表示', disabled: '無効化', different_value: '別の値', empty: '空欄' }
          const parts: string[] = []
          if (config?.note?.condition) parts.push(config.note.condition)
          if (config?.note?.conditionColumn) parts.push(`判定: ${config.note.conditionColumn}`)
          if (config?.note?.hiddenBehavior) parts.push(`不一致時: ${bhLabels[config.note.hiddenBehavior] || config.note.hiddenBehavior}`)
          if (config?.note?.hiddenNote) parts.push(`→ ${config.note.hiddenNote}`)
          conditionLine = `\n条件: ${parts.join(' / ')}`
        }

        const condMark = hasCondition ? ' ⚡' : ''

        // Priority 1: elementType === 'action' + actionInfo
        if (config?.elementType === 'action' && config?.actionInfo) {
          const ai = config.actionInfo
          if (ai.type === 'navigate') {
            label = `遷移: ${ai.target || '?'}`
          } else if (ai.type === 'api') {
            label = `API: ${ai.method || 'GET'} ${ai.target || '?'}`
          } else if (ai.type === 'modal') {
            label = `モーダル: ${ai.target || '?'}`
          } else if (ai.type === 'emit') {
            label = `イベント: ${ai.target || '?'}`
          } else if (ai.type === 'function') {
            label = `関数: ${ai.target || '?'}`
          } else {
            label = 'アクション'
          }
          tooltipText = (ai.description || label) +
            (config?.note?.text ? `\n${config.note.text}` : '')
        }
        // Priority 2: elementType === 'form' + formInfo
        else if (config?.elementType === 'form' && config?.formInfo) {
          const fi = config.formInfo
          const fields = config?.fieldInfoList?.length ? config.fieldInfoList : (config?.fieldInfo ? [config.fieldInfo] : [])
          const colName = fields.length > 0 ? fields.map(f => `${f.table}.${f.column}`).join(', ') : ''
          // Master count for form selects
          const formMasterKey = fields.length > 0 ? `${fields[0].table}.${fields[0].column}` : ''
          const formMaster = formMasterKey ? store.getMasterDefinition(formMasterKey) : null

          if (fi.inputType === 'select') {
            label = `選択: ${colName || fi.description || '?'}${formMaster ? ` (${formMaster.entries.length}件)` : ''}`
          } else if (fi.inputType === 'textarea') {
            label = `テキスト: ${colName || fi.description || '?'}`
          } else if (fi.inputType === 'checkbox') {
            label = `チェック: ${colName || fi.description || '?'}`
          } else if (fi.inputType === 'radio') {
            label = `ラジオ: ${colName || fi.description || '?'}`
          } else {
            label = `入力: ${colName || fi.description || fi.inputType || '?'}`
          }
          if (fi.required) {
            label += ' (必須)'
          }
          const tooltipParts: string[] = []
          if (fi.description) tooltipParts.push(fi.description)
          if (fi.validation?.length) tooltipParts.push(`検証: ${fi.validation.join(', ')}`)
          if (fi.placeholder) tooltipParts.push(`placeholder: ${fi.placeholder}`)
          if (fi.defaultValue) tooltipParts.push(`初期値: ${fi.defaultValue}`)
          tooltipText = tooltipParts.join('\n') +
            (config?.note?.text ? `\n${config.note.text}` : '')
        }
        // Priority 3: elementType without detailed info
        else if (config?.elementType === 'action') {
          label = 'アクション'
          tooltipText = config?.note?.text || ''
        }
        else if (config?.elementType === 'form') {
          label = 'フォーム'
          tooltipText = config?.note?.text || ''
        }
        // Priority 4: displayType-based labels
        else if (dt === 'db_direct') {
          const fields = config?.fieldInfoList?.length ? config.fieldInfoList : (config?.fieldInfo ? [config.fieldInfo] : [])
          if (fields.length > 0) {
            const colNames = fields.map(f => `${f.table}.${f.column}`).join(', ')
            // Check for master definition
            const masterKey = `${fields[0].table}.${fields[0].column}`
            const master = store.getMasterDefinition(masterKey)
            const masterSuffix = master ? ` (${master.entries.length}値)` : ''
            label = `DB: ${colNames}${masterSuffix}${condMark}`
            tooltipText = fields.map(f => `${f.table}.${f.column}${f.type ? ` (${f.type})` : ''}`).join('\n') +
              metaLine + conditionLine +
              (config?.note?.text ? `\n${config.note.text}` : '')
          }
        } else if (dt === 'db_formatted') {
          const fields = config?.fieldInfoList?.length ? config.fieldInfoList : (config?.fieldInfo ? [config.fieldInfo] : [])
          if (fields.length > 0) {
            const colNames = fields.map(f => `${f.table}.${f.column}`).join(', ')
            const masterKey = `${fields[0].table}.${fields[0].column}`
            const master = store.getMasterDefinition(masterKey)
            const masterSuffix = master ? ` (${master.entries.length}値)` : ''
            label = `DB: ${colNames} (整形)${masterSuffix}${condMark}`
            tooltipText = fields.map(f => `${f.table}.${f.column}`).join('\n') +
              (config?.note?.formatDescription ? `\n整形: ${config.note.formatDescription}` : '') +
              metaLine + conditionLine +
              (config?.note?.text ? `\n${config.note.text}` : '')
          }
        } else if (dt === 'calculated') {
          label = '計算値' + (config?.note?.unit ? ` (${config.note.unit})` : '') + condMark
          tooltipText = (config?.note?.calcDescription || '計算値') +
            (config?.note?.calcSources?.length ? `\n参照: ${config.note.calcSources.join(', ')}` : '') +
            metaLine + conditionLine +
            (config?.note?.text ? `\n${config.note.text}` : '')
        } else if (dt === 'static') {
          label = '固定' + condMark
          tooltipText = (config?.note?.text || '固定文言') + conditionLine
        } else if (dt === 'other') {
          label = 'メモ'
          tooltipText = config?.note?.text || ''
        } else if (config?.fieldInfoList?.length || (config?.fieldInfo?.table && config?.fieldInfo?.column)) {
          // Fallback: old-style fieldInfo without displayType
          const fields = config?.fieldInfoList?.length ? config.fieldInfoList : (config?.fieldInfo ? [config.fieldInfo] : [])
          const colNames = fields.map(f => `${f.table}.${f.column}`).join(', ')
          label = `DB: ${colNames}`
          tooltipText = config?.note?.text || ''
        } else if (isStatic) {
          label = '固定'
          tooltipText = config?.note?.text || '固定文言'
        } else if (bindingType === 'v-model') {
          label = 'フォーム'
          tooltipText = config?.note?.text || ''
        } else if (bindingType === 'api') {
          label = 'データ'
          tooltipText = config?.note?.text || ''
        } else if (config?.note?.type) {
          const typeLabels: Record<string, string> = {
            info: '情報',
            warning: '注意',
            todo: 'TODO',
            question: '質問',
          }
          label = typeLabels[config.note.type] || 'メモ'
          tooltipText = config?.note?.text || ''
        } else {
          label = 'メモ'
          tooltipText = config?.note?.text || ''
        }

        const noteText = tooltipText || config?.note?.text || ''
        const noteType = (config?.note?.type || 'info') as 'info' | 'warning' | 'todo' | 'question'
        const hasNote = !!(config?.note?.text || config?.note?.displayType)

        annotations.push({
          selector,
          top: `${rect.top + _scrollY}px`,
          left: `${rect.left + _scrollX}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          color: getNoteColor(selector),
          isStatic,
          label,
          noteText,
          noteType,
          hasNote,
        })
      }
    } catch {
      // Invalid selector, skip
    }
  }

  return annotations
})

// Scanned elements highlights (yellow boxes)
const scannedHighlights = computed(() => {
  // Access scroll values to make this reactive
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const highlights: Array<{
    selector: string
    top: string
    left: string
    width: string
    height: string
    isStatic: boolean
  }> = []

  if (!store.isEnabled || store.scanResults.length === 0) return highlights

  for (const result of store.scanResults) {
    try {
      const element = document.querySelector(result.selector) as HTMLElement | null
      if (element) {
        const rect = element.getBoundingClientRect()
        highlights.push({
          selector: result.selector,
          top: `${rect.top + _scrollY}px`,
          left: `${rect.left + _scrollX}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          isStatic: result.detected.sourceBinding?.isStatic || false,
        })
      }
    } catch {
      // Invalid selector, skip
    }
  }

  return highlights
})

// Analysis results highlights (from CLI analysis data + DOM data-di-* attributes)
const analysisHighlights = computed(() => {
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const highlights: Array<{
    selector: string
    top: string
    left: string
    width: string
    height: string
    tags: string[]
    primaryTag: string
    text: string
    dbInfo?: string
    apiInfo?: string
    apiSource?: string  // e.g., "GET /users"
    conditionalExpr?: string
    modalTarget?: string
  }> = []

  // Check filter setting
  const filter = store.analysisFilter
  if (filter === 'none') return highlights
  if (!store.isEnabled || store.analysisResults.length === 0) return highlights

  for (const result of store.analysisResults) {
    if (!result.matched) continue

    const el = result.element

    try {
      const element = document.querySelector(result.selector) as HTMLElement | null
      if (!element) continue

      const rect = element.getBoundingClientRect()

      // Skip very large elements (likely containers)
      if (rect.width > window.innerWidth * 0.8 || rect.height > window.innerHeight * 0.5) {
        continue
      }

      // PRIORITY: Check DOM data-di-* attributes (from Vite plugin)
      const diBindingEl = element.querySelector('[data-di-binding]') ||
                          (element.hasAttribute('data-di-binding') ? element : null)

      let dbInfo = ''
      let binding = el.binding || ''
      const tags: string[] = [...(el.tags || [])]

      if (diBindingEl) {
        const diDb = diBindingEl.getAttribute('data-di-db')
        const diBinding = diBindingEl.getAttribute('data-di-binding')

        if (diDb) {
          dbInfo = diDb
          if (!tags.includes('db')) {
            tags.push('db')
          }
        }
        if (diBinding) {
          binding = diBinding
        }
      }

      // Fallback to CLI analysis data if no DOM attributes
      if (!dbInfo && el.db) {
        dbInfo = `${el.db.table}.${el.db.column}`
        if (!tags.includes('db')) {
          tags.push('db')
        }
      }

      let apiInfo = ''
      if (el.api) {
        apiInfo = `${el.api.method} ${el.api.endpoint}`
        if (!tags.includes('api')) {
          tags.push('api')
        }
      }

      // Look up API source for this binding (e.g., which API fetched this data)
      let apiSource = ''
      if (binding) {
        const api = store.getApiSourceForBinding(binding)
        if (api && api.endpoint) {
          apiSource = `${api.method || 'GET'} ${api.endpoint}`
        } else if (api && api.composable) {
          apiSource = api.composable
        }
      }

      // Extract additional info
      const conditionalExpr = el.conditional?.expression
      const modalTarget = el.modal?.target

      // Check element properties for filtering
      const hasDb = !!dbInfo || tags.includes('db')
      const hasApi = !!apiInfo || tags.includes('api')
      const hasForm = tags.includes('form')
      const hasButton = tags.includes('button')
      const hasLink = tags.includes('link')
      const hasModal = tags.includes('modal')
      const hasConditional = tags.includes('conditional')
      const hasComputed = tags.includes('computed')

      // Apply filter
      if (filter === 'db-api') {
        if (!hasDb && !hasApi) continue
      } else if (filter === 'form') {
        if (!hasForm) continue
      } else if (filter === 'button') {
        if (!hasButton) continue
      } else if (filter === 'link') {
        if (!hasLink) continue
      } else if (filter === 'modal') {
        if (!hasModal) continue
      } else if (filter === 'conditional') {
        if (!hasConditional) continue
      } else if (filter === 'computed') {
        if (!hasComputed) continue
      } else if (filter === 'other') {
        if (hasDb || hasApi || hasForm || hasButton || hasLink || hasModal || hasConditional || hasComputed) continue
      }
      // 'all' shows everything

      // Determine primary tag for styling (priority order)
      let primaryTag = 'other'
      if (hasDb) primaryTag = 'db'
      else if (hasApi) primaryTag = 'api'
      else if (hasForm) primaryTag = 'form'
      else if (hasButton) primaryTag = 'button'
      else if (hasLink) primaryTag = 'link'
      else if (hasModal) primaryTag = 'modal'
      else if (hasConditional) primaryTag = 'conditional'
      else if (hasComputed) primaryTag = 'computed'

      highlights.push({
        selector: result.selector,
        top: `${rect.top + _scrollY}px`,
        left: `${rect.left + _scrollX}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        tags,
        primaryTag,
        text: el.text || binding || '',
        dbInfo,
        apiInfo,
        apiSource,
        conditionalExpr,
        modalTarget,
      })
    } catch {
      // Invalid selector, skip
    }
  }

  return highlights
})

// Unannotated elements highlights (orange dashed boxes)
const unannotatedHighlights = computed(() => {
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const highlights: Array<{
    selector: string
    top: string
    left: string
    width: string
    height: string
    category: string
    text: string
  }> = []

  if (!store.isEnabled || !store.showUnannotatedDetection || store.unannotatedElements.length === 0) return highlights

  for (const uEl of store.unannotatedElements) {
    try {
      const element = document.querySelector(uEl.selector) as HTMLElement | null
      if (!element) continue

      const rect = element.getBoundingClientRect()
      highlights.push({
        selector: uEl.selector,
        top: `${rect.top + _scrollY}px`,
        left: `${rect.left + _scrollX}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        category: uEl.category,
        text: uEl.text,
      })
    } catch {
      // Invalid selector, skip
    }
  }

  return highlights
})

function handleMouseMove(e: MouseEvent) {
  if (!store.isPickMode) return

  // Ignore dev mode UI elements
  const target = e.target as HTMLElement
  if (target.closest('[data-dev-inspector]')) {
    highlightStyle.value = null
    hoveredElement.value = null
    store.setHoveredSelector(null)
    return
  }

  // Get the element under cursor
  const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement
  if (!element || element === document.body || element === document.documentElement) {
    highlightStyle.value = null
    hoveredElement.value = null
    store.setHoveredSelector(null)
    return
  }

  // Skip if it's our overlay
  if (element.closest('[data-dev-inspector]')) {
    return
  }

  hoveredElement.value = element
  const rect = element.getBoundingClientRect()
  highlightStyle.value = {
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  }

  const selector = store.generateSelector(element)
  store.setHoveredSelector(selector)
}

function handleClick(e: MouseEvent) {
  if (!store.isPickMode) return

  const target = e.target as HTMLElement
  if (target.closest('[data-dev-inspector]')) return

  e.preventDefault()
  e.stopPropagation()

  if (hoveredElement.value) {
    const selector = store.generateSelector(hoveredElement.value)

    // Remap mode: move broken annotation to this new element
    if (store.remapTargetId) {
      store.remapAnnotation(store.remapTargetId, selector)
      store.remapTargetId = null
      store.togglePickMode()
      store.openPanel()
      return
    }

    store.startEditing(selector)
    store.togglePickMode() // Turn off pick mode after selection
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && store.isPickMode) {
    store.remapTargetId = null
    store.togglePickMode()
  }
}

// Update annotation positions on scroll/resize
function updateAnnotationPositions() {
  scrollY.value = window.scrollY
  scrollX.value = window.scrollX
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, true)
  window.addEventListener('click', handleClick, true)
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', updateAnnotationPositions)
  window.addEventListener('resize', updateAnnotationPositions)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove, true)
  window.removeEventListener('click', handleClick, true)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', updateAnnotationPositions)
  window.removeEventListener('resize', updateAnnotationPositions)
})

// Clear highlight when pick mode is disabled
watch(() => store.isPickMode, (isPicking) => {
  if (!isPicking) {
    highlightStyle.value = null
    hoveredElement.value = null
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Loading overlay during initialization -->
    <div v-if="store.isInitializing" data-dev-inspector class="di-loading-overlay">
      <div class="di-loading-content">
        <div class="di-loading-spinner"></div>
        <span class="di-loading-text">Developer Mode 起動中...</span>
      </div>
    </div>

    <!-- Highlight box for hovered element -->
    <div
      v-if="store.isPickMode && highlightStyle"
      data-dev-inspector
      class="di-highlight"
      :style="{
        top: highlightStyle.top,
        left: highlightStyle.left,
        width: highlightStyle.width,
        height: highlightStyle.height,
      }"
    >
      <div class="di-highlight-label">{{ store.hoveredSelector }}</div>
    </div>

    <!-- Pick mode instruction banner -->
    <div v-if="store.isPickMode" data-dev-inspector class="di-pick-banner" :style="store.remapTargetId ? { background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' } : {}">
      <span>{{ store.remapTargetId ? '新しい要素をクリックして再設定' : '要素をクリックしてメモを追加' }}</span>
      <kbd>ESC</kbd>
      <span class="di-pick-hint">でキャンセル</span>
    </div>

    <!-- Existing annotation boxes (when not in pick mode) -->
    <template v-if="store.isEnabled && !store.isPickMode && !store.editingElementId">
      <div
        v-for="annotation in existingAnnotations"
        :key="annotation.selector"
        v-show="!annotation.hasNote || (store.showNoteHighlights && matchesNoteFilter(annotation.selector))"
        data-dev-inspector
        :class="annotation.hasNote ? 'di-note-highlight' : 'di-annotation-box'"
        :style="{
          top: annotation.top,
          left: annotation.left,
          width: annotation.width,
          height: annotation.height,
          borderColor: annotation.hasNote ? annotation.color : annotation.color,
          backgroundColor: annotation.color + (annotation.hasNote ? '18' : '15'),
        }"
        @click="store.startEditing(annotation.selector)"
      >
        <!-- Note highlight: indicator dot + label -->
        <template v-if="annotation.hasNote">
          <div class="di-note-label-row">
            <span
              class="di-note-indicator"
              :style="{ backgroundColor: annotation.color }"
            ></span>
            <div
              class="di-annotation-label"
              :style="{ backgroundColor: annotation.color }"
            >
              {{ annotation.label }}
            </div>
          </div>
        </template>
        <!-- Regular annotation: label only -->
        <template v-else>
          <div
            class="di-annotation-label"
            :style="{ backgroundColor: annotation.color }"
          >
            {{ annotation.label }}
          </div>
        </template>
      </div>
    </template>

    <!-- Scanned elements highlights (yellow/green boxes) - hidden when analysis results are active -->
    <template v-if="store.isEnabled && !store.editingElementId && scannedHighlights.length > 0 && store.analysisResults.length === 0">
      <div
        v-for="highlight in scannedHighlights"
        :key="'scan-' + highlight.selector"
        data-dev-inspector
        class="di-scan-highlight"
        :class="{ 'di-scan-static': highlight.isStatic }"
        :style="{
          top: highlight.top,
          left: highlight.left,
          width: highlight.width,
          height: highlight.height,
        }"
        @click="store.startEditing(highlight.selector)"
      >
        <div class="di-scan-label" :class="{ 'di-scan-label-static': highlight.isStatic }">
          {{ highlight.isStatic ? '固定文言' : '動的データ' }}
        </div>
      </div>

      <!-- Scan results banner -->
      <div data-dev-inspector class="di-scan-banner">
        <span>{{ scannedHighlights.length }}件の要素を検出</span>
        <button @click="store.clearScanResults()" class="di-scan-banner-close">✕ 閉じる</button>
      </div>
    </template>

    <!-- Analysis results highlights (from CLI data) -->
    <template v-if="store.isEnabled && !store.editingElementId && analysisHighlights.length > 0">
      <div
        v-for="highlight in analysisHighlights"
        :key="'analysis-' + highlight.selector"
        data-dev-inspector
        class="di-analysis-highlight"
        :class="'di-analysis-' + highlight.primaryTag"
        :style="{
          top: highlight.top,
          left: highlight.left,
          width: highlight.width,
          height: highlight.height,
        }"
        @click="store.startEditing(highlight.selector)"
      >
        <div class="di-analysis-label" :class="'di-analysis-label-' + highlight.primaryTag">
          <span class="di-analysis-type">{{ getTagLabel(highlight.primaryTag) }}</span>
          <span v-if="highlight.tags.length > 1" class="di-analysis-tags">+{{ highlight.tags.length - 1 }}</span>
          <span v-if="highlight.dbInfo" class="di-analysis-db">{{ highlight.dbInfo }}</span>
          <span v-if="highlight.apiSource" class="di-analysis-api-source">← {{ highlight.apiSource }}</span>
          <span v-if="highlight.conditionalExpr" class="di-analysis-conditional">{{ highlight.conditionalExpr }}</span>
          <button
            class="di-analysis-delete"
            @click.stop="store.removeAnalysisResult(highlight.selector)"
            title="この要素を非表示"
          >×</button>
        </div>
        <div v-if="highlight.text && highlight.text.length < 30" class="di-analysis-text">
          {{ highlight.text }}
        </div>
      </div>

      <!-- Analysis results banner -->
      <div data-dev-inspector class="di-analysis-banner">
        <span>📊 分析データ: {{ analysisHighlights.length }}件の要素</span>
      </div>
    </template>

    <!-- Unannotated element highlights (orange dashed boxes) -->
    <template v-if="store.isEnabled && !store.isPickMode && !store.editingElementId && unannotatedHighlights.length > 0">
      <div
        v-for="highlight in unannotatedHighlights"
        :key="'unannotated-' + highlight.selector"
        data-dev-inspector
        class="di-unannotated-highlight"
        :class="{
          'di-unannotated-hovered': store.hoveredUnannotatedSelector === highlight.selector,
          ['di-unannotated-hovered-' + highlight.category]: store.hoveredUnannotatedSelector === highlight.selector,
        }"
        :style="{
          top: highlight.top,
          left: highlight.left,
          width: highlight.width,
          height: highlight.height,
        }"
        @click="store.quickAnnotate(highlight.selector, highlight.category === 'form' ? 'form' : highlight.category === 'action' ? 'action' : 'datasource')"
      >
        <div class="di-unannotated-label" :class="{ ['di-unannotated-label-' + highlight.category]: store.hoveredUnannotatedSelector === highlight.selector }">
          <span>{{ highlight.category === 'binding' ? 'DB' : highlight.category === 'form' ? 'Form' : 'Act' }}</span>
          <span v-if="highlight.text" class="di-unannotated-label-text">{{ highlight.text }}</span>
        </div>
      </div>
    </template>
  </Teleport>
</template>

<style scoped>
/* Loading overlay */
.di-loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(4px);
}
.di-loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.di-loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #334155;
  border-top-color: #60a5fa;
  border-radius: 50%;
  animation: di-spin 1s linear infinite;
}
@keyframes di-spin {
  to { transform: rotate(360deg); }
}
.di-loading-text {
  color: #e2e8f0;
  font-size: 16px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.di-highlight {
  position: fixed;
  pointer-events: none;
  z-index: 9997;
  border: 2px solid #10b981;
  background: rgba(16, 185, 129, 0.1);
  transition: all 0.075s ease-out;
}

.di-highlight-label {
  position: absolute;
  top: -24px;
  left: 0;
  padding: 2px 8px;
  background: #10b981;
  color: white;
  font-size: 10px;
  font-family: monospace;
  border-radius: 4px;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.di-pick-banner {
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 8px 16px;
  background: #10b981;
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-pick-banner kbd {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 10px;
}
.di-pick-hint {
  font-size: 10px;
  opacity: 0.8;
}

/* Annotation boxes for existing configs */
.di-annotation-box {
  position: absolute;
  z-index: 9996;
  border: 2px solid;
  cursor: pointer;
  transition: all 0.2s;
}
.di-annotation-box:hover {
  filter: brightness(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.di-annotation-label {
  position: absolute;
  top: -18px;
  left: 0;
  padding: 1px 6px;
  color: white;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Note highlight (dashed border, card-style) */
.di-note-highlight {
  position: absolute;
  z-index: 9996;
  border: 2px dashed;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  animation: di-note-fadein 0.4s ease-out;
}
.di-note-highlight:hover {
  filter: brightness(1.15);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
}

.di-note-label-row {
  position: absolute;
  bottom: calc(100% + 2px);
  left: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
.di-note-label-row .di-annotation-label {
  position: static;
}

.di-note-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

@keyframes di-note-fadein {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

/* Scanned element highlights */
.di-scan-highlight {
  position: absolute;
  z-index: 9995;
  border: 2px solid #fbbf24;
  background: rgba(251, 191, 36, 0.15);
  cursor: pointer;
  transition: all 0.2s;
}
.di-scan-highlight:hover {
  background: rgba(251, 191, 36, 0.3);
  border-color: #f59e0b;
}
.di-scan-highlight.di-scan-static {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.15);
}
.di-scan-highlight.di-scan-static:hover {
  background: rgba(16, 185, 129, 0.3);
  border-color: #059669;
}

.di-scan-label {
  position: absolute;
  top: -20px;
  left: 0;
  padding: 2px 6px;
  background: #fbbf24;
  color: #1e293b;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-scan-label-static {
  background: #10b981;
  color: white;
}

.di-scan-banner {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 10px 16px;
  background: #fbbf24;
  color: #1e293b;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-scan-banner-close {
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: #1e293b;
  font-size: 11px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-scan-banner-close:hover {
  background: rgba(0, 0, 0, 0.2);
}

/* Analysis highlights (from CLI data) */
.di-analysis-highlight {
  position: absolute;
  z-index: 9994;
  border: 2px solid #3b82f6;
  background: rgba(59, 130, 246, 0.1);
  cursor: pointer;
  transition: all 0.2s;
}
.di-analysis-highlight:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: #2563eb;
}

.di-analysis-db {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.1);
}
.di-analysis-db:hover {
  background: rgba(59, 130, 246, 0.2);
}

.di-analysis-api {
  border-color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}
.di-analysis-api:hover {
  background: rgba(245, 158, 11, 0.2);
}

.di-analysis-form {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
}
.di-analysis-form:hover {
  background: rgba(139, 92, 246, 0.2);
}

.di-analysis-button {
  border-color: #ec4899;
  background: rgba(236, 72, 153, 0.1);
}
.di-analysis-button:hover {
  background: rgba(236, 72, 153, 0.2);
}

.di-analysis-link {
  border-color: #14b8a6;
  background: rgba(20, 184, 166, 0.1);
}
.di-analysis-link:hover {
  background: rgba(20, 184, 166, 0.2);
}

.di-analysis-modal {
  border-color: #a855f7;
  background: rgba(168, 85, 247, 0.1);
}
.di-analysis-modal:hover {
  background: rgba(168, 85, 247, 0.2);
}

.di-analysis-conditional {
  border-color: #06b6d4;
  background: rgba(6, 182, 212, 0.1);
}
.di-analysis-conditional:hover {
  background: rgba(6, 182, 212, 0.2);
}

.di-analysis-computed {
  border-color: #84cc16;
  background: rgba(132, 204, 22, 0.1);
}
.di-analysis-computed:hover {
  background: rgba(132, 204, 22, 0.2);
}

.di-analysis-other {
  border-color: #6b7280;
  background: rgba(107, 114, 128, 0.1);
}
.di-analysis-other:hover {
  background: rgba(107, 114, 128, 0.2);
}

.di-analysis-label {
  position: absolute;
  top: -22px;
  left: 0;
  padding: 2px 6px;
  background: #3b82f6;
  color: white;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.di-analysis-label-db {
  background: #3b82f6;
}
.di-analysis-label-api {
  background: #f59e0b;
  color: #1e293b;
}
.di-analysis-label-form {
  background: #8b5cf6;
}
.di-analysis-label-button {
  background: #ec4899;
}
.di-analysis-label-link {
  background: #14b8a6;
}
.di-analysis-label-modal {
  background: #a855f7;
}
.di-analysis-label-conditional {
  background: #06b6d4;
}
.di-analysis-label-computed {
  background: #84cc16;
  color: #1e293b;
}
.di-analysis-label-other {
  background: #6b7280;
}

.di-analysis-type {
  font-weight: 700;
}

.di-analysis-db,
.di-analysis-conditional,
.di-analysis-api-source {
  font-family: monospace;
  font-size: 8px;
  opacity: 0.9;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.di-analysis-api-source {
  color: #fcd34d;
  background: rgba(0, 0, 0, 0.2);
  padding: 1px 4px;
  border-radius: 3px;
}

.di-analysis-tags {
  font-size: 8px;
  padding: 0 3px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin-left: 2px;
}

.di-analysis-delete {
  margin-left: 4px;
  padding: 0 4px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 2px;
  color: white;
  font-size: 10px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s, background 0.2s;
}
.di-analysis-delete:hover {
  opacity: 1;
  background: rgba(239, 68, 68, 0.8);
}

.di-analysis-text {
  position: absolute;
  bottom: -18px;
  left: 0;
  padding: 1px 4px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 8px;
  border-radius: 2px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.di-analysis-banner {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 10px 16px;
  background: #3b82f6;
  color: white;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-analysis-banner-close {
  padding: 4px 8px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-analysis-banner-close:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Unannotated element highlights (orange dashed) */
.di-unannotated-highlight {
  position: absolute;
  z-index: 9993;
  border: 2px dashed #f97316;
  background: rgba(249, 115, 22, 0.08);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
}
.di-unannotated-highlight:hover {
  background: rgba(249, 115, 22, 0.18);
  border-color: #ea580c;
}
/* Hovered from panel list */
.di-unannotated-hovered {
  animation: di-unannotated-pulse 1.5s ease-in-out infinite;
}
.di-unannotated-hovered-binding {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.12);
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.3);
}
.di-unannotated-hovered-form {
  border-color: #ec4899;
  background: rgba(236, 72, 153, 0.12);
  box-shadow: 0 0 16px rgba(236, 72, 153, 0.3);
}
.di-unannotated-hovered-action {
  border-color: #a78bfa;
  background: rgba(167, 139, 250, 0.12);
  box-shadow: 0 0 16px rgba(167, 139, 250, 0.3);
}
@keyframes di-unannotated-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.di-unannotated-label {
  position: absolute;
  top: -20px;
  left: 0;
  padding: 1px 6px;
  background: #f97316;
  color: white;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  white-space: nowrap;
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background 0.2s;
}
.di-unannotated-label-binding {
  background: #3b82f6;
}
.di-unannotated-label-form {
  background: #ec4899;
}
.di-unannotated-label-action {
  background: #a78bfa;
}
.di-unannotated-label-text {
  font-weight: 400;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
