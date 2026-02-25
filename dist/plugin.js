import { defineNuxtPlugin as r, useRuntimeConfig as s } from "#app";
import { useDevInspectorStore as a } from "./useDevInspector-CBomD82x.js";
const p = r((t) => {
  if (import.meta.server) return;
  const o = s().public.devInspector || {};
  t.hook("app:mounted", () => {
    const e = a();
    e.init({
      storageKey: o.storageKey,
      enabledInProduction: o.enabledInProduction
    });
    const i = (n) => {
      n.ctrlKey && n.shiftKey && n.key === "D" && (n.preventDefault(), e.isEnabled || e.enable(), e.togglePanel()), n.key === "Escape" && e.isPanelOpen && e.closePanel();
    };
    window.addEventListener("keydown", i);
  });
});
export {
  p as default
};
