# vue-dev-inspector

Vue 3 / Nuxt 3 対応の開発者モードインスペクター。UI要素にAPI連携先、DBフィールド、FigmaURL、メモなどのアノテーションを付与できます。

## Features

- **要素ピッカー**: 画面上の任意の要素をクリックして選択
- **アノテーション**: DB項目、API連携、Figma URL、メモなどを紐付け
- **永続化**: localStorage + JSONエクスポートで情報を保存
- **開発環境限定**: 本番ビルドでは自動的に無効化
- **キーボードショートカット**: `Ctrl+Shift+D` でパネル開閉

## Installation

### npm から（公開後）

```bash
npm install vue-dev-inspector
# or
pnpm add vue-dev-inspector
# or
yarn add vue-dev-inspector
```

### ローカルで使う（npm link）

npm公開前に他のプロジェクトで使いたい場合：

```bash
# 1. vue-dev-inspector ディレクトリでリンクを作成
cd /path/to/vue-dev-inspector
npm run build
npm link

# 2. 使いたいプロジェクトでリンクを使用
cd /path/to/your-project
npm link vue-dev-inspector
```

### GitHub から直接インストール

```bash
# package.json に追加
npm install github:your-username/vue-dev-inspector

# または直接URL指定
npm install git+https://github.com/your-username/vue-dev-inspector.git
```

### npm に公開する

```bash
cd /path/to/vue-dev-inspector

# 1. ビルド
npm run build

# 2. npmにログイン（初回のみ）
npm login

# 3. 公開
npm publish

# スコープ付きで公開する場合（@your-name/vue-dev-inspector）
# package.json の name を "@your-name/vue-dev-inspector" に変更してから
npm publish --access public
```

## Usage

### Vue 3

```ts
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDevInspector from 'vue-dev-inspector'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(VueDevInspector, {
  // options
  storageKey: 'myApp:devInspector',
  enabledInProduction: false
})
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <div>
    <YourApp />
    <DevInspector />
  </div>
</template>
```

### Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['vue-dev-inspector/nuxt'],
  devInspector: {
    // options
    storageKey: 'myApp:devInspector',
    enabledInProduction: false
  }
})
```

```vue
<!-- app.vue or layouts/default.vue -->
<template>
  <div>
    <NuxtPage />
    <DevInspector />
  </div>
</template>
```

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+Shift+D` | Toggle inspector panel |
| `Esc` | Close panel / Exit pick mode |

## API

### `useDevInspector()`

Composable to access the inspector store.

```ts
import { useDevInspector } from 'vue-dev-inspector'

const inspector = useDevInspector()

// Toggle panel
inspector.togglePanel()

// Export annotations
const json = inspector.exportConfigs()

// Import annotations
inspector.importConfigs(jsonString)
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `storageKey` | `string` | `'devInspector:elementConfigs'` | localStorage key |
| `enabledInProduction` | `boolean` | `false` | Enable in production build |
| `initialAnnotations` | `Record<string, ElementConfig>` | `{}` | Pre-loaded annotations |

### Element Config

```ts
interface ElementConfig {
  id: string
  componentPath: string
  fieldInfo?: {
    table: string
    column: string
    type?: string
    description?: string
  }
  actionInfo?: {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function'
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
    target?: string
    description?: string
  }
  links?: {
    figmaUrl?: string
    testPath?: string
    githubIssue?: string
    githubPr?: string
    relatedDocs?: string
  }
  note?: {
    text: string
    type?: 'info' | 'warning' | 'todo' | 'question'
    author?: string
  }
}
```

## Export/Import

アノテーションは JSON 形式でエクスポート/インポートできます。チームで共有したり、Git管理することが可能です。

```json
{
  "_meta": {
    "version": "1.0.0",
    "lastUpdated": "2024-01-01T00:00:00.000Z"
  },
  "annotations": {
    "#login-button": {
      "actionInfo": {
        "type": "api",
        "method": "POST",
        "target": "/api/auth/login"
      }
    }
  }
}
```

## License

MIT
