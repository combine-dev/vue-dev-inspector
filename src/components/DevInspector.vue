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

// Ctrl+Shift+D toggle event (dispatched by React wrapper or Nuxt plugin)
function handleToggleEvent() {
  store.toggle()
}

onMounted(() => {
  store.init({
    storageKey: props.storageKey,
    enabledInProduction: props.enabledInProduction,
    initialAnnotations: props.initialAnnotations
  })

  window.addEventListener('dev-inspector-toggle', handleToggleEvent)
})

onUnmounted(() => {
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
