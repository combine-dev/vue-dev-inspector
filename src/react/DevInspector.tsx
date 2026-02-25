'use client'
import { useRef, useEffect } from 'react'

export interface DevInspectorProps {
  storageKey?: string
  enabledInProduction?: boolean
  initialAnnotations?: Record<string, unknown>
}

/**
 * React wrapper that mounts the Vue-based DevInspector inside a Shadow DOM.
 * Uses the TanStack DevTools approach: Vue app runs in isolation within Shadow DOM,
 * completely separated from the host React/Next.js application's styles.
 */
export function DevInspector(props: DevInspectorProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let app: any = null
    let disposed = false

    ;(async () => {
      // Dynamic imports keep Vue/Pinia out of the React bundle
      const [{ createApp }, { createPinia }, Inspector] = await Promise.all([
        import('vue'),
        import('pinia'),
        import('../components/DevInspector.vue'),
      ])

      if (disposed) return

      const container = containerRef.current
      if (!container) return

      // Attach Shadow DOM for style isolation
      const shadow = container.attachShadow({ mode: 'open' })

      // Inject inspector CSS into Shadow DOM
      // The CSS is bundled as style.css — load it at runtime
      try {
        const styleUrl = new URL('vue-dev-inspector/style.css', import.meta.url).href
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = styleUrl
        shadow.appendChild(link)
      } catch {
        // Fallback: try to find existing style.css and clone it
        const existingStyles = document.querySelectorAll('style, link[rel="stylesheet"]')
        existingStyles.forEach(s => {
          if (s.textContent?.includes('data-dev-inspector') || (s as HTMLLinkElement).href?.includes('dev-inspector')) {
            shadow.appendChild(s.cloneNode(true))
          }
        })
      }

      // Teleport target inside Shadow DOM
      const teleportTarget = document.createElement('div')
      teleportTarget.id = 'di-teleport-target'
      shadow.appendChild(teleportTarget)

      // Mount point for Vue app
      const mountPoint = document.createElement('div')
      shadow.appendChild(mountPoint)

      // Create and mount Vue app
      app = createApp(Inspector.default, {
        storageKey: props.storageKey,
        enabledInProduction: props.enabledInProduction,
        initialAnnotations: props.initialAnnotations,
      })
      app.use(createPinia())
      app.provide('teleportTarget', teleportTarget)
      app.mount(mountPoint)
    })()

    // Ctrl+Shift+D keyboard shortcut to toggle inspector
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        // Access the Pinia store via the Vue app
        const pinia = app?._context?.app?.config?.globalProperties?.$pinia
        if (pinia?.state?.value?.devInspector) {
          const state = pinia.state.value.devInspector
          state.isEnabled = !state.isEnabled
        }
      }
    }
    window.addEventListener('keydown', handleKeydown)

    return () => {
      disposed = true
      window.removeEventListener('keydown', handleKeydown)
      app?.unmount()
    }
  }, [])

  return <div ref={containerRef} data-dev-inspector-react-root />
}
