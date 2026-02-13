import { h as Yt, defineComponent as _t, ref as y, computed as j, watch as Ct, openBlock as n, createElementBlock as i, Fragment as I, createBlock as Ke, Teleport as at, unref as u, createVNode as C, createCommentVNode as v, createElementVNode as e, normalizeClass as z, toDisplayString as m, withDirectives as f, renderList as D, createTextVNode as E, vShow as kt, normalizeStyle as He, vModelText as w, withModifiers as fe, vModelSelect as we, withKeys as wt, resolveDynamicComponent as Bl, vModelCheckbox as Ut, onMounted as ll, onUnmounted as Ll } from "vue";
import { u as It } from "./useDevInspector-DTPBgfol.js";
import { a as Vc } from "./useDevInspector-DTPBgfol.js";
import { default as Ec } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var St = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = (R) => R.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), q = (R, a) => ({ size: U, strokeWidth: V = 2, absoluteStrokeWidth: G, color: J, class: ee, ...re }, { attrs: ce, slots: F }) => Yt(
  "svg",
  {
    ...St,
    width: U || St.width,
    height: U || St.height,
    stroke: J || St.stroke,
    "stroke-width": G ? Number(V) * 24 / Number(U) : V,
    ...ce,
    class: ["lucide", `lucide-${Al(R)}`],
    ...re
  },
  [
    ...a.map((X) => Yt(...X)),
    ...F.default ? [F.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = q("AlertCircleIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = q("AlertTriangleIcon", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = q("ArrowUpDownIcon", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = q("CalculatorIcon", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = q("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = q("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = q("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = q("ClipboardListIcon", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = q("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = q("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = q("DatabaseIcon", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = q("DownloadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = q("ExternalLinkIcon", [
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = q("EyeOffIcon", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = q("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = q("FileSpreadsheetIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = q("FileTextIcon", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = q("FormInputIcon", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = q("GitBranchIcon", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = q("GitMergeIcon", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = q("ListIcon", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = q("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = q("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = q("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = q("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = q("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = q("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = q("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = q("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = q("SaveIcon", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = q("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = q("ServerIcon", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = q("ShieldQuestionIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = q("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = q("Trash2Icon", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = q("TypeIcon", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = q("UploadIcon", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = q("Wand2Icon", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = q("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = q("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function io(R, a, U = {}) {
  var ie;
  const V = await import("./xlsx-BopDBbWb.js"), { systemName: G = "System", author: J = "" } = U, ee = /* @__PURE__ */ new Date(), re = `${ee.getFullYear()}/${ee.getMonth() + 1}/${ee.getDate()}`, ce = V.utils.book_new(), F = [];
  F.push([
    "画面機能仕様書",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "システム名",
    "",
    "",
    "",
    "",
    G,
    "",
    "",
    "",
    "",
    "",
    "画面ID/画面名",
    "",
    "",
    "",
    "",
    (R == null ? void 0 : R.name) || "",
    "",
    "",
    "",
    "",
    "",
    "作成者",
    "",
    "",
    "",
    "",
    J,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    re
  ]), F.push([]), F.push([
    "URL",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "画面英語名",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "View Component",
    "",
    "",
    "",
    "",
    (R == null ? void 0 : R.componentPath) || "",
    "",
    "",
    "",
    "",
    "",
    "Figma URL",
    "",
    "",
    "",
    "",
    (R == null ? void 0 : R.figmaUrl) || ""
  ]), F.push([]), F.push(["機能概要"]), F.push([(R == null ? void 0 : R.description) || ""]), F.push([]), F.push(["画面レイアウト　figmaURL"]), F.push([(R == null ? void 0 : R.figmaUrl) || ""]), F.push([]), R != null && R.apis && R.apis.length > 0 && (F.push(["API一覧"]), F.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), R.apis.forEach((M) => {
    F.push(["", M.method, "", M.endpoint, "", "", "", "", "", "", "", M.description]);
  }), F.push([])), F.push(["画面項目　ヘッダーフッターは省く"]), F.push([
    "",
    "No.",
    "",
    "項目名",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "説明",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "表示条件",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "備考"
  ]), Object.values(a).forEach((M, he) => {
    var Se, Ve, A;
    const Ue = M.id;
    let $e = "", qe = "", ve = "";
    if ((Se = M.note) != null && Se.text && ($e = M.note.text), M.fieldInfo && ($e += $e ? `
` : "", $e += `DB: ${M.fieldInfo.table}.${M.fieldInfo.column}`, M.fieldInfo.type && ($e += ` (${M.fieldInfo.type})`), M.fieldInfo.description && ($e += `
${M.fieldInfo.description}`)), M.actionInfo && (ve = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信",
      sort: "ソート"
    }[M.actionInfo.type] || M.actionInfo.type}]`, M.actionInfo.target && (ve += ` ${M.actionInfo.method || ""} ${M.actionInfo.target}`), M.actionInfo.description && (ve += `
${M.actionInfo.description}`)), M.links) {
      const _ = [];
      M.links.testPath && _.push(`テスト: ${M.links.testPath}`), M.links.figmaUrl && _.push(`Figma: ${M.links.figmaUrl}`), M.links.githubIssue && _.push(`Issue: ${M.links.githubIssue}`), M.links.githubPr && _.push(`PR: ${M.links.githubPr}`), _.length > 0 && (ve += ve ? `

` : "", ve += _.join(`
`));
    }
    if (M.devMeta) {
      const _ = [];
      (Ve = M.devMeta.usedStores) != null && Ve.length && _.push(`Store: ${M.devMeta.usedStores.join(", ")}`), (A = M.devMeta.usedComponents) != null && A.length && _.push(`Components: ${M.devMeta.usedComponents.join(", ")}`), M.devMeta.accessibility && _.push(`A11y: ${M.devMeta.accessibility}`), M.devMeta.responsive && _.push(`Responsive: ${M.devMeta.responsive}`), _.length > 0 && (ve += ve ? `

` : "", ve += `[開発情報]
` + _.join(`
`));
    }
    F.push([
      "",
      he + 1,
      "",
      Ue,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      $e,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      qe,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ve
    ]);
  });
  const ne = V.utils.aoa_to_sheet(F);
  ne["!cols"] = [
    { wch: 3 },
    // A
    { wch: 5 },
    // B - No
    { wch: 3 },
    // C
    { wch: 20 },
    // D - 項目名
    { wch: 5 },
    // E
    { wch: 5 },
    // F
    { wch: 5 },
    // G
    { wch: 5 },
    // H
    { wch: 5 },
    // I
    { wch: 5 },
    // J
    { wch: 5 },
    // K
    { wch: 5 },
    // L
    { wch: 5 },
    // M
    { wch: 5 },
    // N
    { wch: 5 },
    // O
    { wch: 30 },
    // P - 説明
    { wch: 5 },
    // Q
    { wch: 5 },
    // R
    { wch: 5 },
    // S
    { wch: 5 },
    // T
    { wch: 5 },
    // U
    { wch: 5 },
    // V
    { wch: 5 },
    // W
    { wch: 5 },
    // X
    { wch: 5 },
    // Y
    { wch: 5 },
    // Z
    { wch: 5 },
    // AA
    { wch: 5 },
    // AB
    { wch: 5 },
    // AC
    { wch: 5 },
    // AD
    { wch: 5 },
    // AE
    { wch: 20 },
    // AF - 表示条件
    { wch: 5 },
    // AG
    { wch: 5 },
    // AH
    { wch: 5 },
    // AI
    { wch: 5 },
    // AJ
    { wch: 5 },
    // AK
    { wch: 5 },
    // AL
    { wch: 5 },
    // AM
    { wch: 5 },
    // AN
    { wch: 5 },
    // AO
    { wch: 5 },
    // AP
    { wch: 5 },
    // AQ
    { wch: 5 },
    // AR
    { wch: 5 },
    // AS
    { wch: 5 },
    // AT
    { wch: 30 }
    // AU - 備考
  ], V.utils.book_append_sheet(ce, ne, "画面設計書");
  const ye = `画面仕様書_${((ie = R == null ? void 0 : R.name) == null ? void 0 : ie.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${re.replace(/\//g, "")}.xlsx`;
  return V.writeFile(ce, ye), ye;
}
const ao = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, uo = { class: "di-header" }, ro = { class: "di-header-title" }, co = { class: "di-tab-bar" }, vo = {
  key: 0,
  class: "di-tab-badge"
}, po = {
  key: 0,
  class: "di-tab-badge"
}, mo = {
  key: 0,
  class: "di-tab-badge"
}, fo = { class: "di-edit-section" }, bo = { class: "di-note-toggle-badge" }, yo = {
  key: 1,
  class: "di-note-filter"
}, ho = { class: "di-filter-buttons" }, go = ["onClick"], ko = {
  key: 2,
  class: "di-element-list-section"
}, xo = { class: "di-element-list-header" }, wo = { class: "di-count-badge" }, $o = { key: 0 }, Co = {
  key: 0,
  class: "di-element-list"
}, _o = ["onClick", "onMouseenter"], Io = { class: "di-element-item-body" }, To = { class: "di-element-item-label" }, Uo = {
  key: 1,
  class: "di-modal-group"
}, So = { class: "di-modal-group-icon" }, Vo = { class: "di-count-badge" }, Mo = {
  key: 0,
  class: "di-element-list"
}, Eo = ["onClick", "onMouseenter"], Do = { class: "di-element-item-body" }, Po = { class: "di-element-item-label" }, Bo = {
  key: 0,
  class: "di-unannotated-badge"
}, Lo = {
  key: 3,
  class: "di-unannotated-results"
}, Ao = { class: "di-unannotated-summary" }, Fo = { key: 0 }, Oo = { key: 1 }, No = { key: 2 }, jo = { class: "di-unannotated-list" }, Ho = ["onMouseenter"], qo = { class: "di-unannotated-text" }, Ro = ["onClick"], zo = ["onClick"], Ko = {
  key: 4,
  class: "di-unannotated-empty"
}, Yo = {
  key: 5,
  class: "di-broken-warning"
}, Go = { class: "di-broken-header" }, Xo = { class: "di-broken-list" }, Zo = { class: "di-broken-item-info" }, Jo = { class: "di-broken-item-note" }, Qo = { class: "di-broken-item-selector" }, Wo = { class: "di-broken-item-actions" }, es = ["onClick"], ts = ["onClick"], ls = { class: "di-broken-actions" }, os = { class: "di-content" }, ss = { class: "di-section" }, ns = { class: "di-screen-header" }, is = { class: "di-screen-name" }, as = {
  key: 0,
  class: "di-screen-desc"
}, ds = {
  key: 1,
  class: "di-auth-badges"
}, us = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, rs = {
  key: 1,
  class: "di-auth-note"
}, cs = {
  key: 0,
  class: "di-card"
}, vs = { class: "di-card-label" }, ps = { class: "di-code-blue" }, ms = {
  key: 1,
  class: "di-card"
}, fs = { class: "di-card-label" }, bs = ["href"], ys = {
  key: 2,
  class: "di-card"
}, hs = { class: "di-card-label" }, gs = { class: "di-api-list" }, ks = { class: "di-api-info" }, xs = { class: "di-api-endpoint" }, ws = {
  key: 0,
  class: "di-api-desc"
}, $s = {
  key: 0,
  class: "di-api-timing-badge"
}, Cs = {
  key: 3,
  class: "di-card"
}, _s = { class: "di-card-label" }, Is = { class: "di-screen-notes" }, Ts = {
  key: 1,
  class: "di-no-spec"
}, Us = { class: "di-card di-cross-search-section" }, Ss = { class: "di-cross-search-header" }, Vs = { class: "di-cross-search-body" }, Ms = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, Es = ["onClick"], Ds = ["placeholder"], Ps = {
  key: 0,
  class: "di-cross-search-count"
}, Bs = {
  key: 1,
  class: "di-cross-search-results"
}, Ls = { class: "di-cross-search-page-header" }, As = {
  key: 0,
  class: "di-cross-search-page-name"
}, Fs = ["onClick"], Os = { class: "di-cross-search-field" }, Ns = {
  key: 0,
  class: "di-cross-search-context"
}, js = { class: "di-card di-screen-flow-section" }, Hs = {
  key: 0,
  class: "di-screen-flow-badge"
}, qs = {
  key: 0,
  class: "di-screen-flow-body"
}, Rs = {
  key: 0,
  class: "di-screen-flow-empty"
}, zs = { class: "di-flow-node-path" }, Ks = {
  key: 0,
  class: "di-flow-node-name"
}, Ys = ["onClick"], Gs = { class: "di-flow-target" }, Xs = {
  key: 0,
  class: "di-flow-edge-label"
}, Zs = {
  key: 1,
  class: "di-flow-orphans"
}, Js = { class: "di-section" }, Qs = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Ws = {
  key: 0,
  class: "di-section-badge"
}, en = { class: "di-master-table-name" }, tn = ["onClick"], ln = { class: "di-master-item-header" }, on = { class: "di-master-col-name" }, sn = {
  key: 0,
  class: "di-master-col-type"
}, nn = { class: "di-master-item-name" }, an = { class: "di-master-entries-preview" }, dn = {
  key: 0,
  class: "di-master-entry-more"
}, un = { class: "di-master-editor" }, rn = { class: "di-master-editor-header" }, cn = { class: "di-master-editor-body" }, vn = { class: "di-master-row" }, pn = { class: "di-master-field" }, mn = ["disabled"], fn = { class: "di-master-field" }, bn = ["disabled"], yn = { class: "di-master-row" }, hn = { class: "di-master-field" }, gn = { class: "di-master-field" }, kn = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, xn = { class: "di-master-entries-header" }, wn = { class: "di-master-entries-list" }, $n = ["onUpdate:modelValue"], Cn = ["onUpdate:modelValue"], _n = ["onUpdate:modelValue"], In = ["onUpdate:modelValue"], Tn = ["onClick"], Un = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, Sn = {
  key: 0,
  class: "di-master-entries-list"
}, Vn = ["onUpdate:modelValue"], Mn = ["value"], En = ["onUpdate:modelValue"], Dn = ["value"], Pn = ["onUpdate:modelValue"], Bn = ["onUpdate:modelValue"], Ln = ["onClick"], An = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, Fn = { class: "di-master-editor-footer" }, On = ["disabled"], Nn = { class: "di-section" }, jn = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Hn = {
  key: 0,
  class: "di-section-badge"
}, qn = ["onClick"], Rn = { class: "di-batch-item-info" }, zn = { class: "di-batch-item-name" }, Kn = {
  key: 0,
  class: "di-batch-item-schedule"
}, Yn = { class: "di-batch-editor" }, Gn = { class: "di-batch-editor-header" }, Xn = { class: "di-batch-editor-body" }, Zn = { class: "di-batch-row" }, Jn = { class: "di-batch-field" }, Qn = { class: "di-batch-field" }, Wn = { class: "di-batch-row" }, ei = { class: "di-batch-field" }, ti = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, li = { class: "di-batch-row" }, oi = { class: "di-batch-field" }, si = { class: "di-batch-tags-input" }, ni = ["onClick"], ii = { class: "di-batch-field" }, ai = { class: "di-batch-tags-input" }, di = ["onClick"], ui = { class: "di-batch-section-label" }, ri = { key: 0 }, ci = { class: "di-batch-step-no" }, vi = ["onUpdate:modelValue"], pi = ["onUpdate:modelValue"], mi = ["onUpdate:modelValue"], fi = ["onUpdate:modelValue"], bi = ["onClick"], yi = { class: "di-batch-row" }, hi = { class: "di-batch-field" }, gi = { class: "di-batch-field" }, ki = { class: "di-batch-row" }, xi = { class: "di-batch-field" }, wi = { class: "di-batch-field" }, $i = { class: "di-batch-editor-footer" }, Ci = ["disabled"], _i = { class: "di-export-buttons" }, Ii = { class: "di-action-buttons" }, Ti = {
  key: 0,
  class: "di-export-summary"
}, Ui = { class: "di-export-summary-row" }, Si = { class: "di-export-summary-count" }, Vi = { class: "di-export-summary-row" }, Mi = { class: "di-export-summary-count" }, Ei = { class: "di-export-summary-row" }, Di = { class: "di-export-summary-count" }, Pi = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Bi = { class: "di-modal" }, Li = ["value"], Ai = { class: "di-modal-actions" }, Fi = { class: "di-modal" }, Oi = { class: "di-file-drop" }, Ni = {
  key: 0,
  class: "di-error"
}, ji = { class: "di-modal-actions" }, Hi = ["disabled"], qi = /* @__PURE__ */ _t({
  __name: "DevPanel",
  setup(R) {
    const a = It(), U = y("elements"), V = y(!1), G = y(!1), J = y(""), ee = y(""), re = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, ce = j(() => a.currentScreenSpec), F = j(() => a.getScreenConfig()), X = j(() => {
      var s;
      const r = F.value, l = ce.value;
      return !r && !l ? null : {
        name: (r == null ? void 0 : r.name) || (l == null ? void 0 : l.name) || "",
        description: (r == null ? void 0 : r.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (r == null ? void 0 : r.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (r == null ? void 0 : r.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (r == null ? void 0 : r.apis) || ((s = l == null ? void 0 : l.apis) == null ? void 0 : s.map((g) => ({ ...g, loadTiming: void 0 }))) || [],
        auth: (r == null ? void 0 : r.auth) || null,
        notes: (r == null ? void 0 : r.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), ne = j(() => Object.keys(a.elementConfigs).length), be = j(() => {
      const r = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(a.elementConfigs).filter(([, l]) => !l.pagePath || l.pagePath === r).map(([l, s]) => {
        var h, W, se;
        let g = "";
        return (h = s.note) != null && h.text ? g = s.note.text : s.fieldInfo ? g = `${s.fieldInfo.table}.${s.fieldInfo.column}` : (W = s.actionInfo) != null && W.description ? g = s.actionInfo.description : (se = s.actionInfo) != null && se.type ? (g = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[s.actionInfo.type] || s.actionInfo.type, s.actionInfo.target && (g += ` → ${s.actionInfo.target}`)) : s.formInfo && (g = s.formInfo.label || s.formInfo.inputType || "フォーム"), g || (g = l), { id: l, desc: g, type: s.elementType, isConditional: !!s.isConditional, config: s };
      });
    }), ye = j(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? be.value : be.value.filter((l) => {
        var se, d, nt, Pe, Z;
        const s = l.config, g = (se = s.note) == null ? void 0 : se.displayType, h = !!((d = s.note) != null && d.condition || (nt = s.note) != null && nt.conditionColumn), W = !!((Pe = s.note) != null && Pe.storedCalc);
        switch (r) {
          case "db":
            return g === "db_direct" || g === "db_formatted";
          case "calculated":
            return g === "calculated";
          case "storedCalc":
            return W;
          case "static":
            return g === "static";
          case "conditional":
            return h;
          case "action":
            return s.elementType === "action";
          case "form":
            return s.elementType === "form";
          case "other":
            return g === "other" || !g && !s.elementType && !!((Z = s.note) != null && Z.text);
          default:
            return !0;
        }
      });
    }), ie = j(() => ye.value.filter((r) => !r.isConditional)), M = j(() => ye.value.filter((r) => r.isConditional)), he = y(!1), Ue = j(() => Object.values(a.elementConfigs).filter((r) => {
      var l, s;
      return !!((l = r.note) != null && l.text || (s = r.note) != null && s.displayType);
    }).length), $e = j(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? Ue.value : Object.values(a.elementConfigs).filter((l) => {
        var W, se, d, nt, Pe, Z, xe;
        if (!((W = l.note) != null && W.text || (se = l.note) != null && se.displayType || l.elementType)) return !1;
        const s = (d = l.note) == null ? void 0 : d.displayType, g = !!((nt = l.note) != null && nt.condition || (Pe = l.note) != null && Pe.conditionColumn), h = !!((Z = l.note) != null && Z.storedCalc);
        switch (r) {
          case "db":
            return s === "db_direct" || s === "db_formatted";
          case "calculated":
            return s === "calculated";
          case "storedCalc":
            return h;
          case "static":
            return s === "static";
          case "conditional":
            return g;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return s === "other" || !s && !l.elementType && !!((xe = l.note) != null && xe.text);
          default:
            return !0;
        }
      }).length;
    });
    function qe() {
      const r = a.exportConfigs();
      navigator.clipboard.writeText(r), V.value = !1;
    }
    function ve() {
      const r = a.exportConfigs(), l = new Blob([r], { type: "application/json" }), s = URL.createObjectURL(l), g = document.createElement("a");
      g.href = s, g.download = "dev-mode-configs.json", g.click(), URL.revokeObjectURL(s), V.value = !1;
    }
    function Se() {
      a.downloadAnnotations();
    }
    async function Ve() {
      try {
        await io(
          a.currentScreenSpec,
          a.elementConfigs,
          { systemName: "System" }
        );
      } catch (r) {
        console.error("Failed to export xlsx:", r), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function A() {
      try {
        a.importConfigs(J.value), J.value = "", ee.value = "", G.value = !1;
      } catch {
        ee.value = "JSONの形式が正しくありません";
      }
    }
    function _(r) {
      var h;
      const s = (h = r.target.files) == null ? void 0 : h[0];
      if (!s) return;
      const g = new FileReader();
      g.onload = (W) => {
        var se;
        J.value = (se = W.target) == null ? void 0 : se.result;
      }, g.readAsText(s);
    }
    function c() {
      confirm("すべての要素設定を削除しますか？") && a.clearAllConfigs();
    }
    y("/dev-inspector-analysis.json"), y(!1), y(""), y(0), y(!1);
    const P = [
      { value: "all", label: "すべて" },
      { value: "db", label: "DB" },
      { value: "calculated", label: "計算値" },
      { value: "storedCalc", label: "保存計算値" },
      { value: "static", label: "固定" },
      { value: "conditional", label: "条件付き" },
      { value: "action", label: "アクション" },
      { value: "form", label: "フォーム" },
      { value: "other", label: "その他" }
    ];
    j(() => a.getCurrentPageApis());
    const Q = j(() => a.brokenAnnotations.length);
    Ct(() => a.isPanelOpen, (r) => {
      r && a.detectBrokenAnnotations();
    });
    function le() {
      confirm(`${Q.value}件の壊れたメモを削除しますか？`) && a.deleteBrokenAnnotations();
    }
    const B = y(!1), N = y(null), $ = y({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), k = j(() => Object.keys(a.masterDefinitions).length), T = j(() => {
      const r = Object.values(a.masterDefinitions), l = {};
      for (const s of r)
        l[s.table] || (l[s.table] = []), l[s.table].push(s);
      return l;
    });
    function de(r) {
      if (r) {
        const l = a.getMasterDefinition(r);
        l && (N.value = r, $.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((s) => ({ ...s }))],
          transitions: l.transitions ? l.transitions.map((s) => ({ ...s })) : []
        });
      } else
        N.value = null, $.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      B.value = !0;
    }
    function K() {
      const r = $.value;
      if (!r.table || !r.column) return;
      const l = `${r.table}.${r.column}`, s = r.transitions.filter((h) => h.from || h.to || h.trigger), g = {
        id: l,
        table: r.table,
        column: r.column,
        name: r.name || r.column,
        columnType: r.columnType || void 0,
        description: r.description || void 0,
        entries: r.entries.filter((h) => h.value || h.label),
        transitions: s.length > 0 ? s : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setMasterDefinition(g), B.value = !1;
    }
    function De() {
      $.value.entries.push({ value: "", label: "" });
    }
    function ae(r) {
      $.value.entries.splice(r, 1);
    }
    function Ae() {
      $.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Fe(r) {
      $.value.transitions.splice(r, 1);
    }
    function Ge(r) {
      confirm(`マスタ定義「${r}」を削除しますか？`) && a.deleteMasterDefinition(r);
    }
    const Ie = y(!1), Te = y(null), L = y({
      name: "",
      schedule: "",
      trigger: "",
      description: "",
      inputTables: [],
      outputTables: [],
      steps: [],
      timeout: "",
      retryPolicy: "",
      notifyOnError: "",
      notifyOnComplete: ""
    }), Me = y(""), ue = y(""), oe = j(() => Object.keys(a.batchDefinitions).length), Ce = j(() => Object.values(a.batchDefinitions));
    function Oe(r) {
      if (r) {
        const l = a.getBatchDefinition(r);
        l && (Te.value = r, L.value = {
          name: l.name,
          schedule: l.schedule || "",
          trigger: l.trigger || "",
          description: l.description || "",
          inputTables: l.inputTables ? [...l.inputTables] : [],
          outputTables: l.outputTables ? [...l.outputTables] : [],
          steps: l.steps.map((s) => ({ ...s })),
          timeout: l.timeout || "",
          retryPolicy: l.retryPolicy || "",
          notifyOnError: l.notifyOnError || "",
          notifyOnComplete: l.notifyOnComplete || ""
        });
      } else
        Te.value = null, L.value = {
          name: "",
          schedule: "",
          trigger: "",
          description: "",
          inputTables: [],
          outputTables: [],
          steps: [{ order: 1, description: "" }],
          timeout: "",
          retryPolicy: "",
          notifyOnError: "",
          notifyOnComplete: ""
        };
      Me.value = "", ue.value = "", Ie.value = !0;
    }
    function O() {
      const r = L.value;
      if (!r.name) return;
      const s = {
        id: Te.value || `batch_${r.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: r.name,
        schedule: r.schedule || void 0,
        trigger: r.trigger || void 0,
        description: r.description || void 0,
        inputTables: r.inputTables.length > 0 ? r.inputTables : void 0,
        outputTables: r.outputTables.length > 0 ? r.outputTables : void 0,
        steps: r.steps.filter((g) => g.description).map((g, h) => ({ ...g, order: h + 1 })),
        timeout: r.timeout || void 0,
        retryPolicy: r.retryPolicy || void 0,
        notifyOnError: r.notifyOnError || void 0,
        notifyOnComplete: r.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setBatchDefinition(s), Ie.value = !1;
    }
    function te() {
      const r = L.value.steps.length + 1;
      L.value.steps.push({ order: r, description: "" });
    }
    function Y(r) {
      L.value.steps.splice(r, 1);
    }
    function pe(r) {
      var l;
      confirm(`バッチ定義「${((l = a.getBatchDefinition(r)) == null ? void 0 : l.name) || r}」を削除しますか？`) && a.deleteBatchDefinition(r);
    }
    function Re() {
      const r = Me.value.trim();
      r && !L.value.inputTables.includes(r) && L.value.inputTables.push(r), Me.value = "";
    }
    function Xe(r) {
      L.value.inputTables.splice(r, 1);
    }
    function We() {
      const r = ue.value.trim();
      r && !L.value.outputTables.includes(r) && L.value.outputTables.push(r), ue.value = "";
    }
    function Ee(r) {
      L.value.outputTables.splice(r, 1);
    }
    const ge = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], rt = j(() => {
      var r;
      return ((r = ge.find((l) => l.value === a.crossSearchMode)) == null ? void 0 : r.placeholder) || "検索...";
    }), Ze = j(() => {
      const r = {};
      for (const l of a.crossSearchResults)
        r[l.pagePath] || (r[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), r[l.pagePath].items.push(l);
      return Object.values(r);
    }), et = j(() => Ze.value.length), Ne = j(() => {
      const r = a.unannotatedElements;
      return {
        binding: r.filter((l) => l.category === "binding").length,
        form: r.filter((l) => l.category === "form").length,
        action: r.filter((l) => l.category === "action").length
      };
    });
    function tt() {
      a.showUnannotatedDetection ? (a.showUnannotatedDetection = !1, a.unannotatedElements = [], a.hoveredUnannotatedSelector = null) : (a.showUnannotatedDetection = !0, a.detectUnannotatedElements());
    }
    function lt(r) {
      a.unannotatedElements = a.unannotatedElements.filter((l) => l.selector !== r);
    }
    function Be(r) {
      a.hoveredUnannotatedSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const s = l.getBoundingClientRect();
        (s.bottom < 0 || s.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function ot() {
      a.hoveredUnannotatedSelector = null;
    }
    function Le(r) {
      a.hoveredSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const s = l.getBoundingClientRect();
        (s.bottom < 0 || s.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function ze() {
      a.hoveredSelector = null;
    }
    const ct = j(() => typeof window < "u" ? window.location.pathname : "/"), st = j(() => {
      const r = a.screenFlowData, l = {};
      for (const s of r.edges) {
        if (!l[s.from]) {
          const g = r.nodes.find((h) => h.path === s.from) || { path: s.from, name: s.from, annotationCount: 0 };
          l[s.from] = { node: g, edges: [] };
        }
        l[s.from].edges.push(s);
      }
      return Object.values(l);
    });
    function Je(r) {
      r && a.startEditing(r);
    }
    return (r, l) => (n(), i(I, null, [
      (n(), Ke(at, { to: "body" }, [
        u(a).isEnabled && !u(a).isPanelOpen ? (n(), i("button", {
          key: 0,
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => u(a).openPanel && u(a).openPanel(...s)),
          class: "di-fab",
          title: "画面仕様を表示",
          "data-dev-inspector": ""
        }, [
          C(u(Vt), { style: { width: "20px", height: "20px" } })
        ])) : v("", !0)
      ])),
      (n(), Ke(at, { to: "body" }, [
        u(a).isEnabled && u(a).isPanelOpen ? (n(), i("div", ao, [
          e("div", uo, [
            e("div", ro, [
              C(u(Zt), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
              l[53] || (l[53] = e("span", null, "Developer Mode", -1))
            ]),
            e("button", {
              onClick: l[1] || (l[1] = //@ts-ignore
              (...s) => u(a).closePanel && u(a).closePanel(...s)),
              class: "di-close-btn"
            }, [
              C(u(Qe), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", co, [
            e("button", {
              onClick: l[2] || (l[2] = (s) => U.value = "elements"),
              class: z(["di-tab-btn", { active: U.value === "elements" }])
            }, [
              C(u(Wt), { style: { width: "14px", height: "14px" } }),
              l[54] || (l[54] = e("span", null, "要素設定", -1)),
              ne.value > 0 ? (n(), i("span", vo, m(ne.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[3] || (l[3] = (s) => U.value = "masters"),
              class: z(["di-tab-btn", { active: U.value === "masters" }])
            }, [
              C(u(pt), { style: { width: "14px", height: "14px" } }),
              l[55] || (l[55] = e("span", null, "マスタ", -1)),
              k.value > 0 ? (n(), i("span", po, m(k.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[4] || (l[4] = (s) => U.value = "batches"),
              class: z(["di-tab-btn", { active: U.value === "batches" }])
            }, [
              C(u(Xt), { style: { width: "14px", height: "14px" } }),
              l[56] || (l[56] = e("span", null, "バッチ", -1)),
              oe.value > 0 ? (n(), i("span", mo, m(oe.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[5] || (l[5] = (s) => U.value = "export"),
              class: z(["di-tab-btn", { active: U.value === "export" }])
            }, [
              C(u(Bt), { style: { width: "14px", height: "14px" } }),
              l[57] || (l[57] = e("span", null, "出力", -1))
            ], 2)
          ]),
          f(e("div", fo, [
            e("button", {
              onClick: l[6] || (l[6] = //@ts-ignore
              (...s) => u(a).togglePickMode && u(a).togglePickMode(...s)),
              class: z(["di-pick-btn", { active: u(a).isPickMode }])
            }, [
              C(u(Qt), { style: { width: "16px", height: "16px" } }),
              e("span", null, m(u(a).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
            ], 2),
            Ue.value > 0 ? (n(), i("button", {
              key: 0,
              onClick: l[7] || (l[7] = //@ts-ignore
              (...s) => u(a).toggleNoteHighlights && u(a).toggleNoteHighlights(...s)),
              class: z(["di-note-toggle-btn", { active: u(a).showNoteHighlights }])
            }, [
              u(a).showNoteHighlights ? (n(), Ke(u(Kl), {
                key: 0,
                style: { width: "14px", height: "14px" }
              })) : (n(), Ke(u(zl), {
                key: 1,
                style: { width: "14px", height: "14px" }
              })),
              l[58] || (l[58] = e("span", null, "メモハイライト", -1)),
              e("span", bo, m(u(a).noteHighlightFilter === "all" ? Ue.value : `${$e.value}/${Ue.value}`), 1)
            ], 2)) : v("", !0),
            Ue.value > 0 && u(a).showNoteHighlights ? (n(), i("div", yo, [
              e("div", ho, [
                (n(), i(I, null, D(P, (s) => e("button", {
                  key: s.value,
                  onClick: (g) => u(a).noteHighlightFilter = s.value,
                  class: z(["di-filter-btn", { active: u(a).noteHighlightFilter === s.value }])
                }, m(s.label), 11, go)), 64))
              ])
            ])) : v("", !0),
            be.value.length > 0 ? (n(), i("div", ko, [
              e("div", xo, [
                C(u(Wt), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                l[59] || (l[59] = e("span", null, "登録済み要素", -1)),
                e("span", wo, [
                  E(m(ye.value.length), 1),
                  ye.value.length !== be.value.length ? (n(), i("span", $o, " / " + m(be.value.length), 1)) : v("", !0)
                ])
              ]),
              ie.value.length > 0 ? (n(), i("div", Co, [
                (n(!0), i(I, null, D(ie.value, (s) => (n(), i("div", {
                  key: s.id,
                  class: z(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === s.id }]),
                  onClick: (g) => u(a).startEditing(s.id),
                  onMouseenter: (g) => Le(s.id),
                  onMouseleave: ze
                }, [
                  e("span", {
                    class: z(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                  }, m(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : "-"), 3),
                  e("div", Io, [
                    e("div", To, m(s.desc), 1)
                  ])
                ], 42, _o))), 128))
              ])) : v("", !0),
              M.value.length > 0 ? (n(), i("div", Uo, [
                e("button", {
                  class: "di-modal-group-header",
                  onClick: l[8] || (l[8] = (s) => he.value = !he.value)
                }, [
                  e("span", So, m(he.value ? "▼" : "▶"), 1),
                  l[60] || (l[60] = e("span", { class: "di-element-conditional-badge" }, "M", -1)),
                  l[61] || (l[61] = e("span", null, "モーダル要素", -1)),
                  e("span", Vo, m(M.value.length), 1)
                ]),
                he.value ? (n(), i("div", Mo, [
                  (n(!0), i(I, null, D(M.value, (s) => (n(), i("div", {
                    key: s.id,
                    class: z(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === s.id }]),
                    onClick: (g) => u(a).startEditing(s.id),
                    onMouseenter: (g) => Le(s.id),
                    onMouseleave: ze
                  }, [
                    e("span", {
                      class: z(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                    }, m(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : "-"), 3),
                    e("div", Do, [
                      e("div", Po, m(s.desc), 1)
                    ])
                  ], 42, Eo))), 128))
                ])) : v("", !0)
              ])) : v("", !0)
            ])) : v("", !0),
            e("button", {
              onClick: tt,
              class: z(["di-unannotated-btn", { active: u(a).showUnannotatedDetection }])
            }, [
              C(u(ql), { style: { width: "14px", height: "14px" } }),
              e("span", null, m(u(a).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
              u(a).unannotatedElements.length > 0 ? (n(), i("span", Bo, m(u(a).unannotatedElements.length), 1)) : v("", !0)
            ], 2),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length > 0 ? (n(), i("div", Lo, [
              e("div", Ao, [
                E(m(u(a).unannotatedElements.length) + "件検出: ", 1),
                Ne.value.binding > 0 ? (n(), i("span", Fo, "バインディング " + m(Ne.value.binding), 1)) : v("", !0),
                Ne.value.form > 0 ? (n(), i("span", Oo, " / フォーム " + m(Ne.value.form), 1)) : v("", !0),
                Ne.value.action > 0 ? (n(), i("span", No, " / アクション " + m(Ne.value.action), 1)) : v("", !0)
              ]),
              e("div", jo, [
                (n(!0), i(I, null, D(u(a).unannotatedElements, (s) => (n(), i("div", {
                  key: s.selector,
                  class: z(["di-unannotated-item", { "di-unannotated-item-active": u(a).hoveredUnannotatedSelector === s.selector, ["di-unannotated-item-" + s.category]: u(a).hoveredUnannotatedSelector === s.selector }]),
                  onMouseenter: (g) => Be(s.selector),
                  onMouseleave: ot
                }, [
                  e("span", {
                    class: z(["di-unannotated-category", "di-unannotated-cat-" + s.category])
                  }, m(s.category === "binding" ? "DB" : s.category === "form" ? "Form" : "Act"), 3),
                  e("span", qo, m(s.text || s.tagName), 1),
                  e("button", {
                    onClick: (g) => u(a).quickAnnotate(s.selector, s.suggestedType),
                    class: "di-unannotated-register"
                  }, " 登録 ", 8, Ro),
                  e("button", {
                    onClick: (g) => lt(s.selector),
                    class: "di-unannotated-dismiss"
                  }, [
                    C(u(Qe), { style: { width: "10px", height: "10px" } })
                  ], 8, zo)
                ], 42, Ho))), 128))
              ])
            ])) : v("", !0),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length === 0 ? (n(), i("div", Ko, " 未登録の要素はありません ")) : v("", !0),
            Q.value > 0 ? (n(), i("div", Yo, [
              e("div", Go, [
                C(u(Ol), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                e("span", null, m(Q.value) + "件のメモが見つかりません", 1)
              ]),
              l[64] || (l[64] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
              e("div", Xo, [
                (n(!0), i(I, null, D(u(a).brokenAnnotations, (s) => {
                  var g, h;
                  return n(), i("div", {
                    key: s,
                    class: "di-broken-item"
                  }, [
                    e("div", Zo, [
                      e("div", Jo, m(((h = (g = u(a).elementConfigs[s]) == null ? void 0 : g.note) == null ? void 0 : h.text) || "(メモなし)"), 1),
                      e("div", Qo, m(s), 1)
                    ]),
                    e("div", Wo, [
                      e("button", {
                        onClick: (W) => u(a).startRemap(s),
                        class: "di-broken-remap-btn",
                        title: "新しい要素に再設定"
                      }, [
                        C(u(Qt), { style: { width: "12px", height: "12px" } }),
                        l[62] || (l[62] = E(" 再設定 ", -1))
                      ], 8, es),
                      e("button", {
                        onClick: (W) => {
                          u(a).deleteElementConfig(s), u(a).detectBrokenAnnotations();
                        },
                        class: "di-broken-item-delete",
                        title: "削除"
                      }, [
                        C(u($t), { style: { width: "12px", height: "12px" } })
                      ], 8, ts)
                    ])
                  ]);
                }), 128))
              ]),
              e("div", ls, [
                e("button", {
                  onClick: le,
                  class: "di-broken-delete-btn"
                }, [
                  C(u($t), { style: { width: "12px", height: "12px" } }),
                  l[63] || (l[63] = E(" まとめて削除 ", -1))
                ])
              ])
            ])) : v("", !0),
            v("", !0)
          ], 512), [
            [kt, U.value === "elements"]
          ]),
          e("div", os, [
            f(e("div", null, [
              X.value ? (n(), i(I, { key: 0 }, [
                e("div", ss, [
                  e("div", ns, [
                    e("h2", is, m(X.value.name), 1),
                    e("button", {
                      onClick: l[11] || (l[11] = (s) => u(a).editingScreen = !0),
                      class: "di-screen-edit-btn",
                      title: "画面情報を編集"
                    }, [
                      C(u(el), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  X.value.description ? (n(), i("p", as, m(X.value.description), 1)) : v("", !0),
                  X.value.auth ? (n(), i("div", ds, [
                    X.value.auth.required ? (n(), i("span", us, [
                      C(u(Zl), { style: { width: "11px", height: "11px" } }),
                      l[74] || (l[74] = E(" ログイン必須 ", -1))
                    ])) : v("", !0),
                    (n(!0), i(I, null, D(X.value.auth.roles || [], (s) => (n(), i("span", {
                      key: s,
                      class: "di-auth-badge di-auth-role"
                    }, [
                      C(u(lo), { style: { width: "11px", height: "11px" } }),
                      E(" " + m(s), 1)
                    ]))), 128)),
                    X.value.auth.description ? (n(), i("span", rs, m(X.value.auth.description), 1)) : v("", !0)
                  ])) : v("", !0)
                ]),
                X.value.componentPath ? (n(), i("div", cs, [
                  e("div", vs, [
                    C(u(Zt), { style: { width: "16px", height: "16px" } }),
                    l[75] || (l[75] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", ps, m(X.value.componentPath), 1)
                ])) : v("", !0),
                X.value.figmaUrl ? (n(), i("div", ms, [
                  e("div", fs, [
                    C(u(Rl), { style: { width: "16px", height: "16px" } }),
                    l[76] || (l[76] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: X.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, m(X.value.figmaUrl), 9, bs)
                ])) : v("", !0),
                X.value.apis.length ? (n(), i("div", ys, [
                  e("div", hs, [
                    C(u(to), { style: { width: "16px", height: "16px" } }),
                    l[77] || (l[77] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", gs, [
                    (n(!0), i(I, null, D(X.value.apis, (s, g) => (n(), i("div", {
                      key: g,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: He({ backgroundColor: re[s.method] + "20", color: re[s.method] })
                      }, m(s.method), 5),
                      e("div", ks, [
                        e("code", xs, m(s.endpoint), 1),
                        s.description ? (n(), i("p", ws, m(s.description), 1)) : v("", !0)
                      ]),
                      s.loadTiming ? (n(), i("span", $s, m(s.loadTiming === "onMount" ? "読込時" : s.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : v("", !0)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                X.value.notes ? (n(), i("div", Cs, [
                  e("div", _s, [
                    C(u(Fl), { style: { width: "16px", height: "16px" } }),
                    l[78] || (l[78] = e("span", null, "Notes", -1))
                  ]),
                  e("p", Is, m(X.value.notes), 1)
                ])) : v("", !0)
              ], 64)) : (n(), i("div", Ts, [
                C(u(Vt), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[80] || (l[80] = e("p", null, [
                  E("この画面の仕様情報は"),
                  e("br"),
                  E("まだ登録されていません")
                ], -1)),
                e("button", {
                  onClick: l[12] || (l[12] = (s) => u(a).editingScreen = !0),
                  class: "di-screen-register-btn"
                }, [
                  C(u(el), { style: { width: "14px", height: "14px" } }),
                  l[79] || (l[79] = E(" 画面情報を登録 ", -1))
                ])
              ])),
              e("div", Us, [
                e("div", Ss, [
                  C(u(eo), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  l[81] || (l[81] = e("span", null, "横断検索", -1))
                ]),
                l[82] || (l[82] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                e("div", Vs, [
                  e("div", Ms, [
                    (n(), i(I, null, D(ge, (s) => e("button", {
                      key: s.value,
                      onClick: (g) => u(a).crossSearchMode = s.value,
                      class: z(["di-filter-btn", { active: u(a).crossSearchMode === s.value }])
                    }, m(s.label), 11, Es)), 64))
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": l[13] || (l[13] = (s) => u(a).crossSearchQuery = s),
                    type: "text",
                    class: "di-cross-search-input",
                    placeholder: rt.value
                  }, null, 8, Ds), [
                    [w, u(a).crossSearchQuery]
                  ]),
                  u(a).crossSearchQuery.trim() ? (n(), i("div", Ps, m(u(a).crossSearchResults.length) + "件 (" + m(et.value) + "画面) ", 1)) : v("", !0),
                  Ze.value.length > 0 ? (n(), i("div", Bs, [
                    (n(!0), i(I, null, D(Ze.value, (s) => (n(), i("div", {
                      key: s.pagePath,
                      class: "di-cross-search-group"
                    }, [
                      e("div", Ls, [
                        E(m(s.pagePath) + " ", 1),
                        s.pageName !== s.pagePath ? (n(), i("span", As, "(" + m(s.pageName) + ")", 1)) : v("", !0)
                      ]),
                      (n(!0), i(I, null, D(s.items, (g, h) => (n(), i("div", {
                        key: h,
                        class: z(["di-cross-search-item", g.elementType ? "di-cross-item-" + g.elementType : ""]),
                        onClick: (W) => g.selector && u(a).startEditing(g.selector)
                      }, [
                        e("span", Os, m(g.matchedField), 1),
                        g.matchContext ? (n(), i("span", Ns, m(g.matchContext), 1)) : v("", !0)
                      ], 10, Fs))), 128))
                    ]))), 128))
                  ])) : v("", !0)
                ])
              ]),
              e("div", js, [
                e("button", {
                  onClick: l[14] || (l[14] = (s) => u(a).showScreenFlow = !u(a).showScreenFlow),
                  class: z(["di-screen-flow-toggle", { active: u(a).showScreenFlow }])
                }, [
                  C(u(Xl), { style: { width: "14px", height: "14px" } }),
                  l[83] || (l[83] = e("span", null, "画面フロー", -1)),
                  u(a).screenFlowData.edges.length > 0 ? (n(), i("span", Hs, m(u(a).screenFlowData.nodes.length) + "画面 / " + m(u(a).screenFlowData.edges.length) + "遷移 ", 1)) : v("", !0)
                ], 2),
                u(a).showScreenFlow ? (n(), i("div", qs, [
                  u(a).screenFlowData.edges.length === 0 ? (n(), i("div", Rs, " navigate型のアクションが登録されていません ")) : v("", !0),
                  (n(!0), i(I, null, D(st.value, (s) => (n(), i("div", {
                    key: s.node.path,
                    class: "di-flow-group"
                  }, [
                    e("div", {
                      class: z(["di-flow-node", { "di-flow-node-current": s.node.path === ct.value }])
                    }, [
                      e("span", zs, m(s.node.path), 1),
                      s.node.name !== s.node.path ? (n(), i("span", Ks, "(" + m(s.node.name) + ")", 1)) : v("", !0)
                    ], 2),
                    (n(!0), i(I, null, D(s.edges, (g) => (n(), i("div", {
                      key: g.from + g.to,
                      class: "di-flow-edge",
                      onClick: (h) => Je(g.selector)
                    }, [
                      l[84] || (l[84] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                      e("span", Gs, m(g.to), 1),
                      g.label ? (n(), i("span", Xs, "[" + m(g.label) + "]", 1)) : v("", !0)
                    ], 8, Ys))), 128))
                  ]))), 128)),
                  u(a).screenFlowData.orphanPages.length > 0 ? (n(), i("div", Zs, [
                    l[85] || (l[85] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                    (n(!0), i(I, null, D(u(a).screenFlowData.orphanPages, (s) => (n(), i("span", {
                      key: s.path,
                      class: "di-flow-orphan-item"
                    }, m(s.path), 1))), 128))
                  ])) : v("", !0)
                ])) : v("", !0)
              ])
            ], 512), [
              [kt, U.value === "elements"]
            ]),
            f(e("div", null, [
              e("div", Js, [
                e("div", Qs, [
                  C(u(pt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                  l[86] || (l[86] = e("span", null, "マスタ定義", -1)),
                  k.value > 0 ? (n(), i("span", Ws, m(k.value), 1)) : v("", !0),
                  e("button", {
                    onClick: l[15] || (l[15] = (s) => de()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    C(u(xt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                k.value > 0 ? (n(!0), i(I, { key: 0 }, D(T.value, (s, g) => (n(), i("div", {
                  key: g,
                  class: "di-master-table-group"
                }, [
                  e("div", en, m(g), 1),
                  (n(!0), i(I, null, D(s, (h) => (n(), i("div", {
                    key: h.id,
                    class: "di-master-item",
                    onClick: (W) => de(h.id)
                  }, [
                    e("div", ln, [
                      e("span", on, "." + m(h.column), 1),
                      h.columnType ? (n(), i("span", sn, m(h.columnType), 1)) : v("", !0),
                      e("span", nn, m(h.name), 1)
                    ]),
                    e("div", an, [
                      (n(!0), i(I, null, D(h.entries.slice(0, 5), (W, se) => (n(), i("span", {
                        key: se,
                        class: "di-master-entry-chip",
                        style: He(W.color ? { borderColor: W.color, color: W.color } : {})
                      }, m(W.value) + "=" + m(W.label), 5))), 128)),
                      h.entries.length > 5 ? (n(), i("span", dn, "+" + m(h.entries.length - 5), 1)) : v("", !0)
                    ])
                  ], 8, tn))), 128))
                ]))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-master-empty",
                  onClick: l[16] || (l[16] = (s) => de())
                }, [...l[87] || (l[87] = [
                  e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                ])]))
              ]),
              (n(), Ke(at, { to: "body" }, [
                B.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[25] || (l[25] = fe((s) => B.value = !1, ["self"]))
                }, [
                  e("div", un, [
                    e("div", rn, [
                      e("h3", null, m(N.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                      e("button", {
                        onClick: l[17] || (l[17] = (s) => B.value = !1),
                        class: "di-close-btn"
                      }, [
                        C(u(Qe), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", cn, [
                      e("div", vn, [
                        e("div", pn, [
                          l[88] || (l[88] = e("label", null, "テーブル", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[18] || (l[18] = (s) => $.value.table = s),
                            placeholder: "orders",
                            disabled: !!N.value
                          }, null, 8, mn), [
                            [w, $.value.table]
                          ])
                        ]),
                        e("div", fn, [
                          l[89] || (l[89] = e("label", null, "カラム", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[19] || (l[19] = (s) => $.value.column = s),
                            placeholder: "status",
                            disabled: !!N.value
                          }, null, 8, bn), [
                            [w, $.value.column]
                          ])
                        ])
                      ]),
                      e("div", yn, [
                        e("div", hn, [
                          l[90] || (l[90] = e("label", null, "表示名", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[20] || (l[20] = (s) => $.value.name = s),
                            placeholder: "ステータス"
                          }, null, 512), [
                            [w, $.value.name]
                          ])
                        ]),
                        e("div", gn, [
                          l[91] || (l[91] = e("label", null, "型", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[21] || (l[21] = (s) => $.value.columnType = s),
                            placeholder: "integer"
                          }, null, 512), [
                            [w, $.value.columnType]
                          ])
                        ])
                      ]),
                      e("div", kn, [
                        l[92] || (l[92] = e("label", null, "説明", -1)),
                        f(e("input", {
                          "onUpdate:modelValue": l[22] || (l[22] = (s) => $.value.description = s),
                          placeholder: "注文のステータスを管理"
                        }, null, 512), [
                          [w, $.value.description]
                        ])
                      ]),
                      e("div", xn, [
                        l[93] || (l[93] = e("label", null, "マスタ値", -1)),
                        e("button", {
                          onClick: De,
                          class: "di-btn-icon",
                          title: "追加"
                        }, [
                          C(u(xt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      e("div", wn, [
                        (n(!0), i(I, null, D($.value.entries, (s, g) => (n(), i("div", {
                          key: g,
                          class: "di-master-entry-row"
                        }, [
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.value = h,
                            placeholder: "値",
                            class: "di-master-entry-value"
                          }, null, 8, $n), [
                            [w, s.value]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.label = h,
                            placeholder: "ラベル",
                            class: "di-master-entry-label"
                          }, null, 8, Cn), [
                            [w, s.label]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.color = h,
                            placeholder: "#色",
                            class: "di-master-entry-color"
                          }, null, 8, _n), [
                            [w, s.color]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.description = h,
                            placeholder: "説明",
                            class: "di-master-entry-desc"
                          }, null, 8, In), [
                            [w, s.description]
                          ]),
                          e("button", {
                            onClick: (h) => ae(g),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            C(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, Tn)
                        ]))), 128))
                      ]),
                      e("div", Un, [
                        l[94] || (l[94] = e("label", null, "状態遷移", -1)),
                        e("button", {
                          onClick: Ae,
                          class: "di-btn-icon",
                          title: "遷移を追加"
                        }, [
                          C(u(xt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      $.value.transitions.length > 0 ? (n(), i("div", Sn, [
                        l[98] || (l[98] = e("div", { class: "di-transition-header" }, [
                          e("span", { class: "di-transition-col-from" }, "遷移元"),
                          e("span", { class: "di-transition-col-arrow" }, "→"),
                          e("span", { class: "di-transition-col-to" }, "遷移先"),
                          e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                          e("span", { class: "di-transition-col-condition" }, "条件"),
                          e("span", { class: "di-transition-col-act" })
                        ], -1)),
                        (n(!0), i(I, null, D($.value.transitions, (s, g) => (n(), i("div", {
                          key: g,
                          class: "di-transition-row"
                        }, [
                          f(e("select", {
                            "onUpdate:modelValue": (h) => s.from = h,
                            class: "di-transition-select di-transition-col-from"
                          }, [
                            l[95] || (l[95] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(I, null, D($.value.entries.filter((h) => h.value), (h) => (n(), i("option", {
                              key: h.value,
                              value: h.value
                            }, m(h.label || h.value), 9, Mn))), 128))
                          ], 8, Vn), [
                            [we, s.from]
                          ]),
                          l[97] || (l[97] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                          f(e("select", {
                            "onUpdate:modelValue": (h) => s.to = h,
                            class: "di-transition-select di-transition-col-to"
                          }, [
                            l[96] || (l[96] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(I, null, D($.value.entries.filter((h) => h.value), (h) => (n(), i("option", {
                              key: h.value,
                              value: h.value
                            }, m(h.label || h.value), 9, Dn))), 128))
                          ], 8, En), [
                            [we, s.to]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.trigger = h,
                            placeholder: "トリガー",
                            class: "di-transition-input di-transition-col-trigger"
                          }, null, 8, Pn), [
                            [w, s.trigger]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.condition = h,
                            placeholder: "条件",
                            class: "di-transition-input di-transition-col-condition"
                          }, null, 8, Bn), [
                            [w, s.condition]
                          ]),
                          e("button", {
                            onClick: (h) => Fe(g),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            C(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, Ln)
                        ]))), 128))
                      ])) : (n(), i("div", An, " 状態遷移を定義（任意） "))
                    ]),
                    e("div", Fn, [
                      N.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[23] || (l[23] = (s) => {
                          Ge(N.value), B.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : v("", !0),
                      l[99] || (l[99] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[24] || (l[24] = (s) => B.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: K,
                        class: "di-btn-small di-btn-primary",
                        disabled: !$.value.table || !$.value.column
                      }, "保存", 8, On)
                    ])
                  ])
                ])) : v("", !0)
              ]))
            ], 512), [
              [kt, U.value === "masters"]
            ]),
            f(e("div", null, [
              e("div", Nn, [
                e("div", jn, [
                  C(u(Xt), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                  l[100] || (l[100] = e("span", null, "バッチ処理", -1)),
                  oe.value > 0 ? (n(), i("span", Hn, m(oe.value), 1)) : v("", !0),
                  e("button", {
                    onClick: l[26] || (l[26] = (s) => Oe()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    C(u(xt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                oe.value > 0 ? (n(!0), i(I, { key: 0 }, D(Ce.value, (s) => (n(), i("div", {
                  key: s.id,
                  class: "di-batch-item",
                  onClick: (g) => Oe(s.id)
                }, [
                  e("div", Rn, [
                    e("div", zn, m(s.name), 1),
                    s.schedule ? (n(), i("div", Kn, m(s.schedule), 1)) : v("", !0)
                  ])
                ], 8, qn))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-batch-empty",
                  onClick: l[27] || (l[27] = (s) => Oe())
                }, [...l[101] || (l[101] = [
                  e("span", null, "バッチ処理を定義", -1)
                ])]))
              ]),
              (n(), Ke(at, { to: "body" }, [
                Ie.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[43] || (l[43] = fe((s) => Ie.value = !1, ["self"]))
                }, [
                  e("div", Yn, [
                    e("div", Gn, [
                      e("h3", null, m(Te.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                      e("button", {
                        onClick: l[28] || (l[28] = (s) => Ie.value = !1),
                        class: "di-close-btn"
                      }, [
                        C(u(Qe), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", Xn, [
                      e("div", Zn, [
                        e("div", Jn, [
                          l[102] || (l[102] = e("label", null, "バッチ名 *", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[29] || (l[29] = (s) => L.value.name = s),
                            placeholder: "月次レポート生成"
                          }, null, 512), [
                            [w, L.value.name]
                          ])
                        ]),
                        e("div", Qn, [
                          l[103] || (l[103] = e("label", null, "スケジュール", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[30] || (l[30] = (s) => L.value.schedule = s),
                            placeholder: "毎月1日 AM2:00"
                          }, null, 512), [
                            [w, L.value.schedule]
                          ])
                        ])
                      ]),
                      e("div", Wn, [
                        e("div", ei, [
                          l[104] || (l[104] = e("label", null, "手動トリガー", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[31] || (l[31] = (s) => L.value.trigger = s),
                            placeholder: "管理画面から実行"
                          }, null, 512), [
                            [w, L.value.trigger]
                          ])
                        ])
                      ]),
                      e("div", ti, [
                        l[105] || (l[105] = e("label", null, "説明", -1)),
                        f(e("textarea", {
                          "onUpdate:modelValue": l[32] || (l[32] = (s) => L.value.description = s),
                          rows: "2",
                          placeholder: "バッチ処理の概要..."
                        }, null, 512), [
                          [w, L.value.description]
                        ])
                      ]),
                      l[115] || (l[115] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                      e("div", li, [
                        e("div", oi, [
                          l[106] || (l[106] = e("label", null, "入力テーブル", -1)),
                          e("div", si, [
                            (n(!0), i(I, null, D(L.value.inputTables, (s, g) => (n(), i("span", {
                              key: g,
                              class: "di-batch-tag"
                            }, [
                              E(m(s) + " ", 1),
                              e("button", {
                                onClick: (h) => Xe(g),
                                class: "di-batch-tag-remove"
                              }, "×", 8, ni)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[33] || (l[33] = (s) => Me.value = s),
                              onKeydown: l[34] || (l[34] = wt(fe((s) => Re(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [w, Me.value]
                            ])
                          ])
                        ]),
                        e("div", ii, [
                          l[107] || (l[107] = e("label", null, "出力テーブル", -1)),
                          e("div", ai, [
                            (n(!0), i(I, null, D(L.value.outputTables, (s, g) => (n(), i("span", {
                              key: g,
                              class: "di-batch-tag"
                            }, [
                              E(m(s) + " ", 1),
                              e("button", {
                                onClick: (h) => Ee(g),
                                class: "di-batch-tag-remove"
                              }, "×", 8, di)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[35] || (l[35] = (s) => ue.value = s),
                              onKeydown: l[36] || (l[36] = wt(fe((s) => We(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [w, ue.value]
                            ])
                          ])
                        ])
                      ]),
                      e("div", ui, [
                        l[108] || (l[108] = E(" 処理ステップ ", -1)),
                        e("button", {
                          onClick: te,
                          class: "di-btn-icon",
                          style: { "margin-left": "auto" },
                          title: "ステップ追加"
                        }, [
                          C(u(xt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      L.value.steps.length > 0 ? (n(), i("div", ri, [
                        l[110] || (l[110] = e("div", { class: "di-batch-steps-header" }, [
                          e("span", { class: "di-batch-step-no" }, "No"),
                          e("span", { class: "di-batch-step-desc" }, "処理内容"),
                          e("span", { class: "di-batch-step-target" }, "対象"),
                          e("span", { class: "di-batch-step-type" }, "種別"),
                          e("span", { class: "di-batch-step-error" }, "エラー処理"),
                          e("span", { class: "di-batch-step-act" })
                        ], -1)),
                        (n(!0), i(I, null, D(L.value.steps, (s, g) => (n(), i("div", {
                          key: g,
                          class: "di-batch-step-row"
                        }, [
                          e("span", ci, m(g + 1), 1),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.description = h,
                            placeholder: "処理内容",
                            class: "di-batch-step-input di-batch-step-desc"
                          }, null, 8, vi), [
                            [w, s.description]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.target = h,
                            placeholder: "対象テーブル",
                            class: "di-batch-step-input di-batch-step-target"
                          }, null, 8, pi), [
                            [w, s.target]
                          ]),
                          f(e("select", {
                            "onUpdate:modelValue": (h) => s.type = h,
                            class: "di-batch-step-select di-batch-step-type"
                          }, [...l[109] || (l[109] = [
                            e("option", { value: "" }, "-", -1),
                            e("option", { value: "query" }, "query", -1),
                            e("option", { value: "api" }, "api", -1),
                            e("option", { value: "file" }, "file", -1),
                            e("option", { value: "mail" }, "mail", -1),
                            e("option", { value: "other" }, "other", -1)
                          ])], 8, mi), [
                            [we, s.type]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (h) => s.errorHandling = h,
                            placeholder: "エラー時",
                            class: "di-batch-step-input di-batch-step-error"
                          }, null, 8, fi), [
                            [w, s.errorHandling]
                          ]),
                          e("button", {
                            onClick: (h) => Y(g),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            C(u(Qe), { style: { width: "12px", height: "12px" } })
                          ], 8, bi)
                        ]))), 128))
                      ])) : v("", !0),
                      l[116] || (l[116] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                      e("div", yi, [
                        e("div", hi, [
                          l[111] || (l[111] = e("label", null, "タイムアウト", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[37] || (l[37] = (s) => L.value.timeout = s),
                            placeholder: "30分"
                          }, null, 512), [
                            [w, L.value.timeout]
                          ])
                        ]),
                        e("div", gi, [
                          l[112] || (l[112] = e("label", null, "リトライ", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[38] || (l[38] = (s) => L.value.retryPolicy = s),
                            placeholder: "3回まで、5分間隔"
                          }, null, 512), [
                            [w, L.value.retryPolicy]
                          ])
                        ])
                      ]),
                      e("div", ki, [
                        e("div", xi, [
                          l[113] || (l[113] = e("label", null, "エラー通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[39] || (l[39] = (s) => L.value.notifyOnError = s),
                            placeholder: "admin@example.com"
                          }, null, 512), [
                            [w, L.value.notifyOnError]
                          ])
                        ]),
                        e("div", wi, [
                          l[114] || (l[114] = e("label", null, "完了通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[40] || (l[40] = (s) => L.value.notifyOnComplete = s),
                            placeholder: "manager@example.com"
                          }, null, 512), [
                            [w, L.value.notifyOnComplete]
                          ])
                        ])
                      ])
                    ]),
                    e("div", $i, [
                      Te.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[41] || (l[41] = (s) => {
                          pe(Te.value), Ie.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : v("", !0),
                      l[117] || (l[117] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[42] || (l[42] = (s) => Ie.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: O,
                        class: "di-btn-small di-btn-primary",
                        disabled: !L.value.name
                      }, "保存", 8, Ci)
                    ])
                  ])
                ])) : v("", !0)
              ]))
            ], 512), [
              [kt, U.value === "batches"]
            ]),
            f(e("div", null, [
              e("div", _i, [
                e("button", {
                  onClick: Se,
                  class: "di-btn-green"
                }, [
                  C(u(Gl), { style: { width: "16px", height: "16px" } }),
                  l[118] || (l[118] = E(" Git管理用に保存 ", -1))
                ]),
                e("button", {
                  onClick: Ve,
                  class: "di-btn-blue"
                }, [
                  C(u(sl), { style: { width: "16px", height: "16px" } }),
                  l[119] || (l[119] = E(" 画面仕様書 (xlsx) 出力 ", -1))
                ]),
                e("button", {
                  onClick: l[44] || (l[44] = (s) => u(a).downloadSddSpec()),
                  class: "di-btn-green-outline"
                }, [
                  C(u(Vt), { style: { width: "16px", height: "16px" } }),
                  l[120] || (l[120] = E(" SDD仕様書 (md) ", -1))
                ]),
                e("button", {
                  onClick: l[45] || (l[45] = (s) => u(a).downloadClientSpec()),
                  class: "di-btn-blue-outline"
                }, [
                  C(u(Vt), { style: { width: "16px", height: "16px" } }),
                  l[121] || (l[121] = E(" 納品用仕様書 (md) ", -1))
                ])
              ]),
              l[129] || (l[129] = e("p", { class: "di-export-hint" }, [
                E(" JSON: "),
                e("code", null, "dev-annotations.json"),
                E(" に配置してcommit ")
              ], -1)),
              e("div", Ii, [
                e("button", {
                  onClick: l[46] || (l[46] = (s) => V.value = !0),
                  class: "di-btn-small"
                }, [
                  C(u(Bt), { style: { width: "14px", height: "14px" } }),
                  l[122] || (l[122] = E(" エクスポート ", -1))
                ]),
                e("button", {
                  onClick: l[47] || (l[47] = (s) => G.value = !0),
                  class: "di-btn-small"
                }, [
                  C(u(so), { style: { width: "14px", height: "14px" } }),
                  l[123] || (l[123] = E(" インポート ", -1))
                ]),
                ne.value > 0 ? (n(), i("button", {
                  key: 0,
                  onClick: c,
                  class: "di-btn-small di-btn-danger"
                }, [
                  C(u($t), { style: { width: "14px", height: "14px" } }),
                  l[124] || (l[124] = E(" 全削除 ", -1))
                ])) : v("", !0)
              ]),
              ne.value > 0 || k.value > 0 || oe.value > 0 ? (n(), i("div", Ti, [
                l[128] || (l[128] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                e("div", Ui, [
                  l[125] || (l[125] = e("span", null, "要素設定", -1)),
                  e("span", Si, m(ne.value) + "件", 1)
                ]),
                e("div", Vi, [
                  l[126] || (l[126] = e("span", null, "マスタ定義", -1)),
                  e("span", Mi, m(k.value) + "件", 1)
                ]),
                e("div", Ei, [
                  l[127] || (l[127] = e("span", null, "バッチ処理", -1)),
                  e("span", Di, m(oe.value) + "件", 1)
                ])
              ])) : v("", !0)
            ], 512), [
              [kt, U.value === "export"]
            ])
          ]),
          l[130] || (l[130] = e("div", { class: "di-footer" }, [
            e("kbd", null, "Ctrl"),
            e("span", null, "+"),
            e("kbd", null, "Shift"),
            e("span", null, "+"),
            e("kbd", null, "D"),
            e("span", { class: "di-footer-text" }, "で開発者モード切替")
          ], -1))
        ])) : v("", !0)
      ])),
      (n(), Ke(at, { to: "body" }, [
        u(a).isEnabled ? (n(), i("div", Pi, [...l[131] || (l[131] = [
          e("span", { class: "di-indicator-dot" }, null, -1),
          E(" Developer Mode ", -1)
        ])])) : v("", !0)
      ])),
      (n(), Ke(at, { to: "body" }, [
        V.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[49] || (l[49] = fe((s) => V.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Bi, [
            l[133] || (l[133] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
            e("textarea", {
              readonly: "",
              value: u(a).exportConfigs(),
              class: "di-modal-textarea"
            }, null, 8, Li),
            e("div", Ai, [
              e("button", {
                onClick: l[48] || (l[48] = (s) => V.value = !1),
                class: "di-btn-small"
              }, "閉じる"),
              e("button", {
                onClick: ve,
                class: "di-btn-small di-btn-gray"
              }, [
                C(u(Bt), { style: { width: "14px", height: "14px" } }),
                l[132] || (l[132] = E(" ファイル保存 ", -1))
              ]),
              e("button", {
                onClick: qe,
                class: "di-btn-small di-btn-primary"
              }, "コピー")
            ])
          ])
        ])) : v("", !0)
      ])),
      (n(), Ke(at, { to: "body" }, [
        G.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[52] || (l[52] = fe((s) => G.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Fi, [
            l[135] || (l[135] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
            e("label", Oi, [
              e("input", {
                type: "file",
                accept: ".json",
                onChange: _
              }, null, 32),
              l[134] || (l[134] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
            ]),
            f(e("textarea", {
              "onUpdate:modelValue": l[50] || (l[50] = (s) => J.value = s),
              placeholder: "またはJSONを直接貼り付け...",
              class: "di-modal-textarea di-modal-textarea-input"
            }, null, 512), [
              [w, J.value]
            ]),
            ee.value ? (n(), i("p", Ni, m(ee.value), 1)) : v("", !0),
            e("div", ji, [
              e("button", {
                onClick: l[51] || (l[51] = (s) => {
                  G.value = !1, J.value = "", ee.value = "";
                }),
                class: "di-btn-small"
              }, " キャンセル "),
              e("button", {
                onClick: A,
                disabled: !J.value,
                class: "di-btn-small di-btn-primary"
              }, " インポート ", 8, Hi)
            ])
          ])
        ])) : v("", !0)
      ]))
    ], 64));
  }
}), Et = (R, a) => {
  const U = R.__vccOpts || R;
  for (const [V, G] of a)
    U[V] = G;
  return U;
}, Ri = /* @__PURE__ */ Et(qi, [["__scopeId", "data-v-7b391c47"]]), zi = { class: "di-editor-header" }, Ki = { class: "di-header-actions" }, Yi = {
  key: 0,
  class: "di-static-indicator"
}, Gi = {
  key: 1,
  class: "di-binding-indicator"
}, Xi = {
  key: 0,
  class: "di-binding-source"
}, Zi = { class: "di-editor-tabs" }, Ji = { class: "di-editor-content" }, Qi = { class: "di-form-group" }, Wi = { class: "di-display-type-grid" }, ea = ["onClick"], ta = { class: "di-display-type-desc" }, la = {
  key: 0,
  class: "di-field-tags"
}, oa = { class: "di-field-tags-list" }, sa = { class: "di-field-tag-name" }, na = {
  key: 0,
  class: "di-field-tag-type"
}, ia = ["onClick"], aa = {
  key: 1,
  class: "di-binding-selector"
}, da = { class: "di-form-group" }, ua = { class: "di-form-label" }, ra = { class: "di-binding-search-wrapper" }, ca = {
  key: 0,
  class: "di-binding-list"
}, va = ["onClick"], pa = { class: "di-binding-item-main" }, ma = { class: "di-binding-name" }, fa = { class: "di-binding-type" }, ba = {
  key: 0,
  class: "di-binding-component"
}, ya = {
  key: 1,
  class: "di-binding-empty"
}, ha = {
  key: 2,
  class: "di-form-divider"
}, ga = { class: "di-form-row" }, ka = { class: "di-form-group di-suggest-wrapper" }, xa = {
  key: 0,
  class: "di-suggest-list"
}, wa = ["onMousedown"], $a = { class: "di-form-group di-suggest-wrapper" }, Ca = {
  key: 0,
  class: "di-suggest-list"
}, _a = ["onMousedown"], Ia = { class: "di-form-group" }, Ta = ["value"], Ua = ["disabled"], Sa = {
  key: 3,
  class: "di-master-inline"
}, Va = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Ma = {
  key: 0,
  class: "di-master-inline-section"
}, Ea = {
  key: 0,
  class: "di-master-entries-table"
}, Da = ["onUpdate:modelValue"], Pa = ["onUpdate:modelValue"], Ba = ["onUpdate:modelValue"], La = ["onClick"], Aa = {
  key: 4,
  class: "di-form-group"
}, Fa = { class: "di-stored-calc-toggle" }, Oa = {
  key: 0,
  class: "di-condition-badge"
}, Na = {
  key: 5,
  class: "di-stored-calc-section"
}, ja = { class: "di-form-group" }, Ha = { class: "di-form-group di-suggest-wrapper" }, qa = { class: "di-stored-calc-tags" }, Ra = ["onClick"], za = {
  key: 0,
  class: "di-suggest-list"
}, Ka = ["onMousedown"], Ya = { class: "di-form-group" }, Ga = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, Xa = {
  key: 0,
  class: "di-calc-tag"
}, Za = ["onClick"], Ja = {
  key: 1,
  class: "di-calc-text"
}, Qa = ["placeholder"], Wa = {
  key: 0,
  class: "di-suggest-list"
}, ed = ["onMousedown"], td = {
  key: 2,
  class: "di-form-group"
}, ld = { class: "di-condition-toggle" }, od = {
  key: 0,
  class: "di-condition-badge"
}, sd = {
  key: 0,
  class: "di-condition-section"
}, nd = { class: "di-form-group" }, id = { class: "di-form-group di-suggest-wrapper" }, ad = { class: "di-form-row" }, dd = { class: "di-form-group" }, ud = {
  key: 0,
  class: "di-form-group"
}, rd = { class: "di-form-row" }, cd = { class: "di-form-group" }, vd = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, pd = { class: "di-form-row" }, md = { class: "di-form-group" }, fd = { class: "di-form-group" }, bd = { class: "di-form-group" }, yd = { class: "di-form-group" }, hd = { class: "di-form-group" }, gd = { class: "di-form-group" }, kd = ["placeholder"], xd = {
  key: 0,
  class: "di-form-group"
}, wd = { class: "di-form-group" }, $d = { class: "di-form-divider" }, Cd = { class: "di-csv-file-settings" }, _d = { class: "di-form-row" }, Id = { class: "di-form-group" }, Td = { class: "di-form-group" }, Ud = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, Sd = { class: "di-csv-checkbox-label" }, Vd = { class: "di-form-group" }, Md = { class: "di-csv-columns-section" }, Ed = {
  key: 0,
  class: "di-csv-columns-table"
}, Dd = { class: "di-csv-col-no" }, Pd = ["onUpdate:modelValue"], Bd = ["onUpdate:modelValue"], Ld = ["onUpdate:modelValue"], Ad = ["onUpdate:modelValue"], Fd = { class: "di-csv-col-req di-csv-checkbox-center" }, Od = ["onUpdate:modelValue"], Nd = ["onUpdate:modelValue"], jd = { class: "di-csv-col-act" }, Hd = ["onClick", "disabled"], qd = ["onClick", "disabled"], Rd = ["onClick"], zd = { class: "di-form-group" }, Kd = { class: "di-form-group" }, Yd = { class: "di-form-group" }, Gd = { class: "di-form-group" }, Xd = { class: "di-form-group" }, Zd = { class: "di-form-group" }, Jd = { class: "di-csv-error-section" }, Qd = {
  key: 0,
  class: "di-csv-columns-table"
}, Wd = ["onUpdate:modelValue"], eu = ["value"], tu = ["onUpdate:modelValue"], lu = ["onUpdate:modelValue"], ou = ["onUpdate:modelValue"], su = ["onClick"], nu = { class: "di-form-divider" }, iu = { class: "di-form-row" }, au = { class: "di-form-group" }, du = { class: "di-form-group" }, uu = { class: "di-form-row" }, ru = { class: "di-form-group" }, cu = { class: "di-form-group" }, vu = { class: "di-form-group" }, pu = { class: "di-form-group" }, mu = { class: "di-form-group" }, fu = { class: "di-form-group" }, bu = { class: "di-email-variables-input" }, yu = ["onClick"], hu = { class: "di-form-group" }, gu = { class: "di-form-group" }, ku = { class: "di-form-group" }, xu = { class: "di-form-divider" }, wu = { class: "di-form-group" }, $u = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Cu = { class: "di-form-row" }, _u = { class: "di-form-group" }, Iu = { class: "di-form-group" }, Tu = { class: "di-form-group" }, Uu = { class: "di-form-group" }, Su = {
  class: "di-form-label",
  style: { display: "flex", "align-items": "center", gap: "8px" }
}, Vu = { class: "di-form-group" }, Mu = { class: "di-form-group" }, Eu = { class: "di-form-group" }, Du = { class: "di-form-group" }, Pu = {
  key: 0,
  class: "di-field-tags"
}, Bu = { class: "di-field-tags-list" }, Lu = { class: "di-field-tag-name" }, Au = {
  key: 0,
  class: "di-field-tag-type"
}, Fu = ["onClick"], Ou = {
  key: 1,
  class: "di-binding-selector"
}, Nu = { class: "di-form-group" }, ju = { class: "di-form-label" }, Hu = { class: "di-binding-search-wrapper" }, qu = {
  key: 0,
  class: "di-binding-list"
}, Ru = ["onClick"], zu = { class: "di-binding-item-main" }, Ku = { class: "di-binding-name" }, Yu = { class: "di-binding-type" }, Gu = {
  key: 0,
  class: "di-binding-component"
}, Xu = {
  key: 2,
  class: "di-master-inline"
}, Zu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Ju = {
  key: 0,
  class: "di-master-inline-section"
}, Qu = {
  key: 0,
  class: "di-master-entries-table"
}, Wu = ["onUpdate:modelValue"], er = ["onUpdate:modelValue"], tr = ["onUpdate:modelValue"], lr = ["onClick"], or = { class: "di-condition-toggle" }, sr = {
  key: 0,
  class: "di-condition-badge"
}, nr = { class: "di-form-group di-suggest-wrapper" }, ir = { class: "di-calc-tags-input" }, ar = ["onClick"], dr = ["placeholder"], ur = { class: "di-form-group" }, rr = { class: "di-form-group" }, cr = { class: "di-form-group" }, vr = { class: "di-form-group" }, pr = { class: "di-editor-footer" }, mr = { class: "di-editor-actions" }, fr = /* @__PURE__ */ _t({
  __name: "DevElementEditor",
  setup(R) {
    const a = It(), U = y("datasource"), V = y(""), G = y(""), J = y(""), ee = y(""), re = y(""), ce = y(!1), F = y([]), X = y(""), ne = y(""), be = y(""), ye = y(""), ie = y([]), M = y("UTF-8"), he = y(","), Ue = y(!0), $e = y(""), qe = y(""), ve = y(""), Se = y(void 0), Ve = y(""), A = y(""), _ = y(""), c = y([]), P = y(""), Q = y(""), le = y(""), B = y(""), N = y(""), $ = y(""), k = y(""), T = y([]), de = y(""), K = y(""), De = y(""), ae = y(""), Ae = y(!0), Fe = y(""), Ge = y(""), Ie = y(""), Te = y(!1), L = y(""), Me = y(""), ue = y(!1), oe = y([]), Ce = j(() => {
      if (te.value.length > 0) {
        const b = te.value[0];
        if (b.table && b.column) return `${b.table}.${b.column}`;
      }
      return "";
    }), Oe = j(() => Ce.value && a.getMasterDefinition(Ce.value) || null), O = y("db_direct"), te = y([]), Y = y(""), pe = y(""), Re = y(""), Xe = y(""), We = y(""), Ee = y([]), ge = y(""), rt = y(!1), Ze = y(""), et = y(""), Ne = y(""), tt = y(""), lt = y(""), Be = y(!1), ot = y(""), Le = y([]), ze = y(""), ct = y(!1), st = y(""), Je = y(""), r = y(""), l = y(""), s = y(""), g = y(!1), h = y(""), W = y(""), se = y(""), d = y(!1), nt = j(() => a.editingElementId !== null), Pe = j(() => a.editingElementId), Z = j(() => V.value === "csv_export" || V.value === "csv_import"), xe = j(() => V.value === "email"), mt = j(() => Z.value || xe.value), dt = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: pt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: Mt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Gt, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: oo, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Ql, color: "#94a3b8", description: "自由メモ" }
    ];
    Ct(Pe, (b) => {
      var t;
      if (b) {
        const o = a.getElementConfig(b);
        try {
          const p = document.querySelector(b);
          if (p) {
            o != null && o.elementType ? U.value = o.elementType : U.value = a.detectElementType(p);
            const x = p.querySelector("[data-di-binding]") || (p.hasAttribute("data-di-binding") ? p : null) || p.closest("[data-di-binding]");
            if (x) {
              const H = x.getAttribute("data-di-binding"), _e = x.getAttribute("data-di-db"), gt = x.getAttribute("data-di-db-type"), Pl = x.getAttribute("data-di-db-comment");
              if (H && (se.value = H, W.value = "api", d.value = !1), _e) {
                const [zt, Kt] = _e.split(".");
                zt && Kt && (te.value.push({
                  table: zt,
                  column: Kt,
                  type: gt || void 0,
                  description: Pl || void 0
                }), O.value || (O.value = "db_direct"));
              }
            }
          }
        } catch (p) {
          console.warn("[DevInspector] Failed to read element:", p);
        }
        if (o != null && o.fieldInfoList && o.fieldInfoList.length > 0 ? te.value = o.fieldInfoList.map((p) => ({ ...p })) : o != null && o.fieldInfo && (te.value = [{ ...o.fieldInfo }]), Y.value = "", pe.value = "", Re.value = "", Xe.value = "", o != null && o.note && (h.value = o.note.text || h.value, O.value = o.note.displayType || O.value, We.value = o.note.formatDescription || "", Ze.value = o.note.sampleValue || "", et.value = o.note.decimalHandling || "", Ne.value = o.note.unit || "", tt.value = o.note.nullDisplay || "", lt.value = o.note.displayFormat || "", hl(o.note.calcDescription || "", o.note.calcSources || []), Be.value = o.note.storedCalc || !1, ot.value = o.note.storedCalcLogic || "", Le.value = o.note.storedCalcSources ? [...o.note.storedCalcSources] : [], st.value = o.note.storedCalcTiming || "", Je.value = o.note.condition || "", r.value = o.note.conditionColumn || "", l.value = o.note.hiddenBehavior || "", s.value = o.note.hiddenNote || "", g.value = !!(o.note.condition || o.note.conditionColumn)), o != null && o.sourceBinding && (W.value = o.sourceBinding.type || W.value, se.value = o.sourceBinding.source || se.value, d.value = o.sourceBinding.isStatic || !1), o != null && o.actionInfo) {
          if (V.value = o.actionInfo.type || "", G.value = o.actionInfo.target || "", J.value = o.actionInfo.method || "", ee.value = o.actionInfo.description || "", o.actionInfo.csvSpec) {
            const p = o.actionInfo.csvSpec;
            ie.value = p.columns.map((x) => ({ ...x })), M.value = p.encoding || "UTF-8", he.value = p.delimiter || ",", Ue.value = p.hasHeaderRow !== !1, $e.value = p.filenamePattern || "", qe.value = p.sortOrder || "", ve.value = p.filterCondition || "", Se.value = p.maxRows, Ve.value = p.errorHandling || "", A.value = p.duplicateHandling || "", _.value = p.preValidation || "", c.value = p.errorDefs ? p.errorDefs.map((x) => ({ ...x })) : [];
          }
          if (o.actionInfo.emailSpec) {
            const p = o.actionInfo.emailSpec;
            P.value = p.trigger || "", Q.value = p.to || "", le.value = p.cc || "", B.value = p.bcc || "", N.value = p.subject || "", $.value = p.bodyTemplate || "", k.value = p.templatePath || "", T.value = p.variables ? [...p.variables] : [], K.value = p.attachments || "", De.value = p.conditions || "", ae.value = p.errorHandling || "";
          }
        }
        if (o != null && o.formInfo && (re.value = o.formInfo.inputType || "", ce.value = o.formInfo.required || !1, F.value = o.formInfo.validation ? [...o.formInfo.validation] : [], ne.value = o.formInfo.placeholder || "", be.value = o.formInfo.defaultValue || "", ye.value = o.formInfo.description || ""), (t = o == null ? void 0 : o.actionInfo) != null && t.sortSpec) {
          const p = o.actionInfo.sortSpec;
          Ae.value = p.sortable !== !1, Fe.value = p.sortType || "", Ge.value = p.sortKey || "", Ie.value = p.defaultDirection || "", Te.value = p.isDefaultSort || !1, L.value = p.unsortedOrder || "", Me.value = p.description || "";
        }
      } else
        yt();
    });
    function yt() {
      U.value = "datasource", O.value = "db_direct", te.value = [], Y.value = "", pe.value = "", Re.value = "", Xe.value = "", We.value = "", Ze.value = "", et.value = "", Ne.value = "", tt.value = "", lt.value = "", Ee.value = [], ge.value = "", Be.value = !1, ot.value = "", Le.value = [], ze.value = "", st.value = "", Je.value = "", r.value = "", l.value = "", s.value = "", g.value = !1, h.value = "", W.value = "", se.value = "", d.value = !1, V.value = "", G.value = "", J.value = "", ee.value = "", ie.value = [], M.value = "UTF-8", he.value = ",", Ue.value = !0, $e.value = "", qe.value = "", ve.value = "", Se.value = void 0, Ve.value = "", A.value = "", _.value = "", c.value = [], re.value = "", ce.value = !1, F.value = [], X.value = "", ne.value = "", be.value = "", ye.value = "", P.value = "", Q.value = "", le.value = "", B.value = "", N.value = "", $.value = "", k.value = "", T.value = [], de.value = "", K.value = "", De.value = "", ae.value = "", Ae.value = !0, Fe.value = "", Ge.value = "", Ie.value = "", Te.value = !1, L.value = "", Me.value = "", ue.value = !1, oe.value = [];
    }
    function vt() {
      a.stopEditing(), yt();
    }
    function ft() {
      if (Pe.value)
        try {
          const b = document.querySelector(Pe.value);
          if (!b) return;
          const t = a.autoDetectElementInfo(b, Pe.value);
          t.sourceBinding && (W.value = t.sourceBinding.type || "", se.value = t.sourceBinding.source || "", d.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !O.value && (O.value = "static", h.value = h.value || "固定文言")), t.fieldInfo && (te.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), O.value || (O.value = "db_direct")), t.note && !h.value && (h.value = t.note.text || "");
        } catch (b) {
          console.error("[DevInspector] Auto-detect failed:", b);
        }
    }
    function ht() {
      if (!Pe.value) return;
      const b = [...te.value];
      (O.value === "db_direct" || O.value === "db_formatted") && Y.value && pe.value && b.push({
        table: Y.value,
        column: pe.value,
        type: Re.value || void 0,
        description: Xe.value || void 0
      });
      const t = b.length > 0 ? b : void 0, o = b.length > 0 ? b[0] : void 0, p = O.value === "db_direct" || O.value === "db_formatted", x = O.value || h.value ? {
        text: h.value || "",
        displayType: O.value,
        formatDescription: O.value === "db_formatted" && We.value || void 0,
        calcDescription: O.value === "calculated" && yl() || void 0,
        calcSources: O.value === "calculated" && Nt().length > 0 ? Nt() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: p && Be.value ? !0 : void 0,
        storedCalcLogic: p && Be.value && ot.value || void 0,
        storedCalcSources: p && Be.value && Le.value.length > 0 ? Le.value : void 0,
        storedCalcTiming: p && Be.value && st.value || void 0,
        sampleValue: Ze.value || void 0,
        decimalHandling: et.value || void 0,
        unit: Ne.value || void 0,
        nullDisplay: tt.value || void 0,
        displayFormat: lt.value || void 0,
        condition: Je.value || void 0,
        conditionColumn: r.value || void 0,
        hiddenBehavior: l.value || void 0,
        hiddenNote: s.value || void 0
      } : void 0, H = W.value ? {
        type: W.value,
        source: se.value || void 0,
        isStatic: d.value
      } : void 0, _e = U.value === "action" && V.value ? {
        type: V.value,
        target: G.value || void 0,
        method: J.value ? J.value : void 0,
        description: ee.value || void 0,
        csvSpec: Tl(),
        emailSpec: Ul(),
        sortSpec: El()
      } : void 0, gt = U.value === "form" ? {
        inputType: re.value || void 0,
        required: ce.value || void 0,
        validation: F.value.length > 0 ? F.value : void 0,
        placeholder: ne.value || void 0,
        defaultValue: be.value || void 0,
        description: ye.value || void 0
      } : void 0;
      a.setElementConfig(Pe.value, {
        elementType: U.value,
        fieldInfo: o,
        fieldInfoList: t,
        actionInfo: _e,
        formInfo: gt,
        note: x,
        sourceBinding: H
      }), ue.value && Ce.value && Dl(), vt();
    }
    function Dt() {
      Pe.value && (a.deleteElementConfig(Pe.value), vt());
    }
    const Pt = [
      "string",
      "text",
      "integer",
      "bigint",
      "float",
      "decimal",
      "boolean",
      "date",
      "datetime",
      "time",
      "timestamp",
      "binary",
      "json",
      "jsonb",
      "VARCHAR",
      "TEXT",
      "INT",
      "BIGINT",
      "BOOLEAN",
      "DATE",
      "DATETIME",
      "TIMESTAMP",
      "JSON"
    ], Ye = y(""), S = y(!1), ke = j(() => a.searchSchemaColumns(Ye.value).slice(0, 30));
    function je(b) {
      te.value.push({
        table: b.table,
        column: b.column,
        type: b.type || void 0,
        description: b.comment || void 0
      }), S.value = !1, Ye.value = "";
    }
    function it() {
      !Y.value || !pe.value || (te.value.push({
        table: Y.value,
        column: pe.value,
        type: Re.value || void 0,
        description: Xe.value || void 0
      }), Y.value = "", pe.value = "", Re.value = "", Xe.value = "");
    }
    function ut(b) {
      te.value.splice(b, 1);
    }
    const me = j(() => a.getSchemaColumns().length > 0), bt = y(!1), Tt = y(!1), Lt = j(() => {
      var p;
      const b = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const H of x.fieldInfoList)
            H.table && b.add(H.table);
        else (p = x.fieldInfo) != null && p.table && b.add(x.fieldInfo.table);
      for (const x of a.getSchemaColumns())
        b.add(x.table);
      const t = [...b].sort();
      if (!Y.value) return t;
      const o = Y.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(o));
    }), At = j(() => {
      var p;
      const b = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const H of x.fieldInfoList)
            H.column && (!Y.value || H.table === Y.value) && b.add(H.column);
        else (p = x.fieldInfo) != null && p.column && (!Y.value || x.fieldInfo.table === Y.value) && b.add(x.fieldInfo.column);
      for (const x of a.getSchemaColumns())
        (!Y.value || x.table === Y.value) && b.add(x.column);
      const t = [...b].sort();
      if (!pe.value) return t;
      const o = pe.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(o));
    });
    function il() {
      setTimeout(() => {
        bt.value = !1;
      }, 150);
    }
    function al() {
      setTimeout(() => {
        Tt.value = !1;
      }, 150);
    }
    function dl(b) {
      if (Y.value = b, bt.value = !1, pe.value) {
        const t = a.getSchemaColumns().find((o) => o.table === b && o.column === pe.value);
        t && (Re.value = t.type || "", Xe.value = t.comment || "");
      }
    }
    function ul(b) {
      if (pe.value = b, Tt.value = !1, Y.value) {
        const t = a.getSchemaColumns().find((o) => o.table === Y.value && o.column === b);
        t && (Re.value = t.type || "", Xe.value = t.comment || "");
      }
    }
    const Ft = j(() => {
      var p, x;
      const b = /* @__PURE__ */ new Set();
      for (const H of Object.values(a.elementConfigs))
        if (H.fieldInfoList)
          for (const _e of H.fieldInfoList)
            _e.table && _e.column && b.add(`${_e.table}.${_e.column}`);
        else (p = H.fieldInfo) != null && p.table && ((x = H.fieldInfo) != null && x.column) && b.add(`${H.fieldInfo.table}.${H.fieldInfo.column}`);
      for (const H of a.getSchemaColumns())
        b.add(H.fullName);
      const t = [...b].sort();
      if (!ge.value) return t;
      const o = ge.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const H = t.filter((_e) => _e.toLowerCase().includes(o));
        if (H.length > 0) return H;
      }
      return t;
    });
    function rl(b) {
      ge.value.trim() && Ee.value.push({ type: "text", value: ge.value }), Ee.value.push({ type: "tag", value: b }), ge.value = "";
    }
    function cl(b) {
      Ee.value.splice(b, 1);
    }
    function vl(b) {
      if (b.key === "Backspace" && !ge.value && Ee.value.length > 0) {
        const t = Ee.value.pop();
        t.type === "text" && (ge.value = t.value);
      }
    }
    function pl() {
      setTimeout(() => {
        rt.value = !1;
      }, 150);
    }
    const Ot = j(() => {
      var p, x;
      const b = /* @__PURE__ */ new Set();
      for (const H of a.getSchemaColumns())
        b.add(H.fullName);
      for (const H of Object.values(a.elementConfigs))
        if (H.fieldInfoList)
          for (const _e of H.fieldInfoList)
            _e.table && _e.column && b.add(`${_e.table}.${_e.column}`);
        else (p = H.fieldInfo) != null && p.table && ((x = H.fieldInfo) != null && x.column) && b.add(`${H.fieldInfo.table}.${H.fieldInfo.column}`);
      const t = [...b].sort();
      if (!ze.value) return t;
      const o = ze.value.trim().toLowerCase();
      return t.filter((H) => H.toLowerCase().includes(o));
    });
    function ml() {
      setTimeout(() => {
        ct.value = !1;
      }, 150);
    }
    function fl() {
      const b = ze.value.trim();
      b && !Le.value.includes(b) && Le.value.push(b), ze.value = "";
    }
    function bl(b) {
      Le.value.includes(b) || Le.value.push(b), ze.value = "";
    }
    function yl() {
      const b = Ee.value.map((t) => t.value);
      return ge.value.trim() && b.push(ge.value.trim()), b.join(" ").replace(/\s+/g, " ").trim();
    }
    function Nt() {
      return Ee.value.filter((b) => b.type === "tag").map((b) => b.value);
    }
    function hl(b, t) {
      if (!b && t.length === 0) {
        Ee.value = [], ge.value = "";
        return;
      }
      if (t.length === 0) {
        Ee.value = [], ge.value = b;
        return;
      }
      const o = [];
      let p = b;
      for (const H of t) {
        const _e = p.indexOf(H);
        if (_e >= 0) {
          const gt = p.substring(0, _e).trim();
          gt && o.push({ type: "text", value: gt }), o.push({ type: "tag", value: H }), p = p.substring(_e + H.length);
        }
      }
      const x = p.trim();
      x && o.push({ type: "text", value: x }), o.length === 0 ? ge.value = b : (Ee.value = o, ge.value = "");
    }
    function gl() {
      const b = X.value.trim();
      b && !F.value.includes(b) && F.value.push(b), X.value = "";
    }
    function kl(b) {
      F.value.splice(b, 1);
    }
    function xl(b) {
      b.key === "Backspace" && !X.value && F.value.length > 0 && F.value.pop();
    }
    function wl() {
      ie.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function $l(b) {
      ie.value.splice(b, 1);
    }
    function jt(b, t) {
      const o = b + t;
      if (o < 0 || o >= ie.value.length) return;
      const p = ie.value[b];
      ie.value[b] = ie.value[o], ie.value[o] = p, ie.value = [...ie.value];
    }
    function Cl() {
      c.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function _l(b) {
      c.value.splice(b, 1);
    }
    const Il = j(() => ie.value.filter((b) => b.name).map((b) => b.name));
    function Tl() {
      if (V.value !== "csv_export" && V.value !== "csv_import") return;
      const b = c.value.filter((t) => t.condition || t.message);
      return {
        columns: ie.value.filter((t) => t.name),
        encoding: M.value || void 0,
        delimiter: he.value || void 0,
        hasHeaderRow: Ue.value,
        filenamePattern: $e.value || void 0,
        sortOrder: qe.value || void 0,
        filterCondition: ve.value || void 0,
        maxRows: Se.value || void 0,
        errorHandling: Ve.value || void 0,
        duplicateHandling: A.value || void 0,
        preValidation: _.value || void 0,
        errorDefs: b.length > 0 ? b : void 0
      };
    }
    function Ul() {
      if (V.value === "email")
        return {
          trigger: P.value || "",
          to: Q.value || "",
          cc: le.value || void 0,
          bcc: B.value || void 0,
          subject: N.value || "",
          bodyTemplate: $.value || void 0,
          templatePath: k.value || void 0,
          variables: T.value.length > 0 ? T.value : void 0,
          attachments: K.value || void 0,
          conditions: De.value || void 0,
          errorHandling: ae.value || void 0
        };
    }
    function Sl() {
      const b = de.value.trim();
      b && !T.value.includes(b) && T.value.push(b), de.value = "";
    }
    function Vl(b) {
      T.value.splice(b, 1);
    }
    function Ml(b) {
      b.key === "Backspace" && !de.value && T.value.length > 0 && T.value.pop();
    }
    function El() {
      if (V.value === "sort")
        return {
          sortable: Ae.value,
          sortType: Fe.value ? Fe.value : void 0,
          sortKey: Ge.value || void 0,
          defaultDirection: Ie.value ? Ie.value : void 0,
          isDefaultSort: Te.value || void 0,
          unsortedOrder: L.value || void 0,
          description: Me.value || void 0
        };
    }
    Ct(Ce, (b) => {
      if (b) {
        const t = a.getMasterDefinition(b);
        t ? (oe.value = t.entries.map((o) => ({ ...o })), ue.value = !0) : (oe.value = [], ue.value = !1);
      } else
        oe.value = [], ue.value = !1;
    });
    function Ht() {
      ue.value = !ue.value, ue.value && oe.value.length === 0 && oe.value.push({ value: "", label: "" });
    }
    function qt() {
      oe.value.push({ value: "", label: "" });
    }
    function Rt(b) {
      oe.value.splice(b, 1);
    }
    function Dl() {
      var x;
      if (!Ce.value) return;
      const [b, t] = Ce.value.split(".");
      if (!b || !t) return;
      const o = oe.value.filter((H) => H.value || H.label);
      if (o.length === 0) {
        a.deleteMasterDefinition(Ce.value);
        return;
      }
      const p = a.getMasterDefinition(Ce.value);
      a.setMasterDefinition({
        id: Ce.value,
        table: b,
        column: t,
        name: (p == null ? void 0 : p.name) || t,
        columnType: (p == null ? void 0 : p.columnType) || ((x = te.value[0]) == null ? void 0 : x.type),
        description: p == null ? void 0 : p.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (b, t) => (n(), Ke(at, { to: "body" }, [
      nt.value ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: fe(vt, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: z(["di-editor-modal", { "di-editor-modal-wide": mt.value }])
        }, [
          e("div", zi, [
            t[81] || (t[81] = e("h3", null, "要素情報を編集", -1)),
            e("div", Ki, [
              e("button", {
                onClick: ft,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                C(u(Mt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: vt,
                class: "di-editor-close"
              }, [
                C(u(Qe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          d.value ? (n(), i("div", Yi, [...t[82] || (t[82] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : W.value ? (n(), i("div", Gi, [
            e("span", {
              class: z(["di-binding-badge", "di-binding-" + W.value])
            }, m(W.value), 3),
            se.value ? (n(), i("span", Xi, m(se.value), 1)) : v("", !0)
          ])) : v("", !0),
          e("div", Zi, [
            e("button", {
              onClick: t[0] || (t[0] = (o) => U.value = "datasource"),
              class: z(["di-editor-tab", { "di-editor-tab-active": U.value === "datasource" }])
            }, [
              C(u(pt), { style: { width: "14px", height: "14px" } }),
              t[83] || (t[83] = E(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[1] || (t[1] = (o) => U.value = "action"),
              class: z(["di-editor-tab", { "di-editor-tab-active": U.value === "action" }])
            }, [
              C(u(no), { style: { width: "14px", height: "14px" } }),
              t[84] || (t[84] = E(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[2] || (t[2] = (o) => U.value = "form"),
              class: z(["di-editor-tab", { "di-editor-tab-active": U.value === "form" }])
            }, [
              C(u(Yl), { style: { width: "14px", height: "14px" } }),
              t[85] || (t[85] = E(" フォーム ", -1))
            ], 2)
          ]),
          e("div", Ji, [
            U.value === "datasource" ? (n(), i(I, { key: 0 }, [
              e("div", Qi, [
                t[86] || (t[86] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", Wi, [
                  (n(), i(I, null, D(dt, (o) => e("button", {
                    key: o.value,
                    onClick: (p) => O.value = o.value,
                    class: z(["di-display-type-card", { "di-display-type-active": O.value === o.value }]),
                    style: He(O.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), Ke(Bl(o.icon), {
                      style: He([{ width: "20px", height: "20px" }, { color: O.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: He({ color: O.value === o.value ? o.color : "#94a3b8" })
                    }, m(o.label), 5),
                    e("span", ta, m(o.description), 1)
                  ], 14, ea)), 64))
                ])
              ]),
              O.value === "db_direct" || O.value === "db_formatted" ? (n(), i(I, { key: 0 }, [
                te.value.length > 0 ? (n(), i("div", la, [
                  t[87] || (t[87] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", oa, [
                    (n(!0), i(I, null, D(te.value, (o, p) => (n(), i("div", {
                      key: p,
                      class: "di-field-tag"
                    }, [
                      e("span", sa, m(o.table) + "." + m(o.column), 1),
                      o.type ? (n(), i("span", na, m(o.type), 1)) : v("", !0),
                      e("button", {
                        onClick: (x) => ut(p),
                        class: "di-field-tag-remove"
                      }, "×", 8, ia)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                me.value ? (n(), i("div", aa, [
                  e("div", da, [
                    e("label", ua, [
                      C(u(pt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[88] || (t[88] = E(" schema.rb から選択 ", -1))
                    ]),
                    e("div", ra, [
                      f(e("input", {
                        "onUpdate:modelValue": t[3] || (t[3] = (o) => Ye.value = o),
                        onFocus: t[4] || (t[4] = (o) => S.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [w, Ye.value]
                      ]),
                      Ye.value ? (n(), i("button", {
                        key: 0,
                        onClick: t[5] || (t[5] = (o) => {
                          Ye.value = "", S.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        C(u(Qe), { style: { width: "14px", height: "14px" } })
                      ])) : v("", !0)
                    ]),
                    S.value && ke.value.length > 0 ? (n(), i("div", ca, [
                      (n(!0), i(I, null, D(ke.value, (o) => (n(), i("button", {
                        key: o.fullName,
                        onClick: (p) => je(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", pa, [
                          e("span", ma, m(o.fullName), 1),
                          e("span", fa, m(o.type), 1)
                        ]),
                        o.comment ? (n(), i("span", ba, m(o.comment), 1)) : v("", !0)
                      ], 8, va))), 128))
                    ])) : S.value && Ye.value && ke.value.length === 0 ? (n(), i("div", ya, " 該当するカラムが見つかりません ")) : v("", !0)
                  ])
                ])) : v("", !0),
                me.value ? (n(), i("div", ha, [...t[89] || (t[89] = [
                  e("span", null, "または手動入力", -1)
                ])])) : v("", !0),
                e("div", ga, [
                  e("div", ka, [
                    t[90] || (t[90] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[6] || (t[6] = (o) => Y.value = o),
                      onFocus: t[7] || (t[7] = (o) => bt.value = !0),
                      onBlur: t[8] || (t[8] = (o) => il()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, Y.value]
                    ]),
                    bt.value && Lt.value.length > 0 ? (n(), i("div", xa, [
                      (n(!0), i(I, null, D(Lt.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: fe((p) => dl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, m(o), 41, wa))), 128))
                    ])) : v("", !0)
                  ]),
                  e("div", $a, [
                    t[91] || (t[91] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (o) => pe.value = o),
                      onFocus: t[10] || (t[10] = (o) => Tt.value = !0),
                      onBlur: t[11] || (t[11] = (o) => al()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, pe.value]
                    ]),
                    Tt.value && At.value.length > 0 ? (n(), i("div", Ca, [
                      (n(!0), i(I, null, D(At.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: fe((p) => ul(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, m(o), 41, _a))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", Ia, [
                  t[93] || (t[93] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  f(e("select", {
                    "onUpdate:modelValue": t[12] || (t[12] = (o) => Re.value = o),
                    class: "di-select"
                  }, [
                    t[92] || (t[92] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), i(I, null, D(Pt, (o) => e("option", {
                      key: o,
                      value: o
                    }, m(o), 9, Ta)), 64))
                  ], 512), [
                    [we, Re.value]
                  ])
                ]),
                e("button", {
                  onClick: it,
                  class: "di-btn-add-field",
                  disabled: !Y.value || !pe.value
                }, " + カラムを追加 ", 8, Ua),
                Ce.value ? (n(), i("div", Sa, [
                  e("button", {
                    onClick: Ht,
                    class: z(["di-btn-condition-toggle", { "di-condition-active": ue.value }])
                  }, [
                    C(u(Jt), { style: { width: "14px", height: "14px" } }),
                    t[94] || (t[94] = E(" マスタ値を定義 ", -1)),
                    Oe.value ? (n(), i("span", Va, m(Oe.value.entries.length) + "件", 1)) : v("", !0)
                  ], 2),
                  ue.value ? (n(), i("div", Ma, [
                    oe.value.length > 0 ? (n(), i("div", Ea, [
                      t[95] || (t[95] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), i(I, null, D(oe.value, (o, p) => (n(), i("div", {
                        key: p,
                        class: "di-master-entry-row"
                      }, [
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.value = x,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, Da), [
                          [w, o.value]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.label = x,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, Pa), [
                          [w, o.label]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.color = x,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, Ba), [
                          [w, o.color]
                        ]),
                        e("button", {
                          onClick: (x) => Rt(p),
                          class: "di-master-entry-remove"
                        }, "×", 8, La)
                      ]))), 128))
                    ])) : v("", !0),
                    e("button", {
                      onClick: qt,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : v("", !0)
                ])) : v("", !0),
                O.value === "db_formatted" ? (n(), i("div", Aa, [
                  t[96] || (t[96] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[13] || (t[13] = (o) => We.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, We.value]
                  ])
                ])) : v("", !0),
                e("div", Fa, [
                  e("button", {
                    onClick: t[14] || (t[14] = (o) => Be.value = !Be.value),
                    class: z(["di-btn-condition-toggle", { "di-condition-active": Be.value }])
                  }, [
                    C(u(Gt), { style: { width: "14px", height: "14px" } }),
                    t[97] || (t[97] = E(" このカラムは計算値を保存している ", -1)),
                    Be.value ? (n(), i("span", Oa, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Be.value ? (n(), i("div", Na, [
                  e("div", ja, [
                    t[98] || (t[98] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[15] || (t[15] = (o) => ot.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [w, ot.value]
                    ])
                  ]),
                  e("div", Ha, [
                    t[99] || (t[99] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", qa, [
                      (n(!0), i(I, null, D(Le.value, (o, p) => (n(), i("span", {
                        key: p,
                        class: "di-calc-tag"
                      }, [
                        E(m(o) + " ", 1),
                        e("button", {
                          onClick: fe((x) => Le.value.splice(p, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Ra)
                      ]))), 128)),
                      f(e("input", {
                        "onUpdate:modelValue": t[16] || (t[16] = (o) => ze.value = o),
                        onFocus: t[17] || (t[17] = (o) => ct.value = !0),
                        onBlur: ml,
                        onKeydown: t[18] || (t[18] = wt(fe((o) => fl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [w, ze.value]
                      ])
                    ]),
                    ct.value && Ot.value.length > 0 ? (n(), i("div", za, [
                      (n(!0), i(I, null, D(Ot.value.slice(0, 12), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: fe((p) => bl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        C(u(pt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        E(" " + m(o), 1)
                      ], 40, Ka))), 128))
                    ])) : v("", !0),
                    t[100] || (t[100] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", Ya, [
                    t[102] || (t[102] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[19] || (t[19] = (o) => st.value = o),
                      class: "di-select"
                    }, [...t[101] || (t[101] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [we, st.value]
                    ])
                  ])
                ])) : v("", !0)
              ], 64)) : v("", !0),
              O.value === "calculated" ? (n(), i("div", Ga, [
                t[103] || (t[103] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[23] || (t[23] = (o) => {
                    var p;
                    return (p = b.$refs.calcInputEl) == null ? void 0 : p.focus();
                  })
                }, [
                  (n(!0), i(I, null, D(Ee.value, (o, p) => (n(), i(I, { key: p }, [
                    o.type === "tag" ? (n(), i("span", Xa, [
                      E(m(o.value) + " ", 1),
                      e("button", {
                        onClick: fe((x) => cl(p), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Za)
                    ])) : (n(), i("span", Ja, m(o.value), 1))
                  ], 64))), 128)),
                  f(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[20] || (t[20] = (o) => ge.value = o),
                    onFocus: t[21] || (t[21] = (o) => rt.value = !0),
                    onBlur: t[22] || (t[22] = (o) => pl()),
                    onKeydown: vl,
                    type: "text",
                    placeholder: Ee.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Qa), [
                    [w, ge.value]
                  ])
                ]),
                rt.value && Ft.value.length > 0 ? (n(), i("div", Wa, [
                  (n(!0), i(I, null, D(Ft.value.slice(0, 12), (o) => (n(), i("button", {
                    key: o,
                    onMousedown: fe((p) => rl(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    C(u(pt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    E(" " + m(o), 1)
                  ], 40, ed))), 128))
                ])) : v("", !0),
                t[104] || (t[104] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : v("", !0),
              O.value === "static" || O.value === "other" ? (n(), i("div", td, [
                t[105] || (t[105] = e("label", { class: "di-form-label" }, "メモ", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[24] || (t[24] = (o) => h.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, h.value]
                ])
              ])) : v("", !0),
              O.value && O.value !== "other" ? (n(), i(I, { key: 3 }, [
                e("div", ld, [
                  e("button", {
                    onClick: t[25] || (t[25] = (o) => g.value = !g.value),
                    class: z(["di-btn-condition-toggle", { "di-condition-active": g.value || Je.value }])
                  }, [
                    C(u(tl), { style: { width: "14px", height: "14px" } }),
                    t[106] || (t[106] = E(" 条件付き表示 ", -1)),
                    Je.value ? (n(), i("span", od, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                g.value ? (n(), i("div", sd, [
                  e("div", nd, [
                    t[107] || (t[107] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[26] || (t[26] = (o) => Je.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [w, Je.value]
                    ])
                  ]),
                  e("div", id, [
                    t[108] || (t[108] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[27] || (t[27] = (o) => r.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, r.value]
                    ])
                  ]),
                  e("div", ad, [
                    e("div", dd, [
                      t[110] || (t[110] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[28] || (t[28] = (o) => l.value = o),
                        class: "di-select"
                      }, [...t[109] || (t[109] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [we, l.value]
                      ])
                    ])
                  ]),
                  l.value === "different_value" ? (n(), i("div", ud, [
                    t[111] || (t[111] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (o) => s.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [w, s.value]
                    ])
                  ])) : v("", !0)
                ])) : v("", !0)
              ], 64)) : v("", !0),
              O.value === "db_direct" || O.value === "db_formatted" || O.value === "calculated" ? (n(), i(I, { key: 4 }, [
                t[119] || (t[119] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", rd, [
                  e("div", cd, [
                    t[112] || (t[112] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (o) => Ze.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Ze.value]
                    ])
                  ]),
                  e("div", vd, [
                    t[113] || (t[113] = e("label", { class: "di-form-label" }, "単位", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (o) => Ne.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [w, Ne.value]
                    ])
                  ])
                ]),
                e("div", pd, [
                  e("div", md, [
                    t[115] || (t[115] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[32] || (t[32] = (o) => et.value = o),
                      class: "di-select"
                    }, [...t[114] || (t[114] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [we, et.value]
                    ])
                  ]),
                  e("div", fd, [
                    t[116] || (t[116] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (o) => tt.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [w, tt.value]
                    ])
                  ])
                ]),
                e("div", bd, [
                  t[117] || (t[117] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[34] || (t[34] = (o) => lt.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [w, lt.value]
                  ])
                ]),
                e("div", yd, [
                  t[118] || (t[118] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[35] || (t[35] = (o) => h.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, h.value]
                  ])
                ])
              ], 64)) : v("", !0)
            ], 64)) : v("", !0),
            U.value === "action" ? (n(), i(I, { key: 1 }, [
              e("div", hd, [
                t[121] || (t[121] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[36] || (t[36] = (o) => V.value = o),
                  class: "di-select"
                }, [...t[120] || (t[120] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1),
                  e("option", { value: "csv_export" }, "CSV出力", -1),
                  e("option", { value: "csv_import" }, "CSV取込", -1),
                  e("option", { value: "email" }, "メール送信", -1),
                  e("option", { value: "sort" }, "ソート", -1)
                ])], 512), [
                  [we, V.value]
                ])
              ]),
              e("div", gd, [
                t[122] || (t[122] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[37] || (t[37] = (o) => G.value = o),
                  type: "text",
                  placeholder: V.value === "navigate" ? "/tasks" : V.value === "api" ? "/api/users" : V.value === "modal" ? "confirm-dialog" : V.value === "csv_export" ? "/api/export/users" : V.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, kd), [
                  [w, G.value]
                ])
              ]),
              V.value === "api" ? (n(), i("div", xd, [
                t[124] || (t[124] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[38] || (t[38] = (o) => J.value = o),
                  class: "di-select"
                }, [...t[123] || (t[123] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [we, J.value]
                ])
              ])) : v("", !0),
              e("div", wd, [
                t[125] || (t[125] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[39] || (t[39] = (o) => ee.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ee.value]
                ])
              ]),
              V.value === "csv_export" || V.value === "csv_import" ? (n(), i(I, { key: 1 }, [
                e("div", $d, [
                  e("span", null, [
                    C(u(sl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[126] || (t[126] = E(" CSV仕様", -1))
                  ])
                ]),
                e("div", Cd, [
                  t[133] || (t[133] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", _d, [
                    e("div", Id, [
                      t[128] || (t[128] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[40] || (t[40] = (o) => M.value = o),
                        class: "di-select"
                      }, [...t[127] || (t[127] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [we, M.value]
                      ])
                    ]),
                    e("div", Td, [
                      t[130] || (t[130] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[41] || (t[41] = (o) => he.value = o),
                        class: "di-select"
                      }, [...t[129] || (t[129] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [we, he.value]
                      ])
                    ])
                  ]),
                  e("div", Ud, [
                    e("label", Sd, [
                      f(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[42] || (t[42] = (o) => Ue.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Ut, Ue.value]
                      ]),
                      t[131] || (t[131] = E(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", Vd, [
                    t[132] || (t[132] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[43] || (t[43] = (o) => $e.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, $e.value]
                    ])
                  ])
                ]),
                e("div", Md, [
                  t[136] || (t[136] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  ie.value.length > 0 ? (n(), i("div", Ed, [
                    t[135] || (t[135] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (n(!0), i(I, null, D(ie.value, (o, p) => (n(), i("div", {
                      key: p,
                      class: "di-csv-column-row"
                    }, [
                      e("span", Dd, m(p + 1), 1),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.name = x,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, Pd), [
                        [w, o.name]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.dbMapping = x,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, Bd), [
                        [w, o.dbMapping]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.processing = x,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, Ld), [
                        [w, o.processing]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.type = x,
                        class: "di-csv-select di-csv-col-type"
                      }, [...t[134] || (t[134] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, Ad), [
                        [we, o.type]
                      ]),
                      e("label", Fd, [
                        f(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (x) => o.required = x,
                          class: "di-checkbox"
                        }, null, 8, Od), [
                          [Ut, o.required]
                        ])
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.description = x,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, Nd), [
                        [w, o.description]
                      ]),
                      e("div", jd, [
                        e("button", {
                          onClick: (x) => jt(p, -1),
                          disabled: p === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          C(u(Hl), { style: { width: "12px", height: "12px" } })
                        ], 8, Hd),
                        e("button", {
                          onClick: (x) => jt(p, 1),
                          disabled: p === ie.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          C(u(ol), { style: { width: "12px", height: "12px" } })
                        ], 8, qd),
                        e("button", {
                          onClick: (x) => $l(p),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Rd)
                      ])
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: wl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                V.value === "csv_export" ? (n(), i(I, { key: 0 }, [
                  t[140] || (t[140] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", zd, [
                    t[137] || (t[137] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[44] || (t[44] = (o) => qe.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, qe.value]
                    ])
                  ]),
                  e("div", Kd, [
                    t[138] || (t[138] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[45] || (t[45] = (o) => ve.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, ve.value]
                    ])
                  ]),
                  e("div", Yd, [
                    t[139] || (t[139] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[46] || (t[46] = (o) => Se.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        w,
                        Se.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : v("", !0),
                V.value === "csv_import" ? (n(), i(I, { key: 1 }, [
                  t[146] || (t[146] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Gd, [
                    t[142] || (t[142] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[47] || (t[47] = (o) => Ve.value = o),
                      class: "di-select"
                    }, [...t[141] || (t[141] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [we, Ve.value]
                    ])
                  ]),
                  e("div", Xd, [
                    t[144] || (t[144] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[48] || (t[48] = (o) => A.value = o),
                      class: "di-select"
                    }, [...t[143] || (t[143] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [we, A.value]
                    ])
                  ]),
                  e("div", Zd, [
                    t[145] || (t[145] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[49] || (t[49] = (o) => _.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [w, _.value]
                    ])
                  ])
                ], 64)) : v("", !0),
                t[150] || (t[150] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", Jd, [
                  c.value.length > 0 ? (n(), i("div", Qd, [
                    t[149] || (t[149] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), i(I, null, D(c.value, (o, p) => (n(), i("div", {
                      key: p,
                      class: "di-csv-column-row"
                    }, [
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.column = x,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[147] || (t[147] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), i(I, null, D(Il.value, (x) => (n(), i("option", {
                          key: x,
                          value: x
                        }, m(x), 9, eu))), 128))
                      ], 8, Wd), [
                        [we, o.column]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.condition = x,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, tu), [
                        [w, o.condition]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.message = x,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, lu), [
                        [w, o.message]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.severity = x,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[148] || (t[148] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, ou), [
                        [we, o.severity]
                      ]),
                      e("button", {
                        onClick: (x) => _l(p),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, su)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Cl,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : v("", !0),
              V.value === "email" ? (n(), i(I, { key: 2 }, [
                e("div", nu, [
                  e("span", null, [
                    C(u(Jl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[151] || (t[151] = E(" メール基本設定", -1))
                  ])
                ]),
                e("div", iu, [
                  e("div", au, [
                    t[152] || (t[152] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[50] || (t[50] = (o) => P.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [w, P.value]
                    ])
                  ]),
                  e("div", du, [
                    t[153] || (t[153] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[51] || (t[51] = (o) => Q.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [w, Q.value]
                    ])
                  ])
                ]),
                e("div", uu, [
                  e("div", ru, [
                    t[154] || (t[154] = e("label", { class: "di-form-label" }, "CC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[52] || (t[52] = (o) => le.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, le.value]
                    ])
                  ]),
                  e("div", cu, [
                    t[155] || (t[155] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[53] || (t[53] = (o) => B.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [w, B.value]
                    ])
                  ])
                ]),
                e("div", vu, [
                  t[156] || (t[156] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[54] || (t[54] = (o) => N.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [w, N.value]
                  ])
                ]),
                e("div", pu, [
                  t[157] || (t[157] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[55] || (t[55] = (o) => $.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [w, $.value]
                  ])
                ]),
                e("div", mu, [
                  t[158] || (t[158] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[56] || (t[56] = (o) => k.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [w, k.value]
                  ])
                ]),
                t[163] || (t[163] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", fu, [
                  e("div", bu, [
                    (n(!0), i(I, null, D(T.value, (o, p) => (n(), i("span", {
                      key: p,
                      class: "di-calc-tag"
                    }, [
                      E(m(o) + " ", 1),
                      e("button", {
                        onClick: fe((x) => Vl(p), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, yu)
                    ]))), 128)),
                    f(e("input", {
                      "onUpdate:modelValue": t[57] || (t[57] = (o) => de.value = o),
                      onKeydown: [
                        t[58] || (t[58] = wt(fe((o) => Sl(), ["prevent"]), ["enter"])),
                        Ml
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [w, de.value]
                    ])
                  ]),
                  t[159] || (t[159] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[164] || (t[164] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", hu, [
                  t[160] || (t[160] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (o) => K.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [w, K.value]
                  ])
                ]),
                e("div", gu, [
                  t[161] || (t[161] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[60] || (t[60] = (o) => De.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [w, De.value]
                  ])
                ]),
                e("div", ku, [
                  t[162] || (t[162] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[61] || (t[61] = (o) => ae.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [w, ae.value]
                  ])
                ])
              ], 64)) : v("", !0),
              V.value === "sort" ? (n(), i(I, { key: 3 }, [
                e("div", xu, [
                  e("span", null, [
                    C(u(Nl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[165] || (t[165] = E(" ソート設定", -1))
                  ])
                ]),
                e("div", wu, [
                  e("label", $u, [
                    f(e("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": t[62] || (t[62] = (o) => Ae.value = o),
                      class: "di-checkbox"
                    }, null, 512), [
                      [Ut, Ae.value]
                    ]),
                    t[166] || (t[166] = E(" このカラムはソート可能 ", -1))
                  ])
                ]),
                Ae.value ? (n(), i(I, { key: 0 }, [
                  e("div", Cu, [
                    e("div", _u, [
                      t[168] || (t[168] = e("label", { class: "di-form-label" }, "データ型", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[63] || (t[63] = (o) => Fe.value = o),
                        class: "di-select"
                      }, [...t[167] || (t[167] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "string" }, "文字列", -1),
                        e("option", { value: "number" }, "数値", -1),
                        e("option", { value: "date" }, "日付", -1),
                        e("option", { value: "custom" }, "カスタム", -1)
                      ])], 512), [
                        [we, Fe.value]
                      ])
                    ]),
                    e("div", Iu, [
                      t[170] || (t[170] = e("label", { class: "di-form-label" }, "デフォルト方向", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[64] || (t[64] = (o) => Ie.value = o),
                        class: "di-select"
                      }, [...t[169] || (t[169] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "asc" }, "昇順 (A→Z, 1→9)", -1),
                        e("option", { value: "desc" }, "降順 (Z→A, 9→1)", -1)
                      ])], 512), [
                        [we, Ie.value]
                      ])
                    ])
                  ]),
                  e("div", Tu, [
                    t[171] || (t[171] = e("label", { class: "di-form-label" }, "ソートキー (DBカラム/APIフィールド)", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[65] || (t[65] = (o) => Ge.value = o),
                      type: "text",
                      placeholder: "users.name / created_at",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [w, Ge.value]
                    ])
                  ]),
                  e("div", Uu, [
                    e("label", Su, [
                      f(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[66] || (t[66] = (o) => Te.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Ut, Te.value]
                      ]),
                      t[172] || (t[172] = E(" 初期表示時のデフォルトソート ", -1))
                    ])
                  ])
                ], 64)) : v("", !0),
                e("div", Vu, [
                  t[173] || (t[173] = e("label", { class: "di-form-label" }, "未ソート時の並び順", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[67] || (t[67] = (o) => L.value = o),
                    type: "text",
                    placeholder: "ID昇順 / 登録日降順 / APIレスポンス順",
                    class: "di-input"
                  }, null, 512), [
                    [w, L.value]
                  ])
                ]),
                e("div", Mu, [
                  t[174] || (t[174] = e("label", { class: "di-form-label" }, "補足", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[68] || (t[68] = (o) => Me.value = o),
                    type: "text",
                    placeholder: "サーバーサイドソート / ページネーション時はリセット",
                    class: "di-input"
                  }, null, 512), [
                    [w, Me.value]
                  ])
                ])
              ], 64)) : v("", !0),
              e("div", Eu, [
                t[175] || (t[175] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[69] || (t[69] = (o) => h.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, h.value]
                ])
              ])
            ], 64)) : v("", !0),
            U.value === "form" ? (n(), i(I, { key: 2 }, [
              e("div", Du, [
                t[177] || (t[177] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[70] || (t[70] = (o) => re.value = o),
                  class: "di-select"
                }, [...t[176] || (t[176] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "text" }, "テキスト (text)", -1),
                  e("option", { value: "number" }, "数値 (number)", -1),
                  e("option", { value: "email" }, "メール (email)", -1),
                  e("option", { value: "password" }, "パスワード (password)", -1),
                  e("option", { value: "tel" }, "電話番号 (tel)", -1),
                  e("option", { value: "url" }, "URL (url)", -1),
                  e("option", { value: "date" }, "日付 (date)", -1),
                  e("option", { value: "datetime-local" }, "日時 (datetime-local)", -1),
                  e("option", { value: "select" }, "セレクト (select)", -1),
                  e("option", { value: "textarea" }, "テキストエリア (textarea)", -1),
                  e("option", { value: "checkbox" }, "チェックボックス (checkbox)", -1),
                  e("option", { value: "radio" }, "ラジオボタン (radio)", -1),
                  e("option", { value: "file" }, "ファイル (file)", -1)
                ])], 512), [
                  [we, re.value]
                ])
              ]),
              te.value.length > 0 ? (n(), i("div", Pu, [
                t[178] || (t[178] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", Bu, [
                  (n(!0), i(I, null, D(te.value, (o, p) => (n(), i("div", {
                    key: p,
                    class: "di-field-tag"
                  }, [
                    e("span", Lu, m(o.table) + "." + m(o.column), 1),
                    o.type ? (n(), i("span", Au, m(o.type), 1)) : v("", !0),
                    e("button", {
                      onClick: (x) => ut(p),
                      class: "di-field-tag-remove"
                    }, "×", 8, Fu)
                  ]))), 128))
                ])
              ])) : v("", !0),
              me.value ? (n(), i("div", Ou, [
                e("div", Nu, [
                  e("label", ju, [
                    C(u(pt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[179] || (t[179] = E(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Hu, [
                    f(e("input", {
                      "onUpdate:modelValue": t[71] || (t[71] = (o) => Ye.value = o),
                      onFocus: t[72] || (t[72] = (o) => S.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [w, Ye.value]
                    ]),
                    Ye.value ? (n(), i("button", {
                      key: 0,
                      onClick: t[73] || (t[73] = (o) => {
                        Ye.value = "", S.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      C(u(Qe), { style: { width: "14px", height: "14px" } })
                    ])) : v("", !0)
                  ]),
                  S.value && ke.value.length > 0 ? (n(), i("div", qu, [
                    (n(!0), i(I, null, D(ke.value, (o) => (n(), i("button", {
                      key: o.fullName,
                      onClick: (p) => je(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", zu, [
                        e("span", Ku, m(o.fullName), 1),
                        e("span", Yu, m(o.type), 1)
                      ]),
                      o.comment ? (n(), i("span", Gu, m(o.comment), 1)) : v("", !0)
                    ], 8, Ru))), 128))
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              Ce.value && (re.value === "select" || re.value === "radio" || re.value === "checkbox") ? (n(), i("div", Xu, [
                e("button", {
                  onClick: Ht,
                  class: z(["di-btn-condition-toggle", { "di-condition-active": ue.value }])
                }, [
                  C(u(Jt), { style: { width: "14px", height: "14px" } }),
                  t[180] || (t[180] = E(" 選択肢を定義 ", -1)),
                  Oe.value ? (n(), i("span", Zu, m(Oe.value.entries.length) + "件", 1)) : v("", !0)
                ], 2),
                ue.value ? (n(), i("div", Ju, [
                  oe.value.length > 0 ? (n(), i("div", Qu, [
                    t[181] || (t[181] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), i(I, null, D(oe.value, (o, p) => (n(), i("div", {
                      key: p,
                      class: "di-master-entry-row"
                    }, [
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.value = x,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, Wu), [
                        [w, o.value]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.label = x,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, er), [
                        [w, o.label]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.color = x,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, tr), [
                        [w, o.color]
                      ]),
                      e("button", {
                        onClick: (x) => Rt(p),
                        class: "di-master-entry-remove"
                      }, "×", 8, lr)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: qt,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : v("", !0)
              ])) : v("", !0),
              e("div", or, [
                e("button", {
                  onClick: t[74] || (t[74] = (o) => ce.value = !ce.value),
                  class: z(["di-btn-condition-toggle", { "di-condition-active": ce.value }])
                }, [
                  C(u(tl), { style: { width: "14px", height: "14px" } }),
                  t[182] || (t[182] = E(" 必須入力 ", -1)),
                  ce.value ? (n(), i("span", sr, "必須")) : v("", !0)
                ], 2)
              ]),
              e("div", nr, [
                t[183] || (t[183] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", ir, [
                  (n(!0), i(I, null, D(F.value, (o, p) => (n(), i("span", {
                    key: p,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    E(m(o) + " ", 1),
                    e("button", {
                      onClick: fe((x) => kl(p), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, ar)
                  ]))), 128)),
                  f(e("input", {
                    "onUpdate:modelValue": t[75] || (t[75] = (o) => X.value = o),
                    onKeydown: [
                      t[76] || (t[76] = wt(fe((o) => gl(), ["prevent"]), ["enter"])),
                      xl
                    ],
                    type: "text",
                    placeholder: F.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, dr), [
                    [w, X.value]
                  ])
                ]),
                t[184] || (t[184] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", ur, [
                t[185] || (t[185] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[77] || (t[77] = (o) => ne.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [w, ne.value]
                ])
              ]),
              e("div", rr, [
                t[186] || (t[186] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[78] || (t[78] = (o) => be.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [w, be.value]
                ])
              ]),
              e("div", cr, [
                t[187] || (t[187] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[79] || (t[79] = (o) => ye.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, ye.value]
                ])
              ]),
              e("div", vr, [
                t[188] || (t[188] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[80] || (t[80] = (o) => h.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [w, h.value]
                ])
              ])
            ], 64)) : v("", !0)
          ]),
          e("div", pr, [
            e("button", {
              onClick: Dt,
              class: "di-btn-delete"
            }, [
              C(u($t), { style: { width: "14px", height: "14px" } }),
              t[189] || (t[189] = E(" 削除 ", -1))
            ]),
            e("div", mr, [
              e("button", {
                onClick: vt,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: ht,
                class: "di-btn-save"
              }, [
                C(u(nl), { style: { width: "14px", height: "14px" } }),
                t[190] || (t[190] = E(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : v("", !0)
    ]));
  }
}), br = /* @__PURE__ */ Et(fr, [["__scopeId", "data-v-9b622171"]]), yr = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, hr = { class: "di-highlight-label" }, gr = ["onClick"], kr = {
  key: 0,
  class: "di-note-label-row"
}, xr = ["onClick"], wr = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, $r = ["onClick"], Cr = { class: "di-analysis-type" }, _r = {
  key: 0,
  class: "di-analysis-tags"
}, Ir = {
  key: 1,
  class: "di-analysis-db"
}, Tr = {
  key: 2,
  class: "di-analysis-api-source"
}, Ur = {
  key: 3,
  class: "di-analysis-conditional"
}, Sr = ["onClick"], Vr = {
  key: 0,
  class: "di-analysis-text"
}, Mr = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, Er = ["onClick"], Dr = {
  key: 0,
  class: "di-unannotated-label-text"
}, Pr = /* @__PURE__ */ _t({
  __name: "DevPickOverlay",
  setup(R) {
    const a = It(), U = y(null), V = y(null), G = y(0), J = y(0), ee = y(0), re = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, ce = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function F(A) {
      return {
        db: "DB",
        form: "フォーム",
        button: "ボタン",
        link: "リンク",
        modal: "モーダル",
        conditional: "条件",
        computed: "計算",
        api: "API",
        other: "その他"
      }[A] || A;
    }
    function X(A) {
      var c, P;
      const _ = a.getElementConfig(A);
      if (_ != null && _.elementType && ce[_.elementType])
        return ce[_.elementType];
      if ((c = _ == null ? void 0 : _.note) != null && c.displayType)
        return re[_.note.displayType] || "#60a5fa";
      if (!(_ != null && _.sourceBinding)) {
        const Q = ((P = _ == null ? void 0 : _.note) == null ? void 0 : P.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[Q] || "#60a5fa";
      }
      return _.sourceBinding.isStatic ? "#10b981" : _.sourceBinding.type === "v-model" ? "#8b5cf6" : _.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function ne(A) {
      var B, N, $, k, T;
      const _ = a.noteHighlightFilter;
      if (_ === "all") return !0;
      const c = a.getElementConfig(A);
      if (!c) return !1;
      const P = (B = c.note) == null ? void 0 : B.displayType, Q = !!((N = c.note) != null && N.condition || ($ = c.note) != null && $.conditionColumn), le = !!((k = c.note) != null && k.storedCalc);
      switch (_) {
        case "db":
          return P === "db_direct" || P === "db_formatted";
        case "calculated":
          return P === "calculated";
        case "storedCalc":
          return le;
        case "static":
          return P === "static";
        case "conditional":
          return Q;
        case "action":
          return c.elementType === "action";
        case "form":
          return c.elementType === "form";
        case "other":
          return P === "other" || !P && !c.elementType && !!((T = c.note) != null && T.text);
        default:
          return !0;
      }
    }
    function be() {
      var Q, le;
      const A = document.querySelector("dialog[open]");
      if (A) return A;
      const _ = document.querySelectorAll('[role="dialog"], [role="alertdialog"]');
      for (const B of _) {
        const N = B.getBoundingClientRect();
        if (N.width > 0 && N.height > 0) return B;
      }
      const c = '.v-overlay--active .v-overlay__content, .el-dialog__wrapper:not([style*="display: none"]) .el-dialog, .modal.show .modal-dialog, .modal-overlay[style*="display: block"], .v-dialog--active';
      try {
        const B = document.querySelector(c);
        if (B) {
          const N = B.getBoundingClientRect();
          if (N.width > 0 && N.height > 0) return B;
        }
      } catch {
      }
      const P = document.querySelectorAll(".fixed.inset-0, .fixed.inset-x-0.inset-y-0, [data-modal], [data-overlay]");
      for (const B of P) {
        if (((Q = B.dataset) == null ? void 0 : Q.devInspector) !== void 0) continue;
        const N = getComputedStyle(B), $ = parseInt(N.zIndex, 10);
        if (isNaN($) || $ < 40) continue;
        const k = B.getBoundingClientRect();
        if (k.width >= window.innerWidth * 0.9 && k.height >= window.innerHeight * 0.9)
          return B;
      }
      for (const B of document.body.children) {
        if (((le = B.dataset) == null ? void 0 : le.devInspector) !== void 0) continue;
        const N = getComputedStyle(B);
        if (N.position !== "fixed") continue;
        const $ = parseInt(N.zIndex, 10);
        if (isNaN($) || $ < 40) continue;
        const k = B.getBoundingClientRect();
        if (k.width >= window.innerWidth * 0.9 && k.height >= window.innerHeight * 0.9)
          return B;
      }
      return null;
    }
    function ye(A, _) {
      return _.contains(A);
    }
    const ie = j(() => {
      var le, B, N, $, k, T, de, K, De, ae, Ae, Fe, Ge, Ie, Te, L, Me, ue, oe, Ce, Oe, O, te, Y, pe, Re, Xe, We, Ee, ge, rt, Ze, et, Ne, tt, lt, Be, ot, Le, ze, ct, st, Je, r, l, s, g;
      const A = G.value, _ = J.value;
      ee.value;
      const c = [];
      if (!a.isEnabled) return c;
      const P = be(), Q = a.getConfiguredSelectors();
      for (const h of Q)
        try {
          const W = document.querySelector(h);
          if (W) {
            if (P && !ye(W, P)) continue;
            const se = W.getBoundingClientRect(), d = a.getElementConfig(h), nt = ((le = d == null ? void 0 : d.sourceBinding) == null ? void 0 : le.isStatic) || !1, Pe = ((B = d == null ? void 0 : d.sourceBinding) == null ? void 0 : B.type) || "";
            let Z = "", xe = "";
            const mt = (N = d == null ? void 0 : d.note) == null ? void 0 : N.displayType, dt = [];
            if (($ = d == null ? void 0 : d.note) != null && $.sampleValue ? dt.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : (k = d == null ? void 0 : d.note) != null && k.unit && dt.push(`単位: ${d.note.unit}`), (T = d == null ? void 0 : d.note) != null && T.decimalHandling) {
              const S = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              dt.push(S[d.note.decimalHandling] || d.note.decimalHandling);
            }
            (de = d == null ? void 0 : d.note) != null && de.nullDisplay && dt.push(`NULL時: ${d.note.nullDisplay}`), (K = d == null ? void 0 : d.note) != null && K.displayFormat && dt.push(d.note.displayFormat);
            const yt = dt.length > 0 ? `
${dt.join(" / ")}` : "", vt = !!((De = d == null ? void 0 : d.note) != null && De.condition || (ae = d == null ? void 0 : d.note) != null && ae.conditionColumn);
            let ft = "";
            if (vt) {
              const S = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, ke = [];
              (Ae = d == null ? void 0 : d.note) != null && Ae.condition && ke.push(d.note.condition), (Fe = d == null ? void 0 : d.note) != null && Fe.conditionColumn && ke.push(`判定: ${d.note.conditionColumn}`), (Ge = d == null ? void 0 : d.note) != null && Ge.hiddenBehavior && ke.push(`不一致時: ${S[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (Ie = d == null ? void 0 : d.note) != null && Ie.hiddenNote && ke.push(`→ ${d.note.hiddenNote}`), ft = `
条件: ${ke.join(" / ")}`;
            }
            const ht = vt ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const S = d.actionInfo;
              S.type === "navigate" ? Z = `遷移: ${S.target || "?"}` : S.type === "api" ? Z = `API: ${S.method || "GET"} ${S.target || "?"}` : S.type === "modal" ? Z = `モーダル: ${S.target || "?"}` : S.type === "emit" ? Z = `イベント: ${S.target || "?"}` : S.type === "function" ? Z = `関数: ${S.target || "?"}` : Z = "アクション", xe = (S.description || Z) + ((Te = d == null ? void 0 : d.note) != null && Te.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const S = d.formInfo, ke = (L = d == null ? void 0 : d.fieldInfoList) != null && L.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], je = ke.length > 0 ? ke.map((bt) => `${bt.table}.${bt.column}`).join(", ") : "", it = ke.length > 0 ? `${ke[0].table}.${ke[0].column}` : "", ut = it ? a.getMasterDefinition(it) : null;
              S.inputType === "select" ? Z = `選択: ${je || S.description || "?"}${ut ? ` (${ut.entries.length}件)` : ""}` : S.inputType === "textarea" ? Z = `テキスト: ${je || S.description || "?"}` : S.inputType === "checkbox" ? Z = `チェック: ${je || S.description || "?"}` : S.inputType === "radio" ? Z = `ラジオ: ${je || S.description || "?"}` : Z = `入力: ${je || S.description || S.inputType || "?"}`, S.required && (Z += " (必須)");
              const me = [];
              S.description && me.push(S.description), (Me = S.validation) != null && Me.length && me.push(`検証: ${S.validation.join(", ")}`), S.placeholder && me.push(`placeholder: ${S.placeholder}`), S.defaultValue && me.push(`初期値: ${S.defaultValue}`), xe = me.join(`
`) + ((ue = d == null ? void 0 : d.note) != null && ue.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              Z = "アクション", xe = ((oe = d == null ? void 0 : d.note) == null ? void 0 : oe.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              Z = "フォーム", xe = ((Ce = d == null ? void 0 : d.note) == null ? void 0 : Ce.text) || "";
            else if (mt === "db_direct") {
              const S = (Oe = d == null ? void 0 : d.fieldInfoList) != null && Oe.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (S.length > 0) {
                const ke = S.map((me) => `${me.table}.${me.column}`).join(", "), je = `${S[0].table}.${S[0].column}`, it = a.getMasterDefinition(je), ut = it ? ` (${it.entries.length}値)` : "";
                Z = `DB: ${ke}${ut}${ht}`, xe = S.map((me) => `${me.table}.${me.column}${me.type ? ` (${me.type})` : ""}`).join(`
`) + yt + ft + ((O = d == null ? void 0 : d.note) != null && O.text ? `
${d.note.text}` : "");
              }
            } else if (mt === "db_formatted") {
              const S = (te = d == null ? void 0 : d.fieldInfoList) != null && te.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (S.length > 0) {
                const ke = S.map((me) => `${me.table}.${me.column}`).join(", "), je = `${S[0].table}.${S[0].column}`, it = a.getMasterDefinition(je), ut = it ? ` (${it.entries.length}値)` : "";
                Z = `DB: ${ke} (整形)${ut}${ht}`, xe = S.map((me) => `${me.table}.${me.column}`).join(`
`) + ((Y = d == null ? void 0 : d.note) != null && Y.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + yt + ft + ((pe = d == null ? void 0 : d.note) != null && pe.text ? `
${d.note.text}` : "");
              }
            } else mt === "calculated" ? (Z = "計算値" + ((Re = d == null ? void 0 : d.note) != null && Re.unit ? ` (${d.note.unit})` : "") + ht, xe = (((Xe = d == null ? void 0 : d.note) == null ? void 0 : Xe.calcDescription) || "計算値") + ((Ee = (We = d == null ? void 0 : d.note) == null ? void 0 : We.calcSources) != null && Ee.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + yt + ft + ((ge = d == null ? void 0 : d.note) != null && ge.text ? `
${d.note.text}` : "")) : mt === "static" ? (Z = "固定" + ht, xe = (((rt = d == null ? void 0 : d.note) == null ? void 0 : rt.text) || "固定文言") + ft) : mt === "other" ? (Z = "メモ", xe = ((Ze = d == null ? void 0 : d.note) == null ? void 0 : Ze.text) || "") : (et = d == null ? void 0 : d.fieldInfoList) != null && et.length || (Ne = d == null ? void 0 : d.fieldInfo) != null && Ne.table && ((tt = d == null ? void 0 : d.fieldInfo) != null && tt.column) ? (Z = `DB: ${((lt = d == null ? void 0 : d.fieldInfoList) != null && lt.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((je) => `${je.table}.${je.column}`).join(", ")}`, xe = ((Be = d == null ? void 0 : d.note) == null ? void 0 : Be.text) || "") : nt ? (Z = "固定", xe = ((ot = d == null ? void 0 : d.note) == null ? void 0 : ot.text) || "固定文言") : Pe === "v-model" ? (Z = "フォーム", xe = ((Le = d == null ? void 0 : d.note) == null ? void 0 : Le.text) || "") : Pe === "api" ? (Z = "データ", xe = ((ze = d == null ? void 0 : d.note) == null ? void 0 : ze.text) || "") : (ct = d == null ? void 0 : d.note) != null && ct.type ? (Z = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", xe = ((st = d == null ? void 0 : d.note) == null ? void 0 : st.text) || "") : (Z = "メモ", xe = ((Je = d == null ? void 0 : d.note) == null ? void 0 : Je.text) || "");
            const Dt = xe || ((r = d == null ? void 0 : d.note) == null ? void 0 : r.text) || "", Pt = ((l = d == null ? void 0 : d.note) == null ? void 0 : l.type) || "info", Ye = !!((s = d == null ? void 0 : d.note) != null && s.text || (g = d == null ? void 0 : d.note) != null && g.displayType);
            c.push({
              selector: h,
              top: `${se.top + A}px`,
              left: `${se.left + _}px`,
              width: `${se.width}px`,
              height: `${se.height}px`,
              color: X(h),
              isStatic: nt,
              label: Z,
              noteText: Dt,
              noteType: Pt,
              hasNote: Ye
            });
          }
        } catch {
        }
      return c;
    }), M = j(() => {
      var Q;
      const A = G.value, _ = J.value;
      ee.value;
      const c = [];
      if (!a.isEnabled || a.scanResults.length === 0) return c;
      const P = be();
      for (const le of a.scanResults)
        try {
          const B = document.querySelector(le.selector);
          if (B) {
            if (P && !ye(B, P)) continue;
            const N = B.getBoundingClientRect();
            c.push({
              selector: le.selector,
              top: `${N.top + A}px`,
              left: `${N.left + _}px`,
              width: `${N.width}px`,
              height: `${N.height}px`,
              isStatic: ((Q = le.detected.sourceBinding) == null ? void 0 : Q.isStatic) || !1
            });
          }
        } catch {
        }
      return c;
    }), he = j(() => {
      var le, B;
      const A = G.value, _ = J.value;
      ee.value;
      const c = [], P = a.analysisFilter;
      if (P === "none" || !a.isEnabled || a.analysisResults.length === 0) return c;
      const Q = be();
      for (const N of a.analysisResults) {
        if (!N.matched) continue;
        const $ = N.element;
        try {
          const k = document.querySelector(N.selector);
          if (!k || Q && !ye(k, Q)) continue;
          const T = k.getBoundingClientRect();
          if (T.width > window.innerWidth * 0.8 || T.height > window.innerHeight * 0.5)
            continue;
          const de = k.querySelector("[data-di-binding]") || (k.hasAttribute("data-di-binding") ? k : null);
          let K = "", De = $.binding || "";
          const ae = [...$.tags || []];
          if (de) {
            const Y = de.getAttribute("data-di-db"), pe = de.getAttribute("data-di-binding");
            Y && (K = Y, ae.includes("db") || ae.push("db")), pe && (De = pe);
          }
          !K && $.db && (K = `${$.db.table}.${$.db.column}`, ae.includes("db") || ae.push("db"));
          let Ae = "";
          $.api && (Ae = `${$.api.method} ${$.api.endpoint}`, ae.includes("api") || ae.push("api"));
          let Fe = "";
          if (De) {
            const Y = a.getApiSourceForBinding(De);
            Y && Y.endpoint ? Fe = `${Y.method || "GET"} ${Y.endpoint}` : Y && Y.composable && (Fe = Y.composable);
          }
          const Ge = (le = $.conditional) == null ? void 0 : le.expression, Ie = (B = $.modal) == null ? void 0 : B.target, Te = !!K || ae.includes("db"), L = !!Ae || ae.includes("api"), Me = ae.includes("form"), ue = ae.includes("button"), oe = ae.includes("link"), Ce = ae.includes("modal"), Oe = ae.includes("conditional"), O = ae.includes("computed");
          if (P === "db-api") {
            if (!Te && !L) continue;
          } else if (P === "form") {
            if (!Me) continue;
          } else if (P === "button") {
            if (!ue) continue;
          } else if (P === "link") {
            if (!oe) continue;
          } else if (P === "modal") {
            if (!Ce) continue;
          } else if (P === "conditional") {
            if (!Oe) continue;
          } else if (P === "computed") {
            if (!O) continue;
          } else if (P === "other" && (Te || L || Me || ue || oe || Ce || Oe || O))
            continue;
          let te = "other";
          Te ? te = "db" : L ? te = "api" : Me ? te = "form" : ue ? te = "button" : oe ? te = "link" : Ce ? te = "modal" : Oe ? te = "conditional" : O && (te = "computed"), c.push({
            selector: N.selector,
            top: `${T.top + A}px`,
            left: `${T.left + _}px`,
            width: `${T.width}px`,
            height: `${T.height}px`,
            tags: ae,
            primaryTag: te,
            text: $.text || De || "",
            dbInfo: K,
            apiInfo: Ae,
            apiSource: Fe,
            conditionalExpr: Ge,
            modalTarget: Ie
          });
        } catch {
        }
      }
      return c;
    }), Ue = j(() => {
      const A = G.value, _ = J.value;
      ee.value;
      const c = [];
      if (!a.isEnabled || !a.showUnannotatedDetection || a.unannotatedElements.length === 0) return c;
      const P = be();
      for (const Q of a.unannotatedElements)
        try {
          const le = document.querySelector(Q.selector);
          if (!le || P && !ye(le, P)) continue;
          const B = le.getBoundingClientRect();
          c.push({
            selector: Q.selector,
            top: `${B.top + A}px`,
            left: `${B.left + _}px`,
            width: `${B.width}px`,
            height: `${B.height}px`,
            category: Q.category,
            text: Q.text
          });
        } catch {
        }
      return c;
    });
    function $e(A) {
      if (!a.isPickMode) return;
      if (A.target.closest("[data-dev-inspector]")) {
        U.value = null, V.value = null, a.setHoveredSelector(null);
        return;
      }
      const c = document.elementFromPoint(A.clientX, A.clientY);
      if (!c || c === document.body || c === document.documentElement) {
        U.value = null, V.value = null, a.setHoveredSelector(null);
        return;
      }
      if (c.closest("[data-dev-inspector]"))
        return;
      V.value = c;
      const P = c.getBoundingClientRect();
      U.value = {
        top: `${P.top + window.scrollY}px`,
        left: `${P.left + window.scrollX}px`,
        width: `${P.width}px`,
        height: `${P.height}px`
      };
      const Q = a.generateSelector(c);
      a.setHoveredSelector(Q);
    }
    function qe(A) {
      if (!(!a.isPickMode || A.target.closest("[data-dev-inspector]")) && (A.preventDefault(), A.stopPropagation(), V.value)) {
        const c = a.generateSelector(V.value);
        if (a.remapTargetId) {
          a.remapAnnotation(a.remapTargetId, c), a.remapTargetId = null, a.togglePickMode(), a.openPanel();
          return;
        }
        a.startEditing(c), a.togglePickMode();
      }
    }
    function ve(A) {
      A.key === "Escape" && a.isPickMode && (a.remapTargetId = null, a.togglePickMode());
    }
    function Se() {
      G.value = window.scrollY, J.value = window.scrollX, ee.value++;
    }
    let Ve = null;
    return ll(() => {
      window.addEventListener("mousemove", $e, !0), window.addEventListener("click", qe, !0), window.addEventListener("keydown", ve), window.addEventListener("scroll", Se), window.addEventListener("resize", Se), Ve = new MutationObserver(() => {
        ee.value++;
      }), Ve.observe(document.body, { childList: !0, subtree: !1 });
    }), Ll(() => {
      window.removeEventListener("mousemove", $e, !0), window.removeEventListener("click", qe, !0), window.removeEventListener("keydown", ve), window.removeEventListener("scroll", Se), window.removeEventListener("resize", Se), Ve == null || Ve.disconnect();
    }), Ct(() => a.isPickMode, (A) => {
      A || (U.value = null, V.value = null);
    }), (A, _) => (n(), Ke(at, { to: "body" }, [
      u(a).isInitializing ? (n(), i("div", yr, [..._[1] || (_[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : v("", !0),
      u(a).isPickMode && U.value ? (n(), i("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: He({
          top: U.value.top,
          left: U.value.left,
          width: U.value.width,
          height: U.value.height
        })
      }, [
        e("div", hr, m(u(a).hoveredSelector), 1)
      ], 4)) : v("", !0),
      u(a).isPickMode ? (n(), i("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: He(u(a).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, m(u(a).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        _[2] || (_[2] = e("kbd", null, "ESC", -1)),
        _[3] || (_[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId ? (n(!0), i(I, { key: 3 }, D(ie.value, (c) => f((n(), i("div", {
        key: c.selector,
        "data-dev-inspector": "",
        class: z([
          c.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": u(a).hoveredSelector === c.selector }
        ]),
        style: He({
          top: c.top,
          left: c.left,
          width: c.width,
          height: c.height,
          borderColor: (c.hasNote, c.color),
          backgroundColor: u(a).hoveredSelector === c.selector ? c.color + "30" : c.color + (c.hasNote ? "18" : "15")
        }),
        onClick: (P) => u(a).startEditing(c.selector)
      }, [
        c.hasNote ? (n(), i("div", kr, [
          e("span", {
            class: "di-note-indicator",
            style: He({ backgroundColor: c.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: He({ backgroundColor: c.color })
          }, m(c.label), 5)
        ])) : (n(), i("div", {
          key: 1,
          class: "di-annotation-label",
          style: He({ backgroundColor: c.color })
        }, m(c.label), 5))
      ], 14, gr)), [
        [kt, !c.hasNote || u(a).showNoteHighlights && ne(c.selector)]
      ])), 128)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && M.value.length > 0 && u(a).analysisResults.length === 0 ? (n(), i(I, { key: 4 }, [
        (n(!0), i(I, null, D(M.value, (c) => (n(), i("div", {
          key: "scan-" + c.selector,
          "data-dev-inspector": "",
          class: z(["di-scan-highlight", { "di-scan-static": c.isStatic }]),
          style: He({
            top: c.top,
            left: c.left,
            width: c.width,
            height: c.height
          }),
          onClick: (P) => u(a).startEditing(c.selector)
        }, [
          e("div", {
            class: z(["di-scan-label", { "di-scan-label-static": c.isStatic }])
          }, m(c.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, xr))), 128)),
        e("div", wr, [
          e("span", null, m(M.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: _[0] || (_[0] = (c) => u(a).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && he.value.length > 0 ? (n(), i(I, { key: 5 }, [
        (n(!0), i(I, null, D(he.value, (c) => (n(), i("div", {
          key: "analysis-" + c.selector,
          "data-dev-inspector": "",
          class: z(["di-analysis-highlight", "di-analysis-" + c.primaryTag]),
          style: He({
            top: c.top,
            left: c.left,
            width: c.width,
            height: c.height
          }),
          onClick: (P) => u(a).startEditing(c.selector)
        }, [
          e("div", {
            class: z(["di-analysis-label", "di-analysis-label-" + c.primaryTag])
          }, [
            e("span", Cr, m(F(c.primaryTag)), 1),
            c.tags.length > 1 ? (n(), i("span", _r, "+" + m(c.tags.length - 1), 1)) : v("", !0),
            c.dbInfo ? (n(), i("span", Ir, m(c.dbInfo), 1)) : v("", !0),
            c.apiSource ? (n(), i("span", Tr, "← " + m(c.apiSource), 1)) : v("", !0),
            c.conditionalExpr ? (n(), i("span", Ur, m(c.conditionalExpr), 1)) : v("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: fe((P) => u(a).removeAnalysisResult(c.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Sr)
          ], 2),
          c.text && c.text.length < 30 ? (n(), i("div", Vr, m(c.text), 1)) : v("", !0)
        ], 14, $r))), 128)),
        e("div", Mr, [
          e("span", null, "📊 分析データ: " + m(he.value.length) + "件の要素", 1)
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId && Ue.value.length > 0 ? (n(!0), i(I, { key: 6 }, D(Ue.value, (c) => (n(), i("div", {
        key: "unannotated-" + c.selector,
        "data-dev-inspector": "",
        class: z(["di-unannotated-highlight", {
          "di-unannotated-hovered": u(a).hoveredUnannotatedSelector === c.selector,
          ["di-unannotated-hovered-" + c.category]: u(a).hoveredUnannotatedSelector === c.selector
        }]),
        style: He({
          top: c.top,
          left: c.left,
          width: c.width,
          height: c.height
        }),
        onClick: (P) => u(a).quickAnnotate(c.selector, c.category === "form" ? "form" : c.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: z(["di-unannotated-label", { ["di-unannotated-label-" + c.category]: u(a).hoveredUnannotatedSelector === c.selector }])
        }, [
          e("span", null, m(c.category === "binding" ? "DB" : c.category === "form" ? "Form" : "Act"), 1),
          c.text ? (n(), i("span", Dr, m(c.text), 1)) : v("", !0)
        ], 2)
      ], 14, Er))), 128)) : v("", !0)
    ]));
  }
}), Br = /* @__PURE__ */ Et(Pr, [["__scopeId", "data-v-2d23ecdd"]]), Lr = { class: "di-editor-modal" }, Ar = { class: "di-editor-header" }, Fr = { class: "di-header-actions" }, Or = { class: "di-path-badge" }, Nr = { class: "di-editor-content" }, jr = { class: "di-form-group" }, Hr = { class: "di-form-group" }, qr = { class: "di-form-section" }, Rr = { class: "di-form-section-header" }, zr = { class: "di-api-header-actions" }, Kr = { class: "di-dropdown-wrapper" }, Yr = {
  key: 1,
  class: "di-suggestion-dropdown"
}, Gr = {
  key: 0,
  class: "di-suggestion-actions"
}, Xr = ["onMousedown", "disabled"], Zr = { class: "di-suggestion-endpoint" }, Jr = {
  key: 0,
  class: "di-suggestion-timing"
}, Qr = {
  key: 1,
  class: "di-suggestion-empty"
}, Wr = {
  key: 0,
  class: "di-suggestion-banner"
}, ec = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, tc = {
  key: 2,
  class: "di-empty-hint"
}, lc = { class: "di-api-entry-row" }, oc = ["onUpdate:modelValue"], sc = ["value"], nc = ["onUpdate:modelValue"], ic = ["onClick"], ac = { class: "di-api-entry-row2" }, dc = ["onUpdate:modelValue"], uc = ["onUpdate:modelValue"], rc = ["value"], cc = { class: "di-form-section" }, vc = { class: "di-auth-row" }, pc = {
  key: 0,
  class: "di-auth-details"
}, mc = { class: "di-form-group" }, fc = { class: "di-form-group" }, bc = { class: "di-form-group" }, yc = { class: "di-form-group" }, hc = { class: "di-editor-footer" }, gc = { class: "di-editor-actions" }, kc = ["disabled"], xc = /* @__PURE__ */ _t({
  __name: "DevScreenEditor",
  setup(R) {
    const a = It(), U = y(""), V = y(""), G = y([]), J = y(!1), ee = y(""), re = y(""), ce = y(""), F = y(""), X = y(!1), ne = y([]), be = y(!1), ye = j(() => typeof window < "u" ? window.location.pathname : "/");
    Ct(() => a.editingScreen, ($) => {
      $ && ie();
    });
    function ie() {
      var k, T, de, K;
      const $ = a.getScreenConfig();
      $ ? (U.value = $.name, V.value = $.description || "", G.value = $.apis.map((De) => ({ ...De })), J.value = ((k = $.auth) == null ? void 0 : k.required) || !1, ee.value = ((de = (T = $.auth) == null ? void 0 : T.roles) == null ? void 0 : de.join(", ")) || "", re.value = ((K = $.auth) == null ? void 0 : K.description) || "", ce.value = $.figmaUrl || "", F.value = $.notes || "") : M();
    }
    function M() {
      U.value = "", V.value = "", G.value = [], J.value = !1, ee.value = "", re.value = "", ce.value = "", F.value = "";
    }
    function he() {
      a.editingScreen = !1, M();
    }
    function Ue() {
      G.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function $e($) {
      G.value.splice($, 1);
    }
    function qe() {
      if (!U.value.trim()) return;
      const $ = {
        path: ye.value,
        name: U.value.trim(),
        description: V.value.trim() || void 0,
        apis: G.value.filter((k) => k.endpoint.trim()),
        auth: J.value || ee.value.trim() ? {
          required: J.value,
          roles: ee.value.trim() ? ee.value.split(",").map((k) => k.trim()).filter(Boolean) : void 0,
          description: re.value.trim() || void 0
        } : void 0,
        figmaUrl: ce.value.trim() || void 0,
        notes: F.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setScreenConfig($), he();
    }
    function ve() {
      a.deleteScreenConfig(ye.value), he();
    }
    const Se = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, Ve = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function A() {
      ne.value = a.suggestScreenApis(), X.value = !0;
    }
    function _($) {
      return G.value.some(
        (k) => k.method === $.method && k.endpoint === $.endpoint
      );
    }
    const c = j(() => ne.value.filter(($) => !_($)));
    function P($) {
      _($) || G.value.push({ ...$ });
    }
    function Q() {
      for (const $ of c.value)
        G.value.push({ ...$ });
    }
    function le() {
      setTimeout(() => {
        be.value = !1;
      }, 150);
    }
    const B = ["GET", "POST", "PUT", "DELETE", "PATCH"], N = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return ($, k) => (n(), Ke(at, { to: "body" }, [
      u(a).editingScreen ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: fe(he, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Lr, [
          e("div", Ar, [
            k[9] || (k[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Fr, [
              e("span", Or, m(ye.value), 1),
              e("button", {
                onClick: he,
                class: "di-editor-close"
              }, [
                C(u(Qe), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", Nr, [
            e("div", jr, [
              k[10] || (k[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              f(e("input", {
                "onUpdate:modelValue": k[0] || (k[0] = (T) => U.value = T),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [w, U.value]
              ])
            ]),
            e("div", Hr, [
              k[11] || (k[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": k[1] || (k[1] = (T) => V.value = T),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [w, V.value]
              ])
            ]),
            e("div", qr, [
              e("div", Rr, [
                k[15] || (k[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", zr, [
                  e("button", {
                    onClick: A,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    C(u(Mt), { style: { width: "13px", height: "13px" } }),
                    k[12] || (k[12] = E(" 自動推定 ", -1))
                  ]),
                  e("div", Kr, [
                    ne.value.length > 0 ? (n(), i("button", {
                      key: 0,
                      onClick: k[2] || (k[2] = (T) => be.value = !be.value),
                      onBlur: k[3] || (k[3] = (T) => le()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      C(u(ol), { style: { width: "13px", height: "13px" } }),
                      k[13] || (k[13] = E(" 候補から選択 ", -1))
                    ], 32)) : v("", !0),
                    be.value && ne.value.length > 0 ? (n(), i("div", Yr, [
                      c.value.length > 0 ? (n(), i("div", Gr, [
                        e("button", {
                          onMousedown: fe(Q, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + m(c.value.length) + ") ", 33)
                      ])) : v("", !0),
                      (n(!0), i(I, null, D(ne.value, (T, de) => (n(), i("button", {
                        key: de,
                        onMousedown: fe((K) => P(T), ["prevent"]),
                        class: z(["di-suggestion-item", { "di-suggestion-added": _(T) }]),
                        disabled: _(T)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: He({ backgroundColor: Se[T.method] + "20", color: Se[T.method] })
                        }, m(T.method), 5),
                        e("code", Zr, m(T.endpoint), 1),
                        T.loadTiming ? (n(), i("span", Jr, m(Ve[T.loadTiming] || T.loadTiming), 1)) : v("", !0),
                        _(T) ? (n(), Ke(u(jl), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : v("", !0)
                      ], 42, Xr))), 128)),
                      ne.value.length === 0 ? (n(), i("div", Qr, " 推定結果がありません ")) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  e("button", {
                    onClick: Ue,
                    class: "di-btn-add"
                  }, [
                    C(u(xt), { style: { width: "14px", height: "14px" } }),
                    k[14] || (k[14] = E(" 手動追加 ", -1))
                  ])
                ])
              ]),
              X.value && ne.value.length > 0 && c.value.length > 0 ? (n(), i("div", Wr, [
                C(u(Mt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, m(ne.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: fe(Q, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : X.value && ne.value.length === 0 ? (n(), i("div", ec, [...k[16] || (k[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : v("", !0),
              G.value.length === 0 && !X.value ? (n(), i("div", tc, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : v("", !0),
              (n(!0), i(I, null, D(G.value, (T, de) => (n(), i("div", {
                key: de,
                class: "di-api-entry"
              }, [
                e("div", lc, [
                  f(e("select", {
                    "onUpdate:modelValue": (K) => T.method = K,
                    class: "di-select di-select-method"
                  }, [
                    (n(), i(I, null, D(B, (K) => e("option", {
                      key: K,
                      value: K
                    }, m(K), 9, sc)), 64))
                  ], 8, oc), [
                    [we, T.method]
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": (K) => T.endpoint = K,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, nc), [
                    [w, T.endpoint]
                  ]),
                  e("button", {
                    onClick: (K) => $e(de),
                    class: "di-btn-remove"
                  }, [
                    C(u(Wl), { style: { width: "14px", height: "14px" } })
                  ], 8, ic)
                ]),
                e("div", ac, [
                  f(e("input", {
                    "onUpdate:modelValue": (K) => T.description = K,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, dc), [
                    [w, T.description]
                  ]),
                  f(e("select", {
                    "onUpdate:modelValue": (K) => T.loadTiming = K,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), i(I, null, D(N, (K) => e("option", {
                      key: K.value,
                      value: K.value
                    }, m(K.label), 9, rc)), 64))
                  ], 8, uc), [
                    [we, T.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", cc, [
              k[20] || (k[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", vc, [
                e("button", {
                  onClick: k[4] || (k[4] = (T) => J.value = !J.value),
                  class: z(["di-toggle-btn", { active: J.value }])
                }, [
                  e("span", {
                    class: z(["di-toggle-knob", { active: J.value }])
                  }, null, 2)
                ], 2),
                k[17] || (k[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              J.value ? (n(), i("div", pc, [
                e("div", mc, [
                  k[18] || (k[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": k[5] || (k[5] = (T) => ee.value = T),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [w, ee.value]
                  ])
                ]),
                e("div", fc, [
                  k[19] || (k[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": k[6] || (k[6] = (T) => re.value = T),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [w, re.value]
                  ])
                ])
              ])) : v("", !0)
            ]),
            e("div", bc, [
              k[21] || (k[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              f(e("input", {
                "onUpdate:modelValue": k[7] || (k[7] = (T) => ce.value = T),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [w, ce.value]
              ])
            ]),
            e("div", yc, [
              k[22] || (k[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": k[8] || (k[8] = (T) => F.value = T),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [w, F.value]
              ])
            ])
          ]),
          e("div", hc, [
            e("button", {
              onClick: ve,
              class: "di-btn-delete"
            }, [
              C(u($t), { style: { width: "14px", height: "14px" } }),
              k[23] || (k[23] = E(" 削除 ", -1))
            ]),
            e("div", gc, [
              e("button", {
                onClick: he,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: qe,
                class: "di-btn-save",
                disabled: !U.value.trim()
              }, [
                C(u(nl), { style: { width: "14px", height: "14px" } }),
                k[24] || (k[24] = E(" 保存 ", -1))
              ], 8, kc)
            ])
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), wc = /* @__PURE__ */ Et(xc, [["__scopeId", "data-v-a3b58e7a"]]), $c = {
  key: 0,
  "data-dev-inspector": ""
}, Cc = /* @__PURE__ */ _t({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {},
    analysisData: {},
    analysisDataUrl: {},
    autoLoadAnalysis: { type: Boolean },
    autoApplyAnalysis: { type: Boolean }
  },
  setup(R) {
    const a = R, U = It();
    return ll(() => {
      U.init({
        storageKey: a.storageKey,
        enabledInProduction: a.enabledInProduction,
        initialAnnotations: a.initialAnnotations
      });
    }), (V, G) => u(U).isAvailable ? (n(), i("div", $c, [
      C(Ri),
      C(br),
      C(wc),
      C(Br)
    ])) : v("", !0);
  }
}), Tc = {
  install(R, a = {}) {
    const { autoRegister: U = !0, ...V } = a;
    U && R.component("DevInspector", Cc), R.provide("devInspectorOptions", V);
  }
};
export {
  br as DevElementEditor,
  Cc as DevInspector,
  Ri as DevPanel,
  Br as DevPickOverlay,
  wc as DevScreenEditor,
  Tc as VueDevInspector,
  Tc as default,
  Vc as useDevInspector,
  It as useDevInspectorStore,
  Ec as vitePluginDevInspector
};
