import * as b from "fs";
import * as m from "path";
function h(t) {
  const e = /* @__PURE__ */ new Map();
  try {
    if (!b.existsSync(t))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${t}`), e;
    const s = JSON.parse(b.readFileSync(t, "utf-8"));
    for (const [, c] of Object.entries(s.components))
      for (const r of c.elements)
        if (r.binding && r.db) {
          const l = r.binding.replace(/^\./, "");
          e.has(l) || e.set(l, r.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${e.size} binding->DB mappings from analysis`);
  } catch (s) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", s);
  }
  return e;
}
function x(t, e, s) {
  let c = t;
  const r = /\{\{\s*([^{}]+?)\s*\}\}/g, l = [];
  let o;
  for (; (o = r.exec(t)) !== null; ) {
    const a = o[0], d = o[1].trim();
    if (t.slice(Math.max(0, o.index - 100), o.index).includes("data-di-binding") || d.includes("?") || d.includes("|") || /\([^)]*\)/.test(d))
      continue;
    const u = d.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    let i = `data-di-binding="${u}"`;
    i += ` data-di-component="${s}"`;
    let n = e.get(u);
    if (!n && u.includes(".")) {
      const p = u.split(".").pop();
      for (const [v, $] of e.entries())
        if (v.endsWith("." + p) || v === p) {
          n = $;
          break;
        }
    }
    n && (i += ` data-di-db="${n.table}.${n.column}"`, n.type && (i += ` data-di-db-type="${n.type}"`), n.comment && (i += ` data-di-db-comment="${n.comment.replace(/"/g, "&quot;")}"`));
    const g = `<span ${i}>${a}</span>`;
    l.push({ original: a, replacement: g });
  }
  for (const { original: a, replacement: d } of l.reverse())
    c = c.replace(a, d);
  return c;
}
function y(t) {
  return m.basename(t, ".vue");
}
function w(t = {}) {
  const {
    enabled: e = process.env.NODE_ENV !== "production",
    analysisPath: s,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: c = ["node_modules/**", "**/node_modules/**"]
  } = t;
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
      if (console.log("[vue-dev-inspector] Plugin enabled"), s) {
        const l = m.isAbsolute(s) ? s : m.resolve(process.cwd(), s);
        r = h(l);
      }
    },
    transform(l, o) {
      if (!e || !o.endsWith(".vue")) return null;
      console.log(`[vue-dev-inspector] transform called: ${o}`);
      const a = m.relative(process.cwd(), o);
      if (c.some((p) => p.includes("**") ? a.includes(p.replace("**/", "").replace("/**", "")) : a.startsWith(p))) return null;
      const f = l.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!f)
        return console.log(`[vue-dev-inspector] No template found in: ${o}`), null;
      const u = f[1], i = y(o);
      console.log(`[vue-dev-inspector] Processing template for: ${i}`);
      const n = x(u, r, i);
      return n === u ? (console.log(`[vue-dev-inspector] No changes for: ${i}`), null) : (console.log(`[vue-dev-inspector] Transformed: ${i}`), {
        code: l.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${n}</template>`
        ),
        map: null
        // TODO: proper source map support
      });
    }
  };
}
export {
  w as default,
  w as vitePluginDevInspector
};
