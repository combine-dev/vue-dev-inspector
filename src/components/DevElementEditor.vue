<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { X, Database, Save, Trash2, MessageSquare, Wand2, Calculator, Type, ShieldQuestion, Zap, FormInput, List, ChevronUp, ChevronDown, FileSpreadsheet, Mail, ArrowUpDown } from 'lucide-vue-next'
import { useDevInspectorStore, type FieldInfo, type ElementNote, type SourceBindingInfo, type ActionInfo, type FormInfo, type SortInfo, type MasterEntry, type CsvColumnDef, type CsvSpec, type CsvErrorDef, type EmailSpec } from '../composables/useDevInspector'

// (SortInfo is now part of ActionInfo.sortSpec)

const store = useDevInspectorStore()

// Tab selection
const activeTab = ref<'datasource' | 'action' | 'form'>('datasource')

// Action tab refs
const actionType = ref<ActionInfo['type'] | ''>('')
const actionTarget = ref('')
const actionMethod = ref<ActionInfo['method'] | ''>('')
const actionDescription = ref('')

// Form tab refs
const formInputType = ref('')
const formRequired = ref(false)
const formValidation = ref<string[]>([])
const formValidationInput = ref('')
const formPlaceholder = ref('')
const formDefaultValue = ref('')
const formDescription = ref('')

// CSV spec refs
const csvColumns = ref<CsvColumnDef[]>([])
const csvEncoding = ref<CsvSpec['encoding']>('UTF-8')
const csvDelimiter = ref<CsvSpec['delimiter']>(',')
const csvHasHeaderRow = ref(true)
const csvFilenamePattern = ref('')
const csvSortOrder = ref('')
const csvFilterCondition = ref('')
const csvMaxRows = ref<number | undefined>(undefined)
const csvErrorHandling = ref<CsvSpec['errorHandling'] | ''>('')
const csvDuplicateHandling = ref<CsvSpec['duplicateHandling'] | ''>('')
const csvPreValidation = ref('')
const csvErrorDefs = ref<CsvErrorDef[]>([])

// Email spec refs
const emailTrigger = ref('')
const emailTo = ref('')
const emailCc = ref('')
const emailBcc = ref('')
const emailSubject = ref('')
const emailBodyTemplate = ref('')
const emailTemplatePath = ref('')
const emailVariables = ref<string[]>([])
const emailVariableInput = ref('')
const emailAttachments = ref('')
const emailConditions = ref('')
const emailErrorHandling = ref('')

// Sort spec refs (action type = 'sort')
const sortSortable = ref(true)
const sortType = ref<SortInfo['sortType'] | ''>('')
const sortKey = ref('')
const sortDefaultDirection = ref<SortInfo['defaultDirection'] | ''>('')
const sortIsDefaultSort = ref(false)
const sortUnsortedOrder = ref('')
const sortDescription = ref('')

// Master definition inline editing
const showMasterSection = ref(false)
const masterEntries = ref<MasterEntry[]>([])

// Computed: current table.column key for master lookup
const currentMasterKey = computed(() => {
  if (fieldList.value.length > 0) {
    const f = fieldList.value[0]
    if (f.table && f.column) return `${f.table}.${f.column}`
  }
  return ''
})

// Computed: existing master definition for the current field
const existingMaster = computed(() => {
  if (!currentMasterKey.value) return null
  return store.getMasterDefinition(currentMasterKey.value) || null
})

// Display type selection - default to db_direct
const displayType = ref<ElementNote['displayType']>('db_direct')

// Field form — multiple columns as tags + input for adding
const fieldList = ref<FieldInfo[]>([])
const fieldTable = ref('')
const fieldColumn = ref('')
const fieldType = ref('')
const fieldDescription = ref('')

// Format description (db_formatted)
const formatDescription = ref('')

// Calculated fields — segments of tags and text interleaved
interface CalcSegment {
  type: 'tag' | 'text'
  value: string
}
const calcSegments = ref<CalcSegment[]>([])
const calcInput = ref('')
const showCalcSuggestions = ref(false)

// 共通表示メタ情報
const sampleValue = ref('')
const decimalHandling = ref('')
const unit = ref('')
const nullDisplay = ref('')
const displayFormat = ref('')

// 保存済み計算値 (db_direct / db_formatted)
const storedCalc = ref(false)
const storedCalcLogic = ref('')
const storedCalcSources = ref<string[]>([])
const storedCalcSourceInput = ref('')
const showStoredCalcSuggestions = ref(false)
const storedCalcTiming = ref<'on_save' | 'trigger' | 'batch' | 'realtime' | ''>('')

// 条件付き表示
const conditionText = ref('')
const conditionColumn = ref('')
const hiddenBehavior = ref<'hidden' | 'disabled' | 'different_value' | 'empty' | ''>('')
const hiddenNote = ref('')
const showConditionSection = ref(false)

// Common note
const noteText = ref('')

// Source binding (kept for compatibility)
const sourceBindingType = ref<SourceBindingInfo['type'] | ''>('')
const sourceBindingSource = ref('')
const sourceBindingIsStatic = ref(false)

const isEditing = computed(() => store.editingElementId !== null)
const elementId = computed(() => store.editingElementId)
const isCsvMode = computed(() => actionType.value === 'csv_export' || actionType.value === 'csv_import')
const isEmailMode = computed(() => actionType.value === 'email')
const isWideMode = computed(() => isCsvMode.value || isEmailMode.value)

// Display type options for card selection
const displayTypeOptions: { value: NonNullable<ElementNote['displayType']>; label: string; icon: typeof Database; color: string; description: string }[] = [
  { value: 'db_direct', label: 'DBカラム (そのまま)', icon: Database, color: '#3b82f6', description: 'DBの値をそのまま表示' },
  { value: 'db_formatted', label: 'DBカラム (整形)', icon: Wand2, color: '#8b5cf6', description: 'DBの値を整形して表示' },
  { value: 'calculated', label: '計算値', icon: Calculator, color: '#f59e0b', description: '複数カラムから計算' },
  { value: 'static', label: '固定文言', icon: Type, color: '#10b981', description: 'コード内の固定テキスト' },
  { value: 'other', label: 'その他メモ', icon: MessageSquare, color: '#94a3b8', description: '自由メモ' },
]

// Load existing config when editing starts
watch(elementId, (id) => {
  if (id) {
    const config = store.getElementConfig(id)

    // Auto-detect element type from DOM
    try {
      const element = document.querySelector(id) as HTMLElement
      if (element) {
        // Detect element type and auto-select tab
        if (config?.elementType) {
          activeTab.value = config.elementType
        } else {
          activeTab.value = store.detectElementType(element)
        }

        // Read data-di-* attributes from DOM (Vite plugin injected)
        const targetEl = element.querySelector('[data-di-binding]') ||
                        (element.hasAttribute('data-di-binding') ? element : null) ||
                        element.closest('[data-di-binding]')

        if (targetEl) {
          const binding = targetEl.getAttribute('data-di-binding')
          const db = targetEl.getAttribute('data-di-db')
          const dbType = targetEl.getAttribute('data-di-db-type')
          const dbComment = targetEl.getAttribute('data-di-db-comment')

          if (binding) {
            sourceBindingSource.value = binding
            sourceBindingType.value = 'api'
            sourceBindingIsStatic.value = false
          }

          if (db) {
            const [table, column] = db.split('.')
            if (table && column) {
              fieldList.value.push({
                table,
                column,
                type: dbType || undefined,
                description: dbComment || undefined,
              })
              // Auto-set displayType to db_direct when DOM has DB data
              if (!displayType.value) {
                displayType.value = 'db_direct'
              }
            }
          }
        }
      }
    } catch (e) {
      console.warn('[DevInspector] Failed to read element:', e)
    }

    // Then, load existing config (may override DOM data if user saved custom values)
    if (config?.fieldInfoList && config.fieldInfoList.length > 0) {
      fieldList.value = config.fieldInfoList.map(f => ({ ...f }))
    } else if (config?.fieldInfo) {
      fieldList.value = [{ ...config.fieldInfo }]
    }
    fieldTable.value = ''
    fieldColumn.value = ''
    fieldType.value = ''
    fieldDescription.value = ''
    if (config?.note) {
      noteText.value = config.note.text || noteText.value
      displayType.value = config.note.displayType || displayType.value
      formatDescription.value = config.note.formatDescription || ''
      sampleValue.value = config.note.sampleValue || ''
      decimalHandling.value = config.note.decimalHandling || ''
      unit.value = config.note.unit || ''
      nullDisplay.value = config.note.nullDisplay || ''
      displayFormat.value = config.note.displayFormat || ''
      // Rebuild segments from saved calcDescription + calcSources
      rebuildCalcSegments(config.note.calcDescription || '', config.note.calcSources || [])
      // 保存済み計算値
      storedCalc.value = config.note.storedCalc || false
      storedCalcLogic.value = config.note.storedCalcLogic || ''
      storedCalcSources.value = config.note.storedCalcSources ? [...config.note.storedCalcSources] : []
      storedCalcTiming.value = (config.note.storedCalcTiming as typeof storedCalcTiming.value) || ''
      // 条件付き表示
      conditionText.value = config.note.condition || ''
      conditionColumn.value = config.note.conditionColumn || ''
      hiddenBehavior.value = (config.note.hiddenBehavior as typeof hiddenBehavior.value) || ''
      hiddenNote.value = config.note.hiddenNote || ''
      showConditionSection.value = !!(config.note.condition || config.note.conditionColumn)
    }
    if (config?.sourceBinding) {
      sourceBindingType.value = config.sourceBinding.type || sourceBindingType.value
      sourceBindingSource.value = config.sourceBinding.source || sourceBindingSource.value
      sourceBindingIsStatic.value = config.sourceBinding.isStatic || false
    }
    // Load action info
    if (config?.actionInfo) {
      actionType.value = config.actionInfo.type || ''
      actionTarget.value = config.actionInfo.target || ''
      actionMethod.value = config.actionInfo.method || ''
      actionDescription.value = config.actionInfo.description || ''
      // Load CSV spec
      if (config.actionInfo.csvSpec) {
        const spec = config.actionInfo.csvSpec
        csvColumns.value = spec.columns.map(c => ({ ...c }))
        csvEncoding.value = spec.encoding || 'UTF-8'
        csvDelimiter.value = spec.delimiter || ','
        csvHasHeaderRow.value = spec.hasHeaderRow !== false
        csvFilenamePattern.value = spec.filenamePattern || ''
        csvSortOrder.value = spec.sortOrder || ''
        csvFilterCondition.value = spec.filterCondition || ''
        csvMaxRows.value = spec.maxRows
        csvErrorHandling.value = spec.errorHandling || ''
        csvDuplicateHandling.value = spec.duplicateHandling || ''
        csvPreValidation.value = spec.preValidation || ''
        csvErrorDefs.value = spec.errorDefs ? spec.errorDefs.map(e => ({ ...e })) : []
      }
      // Load email spec
      if (config.actionInfo.emailSpec) {
        const spec = config.actionInfo.emailSpec
        emailTrigger.value = spec.trigger || ''
        emailTo.value = spec.to || ''
        emailCc.value = spec.cc || ''
        emailBcc.value = spec.bcc || ''
        emailSubject.value = spec.subject || ''
        emailBodyTemplate.value = spec.bodyTemplate || ''
        emailTemplatePath.value = spec.templatePath || ''
        emailVariables.value = spec.variables ? [...spec.variables] : []
        emailAttachments.value = spec.attachments || ''
        emailConditions.value = spec.conditions || ''
        emailErrorHandling.value = spec.errorHandling || ''
      }
    }
    // Load form info
    if (config?.formInfo) {
      formInputType.value = config.formInfo.inputType || ''
      formRequired.value = config.formInfo.required || false
      formValidation.value = config.formInfo.validation ? [...config.formInfo.validation] : []
      formPlaceholder.value = config.formInfo.placeholder || ''
      formDefaultValue.value = config.formInfo.defaultValue || ''
      formDescription.value = config.formInfo.description || ''
    }
    // Load sort spec (from actionInfo)
    if (config?.actionInfo?.sortSpec) {
      const spec = config.actionInfo.sortSpec
      sortSortable.value = spec.sortable !== false
      sortType.value = spec.sortType || ''
      sortKey.value = spec.sortKey || ''
      sortDefaultDirection.value = spec.defaultDirection || ''
      sortIsDefaultSort.value = spec.isDefaultSort || false
      sortUnsortedOrder.value = spec.unsortedOrder || ''
      sortDescription.value = spec.description || ''
    }
  } else {
    resetForm()
  }
})

function resetForm() {
  activeTab.value = 'datasource'
  displayType.value = 'db_direct'
  fieldList.value = []
  fieldTable.value = ''
  fieldColumn.value = ''
  fieldType.value = ''
  fieldDescription.value = ''
  formatDescription.value = ''
  sampleValue.value = ''
  decimalHandling.value = ''
  unit.value = ''
  nullDisplay.value = ''
  displayFormat.value = ''
  calcSegments.value = []
  calcInput.value = ''
  storedCalc.value = false
  storedCalcLogic.value = ''
  storedCalcSources.value = []
  storedCalcSourceInput.value = ''
  storedCalcTiming.value = ''
  conditionText.value = ''
  conditionColumn.value = ''
  hiddenBehavior.value = ''
  hiddenNote.value = ''
  showConditionSection.value = false
  noteText.value = ''
  sourceBindingType.value = ''
  sourceBindingSource.value = ''
  sourceBindingIsStatic.value = false
  // Action refs
  actionType.value = ''
  actionTarget.value = ''
  actionMethod.value = ''
  actionDescription.value = ''
  // CSV refs
  csvColumns.value = []
  csvEncoding.value = 'UTF-8'
  csvDelimiter.value = ','
  csvHasHeaderRow.value = true
  csvFilenamePattern.value = ''
  csvSortOrder.value = ''
  csvFilterCondition.value = ''
  csvMaxRows.value = undefined
  csvErrorHandling.value = ''
  csvDuplicateHandling.value = ''
  csvPreValidation.value = ''
  csvErrorDefs.value = []
  // Form refs
  formInputType.value = ''
  formRequired.value = false
  formValidation.value = []
  formValidationInput.value = ''
  formPlaceholder.value = ''
  formDefaultValue.value = ''
  formDescription.value = ''
  // Email refs
  emailTrigger.value = ''
  emailTo.value = ''
  emailCc.value = ''
  emailBcc.value = ''
  emailSubject.value = ''
  emailBodyTemplate.value = ''
  emailTemplatePath.value = ''
  emailVariables.value = []
  emailVariableInput.value = ''
  emailAttachments.value = ''
  emailConditions.value = ''
  emailErrorHandling.value = ''
  // Sort refs
  sortSortable.value = true
  sortType.value = ''
  sortKey.value = ''
  sortDefaultDirection.value = ''
  sortIsDefaultSort.value = false
  sortUnsortedOrder.value = ''
  sortDescription.value = ''
  // Master refs
  showMasterSection.value = false
  masterEntries.value = []
}

function close() {
  store.stopEditing()
  resetForm()
}

// Auto-detect binding from DOM element
function autoDetect() {
  if (!elementId.value) return

  try {
    const element = document.querySelector(elementId.value) as HTMLElement
    if (!element) return

    const detected = store.autoDetectElementInfo(element, elementId.value)

    if (detected.sourceBinding) {
      sourceBindingType.value = detected.sourceBinding.type || ''
      sourceBindingSource.value = detected.sourceBinding.source || ''
      sourceBindingIsStatic.value = detected.sourceBinding.isStatic || false

      if (detected.sourceBinding.isStatic && !displayType.value) {
        displayType.value = 'static'
        noteText.value = noteText.value || '固定文言'
      }
    }

    if (detected.fieldInfo) {
      fieldList.value.push({
        table: detected.fieldInfo.table || '',
        column: detected.fieldInfo.column || '',
        type: detected.fieldInfo.type || undefined,
        description: detected.fieldInfo.description || undefined,
      })
      if (!displayType.value) {
        displayType.value = 'db_direct'
      }
    }

    if (detected.note && !noteText.value) {
      noteText.value = detected.note.text || ''
    }
  } catch (e) {
    console.error('[DevInspector] Auto-detect failed:', e)
  }
}

function save() {
  if (!elementId.value) return

  // Build fieldInfoList from saved list + any current input
  const allFields = [...fieldList.value]
  if ((displayType.value === 'db_direct' || displayType.value === 'db_formatted') && fieldTable.value && fieldColumn.value) {
    allFields.push({
      table: fieldTable.value,
      column: fieldColumn.value,
      type: fieldType.value || undefined,
      description: fieldDescription.value || undefined,
    })
  }
  const fieldInfoList: FieldInfo[] | undefined = allFields.length > 0 ? allFields : undefined
  const fieldInfo: FieldInfo | undefined = allFields.length > 0 ? allFields[0] : undefined

  // Build note with displayType info
  const isDbType = displayType.value === 'db_direct' || displayType.value === 'db_formatted'
  const note: ElementNote | undefined = (displayType.value || noteText.value)
    ? {
        text: noteText.value || '',
        displayType: displayType.value,
        formatDescription: displayType.value === 'db_formatted' ? (formatDescription.value || undefined) : undefined,
        calcDescription: displayType.value === 'calculated' ? (serializeCalcDescription() || undefined) : undefined,
        calcSources: displayType.value === 'calculated' ? (extractCalcSources().length > 0 ? extractCalcSources() : undefined) : undefined,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: isDbType && storedCalc.value ? true : undefined,
        storedCalcLogic: isDbType && storedCalc.value ? (storedCalcLogic.value || undefined) : undefined,
        storedCalcSources: isDbType && storedCalc.value && storedCalcSources.value.length > 0 ? storedCalcSources.value : undefined,
        storedCalcTiming: isDbType && storedCalc.value ? (storedCalcTiming.value || undefined) as ElementNote['storedCalcTiming'] : undefined,
        sampleValue: sampleValue.value || undefined,
        decimalHandling: decimalHandling.value || undefined,
        unit: unit.value || undefined,
        nullDisplay: nullDisplay.value || undefined,
        displayFormat: displayFormat.value || undefined,
        condition: conditionText.value || undefined,
        conditionColumn: conditionColumn.value || undefined,
        hiddenBehavior: hiddenBehavior.value || undefined,
        hiddenNote: hiddenNote.value || undefined,
      }
    : undefined

  const sourceBinding: SourceBindingInfo | undefined = sourceBindingType.value
    ? {
        type: sourceBindingType.value as SourceBindingInfo['type'],
        source: sourceBindingSource.value || undefined,
        isStatic: sourceBindingIsStatic.value,
      }
    : undefined

  // Build action info
  const actionInfo: ActionInfo | undefined = (activeTab.value === 'action' && actionType.value)
    ? {
        type: actionType.value as ActionInfo['type'],
        target: actionTarget.value || undefined,
        method: actionMethod.value ? actionMethod.value as ActionInfo['method'] : undefined,
        description: actionDescription.value || undefined,
        csvSpec: buildCsvSpec(),
        emailSpec: buildEmailSpec(),
        sortSpec: buildSortSpec(),
      }
    : undefined

  // Build form info
  const formInfo: FormInfo | undefined = (activeTab.value === 'form')
    ? {
        inputType: formInputType.value || undefined,
        required: formRequired.value || undefined,
        validation: formValidation.value.length > 0 ? formValidation.value : undefined,
        placeholder: formPlaceholder.value || undefined,
        defaultValue: formDefaultValue.value || undefined,
        description: formDescription.value || undefined,
      }
    : undefined

  store.setElementConfig(elementId.value, {
    elementType: activeTab.value,
    fieldInfo,
    fieldInfoList,
    actionInfo,
    formInfo,
    note,
    sourceBinding,
  })

  // Save master entries if section was open
  if (showMasterSection.value && currentMasterKey.value) {
    saveMasterEntries()
  }

  close()
}

function deleteConfig() {
  if (!elementId.value) return
  store.deleteElementConfig(elementId.value)
  close()
}

// SQL types + Rails/Ruby types
const typeOptions = [
  'string', 'text', 'integer', 'bigint', 'float', 'decimal', 'boolean', 'date', 'datetime', 'time', 'timestamp', 'binary', 'json', 'jsonb',
  'VARCHAR', 'TEXT', 'INT', 'BIGINT', 'BOOLEAN', 'DATE', 'DATETIME', 'TIMESTAMP', 'JSON'
]

// Schema column candidates from schema.rb
const schemaSearch = ref('')
const showSchemaList = ref(false)

const filteredSchemaColumns = computed(() => {
  return store.searchSchemaColumns(schemaSearch.value).slice(0, 30)
})

function selectSchemaColumn(col: ReturnType<typeof store.searchSchemaColumns>[0]) {
  fieldList.value.push({
    table: col.table,
    column: col.column,
    type: col.type || undefined,
    description: col.comment || undefined,
  })
  showSchemaList.value = false
  schemaSearch.value = ''
}

function addFieldToList() {
  if (!fieldTable.value || !fieldColumn.value) return
  fieldList.value.push({
    table: fieldTable.value,
    column: fieldColumn.value,
    type: fieldType.value || undefined,
    description: fieldDescription.value || undefined,
  })
  fieldTable.value = ''
  fieldColumn.value = ''
  fieldType.value = ''
  fieldDescription.value = ''
}

function removeFieldFromList(index: number) {
  fieldList.value.splice(index, 1)
}

// Check if schema data is available
const hasSchemaData = computed(() => {
  return store.getSchemaColumns().length > 0
})

// Saved table/column suggestions from existing configs
const showTableSuggestions = ref(false)
const showColumnSuggestions = ref(false)

const savedTableNames = computed(() => {
  const tables = new Set<string>()
  // From saved element configs
  for (const config of Object.values(store.elementConfigs)) {
    if (config.fieldInfoList) {
      for (const f of config.fieldInfoList) {
        if (f.table) tables.add(f.table)
      }
    } else if (config.fieldInfo?.table) {
      tables.add(config.fieldInfo.table)
    }
  }
  // From schema data
  for (const col of store.getSchemaColumns()) {
    tables.add(col.table)
  }
  const sorted = [...tables].sort()
  if (!fieldTable.value) return sorted
  const q = fieldTable.value.toLowerCase()
  return sorted.filter(t => t.toLowerCase().includes(q))
})

const savedColumnNames = computed(() => {
  const columns = new Set<string>()
  // From saved element configs matching current table
  for (const config of Object.values(store.elementConfigs)) {
    if (config.fieldInfoList) {
      for (const f of config.fieldInfoList) {
        if (f.column && (!fieldTable.value || f.table === fieldTable.value)) {
          columns.add(f.column)
        }
      }
    } else if (config.fieldInfo?.column) {
      if (!fieldTable.value || config.fieldInfo.table === fieldTable.value) {
        columns.add(config.fieldInfo.column)
      }
    }
  }
  // From schema data matching current table
  for (const col of store.getSchemaColumns()) {
    if (!fieldTable.value || col.table === fieldTable.value) {
      columns.add(col.column)
    }
  }
  const sorted = [...columns].sort()
  if (!fieldColumn.value) return sorted
  const q = fieldColumn.value.toLowerCase()
  return sorted.filter(c => c.toLowerCase().includes(q))
})

function hideTableSuggestions() {
  setTimeout(() => { showTableSuggestions.value = false }, 150)
}
function hideColumnSuggestions() {
  setTimeout(() => { showColumnSuggestions.value = false }, 150)
}

function selectTableSuggestion(table: string) {
  fieldTable.value = table
  showTableSuggestions.value = false
  // Auto-fill type if schema match
  if (fieldColumn.value) {
    const match = store.getSchemaColumns().find(c => c.table === table && c.column === fieldColumn.value)
    if (match) {
      fieldType.value = match.type || ''
      fieldDescription.value = match.comment || ''
    }
  }
}

function selectColumnSuggestion(column: string) {
  fieldColumn.value = column
  showColumnSuggestions.value = false
  // Auto-fill type if schema match
  if (fieldTable.value) {
    const match = store.getSchemaColumns().find(c => c.table === fieldTable.value && c.column === column)
    if (match) {
      fieldType.value = match.type || ''
      fieldDescription.value = match.comment || ''
    }
  }
}

// Calc segments: interleaved tags (DB columns) and text
const calcDbSuggestions = computed(() => {
  const cols = new Set<string>()
  for (const config of Object.values(store.elementConfigs)) {
    if (config.fieldInfoList) {
      for (const f of config.fieldInfoList) {
        if (f.table && f.column) cols.add(`${f.table}.${f.column}`)
      }
    } else if (config.fieldInfo?.table && config.fieldInfo?.column) {
      cols.add(`${config.fieldInfo.table}.${config.fieldInfo.column}`)
    }
  }
  for (const col of store.getSchemaColumns()) {
    cols.add(col.fullName)
  }
  const sorted = [...cols].sort()
  if (!calcInput.value) return sorted
  const q = calcInput.value.trim().toLowerCase()
  // Filter only when input looks like a column name
  if (/^[a-z0-9_.]+$/i.test(q)) {
    const filtered = sorted.filter(c => c.toLowerCase().includes(q))
    if (filtered.length > 0) return filtered
  }
  // Operators or no matches → show all
  return sorted
})

function insertCalcTag(col: string) {
  // Flush any pending text before inserting tag
  if (calcInput.value.trim()) {
    calcSegments.value.push({ type: 'text', value: calcInput.value })
  }
  calcSegments.value.push({ type: 'tag', value: col })
  calcInput.value = ''
  // Keep suggestions open for selecting multiple columns
}

function removeCalcSegment(index: number) {
  calcSegments.value.splice(index, 1)
}

function onCalcKeydown(e: KeyboardEvent) {
  if (e.key === 'Backspace' && !calcInput.value && calcSegments.value.length > 0) {
    // Remove last segment; if it was text, put it back in input for editing
    const last = calcSegments.value.pop()!
    if (last.type === 'text') {
      calcInput.value = last.value
    }
  }
}

function hideCalcSuggestions() {
  setTimeout(() => { showCalcSuggestions.value = false }, 150)
}

// Stored calc source helpers
const storedCalcColumnSuggestions = computed(() => {
  const cols = new Set<string>()
  for (const col of store.getSchemaColumns()) {
    cols.add(col.fullName)
  }
  for (const config of Object.values(store.elementConfigs)) {
    if (config.fieldInfoList) {
      for (const f of config.fieldInfoList) {
        if (f.table && f.column) cols.add(`${f.table}.${f.column}`)
      }
    } else if (config.fieldInfo?.table && config.fieldInfo?.column) {
      cols.add(`${config.fieldInfo.table}.${config.fieldInfo.column}`)
    }
  }
  const sorted = [...cols].sort()
  if (!storedCalcSourceInput.value) return sorted
  const q = storedCalcSourceInput.value.trim().toLowerCase()
  return sorted.filter(c => c.toLowerCase().includes(q))
})

function hideStoredCalcSuggestions() {
  setTimeout(() => { showStoredCalcSuggestions.value = false }, 150)
}

function addStoredCalcSource() {
  const val = storedCalcSourceInput.value.trim()
  if (val && !storedCalcSources.value.includes(val)) {
    storedCalcSources.value.push(val)
  }
  storedCalcSourceInput.value = ''
}

function addStoredCalcSourceFromSuggestion(col: string) {
  if (!storedCalcSources.value.includes(col)) {
    storedCalcSources.value.push(col)
  }
  storedCalcSourceInput.value = ''
}

// Serialize segments + trailing input into description string
function serializeCalcDescription(): string {
  const parts = calcSegments.value.map(s => s.value)
  if (calcInput.value.trim()) parts.push(calcInput.value.trim())
  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

// Extract tag values as calcSources
function extractCalcSources(): string[] {
  return calcSegments.value.filter(s => s.type === 'tag').map(s => s.value)
}

// Rebuild segments from saved data
function rebuildCalcSegments(description: string, sources: string[]) {
  if (!description && sources.length === 0) {
    calcSegments.value = []
    calcInput.value = ''
    return
  }
  if (sources.length === 0) {
    // No tags, just text
    calcSegments.value = []
    calcInput.value = description
    return
  }
  // Parse description: find source references and split into segments
  const segments: CalcSegment[] = []
  let remaining = description
  for (const src of sources) {
    const idx = remaining.indexOf(src)
    if (idx >= 0) {
      const before = remaining.substring(0, idx).trim()
      if (before) segments.push({ type: 'text', value: before })
      segments.push({ type: 'tag', value: src })
      remaining = remaining.substring(idx + src.length)
    }
  }
  const tail = remaining.trim()
  if (tail) segments.push({ type: 'text', value: tail })
  // If parsing produced nothing meaningful, fallback
  if (segments.length === 0) {
    calcInput.value = description
  } else {
    calcSegments.value = segments
    calcInput.value = ''
  }
}

// Form validation tag helpers
function addFormValidation() {
  const val = formValidationInput.value.trim()
  if (val && !formValidation.value.includes(val)) {
    formValidation.value.push(val)
  }
  formValidationInput.value = ''
}

function removeFormValidation(index: number) {
  formValidation.value.splice(index, 1)
}

function onFormValidationKeydown(e: KeyboardEvent) {
  if (e.key === 'Backspace' && !formValidationInput.value && formValidation.value.length > 0) {
    formValidation.value.pop()
  }
}

// CSV column helpers
function addCsvColumn() {
  csvColumns.value.push({ name: '', dbMapping: '', type: 'string', required: false, description: '' })
}

function removeCsvColumn(index: number) {
  csvColumns.value.splice(index, 1)
}

function moveCsvColumn(index: number, direction: -1 | 1) {
  const newIndex = index + direction
  if (newIndex < 0 || newIndex >= csvColumns.value.length) return
  const temp = csvColumns.value[index]
  csvColumns.value[index] = csvColumns.value[newIndex]
  csvColumns.value[newIndex] = temp
  // Force reactivity
  csvColumns.value = [...csvColumns.value]
}

// CSV error definition helpers
function addCsvErrorDef() {
  csvErrorDefs.value.push({ condition: '', message: '', column: '', severity: 'error' })
}

function removeCsvErrorDef(index: number) {
  csvErrorDefs.value.splice(index, 1)
}

// CSV column name options for error def dropdown
const csvColumnNames = computed(() => {
  return csvColumns.value.filter(c => c.name).map(c => c.name)
})

function buildCsvSpec(): CsvSpec | undefined {
  if (actionType.value !== 'csv_export' && actionType.value !== 'csv_import') return undefined
  const validErrorDefs = csvErrorDefs.value.filter(e => e.condition || e.message)
  return {
    columns: csvColumns.value.filter(c => c.name),
    encoding: csvEncoding.value || undefined,
    delimiter: csvDelimiter.value || undefined,
    hasHeaderRow: csvHasHeaderRow.value,
    filenamePattern: csvFilenamePattern.value || undefined,
    sortOrder: csvSortOrder.value || undefined,
    filterCondition: csvFilterCondition.value || undefined,
    maxRows: csvMaxRows.value || undefined,
    errorHandling: (csvErrorHandling.value as CsvSpec['errorHandling']) || undefined,
    duplicateHandling: (csvDuplicateHandling.value as CsvSpec['duplicateHandling']) || undefined,
    preValidation: csvPreValidation.value || undefined,
    errorDefs: validErrorDefs.length > 0 ? validErrorDefs : undefined,
  }
}

// Email spec helpers
function buildEmailSpec(): EmailSpec | undefined {
  if (actionType.value !== 'email') return undefined
  return {
    trigger: emailTrigger.value || '',
    to: emailTo.value || '',
    cc: emailCc.value || undefined,
    bcc: emailBcc.value || undefined,
    subject: emailSubject.value || '',
    bodyTemplate: emailBodyTemplate.value || undefined,
    templatePath: emailTemplatePath.value || undefined,
    variables: emailVariables.value.length > 0 ? emailVariables.value : undefined,
    attachments: emailAttachments.value || undefined,
    conditions: emailConditions.value || undefined,
    errorHandling: emailErrorHandling.value || undefined,
  }
}

function addEmailVariable() {
  const val = emailVariableInput.value.trim()
  if (val && !emailVariables.value.includes(val)) {
    emailVariables.value.push(val)
  }
  emailVariableInput.value = ''
}

function removeEmailVariable(index: number) {
  emailVariables.value.splice(index, 1)
}

function onEmailVariableKeydown(e: KeyboardEvent) {
  if (e.key === 'Backspace' && !emailVariableInput.value && emailVariables.value.length > 0) {
    emailVariables.value.pop()
  }
}

function buildSortSpec(): SortInfo | undefined {
  if (actionType.value !== 'sort') return undefined
  return {
    sortable: sortSortable.value,
    sortType: sortType.value ? sortType.value as SortInfo['sortType'] : undefined,
    sortKey: sortKey.value || undefined,
    defaultDirection: sortDefaultDirection.value ? sortDefaultDirection.value as SortInfo['defaultDirection'] : undefined,
    isDefaultSort: sortIsDefaultSort.value || undefined,
    unsortedOrder: sortUnsortedOrder.value || undefined,
    description: sortDescription.value || undefined,
  }
}

// Master definition helpers
watch(currentMasterKey, (key) => {
  if (key) {
    const def = store.getMasterDefinition(key)
    if (def) {
      masterEntries.value = def.entries.map(e => ({ ...e }))
      showMasterSection.value = true
    } else {
      masterEntries.value = []
      showMasterSection.value = false
    }
  } else {
    masterEntries.value = []
    showMasterSection.value = false
  }
})

function toggleMasterSection() {
  showMasterSection.value = !showMasterSection.value
  if (showMasterSection.value && masterEntries.value.length === 0) {
    masterEntries.value.push({ value: '', label: '' })
  }
}

function addMasterEntry() {
  masterEntries.value.push({ value: '', label: '' })
}

function removeMasterEntry(index: number) {
  masterEntries.value.splice(index, 1)
}

function saveMasterEntries() {
  if (!currentMasterKey.value) return
  const [table, column] = currentMasterKey.value.split('.')
  if (!table || !column) return

  // Filter out empty entries
  const validEntries = masterEntries.value.filter(e => e.value || e.label)
  if (validEntries.length === 0) {
    // Delete master if all entries removed
    store.deleteMasterDefinition(currentMasterKey.value)
    return
  }

  const existing = store.getMasterDefinition(currentMasterKey.value)
  store.setMasterDefinition({
    id: currentMasterKey.value,
    table,
    column,
    name: existing?.name || column,
    columnType: existing?.columnType || fieldList.value[0]?.type,
    description: existing?.description,
    entries: validEntries,
    updatedAt: new Date().toISOString(),
  })
}

</script>

<template>
  <Teleport to="body">
    <div v-if="isEditing" class="di-editor-overlay" @click.self="close" data-dev-inspector>
      <div class="di-editor-modal" :class="{ 'di-editor-modal-wide': isWideMode }">
        <!-- Header -->
        <div class="di-editor-header">
          <h3>要素情報を編集</h3>
          <div class="di-header-actions">
            <button @click="autoDetect" class="di-btn-auto" title="自動検出">
              <Wand2 style="width: 16px; height: 16px;" />
            </button>
            <button @click="close" class="di-editor-close">
              <X style="width: 20px; height: 20px;" />
            </button>
          </div>
        </div>

        <!-- Source binding indicator -->
        <div v-if="sourceBindingIsStatic" class="di-static-indicator">
          <span class="di-static-badge">固定文言</span>
          <span class="di-static-hint">このテキストはソースコードに直接記述されています</span>
        </div>
        <div v-else-if="sourceBindingType" class="di-binding-indicator">
          <span class="di-binding-badge" :class="'di-binding-' + sourceBindingType">{{ sourceBindingType }}</span>
          <span v-if="sourceBindingSource" class="di-binding-source">{{ sourceBindingSource }}</span>
        </div>

        <!-- Tabs -->
        <div class="di-editor-tabs">
          <button
            @click="activeTab = 'datasource'"
            class="di-editor-tab"
            :class="{ 'di-editor-tab-active': activeTab === 'datasource' }"
          >
            <Database style="width: 14px; height: 14px;" />
            データソース
          </button>
          <button
            @click="activeTab = 'action'"
            class="di-editor-tab"
            :class="{ 'di-editor-tab-active': activeTab === 'action' }"
          >
            <Zap style="width: 14px; height: 14px;" />
            アクション
          </button>
          <button
            @click="activeTab = 'form'"
            class="di-editor-tab"
            :class="{ 'di-editor-tab-active': activeTab === 'form' }"
          >
            <FormInput style="width: 14px; height: 14px;" />
            フォーム
          </button>
        </div>

        <!-- Content -->
        <div class="di-editor-content">
          <!-- ==================== データソースタブ ==================== -->
          <template v-if="activeTab === 'datasource'">
            <!-- Step 1: Display Type Selection -->
            <div class="di-form-group">
              <label class="di-form-label">表示タイプ</label>
              <div class="di-display-type-grid">
                <button
                  v-for="opt in displayTypeOptions"
                  :key="opt.value"
                  @click="displayType = opt.value"
                  class="di-display-type-card"
                  :class="{ 'di-display-type-active': displayType === opt.value }"
                  :style="displayType === opt.value ? { borderColor: opt.color, background: opt.color + '18' } : {}"
                >
                  <component :is="opt.icon" style="width: 20px; height: 20px;" :style="{ color: displayType === opt.value ? opt.color : '#64748b' }" />
                  <span class="di-display-type-label" :style="{ color: displayType === opt.value ? opt.color : '#94a3b8' }">{{ opt.label }}</span>
                  <span class="di-display-type-desc">{{ opt.description }}</span>
                </button>
              </div>
            </div>

            <!-- Step 2: Type-specific forms -->

            <!-- db_direct / db_formatted: Schema selector + manual input -->
            <template v-if="displayType === 'db_direct' || displayType === 'db_formatted'">
              <!-- Added columns as tags -->
              <div v-if="fieldList.length > 0" class="di-field-tags">
                <label class="di-form-label">登録済みカラム</label>
                <div class="di-field-tags-list">
                  <div v-for="(field, i) in fieldList" :key="i" class="di-field-tag">
                    <span class="di-field-tag-name">{{ field.table }}.{{ field.column }}</span>
                    <span v-if="field.type" class="di-field-tag-type">{{ field.type }}</span>
                    <button @click="removeFieldFromList(i)" class="di-field-tag-remove">&times;</button>
                  </div>
                </div>
              </div>

              <!-- Schema Column Selector from schema.rb -->
              <div v-if="hasSchemaData" class="di-binding-selector">
                <div class="di-form-group">
                  <label class="di-form-label">
                    <Database style="width: 12px; height: 12px; display: inline; vertical-align: middle;" />
                    schema.rb から選択
                  </label>
                  <div class="di-binding-search-wrapper">
                    <input
                      v-model="schemaSearch"
                      @focus="showSchemaList = true"
                      type="text"
                      placeholder="テーブル.カラムを検索... (例: users, email)"
                      class="di-input di-binding-search"
                    />
                    <button
                      v-if="schemaSearch"
                      @click="schemaSearch = ''; showSchemaList = false"
                      class="di-binding-clear"
                    >
                      <X style="width: 14px; height: 14px;" />
                    </button>
                  </div>
                  <div v-if="showSchemaList && filteredSchemaColumns.length > 0" class="di-binding-list">
                    <button
                      v-for="col in filteredSchemaColumns"
                      :key="col.fullName"
                      @click="selectSchemaColumn(col)"
                      class="di-binding-item has-db"
                    >
                      <div class="di-binding-item-main">
                        <span class="di-binding-name">{{ col.fullName }}</span>
                        <span class="di-binding-type">{{ col.type }}</span>
                      </div>
                      <span v-if="col.comment" class="di-binding-component">{{ col.comment }}</span>
                    </button>
                  </div>
                  <div v-else-if="showSchemaList && schemaSearch && filteredSchemaColumns.length === 0" class="di-binding-empty">
                    該当するカラムが見つかりません
                  </div>
                </div>
              </div>

              <div v-if="hasSchemaData" class="di-form-divider">
                <span>または手動入力</span>
              </div>

              <div class="di-form-row">
                <div class="di-form-group di-suggest-wrapper">
                  <label class="di-form-label">テーブル名 *</label>
                  <input
                    v-model="fieldTable"
                    @focus="showTableSuggestions = true"
                    @blur="hideTableSuggestions()"
                    type="text"
                    placeholder="users"
                    class="di-input"
                    autocomplete="off"
                  />
                  <div v-if="showTableSuggestions && savedTableNames.length > 0" class="di-suggest-list">
                    <button
                      v-for="t in savedTableNames.slice(0, 10)"
                      :key="t"
                      @mousedown.prevent="selectTableSuggestion(t)"
                      class="di-suggest-item"
                    >{{ t }}</button>
                  </div>
                </div>
                <div class="di-form-group di-suggest-wrapper">
                  <label class="di-form-label">カラム名 *</label>
                  <input
                    v-model="fieldColumn"
                    @focus="showColumnSuggestions = true"
                    @blur="hideColumnSuggestions()"
                    type="text"
                    placeholder="name"
                    class="di-input"
                    autocomplete="off"
                  />
                  <div v-if="showColumnSuggestions && savedColumnNames.length > 0" class="di-suggest-list">
                    <button
                      v-for="c in savedColumnNames.slice(0, 10)"
                      :key="c"
                      @mousedown.prevent="selectColumnSuggestion(c)"
                      class="di-suggest-item"
                    >{{ c }}</button>
                  </div>
                </div>
              </div>

              <div class="di-form-group">
                <label class="di-form-label">データ型</label>
                <select v-model="fieldType" class="di-select">
                  <option value="">選択してください</option>
                  <option v-for="type in typeOptions" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>

              <button @click="addFieldToList" class="di-btn-add-field" :disabled="!fieldTable || !fieldColumn">
                + カラムを追加
              </button>

              <!-- Master definition inline (optional) -->
              <div v-if="currentMasterKey" class="di-master-inline">
                <button @click="toggleMasterSection" class="di-btn-condition-toggle" :class="{ 'di-condition-active': showMasterSection }">
                  <List style="width: 14px; height: 14px;" />
                  マスタ値を定義
                  <span v-if="existingMaster" class="di-condition-badge" style="background: #a78bfa;">{{ existingMaster.entries.length }}件</span>
                </button>

                <div v-if="showMasterSection" class="di-master-inline-section">
                  <div v-if="masterEntries.length > 0" class="di-master-entries-table">
                    <div class="di-master-entries-header">
                      <span class="di-master-col-val">値</span>
                      <span class="di-master-col-lbl">ラベル</span>
                      <span class="di-master-col-color">色</span>
                      <span class="di-master-col-act"></span>
                    </div>
                    <div v-for="(entry, idx) in masterEntries" :key="idx" class="di-master-entry-row">
                      <input v-model="entry.value" placeholder="1" class="di-master-input di-master-col-val" />
                      <input v-model="entry.label" placeholder="受付" class="di-master-input di-master-col-lbl" />
                      <input v-model="entry.color" type="color" class="di-master-color-input" />
                      <button @click="removeMasterEntry(idx)" class="di-master-entry-remove">&times;</button>
                    </div>
                  </div>
                  <button @click="addMasterEntry" class="di-btn-add-field" style="margin-top: 4px;">
                    + 値を追加
                  </button>
                </div>
              </div>

              <!-- db_formatted only: format description -->
              <div v-if="displayType === 'db_formatted'" class="di-form-group">
                <label class="di-form-label">整形方法</label>
                <textarea v-model="formatDescription" rows="2" placeholder="YYYY年MM月DD日 に整形、姓 + 名 で結合 など" class="di-textarea"></textarea>
              </div>

              <!-- Stored calculation toggle -->
              <div class="di-stored-calc-toggle">
                <button @click="storedCalc = !storedCalc" class="di-btn-condition-toggle" :class="{ 'di-condition-active': storedCalc }">
                  <Calculator style="width: 14px; height: 14px;" />
                  このカラムは計算値を保存している
                  <span v-if="storedCalc" class="di-condition-badge">設定あり</span>
                </button>
              </div>

              <template v-if="storedCalc">
                <div class="di-stored-calc-section">
                  <div class="di-form-group">
                    <label class="di-form-label">計算ロジック</label>
                    <textarea v-model="storedCalcLogic" rows="2" placeholder="SUM(order_items.price * quantity)、unit_price × quantity など" class="di-textarea di-textarea-mono"></textarea>
                  </div>

                  <div class="di-form-group di-suggest-wrapper">
                    <label class="di-form-label">元データ（テーブル.カラム）</label>
                    <div class="di-stored-calc-tags">
                      <span v-for="(src, i) in storedCalcSources" :key="i" class="di-calc-tag">
                        {{ src }}
                        <button @click.stop="storedCalcSources.splice(i, 1)" class="di-calc-tag-remove">&times;</button>
                      </span>
                      <input
                        v-model="storedCalcSourceInput"
                        @focus="showStoredCalcSuggestions = true"
                        @blur="hideStoredCalcSuggestions"
                        @keydown.enter.prevent="addStoredCalcSource()"
                        type="text"
                        placeholder="order_items.price"
                        class="di-calc-tags-field"
                        autocomplete="off"
                      />
                    </div>
                    <div v-if="showStoredCalcSuggestions && storedCalcColumnSuggestions.length > 0" class="di-suggest-list">
                      <button
                        v-for="col in storedCalcColumnSuggestions.slice(0, 12)"
                        :key="col"
                        @mousedown.prevent="addStoredCalcSourceFromSuggestion(col)"
                        class="di-suggest-item"
                      >
                        <Database style="width: 10px; height: 10px; opacity: 0.5; flex-shrink: 0;" />
                        {{ col }}
                      </button>
                    </div>
                    <span class="di-form-hint">Enter で追加、またはドロップダウンから選択</span>
                  </div>

                  <div class="di-form-group">
                    <label class="di-form-label">計算タイミング</label>
                    <select v-model="storedCalcTiming" class="di-select">
                      <option value="">未指定</option>
                      <option value="on_save">保存時（アプリ側で計算）</option>
                      <option value="trigger">DBトリガー</option>
                      <option value="batch">バッチ（定期実行）</option>
                      <option value="realtime">リアルタイム（ビュー/マテビュー）</option>
                    </select>
                  </div>
                </div>
              </template>
            </template>

            <!-- calculated: inline tag + text input -->
            <template v-if="displayType === 'calculated'">
              <div class="di-form-group di-suggest-wrapper">
                <label class="di-form-label">計算ロジック</label>
                <div class="di-calc-tags-input" @click="($refs.calcInputEl as HTMLInputElement)?.focus()">
                  <template v-for="(seg, i) in calcSegments" :key="i">
                    <span v-if="seg.type === 'tag'" class="di-calc-tag">
                      {{ seg.value }}
                      <button @click.stop="removeCalcSegment(i)" class="di-calc-tag-remove">&times;</button>
                    </span>
                    <span v-else class="di-calc-text">{{ seg.value }}</span>
                  </template>
                  <input
                    ref="calcInputEl"
                    v-model="calcInput"
                    @focus="showCalcSuggestions = true"
                    @blur="hideCalcSuggestions()"
                    @keydown="onCalcKeydown"
                    type="text"
                    :placeholder="calcSegments.length === 0 ? 'カラムを選択 or 自由入力 (例: × 2)' : ''"
                    class="di-calc-tags-field"
                    autocomplete="off"
                  />
                </div>
                <div v-if="showCalcSuggestions && calcDbSuggestions.length > 0" class="di-suggest-list">
                  <button
                    v-for="col in calcDbSuggestions.slice(0, 12)"
                    :key="col"
                    @mousedown.prevent="insertCalcTag(col)"
                    class="di-suggest-item"
                  >
                    <Database style="width: 10px; height: 10px; opacity: 0.5; flex-shrink: 0;" />
                    {{ col }}
                  </button>
                </div>
                <span class="di-form-hint">DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力</span>
              </div>
            </template>

            <!-- static / other: free text only -->
            <template v-if="displayType === 'static' || displayType === 'other'">
              <div class="di-form-group">
                <label class="di-form-label">メモ</label>
                <textarea v-model="noteText" rows="4" placeholder="この要素についてのメモ..." class="di-textarea"></textarea>
              </div>
            </template>

            <!-- 条件付き表示 (all display types except other) -->
            <template v-if="displayType && displayType !== 'other'">
              <div class="di-condition-toggle">
                <button @click="showConditionSection = !showConditionSection" class="di-btn-condition-toggle" :class="{ 'di-condition-active': showConditionSection || conditionText }">
                  <ShieldQuestion style="width: 14px; height: 14px;" />
                  条件付き表示
                  <span v-if="conditionText" class="di-condition-badge">設定あり</span>
                </button>
              </div>

              <template v-if="showConditionSection">
                <div class="di-condition-section">
                  <div class="di-form-group">
                    <label class="di-form-label">表示条件</label>
                    <input v-model="conditionText" type="text" placeholder="管理者ロール時のみ / ステータスがactiveの時" class="di-input" />
                  </div>

                  <div class="di-form-group di-suggest-wrapper">
                    <label class="di-form-label">判定カラム</label>
                    <input
                      v-model="conditionColumn"
                      type="text"
                      placeholder="users.role / orders.status"
                      class="di-input di-input-mono"
                    />
                  </div>

                  <div class="di-form-row">
                    <div class="di-form-group">
                      <label class="di-form-label">条件不一致時の挙動</label>
                      <select v-model="hiddenBehavior" class="di-select">
                        <option value="">未指定</option>
                        <option value="hidden">非表示</option>
                        <option value="disabled">無効化 (グレーアウト)</option>
                        <option value="different_value">別の値を表示</option>
                        <option value="empty">空欄</option>
                      </select>
                    </div>
                  </div>

                  <div v-if="hiddenBehavior === 'different_value'" class="di-form-group">
                    <label class="di-form-label">代わりに表示する値</label>
                    <input v-model="hiddenNote" type="text" placeholder="「権限がありません」/ 「***」" class="di-input" />
                  </div>
                </div>
              </template>
            </template>

            <!-- Step 3: 表示メタ情報 (db_direct, db_formatted, calculated 共通) -->
            <template v-if="displayType === 'db_direct' || displayType === 'db_formatted' || displayType === 'calculated'">
              <div class="di-form-divider">
                <span>表示の詳細</span>
              </div>

              <div class="di-form-row">
                <div class="di-form-group">
                  <label class="di-form-label">サンプル値</label>
                  <input v-model="sampleValue" type="text" placeholder="12,500 / 田中太郎" class="di-input di-input-mono" />
                </div>
                <div class="di-form-group" style="flex: 0 0 80px;">
                  <label class="di-form-label">単位</label>
                  <input v-model="unit" type="text" placeholder="円 / %" class="di-input" />
                </div>
              </div>

              <div class="di-form-row">
                <div class="di-form-group">
                  <label class="di-form-label">小数点の扱い</label>
                  <select v-model="decimalHandling" class="di-select">
                    <option value="">未指定</option>
                    <option value="round">四捨五入</option>
                    <option value="floor">切り捨て</option>
                    <option value="ceil">切り上げ</option>
                    <option value="decimal_1">小数第1位まで</option>
                    <option value="decimal_2">小数第2位まで</option>
                    <option value="integer">整数のみ</option>
                  </select>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">NULL/ゼロ時</label>
                  <input v-model="nullDisplay" type="text" placeholder="- / 0 / 非表示 / N/A" class="di-input" />
                </div>
              </div>

              <div class="di-form-group">
                <label class="di-form-label">表示フォーマット</label>
                <input v-model="displayFormat" type="text" placeholder="カンマ区切り / ¥記号付き / YYYY/MM/DD" class="di-input" />
              </div>

              <div class="di-form-group">
                <label class="di-form-label">補足メモ（任意）</label>
                <textarea v-model="noteText" rows="2" placeholder="補足情報があれば..." class="di-textarea"></textarea>
              </div>
            </template>
          </template>

          <!-- ==================== アクションタブ ==================== -->
          <template v-if="activeTab === 'action'">
            <div class="di-form-group">
              <label class="di-form-label">アクションタイプ</label>
              <select v-model="actionType" class="di-select">
                <option value="">選択してください</option>
                <option value="navigate">画面遷移</option>
                <option value="api">API呼び出し</option>
                <option value="modal">モーダル表示</option>
                <option value="emit">イベント発火</option>
                <option value="function">関数実行</option>
                <option value="csv_export">CSV出力</option>
                <option value="csv_import">CSV取込</option>
                <option value="email">メール送信</option>
                <option value="sort">ソート</option>
              </select>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">ターゲット</label>
              <input
                v-model="actionTarget"
                type="text"
                :placeholder="actionType === 'navigate' ? '/tasks' : actionType === 'api' ? '/api/users' : actionType === 'modal' ? 'confirm-dialog' : actionType === 'csv_export' ? '/api/export/users' : actionType === 'csv_import' ? '/api/import/users' : ''"
                class="di-input di-input-mono"
              />
            </div>

            <div v-if="actionType === 'api'" class="di-form-group">
              <label class="di-form-label">HTTPメソッド</label>
              <select v-model="actionMethod" class="di-select">
                <option value="">選択してください</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
                <option value="PATCH">PATCH</option>
              </select>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">説明</label>
              <textarea v-model="actionDescription" rows="3" placeholder="このアクションの説明..." class="di-textarea"></textarea>
            </div>

            <!-- ==================== CSV仕様セクション ==================== -->
            <template v-if="actionType === 'csv_export' || actionType === 'csv_import'">
              <div class="di-form-divider">
                <span><FileSpreadsheet style="width: 12px; height: 12px; display: inline; vertical-align: middle;" /> CSV仕様</span>
              </div>

              <!-- ファイル設定 -->
              <div class="di-csv-file-settings">
                <label class="di-form-label">ファイル設定</label>
                <div class="di-form-row">
                  <div class="di-form-group">
                    <label class="di-form-label">エンコーディング</label>
                    <select v-model="csvEncoding" class="di-select">
                      <option value="UTF-8">UTF-8</option>
                      <option value="Shift_JIS">Shift_JIS</option>
                      <option value="EUC-JP">EUC-JP</option>
                      <option value="UTF-8 BOM">UTF-8 BOM</option>
                    </select>
                  </div>
                  <div class="di-form-group">
                    <label class="di-form-label">区切り文字</label>
                    <select v-model="csvDelimiter" class="di-select">
                      <option value=",">カンマ (,)</option>
                      <option value="&#9;">タブ</option>
                      <option value="|">パイプ (|)</option>
                    </select>
                  </div>
                </div>
                <div class="di-form-row" style="align-items: center;">
                  <label class="di-csv-checkbox-label">
                    <input type="checkbox" v-model="csvHasHeaderRow" class="di-checkbox" />
                    ヘッダー行あり
                  </label>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">ファイル名パターン</label>
                  <input v-model="csvFilenamePattern" type="text" placeholder="users_{YYYYMMDD}.csv" class="di-input di-input-mono" />
                </div>
              </div>

              <!-- CSV列定義 -->
              <div class="di-csv-columns-section">
                <label class="di-form-label">CSV列定義</label>
                <div v-if="csvColumns.length > 0" class="di-csv-columns-table">
                  <div class="di-csv-columns-header">
                    <span class="di-csv-col-no">No</span>
                    <span class="di-csv-col-name">項目名</span>
                    <span class="di-csv-col-db">DBマッピング</span>
                    <span class="di-csv-col-proc">加工</span>
                    <span class="di-csv-col-type">型</span>
                    <span class="di-csv-col-req">必須</span>
                    <span class="di-csv-col-desc">説明</span>
                    <span class="di-csv-col-act"></span>
                  </div>
                  <div v-for="(col, idx) in csvColumns" :key="idx" class="di-csv-column-row">
                    <span class="di-csv-col-no">{{ idx + 1 }}</span>
                    <input v-model="col.name" placeholder="項目名" class="di-csv-input di-csv-col-name" />
                    <input v-model="col.dbMapping" placeholder="table.col" class="di-csv-input di-csv-col-db" />
                    <input v-model="col.processing" placeholder="姓+名, IF..." class="di-csv-input di-csv-col-proc" />
                    <select v-model="col.type" class="di-csv-select di-csv-col-type">
                      <option value="">-</option>
                      <option value="string">string</option>
                      <option value="integer">integer</option>
                      <option value="decimal">decimal</option>
                      <option value="date">date</option>
                      <option value="datetime">datetime</option>
                      <option value="boolean">boolean</option>
                    </select>
                    <label class="di-csv-col-req di-csv-checkbox-center">
                      <input type="checkbox" v-model="col.required" class="di-checkbox" />
                    </label>
                    <input v-model="col.description" placeholder="備考" class="di-csv-input di-csv-col-desc" />
                    <div class="di-csv-col-act">
                      <button @click="moveCsvColumn(idx, -1)" :disabled="idx === 0" class="di-csv-move-btn" title="上へ">
                        <ChevronUp style="width: 12px; height: 12px;" />
                      </button>
                      <button @click="moveCsvColumn(idx, 1)" :disabled="idx === csvColumns.length - 1" class="di-csv-move-btn" title="下へ">
                        <ChevronDown style="width: 12px; height: 12px;" />
                      </button>
                      <button @click="removeCsvColumn(idx)" class="di-csv-remove-btn" title="削除">&times;</button>
                    </div>
                  </div>
                </div>
                <button @click="addCsvColumn" class="di-btn-add-field">
                  + 列を追加
                </button>
              </div>

              <!-- 出力オプション (csv_exportのみ) -->
              <template v-if="actionType === 'csv_export'">
                <div class="di-form-divider">
                  <span>出力オプション</span>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">ソート順</label>
                  <input v-model="csvSortOrder" type="text" placeholder="created_at DESC" class="di-input di-input-mono" />
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">抽出条件</label>
                  <input v-model="csvFilterCondition" type="text" placeholder="status = 'active'" class="di-input di-input-mono" />
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">最大行数</label>
                  <input v-model.number="csvMaxRows" type="number" placeholder="10000" class="di-input" />
                </div>
              </template>

              <!-- 取込オプション (csv_importのみ) -->
              <template v-if="actionType === 'csv_import'">
                <div class="di-form-divider">
                  <span>取込オプション</span>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">エラー処理</label>
                  <select v-model="csvErrorHandling" class="di-select">
                    <option value="">未指定</option>
                    <option value="stop_on_first">最初のエラーで停止</option>
                    <option value="skip_and_continue">スキップして続行</option>
                    <option value="collect_all">全エラー収集</option>
                  </select>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">重複処理</label>
                  <select v-model="csvDuplicateHandling" class="di-select">
                    <option value="">未指定</option>
                    <option value="skip">スキップ</option>
                    <option value="overwrite">上書き</option>
                    <option value="error">エラー</option>
                  </select>
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">事前バリデーション</label>
                  <textarea v-model="csvPreValidation" rows="2" placeholder="取込前のチェック内容..." class="di-textarea"></textarea>
                </div>
              </template>

              <!-- エラー定義 (csv_export / csv_import 共通) -->
              <div class="di-form-divider">
                <span>エラー定義</span>
              </div>
              <div class="di-csv-error-section">
                <div v-if="csvErrorDefs.length > 0" class="di-csv-columns-table">
                  <div class="di-csv-columns-header">
                    <span class="di-csv-err-col">対象列</span>
                    <span class="di-csv-err-cond">エラー条件</span>
                    <span class="di-csv-err-msg">エラーメッセージ</span>
                    <span class="di-csv-err-sev">種別</span>
                    <span class="di-csv-err-act"></span>
                  </div>
                  <div v-for="(errDef, idx) in csvErrorDefs" :key="idx" class="di-csv-column-row">
                    <select v-model="errDef.column" class="di-csv-select di-csv-err-col">
                      <option value="">（全体）</option>
                      <option v-for="colName in csvColumnNames" :key="colName" :value="colName">{{ colName }}</option>
                    </select>
                    <input v-model="errDef.condition" placeholder="必須項目が空" class="di-csv-input di-csv-err-cond" />
                    <input v-model="errDef.message" placeholder="○○は必須です" class="di-csv-input di-csv-err-msg" />
                    <select v-model="errDef.severity" class="di-csv-select di-csv-err-sev">
                      <option value="error">エラー</option>
                      <option value="warning">警告</option>
                    </select>
                    <button @click="removeCsvErrorDef(idx)" class="di-csv-remove-btn" title="削除">&times;</button>
                  </div>
                </div>
                <button @click="addCsvErrorDef" class="di-btn-add-field">
                  + エラー定義を追加
                </button>
              </div>
            </template>

            <!-- ==================== メール送信仕様セクション ==================== -->
            <template v-if="actionType === 'email'">
              <div class="di-form-divider">
                <span><Mail style="width: 12px; height: 12px; display: inline; vertical-align: middle;" /> メール基本設定</span>
              </div>

              <div class="di-form-row">
                <div class="di-form-group">
                  <label class="di-form-label">トリガー *</label>
                  <input v-model="emailTrigger" type="text" placeholder="注文確定時、ボタンクリック" class="di-input" />
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">宛先 *</label>
                  <input v-model="emailTo" type="text" placeholder="ユーザーメール、管理者固定" class="di-input" />
                </div>
              </div>

              <div class="di-form-row">
                <div class="di-form-group">
                  <label class="di-form-label">CC</label>
                  <input v-model="emailCc" type="text" placeholder="CC宛先" class="di-input" />
                </div>
                <div class="di-form-group">
                  <label class="di-form-label">BCC</label>
                  <input v-model="emailBcc" type="text" placeholder="BCC宛先" class="di-input" />
                </div>
              </div>

              <div class="di-form-group">
                <label class="di-form-label">件名テンプレート *</label>
                <input v-model="emailSubject" type="text" placeholder="【注文確認】ご注文番号 {orderNumber}" class="di-input" />
              </div>

              <div class="di-form-group">
                <label class="di-form-label">本文テンプレート概要</label>
                <textarea v-model="emailBodyTemplate" rows="3" placeholder="本文の概要を記述..." class="di-textarea"></textarea>
              </div>

              <div class="di-form-group">
                <label class="di-form-label">テンプレートファイルパス</label>
                <input v-model="emailTemplatePath" type="text" placeholder="resources/mail/order_confirm.blade.php" class="di-input di-input-mono" />
              </div>

              <div class="di-form-divider">
                <span>差し込み変数</span>
              </div>

              <div class="di-form-group">
                <div class="di-email-variables-input">
                  <span v-for="(v, i) in emailVariables" :key="i" class="di-calc-tag">
                    {{ v }}
                    <button @click.stop="removeEmailVariable(i)" class="di-calc-tag-remove">&times;</button>
                  </span>
                  <input
                    v-model="emailVariableInput"
                    @keydown.enter.prevent="addEmailVariable()"
                    @keydown="onEmailVariableKeydown"
                    type="text"
                    placeholder="変数名を入力してEnter (例: userName)"
                    class="di-calc-tags-field"
                    autocomplete="off"
                  />
                </div>
                <span class="di-form-hint">Enter で追加</span>
              </div>

              <div class="di-form-divider">
                <span>オプション</span>
              </div>

              <div class="di-form-group">
                <label class="di-form-label">添付ファイル</label>
                <input v-model="emailAttachments" type="text" placeholder="添付ファイルの説明" class="di-input" />
              </div>

              <div class="di-form-group">
                <label class="di-form-label">送信条件</label>
                <input v-model="emailConditions" type="text" placeholder="メール送信設定がONの場合" class="di-input" />
              </div>

              <div class="di-form-group">
                <label class="di-form-label">エラー処理</label>
                <input v-model="emailErrorHandling" type="text" placeholder="キューに入れてリトライ" class="di-input" />
              </div>
            </template>

            <!-- ==================== ソート定義セクション ==================== -->
            <template v-if="actionType === 'sort'">
              <div class="di-form-divider">
                <span><ArrowUpDown style="width: 12px; height: 12px; display: inline; vertical-align: middle;" /> ソート設定</span>
              </div>

              <div class="di-form-group">
                <label class="di-form-label" style="display: flex; align-items: center; gap: 8px;">
                  <input type="checkbox" v-model="sortSortable" class="di-checkbox" />
                  このカラムはソート可能
                </label>
              </div>

              <template v-if="sortSortable">
                <div class="di-form-row">
                  <div class="di-form-group">
                    <label class="di-form-label">データ型</label>
                    <select v-model="sortType" class="di-select">
                      <option value="">未指定</option>
                      <option value="string">文字列</option>
                      <option value="number">数値</option>
                      <option value="date">日付</option>
                      <option value="custom">カスタム</option>
                    </select>
                  </div>
                  <div class="di-form-group">
                    <label class="di-form-label">デフォルト方向</label>
                    <select v-model="sortDefaultDirection" class="di-select">
                      <option value="">未指定</option>
                      <option value="asc">昇順 (A→Z, 1→9)</option>
                      <option value="desc">降順 (Z→A, 9→1)</option>
                    </select>
                  </div>
                </div>

                <div class="di-form-group">
                  <label class="di-form-label">ソートキー (DBカラム/APIフィールド)</label>
                  <input v-model="sortKey" type="text" placeholder="users.name / created_at" class="di-input di-input-mono" />
                </div>

                <div class="di-form-group">
                  <label class="di-form-label" style="display: flex; align-items: center; gap: 8px;">
                    <input type="checkbox" v-model="sortIsDefaultSort" class="di-checkbox" />
                    初期表示時のデフォルトソート
                  </label>
                </div>
              </template>

              <div class="di-form-group">
                <label class="di-form-label">未ソート時の並び順</label>
                <input v-model="sortUnsortedOrder" type="text" placeholder="ID昇順 / 登録日降順 / APIレスポンス順" class="di-input" />
              </div>

              <div class="di-form-group">
                <label class="di-form-label">補足</label>
                <input v-model="sortDescription" type="text" placeholder="サーバーサイドソート / ページネーション時はリセット" class="di-input" />
              </div>
            </template>

            <div class="di-form-group">
              <label class="di-form-label">補足メモ（任意）</label>
              <textarea v-model="noteText" rows="2" placeholder="補足情報があれば..." class="di-textarea"></textarea>
            </div>
          </template>

          <!-- ==================== フォームタブ ==================== -->
          <template v-if="activeTab === 'form'">
            <div class="di-form-group">
              <label class="di-form-label">入力タイプ</label>
              <select v-model="formInputType" class="di-select">
                <option value="">選択してください</option>
                <option value="text">テキスト (text)</option>
                <option value="number">数値 (number)</option>
                <option value="email">メール (email)</option>
                <option value="password">パスワード (password)</option>
                <option value="tel">電話番号 (tel)</option>
                <option value="url">URL (url)</option>
                <option value="date">日付 (date)</option>
                <option value="datetime-local">日時 (datetime-local)</option>
                <option value="select">セレクト (select)</option>
                <option value="textarea">テキストエリア (textarea)</option>
                <option value="checkbox">チェックボックス (checkbox)</option>
                <option value="radio">ラジオボタン (radio)</option>
                <option value="file">ファイル (file)</option>
              </select>
            </div>

            <!-- DB column mapping for form fields -->
            <div v-if="fieldList.length > 0" class="di-field-tags">
              <label class="di-form-label">対応カラム</label>
              <div class="di-field-tags-list">
                <div v-for="(field, i) in fieldList" :key="i" class="di-field-tag">
                  <span class="di-field-tag-name">{{ field.table }}.{{ field.column }}</span>
                  <span v-if="field.type" class="di-field-tag-type">{{ field.type }}</span>
                  <button @click="removeFieldFromList(i)" class="di-field-tag-remove">&times;</button>
                </div>
              </div>
            </div>

            <!-- Schema Column Selector for form fields -->
            <div v-if="hasSchemaData" class="di-binding-selector">
              <div class="di-form-group">
                <label class="di-form-label">
                  <Database style="width: 12px; height: 12px; display: inline; vertical-align: middle;" />
                  対応するDBカラム
                </label>
                <div class="di-binding-search-wrapper">
                  <input
                    v-model="schemaSearch"
                    @focus="showSchemaList = true"
                    type="text"
                    placeholder="テーブル.カラムを検索..."
                    class="di-input di-binding-search"
                  />
                  <button
                    v-if="schemaSearch"
                    @click="schemaSearch = ''; showSchemaList = false"
                    class="di-binding-clear"
                  >
                    <X style="width: 14px; height: 14px;" />
                  </button>
                </div>
                <div v-if="showSchemaList && filteredSchemaColumns.length > 0" class="di-binding-list">
                  <button
                    v-for="col in filteredSchemaColumns"
                    :key="col.fullName"
                    @click="selectSchemaColumn(col)"
                    class="di-binding-item has-db"
                  >
                    <div class="di-binding-item-main">
                      <span class="di-binding-name">{{ col.fullName }}</span>
                      <span class="di-binding-type">{{ col.type }}</span>
                    </div>
                    <span v-if="col.comment" class="di-binding-component">{{ col.comment }}</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Master values for select/radio/checkbox -->
            <div v-if="currentMasterKey && (formInputType === 'select' || formInputType === 'radio' || formInputType === 'checkbox')" class="di-master-inline">
              <button @click="toggleMasterSection" class="di-btn-condition-toggle" :class="{ 'di-condition-active': showMasterSection }">
                <List style="width: 14px; height: 14px;" />
                選択肢を定義
                <span v-if="existingMaster" class="di-condition-badge" style="background: #a78bfa;">{{ existingMaster.entries.length }}件</span>
              </button>

              <div v-if="showMasterSection" class="di-master-inline-section">
                <div v-if="masterEntries.length > 0" class="di-master-entries-table">
                  <div class="di-master-entries-header">
                    <span class="di-master-col-val">値</span>
                    <span class="di-master-col-lbl">ラベル</span>
                    <span class="di-master-col-color">色</span>
                    <span class="di-master-col-act"></span>
                  </div>
                  <div v-for="(entry, idx) in masterEntries" :key="idx" class="di-master-entry-row">
                    <input v-model="entry.value" placeholder="1" class="di-master-input di-master-col-val" />
                    <input v-model="entry.label" placeholder="受付" class="di-master-input di-master-col-lbl" />
                    <input v-model="entry.color" type="color" class="di-master-color-input" />
                    <button @click="removeMasterEntry(idx)" class="di-master-entry-remove">&times;</button>
                  </div>
                </div>
                <button @click="addMasterEntry" class="di-btn-add-field" style="margin-top: 4px;">
                  + 値を追加
                </button>
              </div>
            </div>

            <!-- Required toggle -->
            <div class="di-condition-toggle">
              <button @click="formRequired = !formRequired" class="di-btn-condition-toggle" :class="{ 'di-condition-active': formRequired }">
                <ShieldQuestion style="width: 14px; height: 14px;" />
                必須入力
                <span v-if="formRequired" class="di-condition-badge">必須</span>
              </button>
            </div>

            <!-- Validation rules (tag input) -->
            <div class="di-form-group di-suggest-wrapper">
              <label class="di-form-label">バリデーションルール</label>
              <div class="di-calc-tags-input">
                <span v-for="(rule, i) in formValidation" :key="i" class="di-calc-tag" style="background: #ec4899;">
                  {{ rule }}
                  <button @click.stop="removeFormValidation(i)" class="di-calc-tag-remove">&times;</button>
                </span>
                <input
                  v-model="formValidationInput"
                  @keydown.enter.prevent="addFormValidation()"
                  @keydown="onFormValidationKeydown"
                  type="text"
                  :placeholder="formValidation.length === 0 ? 'max:255, email, 必須 など (Enter で追加)' : ''"
                  class="di-calc-tags-field"
                  autocomplete="off"
                />
              </div>
              <span class="di-form-hint">Enter で追加、Backspace で削除</span>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">プレースホルダー</label>
              <input v-model="formPlaceholder" type="text" placeholder="例: user@example.com" class="di-input" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">デフォルト値</label>
              <input v-model="formDefaultValue" type="text" placeholder="初期値" class="di-input di-input-mono" />
            </div>

            <div class="di-form-group">
              <label class="di-form-label">説明</label>
              <textarea v-model="formDescription" rows="3" placeholder="このフォーム要素の説明..." class="di-textarea"></textarea>
            </div>

            <div class="di-form-group">
              <label class="di-form-label">補足メモ（任意）</label>
              <textarea v-model="noteText" rows="2" placeholder="補足情報があれば..." class="di-textarea"></textarea>
            </div>
          </template>



        </div>

        <!-- Footer -->
        <div class="di-editor-footer">
          <button @click="deleteConfig" class="di-btn-delete">
            <Trash2 style="width: 14px; height: 14px;" />
            削除
          </button>
          <div class="di-editor-actions">
            <button @click="close" class="di-btn-cancel">キャンセル</button>
            <button @click="save" class="di-btn-save">
              <Save style="width: 14px; height: 14px;" />
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.di-editor-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.di-editor-modal {
  background: #1e293b;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  width: 460px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.di-editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
}
.di-editor-header h3 {
  color: white;
  font-weight: 700;
  font-size: 14px;
  margin: 0;
}
.di-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.di-btn-auto {
  padding: 6px;
  background: #334155;
  border: none;
  color: #60a5fa;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-auto:hover {
  background: #475569;
  color: #93c5fd;
}
.di-editor-close {
  padding: 4px;
  background: transparent;
  border: none;
  color: #94a3b8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-editor-close:hover {
  color: white;
  background: #334155;
}

.di-static-indicator,
.di-binding-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #0f172a;
  border-bottom: 1px solid #334155;
  font-size: 11px;
}
.di-static-badge {
  padding: 2px 8px;
  background: #10b981;
  color: white;
  border-radius: 4px;
  font-weight: 600;
}
.di-static-hint {
  color: #64748b;
}
.di-binding-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 600;
  color: white;
}
.di-binding-v-model { background: #8b5cf6; }
.di-binding-prop { background: #f59e0b; }
.di-binding-computed { background: #ec4899; }
.di-binding-store { background: #06b6d4; }
.di-binding-api { background: #3b82f6; }
.di-binding-static { background: #10b981; }
.di-binding-source {
  color: #94a3b8;
  font-family: monospace;
}

.di-editor-content {
  padding: 16px;
  overflow-y: auto;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Display Type Card Grid */
.di-display-type-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.di-display-type-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 10px 6px;
  background: transparent;
  border: 1px solid #334155;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-display-type-card:hover {
  border-color: #475569;
  background: rgba(255, 255, 255, 0.03);
}
.di-display-type-active {
  border-width: 2px;
}
.di-display-type-label {
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
}
.di-display-type-desc {
  font-size: 9px;
  color: #475569;
  text-align: center;
  line-height: 1.2;
}

.di-form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-form-row {
  display: flex;
  gap: 12px;
}
.di-form-row .di-form-group {
  flex: 1;
}
.di-form-label {
  font-size: 10px;
  color: #64748b;
}

.di-input, .di-select, .di-textarea {
  width: 100%;
  padding: 8px 12px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.di-input::placeholder, .di-textarea::placeholder {
  color: #475569;
}
.di-input:focus, .di-select:focus, .di-textarea:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-input-mono {
  font-family: monospace;
}
.di-textarea {
  resize: none;
}
.di-select {
  cursor: pointer;
}

.di-editor-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #0f172a;
  border-top: 1px solid #334155;
}
.di-editor-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.di-btn-delete {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: transparent;
  border: none;
  color: #ef4444;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-delete:hover {
  background: rgba(239, 68, 68, 0.1);
}

.di-btn-cancel {
  padding: 6px 16px;
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-cancel:hover {
  color: white;
  background: #334155;
}

.di-btn-save {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: #3b82f6;
  border: none;
  color: white;
  font-size: 11px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.di-btn-save:hover {
  background: #2563eb;
}

/* Binding Selector */
.di-binding-selector {
  padding: 12px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid #3b82f6;
  border-radius: 8px;
  margin-bottom: 8px;
}
.di-binding-search-wrapper {
  position: relative;
}
.di-binding-search {
  padding-right: 32px;
}
.di-binding-clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 2px;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 4px;
}
.di-binding-clear:hover {
  color: #94a3b8;
  background: #334155;
}
.di-binding-list {
  margin-top: 8px;
  max-height: 200px;
  overflow-y: auto;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
}
.di-binding-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1e293b;
  cursor: pointer;
  text-align: left;
  transition: background 0.15s;
}
.di-binding-item:last-child {
  border-bottom: none;
}
.di-binding-item:hover {
  background: #1e293b;
}
.di-binding-item.has-db {
  border-left: 3px solid #3b82f6;
}
.di-binding-item-main {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.di-binding-name {
  color: #e2e8f0;
  font-size: 12px;
  font-family: monospace;
}
.di-binding-type {
  padding: 1px 5px;
  background: #334155;
  color: #94a3b8;
  font-size: 10px;
  border-radius: 3px;
}
.di-binding-component {
  color: #64748b;
  font-size: 10px;
  margin-top: 2px;
}
.di-binding-empty {
  padding: 12px;
  color: #64748b;
  font-size: 11px;
  text-align: center;
}
.di-form-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0;
}
.di-form-divider::before,
.di-form-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #334155;
}
.di-form-divider span {
  color: #64748b;
  font-size: 10px;
  white-space: nowrap;
}

/* Table/Column suggestion dropdown */
.di-suggest-wrapper {
  position: relative;
}
.di-suggest-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 160px;
  overflow-y: auto;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  margin-top: 2px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.di-suggest-item {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 6px 10px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #1e293b;
  color: #e2e8f0;
  font-size: 12px;
  font-family: monospace;
  text-align: left;
  cursor: pointer;
  transition: background 0.1s;
}
.di-suggest-item:last-child {
  border-bottom: none;
}
.di-suggest-item:hover {
  background: #1e293b;
}

/* Calc source tag input */
.di-calc-tags-input {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  min-height: 36px;
  align-items: center;
  transition: border-color 0.2s;
  cursor: text;
}
.di-calc-tags-input:focus-within {
  border-color: #60a5fa;
}
.di-calc-tag {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 6px;
  background: #3b82f6;
  color: white;
  font-size: 11px;
  font-family: monospace;
  border-radius: 4px;
  white-space: nowrap;
}
.di-calc-tag-remove {
  padding: 0 2px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
.di-calc-tag-remove:hover {
  color: white;
}
.di-calc-tags-field {
  flex: 1;
  min-width: 80px;
  padding: 2px 4px;
  background: transparent;
  border: none;
  color: white;
  font-size: 12px;
  font-family: monospace;
  outline: none;
}
.di-calc-tags-field::placeholder {
  color: #475569;
}
.di-calc-text {
  color: #e2e8f0;
  font-size: 12px;
  font-family: monospace;
  white-space: pre;
}
.di-form-hint {
  font-size: 9px;
  color: #475569;
  margin-top: 2px;
}

/* Field list tags */
.di-field-tags {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-field-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.di-field-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #1e3a5f;
  border: 1px solid #3b82f6;
  border-radius: 6px;
}
.di-field-tag-name {
  color: #93c5fd;
  font-size: 11px;
  font-family: monospace;
  font-weight: 600;
}
.di-field-tag-type {
  padding: 1px 4px;
  background: #334155;
  color: #94a3b8;
  font-size: 9px;
  border-radius: 3px;
}
.di-field-tag-remove {
  padding: 0 3px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
.di-field-tag-remove:hover {
  color: #ef4444;
}
.di-btn-add-field {
  width: 100%;
  padding: 8px;
  background: transparent;
  border: 1px dashed #334155;
  border-radius: 6px;
  color: #64748b;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-add-field:hover:not(:disabled) {
  border-color: #3b82f6;
  color: #3b82f6;
  background: rgba(59, 130, 246, 0.08);
}
.di-btn-add-field:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Condition section */
.di-condition-toggle {
  margin-top: 4px;
}
.di-btn-condition-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: 1px dashed #334155;
  border-radius: 6px;
  color: #64748b;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
}
.di-btn-condition-toggle:hover {
  border-color: #f59e0b;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.05);
}
.di-btn-condition-toggle.di-condition-active {
  border-color: #f59e0b;
  border-style: solid;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.08);
}
.di-condition-badge {
  padding: 1px 6px;
  background: #f59e0b;
  color: #000;
  font-size: 9px;
  font-weight: 600;
  border-radius: 4px;
  margin-left: auto;
}
.di-condition-section {
  padding: 12px;
  background: rgba(245, 158, 11, 0.06);
  border: 1px solid rgba(245, 158, 11, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Stored Calc */
.di-stored-calc-toggle {
  margin-top: 4px;
}
.di-stored-calc-section {
  padding: 12px;
  background: rgba(139, 92, 246, 0.06);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.di-stored-calc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 6px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 8px;
  min-height: 36px;
  align-items: center;
  transition: border-color 0.2s;
  cursor: text;
}
.di-stored-calc-tags:focus-within {
  border-color: #60a5fa;
}
.di-textarea-mono {
  font-family: monospace;
}

/* Editor Tabs */
.di-editor-tabs {
  display: flex;
  background: #0f172a;
  border-bottom: 1px solid #334155;
}
.di-editor-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 8px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  color: #64748b;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.di-editor-tab:hover {
  color: #94a3b8;
  background: rgba(255, 255, 255, 0.03);
}
.di-editor-tab-active {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
  background: rgba(96, 165, 250, 0.05);
}

/* Master inline section */
.di-master-inline {
  margin-top: 4px;
}
.di-master-inline-section {
  padding: 10px;
  background: rgba(167, 139, 250, 0.06);
  border: 1px solid rgba(167, 139, 250, 0.2);
  border-radius: 8px;
  margin-top: 8px;
}
.di-master-entries-table {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.di-master-entries-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 4px 4px;
  border-bottom: 1px solid rgba(167, 139, 250, 0.15);
  font-size: 9px;
  color: #64748b;
}
.di-master-entry-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.di-master-col-val {
  width: 60px;
  flex-shrink: 0;
}
.di-master-col-lbl {
  flex: 1;
  min-width: 0;
}
.di-master-col-color {
  width: 32px;
  flex-shrink: 0;
  text-align: center;
}
.di-master-col-act {
  width: 20px;
  flex-shrink: 0;
}
.di-master-input {
  padding: 5px 8px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  color: white;
  font-size: 11px;
  font-family: monospace;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.di-master-input:focus {
  outline: none;
  border-color: #a78bfa;
}
.di-master-input::placeholder {
  color: #475569;
}
.di-master-color-input {
  width: 28px;
  height: 28px;
  padding: 2px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  cursor: pointer;
  flex-shrink: 0;
}
.di-master-color-input::-webkit-color-swatch-wrapper {
  padding: 2px;
}
.di-master-color-input::-webkit-color-swatch {
  border: none;
  border-radius: 3px;
}
.di-master-entry-remove {
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.di-master-entry-remove:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

/* Wide modal for CSV mode */
.di-editor-modal-wide {
  width: 680px;
}
.di-editor-modal-wide .di-editor-content {
  max-height: 500px;
}

/* CSV Spec Styles */
.di-csv-file-settings {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: 8px;
}
.di-csv-checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #94a3b8;
  font-size: 11px;
  cursor: pointer;
}
.di-checkbox {
  width: 14px;
  height: 14px;
  accent-color: #3b82f6;
  cursor: pointer;
}
.di-csv-columns-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.di-csv-columns-table {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border: 1px solid #334155;
  border-radius: 8px;
  overflow: hidden;
}
.di-csv-columns-header {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  background: #0f172a;
  font-size: 9px;
  color: #64748b;
  border-bottom: 1px solid #334155;
}
.di-csv-column-row {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #1e293b;
  border-bottom: 1px solid rgba(51, 65, 85, 0.5);
}
.di-csv-column-row:last-child {
  border-bottom: none;
}
.di-csv-col-no {
  width: 24px;
  flex-shrink: 0;
  text-align: center;
  color: #64748b;
  font-size: 10px;
}
.di-csv-col-name {
  flex: 2;
  min-width: 0;
}
.di-csv-col-db {
  flex: 2;
  min-width: 0;
}
.di-csv-col-type {
  width: 70px;
  flex-shrink: 0;
}
.di-csv-col-req {
  width: 28px;
  flex-shrink: 0;
  text-align: center;
}
.di-csv-checkbox-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.di-csv-col-proc {
  flex: 2;
  min-width: 0;
}
.di-csv-col-desc {
  flex: 2;
  min-width: 0;
}
.di-csv-col-act {
  width: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 2px;
}
.di-csv-input {
  padding: 4px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 10px;
  font-family: monospace;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.di-csv-input:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-csv-input::placeholder {
  color: #475569;
}
.di-csv-select {
  padding: 4px 4px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 4px;
  color: white;
  font-size: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.di-csv-select:focus {
  outline: none;
  border-color: #60a5fa;
}
.di-csv-move-btn {
  padding: 2px;
  background: transparent;
  border: none;
  color: #64748b;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.di-csv-move-btn:hover:not(:disabled) {
  color: #93c5fd;
  background: #334155;
}
.di-csv-move-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.di-csv-remove-btn {
  padding: 0 3px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  border-radius: 3px;
}
.di-csv-remove-btn:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

/* CSV Error Definition */
.di-csv-error-section {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.di-csv-err-col {
  width: 80px;
  flex-shrink: 0;
}
.di-csv-err-cond {
  flex: 2;
  min-width: 0;
}
.di-csv-err-msg {
  flex: 3;
  min-width: 0;
}
.di-csv-err-sev {
  width: 64px;
  flex-shrink: 0;
}
.di-csv-err-act {
  width: 24px;
  flex-shrink: 0;
}

/* Email variables input */
.di-email-variables-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 4px 6px;
  background: #0f172a;
  border: 1px solid #334155;
  border-radius: 6px;
  min-height: 36px;
  cursor: text;
}
.di-email-variables-input:focus-within {
  border-color: #60a5fa;
}
</style>
