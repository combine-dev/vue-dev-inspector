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

// Ctrl+Shift+D keyboard shortcut (works in Vue, React/Next.js, Nuxt)
function handleKeydown(e: KeyboardEvent) {
  if (e.ctrlKey && e.shiftKey && e.key === 'D') {
    e.preventDefault()
    store.toggle()
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
    <DevScreenEditor />
    <DevPickOverlay />
  </div>
</template>
