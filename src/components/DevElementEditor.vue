<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { X, Database, Zap, Save, Trash2, MessageSquare, Info, AlertTriangle, CheckSquare, HelpCircle, Link, Settings2 } from 'lucide-vue-next'
import { useDevInspectorStore, type FieldInfo, type ActionInfo, type ElementNote, type LinkInfo, type DevMeta } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const activeTab = ref<'note' | 'field' | 'action' | 'links' | 'meta'>('note')

// Field form
const fieldTable = ref('')
const fieldColumn = ref('')
const fieldType = ref('')
const fieldValidation = ref('')
const fieldDescription = ref('')

// Action form
const actionType = ref<ActionInfo['type']>('navigate')
const actionTarget = ref('')
const actionMethod = ref<ActionInfo['method']>('GET')
const actionDescription = ref('')

// Note form
const noteText = ref('')
const noteAuthor = ref('')
const noteType = ref<ElementNote['type']>('info')

// Links form
const linkTestPath = ref('')
const linkFigmaUrl = ref('')
const linkGithubIssue = ref('')
const linkGithubPr = ref('')
const linkRelatedDocs = ref('')

// Meta form
const metaUsedStores = ref('')
const metaUsedComponents = ref('')
const metaI18nKeys = ref('')
const metaDesignTokens = ref('')
const metaAccessibility = ref('')
const metaResponsive = ref('')

const isEditing = computed(() => store.editingElementId !== null)
const elementId = computed(() => store.editingElementId)

// Load existing config when editing starts
watch(elementId, (id) => {
  if (id) {
    const config = store.getElementConfig(id)
    if (config?.fieldInfo) {
      fieldTable.value = config.fieldInfo.table || ''
      fieldColumn.value = config.fieldInfo.column || ''
      fieldType.value = config.fieldInfo.type || ''
      fieldValidation.value = config.fieldInfo.validation?.join(', ') || ''
      fieldDescription.value = config.fieldInfo.description || ''
    }
    if (config?.actionInfo) {
      actionType.value = config.actionInfo.type || 'navigate'
      actionTarget.value = config.actionInfo.target || ''
      actionMethod.value = config.actionInfo.method || 'GET'
      actionDescription.value = config.actionInfo.description || ''
    }
    if (config?.note) {
      noteText.value = config.note.text || ''
      noteAuthor.value = config.note.author || ''
      noteType.value = config.note.type || 'info'
    }
    if (config?.links) {
      linkTestPath.value = config.links.testPath || ''
      linkFigmaUrl.value = config.links.figmaUrl || ''
      linkGithubIssue.value = config.links.githubIssue || ''
      linkGithubPr.value = config.links.githubPr || ''
      linkRelatedDocs.value = config.links.relatedDocs || ''
    }
    if (config?.devMeta) {
      metaUsedStores.value = config.devMeta.usedStores?.join(', ') || ''
      metaUsedComponents.value = config.devMeta.usedComponents?.join(', ') || ''
      metaI18nKeys.value = config.devMeta.i18nKeys?.join(', ') || ''
      metaDesignTokens.value = config.devMeta.designTokens?.join(', ') || ''
      metaAccessibility.value = config.devMeta.accessibility || ''
      metaResponsive.value = config.devMeta.responsive || ''
    }
    // Set default tab based on what data exists
    if (config?.note?.text) {
      activeTab.value = 'note'
    } else if (config?.fieldInfo) {
      activeTab.value = 'field'
    } else if (config?.actionInfo) {
      activeTab.value = 'action'
    } else if (config?.links) {
      activeTab.value = 'links'
    } else if (config?.devMeta) {
      activeTab.value = 'meta'
    } else {
      activeTab.value = 'note' // Default to note for new elements
    }
  } else {
    resetForm()
  }
})

function resetForm() {
  fieldTable.value = ''
  fieldColumn.value = ''
  fieldType.value = ''
  fieldValidation.value = ''
  fieldDescription.value = ''
  actionType.value = 'navigate'
  actionTarget.value = ''
  actionMethod.value = 'GET'
  actionDescription.value = ''
  noteText.value = ''
  noteAuthor.value = ''
  noteType.value = 'info'
  linkTestPath.value = ''
  linkFigmaUrl.value = ''
  linkGithubIssue.value = ''
  linkGithubPr.value = ''
  linkRelatedDocs.value = ''
  metaUsedStores.value = ''
  metaUsedComponents.value = ''
  metaI18nKeys.value = ''
  metaDesignTokens.value = ''
  metaAccessibility.value = ''
  metaResponsive.value = ''
  activeTab.value = 'note'
}

function close() {
  store.stopEditing()
  resetForm()
}

function save() {
  if (!elementId.value) return

  const fieldInfo: FieldInfo | undefined = fieldTable.value && fieldColumn.value
    ? {
        table: fieldTable.value,
        column: fieldColumn.value,
        type: fieldType.value || undefined,
        validation: fieldValidation.value ? fieldValidation.value.split(',').map(s => s.trim()) : undefined,
        description: fieldDescription.value || undefined,
      }
    : undefined

  const actionInfo: ActionInfo | undefined = actionTarget.value
    ? {
        type: actionType.value,
        target: actionTarget.value,
        method: actionType.value === 'api' ? actionMethod.value : undefined,
        description: actionDescription.value || undefined,
      }
    : undefined

  const note: ElementNote | undefined = noteText.value
    ? {
        text: noteText.value,
        author: noteAuthor.value || undefined,
        type: noteType.value,
      }
    : undefined

  const links: LinkInfo | undefined = (linkTestPath.value || linkFigmaUrl.value || linkGithubIssue.value || linkGithubPr.value || linkRelatedDocs.value)
    ? {
        testPath: linkTestPath.value || undefined,
        figmaUrl: linkFigmaUrl.value || undefined,
        githubIssue: linkGithubIssue.value || undefined,
        githubPr: linkGithubPr.value || undefined,
        relatedDocs: linkRelatedDocs.value || undefined,
      }
    : undefined

  const devMeta: DevMeta | undefined = (metaUsedStores.value || metaUsedComponents.value || metaI18nKeys.value || metaDesignTokens.value || metaAccessibility.value || metaResponsive.value)
    ? {
        usedStores: metaUsedStores.value ? metaUsedStores.value.split(',').map(s => s.trim()) : undefined,
        usedComponents: metaUsedComponents.value ? metaUsedComponents.value.split(',').map(s => s.trim()) : undefined,
        i18nKeys: metaI18nKeys.value ? metaI18nKeys.value.split(',').map(s => s.trim()) : undefined,
        designTokens: metaDesignTokens.value ? metaDesignTokens.value.split(',').map(s => s.trim()) : undefined,
        accessibility: metaAccessibility.value || undefined,
        responsive: metaResponsive.value || undefined,
      }
    : undefined

  store.setElementConfig(elementId.value, {
    fieldInfo,
    actionInfo,
    note,
    links,
    devMeta,
  })

  close()
}

function deleteConfig() {
  if (!elementId.value) return
  store.deleteElementConfig(elementId.value)
  close()
}

const typeOptions = ['VARCHAR', 'TEXT', 'INT', 'BIGINT', 'BOOLEAN', 'DATE', 'DATETIME', 'TIMESTAMP', 'JSON']
const actionTypeOptions: { value: ActionInfo['type']; label: string }[] = [
  { value: 'navigate', label: '画面遷移' },
  { value: 'api', label: 'API呼び出し' },
  { value: 'modal', label: 'モーダル表示' },
  { value: 'emit', label: 'イベント発火' },
  { value: 'function', label: '関数実行' },
]
const methodOptions: ActionInfo['method'][] = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
const noteTypeOptions: { value: ElementNote['type']; label: string; icon: typeof Info; color: string }[] = [
  { value: 'info', label: '情報', icon: Info, color: '#60a5fa' },
  { value: 'warning', label: '注意', icon: AlertTriangle, color: '#fbbf24' },
  { value: 'todo', label: 'TODO', icon: CheckSquare, color: '#10b981' },
  { value: 'question', label: '質問', icon: HelpCircle, color: '#a78bfa' },
]
</script>

<template>
  <!-- Modal Overlay -->
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
        v-if="isEditing"
        class="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50"
        @click.self="close"
        data-dev-inspector
      >
        <!-- Modal -->
        <div class="bg-[#1e293b] rounded-xl shadow-2xl w-[420px] max-h-[80vh] overflow-hidden">
          <!-- Header -->
          <div class="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-b border-[#334155]">
            <h3 class="text-white font-bold text-[14px]">要素情報を編集</h3>
            <button
              @click="close"
              class="p-1 text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded transition-colors"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-[#334155] overflow-x-auto">
            <button
              @click="activeTab = 'note'"
              class="flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap"
              :class="activeTab === 'note' ? 'text-[#10b981] border-b-2 border-[#10b981] bg-[#10b981]/10' : 'text-[#94a3b8] hover:text-white'"
            >
              <MessageSquare class="w-3 h-3" />
              メモ
            </button>
            <button
              @click="activeTab = 'field'"
              class="flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap"
              :class="activeTab === 'field' ? 'text-[#60a5fa] border-b-2 border-[#60a5fa] bg-[#60a5fa]/10' : 'text-[#94a3b8] hover:text-white'"
            >
              <Database class="w-3 h-3" />
              データ
            </button>
            <button
              @click="activeTab = 'action'"
              class="flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap"
              :class="activeTab === 'action' ? 'text-[#a78bfa] border-b-2 border-[#a78bfa] bg-[#a78bfa]/10' : 'text-[#94a3b8] hover:text-white'"
            >
              <Zap class="w-3 h-3" />
              アクション
            </button>
            <button
              @click="activeTab = 'links'"
              class="flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap"
              :class="activeTab === 'links' ? 'text-[#f59e0b] border-b-2 border-[#f59e0b] bg-[#f59e0b]/10' : 'text-[#94a3b8] hover:text-white'"
            >
              <Link class="w-3 h-3" />
              リンク
            </button>
            <button
              @click="activeTab = 'meta'"
              class="flex items-center justify-center gap-1 px-2.5 py-2.5 text-[10px] font-medium transition-colors whitespace-nowrap"
              :class="activeTab === 'meta' ? 'text-[#ec4899] border-b-2 border-[#ec4899] bg-[#ec4899]/10' : 'text-[#94a3b8] hover:text-white'"
            >
              <Settings2 class="w-3 h-3" />
              開発情報
            </button>
          </div>

          <!-- Content -->
          <div class="p-4 space-y-3 max-h-[400px] overflow-y-auto">
            <!-- Note Tab -->
            <template v-if="activeTab === 'note'">
              <div>
                <label class="block text-[10px] text-[#64748b] mb-2">タイプ</label>
                <div class="grid grid-cols-4 gap-2">
                  <button
                    v-for="opt in noteTypeOptions"
                    :key="opt.value"
                    @click="noteType = opt.value"
                    class="flex flex-col items-center gap-1 p-2 rounded-lg border transition-colors"
                    :class="noteType === opt.value
                      ? 'border-current bg-current/10'
                      : 'border-[#334155] hover:border-[#475569]'"
                    :style="noteType === opt.value ? { color: opt.color, borderColor: opt.color } : {}"
                  >
                    <component
                      :is="opt.icon"
                      class="w-4 h-4"
                      :style="{ color: noteType === opt.value ? opt.color : '#64748b' }"
                    />
                    <span
                      class="text-[10px]"
                      :style="{ color: noteType === opt.value ? opt.color : '#94a3b8' }"
                    >{{ opt.label }}</span>
                  </button>
                </div>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">メモ内容 *</label>
                <textarea
                  v-model="noteText"
                  rows="4"
                  placeholder="この要素についてのメモ、説明、注意事項など..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#10b981] focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">記入者（オプション）</label>
                <input
                  v-model="noteAuthor"
                  type="text"
                  placeholder="名前"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#10b981] focus:outline-none"
                />
              </div>
            </template>

            <!-- Field Tab -->
            <template v-if="activeTab === 'field'">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">テーブル名 *</label>
                  <input
                    v-model="fieldTable"
                    type="text"
                    placeholder="users"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">カラム名 *</label>
                  <input
                    v-model="fieldColumn"
                    type="text"
                    placeholder="name"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">データ型</label>
                <select
                  v-model="fieldType"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#60a5fa] focus:outline-none"
                >
                  <option value="">選択してください</option>
                  <option v-for="type in typeOptions" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">バリデーション (カンマ区切り)</label>
                <input
                  v-model="fieldValidation"
                  type="text"
                  placeholder="required, max:255"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">説明</label>
                <textarea
                  v-model="fieldDescription"
                  rows="2"
                  placeholder="このフィールドの説明..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#60a5fa] focus:outline-none resize-none"
                ></textarea>
              </div>
            </template>

            <!-- Action Tab -->
            <template v-if="activeTab === 'action'">
              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">アクションタイプ</label>
                <select
                  v-model="actionType"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#a78bfa] focus:outline-none"
                >
                  <option v-for="opt in actionTypeOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>

              <div v-if="actionType === 'api'" class="grid grid-cols-[100px_1fr] gap-3">
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">メソッド</label>
                  <select
                    v-model="actionMethod"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] focus:border-[#a78bfa] focus:outline-none"
                  >
                    <option v-for="method in methodOptions" :key="method" :value="method">
                      {{ method }}
                    </option>
                  </select>
                </div>
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">エンドポイント</label>
                  <input
                    v-model="actionTarget"
                    type="text"
                    placeholder="/api/tasks"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none"
                  />
                </div>
              </div>

              <div v-else>
                <label class="block text-[10px] text-[#64748b] mb-1">
                  {{ actionType === 'navigate' ? '遷移先パス' : actionType === 'modal' ? 'モーダル名' : actionType === 'emit' ? 'イベント名' : '関数名' }}
                </label>
                <input
                  v-model="actionTarget"
                  type="text"
                  :placeholder="actionType === 'navigate' ? '/tasks' : actionType === 'modal' ? 'ConfirmDialog' : actionType === 'emit' ? 'onSubmit' : 'handleClick'"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">説明</label>
                <textarea
                  v-model="actionDescription"
                  rows="2"
                  placeholder="このアクションの説明..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#a78bfa] focus:outline-none resize-none"
                ></textarea>
              </div>
            </template>

            <!-- Links Tab -->
            <template v-if="activeTab === 'links'">
              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">テストファイルパス</label>
                <input
                  v-model="linkTestPath"
                  type="text"
                  placeholder="src/__tests__/components/MyComponent.test.ts"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">Figma URL</label>
                <input
                  v-model="linkFigmaUrl"
                  type="text"
                  placeholder="https://www.figma.com/design/..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">GitHub Issue</label>
                  <input
                    v-model="linkGithubIssue"
                    type="text"
                    placeholder="#123"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
                <div>
                  <label class="block text-[10px] text-[#64748b] mb-1">GitHub PR</label>
                  <input
                    v-model="linkGithubPr"
                    type="text"
                    placeholder="#456"
                    class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">関連ドキュメント</label>
                <input
                  v-model="linkRelatedDocs"
                  type="text"
                  placeholder="https://docs.example.com/..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#f59e0b] focus:outline-none"
                />
              </div>
            </template>

            <!-- Meta Tab -->
            <template v-if="activeTab === 'meta'">
              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">使用Piniaストア (カンマ区切り)</label>
                <input
                  v-model="metaUsedStores"
                  type="text"
                  placeholder="useUserStore, useThemeStore"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">使用コンポーネント (カンマ区切り)</label>
                <input
                  v-model="metaUsedComponents"
                  type="text"
                  placeholder="Button, Modal, Input"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">i18nキー (カンマ区切り)</label>
                <input
                  v-model="metaI18nKeys"
                  type="text"
                  placeholder="common.save, errors.required"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">デザイントークン (カンマ区切り)</label>
                <input
                  v-model="metaDesignTokens"
                  type="text"
                  placeholder="primaryColor, secondaryColor"
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">アクセシビリティ</label>
                <textarea
                  v-model="metaAccessibility"
                  rows="2"
                  placeholder="キーボード操作、スクリーンリーダー対応などのメモ..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none resize-none"
                ></textarea>
              </div>

              <div>
                <label class="block text-[10px] text-[#64748b] mb-1">レスポンシブ動作</label>
                <textarea
                  v-model="metaResponsive"
                  rows="2"
                  placeholder="モバイルでの表示変更、ブレークポイントなど..."
                  class="w-full px-3 py-2 bg-[#0f172a] border border-[#334155] rounded-lg text-white text-[12px] placeholder-[#475569] focus:border-[#ec4899] focus:outline-none resize-none"
                ></textarea>
              </div>
            </template>
          </div>

          <!-- Footer -->
          <div class="flex items-center justify-between px-4 py-3 bg-[#0f172a] border-t border-[#334155]">
            <button
              @click="deleteConfig"
              class="flex items-center gap-1.5 px-3 py-1.5 text-[11px] text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg transition-colors"
            >
              <Trash2 class="w-3.5 h-3.5" />
              削除
            </button>
            <div class="flex items-center gap-2">
              <button
                @click="close"
                class="px-4 py-1.5 text-[11px] text-[#94a3b8] hover:text-white hover:bg-[#334155] rounded-lg transition-colors"
              >
                キャンセル
              </button>
              <button
                @click="save"
                class="flex items-center gap-1.5 px-4 py-1.5 text-[11px] text-white bg-[#3b82f6] hover:bg-[#2563eb] rounded-lg transition-colors"
              >
                <Save class="w-3.5 h-3.5" />
                保存
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
