import { DevInspectorOptions } from './composables/useDevInspector';
import { Plugin as Plugin_2 } from 'vue';

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

