import { ActionInfo } from './composables/useDevInspector';
import { AnalyzedElement } from './composables/useDevInspector';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { DevInspectorOptions } from './composables/useDevInspector';
import { DevInspectorOptions as DevInspectorOptions_2 } from '../composables/useDevInspector';
import { DevMeta } from './composables/useDevInspector';
import { ElementConfig } from './composables/useDevInspector';
import { ElementNote } from './composables/useDevInspector';
import { ExtractPropTypes } from 'vue';
import { FieldInfo } from './composables/useDevInspector';
import { LinkInfo } from './composables/useDevInspector';
import { Plugin as Plugin_2 } from 'vue';
import { Plugin as Plugin_3 } from 'vite';
import { ProjectAnalysis } from './composables/useDevInspector';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { ScreenSpec } from './composables/useDevInspector';
import { SourceBindingInfo } from './composables/useDevInspector';
import { useDevInspector } from './composables/useDevInspector';
import { useDevInspectorStore } from './composables/useDevInspector';

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

export { ActionInfo }

export { AnalyzedElement }

export declare const DevElementEditor: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DevInspector: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DevInspectorOptions_2>, {
storageKey: string;
enabledInProduction: boolean;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DevInspectorOptions_2>, {
storageKey: string;
enabledInProduction: boolean;
}>>> & Readonly<{}>, {
storageKey: string;
enabledInProduction: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export { DevInspectorOptions }

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
     * Include file patterns (default: ['**\/*.vue'])
     */
    include?: string[];
    /**
     * Exclude file patterns (default: ['node_modules/**'])
     */
    exclude?: string[];
}

export { DevMeta }

export declare const DevPanel: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const DevPickOverlay: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export { ElementConfig }

export { ElementNote }

export { FieldInfo }

export { LinkInfo }

export declare interface PluginOptions extends DevInspectorOptions {
    /**
     * Whether to auto-register the DevInspector component globally
     * @default true
     */
    autoRegister?: boolean;
}

export { ProjectAnalysis }

export { ScreenSpec }

export { SourceBindingInfo }

export { useDevInspector }

export { useDevInspectorStore }

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

