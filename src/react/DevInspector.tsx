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

      // Reuse existing Shadow DOM if already attached (React 18 Strict Mode remounts)
      let shadow = container.shadowRoot
      if (!shadow) {
        shadow = container.attachShadow({ mode: 'open' })
      } else {
        // Clear previous content for clean remount
        shadow.innerHTML = ''
      }

      // Inject inspector CSS into Shadow DOM as inline <style>
      // Dynamic import ensures CSS string is always in sync with component hashes
      try {
        const cssModule = await import('vue-dev-inspector/style-content')
        const style = document.createElement('style')
        style.textContent = cssModule.default
        shadow.appendChild(style)
      } catch {
        // Fallback: try URL-based loading
        try {
          const styleUrl = new URL('vue-dev-inspector/style.css', import.meta.url).href
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = styleUrl
          shadow.appendChild(link)
        } catch { /* CSS loading failed */ }
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

    // Ctrl+Shift+D keyboard shortcut (registered synchronously, outside async IIFE)
    // Vue side only listens for this CustomEvent — no duplicate keydown handler
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent('dev-inspector-toggle'))
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
