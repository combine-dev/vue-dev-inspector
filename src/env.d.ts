/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly DEV: boolean
  readonly VITE_DEV_INSPECTOR_ENABLED?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
