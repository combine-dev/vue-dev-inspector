<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { Info, AlertTriangle, CheckSquare, HelpCircle } from 'lucide-vue-next'
import { useDevInspectorStore } from '../composables/useDevInspector'

const store = useDevInspectorStore()

const highlightStyle = ref<{
  top: string
  left: string
  width: string
  height: string
} | null>(null)

const hoveredElement = ref<HTMLElement | null>(null)

// Get note icon/color for existing annotations
function getNoteInfo(selector: string) {
  const config = store.getElementConfig(selector)
  if (!config?.note) return null

  const icons = {
    info: Info,
    warning: AlertTriangle,
    todo: CheckSquare,
    question: HelpCircle,
  }
  const colors = {
    info: '#60a5fa',
    warning: '#fbbf24',
    todo: '#10b981',
    question: '#a78bfa',
  }

  return {
    icon: icons[config.note.type || 'info'],
    color: colors[config.note.type || 'info'],
    text: config.note.text,
  }
}

// Scroll position for reactive updates
const scrollY = ref(0)
const scrollX = ref(0)

// Existing annotations on current page
const existingAnnotations = computed(() => {
  // Access scroll values to make this reactive
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const annotations: Array<{
    selector: string
    element: HTMLElement | null
    top: number
    left: number
    noteInfo: ReturnType<typeof getNoteInfo>
  }> = []

  if (!store.isEnabled) return annotations

  const selectors = store.getConfiguredSelectors()
  for (const selector of selectors) {
    try {
      const element = document.querySelector(selector) as HTMLElement | null
      if (element) {
        const rect = element.getBoundingClientRect()
        annotations.push({
          selector,
          element,
          top: rect.top + _scrollY - 4,
          left: rect.right + _scrollX + 4,
          noteInfo: getNoteInfo(selector),
        })
      }
    } catch {
      // Invalid selector, skip
    }
  }

  return annotations
})

function handleMouseMove(e: MouseEvent) {
  if (!store.isPickMode) return

  // Ignore dev mode UI elements
  const target = e.target as HTMLElement
  if (target.closest('[data-dev-inspector]')) {
    highlightStyle.value = null
    hoveredElement.value = null
    store.setHoveredSelector(null)
    return
  }

  // Get the element under cursor
  const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement
  if (!element || element === document.body || element === document.documentElement) {
    highlightStyle.value = null
    hoveredElement.value = null
    store.setHoveredSelector(null)
    return
  }

  // Skip if it's our overlay
  if (element.closest('[data-dev-inspector]')) {
    return
  }

  hoveredElement.value = element
  const rect = element.getBoundingClientRect()
  highlightStyle.value = {
    top: `${rect.top + window.scrollY}px`,
    left: `${rect.left + window.scrollX}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  }

  const selector = store.generateSelector(element)
  store.setHoveredSelector(selector)
}

function handleClick(e: MouseEvent) {
  if (!store.isPickMode) return

  const target = e.target as HTMLElement
  if (target.closest('[data-dev-inspector]')) return

  e.preventDefault()
  e.stopPropagation()

  if (hoveredElement.value) {
    const selector = store.generateSelector(hoveredElement.value)
    store.startEditing(selector)
    store.togglePickMode() // Turn off pick mode after selection
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && store.isPickMode) {
    store.togglePickMode()
  }
}

// Update annotation positions on scroll/resize
function updateAnnotationPositions() {
  scrollY.value = window.scrollY
  scrollX.value = window.scrollX
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, true)
  window.addEventListener('click', handleClick, true)
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('scroll', updateAnnotationPositions)
  window.addEventListener('resize', updateAnnotationPositions)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove, true)
  window.removeEventListener('click', handleClick, true)
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('scroll', updateAnnotationPositions)
  window.removeEventListener('resize', updateAnnotationPositions)
})

// Clear highlight when pick mode is disabled
watch(() => store.isPickMode, (isPicking) => {
  if (!isPicking) {
    highlightStyle.value = null
    hoveredElement.value = null
  }
})
</script>

<template>
  <Teleport to="body">
    <!-- Highlight box for hovered element -->
    <div
      v-if="store.isPickMode && highlightStyle"
      data-dev-inspector
      class="di-highlight"
      :style="{
        top: highlightStyle.top,
        left: highlightStyle.left,
        width: highlightStyle.width,
        height: highlightStyle.height,
      }"
    >
      <div class="di-highlight-label">{{ store.hoveredSelector }}</div>
    </div>

    <!-- Pick mode instruction banner -->
    <div v-if="store.isPickMode" data-dev-inspector class="di-pick-banner">
      <span>要素をクリックしてメモを追加</span>
      <kbd>ESC</kbd>
      <span class="di-pick-hint">でキャンセル</span>
    </div>

    <!-- Existing annotation markers (when not in pick mode) -->
    <template v-if="store.isEnabled && !store.isPickMode && !store.isEditMode">
      <div
        v-for="annotation in existingAnnotations"
        :key="annotation.selector"
        data-dev-inspector
        class="di-annotation-marker"
        :style="{
          top: `${annotation.top}px`,
          left: `${annotation.left}px`,
        }"
      >
        <div
          v-if="annotation.noteInfo"
          class="di-marker-dot"
          :style="{ backgroundColor: annotation.noteInfo.color }"
          :title="annotation.noteInfo.text"
          @click="store.startEditing(annotation.selector)"
        >
          <component :is="annotation.noteInfo.icon" style="width: 10px; height: 10px; color: white;" />
        </div>
      </div>
    </template>
  </Teleport>
</template>

<style scoped>
.di-highlight {
  position: fixed;
  pointer-events: none;
  z-index: 9997;
  border: 2px solid #10b981;
  background: rgba(16, 185, 129, 0.1);
  transition: all 0.075s ease-out;
}

.di-highlight-label {
  position: absolute;
  top: -24px;
  left: 0;
  padding: 2px 8px;
  background: #10b981;
  color: white;
  font-size: 10px;
  font-family: monospace;
  border-radius: 4px;
  white-space: nowrap;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.di-pick-banner {
  position: fixed;
  top: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 8px 16px;
  background: #10b981;
  color: white;
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-pick-banner kbd {
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 10px;
}
.di-pick-hint {
  font-size: 10px;
  opacity: 0.8;
}

.di-annotation-marker {
  position: fixed;
  z-index: 9996;
  pointer-events: none;
}

.di-marker-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  cursor: pointer;
  transition: transform 0.2s;
}
.di-marker-dot:hover {
  transform: scale(1.2);
}
</style>
