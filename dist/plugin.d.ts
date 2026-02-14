import { Plugin as Plugin_2 } from 'vue';

declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function' | 'csv_export' | 'csv_import' | 'email' | 'sort';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
    csvSpec?: CsvSpec;
    emailSpec?: EmailSpec;
    sortSpec?: SortInfo;
}

declare interface AnalyzedElement {
    selector: string;
    tags: ElementTag[];
    text?: string;
    binding?: string;
    api?: {
        endpoint: string;
        method: string;
        description?: string;
    };
    db?: {
        table: string;
        column: string;
        type?: string;
    };
    modal?: {
        target?: string;
    };
    conditional?: {
        expression: string;
    };
    computed?: {
        expression?: string;
    };
    component?: string;
    line?: number;
}

declare interface ChartSeries {
    label: string;
    field: string;
    color?: string;
}

declare interface ChartSpec {
    chartType: 'bar' | 'line' | 'pie' | 'area' | 'scatter' | 'doughnut' | 'radar' | 'other';
    title?: string;
    xAxis?: string;
    yAxis?: string;
    series?: ChartSeries[];
    dataSource?: string;
    aggregation?: string;
    filters?: string;
    description?: string;
}

declare interface ComponentApi {
    endpoint: string;
    method: string;
    composable: string;
    loadTrigger: LoadTrigger;
    variable?: string;
    responseType?: string;
}

declare interface CsvColumnDef {
    name: string;
    dbMapping?: string;
    processing?: string;
    type?: string;
    required?: boolean;
    validation?: string;
    format?: string;
    defaultValue?: string;
    description?: string;
}

declare interface CsvErrorDef {
    condition: string;
    message: string;
    column?: string;
    severity?: 'error' | 'warning';
}

declare interface CsvSpec {
    columns: CsvColumnDef[];
    encoding?: 'UTF-8' | 'Shift_JIS' | 'EUC-JP' | 'UTF-8 BOM';
    delimiter?: ',' | '\t' | '|';
    hasHeaderRow?: boolean;
    filenamePattern?: string;
    sortOrder?: string;
    filterCondition?: string;
    maxRows?: number;
    errorHandling?: 'stop_on_first' | 'skip_and_continue' | 'collect_all';
    duplicateHandling?: 'skip' | 'overwrite' | 'error';
    preValidation?: string;
    errorDefs?: CsvErrorDef[];
}

declare interface DbColumnSchema {
    name: string;
    type: string;
    comment: string | null;
    nullable: boolean;
}

declare interface DbTableSchema {
    name: string;
    comment: string | null;
    columns: Record<string, DbColumnSchema>;
}

declare interface DevInspectorOptions {
    storageKey?: string;
    enabledInProduction?: boolean;
    initialAnnotations?: Record<string, ElementConfig>;
    analysisData?: ProjectAnalysis;
    /** URL to auto-load analysis data from (default: '/dev-inspector-analysis.json') */
    analysisDataUrl?: string;
    /** Auto-load analysis data on init (default: true) */
    autoLoadAnalysis?: boolean;
    /** Auto-apply analysis to page after loading (default: true) */
    autoApplyAnalysis?: boolean;
}

declare interface DevMeta {
    usedStores?: string[];
    usedComponents?: string[];
    i18nKeys?: string[];
    designTokens?: string[];
    accessibility?: string;
    responsive?: string;
}

declare interface ElementConfig {
    id: string;
    componentPath: string;
    pagePath?: string;
    elementType?: 'datasource' | 'action' | 'form' | 'chart';
    isConditional?: boolean;
    modalName?: string;
    tabContext?: string;
    fieldInfo?: FieldInfo;
    fieldInfoList?: FieldInfo[];
    actionInfo?: ActionInfo;
    formInfo?: FormInfo;
    chartSpec?: ChartSpec;
    note?: ElementNote;
    links?: LinkInfo;
    devMeta?: DevMeta;
    sourceBinding?: SourceBindingInfo;
    createdAt: string;
    updatedAt: string;
}

declare interface ElementNote {
    text: string;
    author?: string;
    type?: 'info' | 'warning' | 'todo' | 'question';
    displayType?: 'db_direct' | 'db_formatted' | 'calculated' | 'static' | 'other';
    formatDescription?: string;
    calcDescription?: string;
    calcSources?: string[];
    sampleValue?: string;
    decimalHandling?: string;
    unit?: string;
    nullDisplay?: string;
    displayFormat?: string;
    storedCalc?: boolean;
    storedCalcLogic?: string;
    storedCalcSources?: string[];
    storedCalcTiming?: 'on_save' | 'trigger' | 'batch' | 'realtime';
    condition?: string;
    conditionColumn?: string;
    hiddenBehavior?: 'hidden' | 'disabled' | 'different_value' | 'empty';
    hiddenNote?: string;
}

declare type ElementTag = 'db' | 'form' | 'button' | 'link' | 'modal' | 'conditional' | 'computed' | 'api';

declare interface EmailSpec {
    trigger: string;
    to: string;
    cc?: string;
    bcc?: string;
    subject: string;
    bodyTemplate?: string;
    templatePath?: string;
    variables?: string[];
    attachments?: string;
    conditions?: string;
    errorHandling?: string;
}

declare interface FieldInfo {
    table: string;
    column: string;
    type?: string;
    validation?: string[];
    description?: string;
}

declare interface FormInfo {
    inputType?: string;
    required?: boolean;
    validation?: string[];
    placeholder?: string;
    defaultValue?: string;
    description?: string;
}

declare interface LinkInfo {
    testPath?: string;
    figmaUrl?: string;
    githubIssue?: string;
    githubPr?: string;
    relatedDocs?: string;
}

declare type LoadTrigger = 'onMount' | 'useFetch' | 'useAsyncData' | 'watch' | 'action' | 'unknown';

export declare interface PluginOptions extends DevInspectorOptions {
    /**
     * Whether to auto-register the DevInspector component globally
     * @default true
     */
    autoRegister?: boolean;
}

declare interface ProjectAnalysis {
    projectPath: string;
    analyzedAt: string;
    components: Record<string, {
        filePath: string;
        componentName: string;
        elements: AnalyzedElement[];
        apis?: ComponentApi[];
        usedComponents?: string[];
    }>;
    apiMappings: Record<string, {
        endpoint: string;
        method: string;
        responseFields: {
            name: string;
            type: string;
        }[];
    }>;
    dbSchema?: {
        tables: Record<string, DbTableSchema>;
    };
}

declare interface SortInfo {
    sortable: boolean;
    sortType?: 'string' | 'number' | 'date' | 'custom';
    sortKey?: string;
    defaultDirection?: 'asc' | 'desc';
    isDefaultSort?: boolean;
    unsortedOrder?: string;
    description?: string;
}

declare interface SourceBindingInfo {
    type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api' | 'data';
    source?: string;
    apiEndpoint?: string;
    apiMethod?: string;
    storeKey?: string;
    isStatic?: boolean;
}

declare const VueDevInspector: Plugin_2<PluginOptions[]>;
export { VueDevInspector }
export default VueDevInspector;

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

