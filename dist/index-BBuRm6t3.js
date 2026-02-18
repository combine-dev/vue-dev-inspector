import { createUnplugin as x } from "unplugin";
import * as l from "fs";
import * as f from "path";
function N(n) {
  const s = /* @__PURE__ */ new Map();
  try {
    if (!l.existsSync(n))
      return console.warn(`[vue-dev-inspector] Analysis file not found: ${n}`), s;
    const e = JSON.parse(l.readFileSync(n, "utf-8"));
    for (const [, u] of Object.entries(e.components))
      for (const o of u.elements)
        if (o.binding && o.db) {
          const c = o.binding.replace(/^\./, "");
          s.has(c) || s.set(c, o.db);
        }
    console.log(`[vue-dev-inspector] Loaded ${s.size} binding->DB mappings from analysis`);
  } catch (e) {
    console.warn("[vue-dev-inspector] Failed to load analysis file:", e);
  }
  return s;
}
function O(n) {
  return f.basename(n, f.extname(n));
}
function v(n) {
  return !n || n === "/" ? "index.json" : n.slice(1).replace(/\//g, "_") + ".json";
}
function C(n, s, e) {
  let u = n;
  const o = /\{\{\s*([^{}]+?)\s*\}\}/g, c = [];
  let i;
  for (; (i = o.exec(n)) !== null; ) {
    const t = i[0], d = i[1].trim();
    if (n.slice(Math.max(0, i.index - 100), i.index).includes("data-di-binding") || d.includes("?") && d.includes(":") || d.includes("|"))
      continue;
    let m = d.replace(/\?\.?/g, ".").replace(/\s+/g, "").replace(/^\(|\)$/g, "");
    const a = m.match(/^\w+\(([^)]+)\)$/);
    a && (m = a[1]);
    let p = `data-di-binding="${m}"`;
    p += ` data-di-component="${e}"`;
    let r = s.get(m);
    if (!r && m.includes(".")) {
      const S = m.split(".").pop();
      for (const [y, w] of s.entries())
        if (y.endsWith("." + S) || y === S) {
          r = w;
          break;
        }
    }
    r && (p += ` data-di-db="${r.table}.${r.column}"`, r.type && (p += ` data-di-db-type="${r.type}"`), r.comment && (p += ` data-di-db-comment="${r.comment.replace(/"/g, "&quot;")}"`));
    const g = `<span ${p}>${t}</span>`;
    c.push({ original: t, replacement: g });
  }
  for (const { original: t, replacement: d } of c.reverse())
    u = u.split(t).join(d);
  return u;
}
function P(n, s, e) {
  const u = new RegExp("(?<=>[\\s\\n]*)\\{(\\s*[\\w$]+(?:\\.[\\w$]+|\\?\\.\\w+)+\\s*)\\}(?=[\\s\\n]*<)", "g"), o = [];
  let c;
  for (; (c = u.exec(n)) !== null; ) {
    const t = c[0], d = c[1].trim();
    if (n.slice(Math.max(0, c.index - 100), c.index).includes("data-di-binding") || /^(styles|style|css|className|children)\./.test(d))
      continue;
    const m = d.split(".").pop() || "";
    if (/^(map|filter|reduce|forEach|find|some|every|sort|slice|length|keys|values|entries|join|includes|indexOf|flat|flatMap)$/.test(m))
      continue;
    let a = d.replace(/\?\.?/g, ".").replace(/\s+/g, ""), p = `data-di-binding="${a}"`;
    p += ` data-di-component="${e}"`;
    let r = s.get(a);
    if (!r && a.includes(".")) {
      const S = a.split(".").pop();
      for (const [y, w] of s.entries())
        if (y.endsWith("." + S) || y === S) {
          r = w;
          break;
        }
    }
    r && (p += ` data-di-db="${r.table}.${r.column}"`, r.type && (p += ` data-di-db-type="${r.type}"`), r.comment && (p += ` data-di-db-comment="${r.comment.replace(/"/g, "&quot;")}"`));
    const g = `<span ${p}>${t}</span>`;
    o.push({
      index: c.index,
      length: t.length,
      original: t,
      replacement: g
    });
  }
  if (o.length === 0) return n;
  let i = n;
  for (const { index: t, length: d, replacement: h } of o.reverse())
    i = i.slice(0, t) + h + i.slice(t + d);
  return i;
}
function j(n) {
  return (s, e, u) => {
    var c;
    const o = new URL(s.url || "", "http://localhost");
    if (o.pathname === "/__dev-inspector/annotations" && s.method === "GET") {
      e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
      try {
        const i = o.searchParams.get("page") || "/", t = f.join(n, v(i));
        if (l.existsSync(t)) {
          const d = l.readFileSync(t, "utf-8");
          e.end(d);
        } else
          e.end(JSON.stringify({ annotations: {}, screenConfig: null }));
      } catch (i) {
        e.statusCode = 500, e.end(JSON.stringify({ error: String(i) }));
      }
      return;
    }
    if (o.pathname === "/__dev-inspector/annotations" && s.method === "POST") {
      let i = "";
      s.on("data", (t) => {
        i += t;
      }), s.on("end", () => {
        e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
        try {
          const t = JSON.parse(i), { page: d, ...h } = t, m = f.join(n, v(d || "/"));
          l.existsSync(n) || l.mkdirSync(n, { recursive: !0 }), l.writeFileSync(m, JSON.stringify(h, null, 2), "utf-8"), e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Annotations saved:", v(d || "/"));
        } catch (t) {
          e.statusCode = 400, e.end(JSON.stringify({ error: String(t) }));
        }
      });
      return;
    }
    if (o.pathname === "/__dev-inspector/masters" && s.method === "GET") {
      e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
      try {
        const i = f.join(n, "_masters.json");
        if (l.existsSync(i)) {
          const t = l.readFileSync(i, "utf-8");
          e.end(t);
        } else
          e.end(JSON.stringify({ masters: {} }));
      } catch (i) {
        e.statusCode = 500, e.end(JSON.stringify({ error: String(i) }));
      }
      return;
    }
    if (o.pathname === "/__dev-inspector/masters" && s.method === "POST") {
      let i = "";
      s.on("data", (t) => {
        i += t;
      }), s.on("end", () => {
        e.setHeader("Content-Type", "application/json"), e.setHeader("Access-Control-Allow-Origin", "*");
        try {
          const t = JSON.parse(i), d = f.join(n, "_masters.json");
          l.existsSync(n) || l.mkdirSync(n, { recursive: !0 }), l.writeFileSync(d, JSON.stringify(t, null, 2), "utf-8"), e.end(JSON.stringify({ ok: !0 })), console.log("[vue-dev-inspector] Masters saved:", Object.keys(t.masters || {}).length, "definitions");
        } catch (t) {
          e.statusCode = 400, e.end(JSON.stringify({ error: String(t) }));
        }
      });
      return;
    }
    if ((c = s.url) != null && c.startsWith("/__dev-inspector/") && s.method === "OPTIONS") {
      e.setHeader("Access-Control-Allow-Origin", "*"), e.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"), e.setHeader("Access-Control-Allow-Headers", "Content-Type"), e.statusCode = 204, e.end();
      return;
    }
    u();
  };
}
async function T(n, s) {
  const e = new URL(n.url), u = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  if (e.pathname.endsWith("/annotations") && n.method === "GET")
    try {
      const o = e.searchParams.get("page") || "/", c = f.join(s, v(o));
      if (l.existsSync(c)) {
        const i = l.readFileSync(c, "utf-8");
        return new Response(i, { headers: u });
      }
      return new Response(JSON.stringify({ annotations: {}, screenConfig: null }), { headers: u });
    } catch (o) {
      return new Response(JSON.stringify({ error: String(o) }), { status: 500, headers: u });
    }
  if (e.pathname.endsWith("/annotations") && n.method === "POST")
    try {
      const o = await n.json(), { page: c, ...i } = o, t = f.join(s, v(c || "/"));
      return l.existsSync(s) || l.mkdirSync(s, { recursive: !0 }), l.writeFileSync(t, JSON.stringify(i, null, 2), "utf-8"), console.log("[vue-dev-inspector] Annotations saved:", v(c || "/")), new Response(JSON.stringify({ ok: !0 }), { headers: u });
    } catch (o) {
      return new Response(JSON.stringify({ error: String(o) }), { status: 400, headers: u });
    }
  if (e.pathname.endsWith("/masters") && n.method === "GET")
    try {
      const o = f.join(s, "_masters.json");
      if (l.existsSync(o)) {
        const c = l.readFileSync(o, "utf-8");
        return new Response(c, { headers: u });
      }
      return new Response(JSON.stringify({ masters: {} }), { headers: u });
    } catch (o) {
      return new Response(JSON.stringify({ error: String(o) }), { status: 500, headers: u });
    }
  if (e.pathname.endsWith("/masters") && n.method === "POST")
    try {
      const o = await n.json(), c = f.join(s, "_masters.json");
      return l.existsSync(s) || l.mkdirSync(s, { recursive: !0 }), l.writeFileSync(c, JSON.stringify(o, null, 2), "utf-8"), console.log("[vue-dev-inspector] Masters saved:", Object.keys(o.masters || {}).length, "definitions"), new Response(JSON.stringify({ ok: !0 }), { headers: u });
    } catch (o) {
      return new Response(JSON.stringify({ error: String(o) }), { status: 400, headers: u });
    }
  return n.method === "OPTIONS" ? new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  }) : null;
}
const b = x((n = {}) => {
  const {
    enabled: s = process.env.NODE_ENV !== "production",
    analysisPath: e,
    syncDir: u = "./dev-inspector-annotations",
    exclude: o = ["node_modules/**", "**/node_modules/**"],
    include: c
  } = n;
  let i = /* @__PURE__ */ new Map(), t = "";
  function d() {
    if (!t && (t = f.isAbsolute(u) ? u : f.resolve(process.cwd(), u), e)) {
      const a = f.isAbsolute(e) ? e : f.resolve(process.cwd(), e);
      i = N(a);
    }
  }
  function h(a) {
    const p = f.relative(process.cwd(), a);
    return o.some((r) => r.includes("**") ? p.includes(r.replace("**/", "").replace("/**", "")) : p.startsWith(r));
  }
  function m(a) {
    if (!c) return !0;
    const p = f.relative(process.cwd(), a);
    return c.some((r) => {
      if (r.includes("**")) {
        const g = r.replace("**/", "").replace("/**", "");
        return p.endsWith(g) || p.includes(g);
      }
      return p.endsWith(r);
    });
  }
  return [
    // Vue template transform plugin
    {
      name: "dev-inspector-vue-transform",
      enforce: "pre",
      transformInclude(a) {
        return s ? a.endsWith(".vue") && !h(a) && m(a) : !1;
      },
      transform(a, p) {
        d();
        const r = a.match(/<template[^>]*>([\s\S]*?)<\/template>/i);
        if (!r) return null;
        const g = r[1], S = O(p), y = C(g, i, S);
        return y === g ? null : { code: a.replace(
          /<template([^>]*)>([\s\S]*?)<\/template>/i,
          `<template$1>${y}</template>`
        ), map: null };
      },
      // Vite-specific hooks
      vite: {
        configResolved() {
          if (!s) {
            console.log("[vue-dev-inspector] Plugin disabled");
            return;
          }
          console.log("[vue-dev-inspector] Plugin enabled"), d();
        }
      }
    },
    // JSX/TSX transform plugin
    {
      name: "dev-inspector-jsx-transform",
      enforce: "pre",
      transformInclude(a) {
        return s ? /\.[jt]sx$/.test(a) && !h(a) && m(a) : !1;
      },
      transform(a, p) {
        d();
        const r = O(p), g = P(a, i, r);
        return g === a ? null : { code: g, map: null };
      }
    },
    // Dev server middleware plugin
    {
      name: "dev-inspector-server",
      vite: {
        configureServer(a) {
          s && (d(), l.existsSync(t) || l.mkdirSync(t, { recursive: !0 }), a.middlewares.use(j(t)), console.log("[vue-dev-inspector] Sync server ready (dir:", t + ")"));
        }
      },
      webpack(a) {
        s && (d(), l.existsSync(t) || l.mkdirSync(t, { recursive: !0 }), console.log("[vue-dev-inspector] Webpack plugin initialized (syncDir:", t + ")"));
      }
    }
  ];
}), $ = b.vite, J = b.webpack;
export {
  T as h,
  b as u,
  $ as v,
  J as w
};
