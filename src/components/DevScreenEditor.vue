<script setup lang="ts">
import { ref, watch, computed, inject } from 'vue'
import { X, Save, Trash2, Plus, Minus, Wand2, ChevronDown, Check } from 'lucide-vue-next'
import { useDevInspectorStore, type ScreenConfig } from '../composables/useDevInspector'

const store = useDevInspectorStore()
const teleportTarget = inject<string | HTMLElement>('teleportTarget', 'body')

// Form state
const screenName = ref('')
const screenDescription = ref('')
const screenApis = ref<ScreenConfig['apis']>([])
const authRequired = ref(false)
const authRoles = ref('')
const authDescription = ref('')
const figmaUrl = ref('')
const notes = ref('')

// API suggestions
const showSuggestions = ref(false)
const suggestedApis = ref<ScreenConfig['apis']>([])
const showSuggestionDropdown = ref(false)

const currentPath = computed(() => typeof window !== 'undefined' ? window.location.pathname : '/')

// Watch for editing state changes
watch(() => store.editingScreen, (editing) => {
  if (editing) {
    loadCurrentConfig()
  }
})

function loadCurrentConfig() {
  const config = store.getScreenConfig()
  if (config) {
    screenName.value = config.name
    screenDescription.value = config.description || ''
    screenApis.value = config.apis.map(a => ({ ...a }))
    authRequired.value = config.auth?.required || false
    authRoles.value = config.auth?.roles?.join(', ') || ''
    authDescription.value = config.auth?.description || ''
    figmaUrl.value = config.figmaUrl || ''
    notes.value = config.notes || ''
  } else {
    resetForm()
  }
}

function resetForm() {
  screenName.value = ''
  screenDescription.value = ''
  screenApis.value = []
  authRequired.value = false
  authRoles.value = ''
  authDescription.value = ''
  figmaUrl.value = ''
  notes.value = ''
}

function close() {
  store.editingScreen = false
  resetForm()
}

function addApi() {
  screenApis.value.push({
    method: 'GET',
    endpoint: '',
    description: '',
    loadTiming: 'onMount',
  })
}

function removeApi(index: number) {
  screenApis.value.splice(index, 1)
}

function save() {
  if (!screenName.value.trim()) return

  const config: ScreenConfig = {
    path: currentPath.value,
    name: screenName.value.trim(),
    description: screenDescription.value.trim() || undefined,
    apis: screenApis.value.filter(a => a.endpoint.trim()),
    auth: authRequired.value || authRoles.value.trim()
      ? {
          required: authRequired.value,
          roles: authRoles.value.trim()
            ? authRoles.value.split(',').map(r => r.trim()).filter(Boolean)
            : undefined,
          description: authDescription.value.trim() || undefined,
        }
      : undefined,
    figmaUrl: figmaUrl.value.trim() || undefined,
    notes: notes.value.trim() || undefined,
    updatedAt: new Date().toISOString(),
  }

  store.setScreenConfig(config)
  close()
}

function deleteConfig() {
  store.deleteScreenConfig(currentPath.value)
  close()
}

const methodColors: Record<string, string> = {
  GET: '#10b981',
  POST: '#3b82f6',
  PUT: '#f59e0b',
  DELETE: '#ef4444',
  PATCH: '#8b5cf6',
}

const loadTimingLabels: Record<string, string> = {
  onMount: '読込時',
  action: 'アクション',
  conditional: '条件付き',
}

function generateSuggestions() {
  suggestedApis.value = store.suggestScreenApis()
  showSuggestions.value = true
}

// Check if a suggestion is already added to the form
function isAlreadyAdded(suggestion: ScreenConfig['apis'][0]): boolean {
  return screenApis.value.some(a =>
    a.method === suggestion.method && a.endpoint === suggestion.endpoint
  )
}

// Suggestions not yet added
const availableSuggestions = computed(() => {
  return suggestedApis.value.filter(s => !isAlreadyAdded(s))
})

function addSuggestion(suggestion: ScreenConfig['apis'][0]) {
  if (isAlreadyAdded(suggestion)) return
  screenApis.value.push({ ...suggestion })
}

function addAllSuggestions() {
  for (const s of availableSuggestions.value) {
    screenApis.value.push({ ...s })
  }
}

function hideSuggestionDropdown() {
  setTimeout(() => { showSuggestionDropdown.value = false }, 150)
}

const methodOptions: ScreenConfig['apis'][0]['method'][] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
const loadTimingOptions: { value: NonNullable<ScreenConfig['apis'][0]['loadTiming']>; label: string }[] = [
  { value: 'onMount', label: '画面読込時' },
  { value: 'action', label: 'アクション時' },
  { value: 'conditional', label: '条件付き' },
]
</script>

<template>
  <Teleport :to="teleportTarget">
    <div v-if="store.editingScreen" class="di-editor-overlay" @click.self="close" data-dev-inspector>
      <div class="di-editor-modal">
        <!-- Header -->
        <div class="di-editor-header">
          <h3>画面情報を編集</h3>
          <div class="di-header-actions">
            <span class="di-path-badge">{{ currentPath }}</span>
            <button @click="close" class="di-editor-close">
              <X style="width: 20px; height: 20px;" />
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="di-editor-content">
          <!-- Screen Name -->
          <div class="di-form-group">
            <label class="di-form-label">画面名 *</label>
            <input
              v-model="screenName"
              type="text"
              placeholder="ユーザー詳細"
              class="di-input"
            />
          </div>

          <!-- Screen Description -->
          <div class="di-form-group">
            <label class="di-form-label">画面の説明</label>
            <textarea
              v-model="screenDescription"
              rows="2"
              placeholder="この画面の概要..."
              class="di-textarea"
            ></textarea>
          </div>

          <!-- APIs Section -->
          <div class="di-form-section">
            <div class="di-form-section-header">
              <label class="di-form-label">API一覧</label>
              <div class="di-api-header-actions">
                <button @click="generateSuggestions" class="di-btn-suggest" title="要素情報からAPI推定">
                  <Wand2 style="width: 13px; height: 13px;" />
                  自動推定
                </button>
                <div class="di-dropdown-wrapper">
                  <button
                    v-if="suggestedApis.length > 0"
                    @click="showSuggestionDropdown = !showSuggestionDropdown"
                    @blur="hideSuggestionDropdown()"
                    class="di-btn-dropdown"
                    title="推定結果から選択"
                  >
                    <ChevronDown style="width: 13px; height: 13px;" />
                    候補から選択
                  </button>
                  <!-- Suggestion Dropdown -->
                  <div v-if="showSuggestionDropdown && suggestedApis.length > 0" class="di-suggestion-dropdown">
                    <div v-if="availableSuggestions.length > 0" class="di-suggestion-actions">
                      <button @mousedown.prevent="addAllSuggestions" class="di-suggestion-add-all">
                        すべて追加 ({{ availableSuggestions.length }})
                      </button>
                    </div>
                    <button
                      v-for="(s, i) in suggestedApis"
                      :key="i"
                      @mousedown.prevent="addSuggestion(s)"
                      class="di-suggestion-item"
                      :class="{ 'di-suggestion-added': isAlreadyAdded(s) }"
                      :disabled="isAlreadyAdded(s)"
                    >
                      <span
                        class="di-suggestion-method"
                        :style="{ backgroundColor: methodColors[s.method] + '20', color: methodColors[s.method] }"
                      >{{ s.method }}</span>
                      <code class="di-suggestion-endpoint">{{ s.endpoint }}</code>
                      <span v-if="s.loadTiming" class="di-suggestion-timing">{{ loadTimingLabels[s.loadTiming] || s.loadTiming }}</span>
                      <Check v-if="isAlreadyAdded(s)" style="width: 12px; height: 12px; color: #10b981; flex-shrink: 0;" />
                    </button>
                    <div v-if="suggestedApis.length === 0" class="di-suggestion-empty">
                      推定結果がありません
                    </div>
                  </div>
                </div>
                <button @click="addApi" class="di-btn-add">
                  <Plus style="width: 14px; height: 14px;" />
                  手動追加
                </button>
              </div>
            </div>

            <!-- Suggestion Banner (after first generation) -->
            <div v-if="showSuggestions && suggestedApis.length > 0 && availableSuggestions.length > 0" class="di-suggestion-banner">
              <Wand2 style="width: 13px; height: 13px; color: #f59e0b; flex-shrink: 0;" />
              <span>{{ suggestedApis.length }}件のAPIを推定しました</span>
              <button @mousedown.prevent="addAllSuggestions" class="di-suggestion-banner-btn">すべて追加</button>
            </div>
            <div v-else-if="showSuggestions && suggestedApis.length === 0" class="di-suggestion-banner di-suggestion-banner-empty">
              <span>要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。</span>
            </div>

            <div v-if="screenApis.length === 0 && !showSuggestions" class="di-empty-hint">
              APIが未登録です。「自動推定」で要素情報からAPIを推定できます。
            </div>

            <div v-for="(api, index) in screenApis" :key="index" class="di-api-entry">
              <div class="di-api-entry-row">
                <select v-model="api.method" class="di-select di-select-method">
                  <option v-for="m in methodOptions" :key="m" :value="m">{{ m }}</option>
                </select>
                <input
                  v-model="api.endpoint"
                  type="text"
                  placeholder="/api/users/:id"
                  class="di-input di-input-endpoint"
                />
                <button @click="removeApi(index)" class="di-btn-remove">
                  <Minus style="width: 14px; height: 14px;" />
                </button>
              </div>
              <div class="di-api-entry-row2">
                <input
                  v-model="api.description"
                  type="text"
                  placeholder="説明（任意）"
                  class="di-input di-input-desc"
                />
                <select v-model="api.loadTiming" class="di-select di-select-timing">
                  <option v-for="opt in loadTimingOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Auth Section -->
          <div class="di-form-section">
            <label class="di-form-label">認証設定</label>
            <div class="di-auth-row">
              <button
                @click="authRequired = !authRequired"
                class="di-toggle-btn"
                :class="{ active: authRequired }"
              >
                <span class="di-toggle-knob" :class="{ active: authRequired }"></span>
              </button>
              <span class="di-auth-label">ログイン必須</span>
            </div>

            <div v-if="authRequired" class="di-auth-details">
              <div class="di-form-group">
                <label class="di-form-label">必要ロール（カンマ区切り）</label>
                <input
                  v-model="authRoles"
                  type="text"
                  placeholder="admin, manager"
                  class="di-input"
                />
              </div>
              <div class="di-form-group">
                <label class="di-form-label">認証メモ</label>
                <input
                  v-model="authDescription"
                  type="text"
                  placeholder="自分のデータのみ閲覧可"
                  class="di-input"
                />
              </div>
            </div>
          </div>

          <!-- Figma URL -->
          <div class="di-form-group">
            <label class="di-form-label">Figma URL</label>
            <input
              v-model="figmaUrl"
              type="text"
              placeholder="https://www.figma.com/design/..."
              class="di-input"
            />
          </div>

          <!-- Notes -->
          <div class="di-form-group">
            <label class="di-form-label">メモ</label>
            <textarea
              v-model="notes"
              rows="3"
              placeholder="この画面に関するメモ..."
              class="di-textarea"
            ></textarea>
          </div>
        </div>

        <!-- Footer -->
        <div class="di-editor-footer">
          <button @click="deleteConfig" class="di-btn-delete">
            <Trash2 style="width: 14px; height: 14px;" />
            削除
          </button>
          <div class="di-editor-actions">
            <button @click="close" class="di-btn-cancel">キャンセル</button>
            <button @click="save" class="di-btn-save" :disabled="!screenName.trim()">
              <Save style="width: 14px; height: 14px;" />
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.di-editor-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.di-editor-modal {
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  width: 480px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.di-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
}
.di-editor-header h3 {
  color: white;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
}
.di-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.di-path-badge {
  padding: 2px 8px;
  background: #334155;
  color: #94a3b8;
  font-size: 11px;
  font-family: monospace;
  border-radius: 4px;
}
.di-editor-close {
  padding: 4px;
  background: transparent;
  border: none;
  color: #94a3b8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-editor-close:hover {
  color: white;
  background: #334155;
}

.di-editor-content {
  padding: 16px;
  overflow-y: auto;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.di-form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-form-label {
  font-size: 10px;
  color: #64748b;
}

.di-input, .di-select, .di-textarea {
  width: 100%;
  padding: 8px 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.di-input::placeholder, .di-textarea::placeholder {
  color: #475569;
}
.di-input:focus, .di-select:focus, .di-textarea:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-textarea {
  resize: none;
}
.di-select {
  cursor: pointer;
}

/* Form Section */
.di-form-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid #334155;
  border-radius: 8px;
}
.di-form-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.di-empty-hint {
  font-size: 11px;
  color: #475569;
  text-align: center;
  padding: 8px 0;
}

/* API Entry */
.di-api-entry {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 6px;
}
.di-api-entry-row {
  display: flex;
  gap: 6px;
  align-items: center;
}
.di-api-entry-row2 {
  display: flex;
  gap: 6px;
  align-items: center;
}
.di-select-method {
  width: 90px;
  flex-shrink: 0;
  padding: 6px 8px;
  font-size: 11px;
  font-weight: 600;
}
.di-input-endpoint {
  flex: 1;
  font-family: monospace;
  padding: 6px 8px;
  font-size: 11px;
}
.di-input-desc {
  flex: 1;
  padding: 6px 8px;
  font-size: 11px;
}
.di-select-timing {
  width: 110px;
  flex-shrink: 0;
  padding: 6px 8px;
  font-size: 11px;
}

/* API Header Actions */
.di-api-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}
.di-btn-suggest {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-radius: 4px;
  color: #f59e0b;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-suggest:hover {
  background: rgba(245, 158, 11, 0.2);
  border-color: #f59e0b;
}
.di-dropdown-wrapper {
  position: relative;
}
.di-btn-dropdown {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: transparent;
  border: 1px solid #334155;
  border-radius: 4px;
  color: #94a3b8;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-dropdown:hover {
  border-color: #60a5fa;
  color: #60a5fa;
}

/* Suggestion Dropdown */
.di-suggestion-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 20;
  width: 360px;
  max-height: 260px;
  overflow-y: auto;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  margin-top: 4px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}
.di-suggestion-actions {
  padding: 6px 8px;
  border-bottom: 1px solid #1e293b;
}
.di-suggestion-add-all {
  width: 100%;
  padding: 5px 10px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 4px;
  color: #60a5fa;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.di-suggestion-add-all:hover {
  background: rgba(59, 130, 246, 0.2);
}
.di-suggestion-item {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 7px 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1e293b;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.di-suggestion-item:last-child {
  border-bottom: none;
}
.di-suggestion-item:hover:not(:disabled) {
  background: #1e293b;
}
.di-suggestion-item:disabled {
  cursor: default;
  opacity: 0.6;
}
.di-suggestion-added {
  background: rgba(16, 185, 129, 0.05);
}
.di-suggestion-method {
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 9px;
  min-width: 36px;
  text-align: center;
  flex-shrink: 0;
}
.di-suggestion-endpoint {
  flex: 1;
  color: #e2e8f0;
  font-size: 11px;
  font-family: monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.di-suggestion-timing {
  padding: 1px 5px;
  background: #334155;
  border-radius: 3px;
  color: #94a3b8;
  font-size: 9px;
  white-space: nowrap;
  flex-shrink: 0;
}
.di-suggestion-empty {
  padding: 12px;
  color: #475569;
  font-size: 11px;
  text-align: center;
}

/* Suggestion Banner */
.di-suggestion-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background: rgba(245, 158, 11, 0.08);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 6px;
  font-size: 11px;
  color: #f59e0b;
}
.di-suggestion-banner-empty {
  color: #64748b;
  background: rgba(100, 116, 139, 0.08);
  border-color: rgba(100, 116, 139, 0.2);
}
.di-suggestion-banner-btn {
  margin-left: auto;
  padding: 3px 10px;
  background: #f59e0b;
  border: none;
  border-radius: 4px;
  color: #000;
  font-size: 10px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
}
.di-suggestion-banner-btn:hover {
  background: #d97706;
}

.di-btn-add {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: transparent;
  border: 1px dashed #334155;
  border-radius: 4px;
  color: #64748b;
  font-size: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-add:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
}
.di-btn-remove {
  padding: 4px;
  background: transparent;
  border: none;
  color: #64748b;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
}
.di-btn-remove:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

/* Auth */
.di-auth-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.di-auth-label {
  font-size: 12px;
  color: #94a3b8;
}
.di-toggle-btn {
  position: relative;
  width: 40px;
  height: 22px;
  background: #334155;
  border: none;
  border-radius: 11px;
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
}
.di-toggle-btn.active {
  background: #3b82f6;
}
.di-toggle-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}
.di-toggle-knob.active {
  transform: translateX(18px);
}
.di-auth-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background: rgba(59, 130, 246, 0.06);
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: 6px;
}

/* Footer */
.di-editor-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0f172a;
  border-top: 1px solid #334155;
}
.di-editor-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.di-btn-delete {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-delete:hover {
  background: rgba(239, 68, 68, 0.1);
}

.di-btn-cancel {
  padding: 6px 16px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-cancel:hover {
  color: white;
  background: #334155;
}

.di-btn-save {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: #3b82f6;
  border: none;
  color: white;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-save:hover {
  background: #2563eb;
}
.di-btn-save:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
