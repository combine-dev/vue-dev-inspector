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
  <!-- Pick mode overlay -->
  <Teleport to="body">
    <!-- Highlight box for hovered element -->
    <div
      v-if="store.isPickMode && highlightStyle"
      data-dev-inspector
      class="fixed pointer-events-none z-[9997] border-2 border-[#10b981] bg-[#10b981]/10 transition-all duration-75"
      :style="{
        top: highlightStyle.top,
        left: highlightStyle.left,
        width: highlightStyle.width,
        height: highlightStyle.height,
      }"
    >
      <!-- Selector label -->
      <div
        class="absolute -top-6 left-0 px-2 py-0.5 bg-[#10b981] text-white text-[10px] font-mono rounded whitespace-nowrap max-w-[300px] truncate"
      >
        {{ store.hoveredSelector }}
      </div>
    </div>

    <!-- Pick mode instruction banner -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="store.isPickMode"
        data-dev-inspector
        class="fixed top-12 left-1/2 -translate-x-1/2 z-[9998] px-4 py-2 bg-[#10b981] text-white text-[12px] font-medium rounded-lg shadow-lg flex items-center gap-3"
      >
        <span>要素をクリックしてメモを追加</span>
        <kbd class="px-1.5 py-0.5 bg-white/20 rounded text-[10px]">ESC</kbd>
        <span class="text-[10px] opacity-80">でキャンセル</span>
      </div>
    </Transition>

    <!-- Existing annotation markers (when not in pick mode) -->
    <template v-if="store.isEnabled && !store.isPickMode && !store.isEditMode">
      <div
        v-for="annotation in existingAnnotations"
        :key="annotation.selector"
        data-dev-inspector
        class="fixed z-[9996] pointer-events-none"
        :style="{
          top: `${annotation.top}px`,
          left: `${annotation.left}px`,
        }"
      >
        <div
          v-if="annotation.noteInfo"
          class="w-4 h-4 rounded-full flex items-center justify-center shadow-md pointer-events-auto cursor-pointer"
          :style="{ backgroundColor: annotation.noteInfo.color }"
          :title="annotation.noteInfo.text"
          @click="store.startEditing(annotation.selector)"
        >
          <component :is="annotation.noteInfo.icon" class="w-2.5 h-2.5 text-white" />
        </div>
      </div>
    </template>
  </Teleport>
</template>
