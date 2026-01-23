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

// Scanned elements highlights (yellow boxes)
const scannedHighlights = computed(() => {
  // Access scroll values to make this reactive
  const _scrollY = scrollY.value
  const _scrollX = scrollX.value

  const highlights: Array<{
    selector: string
    top: string
    left: string
    width: string
    height: string
    isStatic: boolean
  }> = []

  if (!store.isEnabled || store.scanResults.length === 0) return highlights

  for (const result of store.scanResults) {
    try {
      const element = document.querySelector(result.selector) as HTMLElement | null
      if (element) {
        const rect = element.getBoundingClientRect()
        highlights.push({
          selector: result.selector,
          top: `${rect.top + _scrollY}px`,
          left: `${rect.left + _scrollX}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          isStatic: result.detected.sourceBinding?.isStatic || false,
        })
      }
    } catch {
      // Invalid selector, skip
    }
  }

  return highlights
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

    <!-- Scanned elements highlights (yellow/green boxes) -->
    <template v-if="store.isEnabled && scannedHighlights.length > 0">
      <div
        v-for="highlight in scannedHighlights"
        :key="'scan-' + highlight.selector"
        data-dev-inspector
        class="di-scan-highlight"
        :class="{ 'di-scan-static': highlight.isStatic }"
        :style="{
          top: highlight.top,
          left: highlight.left,
          width: highlight.width,
          height: highlight.height,
        }"
        @click="store.startEditing(highlight.selector)"
      >
        <div class="di-scan-label" :class="{ 'di-scan-label-static': highlight.isStatic }">
          {{ highlight.isStatic ? '固定文言' : '動的データ' }}
        </div>
      </div>

      <!-- Scan results banner -->
      <div data-dev-inspector class="di-scan-banner">
        <span>{{ scannedHighlights.length }}件の要素を検出</span>
        <button @click="store.clearScanResults()" class="di-scan-banner-close">✕ 閉じる</button>
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

/* Scanned element highlights */
.di-scan-highlight {
  position: absolute;
  z-index: 9995;
  border: 2px solid #fbbf24;
  background: rgba(251, 191, 36, 0.15);
  cursor: pointer;
  transition: all 0.2s;
}
.di-scan-highlight:hover {
  background: rgba(251, 191, 36, 0.3);
  border-color: #f59e0b;
}
.di-scan-highlight.di-scan-static {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.15);
}
.di-scan-highlight.di-scan-static:hover {
  background: rgba(16, 185, 129, 0.3);
  border-color: #059669;
}

.di-scan-label {
  position: absolute;
  top: -20px;
  left: 0;
  padding: 2px 6px;
  background: #fbbf24;
  color: #1e293b;
  font-size: 9px;
  font-weight: 600;
  border-radius: 3px;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-scan-label-static {
  background: #10b981;
  color: white;
}

.di-scan-banner {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9998;
  padding: 10px 16px;
  background: #fbbf24;
  color: #1e293b;
  font-size: 12px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.di-scan-banner-close {
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 4px;
  color: #1e293b;
  font-size: 11px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-scan-banner-close:hover {
  background: rgba(0, 0, 0, 0.2);
}
</style>
