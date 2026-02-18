import * as path from 'path'
import { handleFetchRequest } from '../core/middleware'

export interface RouteHandlerOptions {
  /**
   * Directory for per-page annotation JSON files
   * (default: './dev-inspector-annotations')
   */
  syncDir?: string
}

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
export function createDevInspectorRouteHandlers(options: RouteHandlerOptions = {}) {
  const { syncDir = './dev-inspector-annotations' } = options
  const resolvedSyncDir = path.isAbsolute(syncDir)
    ? syncDir
    : path.resolve(process.cwd(), syncDir)

  async function handleRequest(request: Request): Promise<Response> {
    const result = await handleFetchRequest(request, resolvedSyncDir)
    return result || new Response(JSON.stringify({ error: 'Not found' }), { status: 404 })
  }

  return {
    annotations: {
      GET: handleRequest,
      POST: handleRequest,
      OPTIONS: handleRequest,
    },
    masters: {
      GET: handleRequest,
      POST: handleRequest,
      OPTIONS: handleRequest,
    },
  }
}
