# vue-dev-inspector

Vue 3 / Nuxt 3 対応の開発者モードインスペクター。
画面上のUI要素と、DBカラム・API・Figma・メモを紐付けて**画面仕様書を自動生成**できます。

## 主な機能

- **CLI解析**: Vueファイルを静的解析してDB/API情報を自動抽出
- **Viteプラグイン**: ビルド時に`data-di-*`属性を自動注入
- **ブラウザUI**: 解析結果をオーバーレイ表示、手動アノテーション追加
- **画面仕様書出力**: Excel形式でエクスポート

---

## クイックスタート

### 1. インストール

```bash
yarn add vue-dev-inspector
# or
npm install vue-dev-inspector
```

### 2. Viteプラグインを設定

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginDevInspector } from 'vue-dev-inspector/vite'

export default defineConfig({
  plugins: [
    vitePluginDevInspector({
      // CLI解析結果のパス（オプション）
      analysisPath: 'public/dev-inspector-analysis.json',
    }),
    vue(),
  ],
})
```

### 3. コンポーネントを配置

```ts
// main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueDevInspector from 'vue-dev-inspector'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(VueDevInspector)
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

### 4. CLI解析を実行

```bash
# プロジェクトを解析
npx vue-dev-inspector analyze ./src

# Railsスキーマも含める場合
npx vue-dev-inspector analyze ./src --schema ../backend/db/schema.rb

# 出力先を指定（publicに置くとブラウザで自動読み込み）
npx vue-dev-inspector analyze ./src -o public/dev-inspector-analysis.json
```

### 5. ブラウザで確認

1. 開発サーバーを起動: `yarn dev`
2. `Ctrl+Shift+D` で開発者モードを有効化
3. パネルから「読み込み」→「ページに適用」

---

## 機能詳細

### 要素タグ（カテゴリ）

各要素は複数のタグを持てます：

| タグ | 色 | 説明 |
|------|-----|------|
| DB | 青 | DBカラムにバインドされたデータ |
| API | オレンジ | API呼び出しトリガー |
| フォーム | 紫 | input/select/textareaなど |
| ボタン | ピンク | button要素、@clickハンドラ |
| リンク | ティール | a要素、router-link |
| モーダル | バイオレット | モーダル表示トリガー |
| 条件 | シアン | v-if/v-show要素 |
| 計算 | ライム | computed/算術式 |

### 画面読込時API表示

CLIが検出したAPIを「画面読込時」と「アクション時」に分類して表示：

```
📡 画面読込時のAPI
├─ GET /api/users → users          [画面読込時]
├─ GET /api/notifications → list   [useFetch]
└─ GET /api/settings → settings    [onMount]

👆 アクション時のAPI
├─ POST /api/tasks
└─ DELETE /api/tasks/:id
```

### API出典表示

DB要素のラベルに、そのデータがどのAPIから来たかを表示：

```
DB: users.name ← GET /api/users
```

### Viteプラグイン

ビルド時に自動で`data-di-*`属性を注入：

```html
<!-- 変換前 -->
<span>{{ user.name }}</span>

<!-- 変換後 -->
<span data-di-binding="user.name"
      data-di-db="users.name"
      data-di-db-type="string">{{ user.name }}</span>
```

---

## CLI オプション

```bash
npx vue-dev-inspector analyze <path> [options]

Options:
  -o, --output <file>     出力ファイルパス (default: dev-inspector-analysis.json)
  -s, --schema <file>     Railsのschema.rbパス
  -a, --api-dir <dir>     APIコンポーザブルのディレクトリ
  -t, --types-dir <dir>   型定義ファイルのディレクトリ
  -v, --verbose           詳細出力
```

---

## Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['vue-dev-inspector/nuxt'],
  devInspector: {
    analysisPath: 'public/dev-inspector-analysis.json',
  }
})
```

```vue
<!-- app.vue -->
<template>
  <div>
    <NuxtPage />
    <DevInspector />
  </div>
</template>
```

---

## キーボードショートカット

| ショートカット | アクション |
|---------------|-----------|
| `Ctrl+Shift+D` | 開発者モード切替 |
| `Esc` | パネルを閉じる / ピックモード終了 |

---

## エクスポート

### Git管理用JSON

パネルの「Git管理用に保存」ボタンで `dev-annotations.json` を出力。
プロジェクトにコミットしてチーム共有。

### 画面仕様書（Excel）

パネルの「画面仕様書 (xlsx) 出力」ボタンでExcelファイルを生成。
要素一覧、DB項目、API一覧などをシートに出力。

---

## License

MIT
