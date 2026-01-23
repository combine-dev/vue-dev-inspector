<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useDevInspectorStore, type DevInspectorOptions } from '../composables/useDevInspector'
import DevPanel from './DevPanel.vue'
import DevElementEditor from './DevElementEditor.vue'
import DevPickOverlay from './DevPickOverlay.vue'

const props = withDefaults(defineProps<DevInspectorOptions>(), {
  storageKey: 'devInspector:elementConfigs',
  enabledInProduction: false
})

const store = useDevInspectorStore()

// Keyboard shortcut handler
function handleKeydown(e: KeyboardEvent) {
  // Ctrl+Shift+D to toggle panel
  if (e.ctrlKey && e.shiftKey && e.key === 'D') {
    e.preventDefault()
    if (!store.isEnabled) {
      store.enable()
    }
    store.togglePanel()
  }
  // Escape to close panel
  if (e.key === 'Escape' && store.isPanelOpen) {
    store.closePanel()
  }
}

onMounted(() => {
  // Initialize store with props
  store.init({
    storageKey: props.storageKey,
    enabledInProduction: props.enabledInProduction,
    initialAnnotations: props.initialAnnotations
  })

  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="store.isAvailable" data-dev-inspector>
    <DevPanel />
    <DevElementEditor />
    <DevPickOverlay />
  </div>
</template>
