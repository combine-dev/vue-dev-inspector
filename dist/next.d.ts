/**
 * Creates Next.js App Router route handlers for the dev inspector sync API.
 *
 * Usage: Create route files in your Next.js app:
 *
 * ```ts
 * // app/api/__dev-inspector/annotations/route.ts
 * import { createDevInspectorRouteHandlers } from 'vue-dev-inspector/next'
 * const handlers = createDevInspectorRouteHandlers()
 * export const GET = handlers.annotations.GET
 * export const POST = handlers.annotations.POST
 * export const OPTIONS = handlers.annotations.OPTIONS
 * ```
 *
 * ```ts
 * // app/api/__dev-inspector/masters/route.ts
 * import { createDevInspectorRouteHandlers } from 'vue-dev-inspector/next'
 * const handlers = createDevInspectorRouteHandlers()
 * export const GET = handlers.masters.GET
 * export const POST = handlers.masters.POST
 * export const OPTIONS = handlers.masters.OPTIONS
 * ```
 */
export declare function createDevInspectorRouteHandlers(options?: RouteHandlerOptions): {
    annotations: {
        GET: (request: Request) => Promise<Response>;
        POST: (request: Request) => Promise<Response>;
        OPTIONS: (request: Request) => Promise<Response>;
    };
    masters: {
        GET: (request: Request) => Promise<Response>;
        POST: (request: Request) => Promise<Response>;
        OPTIONS: (request: Request) => Promise<Response>;
    };
};

export declare interface DevInspectorPluginOptions {
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

declare interface NextConfig {
    webpack?: (config: any, context: any) => any;
    [key: string]: any;
}

export declare interface RouteHandlerOptions {
    /**
     * Directory for per-page annotation JSON files
     * (default: './dev-inspector-annotations')
     */
    syncDir?: string;
}

/**
 * Wraps a Next.js config to add the dev-inspector Webpack plugin.
 * JSX/TSX files are automatically transformed to inject data-di-* attributes.
 *
 * Usage in next.config.js:
 * ```js
 * const { withDevInspector } = require('vue-dev-inspector/next')
 * module.exports = withDevInspector({ ... })
 * ```
 *
 * NOTE: Turbopack is not supported. Use `next dev --webpack` flag.
 */
declare function withDevInspector(nextConfig?: NextConfig, inspectorOptions?: DevInspectorPluginOptions): NextConfig;
export default withDevInspector;
export { withDevInspector }

export { }


declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        devInspector: {
            storageKey?: string;
            enabledInProduction?: boolean;
        };
    }
}

