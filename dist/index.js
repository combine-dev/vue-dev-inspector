import { defineComponent as $, ref as E, computed as L, openBlock as u, createBlock as T, Transition as h, withCtx as V, unref as c, createElementBlock as p, createElementVNode as t, createTextVNode as I, normalizeClass as C, toDisplayString as x, createCommentVNode as m, Fragment as S, renderList as A, watch as O, withDirectives as g, vModelText as b, vModelSelect as D, onMounted as N, onUnmounted as B, Teleport as F, normalizeStyle as U, createVNode as _ } from "vue";
import { u as w } from "./useDevInspector-BwEXh74O.js";
import { a as jt } from "./useDevInspector-BwEXh74O.js";
const H = {
  key: 0,
  class: "di-panel"
}, R = { class: "di-panel-header" }, K = { class: "di-tabs" }, G = { class: "di-panel-content" }, Y = {
  key: 0,
  class: "di-tab-content"
}, J = { class: "di-section" }, W = { class: "di-button-group" }, j = { class: "di-section" }, z = { class: "di-stats" }, X = { class: "di-stat" }, q = { class: "di-stat-value" }, Q = {
  key: 1,
  class: "di-tab-content"
}, Z = {
  key: 0,
  class: "di-empty"
}, tt = {
  key: 1,
  class: "di-element-list"
}, et = ["onClick"], ot = { class: "di-element-id" }, lt = { class: "di-element-meta" }, nt = {
  key: 0,
  class: "di-tag"
}, it = {
  key: 1,
  class: "di-tag"
}, st = {
  key: 2,
  class: "di-tag"
}, at = {
  key: 3,
  class: "di-tag"
}, dt = {
  key: 2,
  class: "di-tab-content"
}, ut = /* @__PURE__ */ $({
  __name: "DevPanel",
  setup(k) {
    const o = w(), n = E("overview"), d = L(() => Object.keys(o.elementConfigs).length), r = () => {
      o.downloadAnnotations();
    }, v = () => {
      const y = document.createElement("input");
      y.type = "file", y.accept = ".json", y.onchange = async (i) => {
        var e;
        const s = (e = i.target.files) == null ? void 0 : e[0];
        if (!s) return;
        const a = await s.text();
        try {
          o.importConfigs(a);
        } catch {
          alert("Invalid JSON file");
        }
      }, y.click();
    }, f = () => {
      confirm("Are you sure you want to clear all annotations?") && o.clearAllConfigs();
    }, P = async () => {
      await navigator.clipboard.writeText(o.exportConfigs()), alert("Copied to clipboard!");
    };
    return (y, i) => (u(), T(h, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: V(() => [
        c(o).isPanelOpen ? (u(), p("div", H, [
          t("div", R, [
            i[6] || (i[6] = t("div", { class: "di-panel-title" }, [
              t("span", { class: "di-icon" }, "🔧"),
              I(" Dev Inspector ")
            ], -1)),
            t("button", {
              onClick: i[0] || (i[0] = //@ts-ignore
              (...s) => c(o).closePanel && c(o).closePanel(...s)),
              class: "di-close-btn"
            }, "✕")
          ]),
          t("div", K, [
            t("button", {
              class: C(["di-tab", { active: n.value === "overview" }]),
              onClick: i[1] || (i[1] = (s) => n.value = "overview")
            }, "Overview", 2),
            t("button", {
              class: C(["di-tab", { active: n.value === "elements" }]),
              onClick: i[2] || (i[2] = (s) => n.value = "elements")
            }, "Elements (" + x(d.value) + ")", 3),
            t("button", {
              class: C(["di-tab", { active: n.value === "export" }]),
              onClick: i[3] || (i[3] = (s) => n.value = "export")
            }, "Export", 2)
          ]),
          t("div", G, [
            n.value === "overview" ? (u(), p("div", Y, [
              t("div", J, [
                i[7] || (i[7] = t("h3", null, "Mode", -1)),
                t("div", W, [
                  t("button", {
                    class: C(["di-btn", { active: c(o).isPickMode }]),
                    onClick: i[4] || (i[4] = //@ts-ignore
                    (...s) => c(o).togglePickMode && c(o).togglePickMode(...s))
                  }, x(c(o).isPickMode ? "🎯 Picking..." : "🎯 Pick Element"), 3),
                  t("button", {
                    class: C(["di-btn", { active: c(o).isEditMode }]),
                    onClick: i[5] || (i[5] = //@ts-ignore
                    (...s) => c(o).toggleEditMode && c(o).toggleEditMode(...s))
                  }, x(c(o).isEditMode ? "✏️ Editing..." : "✏️ Edit Mode"), 3)
                ])
              ]),
              t("div", j, [
                i[9] || (i[9] = t("h3", null, "Stats", -1)),
                t("div", z, [
                  t("div", X, [
                    t("span", q, x(d.value), 1),
                    i[8] || (i[8] = t("span", { class: "di-stat-label" }, "Annotated Elements", -1))
                  ])
                ])
              ]),
              i[10] || (i[10] = t("div", { class: "di-section" }, [
                t("h3", null, "Keyboard Shortcuts"),
                t("div", { class: "di-shortcuts" }, [
                  t("div", { class: "di-shortcut" }, [
                    t("kbd", null, "Ctrl"),
                    I("+"),
                    t("kbd", null, "Shift"),
                    I("+"),
                    t("kbd", null, "D"),
                    t("span", null, "Toggle Panel")
                  ]),
                  t("div", { class: "di-shortcut" }, [
                    t("kbd", null, "Esc"),
                    t("span", null, "Close Panel")
                  ])
                ])
              ], -1))
            ])) : m("", !0),
            n.value === "elements" ? (u(), p("div", Q, [
              d.value === 0 ? (u(), p("div", Z, [...i[11] || (i[11] = [
                I(" No elements annotated yet.", -1),
                t("br", null, null, -1),
                I(" Use Pick Element to start. ", -1)
              ])])) : (u(), p("div", tt, [
                (u(!0), p(S, null, A(c(o).elementConfigs, (s, a) => {
                  var e;
                  return u(), p("div", {
                    key: a,
                    class: "di-element-item",
                    onClick: (l) => c(o).startEditing(a)
                  }, [
                    t("div", ot, x(a), 1),
                    t("div", lt, [
                      s.fieldInfo ? (u(), p("span", nt, "DB")) : m("", !0),
                      s.actionInfo ? (u(), p("span", it, "Action")) : m("", !0),
                      (e = s.links) != null && e.figmaUrl ? (u(), p("span", st, "Figma")) : m("", !0),
                      s.note ? (u(), p("span", at, "Note")) : m("", !0)
                    ])
                  ], 8, et);
                }), 128))
              ]))
            ])) : m("", !0),
            n.value === "export" ? (u(), p("div", dt, [
              t("div", { class: "di-section" }, [
                i[12] || (i[12] = t("h3", null, "Export / Import", -1)),
                t("div", { class: "di-button-group vertical" }, [
                  t("button", {
                    class: "di-btn",
                    onClick: r
                  }, " 📥 Download JSON "),
                  t("button", {
                    class: "di-btn",
                    onClick: P
                  }, " 📋 Copy to Clipboard "),
                  t("button", {
                    class: "di-btn",
                    onClick: v
                  }, " 📤 Import JSON "),
                  t("button", {
                    class: "di-btn danger",
                    onClick: f
                  }, " 🗑️ Clear All ")
                ])
              ])
            ])) : m("", !0)
          ])
        ])) : m("", !0)
      ]),
      _: 1
    }));
  }
}), M = (k, o) => {
  const n = k.__vccOpts || k;
  for (const [d, r] of o)
    n[d] = r;
  return n;
}, rt = /* @__PURE__ */ M(ut, [["__scopeId", "data-v-aaebeac9"]]), vt = {
  key: 0,
  class: "di-editor"
}, pt = { class: "di-element-id-display" }, ct = { class: "di-section-tabs" }, mt = { class: "di-editor-content" }, gt = {
  key: 0,
  class: "di-form"
}, ft = { class: "di-form-group" }, bt = { class: "di-form-group" }, kt = { class: "di-form-group" }, yt = { class: "di-form-group" }, Et = {
  key: 1,
  class: "di-form"
}, Ct = { class: "di-form-group" }, xt = {
  key: 0,
  class: "di-form-group"
}, Pt = { class: "di-form-group" }, It = { class: "di-form-group" }, $t = {
  key: 2,
  class: "di-form"
}, wt = { class: "di-form-group" }, Dt = { class: "di-form-group" }, _t = { class: "di-form-group" }, Tt = { class: "di-form-group" }, Mt = { class: "di-form-group" }, Ut = {
  key: 3,
  class: "di-form"
}, ht = { class: "di-form-group" }, Vt = { class: "di-form-group" }, St = { class: "di-form-group" }, At = /* @__PURE__ */ $({
  __name: "DevElementEditor",
  setup(k) {
    const o = w(), n = E("field"), d = E({ table: "", column: "" }), r = E({ type: "navigate" }), v = E({}), f = E({ text: "", type: "info" });
    O(() => o.editingElementId, (a) => {
      if (a) {
        const e = o.getElementConfig(a);
        e ? (d.value = e.fieldInfo || { table: "", column: "" }, r.value = e.actionInfo || { type: "navigate" }, v.value = e.links || {}, f.value = e.note || { text: "", type: "info" }) : P();
      }
    }, { immediate: !0 });
    function P() {
      d.value = { table: "", column: "" }, r.value = { type: "navigate" }, v.value = {}, f.value = { text: "", type: "info" };
    }
    function y() {
      if (!o.editingElementId) return;
      const a = {};
      (d.value.table || d.value.column) && (a.fieldInfo = d.value), (r.value.target || r.value.description) && (a.actionInfo = r.value), (v.value.figmaUrl || v.value.testPath || v.value.githubIssue) && (a.links = v.value), f.value.text && (a.note = f.value), o.setElementConfig(o.editingElementId, a), o.stopEditing();
    }
    function i() {
      o.editingElementId && confirm("Delete this annotation?") && (o.deleteElementConfig(o.editingElementId), o.stopEditing());
    }
    function s() {
      o.stopEditing();
    }
    return (a, e) => (u(), T(h, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: V(() => [
        c(o).editingElementId ? (u(), p("div", vt, [
          t("div", { class: "di-editor-header" }, [
            e[20] || (e[20] = t("div", { class: "di-editor-title" }, "Edit Element", -1)),
            t("button", {
              onClick: s,
              class: "di-close-btn"
            }, "✕")
          ]),
          t("div", pt, [
            t("code", null, x(c(o).editingElementId), 1)
          ]),
          t("div", ct, [
            t("button", {
              class: C(["di-section-tab", { active: n.value === "field" }]),
              onClick: e[0] || (e[0] = (l) => n.value = "field")
            }, "🗄️ DB Field", 2),
            t("button", {
              class: C(["di-section-tab", { active: n.value === "action" }]),
              onClick: e[1] || (e[1] = (l) => n.value = "action")
            }, "⚡ Action", 2),
            t("button", {
              class: C(["di-section-tab", { active: n.value === "links" }]),
              onClick: e[2] || (e[2] = (l) => n.value = "links")
            }, "🔗 Links", 2),
            t("button", {
              class: C(["di-section-tab", { active: n.value === "note" }]),
              onClick: e[3] || (e[3] = (l) => n.value = "note")
            }, "📝 Note", 2)
          ]),
          t("div", mt, [
            n.value === "field" ? (u(), p("div", gt, [
              t("div", ft, [
                e[21] || (e[21] = t("label", null, "Table Name", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[4] || (e[4] = (l) => d.value.table = l),
                  type: "text",
                  placeholder: "e.g., users"
                }, null, 512), [
                  [b, d.value.table]
                ])
              ]),
              t("div", bt, [
                e[22] || (e[22] = t("label", null, "Column Name", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[5] || (e[5] = (l) => d.value.column = l),
                  type: "text",
                  placeholder: "e.g., email"
                }, null, 512), [
                  [b, d.value.column]
                ])
              ]),
              t("div", kt, [
                e[23] || (e[23] = t("label", null, "Data Type", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[6] || (e[6] = (l) => d.value.type = l),
                  type: "text",
                  placeholder: "e.g., VARCHAR(255)"
                }, null, 512), [
                  [b, d.value.type]
                ])
              ]),
              t("div", yt, [
                e[24] || (e[24] = t("label", null, "Description", -1)),
                g(t("textarea", {
                  "onUpdate:modelValue": e[7] || (e[7] = (l) => d.value.description = l),
                  placeholder: "Field description...",
                  rows: "2"
                }, null, 512), [
                  [b, d.value.description]
                ])
              ])
            ])) : m("", !0),
            n.value === "action" ? (u(), p("div", Et, [
              t("div", Ct, [
                e[26] || (e[26] = t("label", null, "Action Type", -1)),
                g(t("select", {
                  "onUpdate:modelValue": e[8] || (e[8] = (l) => r.value.type = l)
                }, [...e[25] || (e[25] = [
                  t("option", { value: "navigate" }, "Navigate", -1),
                  t("option", { value: "api" }, "API Call", -1),
                  t("option", { value: "modal" }, "Open Modal", -1),
                  t("option", { value: "emit" }, "Emit Event", -1),
                  t("option", { value: "function" }, "Function Call", -1)
                ])], 512), [
                  [D, r.value.type]
                ])
              ]),
              r.value.type === "api" ? (u(), p("div", xt, [
                e[28] || (e[28] = t("label", null, "HTTP Method", -1)),
                g(t("select", {
                  "onUpdate:modelValue": e[9] || (e[9] = (l) => r.value.method = l)
                }, [...e[27] || (e[27] = [
                  t("option", { value: "GET" }, "GET", -1),
                  t("option", { value: "POST" }, "POST", -1),
                  t("option", { value: "PUT" }, "PUT", -1),
                  t("option", { value: "DELETE" }, "DELETE", -1),
                  t("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [D, r.value.method]
                ])
              ])) : m("", !0),
              t("div", Pt, [
                e[29] || (e[29] = t("label", null, "Target / Endpoint", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[10] || (e[10] = (l) => r.value.target = l),
                  type: "text",
                  placeholder: "e.g., /api/users or /dashboard"
                }, null, 512), [
                  [b, r.value.target]
                ])
              ]),
              t("div", It, [
                e[30] || (e[30] = t("label", null, "Description", -1)),
                g(t("textarea", {
                  "onUpdate:modelValue": e[11] || (e[11] = (l) => r.value.description = l),
                  placeholder: "What this action does...",
                  rows: "2"
                }, null, 512), [
                  [b, r.value.description]
                ])
              ])
            ])) : m("", !0),
            n.value === "links" ? (u(), p("div", $t, [
              t("div", wt, [
                e[31] || (e[31] = t("label", null, "Figma URL", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[12] || (e[12] = (l) => v.value.figmaUrl = l),
                  type: "url",
                  placeholder: "https://figma.com/..."
                }, null, 512), [
                  [b, v.value.figmaUrl]
                ])
              ]),
              t("div", Dt, [
                e[32] || (e[32] = t("label", null, "Test File Path", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[13] || (e[13] = (l) => v.value.testPath = l),
                  type: "text",
                  placeholder: "e.g., tests/components/Button.spec.ts"
                }, null, 512), [
                  [b, v.value.testPath]
                ])
              ]),
              t("div", _t, [
                e[33] || (e[33] = t("label", null, "GitHub Issue", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[14] || (e[14] = (l) => v.value.githubIssue = l),
                  type: "url",
                  placeholder: "https://github.com/.../issues/123"
                }, null, 512), [
                  [b, v.value.githubIssue]
                ])
              ]),
              t("div", Tt, [
                e[34] || (e[34] = t("label", null, "GitHub PR", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[15] || (e[15] = (l) => v.value.githubPr = l),
                  type: "url",
                  placeholder: "https://github.com/.../pull/456"
                }, null, 512), [
                  [b, v.value.githubPr]
                ])
              ]),
              t("div", Mt, [
                e[35] || (e[35] = t("label", null, "Related Docs", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[16] || (e[16] = (l) => v.value.relatedDocs = l),
                  type: "url",
                  placeholder: "https://..."
                }, null, 512), [
                  [b, v.value.relatedDocs]
                ])
              ])
            ])) : m("", !0),
            n.value === "note" ? (u(), p("div", Ut, [
              t("div", ht, [
                e[37] || (e[37] = t("label", null, "Note Type", -1)),
                g(t("select", {
                  "onUpdate:modelValue": e[17] || (e[17] = (l) => f.value.type = l)
                }, [...e[36] || (e[36] = [
                  t("option", { value: "info" }, "ℹ️ Info", -1),
                  t("option", { value: "warning" }, "⚠️ Warning", -1),
                  t("option", { value: "todo" }, "📋 TODO", -1),
                  t("option", { value: "question" }, "❓ Question", -1)
                ])], 512), [
                  [D, f.value.type]
                ])
              ]),
              t("div", Vt, [
                e[38] || (e[38] = t("label", null, "Note Text", -1)),
                g(t("textarea", {
                  "onUpdate:modelValue": e[18] || (e[18] = (l) => f.value.text = l),
                  placeholder: "Write your note here...",
                  rows: "4"
                }, null, 512), [
                  [b, f.value.text]
                ])
              ]),
              t("div", St, [
                e[39] || (e[39] = t("label", null, "Author", -1)),
                g(t("input", {
                  "onUpdate:modelValue": e[19] || (e[19] = (l) => f.value.author = l),
                  type: "text",
                  placeholder: "Your name"
                }, null, 512), [
                  [b, f.value.author]
                ])
              ])
            ])) : m("", !0)
          ]),
          t("div", { class: "di-editor-footer" }, [
            t("button", {
              class: "di-btn danger",
              onClick: i
            }, "Delete"),
            t("div", { class: "di-footer-right" }, [
              t("button", {
                class: "di-btn",
                onClick: s
              }, "Cancel"),
              t("button", {
                class: "di-btn primary",
                onClick: y
              }, "Save")
            ])
          ])
        ])) : m("", !0)
      ]),
      _: 1
    }));
  }
}), Ot = /* @__PURE__ */ M(At, [["__scopeId", "data-v-39feb4ae"]]), Nt = {
  key: 0,
  class: "di-pick-overlay",
  "data-dev-inspector": ""
}, Lt = ["data-selector", "onClick"], Bt = /* @__PURE__ */ $({
  __name: "DevPickOverlay",
  setup(k) {
    const o = w(), n = E({
      top: "0",
      left: "0",
      width: "0",
      height: "0",
      display: "none"
    }), d = E({
      top: "0",
      left: "0",
      display: "none"
    }), r = E("");
    let v = null;
    function f(s) {
      return s.closest("[data-dev-inspector]") !== null;
    }
    function P(s) {
      if (!o.isPickMode) return;
      const a = s.target;
      if (!a || f(a)) {
        n.value.display = "none", d.value.display = "none";
        return;
      }
      if (a === v) return;
      v = a;
      const e = a.getBoundingClientRect();
      n.value = {
        top: `${e.top + window.scrollY}px`,
        left: `${e.left + window.scrollX}px`,
        width: `${e.width}px`,
        height: `${e.height}px`,
        display: "block"
      };
      let l = e.top + window.scrollY - 30;
      l < 10 && (l = e.bottom + window.scrollY + 8), d.value = {
        top: `${l}px`,
        left: `${e.left + window.scrollX}px`,
        display: "block"
      }, r.value = o.generateSelector(a), o.setHoveredSelector(r.value);
    }
    function y(s) {
      if (!o.isPickMode) return;
      const a = s.target;
      if (!a || f(a)) return;
      s.preventDefault(), s.stopPropagation();
      const e = o.generateSelector(a);
      o.getElementConfig(e) || o.setElementConfig(e, {
        componentPath: window.location.pathname
      }), o.startEditing(e), o.togglePickMode();
    }
    function i(s) {
      s.key === "Escape" && o.isPickMode && o.togglePickMode();
    }
    return N(() => {
      document.addEventListener("mousemove", P, !0), document.addEventListener("click", y, !0), document.addEventListener("keydown", i);
    }), B(() => {
      document.removeEventListener("mousemove", P, !0), document.removeEventListener("click", y, !0), document.removeEventListener("keydown", i);
    }), O(() => o.isPickMode, (s) => {
      s || (n.value.display = "none", d.value.display = "none", v = null);
    }), (s, a) => (u(), T(F, { to: "body" }, [
      c(o).isPickMode ? (u(), p("div", Nt, [
        t("div", {
          class: "di-highlight",
          style: U(n.value)
        }, null, 4),
        t("div", {
          class: "di-selector-tooltip",
          style: U(d.value)
        }, [
          t("code", null, x(r.value), 1)
        ], 4),
        a[0] || (a[0] = t("div", {
          class: "di-pick-instructions",
          "data-dev-inspector": ""
        }, [
          t("span", null, "🎯 Click an element to annotate"),
          t("kbd", null, "Esc"),
          I(" to cancel ")
        ], -1))
      ])) : m("", !0),
      c(o).isEditMode && !c(o).isPickMode ? (u(!0), p(S, { key: 1 }, A(c(o).getConfiguredSelectors(), (e) => (u(), p("div", {
        key: e,
        class: "di-configured-marker",
        "data-selector": e,
        onClick: (l) => c(o).startEditing(e)
      }, [...a[1] || (a[1] = [
        t("span", { class: "di-marker-dot" }, "●", -1)
      ])], 8, Lt))), 128)) : m("", !0)
    ]));
  }
}), Ft = /* @__PURE__ */ M(Bt, [["__scopeId", "data-v-d9bff61a"]]), Ht = {
  key: 0,
  "data-dev-inspector": ""
}, Rt = /* @__PURE__ */ $({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(k) {
    const o = k, n = w();
    return N(() => {
      n.init({
        storageKey: o.storageKey,
        enabledInProduction: o.enabledInProduction,
        initialAnnotations: o.initialAnnotations
      });
    }), (d, r) => c(n).isAvailable ? (u(), p("div", Ht, [
      _(rt),
      _(Ot),
      _(Ft)
    ])) : m("", !0);
  }
}), Yt = {
  install(k, o = {}) {
    const { autoRegister: n = !0, ...d } = o;
    n && k.component("DevInspector", Rt), k.provide("devInspectorOptions", d);
  }
};
export {
  Ot as DevElementEditor,
  Rt as DevInspector,
  rt as DevPanel,
  Ft as DevPickOverlay,
  Yt as VueDevInspector,
  Yt as default,
  jt as useDevInspector,
  w as useDevInspectorStore
};
