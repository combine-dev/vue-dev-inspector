import { UnpluginInstance } from 'unplugin';

declare interface DevInspectorPluginOptions {
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

export declare const unpluginDevInspector: UnpluginInstance<DevInspectorPluginOptions, boolean>;

export declare const vitePlugin: (options: DevInspectorPluginOptions) => any;

export declare const webpackPlugin: (options: DevInspectorPluginOptions) => any;

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

