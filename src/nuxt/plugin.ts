import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { useDevInspectorStore } from '../composables/useDevInspector'

export default defineNuxtPlugin((nuxtApp) => {
  // Only run on client
  if (import.meta.server) return

  const config = useRuntimeConfig()
  const options = config.public.devInspector || {}

  // Initialize store when Pinia is ready
  nuxtApp.hook('app:mounted', () => {
    const store = useDevInspectorStore()
    store.init({
      storageKey: options.storageKey,
      enabledInProduction: options.enabledInProduction
    })

    // Setup keyboard shortcuts
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        if (!store.isEnabled) {
          store.enable()
        }
        store.togglePanel()
      }
      if (e.key === 'Escape' && store.isPanelOpen) {
        store.closePanel()
      }
    }

    window.addEventListener('keydown', handleKeydown)
  })
})
