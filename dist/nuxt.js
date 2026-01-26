import { defineNuxtModule as r, createResolver as s, addVitePlugin as t, addImports as a, addComponent as l, addPlugin as c } from "@nuxt/kit";
import d from "./vite.js";
const u = r({
  meta: {
    name: "vue-dev-inspector",
    configKey: "devInspector",
    compatibility: {
      nuxt: "^3.0.0"
    }
  },
  defaults: {
    enabled: process.env.NODE_ENV === "development",
    storageKey: "devInspector:elementConfigs",
    enabledInProduction: !1
  },
  setup(e, n) {
    if (!e.enabled)
      return;
    const o = s(import.meta.url);
    t(d({
      enabled: e.enabled,
      analysisPath: e.analysisPath
    })), a([
      {
        name: "useDevInspector",
        from: o.resolve("../src/composables/useDevInspector")
      },
      {
        name: "useDevInspectorStore",
        from: o.resolve("../src/composables/useDevInspector")
      }
    ]), l({
      name: "DevInspector",
      filePath: o.resolve("../src/components/DevInspector.vue")
    }), c({
      src: o.resolve("./plugin"),
      mode: "client"
    }), n.options.runtimeConfig.public.devInspector = {
      storageKey: e.storageKey,
      enabledInProduction: e.enabledInProduction
    };
  }
});
export {
  u as default
};
