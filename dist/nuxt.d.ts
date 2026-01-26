import { DevInspectorOptions } from '../composables/useDevInspector';

declare const _default: any;
export default _default;

export declare interface ModuleOptions extends DevInspectorOptions {
    /**
     * Enable the module
     * @default true in development
     */
    enabled?: boolean;
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

