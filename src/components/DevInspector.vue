<script setup lang="ts">
import { onMounted } from 'vue'
import { useDevInspectorStore, type DevInspectorOptions } from '../composables/useDevInspector'
import DevPanel from './DevPanel.vue'
import DevElementEditor from './DevElementEditor.vue'
import DevPickOverlay from './DevPickOverlay.vue'

const props = withDefaults(defineProps<DevInspectorOptions>(), {
  storageKey: 'devInspector:elementConfigs',
  enabledInProduction: false
})

const store = useDevInspectorStore()

onMounted(() => {
  // Initialize store with props
  store.init({
    storageKey: props.storageKey,
    enabledInProduction: props.enabledInProduction,
    initialAnnotations: props.initialAnnotations
  })
})
</script>

<template>
  <div v-if="store.isAvailable" data-dev-inspector>
    <DevPanel />
    <DevElementEditor />
    <DevPickOverlay />
  </div>
</template>
