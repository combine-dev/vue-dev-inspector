import type { ScreenSpec, ElementConfig } from '../composables/useDevInspector'

interface ExportOptions {
  systemName?: string
  author?: string
}

/**
 * Export screen spec to xlsx file
 */
export async function exportScreenSpecToXlsx(
  screenSpec: ScreenSpec | null,
  elementConfigs: Record<string, ElementConfig>,
  options: ExportOptions = {}
) {
  // Dynamic import xlsx to make it optional
  const XLSX = await import('xlsx')

  const { systemName = 'System', author = '' } = options
  const now = new Date()
  const dateStr = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`

  // Create workbook
  const wb = XLSX.utils.book_new()

  // Build data array for the sheet
  const data: (string | number | null)[][] = []

  // Header section
  data.push([
    '画面機能仕様書', '', '', '', '', '', '', '', '', '', '',
    'システム名', '', '', '', '', systemName, '', '', '', '', '',
    '画面ID/画面名', '', '', '', '', screenSpec?.name || '', '', '', '', '', '',
    '作成者', '', '', '', '', author, '',
    '作成日', '', '', '', '', dateStr
  ])

  data.push([]) // Empty row

  // URL and component info
  data.push([
    'URL', '', '', '', '', '', '', '', '', '', '',
    '画面英語名', '', '', '', '', '', '', '', '', '', '',
    'View Component', '', '', '', '', screenSpec?.componentPath || '', '', '', '', '', '',
    'Figma URL', '', '', '', '', screenSpec?.figmaUrl || ''
  ])

  data.push([]) // Empty row

  // 機能概要
  data.push(['機能概要'])
  data.push([screenSpec?.description || ''])

  data.push([]) // Empty row

  // 画面レイアウト figmaURL
  data.push(['画面レイアウト　figmaURL'])
  data.push([screenSpec?.figmaUrl || ''])

  data.push([]) // Empty row

  // API情報
  if (screenSpec?.apis && screenSpec.apis.length > 0) {
    data.push(['API一覧'])
    data.push(['', 'メソッド', '', 'エンドポイント', '', '', '', '', '', '', '', '説明'])
    screenSpec.apis.forEach((api) => {
      data.push(['', api.method, '', api.endpoint, '', '', '', '', '', '', '', api.description])
    })
    data.push([]) // Empty row
  }

  // 画面項目一覧
  data.push(['画面項目　ヘッダーフッターは省く'])
  data.push([
    '', 'No.', '', '項目名', '', '', '', '', '', '', '', '', '', '', '',
    '説明', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '表示条件', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '備考'
  ])

  // Element configs as screen items
  const configs = Object.values(elementConfigs)
  configs.forEach((config, index) => {
    const itemName = config.id
    let description = ''
    let displayCondition = ''
    let remarks = ''

    // Build description from various sources
    if (config.note?.text) {
      description = config.note.text
    }
    if (config.fieldInfo) {
      description += description ? '\n' : ''
      description += `DB: ${config.fieldInfo.table}.${config.fieldInfo.column}`
      if (config.fieldInfo.type) {
        description += ` (${config.fieldInfo.type})`
      }
      if (config.fieldInfo.description) {
        description += `\n${config.fieldInfo.description}`
      }
    }

    // Build remarks from action info
    if (config.actionInfo) {
      const actionLabels: Record<string, string> = {
        navigate: '画面遷移',
        api: 'API呼び出し',
        modal: 'モーダル表示',
        emit: 'イベント発火',
        function: '関数実行'
      }
      remarks = `[${actionLabels[config.actionInfo.type] || config.actionInfo.type}]`
      if (config.actionInfo.target) {
        remarks += ` ${config.actionInfo.method || ''} ${config.actionInfo.target}`
      }
      if (config.actionInfo.description) {
        remarks += `\n${config.actionInfo.description}`
      }
    }

    // Add links info to remarks
    if (config.links) {
      const links: string[] = []
      if (config.links.testPath) links.push(`テスト: ${config.links.testPath}`)
      if (config.links.figmaUrl) links.push(`Figma: ${config.links.figmaUrl}`)
      if (config.links.githubIssue) links.push(`Issue: ${config.links.githubIssue}`)
      if (config.links.githubPr) links.push(`PR: ${config.links.githubPr}`)
      if (links.length > 0) {
        remarks += remarks ? '\n\n' : ''
        remarks += links.join('\n')
      }
    }

    // Add dev meta info
    if (config.devMeta) {
      const meta: string[] = []
      if (config.devMeta.usedStores?.length) meta.push(`Store: ${config.devMeta.usedStores.join(', ')}`)
      if (config.devMeta.usedComponents?.length) meta.push(`Components: ${config.devMeta.usedComponents.join(', ')}`)
      if (config.devMeta.accessibility) meta.push(`A11y: ${config.devMeta.accessibility}`)
      if (config.devMeta.responsive) meta.push(`Responsive: ${config.devMeta.responsive}`)
      if (meta.length > 0) {
        remarks += remarks ? '\n\n' : ''
        remarks += '[開発情報]\n' + meta.join('\n')
      }
    }

    data.push([
      '', index + 1, '', itemName, '', '', '', '', '', '', '', '', '', '', '',
      description, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      displayCondition, '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      remarks
    ])
  })

  // Create worksheet
  const ws = XLSX.utils.aoa_to_sheet(data)

  // Set column widths
  ws['!cols'] = [
    { wch: 3 },   // A
    { wch: 5 },   // B - No
    { wch: 3 },   // C
    { wch: 20 },  // D - 項目名
    { wch: 5 },   // E
    { wch: 5 },   // F
    { wch: 5 },   // G
    { wch: 5 },   // H
    { wch: 5 },   // I
    { wch: 5 },   // J
    { wch: 5 },   // K
    { wch: 5 },   // L
    { wch: 5 },   // M
    { wch: 5 },   // N
    { wch: 5 },   // O
    { wch: 30 },  // P - 説明
    { wch: 5 },   // Q
    { wch: 5 },   // R
    { wch: 5 },   // S
    { wch: 5 },   // T
    { wch: 5 },   // U
    { wch: 5 },   // V
    { wch: 5 },   // W
    { wch: 5 },   // X
    { wch: 5 },   // Y
    { wch: 5 },   // Z
    { wch: 5 },   // AA
    { wch: 5 },   // AB
    { wch: 5 },   // AC
    { wch: 5 },   // AD
    { wch: 5 },   // AE
    { wch: 20 },  // AF - 表示条件
    { wch: 5 },   // AG
    { wch: 5 },   // AH
    { wch: 5 },   // AI
    { wch: 5 },   // AJ
    { wch: 5 },   // AK
    { wch: 5 },   // AL
    { wch: 5 },   // AM
    { wch: 5 },   // AN
    { wch: 5 },   // AO
    { wch: 5 },   // AP
    { wch: 5 },   // AQ
    { wch: 5 },   // AR
    { wch: 5 },   // AS
    { wch: 5 },   // AT
    { wch: 30 },  // AU - 備考
  ]

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(wb, ws, '画面設計書')

  // Generate filename
  const screenName = screenSpec?.name?.replace(/[/\\?%*:|"<>]/g, '-') || 'screen'
  const filename = `画面仕様書_${screenName}_${dateStr.replace(/\//g, '')}.xlsx`

  // Write file and download
  XLSX.writeFile(wb, filename)

  return filename
}
