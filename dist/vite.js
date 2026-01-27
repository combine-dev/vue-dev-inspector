import * as h from "fs";
import * as m from "path";
function x(n) {
  const e = /* @__PURE__ */ new Map();
  try {
    if (!h.existsSync(n))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${n}`), e;
    const o = JSON.parse(h.readFileSync(n, "utf-8"));
    for (const [, a] of Object.entries(o.components))
      for (const i of a.elements)
        if (i.binding && i.db) {
          const s = i.binding.replace(/^\./, "");
          e.has(s) || e.set(s, i.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${e.size} binding->DB mappings from analysis`);
  } catch (o) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", o);
  }
  return e;
}
function w(n, e, o) {
  let a = n;
  const i = /\{\{\s*([^{}]+?)\s*\}\}/g, s = [];
  let t;
  for (; (t = i.exec(n)) !== null; ) {
    const d = t[0], u = t[1].trim();
    if (n.slice(Math.max(0, t.index - 100), t.index).includes("data-di-binding") || u.includes("?") && u.includes(":") || u.includes("|"))
      continue;
    let c = u.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    const p = c.match(/^\w+\(([^)]+)\)$/);
    p && (c = p[1]);
    let r = `data-di-binding="${c}"`;
    r += ` data-di-component="${o}"`;
    let l = e.get(c);
    if (!l && c.includes(".")) {
      const v = c.split(".").pop();
      for (const [b, $] of e.entries())
        if (b.endsWith("." + v) || b === v) {
          l = $;
          break;
        }
    }
    l && (r += ` data-di-db="${l.table}.${l.column}"`, l.type && (r += ` data-di-db-type="${l.type}"`), l.comment && (r += ` data-di-db-comment="${l.comment.replace(/"/g, "&quot;")}"`));
    const f = `<span ${r}>${d}</span>`;
    s.push({ original: d, replacement: f });
  }
  for (const { original: d, replacement: u } of s.reverse())
    a = a.replace(d, u);
  return a;
}
function y(n) {
  return m.basename(n, ".vue");
}
function M(n = {}) {
  const {
    enabled: e = process.env.NODE_ENV !== "production",
    analysisPath: o,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: a = ["node_modules/**", "**/node_modules/**"]
  } = n;
  let i = /* @__PURE__ */ new Map();
  return {
    name: "vite-plugin-dev-inspector",
    enforce: "pre",
    // Run before @vitejs/plugin-vue processes templates
    configResolved() {
      if (!e) {
        console.log("[vue-dev-inspector] Plugin disabled");
        return;
      }
      if (console.log("[vue-dev-inspector] Plugin enabled"), o) {
        const s = m.isAbsolute(o) ? o : m.resolve(process.cwd(), o);
        i = x(s);
      }
    },
    transform(s, t) {
      if (!e || !t.endsWith(".vue")) return null;
      console.log(`[vue-dev-inspector] transform called: ${t}`);
      const d = m.relative(process.cwd(), t);
      if (a.some((f) => f.includes("**") ? d.includes(f.replace("**/", "").replace("/**", "")) : d.startsWith(f))) return null;
      const g = s.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!g)
        return console.log(`[vue-dev-inspector] No template found in: ${t}`), null;
      const c = g[1], p = y(t);
      console.log(`[vue-dev-inspector] Processing template for: ${p}`);
      const r = w(c, i, p);
      return r === c ? (console.log(`[vue-dev-inspector] No changes for: ${p}`), null) : (console.log(`[vue-dev-inspector] Transformed: ${p}`), {
        code: s.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${r}</template>`
        ),
        map: null
        // TODO: proper source map support
      });
    }
  };
}
export {
  M as default,
  M as vitePluginDevInspector
};
