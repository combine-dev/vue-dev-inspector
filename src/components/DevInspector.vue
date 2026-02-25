<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useDevInspectorStore, type DevInspectorOptions } from '../composables/useDevInspector'
import DevPanel from './DevPanel.vue'
import DevElementEditor from './DevElementEditor.vue'
import DevPickOverlay from './DevPickOverlay.vue'
import DevScreenEditor from './DevScreenEditor.vue'

const props = withDefaults(defineProps<DevInspectorOptions>(), {
  storageKey: 'devInspector:elementConfigs',
  enabledInProduction: false
})

const store = useDevInspectorStore()

// Ctrl+Shift+D keyboard shortcut
function handleKeydown(e: KeyboardEvent) {
  if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
    e.preventDefault()
    store.toggle()
  }
}

// Custom event from React wrapper
function handleToggleEvent() {
  store.toggle()
}

onMounted(() => {
  store.init({
    storageKey: props.storageKey,
    enabledInProduction: props.enabledInProduction,
    initialAnnotations: props.initialAnnotations
  })

  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('dev-inspector-toggle', handleToggleEvent)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('dev-inspector-toggle', handleToggleEvent)
})
</script>

<template>
  <div v-if="store.isAvailable" data-dev-inspector>
    <DevPanel />
    <DevElementEditor />
    <DevScreenEditor />
    <DevPickOverlay />
  </div>
</template>
