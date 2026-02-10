import * as r from "fs";
import * as m from "path";
function T(i) {
  const l = /* @__PURE__ */ new Map();
  try {
    if (!r.existsSync(i))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${i}`), l;
    const f = JSON.parse(r.readFileSync(i, "utf-8"));
    for (const [, g] of Object.entries(f.components))
      for (const v of g.elements)
        if (v.binding && v.db) {
          const h = v.binding.replace(/^\./, "");
          l.has(h) || l.set(h, v.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${l.size} binding->DB mappings from analysis`);
  } catch (f) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", f);
  }
  return l;
}
function $(i, l, f) {
  let g = i;
  const v = /\{\{\s*([^{}]+?)\s*\}\}/g, h = [];
  let s;
  for (; (s = v.exec(i)) !== null; ) {
    const p = s[0], d = s[1].trim();
    if (i.slice(Math.max(0, s.index - 100), s.index).includes("data-di-binding") || d.includes("?") && d.includes(":") || d.includes("|"))
      continue;
    let e = d.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    const S = e.match(/^\w+\(([^)]+)\)$/);
    S && (e = S[1]);
    let a = `data-di-binding="${e}"`;
    a += ` data-di-component="${f}"`;
    let c = l.get(e);
    if (!c && e.includes(".")) {
      const t = e.split(".").pop();
      for (const [y, u] of l.entries())
        if (y.endsWith("." + t) || y === t) {
          c = u;
          break;
        }
    }
    c && (a += ` data-di-db="${c.table}.${c.column}"`, c.type && (a += ` data-di-db-type="${c.type}"`), c.comment && (a += ` data-di-db-comment="${c.comment.replace(/"/g, "&quot;")}"`));
    const n = `<span ${a}>${p}</span>`;
    h.push({ original: p, replacement: n });
  }
  for (const { original: p, replacement: d } of h.reverse())
    g = g.replace(p, d);
  return g;
}
function A(i) {
  return m.basename(i, ".vue");
}
function w(i) {
  return !i || i === "/" ? "index.json" : i.slice(1).replace(/\//g, "_") + ".json";
}
function x(i = {}) {
  const {
    enabled: l = process.env.NODE_ENV !== "production",
    analysisPath: f,
    syncDir: g = "./dev-inspector-annotations",
    // include = ['**/*.vue'],  // TODO: implement include pattern matching
    exclude: v = ["node_modules/**", "**/node_modules/**"]
  } = i;
  let h = /* @__PURE__ */ new Map(), s = "";
  const p = /* @__PURE__ */ new Set();
  return {
    name: "vite-plugin-dev-inspector",
    enforce: "pre",
    // Run before @vitejs/plugin-vue processes templates
    configResolved() {
      if (!l) {
        console.log("[vue-dev-inspector] Plugin disabled");
        return;
      }
      if (console.log("[vue-dev-inspector] Plugin enabled"), s = m.isAbsolute(g) ? g : m.resolve(process.cwd(), g), f) {
        const d = m.isAbsolute(f) ? f : m.resolve(process.cwd(), f);
        h = T(d);
      }
    },
    configureServer(d) {
      l && (r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), d.middlewares.use((o, e, S) => {
        var c;
        const a = new URL(o.url || "", "http://localhost");
        if (a.pathname === "/__dev-inspector/annotations" && o.method === "GET") {
          e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
          try {
            const n = a.searchParams.get("page") || "/", t = m.join(s, w(n));
            if (r.existsSync(t)) {
              const y = r.readFileSync(t, "utf-8");
              e.end(y);
            } else
              e.end(JSON.stringify({ annotations: {}, screenConfig: null }));
          } catch (n) {
            e.statusCode = 500, e.end(JSON.stringify({ error: String(n) }));
          }
          return;
        }
        if (a.pathname === "/__dev-inspector/annotations" && o.method === "POST") {
          let n = "";
          o.on("data", (t) => {
            n += t;
          }), o.on("end", () => {
            e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
            try {
              const t = JSON.parse(n), { clientId: y, page: u, ...b } = t, C = m.join(s, w(u || "/"));
              r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), r.writeFileSync(C, JSON.stringify(b, null, 2), "utf-8");
              const O = `data: ${JSON.stringify({ type: "update", clientId: y, page: u || "/", ...b })}

`;
              for (const N of p)
                try {
                  N.write(O);
                } catch {
                  p.delete(N);
                }
              e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Annotations synced:", w(u || "/"));
            } catch (t) {
              e.statusCode = 400, e.end(JSON.stringify({ error: String(t) }));
            }
          });
          return;
        }
        if (a.pathname === "/__dev-inspector/masters" && o.method === "GET") {
          e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
          try {
            const n = m.join(s, "_masters.json");
            if (r.existsSync(n)) {
              const t = r.readFileSync(n, "utf-8");
              e.end(t);
            } else
              e.end(JSON.stringify({ masters: {} }));
          } catch (n) {
            e.statusCode = 500, e.end(JSON.stringify({ error: String(n) }));
          }
          return;
        }
        if (a.pathname === "/__dev-inspector/masters" && o.method === "POST") {
          let n = "";
          o.on("data", (t) => {
            n += t;
          }), o.on("end", () => {
            e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
            try {
              const t = JSON.parse(n), { clientId: y, ...u } = t, b = m.join(s, "_masters.json");
              r.existsSync(s) || r.mkdirSync(s, { recursive: !0 }), r.writeFileSync(b, JSON.stringify(u, null, 2), "utf-8");
              const C = `data: ${JSON.stringify({ type: "masters", clientId: y, ...u })}

`;
              for (const O of p)
                try {
                  O.write(C);
                } catch {
                  p.delete(O);
                }
              e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Masters synced:", Object.keys(u.masters || {}).length, "definitions");
            } catch (t) {
              e.statusCode = 400, e.end(JSON.stringify({ error: String(t) }));
            }
          });
          return;
        }
        if (a.pathname === "/__dev-inspector/events" && o.method === "GET") {
          e.setHeader("Content-Type", "text/event-stream"), e.setHeader("Cache-Control", "no-cache"), e.setHeader("Connection", "keep-alive"), e.setHeader("Access-Control-Allow-Origin", "*"), e.flushHeaders(), e.write(`data: {"type":"connected"}

`), p.add(e), o.on("close", () => {
            p.delete(e);
          });
          return;
        }
        if ((c = o.url) != null && c.startsWith("/__dev-inspector/") && o.method === "OPTIONS") {
          e.setHeader("Access-Control-Allow-Origin", "*"), e.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), e.setHeader("Access-Control-Allow-Headers", "Content-Type"), e.statusCode = 204, e.end();
          return;
        }
        S();
      }), console.log("[vue-dev-inspector] Sync server ready (dir:", s + ")"));
    },
    transform(d, o) {
      if (!l || !o.endsWith(".vue")) return null;
      console.log(`[vue-dev-inspector] transform called: ${o}`);
      const e = m.relative(process.cwd(), o);
      if (v.some((u) => u.includes("**") ? e.includes(u.replace("**/", "").replace("/**", "")) : e.startsWith(u))) return null;
      const a = d.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
      if (!a)
        return console.log(`[vue-dev-inspector] No template found in: ${o}`), null;
      const c = a[1], n = A(o);
      console.log(`[vue-dev-inspector] Processing template for: ${n}`);
      const t = $(c, h, n);
      return t === c ? (console.log(`[vue-dev-inspector] No changes for: ${n}`), null) : (console.log(`[vue-dev-inspector] Transformed: ${n}`), {
        code: d.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${t}</template>`
        ),
        map: null
        // TODO: proper source map support
      });
    }
  };
}
export {
  x as default,
  x as vitePluginDevInspector
};
