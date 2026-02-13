import type { ElementConfig, ScreenConfig, MasterDefinition, BatchDefinition } from '../composables/useDevInspector'

// ===== Helpers =====

function escMd(s: string): string {
  return s.replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function groupByPage(
  elementConfigs: Record<string, ElementConfig>,
): Record<string, { selector: string; config: ElementConfig }[]> {
  const groups: Record<string, { selector: string; config: ElementConfig }[]> = {}
  for (const [selector, config] of Object.entries(elementConfigs)) {
    const page = config.pagePath || '/'
    if (!groups[page]) groups[page] = []
    groups[page].push({ selector, config })
  }
  return groups
}

function getBusinessType(config: ElementConfig): string {
  if (config.elementType === 'form') return '入力'
  if (config.elementType === 'action') {
    if (config.actionInfo?.type === 'navigate') return 'リンク'
    if (config.actionInfo?.type === 'modal') return 'ボタン'
    return 'ボタン'
  }
  if (config.fieldInfo || config.note?.displayType === 'db_direct' || config.note?.displayType === 'db_formatted') return '表示'
  if (config.note?.displayType === 'calculated') return '表示(計算)'
  if (config.note?.displayType === 'static') return '表示(固定)'
  return '表示'
}

function getItemName(config: ElementConfig): string {
  if (config.note?.text) return config.note.text
  if (config.fieldInfo?.description) return config.fieldInfo.description
  if (config.fieldInfo) return `${config.fieldInfo.table}.${config.fieldInfo.column}`
  if (config.actionInfo?.description) return config.actionInfo.description
  if (config.formInfo?.description) return config.formInfo.description
  return config.id
}

function getItemDescription(config: ElementConfig): string {
  const parts: string[] = []
  if (config.fieldInfo) {
    parts.push(`DBの${config.fieldInfo.table}.${config.fieldInfo.column}を表示`)
  }
  if (config.note?.displayType === 'calculated' && config.note.calcDescription) {
    parts.push(config.note.calcDescription)
  }
  if (config.actionInfo) {
    const labels: Record<string, string> = {
      navigate: '画面遷移', api: 'API呼び出し', modal: 'モーダル表示',
      emit: 'イベント発火', function: '関数実行',
      csv_export: 'CSV出力', csv_import: 'CSV取込', email: 'メール送信',
    }
    const label = labels[config.actionInfo.type] || config.actionInfo.type
    parts.push(`${label}${config.actionInfo.target ? `: ${config.actionInfo.target}` : ''}`)
  }
  if (config.formInfo?.description) {
    parts.push(config.formInfo.description)
  }
  return parts.join(' / ')
}

// ===== Permission Matrix Helper =====

function buildPermissionMatrix(screenConfigs: Record<string, ScreenConfig>): string[] {
  const lines: string[] = []

  // Collect all unique roles across all screens
  const allRoles = new Set<string>()
  for (const sc of Object.values(screenConfigs)) {
    if (sc.auth?.roles) {
      for (const role of sc.auth.roles) {
        allRoles.add(role)
      }
    }
  }

  const roles = [...allRoles].sort()
  if (roles.length === 0 && !Object.values(screenConfigs).some(sc => sc.auth)) {
    return lines
  }

  lines.push('## 権限マトリクス')
  const roleHeaders = roles.map(r => ` ${r} `).join('|')
  lines.push(`| 画面 | パス | 認証 |${roleHeaders ? roleHeaders + '|' : ''}`)
  const roleDashes = roles.map(() => '------').join('|')
  lines.push(`|------|------|------|${roleDashes ? roleDashes + '|' : ''}`)

  for (const [path, sc] of Object.entries(screenConfigs)) {
    const name = sc.name || path
    const authRequired = sc.auth?.required ? '必須' : '不要'

    if (!sc.auth?.required) {
      // Auth not required: show dashes for all roles
      const roleCells = roles.map(() => ' - ').join('|')
      lines.push(`| ${escMd(name)} | ${escMd(path)} | ${authRequired} |${roleCells ? roleCells + '|' : ''}`)
    } else {
      // Auth required: check roles
      const configuredRoles = sc.auth.roles || []
      const roleCells = roles.map(role => {
        if (configuredRoles.length === 0) return ' ○ '  // No specific roles = all allowed
        return configuredRoles.includes(role) ? ' ○ ' : ' × '
      }).join('|')
      lines.push(`| ${escMd(name)} | ${escMd(path)} | ${authRequired} |${roleCells ? roleCells + '|' : ''}`)
    }
  }

  lines.push('')
  return lines
}

// ===== SDD Export =====

export function exportForSDD(
  elementConfigs: Record<string, ElementConfig>,
  screenConfigs: Record<string, ScreenConfig>,
  masterDefinitions: Record<string, MasterDefinition>,
  batchDefinitions: Record<string, BatchDefinition> = {},
): string {
  const lines: string[] = []
  lines.push('# 画面仕様（SDD）')
  lines.push('')

  const grouped = groupByPage(elementConfigs)
  const allPaths = new Set([...Object.keys(screenConfigs), ...Object.keys(grouped)])

  for (const path of allPaths) {
    const sc = screenConfigs[path]
    const elements = grouped[path] || []

    lines.push(`## ${path} — ${sc?.name || path}`)
    lines.push('')

    // Screen info
    lines.push('### 画面情報')
    if (sc?.auth) {
      const roles = sc.auth.roles?.length ? ` (${sc.auth.roles.join(', ')})` : ''
      lines.push(`- 認証: ${sc.auth.required ? '必須' : '不要'}${roles}`)
    }
    if (sc?.componentPath) {
      lines.push(`- コンポーネント: ${sc.componentPath}`)
    }
    if (sc?.description) {
      lines.push(`- 概要: ${sc.description}`)
    }
    lines.push('')

    // APIs
    const apis = sc?.apis || []
    if (apis.length > 0) {
      lines.push('### API')
      lines.push('| メソッド | エンドポイント | タイミング | 説明 |')
      lines.push('|---------|-------------|----------|------|')
      for (const api of apis) {
        const timing = api.loadTiming || ''
        lines.push(`| ${api.method} | ${escMd(api.endpoint)} | ${timing} | ${escMd(api.description || '')} |`)
      }
      lines.push('')
    }

    // Categorize elements
    const datasources = elements.filter(e => e.config.elementType === 'datasource' || (!e.config.elementType && e.config.fieldInfo))
    const actions = elements.filter(e => e.config.elementType === 'action' || (!e.config.elementType && e.config.actionInfo && !e.config.fieldInfo))
    const forms = elements.filter(e => e.config.elementType === 'form' || (!e.config.elementType && e.config.formInfo && !e.config.fieldInfo && !e.config.actionInfo))
    const others = elements.filter(e =>
      !datasources.includes(e) && !actions.includes(e) && !forms.includes(e),
    )

    // Data sources
    if (datasources.length > 0 || others.length > 0) {
      lines.push('### データソース')
      lines.push('| セレクタ | DB | 型 | NULL時 | 表示形式 | 計算ロジック |')
      lines.push('|---------|-----|-----|--------|---------|------------|')
      for (const { selector, config } of [...datasources, ...others]) {
        const fi = config.fieldInfo
        const db = fi ? `${fi.table}.${fi.column}` : ''
        const type = fi?.type || ''
        const nullDisplay = config.note?.nullDisplay || '-'
        const displayFormat = config.note?.displayFormat || ''
        let calcLogic = ''
        if (config.note?.displayType === 'calculated' && config.note.calcDescription) {
          calcLogic = config.note.calcDescription
        }
        if (config.note?.storedCalc && config.note.storedCalcLogic) {
          calcLogic = config.note.storedCalcLogic
        }
        lines.push(`| ${escMd(selector)} | ${escMd(db)} | ${escMd(type)} | ${escMd(nullDisplay)} | ${escMd(displayFormat)} | ${escMd(calcLogic)} |`)
      }
      lines.push('')
    }

    // Actions
    if (actions.length > 0) {
      lines.push('### アクション')
      lines.push('| セレクタ | タイプ | 遷移先/API | 説明 |')
      lines.push('|---------|--------|-----------|------|')
      for (const { selector, config } of actions) {
        const ai = config.actionInfo
        const type = ai?.type || ''
        let target = ai?.target || ''
        if (ai?.method) target = `${ai.method} ${target}`
        const desc = ai?.description || config.note?.text || ''
        lines.push(`| ${escMd(selector)} | ${escMd(type)} | ${escMd(target)} | ${escMd(desc)} |`)
      }
      lines.push('')
    }

    // Forms
    if (forms.length > 0) {
      lines.push('### フォーム')
      lines.push('| セレクタ | DB | 入力タイプ | 必須 | バリデーション | 初期値 |')
      lines.push('|---------|-----|----------|------|--------------|--------|')
      for (const { selector, config } of forms) {
        const fi = config.fieldInfo
        const db = fi ? `${fi.table}.${fi.column}` : ''
        const inputType = config.formInfo?.inputType || ''
        const required = config.formInfo?.required ? 'Yes' : ''
        const validation = [
          ...(config.formInfo?.validation || []),
          ...(fi?.validation || []),
        ].join(', ')
        const defaultValue = config.formInfo?.defaultValue || ''
        lines.push(`| ${escMd(selector)} | ${escMd(db)} | ${escMd(inputType)} | ${required} | ${escMd(validation)} | ${escMd(defaultValue)} |`)
      }
      lines.push('')
    }

    // CSV Spec (SDD)
    const csvActions = elements.filter(e =>
      e.config.actionInfo?.type === 'csv_export' || e.config.actionInfo?.type === 'csv_import'
    )
    if (csvActions.length > 0) {
      lines.push('### CSV仕様')
      for (const { config } of csvActions) {
        const ai = config.actionInfo!
        const csvSpec = ai.csvSpec
        const typeLabel = ai.type === 'csv_export' ? 'CSV出力' : 'CSV取込'
        const name = ai.description || config.note?.text || ''
        lines.push(`#### ${typeLabel}: ${name}`)
        lines.push('')

        if (csvSpec) {
          // File settings
          const fileSettings: string[] = []
          if (csvSpec.encoding) fileSettings.push(`- エンコーディング: ${csvSpec.encoding}`)
          if (csvSpec.delimiter) {
            const delimLabels: Record<string, string> = { ',': 'カンマ', '\t': 'タブ', '|': 'パイプ' }
            fileSettings.push(`- 区切り文字: ${delimLabels[csvSpec.delimiter] || csvSpec.delimiter}`)
          }
          if (csvSpec.hasHeaderRow !== undefined) fileSettings.push(`- ヘッダー行: ${csvSpec.hasHeaderRow ? 'あり' : 'なし'}`)
          if (csvSpec.filenamePattern) fileSettings.push(`- ファイル名: ${csvSpec.filenamePattern}`)
          if (fileSettings.length > 0) {
            lines.push('**ファイル設定**')
            lines.push(...fileSettings)
            lines.push('')
          }

          // Column table
          if (csvSpec.columns.length > 0) {
            const hasProcessing = csvSpec.columns.some(c => c.processing)
            if (hasProcessing) {
              lines.push('| No | 項目名 | DBマッピング | 加工ロジック | 型 | 必須 | バリデーション | フォーマット | 説明 |')
              lines.push('|----|--------|-------------|------------|-----|------|--------------|------------|------|')
              csvSpec.columns.forEach((col, idx) => {
                lines.push(`| ${idx + 1} | ${escMd(col.name)} | ${escMd(col.dbMapping || '')} | ${escMd(col.processing || '')} | ${escMd(col.type || '')} | ${col.required ? 'Yes' : ''} | ${escMd(col.validation || '')} | ${escMd(col.format || '')} | ${escMd(col.description || '')} |`)
              })
            } else {
              lines.push('| No | 項目名 | DBマッピング | 型 | 必須 | バリデーション | フォーマット | 説明 |')
              lines.push('|----|--------|-------------|-----|------|--------------|------------|------|')
              csvSpec.columns.forEach((col, idx) => {
                lines.push(`| ${idx + 1} | ${escMd(col.name)} | ${escMd(col.dbMapping || '')} | ${escMd(col.type || '')} | ${col.required ? 'Yes' : ''} | ${escMd(col.validation || '')} | ${escMd(col.format || '')} | ${escMd(col.description || '')} |`)
              })
            }
            lines.push('')
          }

          // Export options
          if (ai.type === 'csv_export') {
            const exportOpts: string[] = []
            if (csvSpec.sortOrder) exportOpts.push(`- ソート: ${csvSpec.sortOrder}`)
            if (csvSpec.filterCondition) exportOpts.push(`- 抽出条件: ${csvSpec.filterCondition}`)
            if (csvSpec.maxRows) exportOpts.push(`- 最大行数: ${csvSpec.maxRows}`)
            if (exportOpts.length > 0) {
              lines.push('**出力オプション**')
              lines.push(...exportOpts)
              lines.push('')
            }
          }

          // Import options
          if (ai.type === 'csv_import') {
            const importOpts: string[] = []
            const errorLabels: Record<string, string> = {
              stop_on_first: '最初のエラーで停止',
              skip_and_continue: 'スキップして続行',
              collect_all: '全エラー収集',
            }
            const dupLabels: Record<string, string> = {
              skip: 'スキップ', overwrite: '上書き', error: 'エラー',
            }
            if (csvSpec.errorHandling) importOpts.push(`- エラー処理: ${errorLabels[csvSpec.errorHandling] || csvSpec.errorHandling}`)
            if (csvSpec.duplicateHandling) importOpts.push(`- 重複処理: ${dupLabels[csvSpec.duplicateHandling] || csvSpec.duplicateHandling}`)
            if (csvSpec.preValidation) importOpts.push(`- 事前バリデーション: ${csvSpec.preValidation}`)
            if (importOpts.length > 0) {
              lines.push('**取込オプション**')
              lines.push(...importOpts)
              lines.push('')
            }
          }

          // Error definitions
          if (csvSpec.errorDefs && csvSpec.errorDefs.length > 0) {
            lines.push('**エラー定義**')
            lines.push('| 対象列 | エラー条件 | エラーメッセージ | 種別 |')
            lines.push('|--------|----------|----------------|------|')
            for (const errDef of csvSpec.errorDefs) {
              const sevLabel = errDef.severity === 'warning' ? '警告' : 'エラー'
              lines.push(`| ${escMd(errDef.column || '（全体）')} | ${escMd(errDef.condition)} | ${escMd(errDef.message)} | ${sevLabel} |`)
            }
            lines.push('')
          }
        }
      }
    }

    // Email Spec (SDD)
    const emailActions = elements.filter(e => e.config.actionInfo?.type === 'email')
    if (emailActions.length > 0) {
      lines.push('### メール送信仕様')
      for (const { config } of emailActions) {
        const ai = config.actionInfo!
        const spec = ai.emailSpec
        const name = ai.description || config.note?.text || ''
        lines.push(`#### メール送信: ${name}`)
        if (spec) {
          if (spec.trigger) lines.push(`- トリガー: ${spec.trigger}`)
          if (spec.to) lines.push(`- 宛先: ${spec.to}`)
          if (spec.cc) lines.push(`- CC: ${spec.cc}`)
          if (spec.bcc) lines.push(`- BCC: ${spec.bcc}`)
          if (spec.subject) lines.push(`- 件名: ${spec.subject}`)
          if (spec.bodyTemplate) lines.push(`- 本文概要: ${spec.bodyTemplate}`)
          if (spec.templatePath) lines.push(`- テンプレート: ${spec.templatePath}`)
          if (spec.variables && spec.variables.length > 0) lines.push(`- 差し込み変数: ${spec.variables.join(', ')}`)
          if (spec.attachments) lines.push(`- 添付ファイル: ${spec.attachments}`)
          if (spec.conditions) lines.push(`- 送信条件: ${spec.conditions}`)
          if (spec.errorHandling) lines.push(`- エラー処理: ${spec.errorHandling}`)
        }
        lines.push('')
      }
    }

    lines.push('---')
    lines.push('')
  }

  // Permission Matrix (before Screen Flow)
  const permMatrix = buildPermissionMatrix(screenConfigs)
  if (permMatrix.length > 0) {
    lines.push(...permMatrix)
  }

  // Screen Flow
  const flowEdges: { from: string; to: string; trigger: string }[] = []
  for (const [selector, config] of Object.entries(elementConfigs)) {
    if (config.actionInfo?.type === 'navigate' && config.actionInfo.target) {
      const fromPath = config.pagePath || '/'
      flowEdges.push({
        from: fromPath,
        to: config.actionInfo.target,
        trigger: config.actionInfo.description || config.note?.text || selector,
      })
    }
  }
  if (flowEdges.length > 0) {
    lines.push('## 画面フロー')
    lines.push('| 遷移元 | 遷移先 | トリガー |')
    lines.push('|--------|--------|---------|')
    for (const edge of flowEdges) {
      const fromName = screenConfigs[edge.from]?.name || edge.from
      const toName = screenConfigs[edge.to]?.name || edge.to
      lines.push(`| ${escMd(fromName)} (${escMd(edge.from)}) | ${escMd(toName)} (${escMd(edge.to)}) | ${escMd(edge.trigger)} |`)
    }
    lines.push('')
  }

  // Master Definitions
  const masters = Object.values(masterDefinitions)
  if (masters.length > 0) {
    lines.push('## マスタ定義')
    lines.push('')
    for (const master of masters) {
      lines.push(`### ${master.id} — ${master.name} (${master.columnType || ''})`)
      if (master.description) {
        lines.push(master.description)
        lines.push('')
      }
      lines.push('| 値 | ラベル | 説明 |')
      lines.push('|----|--------|------|')
      for (const entry of master.entries) {
        lines.push(`| ${escMd(entry.value)} | ${escMd(entry.label)} | ${escMd(entry.description || '')} |`)
      }
      lines.push('')

      // State Transitions
      if (master.transitions && master.transitions.length > 0) {
        lines.push('**状態遷移**')
        lines.push('| 遷移元 | 遷移先 | トリガー | 条件 |')
        lines.push('|--------|--------|---------|------|')
        for (const t of master.transitions) {
          const fromEntry = master.entries.find(e => e.value === t.from)
          const toEntry = master.entries.find(e => e.value === t.to)
          const fromLabel = fromEntry ? `${fromEntry.label} (${t.from})` : t.from
          const toLabel = toEntry ? `${toEntry.label} (${t.to})` : t.to
          lines.push(`| ${escMd(fromLabel)} | ${escMd(toLabel)} | ${escMd(t.trigger)} | ${escMd(t.condition || '')} |`)
        }
        lines.push('')
      }
    }
  }

  // Batch Definitions
  const batches = Object.values(batchDefinitions)
  if (batches.length > 0) {
    lines.push('## バッチ処理定義')
    lines.push('')
    for (const batch of batches) {
      lines.push(`### ${batch.name}`)
      if (batch.schedule) lines.push(`- スケジュール: ${batch.schedule}`)
      if (batch.trigger) lines.push(`- トリガー: ${batch.trigger}`)
      if (batch.description) lines.push(`- 概要: ${batch.description}`)
      if (batch.timeout) lines.push(`- タイムアウト: ${batch.timeout}`)
      if (batch.retryPolicy) lines.push(`- リトライ: ${batch.retryPolicy}`)
      if (batch.inputTables && batch.inputTables.length > 0) lines.push(`- 入力: ${batch.inputTables.join(', ')}`)
      if (batch.outputTables && batch.outputTables.length > 0) lines.push(`- 出力: ${batch.outputTables.join(', ')}`)
      lines.push('')

      if (batch.steps.length > 0) {
        lines.push('**処理ステップ**')
        lines.push('| No | 処理内容 | 対象 | 種別 | エラー時 |')
        lines.push('|----|---------|------|------|---------|')
        for (const step of batch.steps) {
          lines.push(`| ${step.order} | ${escMd(step.description)} | ${escMd(step.target || '-')} | ${escMd(step.type || '')} | ${escMd(step.errorHandling || '')} |`)
        }
        lines.push('')
      }

      if (batch.notifyOnError) lines.push(`- エラー通知: ${batch.notifyOnError}`)
      if (batch.notifyOnComplete) lines.push(`- 完了通知: ${batch.notifyOnComplete}`)
      if (batch.notifyOnError || batch.notifyOnComplete) lines.push('')
    }
  }

  return lines.join('\n')
}

// ===== Client Export =====

export function exportForClient(
  elementConfigs: Record<string, ElementConfig>,
  screenConfigs: Record<string, ScreenConfig>,
  masterDefinitions: Record<string, MasterDefinition>,
  batchDefinitions: Record<string, BatchDefinition> = {},
): string {
  const lines: string[] = []
  lines.push('# 画面仕様書')
  lines.push('')

  const grouped = groupByPage(elementConfigs)
  const allPaths = new Set([...Object.keys(screenConfigs), ...Object.keys(grouped)])

  for (const path of allPaths) {
    const sc = screenConfigs[path]
    const elements = grouped[path] || []

    lines.push(`## ${sc?.name || path}`)
    lines.push(`**URL:** ${path}`)
    lines.push('')

    // Description
    if (sc?.description) {
      lines.push('### 概要')
      lines.push(sc.description)
      lines.push('')
    }

    // Auth
    if (sc?.auth) {
      lines.push('### 認証')
      lines.push(`- ${sc.auth.required ? 'ログイン必須' : 'ログイン不要'}`)
      if (sc.auth.roles?.length) {
        const roleLabels = sc.auth.roles.map(r => {
          const map: Record<string, string> = { admin: '管理者', manager: 'マネージャー', user: 'ユーザー' }
          return map[r] || r
        })
        lines.push(`- 権限: ${roleLabels.join('、')}`)
      }
      lines.push('')
    }

    // Screen items
    if (elements.length > 0) {
      lines.push('### 画面項目')
      lines.push('| No | 項目名 | 種別 | 説明 | 必須 | 備考 |')
      lines.push('|----|--------|------|------|------|------|')
      elements.forEach(({ config }, idx) => {
        const itemName = getItemName(config)
        const type = getBusinessType(config)
        const desc = getItemDescription(config)
        const required = config.formInfo?.required ? '必須' : ''
        const remarks: string[] = []
        if (config.note?.condition) remarks.push(config.note.condition)
        if (config.note?.unit) remarks.push(`単位: ${config.note.unit}`)
        if (config.note?.nullDisplay && config.note.nullDisplay !== '-') remarks.push(`空欄時: ${config.note.nullDisplay}`)
        lines.push(`| ${idx + 1} | ${escMd(itemName)} | ${type} | ${escMd(desc)} | ${required} | ${escMd(remarks.join(' / '))} |`)
      })
      lines.push('')
    }

    // APIs
    const apis = sc?.apis || []
    if (apis.length > 0) {
      lines.push('### 使用API')
      lines.push('| メソッド | エンドポイント | 説明 |')
      lines.push('|---------|-------------|------|')
      for (const api of apis) {
        lines.push(`| ${api.method} | ${escMd(api.endpoint)} | ${escMd(api.description || '')} |`)
      }
      lines.push('')
    }

    // CSV Spec (Client - simplified)
    const csvActionsClient = elements.filter(e =>
      e.config.actionInfo?.type === 'csv_export' || e.config.actionInfo?.type === 'csv_import'
    )
    if (csvActionsClient.length > 0) {
      lines.push('### CSV入出力仕様')
      for (const { config } of csvActionsClient) {
        const ai = config.actionInfo!
        const csvSpec = ai.csvSpec
        const typeLabel = ai.type === 'csv_export' ? 'CSV出力' : 'CSV取込'
        const name = ai.description || config.note?.text || ''
        lines.push(`#### ${typeLabel}: ${name}`)
        lines.push('')

        if (csvSpec) {
          // File settings
          const fileSettings: string[] = []
          if (csvSpec.encoding) fileSettings.push(`- エンコーディング: ${csvSpec.encoding}`)
          if (csvSpec.filenamePattern) fileSettings.push(`- ファイル名: ${csvSpec.filenamePattern}`)
          if (fileSettings.length > 0) {
            lines.push(...fileSettings)
            lines.push('')
          }

          // Column table (simplified - no DB mapping, no validation)
          if (csvSpec.columns.length > 0) {
            const hasProcessing = csvSpec.columns.some(c => c.processing)
            if (hasProcessing) {
              lines.push('| No | 項目名 | 加工 | 型 | 必須 | 説明 |')
              lines.push('|----|--------|------|-----|------|------|')
              csvSpec.columns.forEach((col, idx) => {
                lines.push(`| ${idx + 1} | ${escMd(col.name)} | ${escMd(col.processing || '')} | ${escMd(col.type || '')} | ${col.required ? '必須' : ''} | ${escMd(col.description || '')} |`)
              })
            } else {
              lines.push('| No | 項目名 | 型 | 必須 | 説明 |')
              lines.push('|----|--------|-----|------|------|')
              csvSpec.columns.forEach((col, idx) => {
                lines.push(`| ${idx + 1} | ${escMd(col.name)} | ${escMd(col.type || '')} | ${col.required ? '必須' : ''} | ${escMd(col.description || '')} |`)
              })
            }
            lines.push('')
          }

          // Error definitions (simplified for client)
          if (csvSpec.errorDefs && csvSpec.errorDefs.length > 0) {
            lines.push('**エラー時の動作**')
            lines.push('| エラー条件 | メッセージ |')
            lines.push('|----------|----------|')
            for (const errDef of csvSpec.errorDefs) {
              const colPrefix = errDef.column ? `[${errDef.column}] ` : ''
              lines.push(`| ${escMd(colPrefix + errDef.condition)} | ${escMd(errDef.message)} |`)
            }
            lines.push('')
          }
        }
      }
    }

    // Email Spec (Client - simplified)
    const emailActionsClient = elements.filter(e => e.config.actionInfo?.type === 'email')
    if (emailActionsClient.length > 0) {
      lines.push('### メール送信')
      for (const { config } of emailActionsClient) {
        const ai = config.actionInfo!
        const spec = ai.emailSpec
        const name = ai.description || config.note?.text || ''
        lines.push(`#### ${name}`)
        if (spec) {
          if (spec.trigger) lines.push(`- タイミング: ${spec.trigger}`)
          if (spec.to) lines.push(`- 宛先: ${spec.to}`)
          if (spec.subject) lines.push(`- 件名: ${spec.subject}`)
        }
        lines.push('')
      }
    }

    // Notes
    if (sc?.notes) {
      lines.push('### 備考')
      lines.push(sc.notes)
      lines.push('')
    }

    lines.push('---')
    lines.push('')
  }

  // State Transitions (Client: only masters with transitions)
  const mastersWithTransitions = Object.values(masterDefinitions).filter(m => m.transitions && m.transitions.length > 0)
  if (mastersWithTransitions.length > 0) {
    lines.push('## 状態遷移')
    for (const master of mastersWithTransitions) {
      lines.push(`### ${master.name}`)
      lines.push('| 遷移元 | 遷移先 | 操作 | 条件 |')
      lines.push('|--------|--------|------|------|')
      for (const t of master.transitions!) {
        const fromEntry = master.entries.find(e => e.value === t.from)
        const toEntry = master.entries.find(e => e.value === t.to)
        const fromLabel = fromEntry ? fromEntry.label : t.from
        const toLabel = toEntry ? toEntry.label : t.to
        lines.push(`| ${escMd(fromLabel)} | ${escMd(toLabel)} | ${escMd(t.trigger)} | ${escMd(t.condition || '')} |`)
      }
      lines.push('')
    }
  }

  // Batch Definitions (Client - simplified)
  const batches = Object.values(batchDefinitions)
  if (batches.length > 0) {
    lines.push('## バッチ処理')
    lines.push('')
    for (const batch of batches) {
      lines.push(`### ${batch.name}`)
      if (batch.schedule) lines.push(`- 実行タイミング: ${batch.schedule}`)
      if (batch.description) lines.push(`- 概要: ${batch.description}`)
      lines.push('')
    }
  }

  // Permission Matrix (at the end for client)
  const permMatrix = buildPermissionMatrix(screenConfigs)
  if (permMatrix.length > 0) {
    lines.push(...permMatrix)
  }

  return lines.join('\n')
}
