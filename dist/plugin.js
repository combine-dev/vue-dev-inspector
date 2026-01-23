import { defineNuxtPlugin as s, useRuntimeConfig as r } from "#app";
import { u as a } from "./useDevInspector-BwEXh74O.js";
const p = s((t) => {
  if (import.meta.server) return;
  const o = r().public.devInspector || {};
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
