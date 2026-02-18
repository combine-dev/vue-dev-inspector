import type { DbMapping } from './options'

/**
 * Transform JSX/TSX to inject data-di-* attributes on expression bindings.
 *
 * Wraps `{obj.prop}` in JSX text context with a <span> containing
 * data-di-binding, data-di-component, and optionally data-di-db attributes.
 *
 * Before: <p>{user.name}</p>
 * After:  <p><span data-di-binding="user.name" data-di-component="UserProfile">{user.name}</span></p>
 */
export function transformJsx(
  code: string,
  bindingToDb: Map<string, DbMapping>,
  componentName: string
): string {
  // Match {expression} in JSX text context:
  // - Must be between > and < (JSX child position)
  // - Expression must be a dot-access path (obj.prop, obj?.prop, obj.nested.prop)
  // - Skip already-wrapped expressions (data-di-binding nearby)
  const jsxExprPattern = /(?<=>[\s\n]*)\{(\s*[\w$]+(?:\.[\w$]+|\?\.\w+)+\s*)\}(?=[\s\n]*<)/g

  const replacements: Array<{
    index: number
    length: number
    original: string
    replacement: string
  }> = []

  let match
  while ((match = jsxExprPattern.exec(code)) !== null) {
    const fullMatch = match[0]   // {expression}
    const expression = match[1].trim()

    // Skip if already wrapped
    const beforeContext = code.slice(Math.max(0, match.index - 100), match.index)
    if (beforeContext.includes('data-di-binding')) {
      continue
    }

    // Skip styles.xxx, children, className patterns
    if (/^(styles|style|css|className|children)\./.test(expression)) {
      continue
    }

    // Skip array method chains (e.g., items.map, items.filter, items.length)
    const lastSegment = expression.split('.').pop() || ''
    if (/^(map|filter|reduce|forEach|find|some|every|sort|slice|length|keys|values|entries|join|includes|indexOf|flat|flatMap)$/.test(lastSegment)) {
      continue
    }

    // Normalize binding path
    let bindingPath = expression
      .replace(/\?\.?/g, '.')   // obj?.prop -> obj.prop
      .replace(/\s+/g, '')

    // Build attributes
    let attrs = `data-di-binding="${bindingPath}"`
    attrs += ` data-di-component="${componentName}"`

    // Look up DB mapping (same logic as Vue transform)
    let dbMapping = bindingToDb.get(bindingPath)
    if (!dbMapping && bindingPath.includes('.')) {
      const lastPart = bindingPath.split('.').pop()!
      for (const [key, value] of bindingToDb.entries()) {
        if (key.endsWith('.' + lastPart) || key === lastPart) {
          dbMapping = value
          break
        }
      }
    }

    if (dbMapping) {
      attrs += ` data-di-db="${dbMapping.table}.${dbMapping.column}"`
      if (dbMapping.type) {
        attrs += ` data-di-db-type="${dbMapping.type}"`
      }
      if (dbMapping.comment) {
        attrs += ` data-di-db-comment="${dbMapping.comment.replace(/"/g, '&quot;')}"`
      }
    }

    const replacement = `<span ${attrs}>${fullMatch}</span>`
    replacements.push({
      index: match.index,
      length: fullMatch.length,
      original: fullMatch,
      replacement,
    })
  }

  if (replacements.length === 0) return code

  // Apply replacements in reverse order to preserve indices
  let result = code
  for (const { index, length, replacement } of replacements.reverse()) {
    result = result.slice(0, index) + replacement + result.slice(index + length)
  }

  return result
}
