<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useDevInspectorStore } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const highlightStyle = ref<{
  top: string
  left: string
  width: string
  height: string
  display: string
}>({
  top: '0',
  left: '0',
  width: '0',
  height: '0',
  display: 'none'
})

const tooltipStyle = ref<{
  top: string
  left: string
  display: string
}>({
  top: '0',
  left: '0',
  display: 'none'
})

const currentSelector = ref('')

let lastHoveredElement: HTMLElement | null = null

function isDevUIElement(el: HTMLElement): boolean {
  // Skip dev inspector UI elements
  return el.closest('[data-dev-inspector]') !== null
}

function handleMouseMove(e: MouseEvent) {
  if (!store.isPickMode) return

  const target = e.target as HTMLElement
  if (!target || isDevUIElement(target)) {
    highlightStyle.value.display = 'none'
    tooltipStyle.value.display = 'none'
    return
  }

  if (target === lastHoveredElement) return
  lastHoveredElement = target

  const rect = target.getBoundingClientRect()

  highlightStyle.value = {
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    display: 'block'
  }

  // Position tooltip
  let tooltipTop = rect.top + window.scrollY - 30
  if (tooltipTop < 10) {
    tooltipTop = rect.bottom + window.scrollY + 8
  }

  tooltipStyle.value = {
    top: `${tooltipTop}px`,
    left: `${rect.left + window.scrollX}px`,
    display: 'block'
  }

  currentSelector.value = store.generateSelector(target)
  store.setHoveredSelector(currentSelector.value)
}

function handleClick(e: MouseEvent) {
  if (!store.isPickMode) return

  const target = e.target as HTMLElement
  if (!target || isDevUIElement(target)) return

  e.preventDefault()
  e.stopPropagation()

  const selector = store.generateSelector(target)

  // Check if config exists
  const existingConfig = store.getElementConfig(selector)

  if (!existingConfig) {
    // Create new empty config
    store.setElementConfig(selector, {
      componentPath: window.location.pathname
    })
  }

  // Start editing
  store.startEditing(selector)
  store.togglePickMode() // Exit pick mode
}

function handleKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && store.isPickMode) {
    store.togglePickMode()
  }
}

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove, true)
  document.addEventListener('click', handleClick, true)
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove, true)
  document.removeEventListener('click', handleClick, true)
  document.removeEventListener('keydown', handleKeyDown)
})

// Reset when pick mode is disabled
watch(() => store.isPickMode, (isActive) => {
  if (!isActive) {
    highlightStyle.value.display = 'none'
    tooltipStyle.value.display = 'none'
    lastHoveredElement = null
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Pick mode overlay -->
    <div
      v-if="store.isPickMode"
      class="di-pick-overlay"
      data-dev-inspector
    >
      <!-- Highlight box -->
      <div
        class="di-highlight"
        :style="highlightStyle"
      ></div>

      <!-- Selector tooltip -->
      <div
        class="di-selector-tooltip"
        :style="tooltipStyle"
      >
        <code>{{ currentSelector }}</code>
      </div>

      <!-- Instructions -->
      <div class="di-pick-instructions" data-dev-inspector>
        <span>🎯 Click an element to annotate</span>
        <kbd>Esc</kbd> to cancel
      </div>
    </div>

    <!-- Configured elements highlights (when in edit mode) -->
    <template v-if="store.isEditMode && !store.isPickMode">
      <div
        v-for="selector in store.getConfiguredSelectors()"
        :key="selector"
        class="di-configured-marker"
        :data-selector="selector"
        @click="store.startEditing(selector)"
      >
        <span class="di-marker-dot">●</span>
      </div>
    </template>
  </Teleport>
</template>

<style scoped>
.di-pick-overlay {
  position: fixed;
  inset: 0;
  z-index: 99998;
  pointer-events: none;
}

.di-highlight {
  position: absolute;
  background: rgba(102, 126, 234, 0.2);
  border: 2px solid #667eea;
  border-radius: 4px;
  pointer-events: none;
  transition: all 0.1s ease-out;
  z-index: 99998;
}

.di-selector-tooltip {
  position: absolute;
  background: #1a1a2e;
  color: #667eea;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-family: monospace;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 99999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.di-pick-instructions {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  z-index: 99999;
  pointer-events: auto;
}

.di-pick-instructions kbd {
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 12px;
}

.di-configured-marker {
  position: fixed;
  width: 16px;
  height: 16px;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 99990;
  transition: transform 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.di-configured-marker:hover {
  transform: scale(1.2);
}

.di-marker-dot {
  color: white;
  font-size: 8px;
}
</style>
