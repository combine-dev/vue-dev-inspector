#!/usr/bin/env node

import { analyzeProject } from './analyzer'

const args = process.argv.slice(2)

function printHelp() {
  console.log(`
vue-dev-inspector - ソースコード解析ツール

使い方:
  npx vue-dev-inspector analyze <project-path> [options]

コマンド:
  analyze    Vue プロジェクトを解析して要素マッピングを生成

オプション:
  -o, --output <file>   出力ファイル (デフォルト: dev-inspector-analysis.json)
  -v, --verbose         詳細ログを出力
  -h, --help            ヘルプを表示

例:
  npx vue-dev-inspector analyze ./src
  npx vue-dev-inspector analyze ./front -o analysis.json -v
  npx vue-dev-inspector analyze /path/to/project --verbose
`)
}

async function main() {
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
    printHelp()
    process.exit(0)
  }

  const command = args[0]

  if (command === 'analyze') {
    const projectPath = args[1] || '.'

    const outputFlagIndex = args.findIndex(a => a === '-o' || a === '--output')
    const output = outputFlagIndex !== -1
      ? args[outputFlagIndex + 1]
      : 'dev-inspector-analysis.json'

    const verbose = args.includes('-v') || args.includes('--verbose')

    try {
      await analyzeProject(projectPath, { output, verbose })
    } catch (error) {
      console.error('Error:', error)
      process.exit(1)
    }
  } else {
    console.error(`Unknown command: ${command}`)
    printHelp()
    process.exit(1)
  }
}

main()
