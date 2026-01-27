declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
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

declare interface ComponentApi {
    endpoint: string;
    method: string;
    composable: string;
    loadTrigger: LoadTrigger;
    variable?: string;
    responseType?: string;
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

declare const _default: any;
export default _default;

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
    fieldInfo?: FieldInfo;
    actionInfo?: ActionInfo;
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
}

declare type ElementTag = 'db' | 'form' | 'button' | 'link' | 'modal' | 'conditional' | 'computed' | 'api';

declare interface FieldInfo {
    table: string;
    column: string;
    type?: string;
    validation?: string[];
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

export declare interface ModuleOptions extends DevInspectorOptions {
    /**
     * Enable the module
     * @default true in development
     */
    enabled?: boolean;
    /**
     * Path to analysis JSON file for DB mapping
     */
    analysisPath?: string;
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

declare interface SourceBindingInfo {
    type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api';
    source?: string;
    apiEndpoint?: string;
    apiMethod?: string;
    storeKey?: string;
    isStatic?: boolean;
}

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

