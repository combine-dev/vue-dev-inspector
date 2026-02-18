import { h as o, w as u } from "./index-BBuRm6t3.js";
import * as r from "path";
function p(t = {}) {
  const { syncDir: s = "./dev-inspector-annotations" } = t, n = r.isAbsolute(s) ? s : r.resolve(process.cwd(), s);
  async function e(a) {
    return await o(a, n) || new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }
  return {
    annotations: {
      GET: e,
      POST: e,
      OPTIONS: e
    },
    masters: {
      GET: e,
      POST: e,
      OPTIONS: e
    }
  };
}
function l(t = {}, s = {}) {
  return {
    ...t,
    webpack(n, e) {
      return e.dev && n.plugins.push(
        u({
          ...s,
          include: s.include || ["**/*.tsx", "**/*.jsx"]
        })
      ), typeof t.webpack == "function" ? t.webpack(n, e) : n;
    }
  };
}
export {
  p as createDevInspectorRouteHandlers,
  l as default,
  l as withDevInspector
};
