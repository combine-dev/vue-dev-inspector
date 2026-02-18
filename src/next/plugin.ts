import { webpackPlugin } from '../unplugin'
import type { DevInspectorPluginOptions } from '../core/options'

export type { DevInspectorPluginOptions }

interface NextConfig {
  webpack?: (config: any, context: any) => any
  [key: string]: any
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
export function withDevInspector(
  nextConfig: NextConfig = {},
  inspectorOptions: DevInspectorPluginOptions = {}
): NextConfig {
  return {
    ...nextConfig,
    webpack(config: any, context: any) {
      // Only add plugin in development
      if (context.dev) {
        config.plugins.push(
          webpackPlugin({
            ...inspectorOptions,
            include: inspectorOptions.include || ['**/*.tsx', '**/*.jsx'],
          })
        )
      }

      // Chain with user's webpack config if present
      return typeof nextConfig.webpack === 'function'
        ? nextConfig.webpack(config, context)
        : config
    },
  }
}

export { createDevInspectorRouteHandlers } from './route-handler'
export type { RouteHandlerOptions } from './route-handler'

export default withDevInspector
