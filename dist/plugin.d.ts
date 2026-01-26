import { Plugin as Plugin_2 } from 'vue';

declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
}

declare interface AnalyzedElement {
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

declare interface SourceBindingInfo {
    type: 'static' | 'v-model' | 'prop' | 'computed' | 'store' | 'api';
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

