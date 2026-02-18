import type { DbMapping } from './options'

/**
 * Transform Vue template to inject data-di-* attributes on mustache bindings.
 * Wraps {{ expression }} with <span data-di-binding="..."> tags.
 */
export function transformTemplate(
  template: string,
  bindingToDb: Map<string, DbMapping>,
  componentName: string
): string {
  let result = template

  // Pattern to match {{ expression }} that's not already wrapped
  // Captures: mustache expressions like {{ item.name }}, {{ user.email }}, etc.
  const mustachePattern = /\{\{\s*([^{}]+?)\s*\}\}/g

  // Track replacements to avoid double-wrapping
  const replacements: Array<{ original: string; replacement: string }> = []

  let match
  while ((match = mustachePattern.exec(template)) !== null) {
    const fullMatch = match[0]  // {{ expression }}
    const expression = match[1].trim()  // expression

    // Skip if:
    // - Already wrapped in a span with data-di-binding
    // - Is a complex expression (ternary, function call, etc.)
    // - Is just a simple variable without dot notation (might be local)
    const beforeContext = template.slice(Math.max(0, match.index - 100), match.index)
    if (beforeContext.includes('data-di-binding')) {
      continue
    }

    // Skip ternary and pipes (too complex)
    if (expression.includes('?') && expression.includes(':')) {
      continue  // Ternary operator
    }
    if (expression.includes('|')) {
      continue  // Vue filters/pipes
    }

    // Extract the binding path (handle things like item.title, user?.name, etc.)
    let bindingPath = expression
      .replace(/\?\.?/g, '.')  // item?.name -> item.name
      .replace(/\s+/g, '')     // Remove whitespace
      .replace(/^\(|\)$/g, '') // Remove wrapping parens

    // Handle function calls like dispDate(notification.startDate) -> notification.startDate
    const funcCallMatch = bindingPath.match(/^\w+\(([^)]+)\)$/)
    if (funcCallMatch) {
      bindingPath = funcCallMatch[1]  // Extract the argument
    }

    // Build attributes
    let attrs = `data-di-binding="${bindingPath}"`
    attrs += ` data-di-component="${componentName}"`

    // Look up DB mapping
    // Try exact match first, then try the last part (e.g., 'notification.title' -> 'title')
    let dbMapping = bindingToDb.get(bindingPath)
    if (!dbMapping && bindingPath.includes('.')) {
      const lastPart = bindingPath.split('.').pop()!
      // Try common patterns: item.X, notification.X, user.X, etc.
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

    // Wrap in span
    const replacement = `<span ${attrs}>${fullMatch}</span>`
    replacements.push({ original: fullMatch, replacement })
  }

  // Apply replacements — replaceAll to handle same expression in multiple locations
  for (const { original, replacement } of replacements.reverse()) {
    result = result.split(original).join(replacement)
  }

  return result
}
