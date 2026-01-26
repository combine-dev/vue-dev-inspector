#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import { analyzeProject } from './analyzer'

const args = process.argv.slice(2)

function printHelp() {
  console.log(`
vue-dev-inspector - ソースコード解析ツール

使い方:
  npx vue-dev-inspector <command> [options]

コマンド:
  analyze <path>         Vue プロジェクトを解析して要素マッピングを生成
  merge <changes-file>   ブラウザでの編集内容を JSON に反映

analyze オプション:
  -o, --output <file>    出力ファイル (デフォルト: dev-inspector-analysis.json)
  -s, --schema <file>    Rails schema.rbのパス (自動検出も可能)
  -v, --verbose          詳細ログを出力

merge オプション:
  -a, --analysis <file>  解析JSONファイル (デフォルト: dev-inspector-analysis.json)
  -o, --output <file>    出力ファイル (省略時は上書き)

例:
  npx vue-dev-inspector analyze ./src
  npx vue-dev-inspector analyze ./front -o analysis.json -v
  npx vue-dev-inspector merge changes.json -a public/dev-inspector-analysis.json
`)
}

// Merge browser changes into analysis JSON
interface BrowserChanges {
  removed: string[]  // Selectors to remove
  modified?: Record<string, any>  // Modified elements (future)
}

function mergeChanges(changesPath: string, analysisPath: string, outputPath?: string) {
  console.log(`\n🔄 Merging browser changes...`)
  console.log(`   Changes file: ${changesPath}`)
  console.log(`   Analysis file: ${analysisPath}`)

  // Read changes file
  if (!fs.existsSync(changesPath)) {
    console.error(`❌ Changes file not found: ${changesPath}`)
    process.exit(1)
  }
  const changes: BrowserChanges = JSON.parse(fs.readFileSync(changesPath, 'utf-8'))

  // Read analysis file
  if (!fs.existsSync(analysisPath)) {
    console.error(`❌ Analysis file not found: ${analysisPath}`)
    process.exit(1)
  }
  const analysis = JSON.parse(fs.readFileSync(analysisPath, 'utf-8'))

  let removedCount = 0

  // Remove elements
  if (changes.removed && changes.removed.length > 0) {
    console.log(`\n🗑️  Removing ${changes.removed.length} elements...`)

    for (const [componentPath, component] of Object.entries(analysis.components)) {
      const comp = component as any
      const originalLength = comp.elements.length
      comp.elements = comp.elements.filter((el: any) => !changes.removed.includes(el.selector))
      const removed = originalLength - comp.elements.length
      if (removed > 0) {
        console.log(`   - ${componentPath}: ${removed} elements removed`)
        removedCount += removed
      }
    }
  }

  // Write output
  const finalOutput = outputPath || analysisPath
  fs.writeFileSync(finalOutput, JSON.stringify(analysis, null, 2))

  console.log(`\n✅ Merge complete!`)
  console.log(`   Removed: ${removedCount} elements`)
  console.log(`   Output: ${finalOutput}`)
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

    const schemaFlagIndex = args.findIndex(a => a === '-s' || a === '--schema')
    const schemaPath = schemaFlagIndex !== -1
      ? args[schemaFlagIndex + 1]
      : undefined

    const verbose = args.includes('-v') || args.includes('--verbose')

    try {
      await analyzeProject(projectPath, { output, verbose, schemaPath })
    } catch (error) {
      console.error('Error:', error)
      process.exit(1)
    }
  } else if (command === 'merge') {
    const changesPath = args[1]
    if (!changesPath) {
      console.error('❌ Changes file path required')
      printHelp()
      process.exit(1)
    }

    const analysisFlagIndex = args.findIndex(a => a === '-a' || a === '--analysis')
    const analysisPath = analysisFlagIndex !== -1
      ? args[analysisFlagIndex + 1]
      : 'dev-inspector-analysis.json'

    const outputFlagIndex = args.findIndex(a => a === '-o' || a === '--output')
    const outputPath = outputFlagIndex !== -1
      ? args[outputFlagIndex + 1]
      : undefined

    try {
      mergeChanges(changesPath, analysisPath, outputPath)
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
