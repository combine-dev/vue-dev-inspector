import * as r from "fs";
import * as f from "path";
function O(i) {
  const a = /* @__PURE__ */ new Map();
  try {
    if (!r.existsSync(i))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${i}`), a;
    const u = JSON.parse(r.readFileSync(i, "utf-8"));
    for (const [, m] of Object.entries(u.components))
      for (const v of m.elements)
        if (v.binding && v.db) {
          const y = v.binding.replace(/^\./, "");
          a.has(y) || a.set(y, v.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${a.size} binding->DB mappings from analysis`);
  } catch (u) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", u);
  }
  return a;
}
function C(i, a, u) {
  let m = i;
  const v = /\{\{\s*([^{}]+?)\s*\}\}/g, y = [];
  let s;
  for (; (s = v.exec(i)) !== null; ) {
    const c = s[0], t = s[1].trim();
    if (i.slice(Math.max(0, s.index - 100), s.index).includes("data-di-binding") || t.includes("?") && t.includes(":") || t.includes("|"))
      continue;
    let g = t.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    const l = g.match(/^\w+\(([^)]+)\)$/);
    l && (g = l[1]);
    let d = `data-di-binding="${g}"`;
    d += ` data-di-component="${u}"`;
    let n = a.get(g);
    if (!n && g.includes(".")) {
      const p = g.split(".").pop();
      for (const [h, S] of a.entries())
        if (h.endsWith("." + p) || h === p) {
          n = S;
          break;
        }
    }
    n && (d += ` data-di-db="${n.table}.${n.column}"`, n.type && (d += ` data-di-db-type="${n.type}"`), n.comment && (d += ` data-di-db-comment="${n.comment.replace(/"/g, "&quot;")}"`));
    const o = `<span ${d}>${c}</span>`;
    y.push({ original: c, replacement: o });
  }
  for (const { original: c, replacement: t } of y.reverse())
    m = m.split(c).join(t);
  return m;
}
function w(i) {
  return f.basename(i, ".vue");
}
function b(i) {
  return !i || i === "/" ? "index.json" : i.slice(1).replace(/\//g, "_") + ".json";
}
function N(i = {}) {
  const {
    enabled: a = process.env.NODE_ENV !== "production",
    analysisPath: u,
    syncDir: m = "./dev-inspector-annotations",
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: v = ["node_modules/**", "**/node_modules/**"]
  } = i;
  let y = /* @__PURE__ */ new Map(), s = "";
  return {
    name: "vite-plugin-dev-inspector",
    enforce: "pre",
    // Run before @vitejs/plugin-vue processes templates
    configResolved() {
      if (!a) {
        console.log("[vue-dev-inspector] Plugin disabled");
        return;
      }
      if (console.log("[vue-dev-inspector] Plugin enabled"), s = f.isAbsolute(m) ? m : f.resolve(process.cwd(), m), u) {
        const c = f.isAbsolute(u) ? u : f.resolve(process.cwd(), u);
        y = O(c);
      }
    },
    configureServer(c) {
      a && (r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), c.middlewares.use((t, e, g) => {
        var d;
        const l = new URL(t.url || "", "http://localhost");
        if (l.pathname === "/__dev-inspector/annotations" && t.method === "GET") {
          e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
          try {
            const n = l.searchParams.get("page") || "/", o = f.join(s, b(n));
            if (r.existsSync(o)) {
              const p = r.readFileSync(o, "utf-8");
              e.end(p);
            } else
              e.end(JSON.stringify({ annotations: {}, screenConfig: null }));
          } catch (n) {
            e.statusCode = 500, e.end(JSON.stringify({ error: String(n) }));
          }
          return;
        }
        if (l.pathname === "/__dev-inspector/annotations" && t.method === "POST") {
          let n = "";
          t.on("data", (o) => {
            n += o;
          }), t.on("end", () => {
            e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
            try {
              const o = JSON.parse(n), { page: p, ...h } = o, S = f.join(s, b(p || "/"));
              r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), r.writeFileSync(S, JSON.stringify(h, null, 2), "utf-8"), e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Annotations saved:", b(p || "/"));
            } catch (o) {
              e.statusCode = 400, e.end(JSON.stringify({ error: String(o) }));
            }
          });
          return;
        }
        if (l.pathname === "/__dev-inspector/masters" && t.method === "GET") {
          e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
          try {
            const n = f.join(s, "_masters.json");
            if (r.existsSync(n)) {
              const o = r.readFileSync(n, "utf-8");
              e.end(o);
            } else
              e.end(JSON.stringify({ masters: {} }));
          } catch (n) {
            e.statusCode = 500, e.end(JSON.stringify({ error: String(n) }));
          }
          return;
        }
        if (l.pathname === "/__dev-inspector/masters" && t.method === "POST") {
          let n = "";
          t.on("data", (o) => {
            n += o;
          }), t.on("end", () => {
            e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
            try {
              const o = JSON.parse(n), p = f.join(s, "_masters.json");
              r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), r.writeFileSync(p, JSON.stringify(o, null, 2), "utf-8"), e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Masters saved:", Object.keys(o.masters || {}).length, "definitions");
            } catch (o) {
              e.statusCode = 400, e.end(JSON.stringify({ error: String(o) }));
            }
          });
          return;
        }
        if ((d = t.url) != null && d.startsWith("/__dev-inspector/") && t.method === "OPTIONS") {
          e.setHeader("Access-Control-Allow-Origin", "*"), e.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), e.setHeader("Access-Control-Allow-Headers", "Content-Type"), e.statusCode = 204, e.end();
          return;
        }
        g();
      }), console.log("[vue-dev-inspector] Sync server ready (dir:", s + ")"));
    },
    transform(c, t) {
      if (!a || !t.endsWith(".vue")) return null;
      console.log(`[vue-dev-inspector] transform called: ${t}`);
      const e = f.relative(process.cwd(), t);
      if (v.some((h) => h.includes("**") ? e.includes(h.replace("**/", "").replace("/**", "")) : e.startsWith(h))) return null;
      const l = c.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!l)
        return console.log(`[vue-dev-inspector] No template found in: ${t}`), null;
      const d = l[1], n = w(t);
      console.log(`[vue-dev-inspector] Processing template for: ${n}`);
      const o = C(d, y, n);
      return o === d ? (console.log(`[vue-dev-inspector] No changes for: ${n}`), null) : (console.log(`[vue-dev-inspector] Transformed: ${n}`), {
        code: c.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${o}</template>`
        ),
        map: null
        // TODO: proper source map support
      });
    }
  };
}
export {
  N as default,
  N as vitePluginDevInspector
};
