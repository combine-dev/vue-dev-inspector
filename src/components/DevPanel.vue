<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDevInspectorStore } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const activeTab = ref<'overview' | 'elements' | 'export'>('overview')

const configuredCount = computed(() => Object.keys(store.elementConfigs).length)

const handleExport = () => {
  store.downloadAnnotations()
}

const handleImport = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.json'
  input.onchange = async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return
    const text = await file.text()
    try {
      store.importConfigs(text)
    } catch {
      alert('Invalid JSON file')
    }
  }
  input.click()
}

const handleClear = () => {
  if (confirm('Are you sure you want to clear all annotations?')) {
    store.clearAllConfigs()
  }
}

const copyToClipboard = async () => {
  await navigator.clipboard.writeText(store.exportConfigs())
  alert('Copied to clipboard!')
}
</script>

<template>
  <Transition
    enter-active-class="di-transition-enter"
    leave-active-class="di-transition-leave"
  >
    <div
      v-if="store.isPanelOpen"
      class="di-panel"
    >
      <!-- Header -->
      <div class="di-panel-header">
        <div class="di-panel-title">
          <span class="di-icon">🔧</span>
          Dev Inspector
        </div>
        <button @click="store.closePanel" class="di-close-btn">✕</button>
      </div>

      <!-- Tabs -->
      <div class="di-tabs">
        <button
          :class="['di-tab', { active: activeTab === 'overview' }]"
          @click="activeTab = 'overview'"
        >Overview</button>
        <button
          :class="['di-tab', { active: activeTab === 'elements' }]"
          @click="activeTab = 'elements'"
        >Elements ({{ configuredCount }})</button>
        <button
          :class="['di-tab', { active: activeTab === 'export' }]"
          @click="activeTab = 'export'"
        >Export</button>
      </div>

      <!-- Content -->
      <div class="di-panel-content">
        <!-- Overview Tab -->
        <div v-if="activeTab === 'overview'" class="di-tab-content">
          <div class="di-section">
            <h3>Mode</h3>
            <div class="di-button-group">
              <button
                :class="['di-btn', { active: store.isPickMode }]"
                @click="store.togglePickMode"
              >
                {{ store.isPickMode ? '🎯 Picking...' : '🎯 Pick Element' }}
              </button>
              <button
                :class="['di-btn', { active: store.isEditMode }]"
                @click="store.toggleEditMode"
              >
                {{ store.isEditMode ? '✏️ Editing...' : '✏️ Edit Mode' }}
              </button>
            </div>
          </div>

          <div class="di-section">
            <h3>Stats</h3>
            <div class="di-stats">
              <div class="di-stat">
                <span class="di-stat-value">{{ configuredCount }}</span>
                <span class="di-stat-label">Annotated Elements</span>
              </div>
            </div>
          </div>

          <div class="di-section">
            <h3>Keyboard Shortcuts</h3>
            <div class="di-shortcuts">
              <div class="di-shortcut">
                <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>
                <span>Toggle Panel</span>
              </div>
              <div class="di-shortcut">
                <kbd>Esc</kbd>
                <span>Close Panel</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Elements Tab -->
        <div v-if="activeTab === 'elements'" class="di-tab-content">
          <div v-if="configuredCount === 0" class="di-empty">
            No elements annotated yet.<br>
            Use Pick Element to start.
          </div>
          <div v-else class="di-element-list">
            <div
              v-for="(config, id) in store.elementConfigs"
              :key="id"
              class="di-element-item"
              @click="store.startEditing(id as string)"
            >
              <div class="di-element-id">{{ id }}</div>
              <div class="di-element-meta">
                <span v-if="config.fieldInfo" class="di-tag">DB</span>
                <span v-if="config.actionInfo" class="di-tag">Action</span>
                <span v-if="config.links?.figmaUrl" class="di-tag">Figma</span>
                <span v-if="config.note" class="di-tag">Note</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Export Tab -->
        <div v-if="activeTab === 'export'" class="di-tab-content">
          <div class="di-section">
            <h3>Export / Import</h3>
            <div class="di-button-group vertical">
              <button class="di-btn" @click="handleExport">
                📥 Download JSON
              </button>
              <button class="di-btn" @click="copyToClipboard">
                📋 Copy to Clipboard
              </button>
              <button class="di-btn" @click="handleImport">
                📤 Import JSON
              </button>
              <button class="di-btn danger" @click="handleClear">
                🗑️ Clear All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.di-panel {
  position: fixed;
  top: 60px;
  right: 16px;
  width: 320px;
  max-height: calc(100vh - 80px);
  background: #1a1a2e;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 99999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 13px;
  color: #e0e0e0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.di-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.di-panel-title {
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.di-icon {
  font-size: 16px;
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
  transition: background 0.2s;
}

.di-close-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.di-tabs {
  display: flex;
  background: #16162a;
  border-bottom: 1px solid #2a2a4a;
}

.di-tab {
  flex: 1;
  padding: 10px 8px;
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.di-tab:hover {
  color: #bbb;
}

.di-tab.active {
  color: #667eea;
  border-bottom: 2px solid #667eea;
}

.di-panel-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.di-tab-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.di-section h3 {
  font-size: 11px;
  text-transform: uppercase;
  color: #666;
  margin: 0 0 8px 0;
  letter-spacing: 0.5px;
}

.di-button-group {
  display: flex;
  gap: 8px;
}

.di-button-group.vertical {
  flex-direction: column;
}

.di-btn {
  padding: 8px 12px;
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

.di-btn.active {
  background: #667eea;
  border-color: #667eea;
  color: white;
}

.di-btn.danger {
  background: #4a2a2a;
  border-color: #5a3a3a;
}

.di-btn.danger:hover {
  background: #5a3a3a;
}

.di-stats {
  display: flex;
  gap: 12px;
}

.di-stat {
  background: #2a2a4a;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  flex: 1;
}

.di-stat-value {
  display: block;
  font-size: 24px;
  font-weight: 600;
  color: #667eea;
}

.di-stat-label {
  font-size: 10px;
  color: #888;
}

.di-shortcuts {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.di-shortcut {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.di-shortcut kbd {
  background: #2a2a4a;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 11px;
}

.di-shortcut span {
  color: #888;
}

.di-empty {
  text-align: center;
  padding: 24px;
  color: #666;
  line-height: 1.6;
}

.di-element-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.di-element-item {
  background: #2a2a4a;
  padding: 10px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.di-element-item:hover {
  background: #3a3a5a;
}

.di-element-id {
  font-family: monospace;
  font-size: 11px;
  color: #667eea;
  margin-bottom: 6px;
  word-break: break-all;
}

.di-element-meta {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
}

.di-tag {
  background: #3a3a5a;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  color: #aaa;
}

.di-transition-enter {
  animation: slideIn 0.2s ease-out;
}

.di-transition-leave {
  animation: slideOut 0.15s ease-in;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
