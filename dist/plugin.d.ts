import { Plugin as Plugin_2 } from 'vue';

declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
}

declare interface DevInspectorOptions {
    storageKey?: string;
    enabledInProduction?: boolean;
    initialAnnotations?: Record<string, ElementConfig>;
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

