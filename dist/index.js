import { _ as r } from "./DevInspector.vue_vue_type_script_setup_true_lang-CKvMc44o.js";
import { D as v, a as i, b as D, c as m } from "./DevInspector.vue_vue_type_script_setup_true_lang-CKvMc44o.js";
import { useDevInspector as l, useDevInspectorStore as u } from "./useDevInspector-CBomD82x.js";
const a = {
  install(e, o = {}) {
    const { autoRegister: t = !0, ...s } = o;
    t && e.component("DevInspector", r), e.provide("devInspectorOptions", s);
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
  l as useDevInspector,
  u as useDevInspectorStore
};
