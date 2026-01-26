<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { X, Code, FileText, ExternalLink, Server, AlertCircle, Edit3, Download, Upload, Trash2, MousePointer2, GitBranch, FileSpreadsheet, Scan, Globe, Loader2 } from 'lucide-vue-next'
import { useDevInspectorStore } from '../composables/useDevInspector'
import { exportScreenSpecToXlsx } from '../utils/exportScreenSpec'

const store = useDevInspectorStore()

// Try to get Vue Router (optional)
const router = inject<any>('router', null)

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
const elementCount = computed(() => Object.keys(store.elementConfigs).length)

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

// Scan functions
const lastScanCount = ref(0)
const showScanResults = ref(false)
const allPagesScanResults = ref<{ page: string; count: number }[]>([])

async function handleScanPage(rescan = false) {
  showScanResults.value = true
  lastScanCount.value = await store.scanCurrentPage({ rescan })
}

async function handleScanAllPages() {
  if (!router) {
    alert('Vue Routerが見つかりません。全ページスキャンにはVue Routerが必要です。')
    return
  }
  if (!confirm('全ページをスキャンします。ページ遷移が発生しますがよろしいですか？')) {
    return
  }
  showScanResults.value = true
  allPagesScanResults.value = await store.scanAllPages(router)
}

// Analysis data functions
const analysisUrl = ref('/dev-inspector-analysis.json')
const isLoadingAnalysis = ref(false)
const analysisLoadError = ref('')
const analysisMatchCount = ref(0)

const filterOptions = [
  { value: 'db-api', label: 'DB/APIのみ' },
  { value: 'all', label: 'すべて' },
  { value: 'static', label: '固定文言' },
  { value: 'data', label: '動的データ' },
  { value: 'none', label: '非表示' },
] as const

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

      <!-- Edit Mode Toggle -->
      <div class="di-edit-section">
        <div class="di-edit-row">
          <div class="di-edit-label">
            <Edit3 style="width: 16px; height: 16px; color: #fbbf24;" />
            <span>編集モード</span>
          </div>
          <button
            @click="store.toggleEditMode"
            class="di-toggle"
            :class="{ active: store.isEditMode }"
          >
            <span class="di-toggle-knob" :class="{ active: store.isEditMode }"></span>
          </button>
        </div>
        <p class="di-edit-hint">ONにすると、要素をクリックして情報を編集できます</p>

        <!-- Pick Mode Button -->
        <button
          @click="store.togglePickMode"
          class="di-pick-btn"
          :class="{ active: store.isPickMode }"
        >
          <MousePointer2 style="width: 16px; height: 16px;" />
          <span>{{ store.isPickMode ? '要素選択中...' : '任意の要素にメモを追加' }}</span>
        </button>

        <!-- Scan Buttons -->
        <div class="di-scan-section">
          <button
            @click="handleScanPage(false)"
            class="di-scan-btn"
            :disabled="store.isScanning"
            title="新規要素のみスキャン"
          >
            <Loader2 v-if="store.isScanning && !store.currentScanPage" class="di-spin" style="width: 16px; height: 16px;" />
            <Scan v-else style="width: 16px; height: 16px;" />
            <span>{{ store.isScanning && !store.currentScanPage ? `${store.scanProgress}%` : 'スキャン' }}</span>
          </button>
          <button
            @click="handleScanPage(true)"
            class="di-scan-btn di-scan-btn-rescan"
            :disabled="store.isScanning"
            title="既存の設定をクリアして再スキャン"
          >
            <Scan style="width: 16px; height: 16px;" />
            <span>再スキャン</span>
          </button>
        </div>
        <div class="di-scan-section">
          <button
            @click="handleScanAllPages"
            class="di-scan-btn di-scan-btn-all"
            :disabled="store.isScanning"
            :title="router ? '全ページをスキャン' : 'Vue Routerが必要です'"
          >
            <Loader2 v-if="store.isScanning && store.currentScanPage" class="di-spin" style="width: 16px; height: 16px;" />
            <Globe v-else style="width: 16px; height: 16px;" />
            <span>{{ store.currentScanPage ? `${store.currentScanPage}` : '全ページスキャン' }}</span>
          </button>
        </div>

        <!-- Scan Progress/Results -->
        <div v-if="showScanResults && (lastScanCount > 0 || allPagesScanResults.length > 0)" class="di-scan-results">
          <div v-if="lastScanCount > 0" class="di-scan-result-item">
            <span class="di-scan-result-count">{{ lastScanCount }}</span>
            <span>件の要素を検出・登録しました</span>
          </div>
          <div v-for="result in allPagesScanResults" :key="result.page" class="di-scan-result-item">
            <code>{{ result.page }}</code>
            <span class="di-scan-result-count">{{ result.count }}</span>
          </div>
          <button @click="showScanResults = false; allPagesScanResults = []" class="di-scan-close">
            閉じる
          </button>
        </div>

        <!-- Analysis Data Section -->
        <div class="di-analysis-section">
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
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="di-content">
        <template v-if="spec">
          <!-- Screen Name -->
          <div class="di-section">
            <h2 class="di-screen-name">{{ spec.name }}</h2>
            <p class="di-screen-desc">{{ spec.description }}</p>
          </div>

          <!-- Component Path -->
          <div class="di-card">
            <div class="di-card-label">
              <Code style="width: 16px; height: 16px;" />
              <span>Component Path</span>
            </div>
            <code class="di-code-blue">{{ spec.componentPath }}</code>
          </div>

          <!-- Figma Link -->
          <div v-if="spec.figmaUrl" class="di-card">
            <div class="di-card-label">
              <ExternalLink style="width: 16px; height: 16px;" />
              <span>Figma Design</span>
            </div>
            <a :href="spec.figmaUrl" target="_blank" class="di-link-purple">{{ spec.figmaUrl }}</a>
          </div>

          <!-- APIs -->
          <div v-if="spec.apis.length" class="di-card">
            <div class="di-card-label">
              <Server style="width: 16px; height: 16px;" />
              <span>API Endpoints</span>
            </div>
            <div class="di-api-list">
              <div v-for="(api, index) in spec.apis" :key="index" class="di-api-item">
                <span
                  class="di-method-badge"
                  :style="{ backgroundColor: methodColors[api.method] + '20', color: methodColors[api.method] }"
                >{{ api.method }}</span>
                <div class="di-api-info">
                  <code class="di-api-endpoint">{{ api.endpoint }}</code>
                  <p class="di-api-desc">{{ api.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div v-if="spec.notes?.length" class="di-card">
            <div class="di-card-label">
              <AlertCircle style="width: 16px; height: 16px;" />
              <span>Notes</span>
            </div>
            <ul class="di-notes-list">
              <li v-for="(note, index) in spec.notes" :key="index" class="di-note-item">
                <span class="di-bullet">•</span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>
        </template>

        <!-- No Spec -->
        <div v-else class="di-no-spec">
          <FileText style="width: 48px; height: 48px; color: #334155;" />
          <p>この画面の仕様情報は<br>まだ登録されていません</p>
        </div>

        <!-- Element Configs Section -->
        <div class="di-card">
          <div class="di-card-header">
            <div class="di-card-label">
              <Edit3 style="width: 16px; height: 16px;" />
              <span>登録済み要素</span>
              <span class="di-count-badge">{{ elementCount }}</span>
            </div>
          </div>

          <!-- Export Buttons -->
          <div v-if="elementCount > 0" class="di-export-buttons">
            <button @click="downloadForGit" class="di-btn-green">
              <GitBranch style="width: 16px; height: 16px;" />
              Git管理用に保存
            </button>
            <button @click="exportToXlsx" class="di-btn-blue">
              <FileSpreadsheet style="width: 16px; height: 16px;" />
              画面仕様書 (xlsx) 出力
            </button>
          </div>
          <p v-if="elementCount > 0" class="di-export-hint">
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
        </div>
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
      <span v-if="store.isEditMode" class="di-indicator-edit">• 編集中</span>
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

/* Scan Section */
.di-scan-section {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}
.di-scan-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  background: #1e293b;
  color: #60a5fa;
  border: 1px solid #334155;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-scan-btn:hover:not(:disabled) {
  background: #334155;
  border-color: #60a5fa;
}
.di-scan-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.di-scan-btn-rescan {
  color: #f59e0b;
}
.di-scan-btn-rescan:hover:not(:disabled) {
  border-color: #f59e0b;
}
.di-scan-btn-all {
  color: #a78bfa;
  flex: 1;
}
.di-scan-btn-all:hover:not(:disabled) {
  border-color: #a78bfa;
}
.di-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Scan Results */
.di-scan-results {
  margin-top: 12px;
  padding: 10px;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10b981;
  border-radius: 8px;
}
.di-scan-result-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #94a3b8;
  padding: 4px 0;
}
.di-scan-result-item code {
  color: #60a5fa;
  font-size: 10px;
}
.di-scan-result-count {
  color: #10b981;
  font-weight: 700;
  font-size: 14px;
}
.di-scan-close {
  margin-top: 8px;
  width: 100%;
  padding: 6px;
  background: transparent;
  border: none;
  color: #64748b;
  font-size: 10px;
  cursor: pointer;
}
.di-scan-close:hover {
  color: white;
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
</style>
