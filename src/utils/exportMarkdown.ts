import type { ElementConfig, ScreenConfig, MasterDefinition } from '../composables/useDevInspector'

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
    }
    const label = labels[config.actionInfo.type] || config.actionInfo.type
    parts.push(`${label}${config.actionInfo.target ? `: ${config.actionInfo.target}` : ''}`)
  }
  if (config.formInfo?.description) {
    parts.push(config.formInfo.description)
  }
  return parts.join(' / ')
}

// ===== SDD Export =====

export function exportForSDD(
  elementConfigs: Record<string, ElementConfig>,
  screenConfigs: Record<string, ScreenConfig>,
  masterDefinitions: Record<string, MasterDefinition>,
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

    lines.push('---')
    lines.push('')
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
    }
  }

  return lines.join('\n')
}

// ===== Client Export =====

export function exportForClient(
  elementConfigs: Record<string, ElementConfig>,
  screenConfigs: Record<string, ScreenConfig>,
  masterDefinitions: Record<string, MasterDefinition>,
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

    // Notes
    if (sc?.notes) {
      lines.push('### 備考')
      lines.push(sc.notes)
      lines.push('')
    }

    lines.push('---')
    lines.push('')
  }

  return lines.join('\n')
}
