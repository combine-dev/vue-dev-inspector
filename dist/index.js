import { _ as r } from "./DevInspector.vue_vue_type_script_setup_true_lang-yoppvxPy.js";
import { D as v, a as i, b as D, c as m } from "./DevInspector.vue_vue_type_script_setup_true_lang-yoppvxPy.js";
import { u as f, a as l } from "./useDevInspector-6fbuGVh4.js";
const a = {
  install(e, o = {}) {
    const { autoRegister: s = !0, ...t } = o;
    s && e.component("DevInspector", r), e.provide("devInspectorOptions", t);
  }
};
export {
  v as DevElementEditor,
  r as DevInspector,
  i as DevPanel,
  D as DevPickOverlay,
  m as DevScreenEditor,
  a as VueDevInspector,
  a as default,
  f as useDevInspector,
  l as useDevInspectorStore
};
