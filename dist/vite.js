import * as b from "fs";
import * as m from "path";
function $(n) {
  const e = /* @__PURE__ */ new Map();
  try {
    if (!b.existsSync(n))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${n}`), e;
    const o = JSON.parse(b.readFileSync(n, "utf-8"));
    for (const [, c] of Object.entries(o.components))
      for (const r of c.elements)
        if (r.binding && r.db) {
          const s = r.binding.replace(/^\./, "");
          e.has(s) || e.set(s, r.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${e.size} binding->DB mappings from analysis`);
  } catch (o) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", o);
  }
  return e;
}
function x(n, e, o) {
  let c = n;
  const r = /\{\{\s*([^{}]+?)\s*\}\}/g, s = [];
  let t;
  for (; (t = r.exec(n)) !== null; ) {
    const a = t[0], d = t[1].trim();
    if (n.slice(Math.max(0, t.index - 100), t.index).includes("data-di-binding") || d.includes("?") || d.includes("|") || /\([^)]*\)/.test(d))
      continue;
    const u = d.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    let i = `data-di-binding="${u}"`;
    i += ` data-di-component="${o}"`;
    let l = e.get(u);
    if (!l && u.includes(".")) {
      const p = u.split(".").pop();
      for (const [v, h] of e.entries())
        if (v.endsWith("." + p) || v === p) {
          l = h;
          break;
        }
    }
    l && (i += ` data-di-db="${l.table}.${l.column}"`, l.comment && (i += ` data-di-db-comment="${l.comment.replace(/"/g, "&quot;")}"`));
    const g = `<span ${i}>${a}</span>`;
    s.push({ original: a, replacement: g });
  }
  for (const { original: a, replacement: d } of s.reverse())
    c = c.replace(a, d);
  return c;
}
function w(n) {
  return m.basename(n, ".vue");
}
function P(n = {}) {
  const {
    enabled: e = process.env.NODE_ENV !== "production",
    analysisPath: o,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: c = ["node_modules/**", "**/node_modules/**"]
  } = n;
  let r = /* @__PURE__ */ new Map();
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
        r = $(s);
      }
    },
    transform(s, t) {
      if (!e || !t.endsWith(".vue")) return null;
      console.log(`[vue-dev-inspector] transform called: ${t}`);
      const a = m.relative(process.cwd(), t);
      if (c.some((p) => p.includes("**") ? a.includes(p.replace("**/", "").replace("/**", "")) : a.startsWith(p))) return null;
      const f = s.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!f)
        return console.log(`[vue-dev-inspector] No template found in: ${t}`), null;
      const u = f[1], i = w(t);
      console.log(`[vue-dev-inspector] Processing template for: ${i}`);
      const l = x(u, r, i);
      return l === u ? (console.log(`[vue-dev-inspector] No changes for: ${i}`), null) : (console.log(`[vue-dev-inspector] Transformed: ${i}`), {
        code: s.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${l}</template>`
        ),
        map: null
        // TODO: proper source map support
      });
    }
  };
}
export {
  P as default,
  P as vitePluginDevInspector
};
