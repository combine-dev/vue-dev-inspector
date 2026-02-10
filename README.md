# vue-dev-inspector

**動いている画面がそのまま仕様書になる** - Vue 3 / Nuxt 3 対応の開発ドキュメントツール。

UI要素をクリックして「このデータはDBのどのカラム？」「このボタンはどのAPIを叩く？」をその場でアノテーション。モックアップを作りながら画面仕様書を自動生成できます。

---

## なぜこのツールが必要か

従来のワークフロー：

```
画面設計書(Excel) → Figmaデザイン → 実装 → テスト
     ↑ 書くのが辛い        ↑ コードと乖離して腐る
```

vue-dev-inspector のワークフロー：

```
Vueでモックアップ → 動く画面上でアノテーション → 画面仕様書を自動生成
```

**実装とドキュメントが同じ場所にある**から、仕様書が腐らない。

---

## 主な機能

### アノテーション

画面上の要素をクリックして、ビジネスレベルの情報を紐付け：

- **DBカラム** — `users.email (varchar)` のようにテーブル・カラム・型を指定
- **アクション** — 遷移先・API呼び出し・モーダル表示などを記録
- **フォーム** — 入力タイプ・バリデーション・必須/任意を記録
- **メモ** — 表示条件、計算ロジック、NULL時の挙動など自由記述

### 可視化

- **ハイライトオーバーレイ** — アノテーション済みの要素を色分けして表示
- **フィルタリング** — DB / 計算値 / アクション / フォーム等でフィルタ
- **未登録要素の検出** — まだアノテーションされていない要素をオレンジ枠で表示

### 横断検索

全ページのアノテーションを横断的に検索：

- **カラム検索** — 「users.email を変えたらどの画面に影響？」を即答
- **API検索** — 特定のエンドポイントを使っている画面を一覧
- **テキスト検索** — メモや説明文から横断検索

### 画面フロー

アクションアノテーション（navigate型）から画面間の遷移フローを自動生成。どの画面からどこに遷移できるかをリストで確認。

### CLI 静的解析

Vueファイルを静的解析して DB / API 情報を自動抽出：

```bash
npx vue-dev-inspector analyze ./src --schema ../backend/db/schema.rb
```

### Viteプラグイン

ビルド時に `data-di-*` 属性を自動注入。テンプレートのバインディングとDB/APIの関係を自動マッピング：

```html
<!-- 変換前 -->
<span>{{ user.name }}</span>

<!-- 変換後 -->
<span data-di-binding="user.name"
      data-di-db="users.name"
      data-di-db-type="string">{{ user.name }}</span>
```

### エクスポート

- **JSON** — Git管理用。チームで共有
- **Excel** — 画面仕様書としてクライアント納品
- **リアルタイム同期** — Vite dev server経由 or Supabase経由でチーム共有

---

## クイックスタート

### 1. インストール

```bash
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
      analysisPath: 'public/dev-inspector-analysis.json',
    }),
    vue(),
  ],
})
```

### 3. アプリに組み込む

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

### 5. ブラウザで使う

1. 開発サーバーを起動: `npm run dev`
2. `Ctrl+Shift+D` で開発者モードを有効化
3. 要素をクリックしてアノテーション開始

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

## アノテーションの種類

### データソース (datasource)

UI要素がどのDBカラムを表示しているかを記録。

| 項目 | 説明 |
|------|------|
| テーブル.カラム | `users.email` |
| 型 | `varchar`, `integer`, `datetime` 等 |
| 表示タイプ | DB直接 / DB整形 / 計算値 / 固定文言 |
| 表示条件 | 管理者のみ表示、ステータスがactiveの時のみ 等 |
| NULL時の表示 | `-`, `0`, `非表示`, `N/A` 等 |

### アクション (action)

ボタンやリンクが何をするかを記録。

| タイプ | 例 |
|--------|-----|
| navigate | `/users/:id` に遷移 |
| api | `POST /api/users` を実行 |
| modal | 確認ダイアログを表示 |
| emit | 親コンポーネントにイベント送信 |
| function | カスタム関数を実行 |

### フォーム (form)

入力要素の仕様を記録。

| 項目 | 説明 |
|------|------|
| 入力タイプ | text, number, email, select, textarea, checkbox 等 |
| 必須 | 必須 / 任意 |
| バリデーション | `max:255`, `email`, `必須` 等 |
| 初期値 | デフォルト値 |

---

## マスタ定義

テーブル.カラムの取りうる値（ステータス値、区分値など）を定義：

```
orders.status
├─ 1 = 受付
├─ 2 = 処理中
├─ 3 = 完了
└─ 9 = キャンセル
```

アノテーションでカラムを指定すると、マスタ値が自動で参照されます。

---

## 横断検索

全ページのアノテーションを横断的に検索できます。

**カラムモード**: テーブル名やカラム名で検索

```
検索: "users.email"
→ /users (ユーザー一覧) — DB: users.email (string)
→ /admin/settings (設定) — DB: users.email (string)
```

**APIモード**: エンドポイントで検索

```
検索: "/api/users"
→ /users — GET /api/users (一覧取得)
→ /users/:id — PUT /api/users/:id (更新)
```

**テキストモード**: メモや説明文で検索

---

## 画面フロー

navigate型のアクションアノテーションから、画面間の遷移を自動集計：

```
/users (ユーザー一覧)          ← 現在ページ
  → /users/:id (ユーザー詳細)  [詳細ボタン]
  → /users/new (新規作成)      [新規作成ボタン]

/users/:id (ユーザー詳細)
  → /users (一覧に戻る)        [戻るボタン]
  → /users/:id/edit (編集)     [編集ボタン]
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

## キーボードショートカット

| ショートカット | アクション |
|---------------|-----------|
| `Ctrl+Shift+D` | 開発者モード切替 |
| `Esc` | パネルを閉じる / ピックモード終了 |

---

## リアルタイム同期

### Vite Dev Server（デフォルト）

開発サーバー経由でSSEベースの同期。同じサーバーに接続している複数のブラウザ間でアノテーションが自動同期。

### Supabase

```ts
app.use(VueDevInspector, {
  supabase: {
    url: 'https://xxx.supabase.co',
    anonKey: 'your-anon-key',
    table: 'dev_inspector',       // default
    pollInterval: 3000,           // ms, default
  }
})
```

---

## License

MIT
