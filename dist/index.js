import { defineComponent as I, ref as E, computed as B, openBlock as r, createBlock as T, Transition as h, withCtx as V, unref as c, createElementBlock as p, createElementVNode as e, createTextVNode as w, normalizeClass as C, toDisplayString as P, createCommentVNode as m, Fragment as S, renderList as A, watch as O, withDirectives as f, vModelText as b, vModelSelect as D, onMounted as N, onUnmounted as L, Teleport as F, normalizeStyle as U, createVNode as _ } from "vue";
import { u as $ } from "./useDevInspector-BwEXh74O.js";
import { a as je } from "./useDevInspector-BwEXh74O.js";
const H = {
  key: 0,
  class: "di-panel"
}, K = { class: "di-panel-header" }, R = { class: "di-tabs" }, G = { class: "di-panel-content" }, Y = {
  key: 0,
  class: "di-tab-content"
}, J = { class: "di-section" }, W = { class: "di-button-group" }, j = { class: "di-section" }, z = { class: "di-stats" }, X = { class: "di-stat" }, q = { class: "di-stat-value" }, Q = {
  key: 1,
  class: "di-tab-content"
}, Z = {
  key: 0,
  class: "di-empty"
}, ee = {
  key: 1,
  class: "di-element-list"
}, te = ["onClick"], oe = { class: "di-element-id" }, ne = { class: "di-element-meta" }, le = {
  key: 0,
  class: "di-tag"
}, ie = {
  key: 1,
  class: "di-tag"
}, se = {
  key: 2,
  class: "di-tag"
}, ae = {
  key: 3,
  class: "di-tag"
}, de = {
  key: 2,
  class: "di-tab-content"
}, ue = /* @__PURE__ */ I({
  __name: "DevPanel",
  setup(k) {
    const o = $(), l = E("overview"), d = B(() => Object.keys(o.elementConfigs).length), u = () => {
      o.downloadAnnotations();
    }, v = () => {
      const y = document.createElement("input");
      y.type = "file", y.accept = ".json", y.onchange = async (i) => {
        var t;
        const s = (t = i.target.files) == null ? void 0 : t[0];
        if (!s) return;
        const a = await s.text();
        try {
          o.importConfigs(a);
        } catch {
          alert("Invalid JSON file");
        }
      }, y.click();
    }, g = () => {
      confirm("Are you sure you want to clear all annotations?") && o.clearAllConfigs();
    }, x = async () => {
      await navigator.clipboard.writeText(o.exportConfigs()), alert("Copied to clipboard!");
    };
    return (y, i) => (r(), T(h, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: V(() => [
        c(o).isPanelOpen ? (r(), p("div", H, [
          e("div", K, [
            i[6] || (i[6] = e("div", { class: "di-panel-title" }, [
              e("span", { class: "di-icon" }, "🔧"),
              w(" Dev Inspector ")
            ], -1)),
            e("button", {
              onClick: i[0] || (i[0] = //@ts-ignore
              (...s) => c(o).closePanel && c(o).closePanel(...s)),
              class: "di-close-btn"
            }, "✕")
          ]),
          e("div", R, [
            e("button", {
              class: C(["di-tab", { active: l.value === "overview" }]),
              onClick: i[1] || (i[1] = (s) => l.value = "overview")
            }, "Overview", 2),
            e("button", {
              class: C(["di-tab", { active: l.value === "elements" }]),
              onClick: i[2] || (i[2] = (s) => l.value = "elements")
            }, "Elements (" + P(d.value) + ")", 3),
            e("button", {
              class: C(["di-tab", { active: l.value === "export" }]),
              onClick: i[3] || (i[3] = (s) => l.value = "export")
            }, "Export", 2)
          ]),
          e("div", G, [
            l.value === "overview" ? (r(), p("div", Y, [
              e("div", J, [
                i[7] || (i[7] = e("h3", null, "Mode", -1)),
                e("div", W, [
                  e("button", {
                    class: C(["di-btn", { active: c(o).isPickMode }]),
                    onClick: i[4] || (i[4] = //@ts-ignore
                    (...s) => c(o).togglePickMode && c(o).togglePickMode(...s))
                  }, P(c(o).isPickMode ? "🎯 Picking..." : "🎯 Pick Element"), 3),
                  e("button", {
                    class: C(["di-btn", { active: c(o).isEditMode }]),
                    onClick: i[5] || (i[5] = //@ts-ignore
                    (...s) => c(o).toggleEditMode && c(o).toggleEditMode(...s))
                  }, P(c(o).isEditMode ? "✏️ Editing..." : "✏️ Edit Mode"), 3)
                ])
              ]),
              e("div", j, [
                i[9] || (i[9] = e("h3", null, "Stats", -1)),
                e("div", z, [
                  e("div", X, [
                    e("span", q, P(d.value), 1),
                    i[8] || (i[8] = e("span", { class: "di-stat-label" }, "Annotated Elements", -1))
                  ])
                ])
              ]),
              i[10] || (i[10] = e("div", { class: "di-section" }, [
                e("h3", null, "Keyboard Shortcuts"),
                e("div", { class: "di-shortcuts" }, [
                  e("div", { class: "di-shortcut" }, [
                    e("kbd", null, "Ctrl"),
                    w("+"),
                    e("kbd", null, "Shift"),
                    w("+"),
                    e("kbd", null, "D"),
                    e("span", null, "Toggle Panel")
                  ]),
                  e("div", { class: "di-shortcut" }, [
                    e("kbd", null, "Esc"),
                    e("span", null, "Close Panel")
                  ])
                ])
              ], -1))
            ])) : m("", !0),
            l.value === "elements" ? (r(), p("div", Q, [
              d.value === 0 ? (r(), p("div", Z, [...i[11] || (i[11] = [
                w(" No elements annotated yet.", -1),
                e("br", null, null, -1),
                w(" Use Pick Element to start. ", -1)
              ])])) : (r(), p("div", ee, [
                (r(!0), p(S, null, A(c(o).elementConfigs, (s, a) => {
                  var t;
                  return r(), p("div", {
                    key: a,
                    class: "di-element-item",
                    onClick: (n) => c(o).startEditing(a)
                  }, [
                    e("div", oe, P(a), 1),
                    e("div", ne, [
                      s.fieldInfo ? (r(), p("span", le, "DB")) : m("", !0),
                      s.actionInfo ? (r(), p("span", ie, "Action")) : m("", !0),
                      (t = s.links) != null && t.figmaUrl ? (r(), p("span", se, "Figma")) : m("", !0),
                      s.note ? (r(), p("span", ae, "Note")) : m("", !0)
                    ])
                  ], 8, te);
                }), 128))
              ]))
            ])) : m("", !0),
            l.value === "export" ? (r(), p("div", de, [
              e("div", { class: "di-section" }, [
                i[12] || (i[12] = e("h3", null, "Export / Import", -1)),
                e("div", { class: "di-button-group vertical" }, [
                  e("button", {
                    class: "di-btn",
                    onClick: u
                  }, " 📥 Download JSON "),
                  e("button", {
                    class: "di-btn",
                    onClick: x
                  }, " 📋 Copy to Clipboard "),
                  e("button", {
                    class: "di-btn",
                    onClick: v
                  }, " 📤 Import JSON "),
                  e("button", {
                    class: "di-btn danger",
                    onClick: g
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
  const l = k.__vccOpts || k;
  for (const [d, u] of o)
    l[d] = u;
  return l;
}, re = /* @__PURE__ */ M(ue, [["__scopeId", "data-v-aaebeac9"]]), ve = {
  key: 0,
  class: "di-editor"
}, pe = { class: "di-element-id-display" }, ce = { class: "di-section-tabs" }, me = { class: "di-editor-content" }, fe = {
  key: 0,
  class: "di-form"
}, ge = { class: "di-form-group" }, be = { class: "di-form-group" }, ke = { class: "di-form-group" }, ye = { class: "di-form-group" }, Ee = {
  key: 1,
  class: "di-form"
}, Ce = { class: "di-form-group" }, Pe = {
  key: 0,
  class: "di-form-group"
}, xe = { class: "di-form-group" }, we = { class: "di-form-group" }, Ie = {
  key: 2,
  class: "di-form"
}, $e = { class: "di-form-group" }, De = { class: "di-form-group" }, _e = { class: "di-form-group" }, Te = { class: "di-form-group" }, Me = { class: "di-form-group" }, Ue = {
  key: 3,
  class: "di-form"
}, he = { class: "di-form-group" }, Ve = { class: "di-form-group" }, Se = { class: "di-form-group" }, Ae = /* @__PURE__ */ I({
  __name: "DevElementEditor",
  setup(k) {
    const o = $(), l = E("field"), d = E({ table: "", column: "" }), u = E({ type: "navigate" }), v = E({}), g = E({ text: "", type: "info" });
    O(() => o.editingElementId, (a) => {
      if (a) {
        const t = o.getElementConfig(a);
        t ? (d.value = t.fieldInfo || { table: "", column: "" }, u.value = t.actionInfo || { type: "navigate" }, v.value = t.links || {}, g.value = t.note || { text: "", type: "info" }) : x();
      }
    }, { immediate: !0 });
    function x() {
      d.value = { table: "", column: "" }, u.value = { type: "navigate" }, v.value = {}, g.value = { text: "", type: "info" };
    }
    function y() {
      if (!o.editingElementId) return;
      const a = {};
      (d.value.table || d.value.column) && (a.fieldInfo = d.value), (u.value.target || u.value.description) && (a.actionInfo = u.value), (v.value.figmaUrl || v.value.testPath || v.value.githubIssue) && (a.links = v.value), g.value.text && (a.note = g.value), o.setElementConfig(o.editingElementId, a), o.stopEditing();
    }
    function i() {
      o.editingElementId && confirm("Delete this annotation?") && (o.deleteElementConfig(o.editingElementId), o.stopEditing());
    }
    function s() {
      o.stopEditing();
    }
    return (a, t) => (r(), T(h, {
      "enter-active-class": "di-transition-enter",
      "leave-active-class": "di-transition-leave"
    }, {
      default: V(() => [
        c(o).editingElementId ? (r(), p("div", ve, [
          e("div", { class: "di-editor-header" }, [
            t[20] || (t[20] = e("div", { class: "di-editor-title" }, "Edit Element", -1)),
            e("button", {
              onClick: s,
              class: "di-close-btn"
            }, "✕")
          ]),
          e("div", pe, [
            e("code", null, P(c(o).editingElementId), 1)
          ]),
          e("div", ce, [
            e("button", {
              class: C(["di-section-tab", { active: l.value === "field" }]),
              onClick: t[0] || (t[0] = (n) => l.value = "field")
            }, "🗄️ DB Field", 2),
            e("button", {
              class: C(["di-section-tab", { active: l.value === "action" }]),
              onClick: t[1] || (t[1] = (n) => l.value = "action")
            }, "⚡ Action", 2),
            e("button", {
              class: C(["di-section-tab", { active: l.value === "links" }]),
              onClick: t[2] || (t[2] = (n) => l.value = "links")
            }, "🔗 Links", 2),
            e("button", {
              class: C(["di-section-tab", { active: l.value === "note" }]),
              onClick: t[3] || (t[3] = (n) => l.value = "note")
            }, "📝 Note", 2)
          ]),
          e("div", me, [
            l.value === "field" ? (r(), p("div", fe, [
              e("div", ge, [
                t[21] || (t[21] = e("label", null, "Table Name", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[4] || (t[4] = (n) => d.value.table = n),
                  type: "text",
                  placeholder: "e.g., users"
                }, null, 512), [
                  [b, d.value.table]
                ])
              ]),
              e("div", be, [
                t[22] || (t[22] = e("label", null, "Column Name", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[5] || (t[5] = (n) => d.value.column = n),
                  type: "text",
                  placeholder: "e.g., email"
                }, null, 512), [
                  [b, d.value.column]
                ])
              ]),
              e("div", ke, [
                t[23] || (t[23] = e("label", null, "Data Type", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[6] || (t[6] = (n) => d.value.type = n),
                  type: "text",
                  placeholder: "e.g., VARCHAR(255)"
                }, null, 512), [
                  [b, d.value.type]
                ])
              ]),
              e("div", ye, [
                t[24] || (t[24] = e("label", null, "Description", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[7] || (t[7] = (n) => d.value.description = n),
                  placeholder: "Field description...",
                  rows: "2"
                }, null, 512), [
                  [b, d.value.description]
                ])
              ])
            ])) : m("", !0),
            l.value === "action" ? (r(), p("div", Ee, [
              e("div", Ce, [
                t[26] || (t[26] = e("label", null, "Action Type", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[8] || (t[8] = (n) => u.value.type = n)
                }, [...t[25] || (t[25] = [
                  e("option", { value: "navigate" }, "Navigate", -1),
                  e("option", { value: "api" }, "API Call", -1),
                  e("option", { value: "modal" }, "Open Modal", -1),
                  e("option", { value: "emit" }, "Emit Event", -1),
                  e("option", { value: "function" }, "Function Call", -1)
                ])], 512), [
                  [D, u.value.type]
                ])
              ]),
              u.value.type === "api" ? (r(), p("div", Pe, [
                t[28] || (t[28] = e("label", null, "HTTP Method", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[9] || (t[9] = (n) => u.value.method = n)
                }, [...t[27] || (t[27] = [
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [D, u.value.method]
                ])
              ])) : m("", !0),
              e("div", xe, [
                t[29] || (t[29] = e("label", null, "Target / Endpoint", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[10] || (t[10] = (n) => u.value.target = n),
                  type: "text",
                  placeholder: "e.g., /api/users or /dashboard"
                }, null, 512), [
                  [b, u.value.target]
                ])
              ]),
              e("div", we, [
                t[30] || (t[30] = e("label", null, "Description", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[11] || (t[11] = (n) => u.value.description = n),
                  placeholder: "What this action does...",
                  rows: "2"
                }, null, 512), [
                  [b, u.value.description]
                ])
              ])
            ])) : m("", !0),
            l.value === "links" ? (r(), p("div", Ie, [
              e("div", $e, [
                t[31] || (t[31] = e("label", null, "Figma URL", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[12] || (t[12] = (n) => v.value.figmaUrl = n),
                  type: "url",
                  placeholder: "https://figma.com/..."
                }, null, 512), [
                  [b, v.value.figmaUrl]
                ])
              ]),
              e("div", De, [
                t[32] || (t[32] = e("label", null, "Test File Path", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[13] || (t[13] = (n) => v.value.testPath = n),
                  type: "text",
                  placeholder: "e.g., tests/components/Button.spec.ts"
                }, null, 512), [
                  [b, v.value.testPath]
                ])
              ]),
              e("div", _e, [
                t[33] || (t[33] = e("label", null, "GitHub Issue", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[14] || (t[14] = (n) => v.value.githubIssue = n),
                  type: "url",
                  placeholder: "https://github.com/.../issues/123"
                }, null, 512), [
                  [b, v.value.githubIssue]
                ])
              ]),
              e("div", Te, [
                t[34] || (t[34] = e("label", null, "GitHub PR", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[15] || (t[15] = (n) => v.value.githubPr = n),
                  type: "url",
                  placeholder: "https://github.com/.../pull/456"
                }, null, 512), [
                  [b, v.value.githubPr]
                ])
              ]),
              e("div", Me, [
                t[35] || (t[35] = e("label", null, "Related Docs", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[16] || (t[16] = (n) => v.value.relatedDocs = n),
                  type: "url",
                  placeholder: "https://..."
                }, null, 512), [
                  [b, v.value.relatedDocs]
                ])
              ])
            ])) : m("", !0),
            l.value === "note" ? (r(), p("div", Ue, [
              e("div", he, [
                t[37] || (t[37] = e("label", null, "Note Type", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[17] || (t[17] = (n) => g.value.type = n)
                }, [...t[36] || (t[36] = [
                  e("option", { value: "info" }, "ℹ️ Info", -1),
                  e("option", { value: "warning" }, "⚠️ Warning", -1),
                  e("option", { value: "todo" }, "📋 TODO", -1),
                  e("option", { value: "question" }, "❓ Question", -1)
                ])], 512), [
                  [D, g.value.type]
                ])
              ]),
              e("div", Ve, [
                t[38] || (t[38] = e("label", null, "Note Text", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[18] || (t[18] = (n) => g.value.text = n),
                  placeholder: "Write your note here...",
                  rows: "4"
                }, null, 512), [
                  [b, g.value.text]
                ])
              ]),
              e("div", Se, [
                t[39] || (t[39] = e("label", null, "Author", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[19] || (t[19] = (n) => g.value.author = n),
                  type: "text",
                  placeholder: "Your name"
                }, null, 512), [
                  [b, g.value.author]
                ])
              ])
            ])) : m("", !0)
          ]),
          e("div", { class: "di-editor-footer" }, [
            e("button", {
              class: "di-btn danger",
              onClick: i
            }, "Delete"),
            e("div", { class: "di-footer-right" }, [
              e("button", {
                class: "di-btn",
                onClick: s
              }, "Cancel"),
              e("button", {
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
}), Oe = /* @__PURE__ */ M(Ae, [["__scopeId", "data-v-39feb4ae"]]), Ne = {
  key: 0,
  class: "di-pick-overlay",
  "data-dev-inspector": ""
}, Le = ["data-selector", "onClick"], Be = /* @__PURE__ */ I({
  __name: "DevPickOverlay",
  setup(k) {
    const o = $(), l = E({
      top: "0",
      left: "0",
      width: "0",
      height: "0",
      display: "none"
    }), d = E({
      top: "0",
      left: "0",
      display: "none"
    }), u = E("");
    let v = null;
    function g(s) {
      return s.closest("[data-dev-inspector]") !== null;
    }
    function x(s) {
      if (!o.isPickMode) return;
      const a = s.target;
      if (!a || g(a)) {
        l.value.display = "none", d.value.display = "none";
        return;
      }
      if (a === v) return;
      v = a;
      const t = a.getBoundingClientRect();
      l.value = {
        top: `${t.top + window.scrollY}px`,
        left: `${t.left + window.scrollX}px`,
        width: `${t.width}px`,
        height: `${t.height}px`,
        display: "block"
      };
      let n = t.top + window.scrollY - 30;
      n < 10 && (n = t.bottom + window.scrollY + 8), d.value = {
        top: `${n}px`,
        left: `${t.left + window.scrollX}px`,
        display: "block"
      }, u.value = o.generateSelector(a), o.setHoveredSelector(u.value);
    }
    function y(s) {
      if (!o.isPickMode) return;
      const a = s.target;
      if (!a || g(a)) return;
      s.preventDefault(), s.stopPropagation();
      const t = o.generateSelector(a);
      o.getElementConfig(t) || o.setElementConfig(t, {
        componentPath: window.location.pathname
      }), o.startEditing(t), o.togglePickMode();
    }
    function i(s) {
      s.key === "Escape" && o.isPickMode && o.togglePickMode();
    }
    return N(() => {
      document.addEventListener("mousemove", x, !0), document.addEventListener("click", y, !0), document.addEventListener("keydown", i);
    }), L(() => {
      document.removeEventListener("mousemove", x, !0), document.removeEventListener("click", y, !0), document.removeEventListener("keydown", i);
    }), O(() => o.isPickMode, (s) => {
      s || (l.value.display = "none", d.value.display = "none", v = null);
    }), (s, a) => (r(), T(F, { to: "body" }, [
      c(o).isPickMode ? (r(), p("div", Ne, [
        e("div", {
          class: "di-highlight",
          style: U(l.value)
        }, null, 4),
        e("div", {
          class: "di-selector-tooltip",
          style: U(d.value)
        }, [
          e("code", null, P(u.value), 1)
        ], 4),
        a[0] || (a[0] = e("div", {
          class: "di-pick-instructions",
          "data-dev-inspector": ""
        }, [
          e("span", null, "🎯 Click an element to annotate"),
          e("kbd", null, "Esc"),
          w(" to cancel ")
        ], -1))
      ])) : m("", !0),
      c(o).isEditMode && !c(o).isPickMode ? (r(!0), p(S, { key: 1 }, A(c(o).getConfiguredSelectors(), (t) => (r(), p("div", {
        key: t,
        class: "di-configured-marker",
        "data-selector": t,
        onClick: (n) => c(o).startEditing(t)
      }, [...a[1] || (a[1] = [
        e("span", { class: "di-marker-dot" }, "●", -1)
      ])], 8, Le))), 128)) : m("", !0)
    ]));
  }
}), Fe = /* @__PURE__ */ M(Be, [["__scopeId", "data-v-d9bff61a"]]), He = {
  key: 0,
  "data-dev-inspector": ""
}, Ke = /* @__PURE__ */ I({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {}
  },
  setup(k) {
    const o = k, l = $();
    function d(u) {
      u.ctrlKey && u.shiftKey && u.key === "D" && (u.preventDefault(), l.isEnabled || l.enable(), l.togglePanel()), u.key === "Escape" && l.isPanelOpen && l.closePanel();
    }
    return N(() => {
      l.init({
        storageKey: o.storageKey,
        enabledInProduction: o.enabledInProduction,
        initialAnnotations: o.initialAnnotations
      }), window.addEventListener("keydown", d);
    }), L(() => {
      window.removeEventListener("keydown", d);
    }), (u, v) => c(l).isAvailable ? (r(), p("div", He, [
      _(re),
      _(Oe),
      _(Fe)
    ])) : m("", !0);
  }
}), Ye = {
  install(k, o = {}) {
    const { autoRegister: l = !0, ...d } = o;
    l && k.component("DevInspector", Ke), k.provide("devInspectorOptions", d);
  }
};
export {
  Oe as DevElementEditor,
  Ke as DevInspector,
  re as DevPanel,
  Fe as DevPickOverlay,
  Ye as VueDevInspector,
  Ye as default,
  je as useDevInspector,
  $ as useDevInspectorStore
};
