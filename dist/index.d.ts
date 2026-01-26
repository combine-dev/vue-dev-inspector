import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
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
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
}

export declare interface AnalyzedElement {
    selector: string;
    type: 'static' | 'data' | 'button' | 'link' | 'form' | 'unknown';
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
    component?: string;
    line?: number;
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

export declare interface ElementConfig {
    id: string;
    componentPath: string;
    fieldInfo?: FieldInfo;
    actionInfo?: ActionInfo;
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
}

export declare interface FieldInfo {
    table: string;
    column: string;
    type?: string;
    validation?: string[];
    description?: string;
}

export declare interface LinkInfo {
    testPath?: string;
    figmaUrl?: string;
    githubIssue?: string;
    githubPr?: string;
    relatedDocs?: string;
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

export declare interface SourceBindingInfo {
    type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api';
    source?: string;
    apiEndpoint?: string;
    apiMethod?: string;
    storeKey?: string;
    isStatic?: boolean;
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "isEnabled" | "isEditMode" | "isPickMode" | "isInitializing" | "hoveredSelector" | "currentScreenSpec" | "isPanelOpen" | "elementConfigs" | "editingElementId" | "isScanning" | "scanProgress" | "scanResults" | "allPagesRoutes" | "currentScanPage" | "analysisData" | "analysisResults" | "hiddenAnalysisSelectors" | "analysisFilter">, Pick<{
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "isAvailable">, Pick<{
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "init" | "toggle" | "enable" | "disable" | "toggleEditMode" | "togglePickMode" | "setHoveredSelector" | "generateSelector" | "getConfiguredSelectors" | "setScreenSpec" | "clearScreenSpec" | "togglePanel" | "openPanel" | "closePanel" | "getElementConfig" | "setElementConfig" | "deleteElementConfig" | "startEditing" | "stopEditing" | "exportConfigs" | "exportAsFile" | "downloadAnnotations" | "importConfigs" | "clearAllConfigs" | "detectSourceBinding" | "autoDetectElementInfo" | "scanCurrentPage" | "scanAllPages" | "clearScanResults" | "loadAnalysisData" | "getAnalyzedElement" | "getAnalyzedElementsForPage" | "applyAnalysisToPage" | "clearAnalysisResults" | "removeAnalysisResult" | "clearHiddenSelectors" | "exportChangesForCli" | "downloadChanges">>;

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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "isEnabled" | "isEditMode" | "isPickMode" | "isInitializing" | "hoveredSelector" | "currentScreenSpec" | "isPanelOpen" | "elementConfigs" | "editingElementId" | "isScanning" | "scanProgress" | "scanResults" | "allPagesRoutes" | "currentScanPage" | "analysisData" | "analysisResults" | "hiddenAnalysisSelectors" | "analysisFilter">, Pick<{
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "isAvailable">, Pick<{
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
fieldInfo?: {
table: string;
column: string;
type?: string | undefined;
validation?: string[] | undefined;
description?: string | undefined;
} | undefined;
actionInfo?: {
type: "navigate" | "api" | "modal" | "emit" | "function";
target?: string | undefined;
method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | undefined;
description?: string | undefined;
params?: Record<string, string> | undefined;
} | undefined;
note?: {
text: string;
author?: string | undefined;
type?: "info" | "warning" | "todo" | "question" | undefined;
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
type: "static" | "v-model" | "prop" | "computed" | "store" | "api";
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
} | null, ProjectAnalysis | {
projectPath: string;
analyzedAt: string;
components: Record<string, {
filePath: string;
componentName: string;
elements: AnalyzedElement[];
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
} | null>;
loadAnalysisData: (url: string) => Promise<boolean>;
getAnalyzedElement: (selector: string) => AnalyzedElement | null;
getAnalyzedElementsForPage: (componentPath?: string) => AnalyzedElement[];
analysisResults: Ref<    {
selector: string;
element: {
selector: string;
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
type: "static" | "data" | "button" | "link" | "form" | "unknown";
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
analysisFilter: Ref<"static" | "data" | "all" | "db-api" | "other" | "none", "static" | "data" | "all" | "db-api" | "other" | "none">;
exportChangesForCli: () => string;
downloadChanges: (filename?: string) => void;
}, "init" | "toggle" | "enable" | "disable" | "toggleEditMode" | "togglePickMode" | "setHoveredSelector" | "generateSelector" | "getConfiguredSelectors" | "setScreenSpec" | "clearScreenSpec" | "togglePanel" | "openPanel" | "closePanel" | "getElementConfig" | "setElementConfig" | "deleteElementConfig" | "startEditing" | "stopEditing" | "exportConfigs" | "exportAsFile" | "downloadAnnotations" | "importConfigs" | "clearAllConfigs" | "detectSourceBinding" | "autoDetectElementInfo" | "scanCurrentPage" | "scanAllPages" | "clearScanResults" | "loadAnalysisData" | "getAnalyzedElement" | "getAnalyzedElementsForPage" | "applyAnalysisToPage" | "clearAnalysisResults" | "removeAnalysisResult" | "clearHiddenSelectors" | "exportChangesForCli" | "downloadChanges">>;

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

