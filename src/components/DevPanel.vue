<script setup lang="ts">
import { ref, computed } from 'vue'
import { X, Code, FileText, ExternalLink, Server, AlertCircle, Edit3, Download, Upload, Trash2, MousePointer2, GitBranch, FileSpreadsheet } from 'lucide-vue-next'
import { useDevInspectorStore } from '../composables/useDevInspector'
import { exportScreenSpecToXlsx } from '../utils/exportScreenSpec'

const store = useDevInspectorStore()

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
</script>

<template>
  <!-- Floating Toggle Button -->
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <button
      v-if="store.isEnabled && !store.isPanelOpen"
      @click="store.openPanel"
      class="fixed bottom-4 right-4 z-[9998] w-12 h-12 bg-[#1e293b] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#334155] transition-colors"
      title="画面仕様を表示"
      data-dev-inspector
    >
      <FileText class="w-5 h-5" />
    </button>
  </Transition>

  <!-- Panel -->
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div
      v-if="store.isEnabled && store.isPanelOpen"
      class="fixed top-0 right-0 z-[9999] w-[360px] h-full bg-[#0f172a] text-white shadow-2xl overflow-hidden flex flex-col"
      data-dev-inspector
    >
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 bg-[#1e293b] border-b border-[#334155]">
        <div class="flex items-center gap-2">
          <Code class="w-5 h-5 text-[#60a5fa]" />
          <span class="font-bold text-[14px]">Developer Mode</span>
        </div>
        <button
          @click="store.closePanel"
          class="p-1 hover:bg-[#334155] rounded transition-colors"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Edit Mode Toggle -->
      <div class="px-4 py-3 bg-[#1e293b]/50 border-b border-[#334155]">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Edit3 class="w-4 h-4 text-[#fbbf24]" />
            <span class="text-[12px]">編集モード</span>
          </div>
          <button
            @click="store.toggleEditMode"
            class="relative w-[44px] h-[24px] rounded-full transition-colors"
            :class="store.isEditMode ? 'bg-[#fbbf24]' : 'bg-[#334155]'"
          >
            <span
              class="absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow transition-transform"
              :class="store.isEditMode ? 'translate-x-[22px]' : 'translate-x-[2px]'"
            ></span>
          </button>
        </div>
        <p class="text-[10px] text-[#64748b] mt-1.5">
          ONにすると、要素をクリックして情報を編集できます
        </p>

        <!-- Pick Mode Button -->
        <button
          @click="store.togglePickMode"
          class="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors"
          :class="store.isPickMode
            ? 'bg-[#10b981] text-white'
            : 'bg-[#0f172a] text-[#94a3b8] hover:text-white hover:bg-[#334155]'"
        >
          <MousePointer2 class="w-4 h-4" />
          <span class="text-[12px] font-medium">
            {{ store.isPickMode ? '要素選択中...' : '任意の要素にメモを追加' }}
          </span>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <template v-if="spec">
          <!-- Screen Name -->
          <div>
            <h2 class="text-[18px] font-bold text-white mb-1">{{ spec.name }}</h2>
            <p class="text-[12px] text-[#94a3b8]">{{ spec.description }}</p>
          </div>

          <!-- Component Path -->
          <div class="bg-[#1e293b] rounded-lg p-3">
            <div class="flex items-center gap-2 text-[11px] text-[#64748b] mb-2">
              <Code class="w-4 h-4" />
              <span>Component Path</span>
            </div>
            <code class="text-[12px] text-[#60a5fa] font-mono break-all">{{ spec.componentPath }}</code>
          </div>

          <!-- Figma Link -->
          <div v-if="spec.figmaUrl" class="bg-[#1e293b] rounded-lg p-3">
            <div class="flex items-center gap-2 text-[11px] text-[#64748b] mb-2">
              <ExternalLink class="w-4 h-4" />
              <span>Figma Design</span>
            </div>
            <a
              :href="spec.figmaUrl"
              target="_blank"
              class="text-[12px] text-[#a78bfa] hover:underline font-mono break-all"
            >{{ spec.figmaUrl }}</a>
          </div>

          <!-- APIs -->
          <div v-if="spec.apis.length" class="bg-[#1e293b] rounded-lg p-3">
            <div class="flex items-center gap-2 text-[11px] text-[#64748b] mb-3">
              <Server class="w-4 h-4" />
              <span>API Endpoints</span>
            </div>
            <div class="space-y-2">
              <div
                v-for="(api, index) in spec.apis"
                :key="index"
                class="flex items-start gap-2"
              >
                <span
                  class="text-[10px] font-bold px-1.5 py-0.5 rounded min-w-[45px] text-center"
                  :style="{ backgroundColor: methodColors[api.method] + '20', color: methodColors[api.method] }"
                >{{ api.method }}</span>
                <div class="flex-1">
                  <code class="text-[11px] text-[#e2e8f0] font-mono">{{ api.endpoint }}</code>
                  <p class="text-[10px] text-[#64748b] mt-0.5">{{ api.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Notes -->
          <div v-if="spec.notes?.length" class="bg-[#1e293b] rounded-lg p-3">
            <div class="flex items-center gap-2 text-[11px] text-[#64748b] mb-2">
              <AlertCircle class="w-4 h-4" />
              <span>Notes</span>
            </div>
            <ul class="space-y-1">
              <li
                v-for="(note, index) in spec.notes"
                :key="index"
                class="text-[12px] text-[#94a3b8] flex items-start gap-2"
              >
                <span class="text-[#64748b]">•</span>
                <span>{{ note }}</span>
              </li>
            </ul>
          </div>
        </template>

        <!-- No Spec -->
        <div v-else class="text-center py-8">
          <FileText class="w-12 h-12 text-[#334155] mx-auto mb-3" />
          <p class="text-[14px] text-[#64748b]">この画面の仕様情報は<br>まだ登録されていません</p>
        </div>

        <!-- Element Configs Section -->
        <div class="bg-[#1e293b] rounded-lg p-3">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2 text-[11px] text-[#64748b]">
              <Edit3 class="w-4 h-4" />
              <span>登録済み要素</span>
              <span class="px-1.5 py-0.5 bg-[#334155] rounded text-[10px]">{{ elementCount }}</span>
            </div>
          </div>

          <!-- Export Buttons -->
          <div v-if="elementCount > 0" class="space-y-2 mb-3">
            <button
              @click="downloadForGit"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] text-white bg-[#10b981] hover:bg-[#059669] rounded-lg transition-colors"
            >
              <GitBranch class="w-4 h-4" />
              Git管理用に保存
            </button>
            <button
              @click="exportToXlsx"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[12px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
            >
              <FileSpreadsheet class="w-4 h-4" />
              画面仕様書 (xlsx) 出力
            </button>
          </div>
          <p v-if="elementCount > 0" class="text-[10px] text-[#64748b] mb-3">
            JSON: <code class="text-[#60a5fa]">dev-annotations.json</code> に配置してcommit
          </p>

          <div class="flex flex-wrap gap-2">
            <button
              @click="showExportModal = true"
              class="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#94a3b8] hover:text-white bg-[#0f172a] hover:bg-[#334155] rounded-lg transition-colors"
            >
              <Download class="w-3.5 h-3.5" />
              エクスポート
            </button>
            <button
              @click="showImportModal = true"
              class="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#94a3b8] hover:text-white bg-[#0f172a] hover:bg-[#334155] rounded-lg transition-colors"
            >
              <Upload class="w-3.5 h-3.5" />
              インポート
            </button>
            <button
              v-if="elementCount > 0"
              @click="clearAll"
              class="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg transition-colors"
            >
              <Trash2 class="w-3.5 h-3.5" />
              全削除
            </button>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="px-4 py-3 bg-[#1e293b] border-t border-[#334155] text-[10px] text-[#64748b]">
        <kbd class="px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]">Ctrl</kbd>
        <span class="mx-1">+</span>
        <kbd class="px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]">Shift</kbd>
        <span class="mx-1">+</span>
        <kbd class="px-1.5 py-0.5 bg-[#334155] rounded text-[#94a3b8]">D</kbd>
        <span class="ml-2">で開発者モード切替</span>
      </div>
    </div>
  </Transition>

  <!-- Dev Mode Indicator -->
  <Transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="store.isEnabled"
      class="fixed top-2 left-1/2 -translate-x-1/2 z-[9998] px-3 py-1.5 bg-[#1e293b] text-[#60a5fa] text-[11px] font-medium rounded-full shadow-lg flex items-center gap-2"
      data-dev-inspector
    >
      <span class="w-2 h-2 bg-[#60a5fa] rounded-full animate-pulse"></span>
      Developer Mode
      <span v-if="store.isEditMode" class="text-[#fbbf24]">• 編集中</span>
    </div>
  </Transition>

  <!-- Export Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showExportModal"
        class="fixed inset-0 z-[10001] flex items-center justify-center bg-black/50"
        @click.self="showExportModal = false"
        data-dev-inspector
      >
        <div class="bg-[#1e293b] rounded-xl shadow-2xl w-[400px] p-4">
          <h3 class="text-white font-bold text-[14px] mb-3">設定をエクスポート</h3>
          <textarea
            readonly
            :value="store.exportConfigs()"
            class="w-full h-[200px] px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-[#94a3b8] text-[11px] font-mono resize-none"
          ></textarea>
          <div class="flex justify-end gap-2 mt-3">
            <button
              @click="showExportModal = false"
              class="px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
            >
              閉じる
            </button>
            <button
              @click="downloadExport"
              class="flex items-center gap-1.5 px-4 py-1.5 text-[11px] text-white bg-[#334155] hover:bg-[#475569] rounded-lg transition-colors"
            >
              <Download class="w-3.5 h-3.5" />
              ファイル保存
            </button>
            <button
              @click="copyExport"
              class="px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
            >
              コピー
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- Import Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="showImportModal"
        class="fixed inset-0 z-[10001] flex items-center justify-center bg-black/50"
        @click.self="showImportModal = false"
        data-dev-inspector
      >
        <div class="bg-[#1e293b] rounded-xl shadow-2xl w-[400px] p-4">
          <h3 class="text-white font-bold text-[14px] mb-3">設定をインポート</h3>
          <div class="mb-3">
            <label class="flex items-center justify-center w-full h-[60px] border-2 border-dashed border-[#334155] rounded-lg cursor-pointer hover:border-[#60a5fa] transition-colors">
              <input type="file" accept=".json" class="hidden" @change="handleFileImport" />
              <span class="text-[11px] text-[#64748b]">JSONファイルをドラッグまたはクリック</span>
            </label>
          </div>
          <textarea
            v-model="importText"
            placeholder="またはJSONを直接貼り付け..."
            class="w-full h-[150px] px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[11px] font-mono resize-none placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
          ></textarea>
          <p v-if="importError" class="text-[10px] text-[#ef4444] mt-1">{{ importError }}</p>
          <div class="flex justify-end gap-2 mt-3">
            <button
              @click="showImportModal = false; importText = ''; importError = ''"
              class="px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
            >
              キャンセル
            </button>
            <button
              @click="handleImport"
              :disabled="!importText"
              class="px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              インポート
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
