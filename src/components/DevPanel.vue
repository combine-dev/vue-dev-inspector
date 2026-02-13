<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { X, Code, FileText, ExternalLink, Server, AlertCircle, Edit3, Download, Upload, Trash2, MousePointer2, GitBranch, FileSpreadsheet, Scan, Loader2, Eye, EyeOff, Lock, Shield, PenSquare, AlertTriangle, Database, Plus, Search, ClipboardList, GitMerge, Clock } from 'lucide-vue-next'
import type { MasterDefinition, MasterEntry, StateTransition, BatchDefinition, BatchStep, CrossSearchMode, CrossSearchResult } from '../composables/useDevInspector'
import { useDevInspectorStore } from '../composables/useDevInspector'
import { exportScreenSpecToXlsx } from '../utils/exportScreenSpec'

const store = useDevInspectorStore()

const activeTab = ref<'elements' | 'masters' | 'batches' | 'export'>('elements')

const showExportModal = ref(false)
const showImportModal = ref(false)
const importText = ref('')
const importError = ref('')

const methodColors: Record<string, string> = {
  GET: '#10b981',
  POST: '#3b82f6',
  PUT: '#f59e0b',
  DELETE: '#ef4444',
  PATCH: '#8b5cf6',
}

const spec = computed(() => store.currentScreenSpec)
const currentScreenConfig = computed(() => store.getScreenConfig())
const screenInfo = computed(() => {
  const config = currentScreenConfig.value
  const s = spec.value
  if (!config && !s) return null
  return {
    name: config?.name || s?.name || '',
    description: config?.description || s?.description || '',
    componentPath: config?.componentPath || s?.componentPath || '',
    figmaUrl: config?.figmaUrl || s?.figmaUrl || '',
    apis: config?.apis || s?.apis?.map(a => ({ ...a, loadTiming: undefined as 'onMount' | 'action' | 'conditional' | undefined })) || [],
    auth: config?.auth || null,
    notes: config?.notes || (s?.notes ? s.notes.join('\n') : ''),
  }
})
const elementCount = computed(() => Object.keys(store.elementConfigs).length)
const currentPageElementsAll = computed(() => {
  const curPath = typeof window !== 'undefined' ? window.location.pathname : '/'
  return Object.entries(store.elementConfigs)
    .filter(([, config]) => !config.pagePath || config.pagePath === curPath)
    .map(([id, config]) => {
      // Build description from available info
      let desc = ''
      if (config.note?.text) desc = config.note.text
      else if (config.fieldInfo) desc = `${config.fieldInfo.table}.${config.fieldInfo.column}`
      else if (config.actionInfo?.description) desc = config.actionInfo.description
      else if (config.actionInfo?.type) {
        const labels: Record<string, string> = { navigate: '画面遷移', api: 'API', modal: 'モーダル', emit: 'イベント', function: '関数', csv_export: 'CSV出力', csv_import: 'CSV取込', email: 'メール送信' }
        desc = labels[config.actionInfo.type] || config.actionInfo.type
        if (config.actionInfo.target) desc += ` → ${config.actionInfo.target}`
      }
      else if (config.formInfo) desc = config.formInfo.label || config.formInfo.inputType || 'フォーム'
      if (!desc) desc = id

      return { id, desc, type: config.elementType, config }
    })
})
const currentPageElements = computed(() => {
  const filter = store.noteHighlightFilter
  if (filter === 'all') return currentPageElementsAll.value
  return currentPageElementsAll.value.filter(el => {
    const c = el.config
    const dt = c.note?.displayType
    const hasCondition = !!(c.note?.condition || c.note?.conditionColumn)
    const isStoredCalc = !!(c.note?.storedCalc)
    switch (filter) {
      case 'db': return dt === 'db_direct' || dt === 'db_formatted'
      case 'calculated': return dt === 'calculated'
      case 'storedCalc': return isStoredCalc
      case 'static': return dt === 'static'
      case 'conditional': return hasCondition
      case 'action': return c.elementType === 'action'
      case 'form': return c.elementType === 'form'
      case 'other': return dt === 'other' || (!dt && !c.elementType && !!c.note?.text)
      default: return true
    }
  })
})
const noteCount = computed(() => {
  return Object.values(store.elementConfigs).filter(c => !!(c.note?.text || c.note?.displayType)).length
})

const filteredNoteCount = computed(() => {
  const filter = store.noteHighlightFilter
  if (filter === 'all') return noteCount.value

  return Object.values(store.elementConfigs).filter(c => {
    if (!(c.note?.text || c.note?.displayType || c.elementType)) return false
    const dt = c.note?.displayType
    const hasCondition = !!(c.note?.condition || c.note?.conditionColumn)
    const isStoredCalc = !!(c.note?.storedCalc)

    switch (filter) {
      case 'db': return dt === 'db_direct' || dt === 'db_formatted'
      case 'calculated': return dt === 'calculated'
      case 'storedCalc': return isStoredCalc
      case 'static': return dt === 'static'
      case 'conditional': return hasCondition
      case 'action': return c.elementType === 'action'
      case 'form': return c.elementType === 'form'
      case 'other': return dt === 'other' || (!dt && !c.elementType && !!c.note?.text)
      default: return true
    }
  }).length
})

function copyExport() {
  const json = store.exportConfigs()
  navigator.clipboard.writeText(json)
  showExportModal.value = false
}

function downloadExport() {
  const json = store.exportConfigs()
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'dev-mode-configs.json'
  a.click()
  URL.revokeObjectURL(url)
  showExportModal.value = false
}

function downloadForGit() {
  store.downloadAnnotations()
}

async function exportToXlsx() {
  try {
    await exportScreenSpecToXlsx(
      store.currentScreenSpec,
      store.elementConfigs,
      { systemName: 'System' }
    )
  } catch (e) {
    console.error('Failed to export xlsx:', e)
    alert('xlsx export failed. Make sure xlsx package is installed.')
  }
}

function handleImport() {
  try {
    store.importConfigs(importText.value)
    importText.value = ''
    importError.value = ''
    showImportModal.value = false
  } catch {
    importError.value = 'JSONの形式が正しくありません'
  }
}

function handleFileImport(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    importText.value = e.target?.result as string
  }
  reader.readAsText(file)
}

function clearAll() {
  if (confirm('すべての要素設定を削除しますか？')) {
    store.clearAllConfigs()
  }
}

// Analysis data functions
const analysisUrl = ref('/dev-inspector-analysis.json')
const isLoadingAnalysis = ref(false)
const analysisLoadError = ref('')
const analysisMatchCount = ref(0)
const isRestoringHidden = ref(false)

const noteFilterOptions = [
  { value: 'all', label: 'すべて' },
  { value: 'db', label: 'DB' },
  { value: 'calculated', label: '計算値' },
  { value: 'storedCalc', label: '保存計算値' },
  { value: 'static', label: '固定' },
  { value: 'conditional', label: '条件付き' },
  { value: 'action', label: 'アクション' },
  { value: 'form', label: 'フォーム' },
  { value: 'other', label: 'その他' },
] as const

const filterOptions = [
  { value: 'all', label: 'すべて' },
  { value: 'db-api', label: 'DB/API' },
  { value: 'form', label: 'フォーム' },
  { value: 'button', label: 'ボタン' },
  { value: 'link', label: 'リンク' },
  { value: 'modal', label: 'モーダル' },
  { value: 'conditional', label: '条件' },
  { value: 'computed', label: '計算' },
  { value: 'other', label: 'その他' },
  { value: 'none', label: '非表示' },
] as const

// Current page APIs (computed when analysis is applied)
const currentPageApis = computed(() => {
  return store.getCurrentPageApis()
})

const loadTriggerLabels: Record<string, string> = {
  onMount: '画面読込時',
  useFetch: 'useFetch',
  useAsyncData: 'useAsyncData',
  watch: 'watch',
  action: 'アクション',
  unknown: '不明',
}

async function loadAnalysisData() {
  isLoadingAnalysis.value = true
  analysisLoadError.value = ''

  try {
    await store.loadAnalysisData(analysisUrl.value)
    if (store.analysisData) {
      const totalElements = Object.values(store.analysisData.components)
        .reduce((sum, c) => sum + c.elements.length, 0)
      alert(`分析データを読み込みました（${Object.keys(store.analysisData.components).length}コンポーネント、${totalElements}要素）`)
    } else {
      analysisLoadError.value = '分析データの読み込みに失敗しました'
    }
  } catch (e) {
    analysisLoadError.value = `読み込みエラー: ${e}`
  } finally {
    isLoadingAnalysis.value = false
  }
}

async function applyAnalysis() {
  if (!store.analysisData) {
    alert('先に分析データを読み込んでください')
    return
  }
  analysisMatchCount.value = await store.applyAnalysisToPage()
}

// Broken annotation detection
const brokenCount = computed(() => store.brokenAnnotations.length)

// Detect broken annotations when panel opens
watch(() => store.isPanelOpen, (open) => {
  if (open) {
    store.detectBrokenAnnotations()
  }
})

function handleDeleteBroken() {
  if (confirm(`${brokenCount.value}件の壊れたメモを削除しますか？`)) {
    store.deleteBrokenAnnotations()
  }
}

// ===== Master Definitions =====
const showMasterEditor = ref(false)
const editingMasterId = ref<string | null>(null)
const masterForm = ref({
  table: '',
  column: '',
  name: '',
  columnType: '',
  description: '',
  entries: [] as MasterEntry[],
  transitions: [] as StateTransition[],
})

const masterCount = computed(() => Object.keys(store.masterDefinitions).length)
const masterList = computed(() => {
  const masters = Object.values(store.masterDefinitions)
  // Group by table
  const grouped: Record<string, typeof masters> = {}
  for (const m of masters) {
    if (!grouped[m.table]) grouped[m.table] = []
    grouped[m.table].push(m)
  }
  return grouped
})

function startMasterEdit(id?: string) {
  if (id) {
    const m = store.getMasterDefinition(id)
    if (m) {
      editingMasterId.value = id
      masterForm.value = {
        table: m.table,
        column: m.column,
        name: m.name,
        columnType: m.columnType || '',
        description: m.description || '',
        entries: [...m.entries.map(e => ({ ...e }))],
        transitions: m.transitions ? m.transitions.map(t => ({ ...t })) : [],
      }
    }
  } else {
    editingMasterId.value = null
    masterForm.value = {
      table: '',
      column: '',
      name: '',
      columnType: '',
      description: '',
      entries: [{ value: '', label: '' }],
      transitions: [],
    }
  }
  showMasterEditor.value = true
}

function saveMasterForm() {
  const f = masterForm.value
  if (!f.table || !f.column) return

  const id = `${f.table}.${f.column}`
  const validTransitions = f.transitions.filter(t => t.from || t.to || t.trigger)
  const def: MasterDefinition = {
    id,
    table: f.table,
    column: f.column,
    name: f.name || f.column,
    columnType: f.columnType || undefined,
    description: f.description || undefined,
    entries: f.entries.filter(e => e.value || e.label),
    transitions: validTransitions.length > 0 ? validTransitions : undefined,
    updatedAt: new Date().toISOString(),
  }
  store.setMasterDefinition(def)
  showMasterEditor.value = false
}

function addMasterEntry() {
  masterForm.value.entries.push({ value: '', label: '' })
}

function removeMasterEntry(index: number) {
  masterForm.value.entries.splice(index, 1)
}

function addTransition() {
  masterForm.value.transitions.push({ from: '', to: '', trigger: '' })
}

function removeTransition(index: number) {
  masterForm.value.transitions.splice(index, 1)
}

function handleDeleteMaster(id: string) {
  if (confirm(`マスタ定義「${id}」を削除しますか？`)) {
    store.deleteMasterDefinition(id)
  }
}

// ===== Batch Definitions =====
const showBatchEditor = ref(false)
const editingBatchId = ref<string | null>(null)
const batchForm = ref({
  name: '',
  schedule: '',
  trigger: '',
  description: '',
  inputTables: [] as string[],
  outputTables: [] as string[],
  steps: [] as BatchStep[],
  timeout: '',
  retryPolicy: '',
  notifyOnError: '',
  notifyOnComplete: '',
})
const batchInputTableInput = ref('')
const batchOutputTableInput = ref('')

const batchCount = computed(() => Object.keys(store.batchDefinitions).length)
const batchList = computed(() => Object.values(store.batchDefinitions))

function startBatchEdit(id?: string) {
  if (id) {
    const b = store.getBatchDefinition(id)
    if (b) {
      editingBatchId.value = id
      batchForm.value = {
        name: b.name,
        schedule: b.schedule || '',
        trigger: b.trigger || '',
        description: b.description || '',
        inputTables: b.inputTables ? [...b.inputTables] : [],
        outputTables: b.outputTables ? [...b.outputTables] : [],
        steps: b.steps.map(s => ({ ...s })),
        timeout: b.timeout || '',
        retryPolicy: b.retryPolicy || '',
        notifyOnError: b.notifyOnError || '',
        notifyOnComplete: b.notifyOnComplete || '',
      }
    }
  } else {
    editingBatchId.value = null
    batchForm.value = {
      name: '',
      schedule: '',
      trigger: '',
      description: '',
      inputTables: [],
      outputTables: [],
      steps: [{ order: 1, description: '' }],
      timeout: '',
      retryPolicy: '',
      notifyOnError: '',
      notifyOnComplete: '',
    }
  }
  batchInputTableInput.value = ''
  batchOutputTableInput.value = ''
  showBatchEditor.value = true
}

function saveBatchForm() {
  const f = batchForm.value
  if (!f.name) return

  const id = editingBatchId.value || `batch_${f.name.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`
  const def: BatchDefinition = {
    id,
    name: f.name,
    schedule: f.schedule || undefined,
    trigger: f.trigger || undefined,
    description: f.description || undefined,
    inputTables: f.inputTables.length > 0 ? f.inputTables : undefined,
    outputTables: f.outputTables.length > 0 ? f.outputTables : undefined,
    steps: f.steps.filter(s => s.description).map((s, i) => ({ ...s, order: i + 1 })),
    timeout: f.timeout || undefined,
    retryPolicy: f.retryPolicy || undefined,
    notifyOnError: f.notifyOnError || undefined,
    notifyOnComplete: f.notifyOnComplete || undefined,
    updatedAt: new Date().toISOString(),
  }
  store.setBatchDefinition(def)
  showBatchEditor.value = false
}

function addBatchStep() {
  const nextOrder = batchForm.value.steps.length + 1
  batchForm.value.steps.push({ order: nextOrder, description: '' })
}

function removeBatchStep(index: number) {
  batchForm.value.steps.splice(index, 1)
}

function handleDeleteBatch(id: string) {
  if (confirm(`バッチ定義「${store.getBatchDefinition(id)?.name || id}」を削除しますか？`)) {
    store.deleteBatchDefinition(id)
  }
}

function addBatchInputTable() {
  const val = batchInputTableInput.value.trim()
  if (val && !batchForm.value.inputTables.includes(val)) {
    batchForm.value.inputTables.push(val)
  }
  batchInputTableInput.value = ''
}

function removeBatchInputTable(index: number) {
  batchForm.value.inputTables.splice(index, 1)
}

function addBatchOutputTable() {
  const val = batchOutputTableInput.value.trim()
  if (val && !batchForm.value.outputTables.includes(val)) {
    batchForm.value.outputTables.push(val)
  }
  batchOutputTableInput.value = ''
}

function removeBatchOutputTable(index: number) {
  batchForm.value.outputTables.splice(index, 1)
}

async function restoreHiddenElements() {
  isRestoringHidden.value = true
  try {
    store.clearHiddenSelectors()
    // Re-apply analysis to show restored elements
    if (store.analysisData) {
      await store.applyAnalysisToPage()
    }
  } finally {
    isRestoringHidden.value = false
  }
}

// ===== Cross Search =====
const crossSearchModes: { value: CrossSearchMode; label: string; placeholder: string }[] = [
  { value: 'column', label: 'カラム', placeholder: 'users.email, orders...' },
  { value: 'api', label: 'API', placeholder: 'GET /api/users...' },
  { value: 'text', label: 'テキスト', placeholder: 'メモ、説明文で検索...' },
]

const crossSearchPlaceholder = computed(() => {
  return crossSearchModes.find(m => m.value === store.crossSearchMode)?.placeholder || '検索...'
})

// Group cross search results by page
const crossSearchGrouped = computed(() => {
  const groups: Record<string, { pagePath: string; pageName: string; items: CrossSearchResult[] }> = {}
  for (const r of store.crossSearchResults) {
    if (!groups[r.pagePath]) {
      groups[r.pagePath] = { pagePath: r.pagePath, pageName: r.pageName, items: [] }
    }
    groups[r.pagePath].items.push(r)
  }
  return Object.values(groups)
})

const crossSearchPageCount = computed(() => crossSearchGrouped.value.length)

// ===== Unannotated Detection =====
const unannotatedCounts = computed(() => {
  const elems = store.unannotatedElements
  return {
    binding: elems.filter(e => e.category === 'binding').length,
    form: elems.filter(e => e.category === 'form').length,
    action: elems.filter(e => e.category === 'action').length,
  }
})

function handleDetectUnannotated() {
  if (store.showUnannotatedDetection) {
    store.showUnannotatedDetection = false
    store.unannotatedElements = []
    store.hoveredUnannotatedSelector = null
  } else {
    store.showUnannotatedDetection = true
    store.detectUnannotatedElements()
  }
}

function dismissUnannotated(selector: string) {
  store.unannotatedElements = store.unannotatedElements.filter(e => e.selector !== selector)
}

function highlightUnannotated(selector: string) {
  store.hoveredUnannotatedSelector = selector
  // Scroll into view if off-screen
  try {
    const el = document.querySelector(selector) as HTMLElement | null
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  } catch { /* ignore */ }
}

function clearHighlight() {
  store.hoveredUnannotatedSelector = null
}

function highlightElement(selector: string) {
  store.hoveredSelector = selector
  try {
    const el = document.querySelector(selector) as HTMLElement | null
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  } catch { /* ignore */ }
}

function clearElementHighlight() {
  store.hoveredSelector = null
}

// ===== Screen Flow =====
const currentPath = computed(() => typeof window !== 'undefined' ? window.location.pathname : '/')

// Group edges by fromPath
const screenFlowGrouped = computed(() => {
  const data = store.screenFlowData
  const groups: Record<string, { node: typeof data.nodes[0]; edges: typeof data.edges }> = {}

  // Initialize from all nodes that have outgoing edges
  for (const edge of data.edges) {
    if (!groups[edge.from]) {
      const node = data.nodes.find(n => n.path === edge.from) || { path: edge.from, name: edge.from, annotationCount: 0 }
      groups[edge.from] = { node, edges: [] }
    }
    groups[edge.from].edges.push(edge)
  }

  return Object.values(groups)
})

function handleFlowEdgeClick(selector: string) {
  if (selector) {
    store.startEditing(selector)
  }
}
</script>

<template>
  <!-- Floating Toggle Button -->
  <Teleport to="body">
    <button
      v-if="store.isEnabled && !store.isPanelOpen"
      @click="store.openPanel"
      class="di-fab"
      title="画面仕様を表示"
      data-dev-inspector
    >
      <FileText style="width: 20px; height: 20px;" />
    </button>
  </Teleport>

  <!-- Panel -->
  <Teleport to="body">
    <div
      v-if="store.isEnabled && store.isPanelOpen"
      class="di-panel"
      data-dev-inspector
    >
      <!-- Header -->
      <div class="di-header">
        <div class="di-header-title">
          <Code style="width: 20px; height: 20px; color: #60a5fa;" />
          <span>Developer Mode</span>
        </div>
        <button @click="store.closePanel" class="di-close-btn">
          <X style="width: 20px; height: 20px;" />
        </button>
      </div>

      <!-- Tab Bar -->
      <div class="di-tab-bar">
        <button
          @click="activeTab = 'elements'"
          class="di-tab-btn"
          :class="{ active: activeTab === 'elements' }"
        >
          <Edit3 style="width: 14px; height: 14px;" />
          <span>要素設定</span>
          <span v-if="elementCount > 0" class="di-tab-badge">{{ elementCount }}</span>
        </button>
        <button
          @click="activeTab = 'masters'"
          class="di-tab-btn"
          :class="{ active: activeTab === 'masters' }"
        >
          <Database style="width: 14px; height: 14px;" />
          <span>マスタ</span>
          <span v-if="masterCount > 0" class="di-tab-badge">{{ masterCount }}</span>
        </button>
        <button
          @click="activeTab = 'batches'"
          class="di-tab-btn"
          :class="{ active: activeTab === 'batches' }"
        >
          <Clock style="width: 14px; height: 14px;" />
          <span>バッチ</span>
          <span v-if="batchCount > 0" class="di-tab-badge">{{ batchCount }}</span>
        </button>
        <button
          @click="activeTab = 'export'"
          class="di-tab-btn"
          :class="{ active: activeTab === 'export' }"
        >
          <Download style="width: 14px; height: 14px;" />
          <span>出力</span>
        </button>
      </div>

      <!-- Tools Section (elements tab only) -->
      <div v-show="activeTab === 'elements'" class="di-edit-section">
        <!-- Pick Mode Button -->
        <button
          @click="store.togglePickMode"
          class="di-pick-btn"
          :class="{ active: store.isPickMode }"
        >
          <MousePointer2 style="width: 16px; height: 16px;" />
          <span>{{ store.isPickMode ? '要素選択中...' : '任意の要素にメモを追加' }}</span>
        </button>

        <!-- Note Highlight Toggle -->
        <button
          v-if="noteCount > 0"
          @click="store.toggleNoteHighlights"
          class="di-note-toggle-btn"
          :class="{ active: store.showNoteHighlights }"
        >
          <Eye v-if="store.showNoteHighlights" style="width: 14px; height: 14px;" />
          <EyeOff v-else style="width: 14px; height: 14px;" />
          <span>メモハイライト</span>
          <span class="di-note-toggle-badge">{{ store.noteHighlightFilter === 'all' ? noteCount : `${filteredNoteCount}/${noteCount}` }}</span>
        </button>

        <!-- Note Highlight Filter -->
        <div
          v-if="noteCount > 0 && store.showNoteHighlights"
          class="di-note-filter"
        >
          <div class="di-filter-buttons">
            <button
              v-for="opt in noteFilterOptions"
              :key="opt.value"
              @click="store.noteHighlightFilter = opt.value"
              class="di-filter-btn"
              :class="{ active: store.noteHighlightFilter === opt.value }"
            >
              {{ opt.label }}
            </button>
          </div>
        </div>

        <!-- Registered Elements List -->
        <div v-if="currentPageElementsAll.length > 0" class="di-element-list-section">
          <div class="di-element-list-header">
            <Edit3 style="width: 14px; height: 14px; color: #94a3b8;" />
            <span>登録済み要素</span>
            <span class="di-count-badge">{{ currentPageElements.length }}<span v-if="currentPageElements.length !== currentPageElementsAll.length"> / {{ currentPageElementsAll.length }}</span></span>
          </div>
          <div class="di-element-list">
            <div
              v-for="el in currentPageElements"
              :key="el.id"
              class="di-element-item"
              :class="{ 'di-element-item-active': store.hoveredSelector === el.id }"
              @click="store.startEditing(el.id)"
              @mouseenter="highlightElement(el.id)"
              @mouseleave="clearElementHighlight"
            >
              <span
                class="di-element-type-badge"
                :class="'di-element-type-' + (el.type || 'other')"
              >
                {{ el.type === 'datasource' ? 'DB' : el.type === 'action' ? 'Act' : el.type === 'form' ? 'Form' : '-' }}
              </span>
              <div class="di-element-item-body">
                <div class="di-element-item-label">{{ el.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Unannotated Detection -->
        <button
          @click="handleDetectUnannotated"
          class="di-unannotated-btn"
          :class="{ active: store.showUnannotatedDetection }"
        >
          <ClipboardList style="width: 14px; height: 14px;" />
          <span>{{ store.showUnannotatedDetection ? '未登録検出 ON' : '未登録要素を検出' }}</span>
          <span v-if="store.unannotatedElements.length > 0" class="di-unannotated-badge">{{ store.unannotatedElements.length }}</span>
        </button>

        <!-- Unannotated Results -->
        <div v-if="store.showUnannotatedDetection && store.unannotatedElements.length > 0" class="di-unannotated-results">
          <div class="di-unannotated-summary">
            {{ store.unannotatedElements.length }}件検出:
            <span v-if="unannotatedCounts.binding > 0">バインディング {{ unannotatedCounts.binding }}</span>
            <span v-if="unannotatedCounts.form > 0"> / フォーム {{ unannotatedCounts.form }}</span>
            <span v-if="unannotatedCounts.action > 0"> / アクション {{ unannotatedCounts.action }}</span>
          </div>
          <div class="di-unannotated-list">
            <div
              v-for="el in store.unannotatedElements"
              :key="el.selector"
              class="di-unannotated-item"
              :class="{ 'di-unannotated-item-active': store.hoveredUnannotatedSelector === el.selector, ['di-unannotated-item-' + el.category]: store.hoveredUnannotatedSelector === el.selector }"
              @mouseenter="highlightUnannotated(el.selector)"
              @mouseleave="clearHighlight"
            >
              <span class="di-unannotated-category" :class="'di-unannotated-cat-' + el.category">
                {{ el.category === 'binding' ? 'DB' : el.category === 'form' ? 'Form' : 'Act' }}
              </span>
              <span class="di-unannotated-text">{{ el.text || el.tagName }}</span>
              <button @click="store.quickAnnotate(el.selector, el.suggestedType)" class="di-unannotated-register">
                登録
              </button>
              <button @click="dismissUnannotated(el.selector)" class="di-unannotated-dismiss">
                <X style="width: 10px; height: 10px;" />
              </button>
            </div>
          </div>
        </div>
        <div v-if="store.showUnannotatedDetection && store.unannotatedElements.length === 0" class="di-unannotated-empty">
          未登録の要素はありません
        </div>

        <!-- Broken Annotations Warning -->
        <div v-if="brokenCount > 0" class="di-broken-warning">
          <div class="di-broken-header">
            <AlertTriangle style="width: 14px; height: 14px; color: #f59e0b;" />
            <span>{{ brokenCount }}件のメモが見つかりません</span>
          </div>
          <div class="di-broken-desc">コード変更によりセレクタが壊れた可能性があります</div>

          <!-- Broken annotations list -->
          <div class="di-broken-list">
            <div
              v-for="id in store.brokenAnnotations"
              :key="id"
              class="di-broken-item"
            >
              <div class="di-broken-item-info">
                <div class="di-broken-item-note">
                  {{ store.elementConfigs[id]?.note?.text || '(メモなし)' }}
                </div>
                <div class="di-broken-item-selector">{{ id }}</div>
              </div>
              <div class="di-broken-item-actions">
                <button @click="store.startRemap(id)" class="di-broken-remap-btn" title="新しい要素に再設定">
                  <MousePointer2 style="width: 12px; height: 12px;" />
                  再設定
                </button>
                <button @click="store.deleteElementConfig(id); store.detectBrokenAnnotations()" class="di-broken-item-delete" title="削除">
                  <Trash2 style="width: 12px; height: 12px;" />
                </button>
              </div>
            </div>
          </div>

          <div class="di-broken-actions">
            <button @click="handleDeleteBroken" class="di-broken-delete-btn">
              <Trash2 style="width: 12px; height: 12px;" />
              まとめて削除
            </button>
          </div>
        </div>

        <!-- Analysis Data Section (hidden) -->
        <div v-if="false" class="di-analysis-section">
          <div class="di-analysis-header">
            <Server style="width: 16px; height: 16px; color: #3b82f6;" />
            <span>CLIソース解析</span>
          </div>
          <div class="di-analysis-input">
            <input
              v-model="analysisUrl"
              type="text"
              class="di-analysis-url"
              placeholder="/dev-inspector-analysis.json"
            />
          </div>
          <div class="di-analysis-buttons">
            <button
              @click="loadAnalysisData"
              class="di-analysis-btn"
              :disabled="isLoadingAnalysis"
            >
              <Loader2 v-if="isLoadingAnalysis" class="di-spin" style="width: 14px; height: 14px;" />
              <Download v-else style="width: 14px; height: 14px;" />
              <span>読み込み</span>
            </button>
            <button
              @click="applyAnalysis"
              class="di-analysis-btn di-analysis-btn-apply"
              :disabled="!store.analysisData"
            >
              <Scan style="width: 14px; height: 14px;" />
              <span>ページに適用</span>
            </button>
          </div>
          <div v-if="analysisLoadError" class="di-analysis-error">
            {{ analysisLoadError }}
          </div>
          <div v-if="store.analysisResults.length > 0" class="di-analysis-status">
            <span class="di-analysis-count">{{ store.analysisResults.filter(r => r.matched).length }}</span>
            <span>/ {{ store.analysisResults.length }} 要素がマッチ</span>
          </div>

          <!-- Analysis Filter -->
          <div v-if="store.analysisResults.length > 0" class="di-analysis-filter">
            <span class="di-filter-label">表示フィルター:</span>
            <div class="di-filter-buttons">
              <button
                v-for="opt in filterOptions"
                :key="opt.value"
                @click="store.analysisFilter = opt.value"
                class="di-filter-btn"
                :class="{ active: store.analysisFilter === opt.value }"
              >
                {{ opt.label }}
              </button>
            </div>
            <div v-if="store.hiddenAnalysisSelectors.size > 0" class="di-hidden-actions">
              <button
                @click="restoreHiddenElements"
                class="di-restore-btn"
                :disabled="isRestoringHidden"
              >
                <Loader2 v-if="isRestoringHidden" class="di-spin" style="width: 12px; height: 12px;" />
                <span v-if="isRestoringHidden">リセット中...</span>
                <span v-else>非表示 ({{ store.hiddenAnalysisSelectors.size }}) をリセット</span>
              </button>
              <button
                @click="store.downloadChanges()"
                class="di-export-changes-btn"
                title="削除した要素をエクスポート (CLI merge用)"
              >
                <Download style="width: 12px; height: 12px;" />
                <span>変更をエクスポート</span>
              </button>
            </div>
          </div>

          <!-- Page APIs Section -->
          <div v-if="currentPageApis.pageLoad.length > 0 || currentPageApis.action.length > 0" class="di-page-apis">
            <!-- Page Load APIs -->
            <div v-if="currentPageApis.pageLoad.length > 0" class="di-api-group">
              <div class="di-api-group-header">
                <span class="di-api-group-icon">📡</span>
                <span>画面読込時のAPI</span>
                <span class="di-api-group-count">{{ currentPageApis.pageLoad.length }}</span>
              </div>
              <div class="di-api-group-list">
                <div v-for="api in currentPageApis.pageLoad" :key="api.endpoint + api.method" class="di-api-group-item">
                  <span class="di-api-method" :class="'di-api-method-' + api.method.toLowerCase()">{{ api.method }}</span>
                  <code class="di-api-endpoint">{{ api.endpoint || api.composable }}</code>
                  <span v-if="api.variable" class="di-api-variable">→ {{ api.variable }}</span>
                  <span class="di-api-trigger">{{ loadTriggerLabels[api.loadTrigger] }}</span>
                </div>
              </div>
            </div>

            <!-- Action APIs -->
            <div v-if="currentPageApis.action.length > 0" class="di-api-group">
              <div class="di-api-group-header">
                <span class="di-api-group-icon">👆</span>
                <span>アクション時のAPI</span>
                <span class="di-api-group-count">{{ currentPageApis.action.length }}</span>
              </div>
              <div class="di-api-group-list">
                <div v-for="api in currentPageApis.action" :key="api.endpoint + api.method" class="di-api-group-item">
                  <span class="di-api-method" :class="'di-api-method-' + api.method.toLowerCase()">{{ api.method }}</span>
                  <code class="di-api-endpoint">{{ api.endpoint || api.composable }}</code>
                  <span v-if="api.variable" class="di-api-variable">→ {{ api.variable }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="di-content">

        <!-- ===== ELEMENTS TAB ===== -->
        <div v-show="activeTab === 'elements'">

        <!-- Screen Info (top priority) -->
        <template v-if="screenInfo">
          <div class="di-section">
            <div class="di-screen-header">
              <h2 class="di-screen-name">{{ screenInfo.name }}</h2>
              <button @click="store.editingScreen = true" class="di-screen-edit-btn" title="画面情報を編集">
                <PenSquare style="width: 14px; height: 14px;" />
              </button>
            </div>
            <p v-if="screenInfo.description" class="di-screen-desc">{{ screenInfo.description }}</p>
            <div v-if="screenInfo.auth" class="di-auth-badges">
              <span v-if="screenInfo.auth.required" class="di-auth-badge di-auth-required">
                <Lock style="width: 11px; height: 11px;" />
                ログイン必須
              </span>
              <span v-for="role in (screenInfo.auth.roles || [])" :key="role" class="di-auth-badge di-auth-role">
                <Shield style="width: 11px; height: 11px;" />
                {{ role }}
              </span>
              <span v-if="screenInfo.auth.description" class="di-auth-note">{{ screenInfo.auth.description }}</span>
            </div>
          </div>

          <div v-if="screenInfo.componentPath" class="di-card">
            <div class="di-card-label">
              <Code style="width: 16px; height: 16px;" />
              <span>Component Path</span>
            </div>
            <code class="di-code-blue">{{ screenInfo.componentPath }}</code>
          </div>

          <div v-if="screenInfo.figmaUrl" class="di-card">
            <div class="di-card-label">
              <ExternalLink style="width: 16px; height: 16px;" />
              <span>Figma Design</span>
            </div>
            <a :href="screenInfo.figmaUrl" target="_blank" class="di-link-purple">{{ screenInfo.figmaUrl }}</a>
          </div>

          <div v-if="screenInfo.apis.length" class="di-card">
            <div class="di-card-label">
              <Server style="width: 16px; height: 16px;" />
              <span>API Endpoints</span>
            </div>
            <div class="di-api-list">
              <div v-for="(api, index) in screenInfo.apis" :key="index" class="di-api-item">
                <span
                  class="di-method-badge"
                  :style="{ backgroundColor: methodColors[api.method] + '20', color: methodColors[api.method] }"
                >{{ api.method }}</span>
                <div class="di-api-info">
                  <code class="di-api-endpoint">{{ api.endpoint }}</code>
                  <p v-if="api.description" class="di-api-desc">{{ api.description }}</p>
                </div>
                <span v-if="api.loadTiming" class="di-api-timing-badge">
                  {{ api.loadTiming === 'onMount' ? '読込時' : api.loadTiming === 'action' ? 'アクション' : '条件付き' }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="screenInfo.notes" class="di-card">
            <div class="di-card-label">
              <AlertCircle style="width: 16px; height: 16px;" />
              <span>Notes</span>
            </div>
            <p class="di-screen-notes">{{ screenInfo.notes }}</p>
          </div>
        </template>

        <!-- No Spec - with edit button -->
        <div v-else class="di-no-spec">
          <FileText style="width: 48px; height: 48px; color: #334155;" />
          <p>この画面の仕様情報は<br>まだ登録されていません</p>
          <button @click="store.editingScreen = true" class="di-screen-register-btn">
            <PenSquare style="width: 14px; height: 14px;" />
            画面情報を登録
          </button>
        </div>

        <!-- Cross Search Section -->
        <div class="di-card di-cross-search-section">
          <div class="di-cross-search-header">
            <Search style="width: 14px; height: 14px; color: #94a3b8;" />
            <span>横断検索</span>
          </div>
          <div class="di-cross-search-desc">全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。</div>
          <div class="di-cross-search-body">
            <div class="di-filter-buttons" style="margin-bottom: 8px;">
              <button
                v-for="m in crossSearchModes"
                :key="m.value"
                @click="store.crossSearchMode = m.value"
                class="di-filter-btn"
                :class="{ active: store.crossSearchMode === m.value }"
              >
                {{ m.label }}
              </button>
            </div>
            <input
              v-model="store.crossSearchQuery"
              type="text"
              class="di-cross-search-input"
              :placeholder="crossSearchPlaceholder"
            />
            <div v-if="store.crossSearchQuery.trim()" class="di-cross-search-count">
              {{ store.crossSearchResults.length }}件 ({{ crossSearchPageCount }}画面)
            </div>
            <div v-if="crossSearchGrouped.length > 0" class="di-cross-search-results">
              <div v-for="group in crossSearchGrouped" :key="group.pagePath" class="di-cross-search-group">
                <div class="di-cross-search-page-header">
                  {{ group.pagePath }}
                  <span v-if="group.pageName !== group.pagePath" class="di-cross-search-page-name">({{ group.pageName }})</span>
                </div>
                <div
                  v-for="(item, idx) in group.items"
                  :key="idx"
                  class="di-cross-search-item"
                  :class="item.elementType ? 'di-cross-item-' + item.elementType : ''"
                  @click="item.selector && store.startEditing(item.selector)"
                >
                  <span class="di-cross-search-field">{{ item.matchedField }}</span>
                  <span v-if="item.matchContext" class="di-cross-search-context">{{ item.matchContext }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Screen Flow Section -->
        <div class="di-card di-screen-flow-section">
          <button
            @click="store.showScreenFlow = !store.showScreenFlow"
            class="di-screen-flow-toggle"
            :class="{ active: store.showScreenFlow }"
          >
            <GitMerge style="width: 14px; height: 14px;" />
            <span>画面フロー</span>
            <span v-if="store.screenFlowData.edges.length > 0" class="di-screen-flow-badge">
              {{ store.screenFlowData.nodes.length }}画面 / {{ store.screenFlowData.edges.length }}遷移
            </span>
          </button>

          <div v-if="store.showScreenFlow" class="di-screen-flow-body">
            <div v-if="store.screenFlowData.edges.length === 0" class="di-screen-flow-empty">
              navigate型のアクションが登録されていません
            </div>
            <div v-for="group in screenFlowGrouped" :key="group.node.path" class="di-flow-group">
              <div
                class="di-flow-node"
                :class="{ 'di-flow-node-current': group.node.path === currentPath }"
              >
                <span class="di-flow-node-path">{{ group.node.path }}</span>
                <span v-if="group.node.name !== group.node.path" class="di-flow-node-name">({{ group.node.name }})</span>
              </div>
              <div
                v-for="edge in group.edges"
                :key="edge.from + edge.to"
                class="di-flow-edge"
                @click="handleFlowEdgeClick(edge.selector)"
              >
                <span class="di-flow-arrow">→</span>
                <span class="di-flow-target">{{ edge.to }}</span>
                <span v-if="edge.label" class="di-flow-edge-label">[{{ edge.label }}]</span>
              </div>
            </div>
            <div v-if="store.screenFlowData.orphanPages.length > 0" class="di-flow-orphans">
              <div class="di-flow-orphans-header">遷移なしのページ</div>
              <span v-for="p in store.screenFlowData.orphanPages" :key="p.path" class="di-flow-orphan-item">
                {{ p.path }}
              </span>
            </div>
          </div>
        </div>

        </div><!-- /elements tab -->

        <!-- ===== MASTERS TAB ===== -->
        <div v-show="activeTab === 'masters'">
          <!-- Master Definitions Section -->
          <div class="di-section">
            <div class="di-section-header" style="margin-bottom: 8px;">
              <Database style="width: 16px; height: 16px; color: #a78bfa;" />
              <span>マスタ定義</span>
              <span v-if="masterCount > 0" class="di-section-badge">{{ masterCount }}</span>
              <button @click="startMasterEdit()" class="di-btn-icon" style="margin-left: auto;" title="新規追加">
                <Plus style="width: 14px; height: 14px;" />
              </button>
            </div>

            <!-- Master list grouped by table -->
            <template v-if="masterCount > 0">
              <div v-for="(masters, tableName) in masterList" :key="tableName" class="di-master-table-group">
                <div class="di-master-table-name">{{ tableName }}</div>
                <div
                  v-for="m in masters"
                  :key="m.id"
                  class="di-master-item"
                  @click="startMasterEdit(m.id)"
                >
                  <div class="di-master-item-header">
                    <span class="di-master-col-name">.{{ m.column }}</span>
                    <span v-if="m.columnType" class="di-master-col-type">{{ m.columnType }}</span>
                    <span class="di-master-item-name">{{ m.name }}</span>
                  </div>
                  <div class="di-master-entries-preview">
                    <span
                      v-for="(entry, idx) in m.entries.slice(0, 5)"
                      :key="idx"
                      class="di-master-entry-chip"
                      :style="entry.color ? { borderColor: entry.color, color: entry.color } : {}"
                    >
                      {{ entry.value }}={{ entry.label }}
                    </span>
                    <span v-if="m.entries.length > 5" class="di-master-entry-more">+{{ m.entries.length - 5 }}</span>
                  </div>
                </div>
              </div>
            </template>
            <div v-else class="di-master-empty" @click="startMasterEdit()">
              <span>テーブル.カラムのマスタ値を定義</span>
            </div>
          </div>

          <!-- Master Editor Modal -->
          <Teleport to="body">
            <div v-if="showMasterEditor" data-dev-inspector class="di-modal-overlay" @click.self="showMasterEditor = false">
              <div class="di-master-editor">
                <div class="di-master-editor-header">
                  <h3>{{ editingMasterId ? 'マスタ定義を編集' : '新規マスタ定義' }}</h3>
                  <button @click="showMasterEditor = false" class="di-close-btn">
                    <X style="width: 16px; height: 16px;" />
                  </button>
                </div>

                <div class="di-master-editor-body">
                  <!-- Table & Column -->
                  <div class="di-master-row">
                    <div class="di-master-field">
                      <label>テーブル</label>
                      <input v-model="masterForm.table" placeholder="orders" :disabled="!!editingMasterId" />
                    </div>
                    <div class="di-master-field">
                      <label>カラム</label>
                      <input v-model="masterForm.column" placeholder="status" :disabled="!!editingMasterId" />
                    </div>
                  </div>
                  <div class="di-master-row">
                    <div class="di-master-field">
                      <label>表示名</label>
                      <input v-model="masterForm.name" placeholder="ステータス" />
                    </div>
                    <div class="di-master-field">
                      <label>型</label>
                      <input v-model="masterForm.columnType" placeholder="integer" />
                    </div>
                  </div>
                  <div class="di-master-field" style="margin-bottom: 12px;">
                    <label>説明</label>
                    <input v-model="masterForm.description" placeholder="注文のステータスを管理" />
                  </div>

                  <!-- Entries -->
                  <div class="di-master-entries-header">
                    <label>マスタ値</label>
                    <button @click="addMasterEntry" class="di-btn-icon" title="追加">
                      <Plus style="width: 14px; height: 14px;" />
                    </button>
                  </div>
                  <div class="di-master-entries-list">
                    <div
                      v-for="(entry, idx) in masterForm.entries"
                      :key="idx"
                      class="di-master-entry-row"
                    >
                      <input v-model="entry.value" placeholder="値" class="di-master-entry-value" />
                      <input v-model="entry.label" placeholder="ラベル" class="di-master-entry-label" />
                      <input v-model="entry.color" placeholder="#色" class="di-master-entry-color" />
                      <input v-model="entry.description" placeholder="説明" class="di-master-entry-desc" />
                      <button @click="removeMasterEntry(idx)" class="di-btn-icon di-btn-icon-danger">
                        <X style="width: 12px; height: 12px;" />
                      </button>
                    </div>
                  </div>

                  <!-- State Transitions -->
                  <div class="di-master-entries-header" style="margin-top: 16px;">
                    <label>状態遷移</label>
                    <button @click="addTransition" class="di-btn-icon" title="遷移を追加">
                      <Plus style="width: 14px; height: 14px;" />
                    </button>
                  </div>
                  <div v-if="masterForm.transitions.length > 0" class="di-master-entries-list">
                    <div class="di-transition-header">
                      <span class="di-transition-col-from">遷移元</span>
                      <span class="di-transition-col-arrow">→</span>
                      <span class="di-transition-col-to">遷移先</span>
                      <span class="di-transition-col-trigger">トリガー</span>
                      <span class="di-transition-col-condition">条件</span>
                      <span class="di-transition-col-act"></span>
                    </div>
                    <div
                      v-for="(trans, idx) in masterForm.transitions"
                      :key="idx"
                      class="di-transition-row"
                    >
                      <select v-model="trans.from" class="di-transition-select di-transition-col-from">
                        <option value="">-</option>
                        <option v-for="e in masterForm.entries.filter(e => e.value)" :key="e.value" :value="e.value">{{ e.label || e.value }}</option>
                      </select>
                      <span class="di-transition-col-arrow">→</span>
                      <select v-model="trans.to" class="di-transition-select di-transition-col-to">
                        <option value="">-</option>
                        <option v-for="e in masterForm.entries.filter(e => e.value)" :key="e.value" :value="e.value">{{ e.label || e.value }}</option>
                      </select>
                      <input v-model="trans.trigger" placeholder="トリガー" class="di-transition-input di-transition-col-trigger" />
                      <input v-model="trans.condition" placeholder="条件" class="di-transition-input di-transition-col-condition" />
                      <button @click="removeTransition(idx)" class="di-btn-icon di-btn-icon-danger">
                        <X style="width: 12px; height: 12px;" />
                      </button>
                    </div>
                  </div>
                  <div v-else class="di-master-empty" style="margin-top: 4px; font-size: 11px;">
                    状態遷移を定義（任意）
                  </div>
                </div>

                <div class="di-master-editor-footer">
                  <button v-if="editingMasterId" @click="handleDeleteMaster(editingMasterId); showMasterEditor = false" class="di-btn-small di-btn-danger">削除</button>
                  <div style="flex: 1;"></div>
                  <button @click="showMasterEditor = false" class="di-btn-small">キャンセル</button>
                  <button @click="saveMasterForm" class="di-btn-small di-btn-primary" :disabled="!masterForm.table || !masterForm.column">保存</button>
                </div>
              </div>
            </div>
          </Teleport>
        </div><!-- /masters tab -->

        <!-- ===== BATCHES TAB ===== -->
        <div v-show="activeTab === 'batches'">
          <!-- Batch Definitions Section -->
          <div class="di-section">
            <div class="di-section-header" style="margin-bottom: 8px;">
              <Clock style="width: 16px; height: 16px; color: #f59e0b;" />
              <span>バッチ処理</span>
              <span v-if="batchCount > 0" class="di-section-badge">{{ batchCount }}</span>
              <button @click="startBatchEdit()" class="di-btn-icon" style="margin-left: auto;" title="新規追加">
                <Plus style="width: 14px; height: 14px;" />
              </button>
            </div>

            <template v-if="batchCount > 0">
              <div
                v-for="b in batchList"
                :key="b.id"
                class="di-batch-item"
                @click="startBatchEdit(b.id)"
              >
                <div class="di-batch-item-info">
                  <div class="di-batch-item-name">{{ b.name }}</div>
                  <div v-if="b.schedule" class="di-batch-item-schedule">{{ b.schedule }}</div>
                </div>
              </div>
            </template>
            <div v-else class="di-batch-empty" @click="startBatchEdit()">
              <span>バッチ処理を定義</span>
            </div>
          </div>

          <!-- Batch Editor Modal -->
          <Teleport to="body">
            <div v-if="showBatchEditor" data-dev-inspector class="di-modal-overlay" @click.self="showBatchEditor = false">
              <div class="di-batch-editor">
                <div class="di-batch-editor-header">
                  <h3>{{ editingBatchId ? 'バッチ処理を編集' : '新規バッチ処理' }}</h3>
                  <button @click="showBatchEditor = false" class="di-close-btn">
                    <X style="width: 16px; height: 16px;" />
                  </button>
                </div>

                <div class="di-batch-editor-body">
                  <!-- Basic Info -->
                  <div class="di-batch-row">
                    <div class="di-batch-field">
                      <label>バッチ名 *</label>
                      <input v-model="batchForm.name" placeholder="月次レポート生成" />
                    </div>
                    <div class="di-batch-field">
                      <label>スケジュール</label>
                      <input v-model="batchForm.schedule" placeholder="毎月1日 AM2:00" />
                    </div>
                  </div>
                  <div class="di-batch-row">
                    <div class="di-batch-field">
                      <label>手動トリガー</label>
                      <input v-model="batchForm.trigger" placeholder="管理画面から実行" />
                    </div>
                  </div>
                  <div class="di-batch-field" style="margin-bottom: 12px;">
                    <label>説明</label>
                    <textarea v-model="batchForm.description" rows="2" placeholder="バッチ処理の概要..."></textarea>
                  </div>

                  <!-- Input/Output Tables -->
                  <div class="di-batch-section-label">入出力テーブル</div>
                  <div class="di-batch-row">
                    <div class="di-batch-field">
                      <label>入力テーブル</label>
                      <div class="di-batch-tags-input">
                        <span v-for="(t, i) in batchForm.inputTables" :key="i" class="di-batch-tag">
                          {{ t }}
                          <button @click="removeBatchInputTable(i)" class="di-batch-tag-remove">&times;</button>
                        </span>
                        <input
                          v-model="batchInputTableInput"
                          @keydown.enter.prevent="addBatchInputTable()"
                          type="text"
                          placeholder="テーブル名"
                          class="di-batch-tag-input"
                        />
                      </div>
                    </div>
                    <div class="di-batch-field">
                      <label>出力テーブル</label>
                      <div class="di-batch-tags-input">
                        <span v-for="(t, i) in batchForm.outputTables" :key="i" class="di-batch-tag">
                          {{ t }}
                          <button @click="removeBatchOutputTable(i)" class="di-batch-tag-remove">&times;</button>
                        </span>
                        <input
                          v-model="batchOutputTableInput"
                          @keydown.enter.prevent="addBatchOutputTable()"
                          type="text"
                          placeholder="テーブル名"
                          class="di-batch-tag-input"
                        />
                      </div>
                    </div>
                  </div>

                  <!-- Processing Steps -->
                  <div class="di-batch-section-label">
                    処理ステップ
                    <button @click="addBatchStep" class="di-btn-icon" style="margin-left: auto;" title="ステップ追加">
                      <Plus style="width: 14px; height: 14px;" />
                    </button>
                  </div>
                  <div v-if="batchForm.steps.length > 0">
                    <div class="di-batch-steps-header">
                      <span class="di-batch-step-no">No</span>
                      <span class="di-batch-step-desc">処理内容</span>
                      <span class="di-batch-step-target">対象</span>
                      <span class="di-batch-step-type">種別</span>
                      <span class="di-batch-step-error">エラー処理</span>
                      <span class="di-batch-step-act"></span>
                    </div>
                    <div v-for="(step, idx) in batchForm.steps" :key="idx" class="di-batch-step-row">
                      <span class="di-batch-step-no">{{ idx + 1 }}</span>
                      <input v-model="step.description" placeholder="処理内容" class="di-batch-step-input di-batch-step-desc" />
                      <input v-model="step.target" placeholder="対象テーブル" class="di-batch-step-input di-batch-step-target" />
                      <select v-model="step.type" class="di-batch-step-select di-batch-step-type">
                        <option value="">-</option>
                        <option value="query">query</option>
                        <option value="api">api</option>
                        <option value="file">file</option>
                        <option value="mail">mail</option>
                        <option value="other">other</option>
                      </select>
                      <input v-model="step.errorHandling" placeholder="エラー時" class="di-batch-step-input di-batch-step-error" />
                      <button @click="removeBatchStep(idx)" class="di-btn-icon di-btn-icon-danger">
                        <X style="width: 12px; height: 12px;" />
                      </button>
                    </div>
                  </div>

                  <!-- Operation Settings -->
                  <div class="di-batch-section-label">運用設定</div>
                  <div class="di-batch-row">
                    <div class="di-batch-field">
                      <label>タイムアウト</label>
                      <input v-model="batchForm.timeout" placeholder="30分" />
                    </div>
                    <div class="di-batch-field">
                      <label>リトライ</label>
                      <input v-model="batchForm.retryPolicy" placeholder="3回まで、5分間隔" />
                    </div>
                  </div>
                  <div class="di-batch-row">
                    <div class="di-batch-field">
                      <label>エラー通知先</label>
                      <input v-model="batchForm.notifyOnError" placeholder="admin@example.com" />
                    </div>
                    <div class="di-batch-field">
                      <label>完了通知先</label>
                      <input v-model="batchForm.notifyOnComplete" placeholder="manager@example.com" />
                    </div>
                  </div>
                </div>

                <div class="di-batch-editor-footer">
                  <button v-if="editingBatchId" @click="handleDeleteBatch(editingBatchId); showBatchEditor = false" class="di-btn-small di-btn-danger">削除</button>
                  <div style="flex: 1;"></div>
                  <button @click="showBatchEditor = false" class="di-btn-small">キャンセル</button>
                  <button @click="saveBatchForm" class="di-btn-small di-btn-primary" :disabled="!batchForm.name">保存</button>
                </div>
              </div>
            </div>
          </Teleport>
        </div><!-- /batches tab -->

        <!-- ===== EXPORT TAB ===== -->
        <div v-show="activeTab === 'export'">
          <!-- Export Buttons -->
          <div class="di-export-buttons">
            <button @click="downloadForGit" class="di-btn-green">
              <GitBranch style="width: 16px; height: 16px;" />
              Git管理用に保存
            </button>
            <button @click="exportToXlsx" class="di-btn-blue">
              <FileSpreadsheet style="width: 16px; height: 16px;" />
              画面仕様書 (xlsx) 出力
            </button>
            <button @click="store.downloadSddSpec()" class="di-btn-green-outline">
              <FileText style="width: 16px; height: 16px;" />
              SDD仕様書 (md)
            </button>
            <button @click="store.downloadClientSpec()" class="di-btn-blue-outline">
              <FileText style="width: 16px; height: 16px;" />
              納品用仕様書 (md)
            </button>
          </div>
          <p class="di-export-hint">
            JSON: <code>dev-annotations.json</code> に配置してcommit
          </p>

          <div class="di-action-buttons">
            <button @click="showExportModal = true" class="di-btn-small">
              <Download style="width: 14px; height: 14px;" />
              エクスポート
            </button>
            <button @click="showImportModal = true" class="di-btn-small">
              <Upload style="width: 14px; height: 14px;" />
              インポート
            </button>
            <button v-if="elementCount > 0" @click="clearAll" class="di-btn-small di-btn-danger">
              <Trash2 style="width: 14px; height: 14px;" />
              全削除
            </button>
          </div>

          <!-- Summary stats -->
          <div v-if="elementCount > 0 || masterCount > 0 || batchCount > 0" class="di-export-summary">
            <div class="di-export-summary-title">登録状況</div>
            <div class="di-export-summary-row">
              <span>要素設定</span>
              <span class="di-export-summary-count">{{ elementCount }}件</span>
            </div>
            <div class="di-export-summary-row">
              <span>マスタ定義</span>
              <span class="di-export-summary-count">{{ masterCount }}件</span>
            </div>
            <div class="di-export-summary-row">
              <span>バッチ処理</span>
              <span class="di-export-summary-count">{{ batchCount }}件</span>
            </div>
          </div>
        </div><!-- /export tab -->
      </div>

      <!-- Footer -->
      <div class="di-footer">
        <kbd>Ctrl</kbd><span>+</span><kbd>Shift</kbd><span>+</span><kbd>D</kbd>
        <span class="di-footer-text">で開発者モード切替</span>
      </div>
    </div>
  </Teleport>

  <!-- Dev Mode Indicator -->
  <Teleport to="body">
    <div v-if="store.isEnabled" class="di-indicator" data-dev-inspector>
      <span class="di-indicator-dot"></span>
      Developer Mode
    </div>
  </Teleport>

  <!-- Export Modal -->
  <Teleport to="body">
    <div
      v-if="showExportModal"
      class="di-modal-overlay"
      @click.self="showExportModal = false"
      data-dev-inspector
    >
      <div class="di-modal">
        <h3 class="di-modal-title">設定をエクスポート</h3>
        <textarea readonly :value="store.exportConfigs()" class="di-modal-textarea"></textarea>
        <div class="di-modal-actions">
          <button @click="showExportModal = false" class="di-btn-small">閉じる</button>
          <button @click="downloadExport" class="di-btn-small di-btn-gray">
            <Download style="width: 14px; height: 14px;" />
            ファイル保存
          </button>
          <button @click="copyExport" class="di-btn-small di-btn-primary">コピー</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- Import Modal -->
  <Teleport to="body">
    <div
      v-if="showImportModal"
      class="di-modal-overlay"
      @click.self="showImportModal = false"
      data-dev-inspector
    >
      <div class="di-modal">
        <h3 class="di-modal-title">設定をインポート</h3>
        <label class="di-file-drop">
          <input type="file" accept=".json" @change="handleFileImport" />
          <span>JSONファイルをドラッグまたはクリック</span>
        </label>
        <textarea
          v-model="importText"
          placeholder="またはJSONを直接貼り付け..."
          class="di-modal-textarea di-modal-textarea-input"
        ></textarea>
        <p v-if="importError" class="di-error">{{ importError }}</p>
        <div class="di-modal-actions">
          <button @click="showImportModal = false; importText = ''; importError = ''" class="di-btn-small">
            キャンセル
          </button>
          <button @click="handleImport" :disabled="!importText" class="di-btn-small di-btn-primary">
            インポート
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Base styles */
.di-fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 9998;
  width: 48px;
  height: 48px;
  background: #1e293b;
  color: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.di-fab:hover {
  background: #334155;
}

/* Panel */
.di-panel {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  width: 360px;
  height: 100%;
  background: #0f172a;
  color: white;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
}

/* Header */
.di-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
}
.di-header-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
}
.di-close-btn {
  padding: 4px;
  background: transparent;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-close-btn:hover {
  background: #334155;
}

/* Tab Bar */
.di-tab-bar {
  display: flex;
  background: #1e293b;
  border-bottom: 1px solid #334155;
  padding: 0 4px;
  gap: 2px;
}
.di-tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 4px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #64748b;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}
.di-tab-btn:hover {
  color: #94a3b8;
  background: rgba(51, 65, 85, 0.3);
}
.di-tab-btn.active {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}
.di-tab-badge {
  padding: 1px 5px;
  background: #334155;
  border-radius: 8px;
  font-size: 9px;
  color: #94a3b8;
  line-height: 1.2;
}
.di-tab-btn.active .di-tab-badge {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
}

/* Edit Section */
.di-edit-section {
  padding: 12px 16px;
  background: rgba(30, 41, 59, 0.5);
  border-bottom: 1px solid #334155;
}
.di-edit-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.di-edit-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}
.di-edit-hint {
  font-size: 10px;
  color: #64748b;
  margin-top: 6px;
}

/* Toggle */
.di-toggle {
  position: relative;
  width: 44px;
  height: 24px;
  background: #334155;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-toggle.active {
  background: #fbbf24;
}
.di-toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.di-toggle-knob.active {
  transform: translateX(20px);
}

/* Pick Button */
.di-pick-btn {
  margin-top: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: #0f172a;
  color: #94a3b8;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-pick-btn:hover {
  color: white;
  background: #334155;
}
.di-pick-btn.active {
  background: #10b981;
  color: white;
}

/* Note Highlight Toggle */
.di-note-toggle-btn {
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #0f172a;
  color: #64748b;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-note-toggle-btn:hover {
  color: #94a3b8;
  border-color: #475569;
}
.di-note-toggle-btn.active {
  color: #e2e8f0;
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.08);
}
.di-note-toggle-badge {
  margin-left: auto;
  padding: 1px 6px;
  background: #334155;
  border-radius: 4px;
  font-size: 10px;
  color: #94a3b8;
}

/* Note Highlight Filter */
.di-note-filter {
  margin-top: 6px;
  padding: 8px;
  background: #1e293b;
  border-radius: 6px;
}

/* Broken annotations warning */
.di-broken-warning {
  margin-top: 8px;
  padding: 10px 12px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 8px;
}
.di-broken-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #f59e0b;
}
.di-broken-desc {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 4px;
}
.di-broken-actions {
  display: flex;
  gap: 6px;
  margin-top: 8px;
}
.di-broken-delete-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: rgba(239, 68, 68, 0.15);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #f87171;
  font-size: 11px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-broken-delete-btn:hover {
  background: rgba(239, 68, 68, 0.25);
}
.di-broken-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
}
.di-broken-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 8px;
  background: rgba(30, 41, 59, 0.6);
  border-radius: 4px;
}
.di-broken-item-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.di-broken-item-note {
  font-size: 11px;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.di-broken-item-selector {
  font-size: 9px;
  color: #64748b;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.di-broken-item-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}
.di-broken-remap-btn {
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 3px 8px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #60a5fa;
  font-size: 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-broken-remap-btn:hover {
  background: rgba(59, 130, 246, 0.25);
}
.di-broken-item-delete {
  display: flex;
  align-items: center;
  padding: 3px 5px;
  background: transparent;
  border: 1px solid rgba(239, 68, 68, 0.2);
  color: #94a3b8;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-broken-item-delete:hover {
  color: #f87171;
  border-color: rgba(239, 68, 68, 0.4);
  background: rgba(239, 68, 68, 0.1);
}

/* Spinner (used for loading states) */
.di-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Content */
.di-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Section */
.di-section {
  margin-bottom: 8px;
}
.di-screen-name {
  font-size: 18px;
  font-weight: 700;
  color: white;
  margin: 0 0 4px 0;
}
.di-screen-desc {
  font-size: 12px;
  color: #94a3b8;
  margin: 0;
}

/* Card */
.di-card {
  background: #1e293b;
  border-radius: 8px;
  padding: 12px;
}
.di-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.di-card-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #64748b;
  margin-bottom: 8px;
}
.di-code-blue {
  font-size: 12px;
  color: #60a5fa;
  font-family: monospace;
  word-break: break-all;
}
.di-link-purple {
  font-size: 12px;
  color: #a78bfa;
  font-family: monospace;
  word-break: break-all;
  text-decoration: none;
}
.di-link-purple:hover {
  text-decoration: underline;
}
.di-count-badge {
  padding: 2px 6px;
  background: #334155;
  border-radius: 4px;
  font-size: 10px;
}

/* API List */
.di-api-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.di-api-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.di-method-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  min-width: 45px;
  text-align: center;
}
.di-api-info {
  flex: 1;
}
.di-api-endpoint {
  font-size: 11px;
  color: #e2e8f0;
  font-family: monospace;
}
.di-api-desc {
  font-size: 10px;
  color: #64748b;
  margin: 2px 0 0 0;
}

/* Notes */
.di-notes-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-note-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  color: #94a3b8;
}
.di-bullet {
  color: #64748b;
}

/* Screen Header */
.di-screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.di-screen-edit-btn {
  padding: 6px;
  background: #334155;
  border: none;
  color: #94a3b8;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;
}
.di-screen-edit-btn:hover {
  background: #475569;
  color: #60a5fa;
}

/* Auth Badges */
.di-auth-badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-top: 8px;
}
.di-auth-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
}
.di-auth-required {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
.di-auth-role {
  background: rgba(139, 92, 246, 0.15);
  color: #a78bfa;
}
.di-auth-note {
  font-size: 10px;
  color: #64748b;
}

/* API Timing Badge */
.di-api-timing-badge {
  padding: 1px 5px;
  background: #475569;
  border-radius: 3px;
  color: #cbd5e1;
  font-size: 9px;
  white-space: nowrap;
  flex-shrink: 0;
}

/* Screen Notes */
.di-screen-notes {
  font-size: 12px;
  color: #94a3b8;
  margin: 0;
  white-space: pre-wrap;
  line-height: 1.5;
}

/* No Spec */
.di-no-spec {
  text-align: center;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.di-no-spec p {
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
.di-screen-register-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #334155;
  border: none;
  color: #94a3b8;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-screen-register-btn:hover {
  background: #475569;
  color: #60a5fa;
}

/* Master Definitions */
.di-section-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
}
.di-section-badge {
  background: #334155;
  color: #94a3b8;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 8px;
}
.di-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: 1px solid #334155;
  color: #94a3b8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-icon:hover {
  background: #334155;
  color: #e2e8f0;
}
.di-btn-icon-danger:hover {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
  color: #f87171;
}
.di-master-table-group {
  margin-bottom: 8px;
}
.di-master-table-name {
  font-size: 11px;
  font-weight: 600;
  color: #a78bfa;
  padding: 2px 0;
  margin-bottom: 4px;
}
.di-master-item {
  padding: 6px 8px;
  background: #1e293b;
  border-radius: 6px;
  margin-bottom: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-master-item:hover {
  background: #334155;
}
.di-master-item-header {
  display: flex;
  align-items: center;
  gap: 6px;
}
.di-master-col-name {
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  font-family: monospace;
}
.di-master-col-type {
  font-size: 9px;
  color: #64748b;
  background: #0f172a;
  padding: 1px 4px;
  border-radius: 3px;
}
.di-master-item-name {
  font-size: 11px;
  color: #94a3b8;
}
.di-master-entries-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 4px;
}
.di-master-entry-chip {
  font-size: 9px;
  padding: 1px 5px;
  border: 1px solid #475569;
  color: #94a3b8;
  border-radius: 3px;
  white-space: nowrap;
}
.di-master-entry-more {
  font-size: 9px;
  color: #64748b;
  padding: 1px 4px;
}
.di-master-empty {
  padding: 12px;
  text-align: center;
  color: #64748b;
  font-size: 11px;
  background: #1e293b;
  border-radius: 6px;
  cursor: pointer;
  border: 1px dashed #334155;
  transition: all 0.2s;
}
.di-master-empty:hover {
  border-color: #a78bfa;
  color: #a78bfa;
}
/* Master Editor Modal */
.di-master-editor {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  width: 520px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
.di-master-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #334155;
}
.di-master-editor-header h3 {
  margin: 0;
  font-size: 14px;
  color: #e2e8f0;
}
.di-master-editor-body {
  padding: 16px;
}
.di-master-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
.di-master-row .di-master-field {
  flex: 1;
}
.di-master-field label {
  display: block;
  font-size: 10px;
  color: #94a3b8;
  margin-bottom: 3px;
}
.di-master-field input {
  width: 100%;
  padding: 6px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 12px;
  outline: none;
  box-sizing: border-box;
}
.di-master-field input:focus {
  border-color: #a78bfa;
}
.di-master-field input:disabled {
  opacity: 0.5;
}
.di-master-entries-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}
.di-master-entries-header label {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
}
.di-master-entries-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 250px;
  overflow-y: auto;
}
.di-master-entry-row {
  display: flex;
  gap: 4px;
  align-items: center;
}
.di-master-entry-value {
  width: 60px;
  flex-shrink: 0;
  padding: 5px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  font-family: monospace;
  outline: none;
}
.di-master-entry-label {
  width: 80px;
  flex-shrink: 0;
  padding: 5px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  outline: none;
}
.di-master-entry-color {
  width: 55px;
  flex-shrink: 0;
  padding: 5px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  font-family: monospace;
  outline: none;
}
.di-master-entry-desc {
  flex: 1;
  min-width: 0;
  padding: 5px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #e2e8f0;
  font-size: 11px;
  outline: none;
}
.di-master-entry-row input:focus {
  border-color: #a78bfa;
}
.di-master-editor-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid #334155;
}

/* Export Buttons */
.di-export-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}
.di-btn-green {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-green:hover {
  background: #059669;
}
.di-btn-blue {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-blue:hover {
  background: #2563eb;
}
.di-btn-green-outline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.di-btn-green-outline:hover {
  background: #10b981;
  color: white;
}
.di-btn-blue-outline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.di-btn-blue-outline:hover {
  background: #3b82f6;
  color: white;
}
.di-export-hint {
  font-size: 10px;
  color: #64748b;
  margin: 0 0 12px 0;
}
.di-export-hint code {
  color: #60a5fa;
}

/* Action Buttons */
.di-action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.di-btn-small {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: #0f172a;
  color: #94a3b8;
  border: none;
  border-radius: 6px;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-small:hover {
  color: white;
  background: #334155;
}
.di-btn-small:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.di-btn-danger {
  color: #ef4444;
}
.di-btn-danger:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}
.di-btn-gray {
  background: #334155;
  color: white;
}
.di-btn-gray:hover {
  background: #475569;
}
.di-btn-primary {
  background: #3b82f6;
  color: white;
}
.di-btn-primary:hover {
  background: #2563eb;
}

/* Footer */
.di-footer {
  padding: 12px 16px;
  background: #1e293b;
  border-top: 1px solid #334155;
  font-size: 10px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 4px;
}
.di-footer kbd {
  padding: 2px 6px;
  background: #334155;
  border-radius: 4px;
  color: #94a3b8;
}
.di-footer-text {
  margin-left: 8px;
}

/* Indicator */
.di-indicator {
  position: fixed;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 6px 12px;
  background: #1e293b;
  color: #60a5fa;
  font-size: 11px;
  font-weight: 500;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-indicator-dot {
  width: 8px;
  height: 8px;
  background: #60a5fa;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.di-indicator-edit {
  color: #fbbf24;
}

/* Modal */
.di-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}
.di-modal {
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  width: 400px;
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-modal-title {
  color: white;
  font-weight: 700;
  font-size: 14px;
  margin: 0 0 12px 0;
}
.di-modal-textarea {
  width: 100%;
  height: 200px;
  padding: 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: #94a3b8;
  font-size: 11px;
  font-family: monospace;
  resize: none;
  box-sizing: border-box;
}
.di-modal-textarea-input {
  height: 150px;
  color: white;
}
.di-modal-textarea-input::placeholder {
  color: #475569;
}
.di-modal-textarea:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}
.di-file-drop {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border: 2px dashed #334155;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.2s;
  margin-bottom: 12px;
}
.di-file-drop:hover {
  border-color: #60a5fa;
}
.di-file-drop input {
  display: none;
}
.di-file-drop span {
  font-size: 11px;
  color: #64748b;
}
.di-error {
  font-size: 10px;
  color: #ef4444;
  margin: 4px 0 0 0;
}

/* Analysis Section */
.di-analysis-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #334155;
}
.di-analysis-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 10px;
  color: #94a3b8;
}
.di-analysis-input {
  margin-bottom: 10px;
}
.di-analysis-url {
  width: 100%;
  padding: 8px 10px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  color: white;
  font-size: 11px;
  font-family: monospace;
  box-sizing: border-box;
}
.di-analysis-url:focus {
  outline: none;
  border-color: #3b82f6;
}
.di-analysis-url::placeholder {
  color: #475569;
}
.di-analysis-buttons {
  display: flex;
  gap: 8px;
}
.di-analysis-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
  color: white;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-analysis-btn:hover:not(:disabled) {
  background: #334155;
  border-color: #475569;
}
.di-analysis-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.di-analysis-btn-apply {
  background: #1d4ed8;
  border-color: #1d4ed8;
}
.di-analysis-btn-apply:hover:not(:disabled) {
  background: #2563eb;
  border-color: #2563eb;
}
.di-analysis-error {
  margin-top: 8px;
  padding: 8px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid #ef4444;
  border-radius: 6px;
  color: #ef4444;
  font-size: 10px;
}
.di-analysis-status {
  margin-top: 10px;
  padding: 8px 10px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid #3b82f6;
  border-radius: 6px;
  font-size: 11px;
  color: #93c5fd;
}
.di-analysis-count {
  font-weight: 700;
  color: #3b82f6;
}

/* Analysis Filter */
.di-analysis-filter {
  margin-top: 10px;
  padding: 10px;
  background: #1e293b;
  border-radius: 6px;
}
.di-filter-label {
  display: block;
  font-size: 10px;
  color: #64748b;
  margin-bottom: 8px;
}
.di-filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.di-filter-btn {
  padding: 4px 10px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #94a3b8;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-filter-btn:hover {
  border-color: #60a5fa;
  color: #60a5fa;
}
.di-filter-btn.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.di-hidden-actions {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.di-restore-btn {
  width: 100%;
  padding: 6px 10px;
  background: transparent;
  border: 1px solid #64748b;
  border-radius: 4px;
  color: #94a3b8;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.di-restore-btn:hover:not(:disabled) {
  border-color: #f59e0b;
  color: #f59e0b;
}
.di-restore-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
.di-export-changes-btn {
  width: 100%;
  padding: 6px 10px;
  background: #1e293b;
  border: 1px solid #3b82f6;
  border-radius: 4px;
  color: #60a5fa;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.di-export-changes-btn:hover {
  background: #3b82f6;
  color: white;
}

/* Page APIs Section */
.di-page-apis {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.di-api-group {
  background: #1e293b;
  border-radius: 8px;
  overflow: hidden;
}
.di-api-group-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  background: rgba(59, 130, 246, 0.1);
  border-bottom: 1px solid #334155;
  font-size: 11px;
  font-weight: 600;
  color: #93c5fd;
}
.di-api-group-icon {
  font-size: 12px;
}
.di-api-group-count {
  margin-left: auto;
  padding: 1px 6px;
  background: #334155;
  border-radius: 4px;
  font-size: 10px;
  color: #94a3b8;
}
.di-api-group-list {
  padding: 6px 0;
}
.di-api-group-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  font-size: 10px;
}
.di-api-group-item:hover {
  background: rgba(255, 255, 255, 0.03);
}
.di-api-method {
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 9px;
  min-width: 36px;
  text-align: center;
}
.di-api-method-get {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}
.di-api-method-post {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}
.di-api-method-put {
  background: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
.di-api-method-delete {
  background: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}
.di-api-method-patch {
  background: rgba(139, 92, 246, 0.15);
  color: #8b5cf6;
}
.di-api-endpoint {
  color: #e2e8f0;
  font-family: monospace;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.di-api-variable {
  color: #60a5fa;
  font-family: monospace;
  font-size: 9px;
}
.di-api-trigger {
  padding: 1px 5px;
  background: #475569;
  border-radius: 3px;
  color: #cbd5e1;
  font-size: 9px;
  white-space: nowrap;
}

/* ===== Cross Search ===== */
.di-cross-search-section {
  background: #1e293b;
  border-radius: 8px;
  padding: 10px 12px;
}
.di-cross-search-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #0f172a;
  color: #94a3b8;
  border: 1px solid #334155;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.di-cross-search-toggle:hover {
  color: #e2e8f0;
  border-color: #475569;
}
.di-cross-search-toggle.active {
  color: #60a5fa;
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.08);
}
.di-cross-search-section {
  margin-bottom: 16px;
}
.di-cross-search-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 4px;
}
.di-cross-search-body {
  margin-top: 8px;
}
.di-cross-search-desc {
  font-size: 10px;
  color: #64748b;
  line-height: 1.4;
}
.di-cross-search-input {
  width: 100%;
  padding: 8px 10px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: #e2e8f0;
  font-size: 12px;
  font-family: monospace;
  box-sizing: border-box;
  outline: none;
}
.di-cross-search-input:focus {
  border-color: #60a5fa;
}
.di-cross-search-input::placeholder {
  color: #475569;
}
.di-cross-search-count {
  margin-top: 6px;
  font-size: 10px;
  color: #64748b;
}
.di-cross-search-results {
  margin-top: 8px;
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.di-cross-search-group {
  /* page group */
}
.di-cross-search-page-header {
  font-size: 11px;
  font-weight: 600;
  color: #a78bfa;
  padding: 2px 0;
  margin-bottom: 4px;
}
.di-cross-search-page-name {
  font-weight: 400;
  color: #64748b;
  font-size: 10px;
}
.di-cross-search-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  background: #0f172a;
  border-radius: 4px;
  border-left: 3px solid #3b82f6;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 2px;
}
.di-cross-search-item:hover {
  background: #1e293b;
}
.di-cross-item-datasource {
  border-left-color: #3b82f6;
}
.di-cross-item-action {
  border-left-color: #a78bfa;
}
.di-cross-item-form {
  border-left-color: #ec4899;
}
.di-cross-search-field {
  font-size: 11px;
  font-family: monospace;
  color: #e2e8f0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.di-cross-search-context {
  font-size: 9px;
  color: #64748b;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===== Unannotated Detection ===== */
.di-unannotated-btn {
  margin-top: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #0f172a;
  color: #94a3b8;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-unannotated-btn:hover {
  color: #f97316;
  border-color: #f97316;
}
.di-unannotated-btn.active {
  color: #f97316;
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.08);
}
.di-unannotated-badge {
  margin-left: auto;
  padding: 1px 6px;
  background: #f97316;
  color: white;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
}
.di-unannotated-results {
  margin-top: 8px;
  padding: 8px;
  background: rgba(249, 115, 22, 0.05);
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 8px;
}
.di-unannotated-summary {
  font-size: 10px;
  color: #f97316;
  margin-bottom: 6px;
}
.di-unannotated-list {
  display: flex;
  flex-direction: column;
  gap: 3px;
  max-height: 200px;
  overflow-y: auto;
}
.di-unannotated-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 4px;
  border-left: 2px solid transparent;
  transition: all 0.15s ease;
  cursor: default;
}
.di-unannotated-item-active {
  background: rgba(30, 41, 59, 0.9);
}
.di-unannotated-item-binding {
  border-left-color: #3b82f6;
}
.di-unannotated-item-form {
  border-left-color: #ec4899;
}
.di-unannotated-item-action {
  border-left-color: #a78bfa;
}
.di-unannotated-category {
  font-size: 9px;
  font-weight: 700;
  padding: 1px 5px;
  border-radius: 3px;
  flex-shrink: 0;
}
.di-unannotated-cat-binding {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
}
.di-unannotated-cat-form {
  background: rgba(236, 72, 153, 0.15);
  color: #ec4899;
}
.di-unannotated-cat-action {
  background: rgba(167, 139, 250, 0.15);
  color: #a78bfa;
}
.di-unannotated-text {
  flex: 1;
  font-size: 10px;
  color: #e2e8f0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.di-unannotated-register {
  padding: 2px 8px;
  background: rgba(249, 115, 22, 0.15);
  border: 1px solid rgba(249, 115, 22, 0.3);
  color: #f97316;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
}
.di-unannotated-register:hover {
  background: #f97316;
  color: white;
}
.di-unannotated-dismiss {
  padding: 2px;
  background: transparent;
  border: 1px solid rgba(100, 116, 139, 0.3);
  color: #64748b;
  border-radius: 3px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.di-unannotated-dismiss:hover {
  background: rgba(239, 68, 68, 0.15);
  border-color: rgba(239, 68, 68, 0.3);
  color: #ef4444;
}
.di-unannotated-empty {
  margin-top: 8px;
  padding: 8px;
  text-align: center;
  font-size: 11px;
  color: #64748b;
  background: rgba(15, 23, 42, 0.4);
  border-radius: 6px;
}

/* ===== Screen Flow ===== */
.di-screen-flow-section {
  background: #1e293b;
  border-radius: 8px;
  padding: 10px 12px;
}
.di-screen-flow-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #0f172a;
  color: #94a3b8;
  border: 1px solid #334155;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.di-screen-flow-toggle:hover {
  color: #e2e8f0;
  border-color: #475569;
}
.di-screen-flow-toggle.active {
  color: #10b981;
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.08);
}
.di-screen-flow-badge {
  margin-left: auto;
  font-size: 10px;
  color: #64748b;
  font-weight: 400;
}
.di-screen-flow-body {
  margin-top: 8px;
  max-height: 350px;
  overflow-y: auto;
}
.di-screen-flow-empty {
  padding: 12px;
  text-align: center;
  font-size: 11px;
  color: #64748b;
}
.di-flow-group {
  margin-bottom: 10px;
}
.di-flow-node {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #e2e8f0;
  border-left: 3px solid #334155;
}
.di-flow-node-current {
  border-left-color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
}
.di-flow-node-path {
  font-family: monospace;
  font-size: 11px;
}
.di-flow-node-name {
  font-weight: 400;
  color: #64748b;
  font-size: 10px;
  margin-left: 4px;
}
.di-flow-edge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px 3px 20px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 3px;
}
.di-flow-edge:hover {
  background: rgba(255, 255, 255, 0.04);
}
.di-flow-arrow {
  color: #10b981;
  font-size: 12px;
  font-weight: 700;
}
.di-flow-target {
  font-size: 11px;
  font-family: monospace;
  color: #94a3b8;
}
.di-flow-edge-label {
  font-size: 9px;
  color: #64748b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 120px;
}
.di-flow-orphans {
  margin-top: 8px;
  padding: 8px;
  background: rgba(100, 116, 139, 0.1);
  border-radius: 6px;
}
.di-flow-orphans-header {
  font-size: 10px;
  color: #64748b;
  margin-bottom: 4px;
}
.di-flow-orphan-item {
  display: inline-block;
  font-size: 10px;
  font-family: monospace;
  color: #94a3b8;
  padding: 1px 6px;
  background: #0f172a;
  border-radius: 3px;
  margin: 2px 3px 2px 0;
}

/* State Transitions */
.di-transition-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  font-size: 10px;
  color: #64748b;
  border-bottom: 1px solid #334155;
  margin-bottom: 4px;
}
.di-transition-row {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 0;
}
.di-transition-col-from,
.di-transition-col-to {
  flex: 1;
  min-width: 0;
}
.di-transition-col-arrow {
  width: 20px;
  text-align: center;
  color: #64748b;
  flex-shrink: 0;
}
.di-transition-col-trigger {
  flex: 1.2;
  min-width: 0;
}
.di-transition-col-condition {
  flex: 1;
  min-width: 0;
}
.di-transition-col-act {
  width: 28px;
  flex-shrink: 0;
}
.di-transition-select {
  width: 100%;
  padding: 4px 4px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  box-sizing: border-box;
  cursor: pointer;
}
.di-transition-select:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-transition-input {
  width: 100%;
  padding: 4px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  box-sizing: border-box;
}
.di-transition-input:focus {
  outline: none;
  border-color: #60a5fa;
}

/* Batch Processing */
.di-batch-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 8px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  margin-bottom: 4px;
}
.di-batch-item:hover {
  background: rgba(30, 41, 59, 0.8);
}
.di-batch-item-info {
  flex: 1;
  min-width: 0;
}
.di-batch-item-name {
  font-size: 12px;
  color: #e2e8f0;
  font-weight: 500;
}
.di-batch-item-schedule {
  font-size: 10px;
  color: #64748b;
}
.di-batch-empty {
  padding: 8px;
  text-align: center;
  color: #64748b;
  font-size: 11px;
  cursor: pointer;
  border-radius: 6px;
  border: 1px dashed #334155;
  transition: border-color 0.2s;
}
.di-batch-empty:hover {
  border-color: #60a5fa;
  color: #94a3b8;
}
.di-batch-editor {
  background: #1e293b;
  border-radius: 12px;
  width: 600px;
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}
.di-batch-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #334155;
}
.di-batch-editor-header h3 {
  margin: 0;
  font-size: 14px;
  color: white;
}
.di-batch-editor-body {
  padding: 16px;
}
.di-batch-editor-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid #334155;
}
.di-batch-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}
.di-batch-field {
  flex: 1;
}
.di-batch-field label {
  display: block;
  font-size: 11px;
  color: #94a3b8;
  margin-bottom: 4px;
}
.di-batch-field input,
.di-batch-field textarea,
.di-batch-field select {
  width: 100%;
  padding: 6px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: white;
  font-size: 12px;
  box-sizing: border-box;
}
.di-batch-field input:focus,
.di-batch-field textarea:focus,
.di-batch-field select:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-batch-field textarea {
  resize: vertical;
  font-family: inherit;
}
.di-batch-tags-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  min-height: 32px;
}
.di-batch-tags-input:focus-within {
  border-color: #60a5fa;
}
.di-batch-tag {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px 6px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 3px;
  font-size: 10px;
  color: #93c5fd;
}
.di-batch-tag-remove {
  background: none;
  border: none;
  color: #93c5fd;
  cursor: pointer;
  padding: 0;
  font-size: 12px;
  line-height: 1;
}
.di-batch-tag-remove:hover {
  color: #ef4444;
}
.di-batch-tag-input {
  flex: 1;
  min-width: 80px;
  border: none;
  background: transparent;
  color: white;
  font-size: 11px;
  outline: none;
}
.di-batch-steps-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
  font-size: 10px;
  color: #64748b;
  border-bottom: 1px solid #334155;
  margin-bottom: 4px;
}
.di-batch-step-row {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 0;
}
.di-batch-step-no {
  width: 28px;
  flex-shrink: 0;
  text-align: center;
  color: #64748b;
  font-size: 11px;
}
.di-batch-step-desc {
  flex: 2;
  min-width: 0;
}
.di-batch-step-target {
  flex: 1;
  min-width: 0;
}
.di-batch-step-type {
  width: 72px;
  flex-shrink: 0;
}
.di-batch-step-error {
  flex: 1;
  min-width: 0;
}
.di-batch-step-act {
  width: 28px;
  flex-shrink: 0;
}
.di-batch-step-input {
  width: 100%;
  padding: 4px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 11px;
  box-sizing: border-box;
}
.di-batch-step-input:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-batch-step-select {
  width: 100%;
  padding: 4px 4px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.di-batch-step-select:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-batch-section-label {
  font-size: 11px;
  color: #94a3b8;
  font-weight: 600;
  margin: 12px 0 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid #334155;
}

/* Element List */
.di-element-list-section {
  margin-top: 10px;
  padding: 8px;
  background: #1e293b;
  border-radius: 8px;
}
.di-element-list-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
  font-weight: 600;
  margin-bottom: 6px;
}
.di-element-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 300px;
  overflow-y: auto;
}
.di-element-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.di-element-item:hover,
.di-element-item-active {
  background: rgba(51, 65, 85, 0.6);
}
.di-element-item-active {
  outline: 1px solid rgba(96, 165, 250, 0.4);
}
.di-element-type-badge {
  flex-shrink: 0;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 9px;
  font-weight: 700;
  text-align: center;
  min-width: 32px;
}
.di-element-type-datasource {
  background: rgba(96, 165, 250, 0.15);
  color: #60a5fa;
}
.di-element-type-action {
  background: rgba(251, 191, 36, 0.15);
  color: #fbbf24;
}
.di-element-type-form {
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
}
.di-element-type-other {
  background: rgba(100, 116, 139, 0.15);
  color: #64748b;
}
.di-element-item-body {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.di-element-item-label {
  font-size: 12px;
  color: #e2e8f0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.di-element-item-id {
  font-size: 9px;
  color: #64748b;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.di-element-list-empty {
  font-size: 11px;
  color: #64748b;
  text-align: center;
  padding: 12px 0;
}

/* Export Summary */
.di-export-summary {
  margin-top: 16px;
  padding: 12px;
  background: #1e293b;
  border-radius: 8px;
}
.di-export-summary-title {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 8px;
}
.di-export-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  font-size: 12px;
  color: #cbd5e1;
}
.di-export-summary-count {
  color: #60a5fa;
  font-weight: 600;
}
</style>
