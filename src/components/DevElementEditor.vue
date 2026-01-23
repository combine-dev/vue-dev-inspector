<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDevInspectorStore, type ElementConfig, type FieldInfo, type ActionInfo, type ElementNote, type LinkInfo } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const activeSection = ref<'field' | 'action' | 'links' | 'note'>('field')

// Local form state
const fieldInfo = ref<FieldInfo>({ table: '', column: '' })
const actionInfo = ref<ActionInfo>({ type: 'navigate' })
const linkInfo = ref<LinkInfo>({})
const noteInfo = ref<ElementNote>({ text: '', type: 'info' })

// Watch for editing changes
watch(() => store.editingElementId, (id) => {
  if (id) {
    const config = store.getElementConfig(id)
    if (config) {
      fieldInfo.value = config.fieldInfo || { table: '', column: '' }
      actionInfo.value = config.actionInfo || { type: 'navigate' }
      linkInfo.value = config.links || {}
      noteInfo.value = config.note || { text: '', type: 'info' }
    } else {
      resetForm()
    }
  }
}, { immediate: true })

function resetForm() {
  fieldInfo.value = { table: '', column: '' }
  actionInfo.value = { type: 'navigate' }
  linkInfo.value = {}
  noteInfo.value = { text: '', type: 'info' }
}

function save() {
  if (!store.editingElementId) return

  const config: Partial<ElementConfig> = {}

  // Only include non-empty sections
  if (fieldInfo.value.table || fieldInfo.value.column) {
    config.fieldInfo = fieldInfo.value
  }
  if (actionInfo.value.target || actionInfo.value.description) {
    config.actionInfo = actionInfo.value
  }
  if (linkInfo.value.figmaUrl || linkInfo.value.testPath || linkInfo.value.githubIssue) {
    config.links = linkInfo.value
  }
  if (noteInfo.value.text) {
    config.note = noteInfo.value
  }

  store.setElementConfig(store.editingElementId, config)
  store.stopEditing()
}

function deleteConfig() {
  if (!store.editingElementId) return
  if (confirm('Delete this annotation?')) {
    store.deleteElementConfig(store.editingElementId)
    store.stopEditing()
  }
}

function close() {
  store.stopEditing()
}
</script>

<template>
  <Transition
    enter-active-class="di-transition-enter"
    leave-active-class="di-transition-leave"
  >
    <div v-if="store.editingElementId" class="di-editor">
      <!-- Header -->
      <div class="di-editor-header">
        <div class="di-editor-title">Edit Element</div>
        <button @click="close" class="di-close-btn">✕</button>
      </div>

      <!-- Element ID -->
      <div class="di-element-id-display">
        <code>{{ store.editingElementId }}</code>
      </div>

      <!-- Section Tabs -->
      <div class="di-section-tabs">
        <button
          :class="['di-section-tab', { active: activeSection === 'field' }]"
          @click="activeSection = 'field'"
        >🗄️ DB Field</button>
        <button
          :class="['di-section-tab', { active: activeSection === 'action' }]"
          @click="activeSection = 'action'"
        >⚡ Action</button>
        <button
          :class="['di-section-tab', { active: activeSection === 'links' }]"
          @click="activeSection = 'links'"
        >🔗 Links</button>
        <button
          :class="['di-section-tab', { active: activeSection === 'note' }]"
          @click="activeSection = 'note'"
        >📝 Note</button>
      </div>

      <!-- Form Content -->
      <div class="di-editor-content">
        <!-- Field Info -->
        <div v-if="activeSection === 'field'" class="di-form">
          <div class="di-form-group">
            <label>Table Name</label>
            <input v-model="fieldInfo.table" type="text" placeholder="e.g., users" />
          </div>
          <div class="di-form-group">
            <label>Column Name</label>
            <input v-model="fieldInfo.column" type="text" placeholder="e.g., email" />
          </div>
          <div class="di-form-group">
            <label>Data Type</label>
            <input v-model="fieldInfo.type" type="text" placeholder="e.g., VARCHAR(255)" />
          </div>
          <div class="di-form-group">
            <label>Description</label>
            <textarea v-model="fieldInfo.description" placeholder="Field description..." rows="2"></textarea>
          </div>
        </div>

        <!-- Action Info -->
        <div v-if="activeSection === 'action'" class="di-form">
          <div class="di-form-group">
            <label>Action Type</label>
            <select v-model="actionInfo.type">
              <option value="navigate">Navigate</option>
              <option value="api">API Call</option>
              <option value="modal">Open Modal</option>
              <option value="emit">Emit Event</option>
              <option value="function">Function Call</option>
            </select>
          </div>
          <div v-if="actionInfo.type === 'api'" class="di-form-group">
            <label>HTTP Method</label>
            <select v-model="actionInfo.method">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
              <option value="PATCH">PATCH</option>
            </select>
          </div>
          <div class="di-form-group">
            <label>Target / Endpoint</label>
            <input v-model="actionInfo.target" type="text" placeholder="e.g., /api/users or /dashboard" />
          </div>
          <div class="di-form-group">
            <label>Description</label>
            <textarea v-model="actionInfo.description" placeholder="What this action does..." rows="2"></textarea>
          </div>
        </div>

        <!-- Links -->
        <div v-if="activeSection === 'links'" class="di-form">
          <div class="di-form-group">
            <label>Figma URL</label>
            <input v-model="linkInfo.figmaUrl" type="url" placeholder="https://figma.com/..." />
          </div>
          <div class="di-form-group">
            <label>Test File Path</label>
            <input v-model="linkInfo.testPath" type="text" placeholder="e.g., tests/components/Button.spec.ts" />
          </div>
          <div class="di-form-group">
            <label>GitHub Issue</label>
            <input v-model="linkInfo.githubIssue" type="url" placeholder="https://github.com/.../issues/123" />
          </div>
          <div class="di-form-group">
            <label>GitHub PR</label>
            <input v-model="linkInfo.githubPr" type="url" placeholder="https://github.com/.../pull/456" />
          </div>
          <div class="di-form-group">
            <label>Related Docs</label>
            <input v-model="linkInfo.relatedDocs" type="url" placeholder="https://..." />
          </div>
        </div>

        <!-- Note -->
        <div v-if="activeSection === 'note'" class="di-form">
          <div class="di-form-group">
            <label>Note Type</label>
            <select v-model="noteInfo.type">
              <option value="info">ℹ️ Info</option>
              <option value="warning">⚠️ Warning</option>
              <option value="todo">📋 TODO</option>
              <option value="question">❓ Question</option>
            </select>
          </div>
          <div class="di-form-group">
            <label>Note Text</label>
            <textarea v-model="noteInfo.text" placeholder="Write your note here..." rows="4"></textarea>
          </div>
          <div class="di-form-group">
            <label>Author</label>
            <input v-model="noteInfo.author" type="text" placeholder="Your name" />
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="di-editor-footer">
        <button class="di-btn danger" @click="deleteConfig">Delete</button>
        <div class="di-footer-right">
          <button class="di-btn" @click="close">Cancel</button>
          <button class="di-btn primary" @click="save">Save</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.di-editor {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-height: 80vh;
  background: #1a1a2e;
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  z-index: 100000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
  color: #e0e0e0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.di-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.di-editor-title {
  font-weight: 600;
  font-size: 14px;
}

.di-close-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.di-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.di-element-id-display {
  padding: 8px 16px;
  background: #16162a;
  border-bottom: 1px solid #2a2a4a;
}

.di-element-id-display code {
  font-size: 11px;
  color: #667eea;
  word-break: break-all;
}

.di-section-tabs {
  display: flex;
  background: #16162a;
  border-bottom: 1px solid #2a2a4a;
  overflow-x: auto;
}

.di-section-tab {
  flex: 1;
  padding: 8px 4px;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 11px;
  white-space: nowrap;
  transition: all 0.2s;
}

.di-section-tab:hover {
  color: #bbb;
}

.di-section-tab.active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
}

.di-editor-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.di-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.di-form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.di-form-group label {
  font-size: 11px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 0.5px;
}

.di-form-group input,
.di-form-group select,
.di-form-group textarea {
  padding: 8px 10px;
  background: #2a2a4a;
  border: 1px solid #3a3a5a;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 13px;
  font-family: inherit;
}

.di-form-group input:focus,
.di-form-group select:focus,
.di-form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.di-form-group textarea {
  resize: vertical;
  min-height: 60px;
}

.di-editor-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #16162a;
  border-top: 1px solid #2a2a4a;
}

.di-footer-right {
  display: flex;
  gap: 8px;
}

.di-btn {
  padding: 8px 16px;
  background: #2a2a4a;
  border: 1px solid #3a3a5a;
  color: #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.di-btn:hover {
  background: #3a3a5a;
}

.di-btn.primary {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

.di-btn.primary:hover {
  background: #5a6fd6;
}

.di-btn.danger {
  background: #4a2a2a;
  border-color: #5a3a3a;
  color: #ff6b6b;
}

.di-btn.danger:hover {
  background: #5a3a3a;
}

.di-transition-enter {
  animation: fadeIn 0.2s ease-out;
}

.di-transition-leave {
  animation: fadeOut 0.15s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
}
</style>
