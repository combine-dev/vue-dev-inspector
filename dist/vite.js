import * as v from "fs";
import * as m from "path";
function x(n) {
  const e = /* @__PURE__ */ new Map();
  try {
    if (!v.existsSync(n))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${n}`), e;
    const t = JSON.parse(v.readFileSync(n, "utf-8"));
    for (const [, r] of Object.entries(t.components))
      for (const i of r.elements)
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
  let r = n;
  const i = /\{\{\s*([^{}]+?)\s*\}\}/g, o = [];
  let l;
  for (; (l = i.exec(n)) !== null; ) {
    const a = l[0], c = l[1].trim();
    if (n.slice(Math.max(0, l.index - 100), l.index).includes("data-di-binding") || c.includes("?") || c.includes("|") || /\([^)]*\)/.test(c))
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
    r = r.replace(a, c);
  return r;
}
function w(n) {
  return m.basename(n, ".vue");
}
function y(n = {}) {
  const {
    enabled: e = process.env.NODE_ENV !== "production",
    analysisPath: t,
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: r = ["node_modules/**", "**/node_modules/**"]
  } = n;
  let i = /* @__PURE__ */ new Map();
  return {
    name: "vite-plugin-dev-inspector",
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
    transform(o, l) {
      if (!e || !l.endsWith(".vue")) return null;
      const a = m.relative(process.cwd(), l);
      if (r.some((p) => p.includes("**") ? a.includes(p.replace("**/", "").replace("/**", "")) : a.startsWith(p))) return null;
      const f = o.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!f) return null;
      const d = f[1], u = w(l), s = $(d, i, u);
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
