import { Plugin as Plugin_2 } from 'vite';

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

declare function vitePluginDevInspector(options?: DevInspectorVitePluginOptions): Plugin_2;
export default vitePluginDevInspector;
export { vitePluginDevInspector }

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

