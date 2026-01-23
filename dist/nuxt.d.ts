declare interface ActionInfo {
    type: 'navigate' | 'api' | 'modal' | 'emit' | 'function';
    target?: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    description?: string;
    params?: Record<string, string>;
}

declare const _default: any;
export default _default;

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

export declare interface ModuleOptions extends DevInspectorOptions {
    /**
     * Enable the module
     * @default true in development
     */
    enabled?: boolean;
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

