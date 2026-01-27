<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { X, Database, Zap, Save, Trash2, MessageSquare, Info, AlertTriangle, CheckSquare, HelpCircle, Link, Settings2, Wand2 } from 'lucide-vue-next'
import { useDevInspectorStore, type FieldInfo, type ActionInfo, type ElementNote, type LinkInfo, type DevMeta, type SourceBindingInfo } from '../composables/useDevInspector'

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

// Source binding
const sourceBindingType = ref<SourceBindingInfo['type'] | ''>('')
const sourceBindingSource = ref('')
const sourceBindingIsStatic = ref(false)

const isEditing = computed(() => store.editingElementId !== null)
const elementId = computed(() => store.editingElementId)

// Load existing config when editing starts
watch(elementId, (id) => {
  if (id) {
    const config = store.getElementConfig(id)
    let hasDataFromDom = false

    // First, try to read data-di-* attributes from DOM (Vite plugin injected)
    try {
      const element = document.querySelector(id) as HTMLElement
      if (element) {
        // Check element and its children for data-di-* attributes
        const targetEl = element.querySelector('[data-di-binding]') ||
                        (element.hasAttribute('data-di-binding') ? element : null) ||
                        element.closest('[data-di-binding]')

        if (targetEl) {
          const binding = targetEl.getAttribute('data-di-binding')
          const db = targetEl.getAttribute('data-di-db')
          const component = targetEl.getAttribute('data-di-component')
          const dbType = targetEl.getAttribute('data-di-db-type')
          const dbComment = targetEl.getAttribute('data-di-db-comment')

          if (binding) {
            sourceBindingSource.value = binding
            sourceBindingType.value = 'api'
            sourceBindingIsStatic.value = false
            hasDataFromDom = true
          }

          if (db) {
            const [table, column] = db.split('.')
            if (table && column) {
              fieldTable.value = table
              fieldColumn.value = column
              fieldType.value = dbType || ''
              fieldDescription.value = dbComment || ''
              hasDataFromDom = true
            }
          }

          if (component) {
            metaUsedComponents.value = component
          }

          if (hasDataFromDom) {
            noteText.value = `【データバインディング】${binding}${db ? ` → ${db}` : ''}`
            noteType.value = 'info'
            activeTab.value = 'field'
          }
        }
      }
    } catch (e) {
      console.warn('[DevInspector] Failed to read data-di-* attributes:', e)
    }

    // Then, load existing config (may override DOM data if user saved custom values)
    if (config?.fieldInfo) {
      fieldTable.value = config.fieldInfo.table || fieldTable.value
      fieldColumn.value = config.fieldInfo.column || fieldColumn.value
      fieldType.value = config.fieldInfo.type || ''
      fieldValidation.value = config.fieldInfo.validation?.join(', ') || ''
      fieldDescription.value = config.fieldInfo.description || fieldDescription.value
    }
    if (config?.actionInfo) {
      actionType.value = config.actionInfo.type || 'navigate'
      actionTarget.value = config.actionInfo.target || ''
      actionMethod.value = config.actionInfo.method || 'GET'
      actionDescription.value = config.actionInfo.description || ''
    }
    if (config?.note) {
      noteText.value = config.note.text || noteText.value
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
      metaUsedComponents.value = config.devMeta.usedComponents?.join(', ') || metaUsedComponents.value
      metaI18nKeys.value = config.devMeta.i18nKeys?.join(', ') || ''
      metaDesignTokens.value = config.devMeta.designTokens?.join(', ') || ''
      metaAccessibility.value = config.devMeta.accessibility || ''
      metaResponsive.value = config.devMeta.responsive || ''
    }
    if (config?.sourceBinding) {
      sourceBindingType.value = config.sourceBinding.type || sourceBindingType.value
      sourceBindingSource.value = config.sourceBinding.source || sourceBindingSource.value
      sourceBindingIsStatic.value = config.sourceBinding.isStatic || false
    }
    // Set default tab based on what data exists
    if (!hasDataFromDom) {
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
        activeTab.value = 'note'
      }
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
  sourceBindingType.value = ''
  sourceBindingSource.value = ''
  sourceBindingIsStatic.value = false
  activeTab.value = 'note'
}

function close() {
  store.stopEditing()
  resetForm()
}

// Auto-detect binding from DOM element
function autoDetect() {
  if (!elementId.value) return

  try {
    const element = document.querySelector(elementId.value) as HTMLElement
    if (!element) return

    const detected = store.autoDetectElementInfo(element, elementId.value)

    // Apply detected sourceBinding
    if (detected.sourceBinding) {
      sourceBindingType.value = detected.sourceBinding.type || ''
      sourceBindingSource.value = detected.sourceBinding.source || ''
      sourceBindingIsStatic.value = detected.sourceBinding.isStatic || false

      // If static, set note automatically
      if (detected.sourceBinding.isStatic && !noteText.value) {
        noteText.value = '固定文言'
        noteType.value = 'info'
      }
    }

    // Apply detected fieldInfo (from data-di-db attribute)
    if (detected.fieldInfo) {
      fieldTable.value = detected.fieldInfo.table || ''
      fieldColumn.value = detected.fieldInfo.column || ''
      fieldType.value = detected.fieldInfo.type || ''
      fieldDescription.value = detected.fieldInfo.description || ''
      activeTab.value = 'field'
    }

    // Apply detected note
    if (detected.note) {
      noteText.value = detected.note.text || ''
      noteType.value = detected.note.type || 'info'
    }

    // Apply detected devMeta
    if (detected.devMeta?.usedComponents) {
      metaUsedComponents.value = detected.devMeta.usedComponents.join(', ')
    }
  } catch (e) {
    console.error('[DevInspector] Auto-detect failed:', e)
  }
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

  const sourceBinding: SourceBindingInfo | undefined = sourceBindingType.value
    ? {
        type: sourceBindingType.value as SourceBindingInfo['type'],
        source: sourceBindingSource.value || undefined,
        isStatic: sourceBindingIsStatic.value,
      }
    : undefined

  store.setElementConfig(elementId.value, {
    fieldInfo,
    actionInfo,
    note,
    links,
    devMeta,
    sourceBinding,
  })

  close()
}

function deleteConfig() {
  if (!elementId.value) return
  store.deleteElementConfig(elementId.value)
  close()
}

const typeOptions = ['VARCHAR', 'TEXT', 'INT', 'BIGINT', 'BOOLEAN', 'DATE', 'DATETIME', 'TIMESTAMP', 'JSON']

// Binding candidates from CLI analysis
const bindingSearch = ref('')
const showBindingList = ref(false)

const filteredBindings = computed(() => {
  return store.searchBindings(bindingSearch.value).slice(0, 20) // Limit to 20 results
})

function selectBinding(binding: ReturnType<typeof store.searchBindings>[0]) {
  if (binding.db) {
    fieldTable.value = binding.db.table
    fieldColumn.value = binding.db.column
    fieldType.value = binding.db.type || ''
  }
  sourceBindingSource.value = binding.binding
  sourceBindingType.value = 'api'
  showBindingList.value = false
  bindingSearch.value = ''
}
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
  <Teleport to="body">
    <div v-if="isEditing" class="di-editor-overlay" @click.self="close" data-dev-inspector>
      <div class="di-editor-modal">
        <!-- Header -->
        <div class="di-editor-header">
          <h3>要素情報を編集</h3>
          <div class="di-header-actions">
            <button @click="autoDetect" class="di-btn-auto" title="自動検出">
              <Wand2 style="width: 16px; height: 16px;" />
            </button>
            <button @click="close" class="di-editor-close">
              <X style="width: 20px; height: 20px;" />
            </button>
          </div>
        </div>

        <!-- Source binding indicator -->
        <div v-if="sourceBindingIsStatic" class="di-static-indicator">
          <span class="di-static-badge">固定文言</span>
          <span class="di-static-hint">このテキストはソースコードに直接記述されています</span>
        </div>
        <div v-else-if="sourceBindingType" class="di-binding-indicator">
          <span class="di-binding-badge" :class="'di-binding-' + sourceBindingType">{{ sourceBindingType }}</span>
          <span v-if="sourceBindingSource" class="di-binding-source">{{ sourceBindingSource }}</span>
        </div>

        <!-- Tabs -->
        <div class="di-editor-tabs">
          <button
            @click="activeTab = 'note'"
            class="di-editor-tab"
            :class="{ active: activeTab === 'note' }"
            :style="activeTab === 'note' ? { color: '#10b981', borderColor: '#10b981', background: 'rgba(16, 185, 129, 0.1)' } : {}"
          >
            <MessageSquare style="width: 12px; height: 12px;" />
            メモ
          </button>
          <button
            @click="activeTab = 'field'"
            class="di-editor-tab"
            :class="{ active: activeTab === 'field' }"
            :style="activeTab === 'field' ? { color: '#60a5fa', borderColor: '#60a5fa', background: 'rgba(96, 165, 250, 0.1)' } : {}"
          >
            <Database style="width: 12px; height: 12px;" />
            データ
          </button>
          <button
            @click="activeTab = 'action'"
            class="di-editor-tab"
            :class="{ active: activeTab === 'action' }"
            :style="activeTab === 'action' ? { color: '#a78bfa', borderColor: '#a78bfa', background: 'rgba(167, 139, 250, 0.1)' } : {}"
          >
            <Zap style="width: 12px; height: 12px;" />
            アクション
          </button>
          <button
            @click="activeTab = 'links'"
            class="di-editor-tab"
            :class="{ active: activeTab === 'links' }"
            :style="activeTab === 'links' ? { color: '#f59e0b', borderColor: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)' } : {}"
          >
            <Link style="width: 12px; height: 12px;" />
            リンク
          </button>
          <button
            @click="activeTab = 'meta'"
            class="di-editor-tab"
            :class="{ active: activeTab === 'meta' }"
            :style="activeTab === 'meta' ? { color: '#ec4899', borderColor: '#ec4899', background: 'rgba(236, 72, 153, 0.1)' } : {}"
          >
            <Settings2 style="width: 12px; height: 12px;" />
            開発情報
          </button>
        </div>

        <!-- Content -->
        <div class="di-editor-content">
          <!-- Note Tab -->
          <template v-if="activeTab === 'note'">
            <div class="di-form-group">
              <label class="di-form-label">タイプ</label>
              <div class="di-note-types">
                <button
                  v-for="opt in noteTypeOptions"
                  :key="opt.value"
                  @click="noteType = opt.value"
                  class="di-note-type-btn"
                  :style="noteType === opt.value ? { color: opt.color, borderColor: opt.color, background: opt.color + '15' } : {}"
                >
                  <component :is="opt.icon" style="width: 16px; height: 16px;" :style="{ color: noteType === opt.value ? opt.color : '#64748b' }" />
                  <span :style="{ color: noteType === opt.value ? opt.color : '#94a3b8' }">{{ opt.label }}</span>
                </button>
              </div>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">メモ内容 *</label>
              <textarea v-model="noteText" rows="4" placeholder="この要素についてのメモ、説明、注意事項など..." class="di-textarea"></textarea>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">記入者（オプション）</label>
              <input v-model="noteAuthor" type="text" placeholder="名前" class="di-input" />
            </div>
          </template>

          <!-- Field Tab -->
          <template v-if="activeTab === 'field'">
            <!-- Binding Selector from CLI Analysis -->
            <div class="di-binding-selector">
              <div class="di-form-group">
                <label class="di-form-label">
                  <Database style="width: 12px; height: 12px; display: inline; vertical-align: middle;" />
                  CLI解析から選択
                </label>
                <div class="di-binding-search-wrapper">
                  <input
                    v-model="bindingSearch"
                    @focus="showBindingList = true"
                    type="text"
                    placeholder="バインディングを検索... (例: notification, user.name)"
                    class="di-input di-binding-search"
                  />
                  <button
                    v-if="bindingSearch"
                    @click="bindingSearch = ''; showBindingList = false"
                    class="di-binding-clear"
                  >
                    <X style="width: 14px; height: 14px;" />
                  </button>
                </div>
                <div v-if="showBindingList && filteredBindings.length > 0" class="di-binding-list">
                  <button
                    v-for="b in filteredBindings"
                    :key="b.binding"
                    @click="selectBinding(b)"
                    class="di-binding-item"
                    :class="{ 'has-db': !!b.db }"
                  >
                    <div class="di-binding-item-main">
                      <span class="di-binding-name">{{ b.binding }}</span>
                      <span v-if="b.db" class="di-binding-db">
                        {{ b.db.table }}.{{ b.db.column }}
                      </span>
                    </div>
                    <span class="di-binding-component">{{ b.component }}</span>
                  </button>
                </div>
                <div v-else-if="showBindingList && bindingSearch && filteredBindings.length === 0" class="di-binding-empty">
                  該当するバインディングが見つかりません
                </div>
              </div>
            </div>

            <div class="di-form-divider">
              <span>または手動入力</span>
            </div>

            <div class="di-form-row">
              <div class="di-form-group">
                <label class="di-form-label">テーブル名 *</label>
                <input v-model="fieldTable" type="text" placeholder="users" class="di-input" />
              </div>
              <div class="di-form-group">
                <label class="di-form-label">カラム名 *</label>
                <input v-model="fieldColumn" type="text" placeholder="name" class="di-input" />
              </div>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">データ型</label>
              <select v-model="fieldType" class="di-select">
                <option value="">選択してください</option>
                <option v-for="type in typeOptions" :key="type" :value="type">{{ type }}</option>
              </select>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">バリデーション (カンマ区切り)</label>
              <input v-model="fieldValidation" type="text" placeholder="required, max:255" class="di-input" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">説明</label>
              <textarea v-model="fieldDescription" rows="2" placeholder="このフィールドの説明..." class="di-textarea"></textarea>
            </div>
          </template>

          <!-- Action Tab -->
          <template v-if="activeTab === 'action'">
            <div class="di-form-group">
              <label class="di-form-label">アクションタイプ</label>
              <select v-model="actionType" class="di-select">
                <option v-for="opt in actionTypeOptions" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
              </select>
            </div>

            <div v-if="actionType === 'api'" class="di-form-row">
              <div class="di-form-group" style="flex: 0 0 100px;">
                <label class="di-form-label">メソッド</label>
                <select v-model="actionMethod" class="di-select">
                  <option v-for="method in methodOptions" :key="method" :value="method">{{ method }}</option>
                </select>
              </div>
              <div class="di-form-group" style="flex: 1;">
                <label class="di-form-label">エンドポイント</label>
                <input v-model="actionTarget" type="text" placeholder="/api/tasks" class="di-input" />
              </div>
            </div>

            <div v-else class="di-form-group">
              <label class="di-form-label">
                {{ actionType === 'navigate' ? '遷移先パス' : actionType === 'modal' ? 'モーダル名' : actionType === 'emit' ? 'イベント名' : '関数名' }}
              </label>
              <input
                v-model="actionTarget"
                type="text"
                :placeholder="actionType === 'navigate' ? '/tasks' : actionType === 'modal' ? 'ConfirmDialog' : actionType === 'emit' ? 'onSubmit' : 'handleClick'"
                class="di-input"
              />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">説明</label>
              <textarea v-model="actionDescription" rows="2" placeholder="このアクションの説明..." class="di-textarea"></textarea>
            </div>
          </template>

          <!-- Links Tab -->
          <template v-if="activeTab === 'links'">
            <div class="di-form-group">
              <label class="di-form-label">テストファイルパス</label>
              <input v-model="linkTestPath" type="text" placeholder="src/__tests__/components/MyComponent.test.ts" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">Figma URL</label>
              <input v-model="linkFigmaUrl" type="text" placeholder="https://www.figma.com/design/..." class="di-input" />
            </div>

            <div class="di-form-row">
              <div class="di-form-group">
                <label class="di-form-label">GitHub Issue</label>
                <input v-model="linkGithubIssue" type="text" placeholder="#123" class="di-input" />
              </div>
              <div class="di-form-group">
                <label class="di-form-label">GitHub PR</label>
                <input v-model="linkGithubPr" type="text" placeholder="#456" class="di-input" />
              </div>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">関連ドキュメント</label>
              <input v-model="linkRelatedDocs" type="text" placeholder="https://docs.example.com/..." class="di-input" />
            </div>
          </template>

          <!-- Meta Tab -->
          <template v-if="activeTab === 'meta'">
            <div class="di-form-group">
              <label class="di-form-label">使用Piniaストア (カンマ区切り)</label>
              <input v-model="metaUsedStores" type="text" placeholder="useUserStore, useThemeStore" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">使用コンポーネント (カンマ区切り)</label>
              <input v-model="metaUsedComponents" type="text" placeholder="Button, Modal, Input" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">i18nキー (カンマ区切り)</label>
              <input v-model="metaI18nKeys" type="text" placeholder="common.save, errors.required" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">デザイントークン (カンマ区切り)</label>
              <input v-model="metaDesignTokens" type="text" placeholder="primaryColor, secondaryColor" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">アクセシビリティ</label>
              <textarea v-model="metaAccessibility" rows="2" placeholder="キーボード操作、スクリーンリーダー対応などのメモ..." class="di-textarea"></textarea>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">レスポンシブ動作</label>
              <textarea v-model="metaResponsive" rows="2" placeholder="モバイルでの表示変更、ブレークポイントなど..." class="di-textarea"></textarea>
            </div>
          </template>
        </div>

        <!-- Footer -->
        <div class="di-editor-footer">
          <button @click="deleteConfig" class="di-btn-delete">
            <Trash2 style="width: 14px; height: 14px;" />
            削除
          </button>
          <div class="di-editor-actions">
            <button @click="close" class="di-btn-cancel">キャンセル</button>
            <button @click="save" class="di-btn-save">
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
  width: 420px;
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
.di-btn-auto {
  padding: 6px;
  background: #334155;
  border: none;
  color: #60a5fa;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-auto:hover {
  background: #475569;
  color: #93c5fd;
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

.di-static-indicator,
.di-binding-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
  font-size: 11px;
}
.di-static-badge {
  padding: 2px 8px;
  background: #10b981;
  color: white;
  border-radius: 4px;
  font-weight: 600;
}
.di-static-hint {
  color: #64748b;
}
.di-binding-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  color: white;
}
.di-binding-v-model { background: #8b5cf6; }
.di-binding-prop { background: #f59e0b; }
.di-binding-computed { background: #ec4899; }
.di-binding-store { background: #06b6d4; }
.di-binding-api { background: #3b82f6; }
.di-binding-static { background: #10b981; }
.di-binding-source {
  color: #94a3b8;
  font-family: monospace;
}

.di-editor-tabs {
  display: flex;
  border-bottom: 1px solid #334155;
  overflow-x: auto;
}
.di-editor-tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 10px 10px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #94a3b8;
  font-size: 10px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}
.di-editor-tab:hover {
  color: white;
}

.di-editor-content {
  padding: 16px;
  overflow-y: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.di-form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-form-row {
  display: flex;
  gap: 12px;
}
.di-form-row .di-form-group {
  flex: 1;
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
.di-input-mono {
  font-family: monospace;
}
.di-textarea {
  resize: none;
}
.di-select {
  cursor: pointer;
}

.di-note-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}
.di-note-type-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background: transparent;
  border: 1px solid #334155;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-note-type-btn:hover {
  border-color: #475569;
}
.di-note-type-btn span {
  font-size: 10px;
}

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

/* Binding Selector */
.di-binding-selector {
  padding: 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid #3b82f6;
  border-radius: 8px;
  margin-bottom: 8px;
}
.di-binding-search-wrapper {
  position: relative;
}
.di-binding-search {
  padding-right: 32px;
}
.di-binding-clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 2px;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 4px;
}
.di-binding-clear:hover {
  color: #94a3b8;
  background: #334155;
}
.di-binding-list {
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
}
.di-binding-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1e293b;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.di-binding-item:last-child {
  border-bottom: none;
}
.di-binding-item:hover {
  background: #1e293b;
}
.di-binding-item.has-db {
  border-left: 3px solid #3b82f6;
}
.di-binding-item-main {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.di-binding-name {
  color: #e2e8f0;
  font-size: 12px;
  font-family: monospace;
}
.di-binding-db {
  padding: 2px 6px;
  background: #3b82f6;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  font-weight: 600;
}
.di-binding-component {
  color: #64748b;
  font-size: 10px;
  margin-top: 2px;
}
.di-binding-empty {
  padding: 12px;
  color: #64748b;
  font-size: 11px;
  text-align: center;
}
.di-form-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
}
.di-form-divider::before,
.di-form-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #334155;
}
.di-form-divider span {
  color: #64748b;
  font-size: 10px;
  white-space: nowrap;
}
</style>
