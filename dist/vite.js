import * as v from "fs";
import * as m from "path";
function x(n) {
  const e = /* @__PURE__ */ new Map();
  try {
    if (!v.existsSync(n))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${n}`), e;
    const t = JSON.parse(v.readFileSync(n, "utf-8"));
    for (const [, l] of Object.entries(t.components))
      for (const i of l.elements)
        if (i.binding && i.db) {
          const o = i.binding.replace(/^\./, "");
          e.has(o) || e.set(o, i.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${e.size} binding->DB mappings from analysis`);
  } catch (t) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", t);
  }
  return e;
}
function $(n, e, t) {
  let l = n;
  const i = /\{\{\s*([^{}]+?)\s*\}\}/g, o = [];
  let r;
  for (; (r = i.exec(n)) !== null; ) {
    const a = r[0], c = r[1].trim();
    if (n.slice(Math.max(0, r.index - 100), r.index).includes("data-di-binding") || c.includes("?") || c.includes("|") || /\([^)]*\)/.test(c))
      continue;
    const d = c.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    let u = `data-di-binding="${d}"`;
    u += ` data-di-component="${t}"`;
    let s = e.get(d);
    if (!s && d.includes(".")) {
      const p = d.split(".").pop();
      for (const [b, h] of e.entries())
        if (b.endsWith("." + p) || b === p) {
          s = h;
          break;
        }
    }
    s && (u += ` data-di-db="${s.table}.${s.column}"`, s.comment && (u += ` data-di-db-comment="${s.comment.replace(/"/g, "&quot;")}"`));
    const g = `<span ${u}>${a}</span>`;
    o.push({ original: a, replacement: g });
  }
  for (const { original: a, replacement: c } of o.reverse())
    l = l.replace(a, c);
  return l;
}
function w(n) {
  return m.basename(n, ".vue");
}
function y(n = {}) {
  const {
    enabled: e = process.env.NODE_ENV !== "production",
    analysisPath: t,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: l = ["node_modules/**", "**/node_modules/**"]
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
      if (console.log("[vue-dev-inspector] Plugin enabled"), t) {
        const o = m.isAbsolute(t) ? t : m.resolve(process.cwd(), t);
        i = x(o);
      }
    },
    transform(o, r) {
      if (!e || !r.endsWith(".vue")) return null;
      const a = m.relative(process.cwd(), r);
      if (l.some((p) => p.includes("**") ? a.includes(p.replace("**/", "").replace("/**", "")) : a.startsWith(p))) return null;
      const f = o.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!f) return null;
      const d = f[1], u = w(r), s = $(d, i, u);
      return s === d ? null : {
        code: o.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${s}</template>`
        ),
        map: null
        // TODO: proper source map support
      };
    }
  };
}
export {
  y as default,
  y as vitePluginDevInspector
};
