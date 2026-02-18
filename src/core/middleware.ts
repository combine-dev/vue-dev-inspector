import * as fs from 'fs'
import * as path from 'path'
import { pagePathToFileName } from './utils'

type NodeMiddleware = (req: any, res: any, next: () => void) => void

/**
 * Create Node.js-style middleware (req, res, next) for dev inspector sync API.
 * Works with Vite's dev server and Express/Connect-style servers.
 */
export function createNodeMiddleware(syncDir: string): NodeMiddleware {
  return (req, res, next) => {
    const url = new URL(req.url || '', 'http://localhost')

    // GET: Read annotations for a page
    if (url.pathname === '/__dev-inspector/annotations' && req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
      try {
        const page = url.searchParams.get('page') || '/'
        const filePath = path.join(syncDir, pagePathToFileName(page))

        if (fs.existsSync(filePath)) {
          const data = fs.readFileSync(filePath, 'utf-8')
          res.end(data)
        } else {
          res.end(JSON.stringify({ annotations: {}, screenConfig: null }))
        }
      } catch (e) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: String(e) }))
      }
      return
    }

    // POST: Write annotations for a page + broadcast
    if (url.pathname === '/__dev-inspector/annotations' && req.method === 'POST') {
      let body = ''
      req.on('data', (chunk: string) => { body += chunk })
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        try {
          const payload = JSON.parse(body)
          const { page, ...data } = payload
          const filePath = path.join(syncDir, pagePathToFileName(page || '/'))

          // Ensure directory exists
          if (!fs.existsSync(syncDir)) {
            fs.mkdirSync(syncDir, { recursive: true })
          }

          // Write to file
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

          res.end(JSON.stringify({ ok: true }))
          console.log('[vue-dev-inspector] Annotations saved:', pagePathToFileName(page || '/'))
        } catch (e) {
          res.statusCode = 400
          res.end(JSON.stringify({ error: String(e) }))
        }
      })
      return
    }

    // GET: Read master definitions
    if (url.pathname === '/__dev-inspector/masters' && req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
      try {
        const filePath = path.join(syncDir, '_masters.json')
        if (fs.existsSync(filePath)) {
          const data = fs.readFileSync(filePath, 'utf-8')
          res.end(data)
        } else {
          res.end(JSON.stringify({ masters: {} }))
        }
      } catch (e) {
        res.statusCode = 500
        res.end(JSON.stringify({ error: String(e) }))
      }
      return
    }

    // POST: Write master definitions + broadcast
    if (url.pathname === '/__dev-inspector/masters' && req.method === 'POST') {
      let body = ''
      req.on('data', (chunk: string) => { body += chunk })
      req.on('end', () => {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')
        try {
          const payload = JSON.parse(body)
          const filePath = path.join(syncDir, '_masters.json')

          if (!fs.existsSync(syncDir)) {
            fs.mkdirSync(syncDir, { recursive: true })
          }

          fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8')

          res.end(JSON.stringify({ ok: true }))
          console.log('[vue-dev-inspector] Masters saved:', Object.keys(payload.masters || {}).length, 'definitions')
        } catch (e) {
          res.statusCode = 400
          res.end(JSON.stringify({ error: String(e) }))
        }
      })
      return
    }

    // CORS preflight
    if (req.url?.startsWith('/__dev-inspector/') && req.method === 'OPTIONS') {
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
      res.statusCode = 204
      res.end()
      return
    }

    next()
  }
}

/**
 * Handle a Web Fetch API Request for dev inspector sync API.
 * Used by Next.js Route Handlers and other modern frameworks.
 */
export async function handleFetchRequest(
  request: Request,
  syncDir: string
): Promise<Response | null> {
  const url = new URL(request.url)
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  // GET: Read annotations for a page
  if (url.pathname.endsWith('/annotations') && request.method === 'GET') {
    try {
      const page = url.searchParams.get('page') || '/'
      const filePath = path.join(syncDir, pagePathToFileName(page))

      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8')
        return new Response(data, { headers })
      }
      return new Response(JSON.stringify({ annotations: {}, screenConfig: null }), { headers })
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers })
    }
  }

  // POST: Write annotations for a page
  if (url.pathname.endsWith('/annotations') && request.method === 'POST') {
    try {
      const payload = await request.json()
      const { page, ...data } = payload
      const filePath = path.join(syncDir, pagePathToFileName(page || '/'))

      if (!fs.existsSync(syncDir)) {
        fs.mkdirSync(syncDir, { recursive: true })
      }

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')
      console.log('[vue-dev-inspector] Annotations saved:', pagePathToFileName(page || '/'))
      return new Response(JSON.stringify({ ok: true }), { headers })
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 400, headers })
    }
  }

  // GET: Read master definitions
  if (url.pathname.endsWith('/masters') && request.method === 'GET') {
    try {
      const filePath = path.join(syncDir, '_masters.json')
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8')
        return new Response(data, { headers })
      }
      return new Response(JSON.stringify({ masters: {} }), { headers })
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers })
    }
  }

  // POST: Write master definitions
  if (url.pathname.endsWith('/masters') && request.method === 'POST') {
    try {
      const payload = await request.json()
      const filePath = path.join(syncDir, '_masters.json')

      if (!fs.existsSync(syncDir)) {
        fs.mkdirSync(syncDir, { recursive: true })
      }

      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8')
      console.log('[vue-dev-inspector] Masters saved:', Object.keys(payload.masters || {}).length, 'definitions')
      return new Response(JSON.stringify({ ok: true }), { headers })
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }), { status: 400, headers })
    }
  }

  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    })
  }

  return null
}
