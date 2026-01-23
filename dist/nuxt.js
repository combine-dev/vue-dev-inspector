import { defineNuxtModule as t, createResolver as r, addImports as s, addComponent as l, addPlugin as a } from "@nuxt/kit";
const d = t({
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
  setup(o, n) {
    if (!o.enabled)
      return;
    const e = r(import.meta.url);
    s([
      {
        name: "useDevInspector",
        from: e.resolve("../composables/useDevInspector")
      },
      {
        name: "useDevInspectorStore",
        from: e.resolve("../composables/useDevInspector")
      }
    ]), l({
      name: "DevInspector",
      filePath: e.resolve("../components/DevInspector.vue")
    }), a({
      src: e.resolve("./plugin"),
      mode: "client"
    }), n.options.runtimeConfig.public.devInspector = {
      storageKey: o.storageKey,
      enabledInProduction: o.enabledInProduction
    };
  }
});
export {
  d as default
};
