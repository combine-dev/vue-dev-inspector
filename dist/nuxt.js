import { defineNuxtModule as r, createResolver as s, addImports as t, addComponent as c, addPlugin as l } from "@nuxt/kit";
const d = r({
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
    const e = s(import.meta.url);
    t([
      {
        name: "useDevInspector",
        from: e.resolve("../src/composables/useDevInspector")
      },
      {
        name: "useDevInspectorStore",
        from: e.resolve("../src/composables/useDevInspector")
      }
    ]), c({
      name: "DevInspector",
      filePath: e.resolve("../src/components/DevInspector.vue")
    }), l({
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
