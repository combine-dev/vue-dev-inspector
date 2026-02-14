import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { Plugin as Plugin_3 } from 'vite';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { Store } from 'pinia';
import { StoreDefinition } from 'pinia';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

export declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function' | 'csv_export' | 'csv_import' | 'email' | 'sort';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
    csvSpec?: CsvSpec;
    emailSpec?: EmailSpec;
    sortSpec?: SortInfo;
}

export declare interface AnalyzedElement {
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

declare interface BatchDefinition {
    id: string;
    name: string;
    schedule?: string;
    trigger?: string;
    description?: string;
    inputTables?: string[];
    outputTables?: string[];
    steps: BatchStep[];
    timeout?: string;
    retryPolicy?: string;
    notifyOnError?: string;
    notifyOnComplete?: string;
    updatedAt: string;
}

declare interface BatchStep {
    order: number;
    description: string;
    target?: string;
    type?: 'query' | 'api' | 'file' | 'mail' | 'other';
    errorHandling?: string;
}

declare interface BindingCandidate {
    binding: string;
    db?: {
        table: string;
        column: string;
        type?: string;
    };
    api?: {
        endpoint: string;
        method: string;
    };
    component: string;
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

export declare type CrossSearchMode = 'column' | 'api' | 'text';

export declare interface CrossSearchResult {
    pagePath: string;
    pageName: string;
    selector: string;
    elementType?: 'datasource' | 'action' | 'form' | 'chart';
    matchedField: string;
    matchContext: string;
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

export declare const DevElementEditor: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DevInspector: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DevInspectorOptions>, {
storageKey: string;
enabledInProduction: boolean;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DevInspectorOptions>, {
storageKey: string;
enabledInProduction: boolean;
}>>> & Readonly<{}>, {
storageKey: string;
enabledInProduction: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface DevInspectorOptions {
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

export declare interface DevInspectorVitePluginOptions {
    /**
     * Enable the plugin (default: process.env.NODE_ENV === 'development')
     */
    enabled?: boolean;
    /**
     * Path to analysis JSON file for DB mapping
     * If not provided, only data-di-binding will be added
     */
    analysisPath?: string;
    /**
     * Directory for per-page annotation JSON files
     * (default: './dev-inspector-annotations')
     */
    syncDir?: string;
    /**
     * Include file patterns (default: ['**\/*.vue'])
     */
    include?: string[];
    /**
     * Exclude file patterns (default: ['node_modules/**'])
     */
    exclude?: string[];
}

export declare interface DevMeta {
    usedStores?: string[];
    usedComponents?: string[];
    i18nKeys?: string[];
    designTokens?: string[];
    accessibility?: string;
    responsive?: string;
}

export declare const DevPanel: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DevPickOverlay: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DevScreenEditor: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare interface ElementConfig {
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

export declare interface ElementNote {
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

export declare interface FieldInfo {
    table: string;
    column: string;
    type?: string;
    validation?: string[];
    description?: string;
}

export declare interface FormInfo {
    inputType?: string;
    required?: boolean;
    validation?: string[];
    placeholder?: string;
    defaultValue?: string;
    description?: string;
}

export declare interface LinkInfo {
    testPath?: string;
    figmaUrl?: string;
    githubIssue?: string;
    githubPr?: string;
    relatedDocs?: string;
}

declare type LoadTrigger = 'onMount' | 'useFetch' | 'useAsyncData' | 'watch' | 'action' | 'unknown';

export declare interface MasterDefinition {
    id: string;
    table: string;
    column: string;
    name: string;
    columnType?: string;
    description?: string;
    entries: MasterEntry[];
    transitions?: StateTransition[];
    updatedAt: string;
}

export declare interface MasterEntry {
    value: string;
    label: string;
    color?: string;
    description?: string;
}

export declare interface PluginOptions extends DevInspectorOptions {
    /**
     * Whether to auto-register the DevInspector component globally
     * @default true
     */
    autoRegister?: boolean;
}

export declare interface ProjectAnalysis {
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

declare interface SchemaColumnOption {
    table: string;
    column: string;
    type: string;
    comment: string | null;
    fullName: string;
}

export declare interface ScreenConfig {
    path: string;
    name: string;
    description?: string;
    componentPath?: string;
    apis: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        endpoint: string;
        description?: string;
        loadTiming?: 'onMount' | 'action' | 'conditional';
    }[];
    auth?: {
        required: boolean;
        roles?: string[];
        description?: string;
    };
    figmaUrl?: string;
    notes?: string;
    updatedAt: string;
}

export declare interface ScreenFlowEdge {
    from: string;
    to: string;
    label: string;
    selector: string;
}

export declare interface ScreenFlowNode {
    path: string;
    name: string;
    annotationCount: number;
}

export declare interface ScreenSpec {
    name: string;
    description: string;
    componentPath: string;
    figmaUrl?: string;
    apis: {
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
        endpoint: string;
        description: string;
    }[];
    notes?: string[];
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

export declare interface SourceBindingInfo {
    type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api' | 'data';
    source?: string;
    apiEndpoint?: string;
    apiMethod?: string;
    storeKey?: string;
    isStatic?: boolean;
}

declare interface StateTransition {
    from: string;
    to: string;
    trigger: string;
    condition?: string;
    description?: string;
}

export declare interface UnannotatedElement {
    selector: string;
    tagName: string;
    category: 'binding' | 'form' | 'action';
    text: string;
    suggestedType: 'datasource' | 'action' | 'form';
}

export declare function useDevInspector(): Store<"devInspector", Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "isEnabled" | "isEditMode" | "isPickMode" | "isInitializing" | "hoveredSelector" | "currentScreenSpec" | "isPanelOpen" | "elementConfigs" | "editingElementId" | "screenConfigs" | "editingScreen" | "isScanning" | "scanProgress" | "scanResults" | "allPagesRoutes" | "currentScanPage" | "analysisData" | "analysisResults" | "hiddenAnalysisSelectors" | "analysisFilter" | "showNoteHighlights" | "noteHighlightFilter" | "masterDefinitions" | "batchDefinitions" | "brokenAnnotations" | "remapTargetId" | "showCrossSearch" | "crossSearchQuery" | "crossSearchMode" | "showUnannotatedDetection" | "unannotatedElements" | "hoveredUnannotatedSelector" | "showScreenFlow">, Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "isAvailable" | "crossSearchResults" | "screenFlowData">, Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "getScreenConfig" | "setScreenConfig" | "deleteScreenConfig" | "suggestScreenApis" | "init" | "toggle" | "enable" | "disable" | "toggleEditMode" | "togglePickMode" | "setHoveredSelector" | "generateSelector" | "getConfiguredSelectors" | "setScreenSpec" | "clearScreenSpec" | "togglePanel" | "openPanel" | "closePanel" | "getElementConfig" | "setElementConfig" | "deleteElementConfig" | "startEditing" | "stopEditing" | "exportConfigs" | "exportAsFile" | "downloadAnnotations" | "downloadSddSpec" | "downloadClientSpec" | "importConfigs" | "clearAllConfigs" | "detectSourceBinding" | "autoDetectElementInfo" | "scanCurrentPage" | "scanAllPages" | "clearScanResults" | "loadAnalysisData" | "getAnalyzedElement" | "getAnalyzedElementsForPage" | "applyAnalysisToPage" | "clearAnalysisResults" | "removeAnalysisResult" | "clearHiddenSelectors" | "exportChangesForCli" | "downloadChanges" | "getAvailableBindings" | "searchBindings" | "getSchemaColumns" | "searchSchemaColumns" | "getCurrentPageApis" | "getApiSourceForBinding" | "toggleNoteHighlights" | "detectElementType" | "getMasterDefinition" | "setMasterDefinition" | "deleteMasterDefinition" | "getMastersForTable" | "getMasterEntries" | "getBatchDefinition" | "setBatchDefinition" | "deleteBatchDefinition" | "detectBrokenAnnotations" | "detectModalName" | "detectTabContext" | "remapAnnotation" | "startRemap" | "deleteBrokenAnnotations" | "detectUnannotatedElements" | "quickAnnotate">>;

export declare const useDevInspectorStore: StoreDefinition<"devInspector", Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "isEnabled" | "isEditMode" | "isPickMode" | "isInitializing" | "hoveredSelector" | "currentScreenSpec" | "isPanelOpen" | "elementConfigs" | "editingElementId" | "screenConfigs" | "editingScreen" | "isScanning" | "scanProgress" | "scanResults" | "allPagesRoutes" | "currentScanPage" | "analysisData" | "analysisResults" | "hiddenAnalysisSelectors" | "analysisFilter" | "showNoteHighlights" | "noteHighlightFilter" | "masterDefinitions" | "batchDefinitions" | "brokenAnnotations" | "remapTargetId" | "showCrossSearch" | "crossSearchQuery" | "crossSearchMode" | "showUnannotatedDetection" | "unannotatedElements" | "hoveredUnannotatedSelector" | "showScreenFlow">, Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "isAvailable" | "crossSearchResults" | "screenFlowData">, Pick<{
isEnabled: Ref<boolean, boolean>;
isAvailable: ComputedRef<boolean>;
isEditMode: Ref<boolean, boolean>;
isPickMode: Ref<boolean, boolean>;
isInitializing: Ref<boolean, boolean>;
hoveredSelector: Ref<string | null, string | null>;
currentScreenSpec: Ref<    {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null, ScreenSpec | {
name: string;
description: string;
componentPath: string;
figmaUrl?: string | undefined;
apis: {
method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
endpoint: string;
description: string;
}[];
notes?: string[] | undefined;
} | null>;
isPanelOpen: Ref<boolean, boolean>;
elementConfigs: Ref<Record<string, ElementConfig>, Record<string, ElementConfig>>;
editingElementId: Ref<string | null, string | null>;
screenConfigs: Ref<Record<string, ScreenConfig>, Record<string, ScreenConfig>>;
editingScreen: Ref<boolean, boolean>;
getScreenConfig: (path?: string) => ScreenConfig | undefined;
setScreenConfig: (config: ScreenConfig) => void;
deleteScreenConfig: (path: string) => void;
suggestScreenApis: () => ScreenConfig["apis"];
init: (opts?: DevInspectorOptions) => void;
toggle: () => Promise<void>;
enable: () => Promise<void>;
disable: () => void;
toggleEditMode: () => void;
togglePickMode: () => void;
setHoveredSelector: (selector: string | null) => void;
generateSelector: (element: HTMLElement) => string;
getConfiguredSelectors: () => string[];
setScreenSpec: (spec: ScreenSpec) => void;
clearScreenSpec: () => void;
togglePanel: () => void;
openPanel: () => void;
closePanel: () => void;
getElementConfig: (id: string) => ElementConfig | undefined;
setElementConfig: (id: string, config: Partial<ElementConfig>) => void;
deleteElementConfig: (id: string) => void;
startEditing: (id: string) => void;
stopEditing: () => void;
exportConfigs: () => string;
exportAsFile: () => string;
downloadAnnotations: (filename?: string) => void;
downloadSddSpec: (filename?: string) => void;
downloadClientSpec: (filename?: string) => void;
importConfigs: (json: string) => void;
clearAllConfigs: () => void;
detectSourceBinding: (element: HTMLElement) => SourceBindingInfo | null;
autoDetectElementInfo: (element: HTMLElement, id: string) => Partial<ElementConfig>;
isScanning: Ref<boolean, boolean>;
scanProgress: Ref<number, number>;
scanResults: Ref<    {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[], {
selector: string;
element: HTMLElement;
detected: Partial<ElementConfig>;
}[] | {
selector: string;
element: HTMLElement;
detected: {
id?: string | undefined;
componentPath?: string | undefined;
pagePath?: string | undefined;
elementType?: "datasource" | "action" | "form" | "chart" | undefined;
isConditional?: boolean | undefined;
modalName?: string | undefined;
tabContext?: string | undefined;
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
fieldInfoList?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
}[] | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function" | "csv_export" | "csv_import" | "email" | "sort";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
csvSpec?: {
columns: {
name: string;
dbMapping?: string | undefined;
processing?: string | undefined;
type?: string | undefined;
required?: boolean | undefined;
validation?: string | undefined;
format?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
}[];
encoding?: "UTF-8" | "Shift_JIS" | "EUC-JP" | "UTF-8 BOM" | undefined;
delimiter?: "," | "\t" | "|" | undefined;
hasHeaderRow?: boolean | undefined;
filenamePattern?: string | undefined;
sortOrder?: string | undefined;
filterCondition?: string | undefined;
maxRows?: number | undefined;
errorHandling?: "stop_on_first" | "skip_and_continue" | "collect_all" | undefined;
duplicateHandling?: "skip" | "overwrite" | "error" | undefined;
preValidation?: string | undefined;
errorDefs?: {
condition: string;
message: string;
column?: string | undefined;
severity?: "error" | "warning" | undefined;
}[] | undefined;
} | undefined;
emailSpec?: {
trigger: string;
to: string;
cc?: string | undefined;
bcc?: string | undefined;
subject: string;
bodyTemplate?: string | undefined;
templatePath?: string | undefined;
variables?: string[] | undefined;
attachments?: string | undefined;
conditions?: string | undefined;
errorHandling?: string | undefined;
} | undefined;
sortSpec?: {
sortable: boolean;
sortType?: "string" | "number" | "date" | "custom" | undefined;
sortKey?: string | undefined;
defaultDirection?: "asc" | "desc" | undefined;
isDefaultSort?: boolean | undefined;
unsortedOrder?: string | undefined;
description?: string | undefined;
} | undefined;
} | undefined;
formInfo?: {
inputType?: string | undefined;
required?: boolean | undefined;
validation?: string[] | undefined;
placeholder?: string | undefined;
defaultValue?: string | undefined;
description?: string | undefined;
} | undefined;
chartSpec?: {
chartType: "bar" | "line" | "pie" | "area" | "scatter" | "doughnut" | "radar" | "other";
title?: string | undefined;
xAxis?: string | undefined;
yAxis?: string | undefined;
series?: {
label: string;
field: string;
color?: string | undefined;
}[] | undefined;
dataSource?: string | undefined;
aggregation?: string | undefined;
filters?: string | undefined;
description?: string | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
displayType?: "db_direct" | "db_formatted" | "calculated" | "static" | "other" | undefined;
formatDescription?: string | undefined;
calcDescription?: string | undefined;
calcSources?: string[] | undefined;
sampleValue?: string | undefined;
decimalHandling?: string | undefined;
unit?: string | undefined;
nullDisplay?: string | undefined;
displayFormat?: string | undefined;
storedCalc?: boolean | undefined;
storedCalcLogic?: string | undefined;
storedCalcSources?: string[] | undefined;
storedCalcTiming?: "on_save" | "trigger" | "batch" | "realtime" | undefined;
condition?: string | undefined;
conditionColumn?: string | undefined;
hiddenBehavior?: "hidden" | "disabled" | "different_value" | "empty" | undefined;
hiddenNote?: string | undefined;
} | undefined;
links?: {
testPath?: string | undefined;
figmaUrl?: string | undefined;
githubIssue?: string | undefined;
githubPr?: string | undefined;
relatedDocs?: string | undefined;
} | undefined;
devMeta?: {
usedStores?: string[] | undefined;
usedComponents?: string[] | undefined;
i18nKeys?: string[] | undefined;
designTokens?: string[] | undefined;
accessibility?: string | undefined;
responsive?: string | undefined;
} | undefined;
sourceBinding?: {
type: "static" | "v-model" | "prop" | "computed" | "store" | "api" | "data";
source?: string | undefined;
apiEndpoint?: string | undefined;
apiMethod?: string | undefined;
storeKey?: string | undefined;
isStatic?: boolean | undefined;
} | undefined;
createdAt?: string | undefined;
updatedAt?: string | undefined;
};
}[]>;
scanCurrentPage: (options?: {
rescan?: boolean;
}) => Promise<number>;
scanAllPages: (router: any) => Promise<{
page: string;
count: number;
}[]>;
allPagesRoutes: Ref<string[], string[]>;
currentScanPage: Ref<string, string>;
clearScanResults: () => void;
analysisData: Ref<    {
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
} | undefined;
} | null, ProjectAnalysis | {
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
} | undefined;
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[], {
selector: string;
element: AnalyzedElement;
matched: boolean;
}[] | {
selector: string;
element: {
selector: string;
tags: ElementTag[];
text?: string | undefined;
binding?: string | undefined;
api?: {
endpoint: string;
method: string;
description?: string | undefined;
} | undefined;
db?: {
table: string;
column: string;
type?: string | undefined;
} | undefined;
modal?: {
target?: string | undefined;
} | undefined;
conditional?: {
expression: string;
} | undefined;
computed?: {
expression?: string | undefined;
} | undefined;
component?: string | undefined;
line?: number | undefined;
};
matched: boolean;
}[]>;
applyAnalysisToPage: () => Promise<number>;
clearAnalysisResults: () => void;
removeAnalysisResult: (selector: string) => void;
clearHiddenSelectors: () => void;
hiddenAnalysisSelectors: Ref<Set<string> & Omit<Set<string>, keyof Set<any>>, Set<string> | (Set<string> & Omit<Set<string>, keyof Set<any>>)>;
analysisFilter: Ref<"form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none", "form" | "modal" | "other" | "conditional" | "computed" | "button" | "link" | "all" | "db-api" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
getAvailableBindings: () => BindingCandidate[];
searchBindings: (query: string) => BindingCandidate[];
getSchemaColumns: () => SchemaColumnOption[];
searchSchemaColumns: (query: string) => SchemaColumnOption[];
getCurrentPageApis: () => {
pageLoad: ComponentApi[];
action: ComponentApi[];
};
getApiSourceForBinding: (binding: string) => ComponentApi | null;
showNoteHighlights: Ref<boolean, boolean>;
toggleNoteHighlights: () => void;
noteHighlightFilter: Ref<"action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all", "action" | "form" | "calculated" | "static" | "other" | "conditional" | "storedCalc" | "db" | "all">;
detectElementType: (element: HTMLElement) => "datasource" | "action" | "form";
masterDefinitions: Ref<Record<string, MasterDefinition>, Record<string, MasterDefinition>>;
getMasterDefinition: (tableColumn: string) => MasterDefinition | undefined;
setMasterDefinition: (def: MasterDefinition) => void;
deleteMasterDefinition: (id: string) => void;
getMastersForTable: (table: string) => MasterDefinition[];
getMasterEntries: (tableColumn: string) => MasterEntry[];
batchDefinitions: Ref<Record<string, BatchDefinition>, Record<string, BatchDefinition>>;
getBatchDefinition: (id: string) => BatchDefinition | undefined;
setBatchDefinition: (def: BatchDefinition) => void;
deleteBatchDefinition: (id: string) => void;
brokenAnnotations: Ref<string[], string[]>;
remapTargetId: Ref<string | null, string | null>;
detectBrokenAnnotations: () => string[];
detectModalName: (selector: string) => string | undefined;
detectTabContext: (selector: string) => string | undefined;
remapAnnotation: (oldId: string, newId: string) => void;
startRemap: (oldId: string) => void;
deleteBrokenAnnotations: () => void;
showCrossSearch: Ref<boolean, boolean>;
crossSearchQuery: Ref<string, string>;
crossSearchMode: Ref<CrossSearchMode, CrossSearchMode>;
crossSearchResults: ComputedRef<CrossSearchResult[]>;
showUnannotatedDetection: Ref<boolean, boolean>;
unannotatedElements: Ref<    {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[], UnannotatedElement[] | {
selector: string;
tagName: string;
category: "binding" | "form" | "action";
text: string;
suggestedType: "datasource" | "action" | "form";
}[]>;
hoveredUnannotatedSelector: Ref<string | null, string | null>;
detectUnannotatedElements: () => UnannotatedElement[];
quickAnnotate: (selector: string, suggestedType: "datasource" | "action" | "form") => void;
showScreenFlow: Ref<boolean, boolean>;
screenFlowData: ComputedRef<    {
nodes: ScreenFlowNode[];
edges: ScreenFlowEdge[];
orphanPages: ScreenFlowNode[];
}>;
}, "getScreenConfig" | "setScreenConfig" | "deleteScreenConfig" | "suggestScreenApis" | "init" | "toggle" | "enable" | "disable" | "toggleEditMode" | "togglePickMode" | "setHoveredSelector" | "generateSelector" | "getConfiguredSelectors" | "setScreenSpec" | "clearScreenSpec" | "togglePanel" | "openPanel" | "closePanel" | "getElementConfig" | "setElementConfig" | "deleteElementConfig" | "startEditing" | "stopEditing" | "exportConfigs" | "exportAsFile" | "downloadAnnotations" | "downloadSddSpec" | "downloadClientSpec" | "importConfigs" | "clearAllConfigs" | "detectSourceBinding" | "autoDetectElementInfo" | "scanCurrentPage" | "scanAllPages" | "clearScanResults" | "loadAnalysisData" | "getAnalyzedElement" | "getAnalyzedElementsForPage" | "applyAnalysisToPage" | "clearAnalysisResults" | "removeAnalysisResult" | "clearHiddenSelectors" | "exportChangesForCli" | "downloadChanges" | "getAvailableBindings" | "searchBindings" | "getSchemaColumns" | "searchSchemaColumns" | "getCurrentPageApis" | "getApiSourceForBinding" | "toggleNoteHighlights" | "detectElementType" | "getMasterDefinition" | "setMasterDefinition" | "deleteMasterDefinition" | "getMastersForTable" | "getMasterEntries" | "getBatchDefinition" | "setBatchDefinition" | "deleteBatchDefinition" | "detectBrokenAnnotations" | "detectModalName" | "detectTabContext" | "remapAnnotation" | "startRemap" | "deleteBrokenAnnotations" | "detectUnannotatedElements" | "quickAnnotate">>;

export declare function vitePluginDevInspector(options?: DevInspectorVitePluginOptions): Plugin_3;

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

