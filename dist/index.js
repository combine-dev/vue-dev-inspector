import { ref as y, computed as N, watch as V, defineComponent as U, openBlock as p, createBlock as L, Transition as B, withCtx as H, unref as b, createElementBlock as g, createElementVNode as e, createTextVNode as D, normalizeClass as x, toDisplayString as S, createCommentVNode as k, Fragment as J, renderList as W, withDirectives as E, vModelText as h, vModelSelect as A, onMounted as G, onUnmounted as Y, Teleport as be, normalizeStyle as j, createVNode as M } from "vue";
import { defineStore as ye } from "pinia";
const ke = {}, Ee = "devInspector:elementConfigs", O = ye("devInspector", () => {
  const C = y({}), n = y(!1), o = y(!1), d = y(!1), u = y(null), v = y(!1), c = y({}), P = y(null), w = y(null), s = N(() => C.value.storageKey || Ee), a = N(() => C.value.enabledInProduction ? !0 : typeof import.meta < "u" && ke ? !1 : process.env.NODE_ENV === "development");
  function r(i = {}) {
    C.value = i, t();
  }
  function t() {
    try {
      const i = C.value.initialAnnotations || {};
      if (typeof window < "u") {
        const m = localStorage.getItem(s.value), f = m ? JSON.parse(m) : {};
        c.value = { ...i, ...f };
      } else
        c.value = i;
    } catch (i) {
      console.error("[DevInspector] Failed to load configs:", i);
    }
  }
  function l() {
    try {
      typeof window < "u" && localStorage.setItem(s.value, JSON.stringify(c.value));
    } catch (i) {
      console.error("[DevInspector] Failed to save configs:", i);
    }
  }
  V(c, l, { deep: !0 });
  function z() {
    a.value && (n.value = !n.value, n.value || (o.value = !1, P.value = null));
  }
  function X() {
    a.value && (n.value = !0);
  }
  function q() {
    n.value = !1, o.value = !1, P.value = null;
  }
  function Q() {
    o.value = !o.value, o.value || (P.value = null), o.value && (d.value = !1);
  }
  function Z() {
    d.value = !d.value, d.value && (o.value = !1), w.value = null;
  }
  function ee(i) {
    w.value = i;
  }
  function te(i) {
    if (i.id)
      return `#${i.id}`;
    if (i.dataset.devId)
      return `[data-dev-id="${i.dataset.devId}"]`;
    const m = [];
    let f = i;
    for (; f && f !== document.body; ) {
      let I = f.tagName.toLowerCase();
      if (f.id) {
        I = `#${f.id}`, m.unshift(I);
        break;
      }
      const $ = Array.from(f.classList).filter((_) => !_.startsWith("hover:") && !_.startsWith("focus:")).slice(0, 2);
      $.length > 0 && (I += "." + $.join("."));
      const K = f.parentElement;
      if (K) {
        const _ = Array.from(K.children).filter(
          (T) => T.tagName === f.tagName
        );
        if (_.length > 1) {
          const T = _.indexOf(f) + 1;
          I += `:nth-child(${T})`;
        }
      }
      m.unshift(I), f = f.parentElement;
    }
    return m.join(" > ");
  }
  function ne() {
    const i = typeof window < "u" ? window.location.pathname : "/";
    return Object.keys(c.value).filter((m) => {
      const f = c.value[m];
      return f ? (m.includes(">") || m.startsWith("#") || m.startsWith("[") || m.startsWith(".")) && (!f.componentPath || f.componentPath.includes(i) || i === "/") : !1;
    });
  }
  function oe(i) {
    u.value = i;
  }
  function le() {
    u.value = null;
  }
  function ie() {
    v.value = !v.value;
  }
  function se() {
    v.value = !0;
  }
  function ae() {
    v.value = !1;
  }
  function de(i) {
    return c.value[i];
  }
  function ue(i, m) {
    var $;
    const f = (/* @__PURE__ */ new Date()).toISOString(), I = c.value[i];
    c.value[i] = {
      ...I,
      ...m,
      id: i,
      componentPath: m.componentPath || (($ = u.value) == null ? void 0 : $.componentPath) || "",
      createdAt: (I == null ? void 0 : I.createdAt) || f,
      updatedAt: f
    };
  }
  function re(i) {
    delete c.value[i];
  }
  function ce(i) {
    P.value = i;
  }
  function ve() {
    P.value = null;
  }
  function pe() {
    return JSON.stringify(c.value, null, 2);
  }
  function R() {
    const i = {
      _meta: {
        version: "1.0.0",
        description: "Dev Inspector annotations",
        lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
      },
      annotations: c.value
    };
    return JSON.stringify(i, null, 2);
  }
  function fe(i = "dev-annotations.json") {
    const m = R(), f = new Blob([m], { type: "application/json" }), I = URL.createObjectURL(f), $ = document.createElement("a");
    $.href = I, $.download = i, document.body.appendChild($), $.click(), document.body.removeChild($), URL.revokeObjectURL(I);
  }
  function me(i) {
    try {
      const m = JSON.parse(i), f = m.annotations || m;
      c.value = { ...c.value, ...f };
    } catch (m) {
      throw console.error("[DevInspector] Failed to import configs:", m), new Error("Invalid JSON format");
    }
  }
  function ge() {
    c.value = {};
  }
  return {
    // State
    isEnabled: n,
    isAvailable: a,
    isEditMode: o,
    isPickMode: d,
    hoveredSelector: w,
    currentScreenSpec: u,
    isPanelOpen: v,
    elementConfigs: c,
    editingElementId: P,
    // Actions
    init: r,
    toggle: z,
    enable: X,
    disable: q,
    toggleEditMode: Q,
    togglePickMode: Z,
    setHoveredSelector: ee,
    generateSelector: te,
    getConfiguredSelectors: ne,
    setScreenSpec: oe,
    clearScreenSpec: le,
    togglePanel: ie,
    openPanel: se,
    closePanel: ae,
    getElementConfig: de,
    setElementConfig: ue,
    deleteElementConfig: re,
    startEditing: ce,
    stopEditing: ve,
    exportConfigs: pe,
    exportAsFile: R,
    downloadAnnotations: fe,
    importConfigs: me,
    clearAllConfigs: ge
  };
});
function ht() {
  return O();
}
const Ce = {
  key: 0,
  class: "di-panel"
}, we = { class: "di-panel-header" }, Pe = { class: "di-tabs" }, Ie = { class: "di-panel-content" }, he = {
  key: 0,
  class: "di-tab-content"
}, $e = { class: "di-section" }, xe = { class: "di-button-group" }, Se = { class: "di-section" }, De = { class: "di-stats" }, _e = { class: "di-stat" }, Oe = { class: "di-stat-value" }, Ue = {
  key: 1,
  class: "di-tab-content"
}, Te = {
  key: 0,
  class: "di-empty"
}, Ae = {
  key: 1,
  class: "di-element-list"
}, Me = ["onClick"], Ne = { class: "di-element-id" }, Ve = { class: "di-element-meta" }, Le = {
  key: 0,
  class: "di-tag"
}, Fe = {
  key: 1,
  class: "di-tag"
}, Re = {
  key: 2,
  class: "di-tag"
}, Ke = {
  key: 3,
  class: "di-tag"
}, je = {
  key: 2,
  class: "di-tab-content"
}, Be = /* @__PURE__ */ U({
  __name: "DevPanel",
  setup(C) {
    const n = O(), o = y("overview"), d = N(() => Object.keys(n.elementConfigs).length), u = () => {
      n.downloadAnnotations();
    }, v = () => {
      const w = document.createElement("input");
      w.type = "file", w.accept = ".json", w.onchange = async (s) => {
        var t;
        const a = (t = s.target.files) == null ? void 0 : t[0];
        if (!a) return;
        const r = await a.text();
        try {
          n.importConfigs(r);
        } catch {
          alert("Invalid JSON file");
        }
      }, w.click();
    }, c = () => {
      confirm("Are you sure you want to clear all annotations?") && n.clearAllConfigs();
    }, P = async () => {
      await navigator.clipboard.writeText(n.exportConfigs()), alert("Copied to clipboard!");
    };
    return (w, s) => (p(), L(B, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: H(() => [
        b(n).isPanelOpen ? (p(), g("div", Ce, [
          e("div", we, [
            s[6] || (s[6] = e("div", { class: "di-panel-title" }, [
              e("span", { class: "di-icon" }, "🔧"),
              D(" Dev Inspector ")
            ], -1)),
            e("button", {
              onClick: s[0] || (s[0] = //@ts-ignore
              (...a) => b(n).closePanel && b(n).closePanel(...a)),
              class: "di-close-btn"
            }, "✕")
          ]),
          e("div", Pe, [
            e("button", {
              class: x(["di-tab", { active: o.value === "overview" }]),
              onClick: s[1] || (s[1] = (a) => o.value = "overview")
            }, "Overview", 2),
            e("button", {
              class: x(["di-tab", { active: o.value === "elements" }]),
              onClick: s[2] || (s[2] = (a) => o.value = "elements")
            }, "Elements (" + S(d.value) + ")", 3),
            e("button", {
              class: x(["di-tab", { active: o.value === "export" }]),
              onClick: s[3] || (s[3] = (a) => o.value = "export")
            }, "Export", 2)
          ]),
          e("div", Ie, [
            o.value === "overview" ? (p(), g("div", he, [
              e("div", $e, [
                s[7] || (s[7] = e("h3", null, "Mode", -1)),
                e("div", xe, [
                  e("button", {
                    class: x(["di-btn", { active: b(n).isPickMode }]),
                    onClick: s[4] || (s[4] = //@ts-ignore
                    (...a) => b(n).togglePickMode && b(n).togglePickMode(...a))
                  }, S(b(n).isPickMode ? "🎯 Picking..." : "🎯 Pick Element"), 3),
                  e("button", {
                    class: x(["di-btn", { active: b(n).isEditMode }]),
                    onClick: s[5] || (s[5] = //@ts-ignore
                    (...a) => b(n).toggleEditMode && b(n).toggleEditMode(...a))
                  }, S(b(n).isEditMode ? "✏️ Editing..." : "✏️ Edit Mode"), 3)
                ])
              ]),
              e("div", Se, [
                s[9] || (s[9] = e("h3", null, "Stats", -1)),
                e("div", De, [
                  e("div", _e, [
                    e("span", Oe, S(d.value), 1),
                    s[8] || (s[8] = e("span", { class: "di-stat-label" }, "Annotated Elements", -1))
                  ])
                ])
              ]),
              s[10] || (s[10] = e("div", { class: "di-section" }, [
                e("h3", null, "Keyboard Shortcuts"),
                e("div", { class: "di-shortcuts" }, [
                  e("div", { class: "di-shortcut" }, [
                    e("kbd", null, "Ctrl"),
                    D("+"),
                    e("kbd", null, "Shift"),
                    D("+"),
                    e("kbd", null, "D"),
                    e("span", null, "Toggle Panel")
                  ]),
                  e("div", { class: "di-shortcut" }, [
                    e("kbd", null, "Esc"),
                    e("span", null, "Close Panel")
                  ])
                ])
              ], -1))
            ])) : k("", !0),
            o.value === "elements" ? (p(), g("div", Ue, [
              d.value === 0 ? (p(), g("div", Te, [...s[11] || (s[11] = [
                D(" No elements annotated yet.", -1),
                e("br", null, null, -1),
                D(" Use Pick Element to start. ", -1)
              ])])) : (p(), g("div", Ae, [
                (p(!0), g(J, null, W(b(n).elementConfigs, (a, r) => {
                  var t;
                  return p(), g("div", {
                    key: r,
                    class: "di-element-item",
                    onClick: (l) => b(n).startEditing(r)
                  }, [
                    e("div", Ne, S(r), 1),
                    e("div", Ve, [
                      a.fieldInfo ? (p(), g("span", Le, "DB")) : k("", !0),
                      a.actionInfo ? (p(), g("span", Fe, "Action")) : k("", !0),
                      (t = a.links) != null && t.figmaUrl ? (p(), g("span", Re, "Figma")) : k("", !0),
                      a.note ? (p(), g("span", Ke, "Note")) : k("", !0)
                    ])
                  ], 8, Me);
                }), 128))
              ]))
            ])) : k("", !0),
            o.value === "export" ? (p(), g("div", je, [
              e("div", { class: "di-section" }, [
                s[12] || (s[12] = e("h3", null, "Export / Import", -1)),
                e("div", { class: "di-button-group vertical" }, [
                  e("button", {
                    class: "di-btn",
                    onClick: u
                  }, " 📥 Download JSON "),
                  e("button", {
                    class: "di-btn",
                    onClick: P
                  }, " 📋 Copy to Clipboard "),
                  e("button", {
                    class: "di-btn",
                    onClick: v
                  }, " 📤 Import JSON "),
                  e("button", {
                    class: "di-btn danger",
                    onClick: c
                  }, " 🗑️ Clear All ")
                ])
              ])
            ])) : k("", !0)
          ])
        ])) : k("", !0)
      ]),
      _: 1
    }));
  }
}), F = (C, n) => {
  const o = C.__vccOpts || C;
  for (const [d, u] of n)
    o[d] = u;
  return o;
}, He = /* @__PURE__ */ F(Be, [["__scopeId", "data-v-aaebeac9"]]), Je = {
  key: 0,
  class: "di-editor"
}, We = { class: "di-element-id-display" }, Ge = { class: "di-section-tabs" }, Ye = { class: "di-editor-content" }, ze = {
  key: 0,
  class: "di-form"
}, Xe = { class: "di-form-group" }, qe = { class: "di-form-group" }, Qe = { class: "di-form-group" }, Ze = { class: "di-form-group" }, et = {
  key: 1,
  class: "di-form"
}, tt = { class: "di-form-group" }, nt = {
  key: 0,
  class: "di-form-group"
}, ot = { class: "di-form-group" }, lt = { class: "di-form-group" }, it = {
  key: 2,
  class: "di-form"
}, st = { class: "di-form-group" }, at = { class: "di-form-group" }, dt = { class: "di-form-group" }, ut = { class: "di-form-group" }, rt = { class: "di-form-group" }, ct = {
  key: 3,
  class: "di-form"
}, vt = { class: "di-form-group" }, pt = { class: "di-form-group" }, ft = { class: "di-form-group" }, mt = /* @__PURE__ */ U({
  __name: "DevElementEditor",
  setup(C) {
    const n = O(), o = y("field"), d = y({ table: "", column: "" }), u = y({ type: "navigate" }), v = y({}), c = y({ text: "", type: "info" });
    V(() => n.editingElementId, (r) => {
      if (r) {
        const t = n.getElementConfig(r);
        t ? (d.value = t.fieldInfo || { table: "", column: "" }, u.value = t.actionInfo || { type: "navigate" }, v.value = t.links || {}, c.value = t.note || { text: "", type: "info" }) : P();
      }
    }, { immediate: !0 });
    function P() {
      d.value = { table: "", column: "" }, u.value = { type: "navigate" }, v.value = {}, c.value = { text: "", type: "info" };
    }
    function w() {
      if (!n.editingElementId) return;
      const r = {};
      (d.value.table || d.value.column) && (r.fieldInfo = d.value), (u.value.target || u.value.description) && (r.actionInfo = u.value), (v.value.figmaUrl || v.value.testPath || v.value.githubIssue) && (r.links = v.value), c.value.text && (r.note = c.value), n.setElementConfig(n.editingElementId, r), n.stopEditing();
    }
    function s() {
      n.editingElementId && confirm("Delete this annotation?") && (n.deleteElementConfig(n.editingElementId), n.stopEditing());
    }
    function a() {
      n.stopEditing();
    }
    return (r, t) => (p(), L(B, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: H(() => [
        b(n).editingElementId ? (p(), g("div", Je, [
          e("div", { class: "di-editor-header" }, [
            t[20] || (t[20] = e("div", { class: "di-editor-title" }, "Edit Element", -1)),
            e("button", {
              onClick: a,
              class: "di-close-btn"
            }, "✕")
          ]),
          e("div", We, [
            e("code", null, S(b(n).editingElementId), 1)
          ]),
          e("div", Ge, [
            e("button", {
              class: x(["di-section-tab", { active: o.value === "field" }]),
              onClick: t[0] || (t[0] = (l) => o.value = "field")
            }, "🗄️ DB Field", 2),
            e("button", {
              class: x(["di-section-tab", { active: o.value === "action" }]),
              onClick: t[1] || (t[1] = (l) => o.value = "action")
            }, "⚡ Action", 2),
            e("button", {
              class: x(["di-section-tab", { active: o.value === "links" }]),
              onClick: t[2] || (t[2] = (l) => o.value = "links")
            }, "🔗 Links", 2),
            e("button", {
              class: x(["di-section-tab", { active: o.value === "note" }]),
              onClick: t[3] || (t[3] = (l) => o.value = "note")
            }, "📝 Note", 2)
          ]),
          e("div", Ye, [
            o.value === "field" ? (p(), g("div", ze, [
              e("div", Xe, [
                t[21] || (t[21] = e("label", null, "Table Name", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[4] || (t[4] = (l) => d.value.table = l),
                  type: "text",
                  placeholder: "e.g., users"
                }, null, 512), [
                  [h, d.value.table]
                ])
              ]),
              e("div", qe, [
                t[22] || (t[22] = e("label", null, "Column Name", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[5] || (t[5] = (l) => d.value.column = l),
                  type: "text",
                  placeholder: "e.g., email"
                }, null, 512), [
                  [h, d.value.column]
                ])
              ]),
              e("div", Qe, [
                t[23] || (t[23] = e("label", null, "Data Type", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (l) => d.value.type = l),
                  type: "text",
                  placeholder: "e.g., VARCHAR(255)"
                }, null, 512), [
                  [h, d.value.type]
                ])
              ]),
              e("div", Ze, [
                t[24] || (t[24] = e("label", null, "Description", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[7] || (t[7] = (l) => d.value.description = l),
                  placeholder: "Field description...",
                  rows: "2"
                }, null, 512), [
                  [h, d.value.description]
                ])
              ])
            ])) : k("", !0),
            o.value === "action" ? (p(), g("div", et, [
              e("div", tt, [
                t[26] || (t[26] = e("label", null, "Action Type", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[8] || (t[8] = (l) => u.value.type = l)
                }, [...t[25] || (t[25] = [
                  e("option", { value: "navigate" }, "Navigate", -1),
                  e("option", { value: "api" }, "API Call", -1),
                  e("option", { value: "modal" }, "Open Modal", -1),
                  e("option", { value: "emit" }, "Emit Event", -1),
                  e("option", { value: "function" }, "Function Call", -1)
                ])], 512), [
                  [A, u.value.type]
                ])
              ]),
              u.value.type === "api" ? (p(), g("div", nt, [
                t[28] || (t[28] = e("label", null, "HTTP Method", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (l) => u.value.method = l)
                }, [...t[27] || (t[27] = [
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [A, u.value.method]
                ])
              ])) : k("", !0),
              e("div", ot, [
                t[29] || (t[29] = e("label", null, "Target / Endpoint", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (l) => u.value.target = l),
                  type: "text",
                  placeholder: "e.g., /api/users or /dashboard"
                }, null, 512), [
                  [h, u.value.target]
                ])
              ]),
              e("div", lt, [
                t[30] || (t[30] = e("label", null, "Description", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (l) => u.value.description = l),
                  placeholder: "What this action does...",
                  rows: "2"
                }, null, 512), [
                  [h, u.value.description]
                ])
              ])
            ])) : k("", !0),
            o.value === "links" ? (p(), g("div", it, [
              e("div", st, [
                t[31] || (t[31] = e("label", null, "Figma URL", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[12] || (t[12] = (l) => v.value.figmaUrl = l),
                  type: "url",
                  placeholder: "https://figma.com/..."
                }, null, 512), [
                  [h, v.value.figmaUrl]
                ])
              ]),
              e("div", at, [
                t[32] || (t[32] = e("label", null, "Test File Path", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (l) => v.value.testPath = l),
                  type: "text",
                  placeholder: "e.g., tests/components/Button.spec.ts"
                }, null, 512), [
                  [h, v.value.testPath]
                ])
              ]),
              e("div", dt, [
                t[33] || (t[33] = e("label", null, "GitHub Issue", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[14] || (t[14] = (l) => v.value.githubIssue = l),
                  type: "url",
                  placeholder: "https://github.com/.../issues/123"
                }, null, 512), [
                  [h, v.value.githubIssue]
                ])
              ]),
              e("div", ut, [
                t[34] || (t[34] = e("label", null, "GitHub PR", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (l) => v.value.githubPr = l),
                  type: "url",
                  placeholder: "https://github.com/.../pull/456"
                }, null, 512), [
                  [h, v.value.githubPr]
                ])
              ]),
              e("div", rt, [
                t[35] || (t[35] = e("label", null, "Related Docs", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[16] || (t[16] = (l) => v.value.relatedDocs = l),
                  type: "url",
                  placeholder: "https://..."
                }, null, 512), [
                  [h, v.value.relatedDocs]
                ])
              ])
            ])) : k("", !0),
            o.value === "note" ? (p(), g("div", ct, [
              e("div", vt, [
                t[37] || (t[37] = e("label", null, "Note Type", -1)),
                E(e("select", {
                  "onUpdate:modelValue": t[17] || (t[17] = (l) => c.value.type = l)
                }, [...t[36] || (t[36] = [
                  e("option", { value: "info" }, "ℹ️ Info", -1),
                  e("option", { value: "warning" }, "⚠️ Warning", -1),
                  e("option", { value: "todo" }, "📋 TODO", -1),
                  e("option", { value: "question" }, "❓ Question", -1)
                ])], 512), [
                  [A, c.value.type]
                ])
              ]),
              e("div", pt, [
                t[38] || (t[38] = e("label", null, "Note Text", -1)),
                E(e("textarea", {
                  "onUpdate:modelValue": t[18] || (t[18] = (l) => c.value.text = l),
                  placeholder: "Write your note here...",
                  rows: "4"
                }, null, 512), [
                  [h, c.value.text]
                ])
              ]),
              e("div", ft, [
                t[39] || (t[39] = e("label", null, "Author", -1)),
                E(e("input", {
                  "onUpdate:modelValue": t[19] || (t[19] = (l) => c.value.author = l),
                  type: "text",
                  placeholder: "Your name"
                }, null, 512), [
                  [h, c.value.author]
                ])
              ])
            ])) : k("", !0)
          ]),
          e("div", { class: "di-editor-footer" }, [
            e("button", {
              class: "di-btn danger",
              onClick: s
            }, "Delete"),
            e("div", { class: "di-footer-right" }, [
              e("button", {
                class: "di-btn",
                onClick: a
              }, "Cancel"),
              e("button", {
                class: "di-btn primary",
                onClick: w
              }, "Save")
            ])
          ])
        ])) : k("", !0)
      ]),
      _: 1
    }));
  }
}), gt = /* @__PURE__ */ F(mt, [["__scopeId", "data-v-39feb4ae"]]), bt = {
  key: 0,
  class: "di-pick-overlay",
  "data-dev-inspector": ""
}, yt = ["data-selector", "onClick"], kt = /* @__PURE__ */ U({
  __name: "DevPickOverlay",
  setup(C) {
    const n = O(), o = y({
      top: "0",
      left: "0",
      width: "0",
      height: "0",
      display: "none"
    }), d = y({
      top: "0",
      left: "0",
      display: "none"
    }), u = y("");
    let v = null;
    function c(a) {
      return a.closest("[data-dev-inspector]") !== null;
    }
    function P(a) {
      if (!n.isPickMode) return;
      const r = a.target;
      if (!r || c(r)) {
        o.value.display = "none", d.value.display = "none";
        return;
      }
      if (r === v) return;
      v = r;
      const t = r.getBoundingClientRect();
      o.value = {
        top: `${t.top + window.scrollY}px`,
        left: `${t.left + window.scrollX}px`,
        width: `${t.width}px`,
        height: `${t.height}px`,
        display: "block"
      };
      let l = t.top + window.scrollY - 30;
      l < 10 && (l = t.bottom + window.scrollY + 8), d.value = {
        top: `${l}px`,
        left: `${t.left + window.scrollX}px`,
        display: "block"
      }, u.value = n.generateSelector(r), n.setHoveredSelector(u.value);
    }
    function w(a) {
      if (!n.isPickMode) return;
      const r = a.target;
      if (!r || c(r)) return;
      a.preventDefault(), a.stopPropagation();
      const t = n.generateSelector(r);
      n.getElementConfig(t) || n.setElementConfig(t, {
        componentPath: window.location.pathname
      }), n.startEditing(t), n.togglePickMode();
    }
    function s(a) {
      a.key === "Escape" && n.isPickMode && n.togglePickMode();
    }
    return G(() => {
      document.addEventListener("mousemove", P, !0), document.addEventListener("click", w, !0), document.addEventListener("keydown", s);
    }), Y(() => {
      document.removeEventListener("mousemove", P, !0), document.removeEventListener("click", w, !0), document.removeEventListener("keydown", s);
    }), V(() => n.isPickMode, (a) => {
      a || (o.value.display = "none", d.value.display = "none", v = null);
    }), (a, r) => (p(), L(be, { to: "body" }, [
      b(n).isPickMode ? (p(), g("div", bt, [
        e("div", {
          class: "di-highlight",
          style: j(o.value)
        }, null, 4),
        e("div", {
          class: "di-selector-tooltip",
          style: j(d.value)
        }, [
          e("code", null, S(u.value), 1)
        ], 4),
        r[0] || (r[0] = e("div", {
          class: "di-pick-instructions",
          "data-dev-inspector": ""
        }, [
          e("span", null, "🎯 Click an element to annotate"),
          e("kbd", null, "Esc"),
          D(" to cancel ")
        ], -1))
      ])) : k("", !0),
      b(n).isEditMode && !b(n).isPickMode ? (p(!0), g(J, { key: 1 }, W(b(n).getConfiguredSelectors(), (t) => (p(), g("div", {
        key: t,
        class: "di-configured-marker",
        "data-selector": t,
        onClick: (l) => b(n).startEditing(t)
      }, [...r[1] || (r[1] = [
        e("span", { class: "di-marker-dot" }, "●", -1)
      ])], 8, yt))), 128)) : k("", !0)
    ]));
  }
}), Et = /* @__PURE__ */ F(kt, [["__scopeId", "data-v-d9bff61a"]]), Ct = {
  key: 0,
  "data-dev-inspector": ""
}, wt = /* @__PURE__ */ U({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(C) {
    const n = C, o = O();
    function d(u) {
      u.ctrlKey && u.shiftKey && u.key === "D" && (u.preventDefault(), o.isEnabled || o.enable(), o.togglePanel()), u.key === "Escape" && o.isPanelOpen && o.closePanel();
    }
    return G(() => {
      o.init({
        storageKey: n.storageKey,
        enabledInProduction: n.enabledInProduction,
        initialAnnotations: n.initialAnnotations
      }), window.addEventListener("keydown", d);
    }), Y(() => {
      window.removeEventListener("keydown", d);
    }), (u, v) => b(o).isAvailable ? (p(), g("div", Ct, [
      M(He),
      M(gt),
      M(Et)
    ])) : k("", !0);
  }
}), $t = {
  install(C, n = {}) {
    const { autoRegister: o = !0, ...d } = n;
    o && C.component("DevInspector", wt), C.provide("devInspectorOptions", d);
  }
};
export {
  gt as DevElementEditor,
  wt as DevInspector,
  He as DevPanel,
  Et as DevPickOverlay,
  $t as VueDevInspector,
  $t as default,
  ht as useDevInspector,
  O as useDevInspectorStore
};
