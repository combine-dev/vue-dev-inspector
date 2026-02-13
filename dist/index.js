import { h as Ot, defineComponent as xt, ref as b, computed as H, watch as kt, openBlock as n, createElementBlock as i, Fragment as _, createBlock as Oe, Teleport as it, unref as u, createVNode as w, createCommentVNode as v, createElementVNode as e, normalizeClass as z, toDisplayString as p, withDirectives as f, renderList as P, createTextVNode as D, vShow as mt, normalizeStyle as Be, vModelText as g, withModifiers as be, vModelSelect as _e, withKeys as yt, resolveDynamicComponent as Il, vModelCheckbox as Nt, onMounted as Xt, onUnmounted as Tl } from "vue";
import { u as wt } from "./useDevInspector-CgLC4r6d.js";
import { a as lc } from "./useDevInspector-CgLC4r6d.js";
import { default as sc } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var _t = {
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
const Ul = (q) => q.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), R = (q, a) => ({ size: I, strokeWidth: T = 2, absoluteStrokeWidth: Y, color: J, class: oe, ...ce }, { attrs: pe, slots: N }) => Ot(
  "svg",
  {
    ..._t,
    width: I || _t.width,
    height: I || _t.height,
    stroke: J || _t.stroke,
    "stroke-width": Y ? Number(T) * 24 / Number(I) : T,
    ...pe,
    class: ["lucide", `lucide-${Ul(q)}`],
    ...ce
  },
  [
    ...a.map((K) => Ot(...K)),
    ...N.default ? [N.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = R("AlertCircleIcon", [
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
const Sl = R("AlertTriangleIcon", [
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
const jt = R("CalculatorIcon", [
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
const Ml = R("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = R("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = R("ChevronUpIcon", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = R("ClipboardListIcon", [
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
const Ht = R("ClockIcon", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = R("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = R("DatabaseIcon", [
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
const Vt = R("DownloadIcon", [
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
const Pl = R("ExternalLinkIcon", [
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
const Bl = R("EyeOffIcon", [
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
const Ll = R("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = R("FileSpreadsheetIcon", [
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
const It = R("FileTextIcon", [
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
const Al = R("FormInputIcon", [
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
const Fl = R("GitBranchIcon", [
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
const Ol = R("GitMergeIcon", [
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
const Rt = R("ListIcon", [
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
const Nl = R("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = R("MailIcon", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = R("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = R("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = R("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = R("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = R("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = R("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = R("SaveIcon", [
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
const Rl = R("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = R("ServerIcon", [
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
const Gt = R("ShieldQuestionIcon", [
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
const Yl = R("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = R("Trash2Icon", [
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
const Kl = R("TypeIcon", [
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
const Gl = R("UploadIcon", [
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
const Tt = R("Wand2Icon", [
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
const Ze = R("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = R("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function Jl(q, a, I = {}) {
  var W;
  const T = await import("./xlsx-BopDBbWb.js"), { systemName: Y = "System", author: J = "" } = I, oe = /* @__PURE__ */ new Date(), ce = `${oe.getFullYear()}/${oe.getMonth() + 1}/${oe.getDate()}`, pe = T.utils.book_new(), N = [];
  N.push([
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
    Y,
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
    (q == null ? void 0 : q.name) || "",
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
    ce
  ]), N.push([]), N.push([
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
    (q == null ? void 0 : q.componentPath) || "",
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
    (q == null ? void 0 : q.figmaUrl) || ""
  ]), N.push([]), N.push(["機能概要"]), N.push([(q == null ? void 0 : q.description) || ""]), N.push([]), N.push(["画面レイアウト　figmaURL"]), N.push([(q == null ? void 0 : q.figmaUrl) || ""]), N.push([]), q != null && q.apis && q.apis.length > 0 && (N.push(["API一覧"]), N.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), q.apis.forEach((V) => {
    N.push(["", V.method, "", V.endpoint, "", "", "", "", "", "", "", V.description]);
  }), N.push([])), N.push(["画面項目　ヘッダーフッターは省く"]), N.push([
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
  ]), Object.values(a).forEach((V, Ie) => {
    var U, c, S;
    const Le = V.id;
    let ke = "", Ve = "", L = "";
    if ((U = V.note) != null && U.text && (ke = V.note.text), V.fieldInfo && (ke += ke ? `
` : "", ke += `DB: ${V.fieldInfo.table}.${V.fieldInfo.column}`, V.fieldInfo.type && (ke += ` (${V.fieldInfo.type})`), V.fieldInfo.description && (ke += `
${V.fieldInfo.description}`)), V.actionInfo && (L = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行",
      csv_export: "CSV出力",
      csv_import: "CSV取込",
      email: "メール送信"
    }[V.actionInfo.type] || V.actionInfo.type}]`, V.actionInfo.target && (L += ` ${V.actionInfo.method || ""} ${V.actionInfo.target}`), V.actionInfo.description && (L += `
${V.actionInfo.description}`)), V.links) {
      const B = [];
      V.links.testPath && B.push(`テスト: ${V.links.testPath}`), V.links.figmaUrl && B.push(`Figma: ${V.links.figmaUrl}`), V.links.githubIssue && B.push(`Issue: ${V.links.githubIssue}`), V.links.githubPr && B.push(`PR: ${V.links.githubPr}`), B.length > 0 && (L += L ? `

` : "", L += B.join(`
`));
    }
    if (V.devMeta) {
      const B = [];
      (c = V.devMeta.usedStores) != null && c.length && B.push(`Store: ${V.devMeta.usedStores.join(", ")}`), (S = V.devMeta.usedComponents) != null && S.length && B.push(`Components: ${V.devMeta.usedComponents.join(", ")}`), V.devMeta.accessibility && B.push(`A11y: ${V.devMeta.accessibility}`), V.devMeta.responsive && B.push(`Responsive: ${V.devMeta.responsive}`), B.length > 0 && (L += L ? `

` : "", L += `[開発情報]
` + B.join(`
`));
    }
    N.push([
      "",
      Ie + 1,
      "",
      Le,
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
      ke,
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
      Ve,
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
      L
    ]);
  });
  const de = T.utils.aoa_to_sheet(N);
  de["!cols"] = [
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
  ], T.utils.book_append_sheet(pe, de, "画面設計書");
  const ge = `画面仕様書_${((W = q == null ? void 0 : q.name) == null ? void 0 : W.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${ce.replace(/\//g, "")}.xlsx`;
  return T.writeFile(pe, ge), ge;
}
const Zl = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, Ql = { class: "di-header" }, Wl = { class: "di-header-title" }, eo = { class: "di-tab-bar" }, to = {
  key: 0,
  class: "di-tab-badge"
}, lo = {
  key: 0,
  class: "di-tab-badge"
}, oo = {
  key: 0,
  class: "di-tab-badge"
}, so = { class: "di-edit-section" }, no = { class: "di-note-toggle-badge" }, io = {
  key: 1,
  class: "di-note-filter"
}, ao = { class: "di-filter-buttons" }, uo = ["onClick"], ro = {
  key: 2,
  class: "di-element-list-section"
}, co = { class: "di-element-list-header" }, vo = { class: "di-count-badge" }, po = { key: 0 }, mo = { class: "di-element-list" }, fo = ["onClick", "onMouseenter"], bo = { class: "di-element-item-body" }, ho = { class: "di-element-item-label" }, yo = {
  key: 0,
  class: "di-unannotated-badge"
}, go = {
  key: 3,
  class: "di-unannotated-results"
}, ko = { class: "di-unannotated-summary" }, xo = { key: 0 }, wo = { key: 1 }, $o = { key: 2 }, Co = { class: "di-unannotated-list" }, _o = ["onMouseenter"], Io = { class: "di-unannotated-text" }, To = ["onClick"], Uo = ["onClick"], Vo = {
  key: 4,
  class: "di-unannotated-empty"
}, So = {
  key: 5,
  class: "di-broken-warning"
}, Mo = { class: "di-broken-header" }, Eo = { class: "di-broken-list" }, Do = { class: "di-broken-item-info" }, Po = { class: "di-broken-item-note" }, Bo = { class: "di-broken-item-selector" }, Lo = { class: "di-broken-item-actions" }, Ao = ["onClick"], Fo = ["onClick"], Oo = { class: "di-broken-actions" }, No = { class: "di-content" }, jo = { class: "di-section" }, Ho = { class: "di-screen-header" }, qo = { class: "di-screen-name" }, Ro = {
  key: 0,
  class: "di-screen-desc"
}, zo = {
  key: 1,
  class: "di-auth-badges"
}, Yo = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, Ko = {
  key: 1,
  class: "di-auth-note"
}, Go = {
  key: 0,
  class: "di-card"
}, Xo = { class: "di-card-label" }, Jo = { class: "di-code-blue" }, Zo = {
  key: 1,
  class: "di-card"
}, Qo = { class: "di-card-label" }, Wo = ["href"], es = {
  key: 2,
  class: "di-card"
}, ts = { class: "di-card-label" }, ls = { class: "di-api-list" }, os = { class: "di-api-info" }, ss = { class: "di-api-endpoint" }, ns = {
  key: 0,
  class: "di-api-desc"
}, is = {
  key: 0,
  class: "di-api-timing-badge"
}, as = {
  key: 3,
  class: "di-card"
}, ds = { class: "di-card-label" }, us = { class: "di-screen-notes" }, rs = {
  key: 1,
  class: "di-no-spec"
}, cs = { class: "di-card di-cross-search-section" }, vs = { class: "di-cross-search-header" }, ps = { class: "di-cross-search-body" }, ms = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, fs = ["onClick"], bs = ["placeholder"], hs = {
  key: 0,
  class: "di-cross-search-count"
}, ys = {
  key: 1,
  class: "di-cross-search-results"
}, gs = { class: "di-cross-search-page-header" }, ks = {
  key: 0,
  class: "di-cross-search-page-name"
}, xs = ["onClick"], ws = { class: "di-cross-search-field" }, $s = {
  key: 0,
  class: "di-cross-search-context"
}, Cs = { class: "di-card di-screen-flow-section" }, _s = {
  key: 0,
  class: "di-screen-flow-badge"
}, Is = {
  key: 0,
  class: "di-screen-flow-body"
}, Ts = {
  key: 0,
  class: "di-screen-flow-empty"
}, Us = { class: "di-flow-node-path" }, Vs = {
  key: 0,
  class: "di-flow-node-name"
}, Ss = ["onClick"], Ms = { class: "di-flow-target" }, Es = {
  key: 0,
  class: "di-flow-edge-label"
}, Ds = {
  key: 1,
  class: "di-flow-orphans"
}, Ps = { class: "di-section" }, Bs = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, Ls = {
  key: 0,
  class: "di-section-badge"
}, As = { class: "di-master-table-name" }, Fs = ["onClick"], Os = { class: "di-master-item-header" }, Ns = { class: "di-master-col-name" }, js = {
  key: 0,
  class: "di-master-col-type"
}, Hs = { class: "di-master-item-name" }, qs = { class: "di-master-entries-preview" }, Rs = {
  key: 0,
  class: "di-master-entry-more"
}, zs = { class: "di-master-editor" }, Ys = { class: "di-master-editor-header" }, Ks = { class: "di-master-editor-body" }, Gs = { class: "di-master-row" }, Xs = { class: "di-master-field" }, Js = ["disabled"], Zs = { class: "di-master-field" }, Qs = ["disabled"], Ws = { class: "di-master-row" }, en = { class: "di-master-field" }, tn = { class: "di-master-field" }, ln = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, on = { class: "di-master-entries-header" }, sn = { class: "di-master-entries-list" }, nn = ["onUpdate:modelValue"], an = ["onUpdate:modelValue"], dn = ["onUpdate:modelValue"], un = ["onUpdate:modelValue"], rn = ["onClick"], cn = {
  class: "di-master-entries-header",
  style: { "margin-top": "16px" }
}, vn = {
  key: 0,
  class: "di-master-entries-list"
}, pn = ["onUpdate:modelValue"], mn = ["value"], fn = ["onUpdate:modelValue"], bn = ["value"], hn = ["onUpdate:modelValue"], yn = ["onUpdate:modelValue"], gn = ["onClick"], kn = {
  key: 1,
  class: "di-master-empty",
  style: { "margin-top": "4px", "font-size": "11px" }
}, xn = { class: "di-master-editor-footer" }, wn = ["disabled"], $n = { class: "di-section" }, Cn = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, _n = {
  key: 0,
  class: "di-section-badge"
}, In = ["onClick"], Tn = { class: "di-batch-item-info" }, Un = { class: "di-batch-item-name" }, Vn = {
  key: 0,
  class: "di-batch-item-schedule"
}, Sn = { class: "di-batch-editor" }, Mn = { class: "di-batch-editor-header" }, En = { class: "di-batch-editor-body" }, Dn = { class: "di-batch-row" }, Pn = { class: "di-batch-field" }, Bn = { class: "di-batch-field" }, Ln = { class: "di-batch-row" }, An = { class: "di-batch-field" }, Fn = {
  class: "di-batch-field",
  style: { "margin-bottom": "12px" }
}, On = { class: "di-batch-row" }, Nn = { class: "di-batch-field" }, jn = { class: "di-batch-tags-input" }, Hn = ["onClick"], qn = { class: "di-batch-field" }, Rn = { class: "di-batch-tags-input" }, zn = ["onClick"], Yn = { class: "di-batch-section-label" }, Kn = { key: 0 }, Gn = { class: "di-batch-step-no" }, Xn = ["onUpdate:modelValue"], Jn = ["onUpdate:modelValue"], Zn = ["onUpdate:modelValue"], Qn = ["onUpdate:modelValue"], Wn = ["onClick"], ei = { class: "di-batch-row" }, ti = { class: "di-batch-field" }, li = { class: "di-batch-field" }, oi = { class: "di-batch-row" }, si = { class: "di-batch-field" }, ni = { class: "di-batch-field" }, ii = { class: "di-batch-editor-footer" }, ai = ["disabled"], di = { class: "di-export-buttons" }, ui = { class: "di-action-buttons" }, ri = {
  key: 0,
  class: "di-export-summary"
}, ci = { class: "di-export-summary-row" }, vi = { class: "di-export-summary-count" }, pi = { class: "di-export-summary-row" }, mi = { class: "di-export-summary-count" }, fi = { class: "di-export-summary-row" }, bi = { class: "di-export-summary-count" }, hi = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, yi = { class: "di-modal" }, gi = ["value"], ki = { class: "di-modal-actions" }, xi = { class: "di-modal" }, wi = { class: "di-file-drop" }, $i = {
  key: 0,
  class: "di-error"
}, Ci = { class: "di-modal-actions" }, _i = ["disabled"], Ii = /* @__PURE__ */ xt({
  __name: "DevPanel",
  setup(q) {
    const a = wt(), I = b("elements"), T = b(!1), Y = b(!1), J = b(""), oe = b(""), ce = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, pe = H(() => a.currentScreenSpec), N = H(() => a.getScreenConfig()), K = H(() => {
      var s;
      const r = N.value, l = pe.value;
      return !r && !l ? null : {
        name: (r == null ? void 0 : r.name) || (l == null ? void 0 : l.name) || "",
        description: (r == null ? void 0 : r.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (r == null ? void 0 : r.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (r == null ? void 0 : r.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (r == null ? void 0 : r.apis) || ((s = l == null ? void 0 : l.apis) == null ? void 0 : s.map((h) => ({ ...h, loadTiming: void 0 }))) || [],
        auth: (r == null ? void 0 : r.auth) || null,
        notes: (r == null ? void 0 : r.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), de = H(() => Object.keys(a.elementConfigs).length), xe = H(() => {
      const r = typeof window < "u" ? window.location.pathname : "/";
      return Object.entries(a.elementConfigs).filter(([, l]) => !l.pagePath || l.pagePath === r).map(([l, s]) => {
        var k, Q, d;
        let h = "";
        return (k = s.note) != null && k.text ? h = s.note.text : s.fieldInfo ? h = `${s.fieldInfo.table}.${s.fieldInfo.column}` : (Q = s.actionInfo) != null && Q.description ? h = s.actionInfo.description : (d = s.actionInfo) != null && d.type ? (h = { navigate: "画面遷移", api: "API", modal: "モーダル", emit: "イベント", function: "関数", csv_export: "CSV出力", csv_import: "CSV取込", email: "メール送信" }[s.actionInfo.type] || s.actionInfo.type, s.actionInfo.target && (h += ` → ${s.actionInfo.target}`)) : s.formInfo && (h = s.formInfo.label || s.formInfo.inputType || "フォーム"), h || (h = l), { id: l, desc: h, type: s.elementType, config: s };
      });
    }), ge = H(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? xe.value : xe.value.filter((l) => {
        var d, Xe, st, X, re;
        const s = l.config, h = (d = s.note) == null ? void 0 : d.displayType, k = !!((Xe = s.note) != null && Xe.condition || (st = s.note) != null && st.conditionColumn), Q = !!((X = s.note) != null && X.storedCalc);
        switch (r) {
          case "db":
            return h === "db_direct" || h === "db_formatted";
          case "calculated":
            return h === "calculated";
          case "storedCalc":
            return Q;
          case "static":
            return h === "static";
          case "conditional":
            return k;
          case "action":
            return s.elementType === "action";
          case "form":
            return s.elementType === "form";
          case "other":
            return h === "other" || !h && !s.elementType && !!((re = s.note) != null && re.text);
          default:
            return !0;
        }
      });
    }), W = H(() => Object.values(a.elementConfigs).filter((r) => {
      var l, s;
      return !!((l = r.note) != null && l.text || (s = r.note) != null && s.displayType);
    }).length), V = H(() => {
      const r = a.noteHighlightFilter;
      return r === "all" ? W.value : Object.values(a.elementConfigs).filter((l) => {
        var Q, d, Xe, st, X, re, Fe;
        if (!((Q = l.note) != null && Q.text || (d = l.note) != null && d.displayType || l.elementType)) return !1;
        const s = (Xe = l.note) == null ? void 0 : Xe.displayType, h = !!((st = l.note) != null && st.condition || (X = l.note) != null && X.conditionColumn), k = !!((re = l.note) != null && re.storedCalc);
        switch (r) {
          case "db":
            return s === "db_direct" || s === "db_formatted";
          case "calculated":
            return s === "calculated";
          case "storedCalc":
            return k;
          case "static":
            return s === "static";
          case "conditional":
            return h;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return s === "other" || !s && !l.elementType && !!((Fe = l.note) != null && Fe.text);
          default:
            return !0;
        }
      }).length;
    });
    function Ie() {
      const r = a.exportConfigs();
      navigator.clipboard.writeText(r), T.value = !1;
    }
    function Le() {
      const r = a.exportConfigs(), l = new Blob([r], { type: "application/json" }), s = URL.createObjectURL(l), h = document.createElement("a");
      h.href = s, h.download = "dev-mode-configs.json", h.click(), URL.revokeObjectURL(s), T.value = !1;
    }
    function ke() {
      a.downloadAnnotations();
    }
    async function Ve() {
      try {
        await Jl(
          a.currentScreenSpec,
          a.elementConfigs,
          { systemName: "System" }
        );
      } catch (r) {
        console.error("Failed to export xlsx:", r), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function L() {
      try {
        a.importConfigs(J.value), J.value = "", oe.value = "", Y.value = !1;
      } catch {
        oe.value = "JSONの形式が正しくありません";
      }
    }
    function U(r) {
      var k;
      const s = (k = r.target.files) == null ? void 0 : k[0];
      if (!s) return;
      const h = new FileReader();
      h.onload = (Q) => {
        var d;
        J.value = (d = Q.target) == null ? void 0 : d.result;
      }, h.readAsText(s);
    }
    function c() {
      confirm("すべての要素設定を削除しますか？") && a.clearAllConfigs();
    }
    b("/dev-inspector-analysis.json"), b(!1), b(""), b(0), b(!1);
    const S = [
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
    H(() => a.getCurrentPageApis());
    const B = H(() => a.brokenAnnotations.length);
    kt(() => a.isPanelOpen, (r) => {
      r && a.detectBrokenAnnotations();
    });
    function ee() {
      confirm(`${B.value}件の壊れたメモを削除しますか？`) && a.deleteBrokenAnnotations();
    }
    const te = b(!1), Z = b(null), O = b({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: [],
      transitions: []
    }), ne = H(() => Object.keys(a.masterDefinitions).length), we = H(() => {
      const r = Object.values(a.masterDefinitions), l = {};
      for (const s of r)
        l[s.table] || (l[s.table] = []), l[s.table].push(s);
      return l;
    });
    function F(r) {
      if (r) {
        const l = a.getMasterDefinition(r);
        l && (Z.value = r, O.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((s) => ({ ...s }))],
          transitions: l.transitions ? l.transitions.map((s) => ({ ...s })) : []
        });
      } else
        Z.value = null, O.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }],
          transitions: []
        };
      te.value = !0;
    }
    function $() {
      const r = O.value;
      if (!r.table || !r.column) return;
      const l = `${r.table}.${r.column}`, s = r.transitions.filter((k) => k.from || k.to || k.trigger), h = {
        id: l,
        table: r.table,
        column: r.column,
        name: r.name || r.column,
        columnType: r.columnType || void 0,
        description: r.description || void 0,
        entries: r.entries.filter((k) => k.value || k.label),
        transitions: s.length > 0 ? s : void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setMasterDefinition(h), te.value = !1;
    }
    function C() {
      O.value.entries.push({ value: "", label: "" });
    }
    function me(r) {
      O.value.entries.splice(r, 1);
    }
    function G() {
      O.value.transitions.push({ from: "", to: "", trigger: "" });
    }
    function Ae(r) {
      O.value.transitions.splice(r, 1);
    }
    function qe(r) {
      confirm(`マスタ定義「${r}」を削除しますか？`) && a.deleteMasterDefinition(r);
    }
    const ie = b(!1), ae = b(null), M = b({
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
    }), Ue = b(""), A = b(""), le = H(() => Object.keys(a.batchDefinitions).length), se = H(() => Object.values(a.batchDefinitions));
    function ue(r) {
      if (r) {
        const l = a.getBatchDefinition(r);
        l && (ae.value = r, M.value = {
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
        ae.value = null, M.value = {
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
      Ue.value = "", A.value = "", ie.value = !0;
    }
    function ve() {
      const r = M.value;
      if (!r.name) return;
      const s = {
        id: ae.value || `batch_${r.name.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}`,
        name: r.name,
        schedule: r.schedule || void 0,
        trigger: r.trigger || void 0,
        description: r.description || void 0,
        inputTables: r.inputTables.length > 0 ? r.inputTables : void 0,
        outputTables: r.outputTables.length > 0 ? r.outputTables : void 0,
        steps: r.steps.filter((h) => h.description).map((h, k) => ({ ...h, order: k + 1 })),
        timeout: r.timeout || void 0,
        retryPolicy: r.retryPolicy || void 0,
        notifyOnError: r.notifyOnError || void 0,
        notifyOnComplete: r.notifyOnComplete || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setBatchDefinition(s), ie.value = !1;
    }
    function fe() {
      const r = M.value.steps.length + 1;
      M.value.steps.push({ order: r, description: "" });
    }
    function Ne(r) {
      M.value.steps.splice(r, 1);
    }
    function Te(r) {
      var l;
      confirm(`バッチ定義「${((l = a.getBatchDefinition(r)) == null ? void 0 : l.name) || r}」を削除しますか？`) && a.deleteBatchDefinition(r);
    }
    function ye() {
      const r = Ue.value.trim();
      r && !M.value.inputTables.includes(r) && M.value.inputTables.push(r), Ue.value = "";
    }
    function dt(r) {
      M.value.inputTables.splice(r, 1);
    }
    function Qe() {
      const r = A.value.trim();
      r && !M.value.outputTables.includes(r) && M.value.outputTables.push(r), A.value = "";
    }
    function We(r) {
      M.value.outputTables.splice(r, 1);
    }
    const Ye = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], et = H(() => {
      var r;
      return ((r = Ye.find((l) => l.value === a.crossSearchMode)) == null ? void 0 : r.placeholder) || "検索...";
    }), Re = H(() => {
      const r = {};
      for (const l of a.crossSearchResults)
        r[l.pagePath] || (r[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), r[l.pagePath].items.push(l);
      return Object.values(r);
    }), Se = H(() => Re.value.length), De = H(() => {
      const r = a.unannotatedElements;
      return {
        binding: r.filter((l) => l.category === "binding").length,
        form: r.filter((l) => l.category === "form").length,
        action: r.filter((l) => l.category === "action").length
      };
    });
    function Pe() {
      a.showUnannotatedDetection ? (a.showUnannotatedDetection = !1, a.unannotatedElements = [], a.hoveredUnannotatedSelector = null) : (a.showUnannotatedDetection = !0, a.detectUnannotatedElements());
    }
    function je(r) {
      a.unannotatedElements = a.unannotatedElements.filter((l) => l.selector !== r);
    }
    function ut(r) {
      a.hoveredUnannotatedSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const s = l.getBoundingClientRect();
        (s.bottom < 0 || s.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function tt() {
      a.hoveredUnannotatedSelector = null;
    }
    function ze(r) {
      a.hoveredSelector = r;
      try {
        const l = document.querySelector(r);
        if (!l) return;
        const s = l.getBoundingClientRect();
        (s.bottom < 0 || s.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function lt() {
      a.hoveredSelector = null;
    }
    const Ke = H(() => typeof window < "u" ? window.location.pathname : "/"), ot = H(() => {
      const r = a.screenFlowData, l = {};
      for (const s of r.edges) {
        if (!l[s.from]) {
          const h = r.nodes.find((k) => k.path === s.from) || { path: s.from, name: s.from, annotationCount: 0 };
          l[s.from] = { node: h, edges: [] };
        }
        l[s.from].edges.push(s);
      }
      return Object.values(l);
    });
    function Ge(r) {
      r && a.startEditing(r);
    }
    return (r, l) => (n(), i(_, null, [
      (n(), Oe(it, { to: "body" }, [
        u(a).isEnabled && !u(a).isPanelOpen ? (n(), i("button", {
          key: 0,
          onClick: l[0] || (l[0] = //@ts-ignore
          (...s) => u(a).openPanel && u(a).openPanel(...s)),
          class: "di-fab",
          title: "画面仕様を表示",
          "data-dev-inspector": ""
        }, [
          w(u(It), { style: { width: "20px", height: "20px" } })
        ])) : v("", !0)
      ])),
      (n(), Oe(it, { to: "body" }, [
        u(a).isEnabled && u(a).isPanelOpen ? (n(), i("div", Zl, [
          e("div", Ql, [
            e("div", Wl, [
              w(u(qt), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
              l[52] || (l[52] = e("span", null, "Developer Mode", -1))
            ]),
            e("button", {
              onClick: l[1] || (l[1] = //@ts-ignore
              (...s) => u(a).closePanel && u(a).closePanel(...s)),
              class: "di-close-btn"
            }, [
              w(u(Ze), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", eo, [
            e("button", {
              onClick: l[2] || (l[2] = (s) => I.value = "elements"),
              class: z(["di-tab-btn", { active: I.value === "elements" }])
            }, [
              w(u(Yt), { style: { width: "14px", height: "14px" } }),
              l[53] || (l[53] = e("span", null, "要素設定", -1)),
              de.value > 0 ? (n(), i("span", to, p(de.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[3] || (l[3] = (s) => I.value = "masters"),
              class: z(["di-tab-btn", { active: I.value === "masters" }])
            }, [
              w(u(rt), { style: { width: "14px", height: "14px" } }),
              l[54] || (l[54] = e("span", null, "マスタ", -1)),
              ne.value > 0 ? (n(), i("span", lo, p(ne.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[4] || (l[4] = (s) => I.value = "batches"),
              class: z(["di-tab-btn", { active: I.value === "batches" }])
            }, [
              w(u(Ht), { style: { width: "14px", height: "14px" } }),
              l[55] || (l[55] = e("span", null, "バッチ", -1)),
              le.value > 0 ? (n(), i("span", oo, p(le.value), 1)) : v("", !0)
            ], 2),
            e("button", {
              onClick: l[5] || (l[5] = (s) => I.value = "export"),
              class: z(["di-tab-btn", { active: I.value === "export" }])
            }, [
              w(u(Vt), { style: { width: "14px", height: "14px" } }),
              l[56] || (l[56] = e("span", null, "出力", -1))
            ], 2)
          ]),
          f(e("div", so, [
            e("button", {
              onClick: l[6] || (l[6] = //@ts-ignore
              (...s) => u(a).togglePickMode && u(a).togglePickMode(...s)),
              class: z(["di-pick-btn", { active: u(a).isPickMode }])
            }, [
              w(u(zt), { style: { width: "16px", height: "16px" } }),
              e("span", null, p(u(a).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
            ], 2),
            W.value > 0 ? (n(), i("button", {
              key: 0,
              onClick: l[7] || (l[7] = //@ts-ignore
              (...s) => u(a).toggleNoteHighlights && u(a).toggleNoteHighlights(...s)),
              class: z(["di-note-toggle-btn", { active: u(a).showNoteHighlights }])
            }, [
              u(a).showNoteHighlights ? (n(), Oe(u(Ll), {
                key: 0,
                style: { width: "14px", height: "14px" }
              })) : (n(), Oe(u(Bl), {
                key: 1,
                style: { width: "14px", height: "14px" }
              })),
              l[57] || (l[57] = e("span", null, "メモハイライト", -1)),
              e("span", no, p(u(a).noteHighlightFilter === "all" ? W.value : `${V.value}/${W.value}`), 1)
            ], 2)) : v("", !0),
            W.value > 0 && u(a).showNoteHighlights ? (n(), i("div", io, [
              e("div", ao, [
                (n(), i(_, null, P(S, (s) => e("button", {
                  key: s.value,
                  onClick: (h) => u(a).noteHighlightFilter = s.value,
                  class: z(["di-filter-btn", { active: u(a).noteHighlightFilter === s.value }])
                }, p(s.label), 11, uo)), 64))
              ])
            ])) : v("", !0),
            xe.value.length > 0 ? (n(), i("div", ro, [
              e("div", co, [
                w(u(Yt), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                l[58] || (l[58] = e("span", null, "登録済み要素", -1)),
                e("span", vo, [
                  D(p(ge.value.length), 1),
                  ge.value.length !== xe.value.length ? (n(), i("span", po, " / " + p(xe.value.length), 1)) : v("", !0)
                ])
              ]),
              e("div", mo, [
                (n(!0), i(_, null, P(ge.value, (s) => (n(), i("div", {
                  key: s.id,
                  class: z(["di-element-item", { "di-element-item-active": u(a).hoveredSelector === s.id }]),
                  onClick: (h) => u(a).startEditing(s.id),
                  onMouseenter: (h) => ze(s.id),
                  onMouseleave: lt
                }, [
                  e("span", {
                    class: z(["di-element-type-badge", "di-element-type-" + (s.type || "other")])
                  }, p(s.type === "datasource" ? "DB" : s.type === "action" ? "Act" : s.type === "form" ? "Form" : "-"), 3),
                  e("div", bo, [
                    e("div", ho, p(s.desc), 1)
                  ])
                ], 42, fo))), 128))
              ])
            ])) : v("", !0),
            e("button", {
              onClick: Pe,
              class: z(["di-unannotated-btn", { active: u(a).showUnannotatedDetection }])
            }, [
              w(u(Dl), { style: { width: "14px", height: "14px" } }),
              e("span", null, p(u(a).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
              u(a).unannotatedElements.length > 0 ? (n(), i("span", yo, p(u(a).unannotatedElements.length), 1)) : v("", !0)
            ], 2),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length > 0 ? (n(), i("div", go, [
              e("div", ko, [
                D(p(u(a).unannotatedElements.length) + "件検出: ", 1),
                De.value.binding > 0 ? (n(), i("span", xo, "バインディング " + p(De.value.binding), 1)) : v("", !0),
                De.value.form > 0 ? (n(), i("span", wo, " / フォーム " + p(De.value.form), 1)) : v("", !0),
                De.value.action > 0 ? (n(), i("span", $o, " / アクション " + p(De.value.action), 1)) : v("", !0)
              ]),
              e("div", Co, [
                (n(!0), i(_, null, P(u(a).unannotatedElements, (s) => (n(), i("div", {
                  key: s.selector,
                  class: z(["di-unannotated-item", { "di-unannotated-item-active": u(a).hoveredUnannotatedSelector === s.selector, ["di-unannotated-item-" + s.category]: u(a).hoveredUnannotatedSelector === s.selector }]),
                  onMouseenter: (h) => ut(s.selector),
                  onMouseleave: tt
                }, [
                  e("span", {
                    class: z(["di-unannotated-category", "di-unannotated-cat-" + s.category])
                  }, p(s.category === "binding" ? "DB" : s.category === "form" ? "Form" : "Act"), 3),
                  e("span", Io, p(s.text || s.tagName), 1),
                  e("button", {
                    onClick: (h) => u(a).quickAnnotate(s.selector, s.suggestedType),
                    class: "di-unannotated-register"
                  }, " 登録 ", 8, To),
                  e("button", {
                    onClick: (h) => je(s.selector),
                    class: "di-unannotated-dismiss"
                  }, [
                    w(u(Ze), { style: { width: "10px", height: "10px" } })
                  ], 8, Uo)
                ], 42, _o))), 128))
              ])
            ])) : v("", !0),
            u(a).showUnannotatedDetection && u(a).unannotatedElements.length === 0 ? (n(), i("div", Vo, " 未登録の要素はありません ")) : v("", !0),
            B.value > 0 ? (n(), i("div", So, [
              e("div", Mo, [
                w(u(Sl), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                e("span", null, p(B.value) + "件のメモが見つかりません", 1)
              ]),
              l[61] || (l[61] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
              e("div", Eo, [
                (n(!0), i(_, null, P(u(a).brokenAnnotations, (s) => {
                  var h, k;
                  return n(), i("div", {
                    key: s,
                    class: "di-broken-item"
                  }, [
                    e("div", Do, [
                      e("div", Po, p(((k = (h = u(a).elementConfigs[s]) == null ? void 0 : h.note) == null ? void 0 : k.text) || "(メモなし)"), 1),
                      e("div", Bo, p(s), 1)
                    ]),
                    e("div", Lo, [
                      e("button", {
                        onClick: (Q) => u(a).startRemap(s),
                        class: "di-broken-remap-btn",
                        title: "新しい要素に再設定"
                      }, [
                        w(u(zt), { style: { width: "12px", height: "12px" } }),
                        l[59] || (l[59] = D(" 再設定 ", -1))
                      ], 8, Ao),
                      e("button", {
                        onClick: (Q) => {
                          u(a).deleteElementConfig(s), u(a).detectBrokenAnnotations();
                        },
                        class: "di-broken-item-delete",
                        title: "削除"
                      }, [
                        w(u(gt), { style: { width: "12px", height: "12px" } })
                      ], 8, Fo)
                    ])
                  ]);
                }), 128))
              ]),
              e("div", Oo, [
                e("button", {
                  onClick: ee,
                  class: "di-broken-delete-btn"
                }, [
                  w(u(gt), { style: { width: "12px", height: "12px" } }),
                  l[60] || (l[60] = D(" まとめて削除 ", -1))
                ])
              ])
            ])) : v("", !0),
            v("", !0)
          ], 512), [
            [mt, I.value === "elements"]
          ]),
          e("div", No, [
            f(e("div", null, [
              K.value ? (n(), i(_, { key: 0 }, [
                e("div", jo, [
                  e("div", Ho, [
                    e("h2", qo, p(K.value.name), 1),
                    e("button", {
                      onClick: l[10] || (l[10] = (s) => u(a).editingScreen = !0),
                      class: "di-screen-edit-btn",
                      title: "画面情報を編集"
                    }, [
                      w(u(Kt), { style: { width: "14px", height: "14px" } })
                    ])
                  ]),
                  K.value.description ? (n(), i("p", Ro, p(K.value.description), 1)) : v("", !0),
                  K.value.auth ? (n(), i("div", zo, [
                    K.value.auth.required ? (n(), i("span", Yo, [
                      w(u(Nl), { style: { width: "11px", height: "11px" } }),
                      l[71] || (l[71] = D(" ログイン必須 ", -1))
                    ])) : v("", !0),
                    (n(!0), i(_, null, P(K.value.auth.roles || [], (s) => (n(), i("span", {
                      key: s,
                      class: "di-auth-badge di-auth-role"
                    }, [
                      w(u(Yl), { style: { width: "11px", height: "11px" } }),
                      D(" " + p(s), 1)
                    ]))), 128)),
                    K.value.auth.description ? (n(), i("span", Ko, p(K.value.auth.description), 1)) : v("", !0)
                  ])) : v("", !0)
                ]),
                K.value.componentPath ? (n(), i("div", Go, [
                  e("div", Xo, [
                    w(u(qt), { style: { width: "16px", height: "16px" } }),
                    l[72] || (l[72] = e("span", null, "Component Path", -1))
                  ]),
                  e("code", Jo, p(K.value.componentPath), 1)
                ])) : v("", !0),
                K.value.figmaUrl ? (n(), i("div", Zo, [
                  e("div", Qo, [
                    w(u(Pl), { style: { width: "16px", height: "16px" } }),
                    l[73] || (l[73] = e("span", null, "Figma Design", -1))
                  ]),
                  e("a", {
                    href: K.value.figmaUrl,
                    target: "_blank",
                    class: "di-link-purple"
                  }, p(K.value.figmaUrl), 9, Wo)
                ])) : v("", !0),
                K.value.apis.length ? (n(), i("div", es, [
                  e("div", ts, [
                    w(u(zl), { style: { width: "16px", height: "16px" } }),
                    l[74] || (l[74] = e("span", null, "API Endpoints", -1))
                  ]),
                  e("div", ls, [
                    (n(!0), i(_, null, P(K.value.apis, (s, h) => (n(), i("div", {
                      key: h,
                      class: "di-api-item"
                    }, [
                      e("span", {
                        class: "di-method-badge",
                        style: Be({ backgroundColor: ce[s.method] + "20", color: ce[s.method] })
                      }, p(s.method), 5),
                      e("div", os, [
                        e("code", ss, p(s.endpoint), 1),
                        s.description ? (n(), i("p", ns, p(s.description), 1)) : v("", !0)
                      ]),
                      s.loadTiming ? (n(), i("span", is, p(s.loadTiming === "onMount" ? "読込時" : s.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : v("", !0)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                K.value.notes ? (n(), i("div", as, [
                  e("div", ds, [
                    w(u(Vl), { style: { width: "16px", height: "16px" } }),
                    l[75] || (l[75] = e("span", null, "Notes", -1))
                  ]),
                  e("p", us, p(K.value.notes), 1)
                ])) : v("", !0)
              ], 64)) : (n(), i("div", rs, [
                w(u(It), { style: { width: "48px", height: "48px", color: "#334155" } }),
                l[77] || (l[77] = e("p", null, [
                  D("この画面の仕様情報は"),
                  e("br"),
                  D("まだ登録されていません")
                ], -1)),
                e("button", {
                  onClick: l[11] || (l[11] = (s) => u(a).editingScreen = !0),
                  class: "di-screen-register-btn"
                }, [
                  w(u(Kt), { style: { width: "14px", height: "14px" } }),
                  l[76] || (l[76] = D(" 画面情報を登録 ", -1))
                ])
              ])),
              e("div", cs, [
                e("div", vs, [
                  w(u(Rl), { style: { width: "14px", height: "14px", color: "#94a3b8" } }),
                  l[78] || (l[78] = e("span", null, "横断検索", -1))
                ]),
                l[79] || (l[79] = e("div", { class: "di-cross-search-desc" }, "全画面のメモを横断検索。カラム名・APIエンドポイント・メモ内テキストで絞り込めます。", -1)),
                e("div", ps, [
                  e("div", ms, [
                    (n(), i(_, null, P(Ye, (s) => e("button", {
                      key: s.value,
                      onClick: (h) => u(a).crossSearchMode = s.value,
                      class: z(["di-filter-btn", { active: u(a).crossSearchMode === s.value }])
                    }, p(s.label), 11, fs)), 64))
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": l[12] || (l[12] = (s) => u(a).crossSearchQuery = s),
                    type: "text",
                    class: "di-cross-search-input",
                    placeholder: et.value
                  }, null, 8, bs), [
                    [g, u(a).crossSearchQuery]
                  ]),
                  u(a).crossSearchQuery.trim() ? (n(), i("div", hs, p(u(a).crossSearchResults.length) + "件 (" + p(Se.value) + "画面) ", 1)) : v("", !0),
                  Re.value.length > 0 ? (n(), i("div", ys, [
                    (n(!0), i(_, null, P(Re.value, (s) => (n(), i("div", {
                      key: s.pagePath,
                      class: "di-cross-search-group"
                    }, [
                      e("div", gs, [
                        D(p(s.pagePath) + " ", 1),
                        s.pageName !== s.pagePath ? (n(), i("span", ks, "(" + p(s.pageName) + ")", 1)) : v("", !0)
                      ]),
                      (n(!0), i(_, null, P(s.items, (h, k) => (n(), i("div", {
                        key: k,
                        class: z(["di-cross-search-item", h.elementType ? "di-cross-item-" + h.elementType : ""]),
                        onClick: (Q) => h.selector && u(a).startEditing(h.selector)
                      }, [
                        e("span", ws, p(h.matchedField), 1),
                        h.matchContext ? (n(), i("span", $s, p(h.matchContext), 1)) : v("", !0)
                      ], 10, xs))), 128))
                    ]))), 128))
                  ])) : v("", !0)
                ])
              ]),
              e("div", Cs, [
                e("button", {
                  onClick: l[13] || (l[13] = (s) => u(a).showScreenFlow = !u(a).showScreenFlow),
                  class: z(["di-screen-flow-toggle", { active: u(a).showScreenFlow }])
                }, [
                  w(u(Ol), { style: { width: "14px", height: "14px" } }),
                  l[80] || (l[80] = e("span", null, "画面フロー", -1)),
                  u(a).screenFlowData.edges.length > 0 ? (n(), i("span", _s, p(u(a).screenFlowData.nodes.length) + "画面 / " + p(u(a).screenFlowData.edges.length) + "遷移 ", 1)) : v("", !0)
                ], 2),
                u(a).showScreenFlow ? (n(), i("div", Is, [
                  u(a).screenFlowData.edges.length === 0 ? (n(), i("div", Ts, " navigate型のアクションが登録されていません ")) : v("", !0),
                  (n(!0), i(_, null, P(ot.value, (s) => (n(), i("div", {
                    key: s.node.path,
                    class: "di-flow-group"
                  }, [
                    e("div", {
                      class: z(["di-flow-node", { "di-flow-node-current": s.node.path === Ke.value }])
                    }, [
                      e("span", Us, p(s.node.path), 1),
                      s.node.name !== s.node.path ? (n(), i("span", Vs, "(" + p(s.node.name) + ")", 1)) : v("", !0)
                    ], 2),
                    (n(!0), i(_, null, P(s.edges, (h) => (n(), i("div", {
                      key: h.from + h.to,
                      class: "di-flow-edge",
                      onClick: (k) => Ge(h.selector)
                    }, [
                      l[81] || (l[81] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                      e("span", Ms, p(h.to), 1),
                      h.label ? (n(), i("span", Es, "[" + p(h.label) + "]", 1)) : v("", !0)
                    ], 8, Ss))), 128))
                  ]))), 128)),
                  u(a).screenFlowData.orphanPages.length > 0 ? (n(), i("div", Ds, [
                    l[82] || (l[82] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                    (n(!0), i(_, null, P(u(a).screenFlowData.orphanPages, (s) => (n(), i("span", {
                      key: s.path,
                      class: "di-flow-orphan-item"
                    }, p(s.path), 1))), 128))
                  ])) : v("", !0)
                ])) : v("", !0)
              ])
            ], 512), [
              [mt, I.value === "elements"]
            ]),
            f(e("div", null, [
              e("div", Ps, [
                e("div", Bs, [
                  w(u(rt), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                  l[83] || (l[83] = e("span", null, "マスタ定義", -1)),
                  ne.value > 0 ? (n(), i("span", Ls, p(ne.value), 1)) : v("", !0),
                  e("button", {
                    onClick: l[14] || (l[14] = (s) => F()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    w(u(ft), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                ne.value > 0 ? (n(!0), i(_, { key: 0 }, P(we.value, (s, h) => (n(), i("div", {
                  key: h,
                  class: "di-master-table-group"
                }, [
                  e("div", As, p(h), 1),
                  (n(!0), i(_, null, P(s, (k) => (n(), i("div", {
                    key: k.id,
                    class: "di-master-item",
                    onClick: (Q) => F(k.id)
                  }, [
                    e("div", Os, [
                      e("span", Ns, "." + p(k.column), 1),
                      k.columnType ? (n(), i("span", js, p(k.columnType), 1)) : v("", !0),
                      e("span", Hs, p(k.name), 1)
                    ]),
                    e("div", qs, [
                      (n(!0), i(_, null, P(k.entries.slice(0, 5), (Q, d) => (n(), i("span", {
                        key: d,
                        class: "di-master-entry-chip",
                        style: Be(Q.color ? { borderColor: Q.color, color: Q.color } : {})
                      }, p(Q.value) + "=" + p(Q.label), 5))), 128)),
                      k.entries.length > 5 ? (n(), i("span", Rs, "+" + p(k.entries.length - 5), 1)) : v("", !0)
                    ])
                  ], 8, Fs))), 128))
                ]))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-master-empty",
                  onClick: l[15] || (l[15] = (s) => F())
                }, [...l[84] || (l[84] = [
                  e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                ])]))
              ]),
              (n(), Oe(it, { to: "body" }, [
                te.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[24] || (l[24] = be((s) => te.value = !1, ["self"]))
                }, [
                  e("div", zs, [
                    e("div", Ys, [
                      e("h3", null, p(Z.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                      e("button", {
                        onClick: l[16] || (l[16] = (s) => te.value = !1),
                        class: "di-close-btn"
                      }, [
                        w(u(Ze), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", Ks, [
                      e("div", Gs, [
                        e("div", Xs, [
                          l[85] || (l[85] = e("label", null, "テーブル", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[17] || (l[17] = (s) => O.value.table = s),
                            placeholder: "orders",
                            disabled: !!Z.value
                          }, null, 8, Js), [
                            [g, O.value.table]
                          ])
                        ]),
                        e("div", Zs, [
                          l[86] || (l[86] = e("label", null, "カラム", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[18] || (l[18] = (s) => O.value.column = s),
                            placeholder: "status",
                            disabled: !!Z.value
                          }, null, 8, Qs), [
                            [g, O.value.column]
                          ])
                        ])
                      ]),
                      e("div", Ws, [
                        e("div", en, [
                          l[87] || (l[87] = e("label", null, "表示名", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[19] || (l[19] = (s) => O.value.name = s),
                            placeholder: "ステータス"
                          }, null, 512), [
                            [g, O.value.name]
                          ])
                        ]),
                        e("div", tn, [
                          l[88] || (l[88] = e("label", null, "型", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[20] || (l[20] = (s) => O.value.columnType = s),
                            placeholder: "integer"
                          }, null, 512), [
                            [g, O.value.columnType]
                          ])
                        ])
                      ]),
                      e("div", ln, [
                        l[89] || (l[89] = e("label", null, "説明", -1)),
                        f(e("input", {
                          "onUpdate:modelValue": l[21] || (l[21] = (s) => O.value.description = s),
                          placeholder: "注文のステータスを管理"
                        }, null, 512), [
                          [g, O.value.description]
                        ])
                      ]),
                      e("div", on, [
                        l[90] || (l[90] = e("label", null, "マスタ値", -1)),
                        e("button", {
                          onClick: C,
                          class: "di-btn-icon",
                          title: "追加"
                        }, [
                          w(u(ft), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      e("div", sn, [
                        (n(!0), i(_, null, P(O.value.entries, (s, h) => (n(), i("div", {
                          key: h,
                          class: "di-master-entry-row"
                        }, [
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.value = k,
                            placeholder: "値",
                            class: "di-master-entry-value"
                          }, null, 8, nn), [
                            [g, s.value]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.label = k,
                            placeholder: "ラベル",
                            class: "di-master-entry-label"
                          }, null, 8, an), [
                            [g, s.label]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.color = k,
                            placeholder: "#色",
                            class: "di-master-entry-color"
                          }, null, 8, dn), [
                            [g, s.color]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.description = k,
                            placeholder: "説明",
                            class: "di-master-entry-desc"
                          }, null, 8, un), [
                            [g, s.description]
                          ]),
                          e("button", {
                            onClick: (k) => me(h),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            w(u(Ze), { style: { width: "12px", height: "12px" } })
                          ], 8, rn)
                        ]))), 128))
                      ]),
                      e("div", cn, [
                        l[91] || (l[91] = e("label", null, "状態遷移", -1)),
                        e("button", {
                          onClick: G,
                          class: "di-btn-icon",
                          title: "遷移を追加"
                        }, [
                          w(u(ft), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      O.value.transitions.length > 0 ? (n(), i("div", vn, [
                        l[95] || (l[95] = e("div", { class: "di-transition-header" }, [
                          e("span", { class: "di-transition-col-from" }, "遷移元"),
                          e("span", { class: "di-transition-col-arrow" }, "→"),
                          e("span", { class: "di-transition-col-to" }, "遷移先"),
                          e("span", { class: "di-transition-col-trigger" }, "トリガー"),
                          e("span", { class: "di-transition-col-condition" }, "条件"),
                          e("span", { class: "di-transition-col-act" })
                        ], -1)),
                        (n(!0), i(_, null, P(O.value.transitions, (s, h) => (n(), i("div", {
                          key: h,
                          class: "di-transition-row"
                        }, [
                          f(e("select", {
                            "onUpdate:modelValue": (k) => s.from = k,
                            class: "di-transition-select di-transition-col-from"
                          }, [
                            l[92] || (l[92] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(_, null, P(O.value.entries.filter((k) => k.value), (k) => (n(), i("option", {
                              key: k.value,
                              value: k.value
                            }, p(k.label || k.value), 9, mn))), 128))
                          ], 8, pn), [
                            [_e, s.from]
                          ]),
                          l[94] || (l[94] = e("span", { class: "di-transition-col-arrow" }, "→", -1)),
                          f(e("select", {
                            "onUpdate:modelValue": (k) => s.to = k,
                            class: "di-transition-select di-transition-col-to"
                          }, [
                            l[93] || (l[93] = e("option", { value: "" }, "-", -1)),
                            (n(!0), i(_, null, P(O.value.entries.filter((k) => k.value), (k) => (n(), i("option", {
                              key: k.value,
                              value: k.value
                            }, p(k.label || k.value), 9, bn))), 128))
                          ], 8, fn), [
                            [_e, s.to]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.trigger = k,
                            placeholder: "トリガー",
                            class: "di-transition-input di-transition-col-trigger"
                          }, null, 8, hn), [
                            [g, s.trigger]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.condition = k,
                            placeholder: "条件",
                            class: "di-transition-input di-transition-col-condition"
                          }, null, 8, yn), [
                            [g, s.condition]
                          ]),
                          e("button", {
                            onClick: (k) => Ae(h),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            w(u(Ze), { style: { width: "12px", height: "12px" } })
                          ], 8, gn)
                        ]))), 128))
                      ])) : (n(), i("div", kn, " 状態遷移を定義（任意） "))
                    ]),
                    e("div", xn, [
                      Z.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[22] || (l[22] = (s) => {
                          qe(Z.value), te.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : v("", !0),
                      l[96] || (l[96] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[23] || (l[23] = (s) => te.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: $,
                        class: "di-btn-small di-btn-primary",
                        disabled: !O.value.table || !O.value.column
                      }, "保存", 8, wn)
                    ])
                  ])
                ])) : v("", !0)
              ]))
            ], 512), [
              [mt, I.value === "masters"]
            ]),
            f(e("div", null, [
              e("div", $n, [
                e("div", Cn, [
                  w(u(Ht), { style: { width: "16px", height: "16px", color: "#f59e0b" } }),
                  l[97] || (l[97] = e("span", null, "バッチ処理", -1)),
                  le.value > 0 ? (n(), i("span", _n, p(le.value), 1)) : v("", !0),
                  e("button", {
                    onClick: l[25] || (l[25] = (s) => ue()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    w(u(ft), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                le.value > 0 ? (n(!0), i(_, { key: 0 }, P(se.value, (s) => (n(), i("div", {
                  key: s.id,
                  class: "di-batch-item",
                  onClick: (h) => ue(s.id)
                }, [
                  e("div", Tn, [
                    e("div", Un, p(s.name), 1),
                    s.schedule ? (n(), i("div", Vn, p(s.schedule), 1)) : v("", !0)
                  ])
                ], 8, In))), 128)) : (n(), i("div", {
                  key: 1,
                  class: "di-batch-empty",
                  onClick: l[26] || (l[26] = (s) => ue())
                }, [...l[98] || (l[98] = [
                  e("span", null, "バッチ処理を定義", -1)
                ])]))
              ]),
              (n(), Oe(it, { to: "body" }, [
                ie.value ? (n(), i("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[42] || (l[42] = be((s) => ie.value = !1, ["self"]))
                }, [
                  e("div", Sn, [
                    e("div", Mn, [
                      e("h3", null, p(ae.value ? "バッチ処理を編集" : "新規バッチ処理"), 1),
                      e("button", {
                        onClick: l[27] || (l[27] = (s) => ie.value = !1),
                        class: "di-close-btn"
                      }, [
                        w(u(Ze), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", En, [
                      e("div", Dn, [
                        e("div", Pn, [
                          l[99] || (l[99] = e("label", null, "バッチ名 *", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[28] || (l[28] = (s) => M.value.name = s),
                            placeholder: "月次レポート生成"
                          }, null, 512), [
                            [g, M.value.name]
                          ])
                        ]),
                        e("div", Bn, [
                          l[100] || (l[100] = e("label", null, "スケジュール", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[29] || (l[29] = (s) => M.value.schedule = s),
                            placeholder: "毎月1日 AM2:00"
                          }, null, 512), [
                            [g, M.value.schedule]
                          ])
                        ])
                      ]),
                      e("div", Ln, [
                        e("div", An, [
                          l[101] || (l[101] = e("label", null, "手動トリガー", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[30] || (l[30] = (s) => M.value.trigger = s),
                            placeholder: "管理画面から実行"
                          }, null, 512), [
                            [g, M.value.trigger]
                          ])
                        ])
                      ]),
                      e("div", Fn, [
                        l[102] || (l[102] = e("label", null, "説明", -1)),
                        f(e("textarea", {
                          "onUpdate:modelValue": l[31] || (l[31] = (s) => M.value.description = s),
                          rows: "2",
                          placeholder: "バッチ処理の概要..."
                        }, null, 512), [
                          [g, M.value.description]
                        ])
                      ]),
                      l[112] || (l[112] = e("div", { class: "di-batch-section-label" }, "入出力テーブル", -1)),
                      e("div", On, [
                        e("div", Nn, [
                          l[103] || (l[103] = e("label", null, "入力テーブル", -1)),
                          e("div", jn, [
                            (n(!0), i(_, null, P(M.value.inputTables, (s, h) => (n(), i("span", {
                              key: h,
                              class: "di-batch-tag"
                            }, [
                              D(p(s) + " ", 1),
                              e("button", {
                                onClick: (k) => dt(h),
                                class: "di-batch-tag-remove"
                              }, "×", 8, Hn)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[32] || (l[32] = (s) => Ue.value = s),
                              onKeydown: l[33] || (l[33] = yt(be((s) => ye(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [g, Ue.value]
                            ])
                          ])
                        ]),
                        e("div", qn, [
                          l[104] || (l[104] = e("label", null, "出力テーブル", -1)),
                          e("div", Rn, [
                            (n(!0), i(_, null, P(M.value.outputTables, (s, h) => (n(), i("span", {
                              key: h,
                              class: "di-batch-tag"
                            }, [
                              D(p(s) + " ", 1),
                              e("button", {
                                onClick: (k) => We(h),
                                class: "di-batch-tag-remove"
                              }, "×", 8, zn)
                            ]))), 128)),
                            f(e("input", {
                              "onUpdate:modelValue": l[34] || (l[34] = (s) => A.value = s),
                              onKeydown: l[35] || (l[35] = yt(be((s) => Qe(), ["prevent"]), ["enter"])),
                              type: "text",
                              placeholder: "テーブル名",
                              class: "di-batch-tag-input"
                            }, null, 544), [
                              [g, A.value]
                            ])
                          ])
                        ])
                      ]),
                      e("div", Yn, [
                        l[105] || (l[105] = D(" 処理ステップ ", -1)),
                        e("button", {
                          onClick: fe,
                          class: "di-btn-icon",
                          style: { "margin-left": "auto" },
                          title: "ステップ追加"
                        }, [
                          w(u(ft), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      M.value.steps.length > 0 ? (n(), i("div", Kn, [
                        l[107] || (l[107] = e("div", { class: "di-batch-steps-header" }, [
                          e("span", { class: "di-batch-step-no" }, "No"),
                          e("span", { class: "di-batch-step-desc" }, "処理内容"),
                          e("span", { class: "di-batch-step-target" }, "対象"),
                          e("span", { class: "di-batch-step-type" }, "種別"),
                          e("span", { class: "di-batch-step-error" }, "エラー処理"),
                          e("span", { class: "di-batch-step-act" })
                        ], -1)),
                        (n(!0), i(_, null, P(M.value.steps, (s, h) => (n(), i("div", {
                          key: h,
                          class: "di-batch-step-row"
                        }, [
                          e("span", Gn, p(h + 1), 1),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.description = k,
                            placeholder: "処理内容",
                            class: "di-batch-step-input di-batch-step-desc"
                          }, null, 8, Xn), [
                            [g, s.description]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.target = k,
                            placeholder: "対象テーブル",
                            class: "di-batch-step-input di-batch-step-target"
                          }, null, 8, Jn), [
                            [g, s.target]
                          ]),
                          f(e("select", {
                            "onUpdate:modelValue": (k) => s.type = k,
                            class: "di-batch-step-select di-batch-step-type"
                          }, [...l[106] || (l[106] = [
                            e("option", { value: "" }, "-", -1),
                            e("option", { value: "query" }, "query", -1),
                            e("option", { value: "api" }, "api", -1),
                            e("option", { value: "file" }, "file", -1),
                            e("option", { value: "mail" }, "mail", -1),
                            e("option", { value: "other" }, "other", -1)
                          ])], 8, Zn), [
                            [_e, s.type]
                          ]),
                          f(e("input", {
                            "onUpdate:modelValue": (k) => s.errorHandling = k,
                            placeholder: "エラー時",
                            class: "di-batch-step-input di-batch-step-error"
                          }, null, 8, Qn), [
                            [g, s.errorHandling]
                          ]),
                          e("button", {
                            onClick: (k) => Ne(h),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            w(u(Ze), { style: { width: "12px", height: "12px" } })
                          ], 8, Wn)
                        ]))), 128))
                      ])) : v("", !0),
                      l[113] || (l[113] = e("div", { class: "di-batch-section-label" }, "運用設定", -1)),
                      e("div", ei, [
                        e("div", ti, [
                          l[108] || (l[108] = e("label", null, "タイムアウト", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[36] || (l[36] = (s) => M.value.timeout = s),
                            placeholder: "30分"
                          }, null, 512), [
                            [g, M.value.timeout]
                          ])
                        ]),
                        e("div", li, [
                          l[109] || (l[109] = e("label", null, "リトライ", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[37] || (l[37] = (s) => M.value.retryPolicy = s),
                            placeholder: "3回まで、5分間隔"
                          }, null, 512), [
                            [g, M.value.retryPolicy]
                          ])
                        ])
                      ]),
                      e("div", oi, [
                        e("div", si, [
                          l[110] || (l[110] = e("label", null, "エラー通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[38] || (l[38] = (s) => M.value.notifyOnError = s),
                            placeholder: "admin@example.com"
                          }, null, 512), [
                            [g, M.value.notifyOnError]
                          ])
                        ]),
                        e("div", ni, [
                          l[111] || (l[111] = e("label", null, "完了通知先", -1)),
                          f(e("input", {
                            "onUpdate:modelValue": l[39] || (l[39] = (s) => M.value.notifyOnComplete = s),
                            placeholder: "manager@example.com"
                          }, null, 512), [
                            [g, M.value.notifyOnComplete]
                          ])
                        ])
                      ])
                    ]),
                    e("div", ii, [
                      ae.value ? (n(), i("button", {
                        key: 0,
                        onClick: l[40] || (l[40] = (s) => {
                          Te(ae.value), ie.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : v("", !0),
                      l[114] || (l[114] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[41] || (l[41] = (s) => ie.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: ve,
                        class: "di-btn-small di-btn-primary",
                        disabled: !M.value.name
                      }, "保存", 8, ai)
                    ])
                  ])
                ])) : v("", !0)
              ]))
            ], 512), [
              [mt, I.value === "batches"]
            ]),
            f(e("div", null, [
              e("div", di, [
                e("button", {
                  onClick: ke,
                  class: "di-btn-green"
                }, [
                  w(u(Fl), { style: { width: "16px", height: "16px" } }),
                  l[115] || (l[115] = D(" Git管理用に保存 ", -1))
                ]),
                e("button", {
                  onClick: Ve,
                  class: "di-btn-blue"
                }, [
                  w(u(Zt), { style: { width: "16px", height: "16px" } }),
                  l[116] || (l[116] = D(" 画面仕様書 (xlsx) 出力 ", -1))
                ]),
                e("button", {
                  onClick: l[43] || (l[43] = (s) => u(a).downloadSddSpec()),
                  class: "di-btn-green-outline"
                }, [
                  w(u(It), { style: { width: "16px", height: "16px" } }),
                  l[117] || (l[117] = D(" SDD仕様書 (md) ", -1))
                ]),
                e("button", {
                  onClick: l[44] || (l[44] = (s) => u(a).downloadClientSpec()),
                  class: "di-btn-blue-outline"
                }, [
                  w(u(It), { style: { width: "16px", height: "16px" } }),
                  l[118] || (l[118] = D(" 納品用仕様書 (md) ", -1))
                ])
              ]),
              l[126] || (l[126] = e("p", { class: "di-export-hint" }, [
                D(" JSON: "),
                e("code", null, "dev-annotations.json"),
                D(" に配置してcommit ")
              ], -1)),
              e("div", ui, [
                e("button", {
                  onClick: l[45] || (l[45] = (s) => T.value = !0),
                  class: "di-btn-small"
                }, [
                  w(u(Vt), { style: { width: "14px", height: "14px" } }),
                  l[119] || (l[119] = D(" エクスポート ", -1))
                ]),
                e("button", {
                  onClick: l[46] || (l[46] = (s) => Y.value = !0),
                  class: "di-btn-small"
                }, [
                  w(u(Gl), { style: { width: "14px", height: "14px" } }),
                  l[120] || (l[120] = D(" インポート ", -1))
                ]),
                de.value > 0 ? (n(), i("button", {
                  key: 0,
                  onClick: c,
                  class: "di-btn-small di-btn-danger"
                }, [
                  w(u(gt), { style: { width: "14px", height: "14px" } }),
                  l[121] || (l[121] = D(" 全削除 ", -1))
                ])) : v("", !0)
              ]),
              de.value > 0 || ne.value > 0 || le.value > 0 ? (n(), i("div", ri, [
                l[125] || (l[125] = e("div", { class: "di-export-summary-title" }, "登録状況", -1)),
                e("div", ci, [
                  l[122] || (l[122] = e("span", null, "要素設定", -1)),
                  e("span", vi, p(de.value) + "件", 1)
                ]),
                e("div", pi, [
                  l[123] || (l[123] = e("span", null, "マスタ定義", -1)),
                  e("span", mi, p(ne.value) + "件", 1)
                ]),
                e("div", fi, [
                  l[124] || (l[124] = e("span", null, "バッチ処理", -1)),
                  e("span", bi, p(le.value) + "件", 1)
                ])
              ])) : v("", !0)
            ], 512), [
              [mt, I.value === "export"]
            ])
          ]),
          l[127] || (l[127] = e("div", { class: "di-footer" }, [
            e("kbd", null, "Ctrl"),
            e("span", null, "+"),
            e("kbd", null, "Shift"),
            e("span", null, "+"),
            e("kbd", null, "D"),
            e("span", { class: "di-footer-text" }, "で開発者モード切替")
          ], -1))
        ])) : v("", !0)
      ])),
      (n(), Oe(it, { to: "body" }, [
        u(a).isEnabled ? (n(), i("div", hi, [...l[128] || (l[128] = [
          e("span", { class: "di-indicator-dot" }, null, -1),
          D(" Developer Mode ", -1)
        ])])) : v("", !0)
      ])),
      (n(), Oe(it, { to: "body" }, [
        T.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[48] || (l[48] = be((s) => T.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", yi, [
            l[130] || (l[130] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
            e("textarea", {
              readonly: "",
              value: u(a).exportConfigs(),
              class: "di-modal-textarea"
            }, null, 8, gi),
            e("div", ki, [
              e("button", {
                onClick: l[47] || (l[47] = (s) => T.value = !1),
                class: "di-btn-small"
              }, "閉じる"),
              e("button", {
                onClick: Le,
                class: "di-btn-small di-btn-gray"
              }, [
                w(u(Vt), { style: { width: "14px", height: "14px" } }),
                l[129] || (l[129] = D(" ファイル保存 ", -1))
              ]),
              e("button", {
                onClick: Ie,
                class: "di-btn-small di-btn-primary"
              }, "コピー")
            ])
          ])
        ])) : v("", !0)
      ])),
      (n(), Oe(it, { to: "body" }, [
        Y.value ? (n(), i("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[51] || (l[51] = be((s) => Y.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", xi, [
            l[132] || (l[132] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
            e("label", wi, [
              e("input", {
                type: "file",
                accept: ".json",
                onChange: U
              }, null, 32),
              l[131] || (l[131] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
            ]),
            f(e("textarea", {
              "onUpdate:modelValue": l[49] || (l[49] = (s) => J.value = s),
              placeholder: "またはJSONを直接貼り付け...",
              class: "di-modal-textarea di-modal-textarea-input"
            }, null, 512), [
              [g, J.value]
            ]),
            oe.value ? (n(), i("p", $i, p(oe.value), 1)) : v("", !0),
            e("div", Ci, [
              e("button", {
                onClick: l[50] || (l[50] = (s) => {
                  Y.value = !1, J.value = "", oe.value = "";
                }),
                class: "di-btn-small"
              }, " キャンセル "),
              e("button", {
                onClick: L,
                disabled: !J.value,
                class: "di-btn-small di-btn-primary"
              }, " インポート ", 8, _i)
            ])
          ])
        ])) : v("", !0)
      ]))
    ], 64));
  }
}), Ut = (q, a) => {
  const I = q.__vccOpts || q;
  for (const [T, Y] of a)
    I[T] = Y;
  return I;
}, Ti = /* @__PURE__ */ Ut(Ii, [["__scopeId", "data-v-842bba81"]]), Ui = { class: "di-editor-header" }, Vi = { class: "di-header-actions" }, Si = {
  key: 0,
  class: "di-static-indicator"
}, Mi = {
  key: 1,
  class: "di-binding-indicator"
}, Ei = {
  key: 0,
  class: "di-binding-source"
}, Di = { class: "di-editor-tabs" }, Pi = { class: "di-editor-content" }, Bi = { class: "di-form-group" }, Li = { class: "di-display-type-grid" }, Ai = ["onClick"], Fi = { class: "di-display-type-desc" }, Oi = {
  key: 0,
  class: "di-field-tags"
}, Ni = { class: "di-field-tags-list" }, ji = { class: "di-field-tag-name" }, Hi = {
  key: 0,
  class: "di-field-tag-type"
}, qi = ["onClick"], Ri = {
  key: 1,
  class: "di-binding-selector"
}, zi = { class: "di-form-group" }, Yi = { class: "di-form-label" }, Ki = { class: "di-binding-search-wrapper" }, Gi = {
  key: 0,
  class: "di-binding-list"
}, Xi = ["onClick"], Ji = { class: "di-binding-item-main" }, Zi = { class: "di-binding-name" }, Qi = { class: "di-binding-type" }, Wi = {
  key: 0,
  class: "di-binding-component"
}, ea = {
  key: 1,
  class: "di-binding-empty"
}, ta = {
  key: 2,
  class: "di-form-divider"
}, la = { class: "di-form-row" }, oa = { class: "di-form-group di-suggest-wrapper" }, sa = {
  key: 0,
  class: "di-suggest-list"
}, na = ["onMousedown"], ia = { class: "di-form-group di-suggest-wrapper" }, aa = {
  key: 0,
  class: "di-suggest-list"
}, da = ["onMousedown"], ua = { class: "di-form-group" }, ra = ["value"], ca = ["disabled"], va = {
  key: 3,
  class: "di-master-inline"
}, pa = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, ma = {
  key: 0,
  class: "di-master-inline-section"
}, fa = {
  key: 0,
  class: "di-master-entries-table"
}, ba = ["onUpdate:modelValue"], ha = ["onUpdate:modelValue"], ya = ["onUpdate:modelValue"], ga = ["onClick"], ka = {
  key: 4,
  class: "di-form-group"
}, xa = { class: "di-stored-calc-toggle" }, wa = {
  key: 0,
  class: "di-condition-badge"
}, $a = {
  key: 5,
  class: "di-stored-calc-section"
}, Ca = { class: "di-form-group" }, _a = { class: "di-form-group di-suggest-wrapper" }, Ia = { class: "di-stored-calc-tags" }, Ta = ["onClick"], Ua = {
  key: 0,
  class: "di-suggest-list"
}, Va = ["onMousedown"], Sa = { class: "di-form-group" }, Ma = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, Ea = {
  key: 0,
  class: "di-calc-tag"
}, Da = ["onClick"], Pa = {
  key: 1,
  class: "di-calc-text"
}, Ba = ["placeholder"], La = {
  key: 0,
  class: "di-suggest-list"
}, Aa = ["onMousedown"], Fa = {
  key: 2,
  class: "di-form-group"
}, Oa = { class: "di-condition-toggle" }, Na = {
  key: 0,
  class: "di-condition-badge"
}, ja = {
  key: 0,
  class: "di-condition-section"
}, Ha = { class: "di-form-group" }, qa = { class: "di-form-group di-suggest-wrapper" }, Ra = { class: "di-form-row" }, za = { class: "di-form-group" }, Ya = {
  key: 0,
  class: "di-form-group"
}, Ka = { class: "di-form-row" }, Ga = { class: "di-form-group" }, Xa = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, Ja = { class: "di-form-row" }, Za = { class: "di-form-group" }, Qa = { class: "di-form-group" }, Wa = { class: "di-form-group" }, ed = { class: "di-form-group" }, td = { class: "di-form-group" }, ld = { class: "di-form-group" }, od = ["placeholder"], sd = {
  key: 0,
  class: "di-form-group"
}, nd = { class: "di-form-group" }, id = { class: "di-form-divider" }, ad = { class: "di-csv-file-settings" }, dd = { class: "di-form-row" }, ud = { class: "di-form-group" }, rd = { class: "di-form-group" }, cd = {
  class: "di-form-row",
  style: { "align-items": "center" }
}, vd = { class: "di-csv-checkbox-label" }, pd = { class: "di-form-group" }, md = { class: "di-csv-columns-section" }, fd = {
  key: 0,
  class: "di-csv-columns-table"
}, bd = { class: "di-csv-col-no" }, hd = ["onUpdate:modelValue"], yd = ["onUpdate:modelValue"], gd = ["onUpdate:modelValue"], kd = ["onUpdate:modelValue"], xd = { class: "di-csv-col-req di-csv-checkbox-center" }, wd = ["onUpdate:modelValue"], $d = ["onUpdate:modelValue"], Cd = { class: "di-csv-col-act" }, _d = ["onClick", "disabled"], Id = ["onClick", "disabled"], Td = ["onClick"], Ud = { class: "di-form-group" }, Vd = { class: "di-form-group" }, Sd = { class: "di-form-group" }, Md = { class: "di-form-group" }, Ed = { class: "di-form-group" }, Dd = { class: "di-form-group" }, Pd = { class: "di-csv-error-section" }, Bd = {
  key: 0,
  class: "di-csv-columns-table"
}, Ld = ["onUpdate:modelValue"], Ad = ["value"], Fd = ["onUpdate:modelValue"], Od = ["onUpdate:modelValue"], Nd = ["onUpdate:modelValue"], jd = ["onClick"], Hd = { class: "di-form-divider" }, qd = { class: "di-form-row" }, Rd = { class: "di-form-group" }, zd = { class: "di-form-group" }, Yd = { class: "di-form-row" }, Kd = { class: "di-form-group" }, Gd = { class: "di-form-group" }, Xd = { class: "di-form-group" }, Jd = { class: "di-form-group" }, Zd = { class: "di-form-group" }, Qd = { class: "di-form-group" }, Wd = { class: "di-email-variables-input" }, eu = ["onClick"], tu = { class: "di-form-group" }, lu = { class: "di-form-group" }, ou = { class: "di-form-group" }, su = { class: "di-form-group" }, nu = { class: "di-form-group" }, iu = {
  key: 0,
  class: "di-field-tags"
}, au = { class: "di-field-tags-list" }, du = { class: "di-field-tag-name" }, uu = {
  key: 0,
  class: "di-field-tag-type"
}, ru = ["onClick"], cu = {
  key: 1,
  class: "di-binding-selector"
}, vu = { class: "di-form-group" }, pu = { class: "di-form-label" }, mu = { class: "di-binding-search-wrapper" }, fu = {
  key: 0,
  class: "di-binding-list"
}, bu = ["onClick"], hu = { class: "di-binding-item-main" }, yu = { class: "di-binding-name" }, gu = { class: "di-binding-type" }, ku = {
  key: 0,
  class: "di-binding-component"
}, xu = {
  key: 2,
  class: "di-master-inline"
}, wu = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, $u = {
  key: 0,
  class: "di-master-inline-section"
}, Cu = {
  key: 0,
  class: "di-master-entries-table"
}, _u = ["onUpdate:modelValue"], Iu = ["onUpdate:modelValue"], Tu = ["onUpdate:modelValue"], Uu = ["onClick"], Vu = { class: "di-condition-toggle" }, Su = {
  key: 0,
  class: "di-condition-badge"
}, Mu = { class: "di-form-group di-suggest-wrapper" }, Eu = { class: "di-calc-tags-input" }, Du = ["onClick"], Pu = ["placeholder"], Bu = { class: "di-form-group" }, Lu = { class: "di-form-group" }, Au = { class: "di-form-group" }, Fu = { class: "di-form-group" }, Ou = { class: "di-editor-footer" }, Nu = { class: "di-editor-actions" }, ju = /* @__PURE__ */ xt({
  __name: "DevElementEditor",
  setup(q) {
    const a = wt(), I = b("datasource"), T = b(""), Y = b(""), J = b(""), oe = b(""), ce = b(""), pe = b(!1), N = b([]), K = b(""), de = b(""), xe = b(""), ge = b(""), W = b([]), V = b("UTF-8"), Ie = b(","), Le = b(!0), ke = b(""), Ve = b(""), L = b(""), U = b(void 0), c = b(""), S = b(""), B = b(""), ee = b([]), te = b(""), Z = b(""), O = b(""), ne = b(""), we = b(""), F = b(""), $ = b(""), C = b([]), me = b(""), G = b(""), Ae = b(""), qe = b(""), ie = b(!1), ae = b([]), M = H(() => {
      if (le.value.length > 0) {
        const m = le.value[0];
        if (m.table && m.column) return `${m.table}.${m.column}`;
      }
      return "";
    }), Ue = H(() => M.value && a.getMasterDefinition(M.value) || null), A = b("db_direct"), le = b([]), se = b(""), ue = b(""), ve = b(""), fe = b(""), Ne = b(""), Te = b([]), ye = b(""), dt = b(!1), Qe = b(""), We = b(""), Ye = b(""), et = b(""), Re = b(""), Se = b(!1), De = b(""), Pe = b([]), je = b(""), ut = b(!1), tt = b(""), ze = b(""), lt = b(""), Ke = b(""), ot = b(""), Ge = b(!1), r = b(""), l = b(""), s = b(""), h = b(!1), k = H(() => a.editingElementId !== null), Q = H(() => a.editingElementId), d = H(() => T.value === "csv_export" || T.value === "csv_import"), Xe = H(() => T.value === "email"), st = H(() => d.value || Xe.value), X = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: rt, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: Tt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: jt, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: Kl, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: Hl, color: "#94a3b8", description: "自由メモ" }
    ];
    kt(Q, (m) => {
      if (m) {
        const t = a.getElementConfig(m);
        try {
          const o = document.querySelector(m);
          if (o) {
            t != null && t.elementType ? I.value = t.elementType : I.value = a.detectElementType(o);
            const y = o.querySelector("[data-di-binding]") || (o.hasAttribute("data-di-binding") ? o : null) || o.closest("[data-di-binding]");
            if (y) {
              const x = y.getAttribute("data-di-binding"), j = y.getAttribute("data-di-db"), Ce = y.getAttribute("data-di-db-type"), pt = y.getAttribute("data-di-db-comment");
              if (x && (s.value = x, l.value = "api", h.value = !1), j) {
                const [At, Ft] = j.split(".");
                At && Ft && (le.value.push({
                  table: At,
                  column: Ft,
                  type: Ce || void 0,
                  description: pt || void 0
                }), A.value || (A.value = "db_direct"));
              }
            }
          }
        } catch (o) {
          console.warn("[DevInspector] Failed to read element:", o);
        }
        if (t != null && t.fieldInfoList && t.fieldInfoList.length > 0 ? le.value = t.fieldInfoList.map((o) => ({ ...o })) : t != null && t.fieldInfo && (le.value = [{ ...t.fieldInfo }]), se.value = "", ue.value = "", ve.value = "", fe.value = "", t != null && t.note && (r.value = t.note.text || r.value, A.value = t.note.displayType || A.value, Ne.value = t.note.formatDescription || "", Qe.value = t.note.sampleValue || "", We.value = t.note.decimalHandling || "", Ye.value = t.note.unit || "", et.value = t.note.nullDisplay || "", Re.value = t.note.displayFormat || "", cl(t.note.calcDescription || "", t.note.calcSources || []), Se.value = t.note.storedCalc || !1, De.value = t.note.storedCalcLogic || "", Pe.value = t.note.storedCalcSources ? [...t.note.storedCalcSources] : [], tt.value = t.note.storedCalcTiming || "", ze.value = t.note.condition || "", lt.value = t.note.conditionColumn || "", Ke.value = t.note.hiddenBehavior || "", ot.value = t.note.hiddenNote || "", Ge.value = !!(t.note.condition || t.note.conditionColumn)), t != null && t.sourceBinding && (l.value = t.sourceBinding.type || l.value, s.value = t.sourceBinding.source || s.value, h.value = t.sourceBinding.isStatic || !1), t != null && t.actionInfo) {
          if (T.value = t.actionInfo.type || "", Y.value = t.actionInfo.target || "", J.value = t.actionInfo.method || "", oe.value = t.actionInfo.description || "", t.actionInfo.csvSpec) {
            const o = t.actionInfo.csvSpec;
            W.value = o.columns.map((y) => ({ ...y })), V.value = o.encoding || "UTF-8", Ie.value = o.delimiter || ",", Le.value = o.hasHeaderRow !== !1, ke.value = o.filenamePattern || "", Ve.value = o.sortOrder || "", L.value = o.filterCondition || "", U.value = o.maxRows, c.value = o.errorHandling || "", S.value = o.duplicateHandling || "", B.value = o.preValidation || "", ee.value = o.errorDefs ? o.errorDefs.map((y) => ({ ...y })) : [];
          }
          if (t.actionInfo.emailSpec) {
            const o = t.actionInfo.emailSpec;
            te.value = o.trigger || "", Z.value = o.to || "", O.value = o.cc || "", ne.value = o.bcc || "", we.value = o.subject || "", F.value = o.bodyTemplate || "", $.value = o.templatePath || "", C.value = o.variables ? [...o.variables] : [], G.value = o.attachments || "", Ae.value = o.conditions || "", qe.value = o.errorHandling || "";
          }
        }
        t != null && t.formInfo && (ce.value = t.formInfo.inputType || "", pe.value = t.formInfo.required || !1, N.value = t.formInfo.validation ? [...t.formInfo.validation] : [], de.value = t.formInfo.placeholder || "", xe.value = t.formInfo.defaultValue || "", ge.value = t.formInfo.description || "");
      } else
        re();
    });
    function re() {
      I.value = "datasource", A.value = "db_direct", le.value = [], se.value = "", ue.value = "", ve.value = "", fe.value = "", Ne.value = "", Qe.value = "", We.value = "", Ye.value = "", et.value = "", Re.value = "", Te.value = [], ye.value = "", Se.value = !1, De.value = "", Pe.value = [], je.value = "", tt.value = "", ze.value = "", lt.value = "", Ke.value = "", ot.value = "", Ge.value = !1, r.value = "", l.value = "", s.value = "", h.value = !1, T.value = "", Y.value = "", J.value = "", oe.value = "", W.value = [], V.value = "UTF-8", Ie.value = ",", Le.value = !0, ke.value = "", Ve.value = "", L.value = "", U.value = void 0, c.value = "", S.value = "", B.value = "", ee.value = [], ce.value = "", pe.value = !1, N.value = [], K.value = "", de.value = "", xe.value = "", ge.value = "", te.value = "", Z.value = "", O.value = "", ne.value = "", we.value = "", F.value = "", $.value = "", C.value = [], me.value = "", G.value = "", Ae.value = "", qe.value = "", ie.value = !1, ae.value = [];
    }
    function Fe() {
      a.stopEditing(), re();
    }
    function at() {
      if (Q.value)
        try {
          const m = document.querySelector(Q.value);
          if (!m) return;
          const t = a.autoDetectElementInfo(m, Q.value);
          t.sourceBinding && (l.value = t.sourceBinding.type || "", s.value = t.sourceBinding.source || "", h.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !A.value && (A.value = "static", r.value = r.value || "固定文言")), t.fieldInfo && (le.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), A.value || (A.value = "db_direct")), t.note && !r.value && (r.value = t.note.text || "");
        } catch (m) {
          console.error("[DevInspector] Auto-detect failed:", m);
        }
    }
    function bt() {
      if (!Q.value) return;
      const m = [...le.value];
      (A.value === "db_direct" || A.value === "db_formatted") && se.value && ue.value && m.push({
        table: se.value,
        column: ue.value,
        type: ve.value || void 0,
        description: fe.value || void 0
      });
      const t = m.length > 0 ? m : void 0, o = m.length > 0 ? m[0] : void 0, y = A.value === "db_direct" || A.value === "db_formatted", x = A.value || r.value ? {
        text: r.value || "",
        displayType: A.value,
        formatDescription: A.value === "db_formatted" && Ne.value || void 0,
        calcDescription: A.value === "calculated" && rl() || void 0,
        calcSources: A.value === "calculated" && Et().length > 0 ? Et() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: y && Se.value ? !0 : void 0,
        storedCalcLogic: y && Se.value && De.value || void 0,
        storedCalcSources: y && Se.value && Pe.value.length > 0 ? Pe.value : void 0,
        storedCalcTiming: y && Se.value && tt.value || void 0,
        sampleValue: Qe.value || void 0,
        decimalHandling: We.value || void 0,
        unit: Ye.value || void 0,
        nullDisplay: et.value || void 0,
        displayFormat: Re.value || void 0,
        condition: ze.value || void 0,
        conditionColumn: lt.value || void 0,
        hiddenBehavior: Ke.value || void 0,
        hiddenNote: ot.value || void 0
      } : void 0, j = l.value ? {
        type: l.value,
        source: s.value || void 0,
        isStatic: h.value
      } : void 0, Ce = I.value === "action" && T.value ? {
        type: T.value,
        target: Y.value || void 0,
        method: J.value ? J.value : void 0,
        description: oe.value || void 0,
        csvSpec: kl(),
        emailSpec: xl()
      } : void 0, pt = I.value === "form" ? {
        inputType: ce.value || void 0,
        required: pe.value || void 0,
        validation: N.value.length > 0 ? N.value : void 0,
        placeholder: de.value || void 0,
        defaultValue: xe.value || void 0,
        description: ge.value || void 0
      } : void 0;
      a.setElementConfig(Q.value, {
        elementType: I.value,
        fieldInfo: o,
        fieldInfoList: t,
        actionInfo: Ce,
        formInfo: pt,
        note: x,
        sourceBinding: j
      }), ie.value && M.value && _l(), Fe();
    }
    function $t() {
      Q.value && (a.deleteElementConfig(Q.value), Fe());
    }
    const ct = [
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
    ], Me = b(""), nt = b(!1), vt = H(() => a.searchSchemaColumns(Me.value).slice(0, 30));
    function Ct(m) {
      le.value.push({
        table: m.table,
        column: m.column,
        type: m.type || void 0,
        description: m.comment || void 0
      }), nt.value = !1, Me.value = "";
    }
    function E() {
      !se.value || !ue.value || (le.value.push({
        table: se.value,
        column: ue.value,
        type: ve.value || void 0,
        description: fe.value || void 0
      }), se.value = "", ue.value = "", ve.value = "", fe.value = "");
    }
    function $e(m) {
      le.value.splice(m, 1);
    }
    const Ee = H(() => a.getSchemaColumns().length > 0), He = b(!1), Je = b(!1), he = H(() => {
      var y;
      const m = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const j of x.fieldInfoList)
            j.table && m.add(j.table);
        else (y = x.fieldInfo) != null && y.table && m.add(x.fieldInfo.table);
      for (const x of a.getSchemaColumns())
        m.add(x.table);
      const t = [...m].sort();
      if (!se.value) return t;
      const o = se.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(o));
    }), ht = H(() => {
      var y;
      const m = /* @__PURE__ */ new Set();
      for (const x of Object.values(a.elementConfigs))
        if (x.fieldInfoList)
          for (const j of x.fieldInfoList)
            j.column && (!se.value || j.table === se.value) && m.add(j.column);
        else (y = x.fieldInfo) != null && y.column && (!se.value || x.fieldInfo.table === se.value) && m.add(x.fieldInfo.column);
      for (const x of a.getSchemaColumns())
        (!se.value || x.table === se.value) && m.add(x.column);
      const t = [...m].sort();
      if (!ue.value) return t;
      const o = ue.value.toLowerCase();
      return t.filter((x) => x.toLowerCase().includes(o));
    });
    function Wt() {
      setTimeout(() => {
        He.value = !1;
      }, 150);
    }
    function el() {
      setTimeout(() => {
        Je.value = !1;
      }, 150);
    }
    function tl(m) {
      if (se.value = m, He.value = !1, ue.value) {
        const t = a.getSchemaColumns().find((o) => o.table === m && o.column === ue.value);
        t && (ve.value = t.type || "", fe.value = t.comment || "");
      }
    }
    function ll(m) {
      if (ue.value = m, Je.value = !1, se.value) {
        const t = a.getSchemaColumns().find((o) => o.table === se.value && o.column === m);
        t && (ve.value = t.type || "", fe.value = t.comment || "");
      }
    }
    const St = H(() => {
      var y, x;
      const m = /* @__PURE__ */ new Set();
      for (const j of Object.values(a.elementConfigs))
        if (j.fieldInfoList)
          for (const Ce of j.fieldInfoList)
            Ce.table && Ce.column && m.add(`${Ce.table}.${Ce.column}`);
        else (y = j.fieldInfo) != null && y.table && ((x = j.fieldInfo) != null && x.column) && m.add(`${j.fieldInfo.table}.${j.fieldInfo.column}`);
      for (const j of a.getSchemaColumns())
        m.add(j.fullName);
      const t = [...m].sort();
      if (!ye.value) return t;
      const o = ye.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(o)) {
        const j = t.filter((Ce) => Ce.toLowerCase().includes(o));
        if (j.length > 0) return j;
      }
      return t;
    });
    function ol(m) {
      ye.value.trim() && Te.value.push({ type: "text", value: ye.value }), Te.value.push({ type: "tag", value: m }), ye.value = "";
    }
    function sl(m) {
      Te.value.splice(m, 1);
    }
    function nl(m) {
      if (m.key === "Backspace" && !ye.value && Te.value.length > 0) {
        const t = Te.value.pop();
        t.type === "text" && (ye.value = t.value);
      }
    }
    function il() {
      setTimeout(() => {
        dt.value = !1;
      }, 150);
    }
    const Mt = H(() => {
      var y, x;
      const m = /* @__PURE__ */ new Set();
      for (const j of a.getSchemaColumns())
        m.add(j.fullName);
      for (const j of Object.values(a.elementConfigs))
        if (j.fieldInfoList)
          for (const Ce of j.fieldInfoList)
            Ce.table && Ce.column && m.add(`${Ce.table}.${Ce.column}`);
        else (y = j.fieldInfo) != null && y.table && ((x = j.fieldInfo) != null && x.column) && m.add(`${j.fieldInfo.table}.${j.fieldInfo.column}`);
      const t = [...m].sort();
      if (!je.value) return t;
      const o = je.value.trim().toLowerCase();
      return t.filter((j) => j.toLowerCase().includes(o));
    });
    function al() {
      setTimeout(() => {
        ut.value = !1;
      }, 150);
    }
    function dl() {
      const m = je.value.trim();
      m && !Pe.value.includes(m) && Pe.value.push(m), je.value = "";
    }
    function ul(m) {
      Pe.value.includes(m) || Pe.value.push(m), je.value = "";
    }
    function rl() {
      const m = Te.value.map((t) => t.value);
      return ye.value.trim() && m.push(ye.value.trim()), m.join(" ").replace(/\s+/g, " ").trim();
    }
    function Et() {
      return Te.value.filter((m) => m.type === "tag").map((m) => m.value);
    }
    function cl(m, t) {
      if (!m && t.length === 0) {
        Te.value = [], ye.value = "";
        return;
      }
      if (t.length === 0) {
        Te.value = [], ye.value = m;
        return;
      }
      const o = [];
      let y = m;
      for (const j of t) {
        const Ce = y.indexOf(j);
        if (Ce >= 0) {
          const pt = y.substring(0, Ce).trim();
          pt && o.push({ type: "text", value: pt }), o.push({ type: "tag", value: j }), y = y.substring(Ce + j.length);
        }
      }
      const x = y.trim();
      x && o.push({ type: "text", value: x }), o.length === 0 ? ye.value = m : (Te.value = o, ye.value = "");
    }
    function vl() {
      const m = K.value.trim();
      m && !N.value.includes(m) && N.value.push(m), K.value = "";
    }
    function pl(m) {
      N.value.splice(m, 1);
    }
    function ml(m) {
      m.key === "Backspace" && !K.value && N.value.length > 0 && N.value.pop();
    }
    function fl() {
      W.value.push({ name: "", dbMapping: "", type: "string", required: !1, description: "" });
    }
    function bl(m) {
      W.value.splice(m, 1);
    }
    function Dt(m, t) {
      const o = m + t;
      if (o < 0 || o >= W.value.length) return;
      const y = W.value[m];
      W.value[m] = W.value[o], W.value[o] = y, W.value = [...W.value];
    }
    function hl() {
      ee.value.push({ condition: "", message: "", column: "", severity: "error" });
    }
    function yl(m) {
      ee.value.splice(m, 1);
    }
    const gl = H(() => W.value.filter((m) => m.name).map((m) => m.name));
    function kl() {
      if (T.value !== "csv_export" && T.value !== "csv_import") return;
      const m = ee.value.filter((t) => t.condition || t.message);
      return {
        columns: W.value.filter((t) => t.name),
        encoding: V.value || void 0,
        delimiter: Ie.value || void 0,
        hasHeaderRow: Le.value,
        filenamePattern: ke.value || void 0,
        sortOrder: Ve.value || void 0,
        filterCondition: L.value || void 0,
        maxRows: U.value || void 0,
        errorHandling: c.value || void 0,
        duplicateHandling: S.value || void 0,
        preValidation: B.value || void 0,
        errorDefs: m.length > 0 ? m : void 0
      };
    }
    function xl() {
      if (T.value === "email")
        return {
          trigger: te.value || "",
          to: Z.value || "",
          cc: O.value || void 0,
          bcc: ne.value || void 0,
          subject: we.value || "",
          bodyTemplate: F.value || void 0,
          templatePath: $.value || void 0,
          variables: C.value.length > 0 ? C.value : void 0,
          attachments: G.value || void 0,
          conditions: Ae.value || void 0,
          errorHandling: qe.value || void 0
        };
    }
    function wl() {
      const m = me.value.trim();
      m && !C.value.includes(m) && C.value.push(m), me.value = "";
    }
    function $l(m) {
      C.value.splice(m, 1);
    }
    function Cl(m) {
      m.key === "Backspace" && !me.value && C.value.length > 0 && C.value.pop();
    }
    kt(M, (m) => {
      if (m) {
        const t = a.getMasterDefinition(m);
        t ? (ae.value = t.entries.map((o) => ({ ...o })), ie.value = !0) : (ae.value = [], ie.value = !1);
      } else
        ae.value = [], ie.value = !1;
    });
    function Pt() {
      ie.value = !ie.value, ie.value && ae.value.length === 0 && ae.value.push({ value: "", label: "" });
    }
    function Bt() {
      ae.value.push({ value: "", label: "" });
    }
    function Lt(m) {
      ae.value.splice(m, 1);
    }
    function _l() {
      var x;
      if (!M.value) return;
      const [m, t] = M.value.split(".");
      if (!m || !t) return;
      const o = ae.value.filter((j) => j.value || j.label);
      if (o.length === 0) {
        a.deleteMasterDefinition(M.value);
        return;
      }
      const y = a.getMasterDefinition(M.value);
      a.setMasterDefinition({
        id: M.value,
        table: m,
        column: t,
        name: (y == null ? void 0 : y.name) || t,
        columnType: (y == null ? void 0 : y.columnType) || ((x = le.value[0]) == null ? void 0 : x.type),
        description: y == null ? void 0 : y.description,
        entries: o,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (m, t) => (n(), Oe(it, { to: "body" }, [
      k.value ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(Fe, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", {
          class: z(["di-editor-modal", { "di-editor-modal-wide": st.value }])
        }, [
          e("div", Ui, [
            t[74] || (t[74] = e("h3", null, "要素情報を編集", -1)),
            e("div", Vi, [
              e("button", {
                onClick: at,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                w(u(Tt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Fe,
                class: "di-editor-close"
              }, [
                w(u(Ze), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          h.value ? (n(), i("div", Si, [...t[75] || (t[75] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : l.value ? (n(), i("div", Mi, [
            e("span", {
              class: z(["di-binding-badge", "di-binding-" + l.value])
            }, p(l.value), 3),
            s.value ? (n(), i("span", Ei, p(s.value), 1)) : v("", !0)
          ])) : v("", !0),
          e("div", Di, [
            e("button", {
              onClick: t[0] || (t[0] = (o) => I.value = "datasource"),
              class: z(["di-editor-tab", { "di-editor-tab-active": I.value === "datasource" }])
            }, [
              w(u(rt), { style: { width: "14px", height: "14px" } }),
              t[76] || (t[76] = D(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[1] || (t[1] = (o) => I.value = "action"),
              class: z(["di-editor-tab", { "di-editor-tab-active": I.value === "action" }])
            }, [
              w(u(Xl), { style: { width: "14px", height: "14px" } }),
              t[77] || (t[77] = D(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[2] || (t[2] = (o) => I.value = "form"),
              class: z(["di-editor-tab", { "di-editor-tab-active": I.value === "form" }])
            }, [
              w(u(Al), { style: { width: "14px", height: "14px" } }),
              t[78] || (t[78] = D(" フォーム ", -1))
            ], 2)
          ]),
          e("div", Pi, [
            I.value === "datasource" ? (n(), i(_, { key: 0 }, [
              e("div", Bi, [
                t[79] || (t[79] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", Li, [
                  (n(), i(_, null, P(X, (o) => e("button", {
                    key: o.value,
                    onClick: (y) => A.value = o.value,
                    class: z(["di-display-type-card", { "di-display-type-active": A.value === o.value }]),
                    style: Be(A.value === o.value ? { borderColor: o.color, background: o.color + "18" } : {})
                  }, [
                    (n(), Oe(Il(o.icon), {
                      style: Be([{ width: "20px", height: "20px" }, { color: A.value === o.value ? o.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: Be({ color: A.value === o.value ? o.color : "#94a3b8" })
                    }, p(o.label), 5),
                    e("span", Fi, p(o.description), 1)
                  ], 14, Ai)), 64))
                ])
              ]),
              A.value === "db_direct" || A.value === "db_formatted" ? (n(), i(_, { key: 0 }, [
                le.value.length > 0 ? (n(), i("div", Oi, [
                  t[80] || (t[80] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", Ni, [
                    (n(!0), i(_, null, P(le.value, (o, y) => (n(), i("div", {
                      key: y,
                      class: "di-field-tag"
                    }, [
                      e("span", ji, p(o.table) + "." + p(o.column), 1),
                      o.type ? (n(), i("span", Hi, p(o.type), 1)) : v("", !0),
                      e("button", {
                        onClick: (x) => $e(y),
                        class: "di-field-tag-remove"
                      }, "×", 8, qi)
                    ]))), 128))
                  ])
                ])) : v("", !0),
                Ee.value ? (n(), i("div", Ri, [
                  e("div", zi, [
                    e("label", Yi, [
                      w(u(rt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[81] || (t[81] = D(" schema.rb から選択 ", -1))
                    ]),
                    e("div", Ki, [
                      f(e("input", {
                        "onUpdate:modelValue": t[3] || (t[3] = (o) => Me.value = o),
                        onFocus: t[4] || (t[4] = (o) => nt.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [g, Me.value]
                      ]),
                      Me.value ? (n(), i("button", {
                        key: 0,
                        onClick: t[5] || (t[5] = (o) => {
                          Me.value = "", nt.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        w(u(Ze), { style: { width: "14px", height: "14px" } })
                      ])) : v("", !0)
                    ]),
                    nt.value && vt.value.length > 0 ? (n(), i("div", Gi, [
                      (n(!0), i(_, null, P(vt.value, (o) => (n(), i("button", {
                        key: o.fullName,
                        onClick: (y) => Ct(o),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", Ji, [
                          e("span", Zi, p(o.fullName), 1),
                          e("span", Qi, p(o.type), 1)
                        ]),
                        o.comment ? (n(), i("span", Wi, p(o.comment), 1)) : v("", !0)
                      ], 8, Xi))), 128))
                    ])) : nt.value && Me.value && vt.value.length === 0 ? (n(), i("div", ea, " 該当するカラムが見つかりません ")) : v("", !0)
                  ])
                ])) : v("", !0),
                Ee.value ? (n(), i("div", ta, [...t[82] || (t[82] = [
                  e("span", null, "または手動入力", -1)
                ])])) : v("", !0),
                e("div", la, [
                  e("div", oa, [
                    t[83] || (t[83] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[6] || (t[6] = (o) => se.value = o),
                      onFocus: t[7] || (t[7] = (o) => He.value = !0),
                      onBlur: t[8] || (t[8] = (o) => Wt()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [g, se.value]
                    ]),
                    He.value && he.value.length > 0 ? (n(), i("div", sa, [
                      (n(!0), i(_, null, P(he.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: be((y) => tl(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, p(o), 41, na))), 128))
                    ])) : v("", !0)
                  ]),
                  e("div", ia, [
                    t[84] || (t[84] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (o) => ue.value = o),
                      onFocus: t[10] || (t[10] = (o) => Je.value = !0),
                      onBlur: t[11] || (t[11] = (o) => el()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [g, ue.value]
                    ]),
                    Je.value && ht.value.length > 0 ? (n(), i("div", aa, [
                      (n(!0), i(_, null, P(ht.value.slice(0, 10), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: be((y) => ll(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, p(o), 41, da))), 128))
                    ])) : v("", !0)
                  ])
                ]),
                e("div", ua, [
                  t[86] || (t[86] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  f(e("select", {
                    "onUpdate:modelValue": t[12] || (t[12] = (o) => ve.value = o),
                    class: "di-select"
                  }, [
                    t[85] || (t[85] = e("option", { value: "" }, "選択してください", -1)),
                    (n(), i(_, null, P(ct, (o) => e("option", {
                      key: o,
                      value: o
                    }, p(o), 9, ra)), 64))
                  ], 512), [
                    [_e, ve.value]
                  ])
                ]),
                e("button", {
                  onClick: E,
                  class: "di-btn-add-field",
                  disabled: !se.value || !ue.value
                }, " + カラムを追加 ", 8, ca),
                M.value ? (n(), i("div", va, [
                  e("button", {
                    onClick: Pt,
                    class: z(["di-btn-condition-toggle", { "di-condition-active": ie.value }])
                  }, [
                    w(u(Rt), { style: { width: "14px", height: "14px" } }),
                    t[87] || (t[87] = D(" マスタ値を定義 ", -1)),
                    Ue.value ? (n(), i("span", pa, p(Ue.value.entries.length) + "件", 1)) : v("", !0)
                  ], 2),
                  ie.value ? (n(), i("div", ma, [
                    ae.value.length > 0 ? (n(), i("div", fa, [
                      t[88] || (t[88] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (n(!0), i(_, null, P(ae.value, (o, y) => (n(), i("div", {
                        key: y,
                        class: "di-master-entry-row"
                      }, [
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.value = x,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, ba), [
                          [g, o.value]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.label = x,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, ha), [
                          [g, o.label]
                        ]),
                        f(e("input", {
                          "onUpdate:modelValue": (x) => o.color = x,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, ya), [
                          [g, o.color]
                        ]),
                        e("button", {
                          onClick: (x) => Lt(y),
                          class: "di-master-entry-remove"
                        }, "×", 8, ga)
                      ]))), 128))
                    ])) : v("", !0),
                    e("button", {
                      onClick: Bt,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : v("", !0)
                ])) : v("", !0),
                A.value === "db_formatted" ? (n(), i("div", ka, [
                  t[89] || (t[89] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[13] || (t[13] = (o) => Ne.value = o),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [g, Ne.value]
                  ])
                ])) : v("", !0),
                e("div", xa, [
                  e("button", {
                    onClick: t[14] || (t[14] = (o) => Se.value = !Se.value),
                    class: z(["di-btn-condition-toggle", { "di-condition-active": Se.value }])
                  }, [
                    w(u(jt), { style: { width: "14px", height: "14px" } }),
                    t[90] || (t[90] = D(" このカラムは計算値を保存している ", -1)),
                    Se.value ? (n(), i("span", wa, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Se.value ? (n(), i("div", $a, [
                  e("div", Ca, [
                    t[91] || (t[91] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[15] || (t[15] = (o) => De.value = o),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [g, De.value]
                    ])
                  ]),
                  e("div", _a, [
                    t[92] || (t[92] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", Ia, [
                      (n(!0), i(_, null, P(Pe.value, (o, y) => (n(), i("span", {
                        key: y,
                        class: "di-calc-tag"
                      }, [
                        D(p(o) + " ", 1),
                        e("button", {
                          onClick: be((x) => Pe.value.splice(y, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, Ta)
                      ]))), 128)),
                      f(e("input", {
                        "onUpdate:modelValue": t[16] || (t[16] = (o) => je.value = o),
                        onFocus: t[17] || (t[17] = (o) => ut.value = !0),
                        onBlur: al,
                        onKeydown: t[18] || (t[18] = yt(be((o) => dl(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [g, je.value]
                      ])
                    ]),
                    ut.value && Mt.value.length > 0 ? (n(), i("div", Ua, [
                      (n(!0), i(_, null, P(Mt.value.slice(0, 12), (o) => (n(), i("button", {
                        key: o,
                        onMousedown: be((y) => ul(o), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        w(u(rt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        D(" " + p(o), 1)
                      ], 40, Va))), 128))
                    ])) : v("", !0),
                    t[93] || (t[93] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", Sa, [
                    t[95] || (t[95] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[19] || (t[19] = (o) => tt.value = o),
                      class: "di-select"
                    }, [...t[94] || (t[94] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [_e, tt.value]
                    ])
                  ])
                ])) : v("", !0)
              ], 64)) : v("", !0),
              A.value === "calculated" ? (n(), i("div", Ma, [
                t[96] || (t[96] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[23] || (t[23] = (o) => {
                    var y;
                    return (y = m.$refs.calcInputEl) == null ? void 0 : y.focus();
                  })
                }, [
                  (n(!0), i(_, null, P(Te.value, (o, y) => (n(), i(_, { key: y }, [
                    o.type === "tag" ? (n(), i("span", Ea, [
                      D(p(o.value) + " ", 1),
                      e("button", {
                        onClick: be((x) => sl(y), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, Da)
                    ])) : (n(), i("span", Pa, p(o.value), 1))
                  ], 64))), 128)),
                  f(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[20] || (t[20] = (o) => ye.value = o),
                    onFocus: t[21] || (t[21] = (o) => dt.value = !0),
                    onBlur: t[22] || (t[22] = (o) => il()),
                    onKeydown: nl,
                    type: "text",
                    placeholder: Te.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Ba), [
                    [g, ye.value]
                  ])
                ]),
                dt.value && St.value.length > 0 ? (n(), i("div", La, [
                  (n(!0), i(_, null, P(St.value.slice(0, 12), (o) => (n(), i("button", {
                    key: o,
                    onMousedown: be((y) => ol(o), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    w(u(rt), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    D(" " + p(o), 1)
                  ], 40, Aa))), 128))
                ])) : v("", !0),
                t[97] || (t[97] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : v("", !0),
              A.value === "static" || A.value === "other" ? (n(), i("div", Fa, [
                t[98] || (t[98] = e("label", { class: "di-form-label" }, "メモ", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[24] || (t[24] = (o) => r.value = o),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [g, r.value]
                ])
              ])) : v("", !0),
              A.value && A.value !== "other" ? (n(), i(_, { key: 3 }, [
                e("div", Oa, [
                  e("button", {
                    onClick: t[25] || (t[25] = (o) => Ge.value = !Ge.value),
                    class: z(["di-btn-condition-toggle", { "di-condition-active": Ge.value || ze.value }])
                  }, [
                    w(u(Gt), { style: { width: "14px", height: "14px" } }),
                    t[99] || (t[99] = D(" 条件付き表示 ", -1)),
                    ze.value ? (n(), i("span", Na, "設定あり")) : v("", !0)
                  ], 2)
                ]),
                Ge.value ? (n(), i("div", ja, [
                  e("div", Ha, [
                    t[100] || (t[100] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[26] || (t[26] = (o) => ze.value = o),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [g, ze.value]
                    ])
                  ]),
                  e("div", qa, [
                    t[101] || (t[101] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[27] || (t[27] = (o) => lt.value = o),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [g, lt.value]
                    ])
                  ]),
                  e("div", Ra, [
                    e("div", za, [
                      t[103] || (t[103] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[28] || (t[28] = (o) => Ke.value = o),
                        class: "di-select"
                      }, [...t[102] || (t[102] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [_e, Ke.value]
                      ])
                    ])
                  ]),
                  Ke.value === "different_value" ? (n(), i("div", Ya, [
                    t[104] || (t[104] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (o) => ot.value = o),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [g, ot.value]
                    ])
                  ])) : v("", !0)
                ])) : v("", !0)
              ], 64)) : v("", !0),
              A.value === "db_direct" || A.value === "db_formatted" || A.value === "calculated" ? (n(), i(_, { key: 4 }, [
                t[112] || (t[112] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Ka, [
                  e("div", Ga, [
                    t[105] || (t[105] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (o) => Qe.value = o),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [g, Qe.value]
                    ])
                  ]),
                  e("div", Xa, [
                    t[106] || (t[106] = e("label", { class: "di-form-label" }, "単位", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (o) => Ye.value = o),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [g, Ye.value]
                    ])
                  ])
                ]),
                e("div", Ja, [
                  e("div", Za, [
                    t[108] || (t[108] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[32] || (t[32] = (o) => We.value = o),
                      class: "di-select"
                    }, [...t[107] || (t[107] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [_e, We.value]
                    ])
                  ]),
                  e("div", Qa, [
                    t[109] || (t[109] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (o) => et.value = o),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [g, et.value]
                    ])
                  ])
                ]),
                e("div", Wa, [
                  t[110] || (t[110] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[34] || (t[34] = (o) => Re.value = o),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [g, Re.value]
                  ])
                ]),
                e("div", ed, [
                  t[111] || (t[111] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[35] || (t[35] = (o) => r.value = o),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [g, r.value]
                  ])
                ])
              ], 64)) : v("", !0)
            ], 64)) : v("", !0),
            I.value === "action" ? (n(), i(_, { key: 1 }, [
              e("div", td, [
                t[114] || (t[114] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[36] || (t[36] = (o) => T.value = o),
                  class: "di-select"
                }, [...t[113] || (t[113] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1),
                  e("option", { value: "csv_export" }, "CSV出力", -1),
                  e("option", { value: "csv_import" }, "CSV取込", -1),
                  e("option", { value: "email" }, "メール送信", -1)
                ])], 512), [
                  [_e, T.value]
                ])
              ]),
              e("div", ld, [
                t[115] || (t[115] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[37] || (t[37] = (o) => Y.value = o),
                  type: "text",
                  placeholder: T.value === "navigate" ? "/tasks" : T.value === "api" ? "/api/users" : T.value === "modal" ? "confirm-dialog" : T.value === "csv_export" ? "/api/export/users" : T.value === "csv_import" ? "/api/import/users" : "",
                  class: "di-input di-input-mono"
                }, null, 8, od), [
                  [g, Y.value]
                ])
              ]),
              T.value === "api" ? (n(), i("div", sd, [
                t[117] || (t[117] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[38] || (t[38] = (o) => J.value = o),
                  class: "di-select"
                }, [...t[116] || (t[116] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [_e, J.value]
                ])
              ])) : v("", !0),
              e("div", nd, [
                t[118] || (t[118] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[39] || (t[39] = (o) => oe.value = o),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [g, oe.value]
                ])
              ]),
              T.value === "csv_export" || T.value === "csv_import" ? (n(), i(_, { key: 1 }, [
                e("div", id, [
                  e("span", null, [
                    w(u(Zt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[119] || (t[119] = D(" CSV仕様", -1))
                  ])
                ]),
                e("div", ad, [
                  t[126] || (t[126] = e("label", { class: "di-form-label" }, "ファイル設定", -1)),
                  e("div", dd, [
                    e("div", ud, [
                      t[121] || (t[121] = e("label", { class: "di-form-label" }, "エンコーディング", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[40] || (t[40] = (o) => V.value = o),
                        class: "di-select"
                      }, [...t[120] || (t[120] = [
                        e("option", { value: "UTF-8" }, "UTF-8", -1),
                        e("option", { value: "Shift_JIS" }, "Shift_JIS", -1),
                        e("option", { value: "EUC-JP" }, "EUC-JP", -1),
                        e("option", { value: "UTF-8 BOM" }, "UTF-8 BOM", -1)
                      ])], 512), [
                        [_e, V.value]
                      ])
                    ]),
                    e("div", rd, [
                      t[123] || (t[123] = e("label", { class: "di-form-label" }, "区切り文字", -1)),
                      f(e("select", {
                        "onUpdate:modelValue": t[41] || (t[41] = (o) => Ie.value = o),
                        class: "di-select"
                      }, [...t[122] || (t[122] = [
                        e("option", { value: "," }, "カンマ (,)", -1),
                        e("option", { value: "	" }, "タブ", -1),
                        e("option", { value: "|" }, "パイプ (|)", -1)
                      ])], 512), [
                        [_e, Ie.value]
                      ])
                    ])
                  ]),
                  e("div", cd, [
                    e("label", vd, [
                      f(e("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": t[42] || (t[42] = (o) => Le.value = o),
                        class: "di-checkbox"
                      }, null, 512), [
                        [Nt, Le.value]
                      ]),
                      t[124] || (t[124] = D(" ヘッダー行あり ", -1))
                    ])
                  ]),
                  e("div", pd, [
                    t[125] || (t[125] = e("label", { class: "di-form-label" }, "ファイル名パターン", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[43] || (t[43] = (o) => ke.value = o),
                      type: "text",
                      placeholder: "users_{YYYYMMDD}.csv",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [g, ke.value]
                    ])
                  ])
                ]),
                e("div", md, [
                  t[129] || (t[129] = e("label", { class: "di-form-label" }, "CSV列定義", -1)),
                  W.value.length > 0 ? (n(), i("div", fd, [
                    t[128] || (t[128] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-col-no" }, "No"),
                      e("span", { class: "di-csv-col-name" }, "項目名"),
                      e("span", { class: "di-csv-col-db" }, "DBマッピング"),
                      e("span", { class: "di-csv-col-proc" }, "加工"),
                      e("span", { class: "di-csv-col-type" }, "型"),
                      e("span", { class: "di-csv-col-req" }, "必須"),
                      e("span", { class: "di-csv-col-desc" }, "説明"),
                      e("span", { class: "di-csv-col-act" })
                    ], -1)),
                    (n(!0), i(_, null, P(W.value, (o, y) => (n(), i("div", {
                      key: y,
                      class: "di-csv-column-row"
                    }, [
                      e("span", bd, p(y + 1), 1),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.name = x,
                        placeholder: "項目名",
                        class: "di-csv-input di-csv-col-name"
                      }, null, 8, hd), [
                        [g, o.name]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.dbMapping = x,
                        placeholder: "table.col",
                        class: "di-csv-input di-csv-col-db"
                      }, null, 8, yd), [
                        [g, o.dbMapping]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.processing = x,
                        placeholder: "姓+名, IF...",
                        class: "di-csv-input di-csv-col-proc"
                      }, null, 8, gd), [
                        [g, o.processing]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.type = x,
                        class: "di-csv-select di-csv-col-type"
                      }, [...t[127] || (t[127] = [
                        e("option", { value: "" }, "-", -1),
                        e("option", { value: "string" }, "string", -1),
                        e("option", { value: "integer" }, "integer", -1),
                        e("option", { value: "decimal" }, "decimal", -1),
                        e("option", { value: "date" }, "date", -1),
                        e("option", { value: "datetime" }, "datetime", -1),
                        e("option", { value: "boolean" }, "boolean", -1)
                      ])], 8, kd), [
                        [_e, o.type]
                      ]),
                      e("label", xd, [
                        f(e("input", {
                          type: "checkbox",
                          "onUpdate:modelValue": (x) => o.required = x,
                          class: "di-checkbox"
                        }, null, 8, wd), [
                          [Nt, o.required]
                        ])
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.description = x,
                        placeholder: "備考",
                        class: "di-csv-input di-csv-col-desc"
                      }, null, 8, $d), [
                        [g, o.description]
                      ]),
                      e("div", Cd, [
                        e("button", {
                          onClick: (x) => Dt(y, -1),
                          disabled: y === 0,
                          class: "di-csv-move-btn",
                          title: "上へ"
                        }, [
                          w(u(El), { style: { width: "12px", height: "12px" } })
                        ], 8, _d),
                        e("button", {
                          onClick: (x) => Dt(y, 1),
                          disabled: y === W.value.length - 1,
                          class: "di-csv-move-btn",
                          title: "下へ"
                        }, [
                          w(u(Jt), { style: { width: "12px", height: "12px" } })
                        ], 8, Id),
                        e("button", {
                          onClick: (x) => bl(y),
                          class: "di-csv-remove-btn",
                          title: "削除"
                        }, "×", 8, Td)
                      ])
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: fl,
                    class: "di-btn-add-field"
                  }, " + 列を追加 ")
                ]),
                T.value === "csv_export" ? (n(), i(_, { key: 0 }, [
                  t[133] || (t[133] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "出力オプション")
                  ], -1)),
                  e("div", Ud, [
                    t[130] || (t[130] = e("label", { class: "di-form-label" }, "ソート順", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[44] || (t[44] = (o) => Ve.value = o),
                      type: "text",
                      placeholder: "created_at DESC",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [g, Ve.value]
                    ])
                  ]),
                  e("div", Vd, [
                    t[131] || (t[131] = e("label", { class: "di-form-label" }, "抽出条件", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[45] || (t[45] = (o) => L.value = o),
                      type: "text",
                      placeholder: "status = 'active'",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [g, L.value]
                    ])
                  ]),
                  e("div", Sd, [
                    t[132] || (t[132] = e("label", { class: "di-form-label" }, "最大行数", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[46] || (t[46] = (o) => U.value = o),
                      type: "number",
                      placeholder: "10000",
                      class: "di-input"
                    }, null, 512), [
                      [
                        g,
                        U.value,
                        void 0,
                        { number: !0 }
                      ]
                    ])
                  ])
                ], 64)) : v("", !0),
                T.value === "csv_import" ? (n(), i(_, { key: 1 }, [
                  t[139] || (t[139] = e("div", { class: "di-form-divider" }, [
                    e("span", null, "取込オプション")
                  ], -1)),
                  e("div", Md, [
                    t[135] || (t[135] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[47] || (t[47] = (o) => c.value = o),
                      class: "di-select"
                    }, [...t[134] || (t[134] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "stop_on_first" }, "最初のエラーで停止", -1),
                      e("option", { value: "skip_and_continue" }, "スキップして続行", -1),
                      e("option", { value: "collect_all" }, "全エラー収集", -1)
                    ])], 512), [
                      [_e, c.value]
                    ])
                  ]),
                  e("div", Ed, [
                    t[137] || (t[137] = e("label", { class: "di-form-label" }, "重複処理", -1)),
                    f(e("select", {
                      "onUpdate:modelValue": t[48] || (t[48] = (o) => S.value = o),
                      class: "di-select"
                    }, [...t[136] || (t[136] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "skip" }, "スキップ", -1),
                      e("option", { value: "overwrite" }, "上書き", -1),
                      e("option", { value: "error" }, "エラー", -1)
                    ])], 512), [
                      [_e, S.value]
                    ])
                  ]),
                  e("div", Dd, [
                    t[138] || (t[138] = e("label", { class: "di-form-label" }, "事前バリデーション", -1)),
                    f(e("textarea", {
                      "onUpdate:modelValue": t[49] || (t[49] = (o) => B.value = o),
                      rows: "2",
                      placeholder: "取込前のチェック内容...",
                      class: "di-textarea"
                    }, null, 512), [
                      [g, B.value]
                    ])
                  ])
                ], 64)) : v("", !0),
                t[143] || (t[143] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "エラー定義")
                ], -1)),
                e("div", Pd, [
                  ee.value.length > 0 ? (n(), i("div", Bd, [
                    t[142] || (t[142] = e("div", { class: "di-csv-columns-header" }, [
                      e("span", { class: "di-csv-err-col" }, "対象列"),
                      e("span", { class: "di-csv-err-cond" }, "エラー条件"),
                      e("span", { class: "di-csv-err-msg" }, "エラーメッセージ"),
                      e("span", { class: "di-csv-err-sev" }, "種別"),
                      e("span", { class: "di-csv-err-act" })
                    ], -1)),
                    (n(!0), i(_, null, P(ee.value, (o, y) => (n(), i("div", {
                      key: y,
                      class: "di-csv-column-row"
                    }, [
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.column = x,
                        class: "di-csv-select di-csv-err-col"
                      }, [
                        t[140] || (t[140] = e("option", { value: "" }, "（全体）", -1)),
                        (n(!0), i(_, null, P(gl.value, (x) => (n(), i("option", {
                          key: x,
                          value: x
                        }, p(x), 9, Ad))), 128))
                      ], 8, Ld), [
                        [_e, o.column]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.condition = x,
                        placeholder: "必須項目が空",
                        class: "di-csv-input di-csv-err-cond"
                      }, null, 8, Fd), [
                        [g, o.condition]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.message = x,
                        placeholder: "○○は必須です",
                        class: "di-csv-input di-csv-err-msg"
                      }, null, 8, Od), [
                        [g, o.message]
                      ]),
                      f(e("select", {
                        "onUpdate:modelValue": (x) => o.severity = x,
                        class: "di-csv-select di-csv-err-sev"
                      }, [...t[141] || (t[141] = [
                        e("option", { value: "error" }, "エラー", -1),
                        e("option", { value: "warning" }, "警告", -1)
                      ])], 8, Nd), [
                        [_e, o.severity]
                      ]),
                      e("button", {
                        onClick: (x) => yl(y),
                        class: "di-csv-remove-btn",
                        title: "削除"
                      }, "×", 8, jd)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: hl,
                    class: "di-btn-add-field"
                  }, " + エラー定義を追加 ")
                ])
              ], 64)) : v("", !0),
              T.value === "email" ? (n(), i(_, { key: 2 }, [
                e("div", Hd, [
                  e("span", null, [
                    w(u(jl), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[144] || (t[144] = D(" メール基本設定", -1))
                  ])
                ]),
                e("div", qd, [
                  e("div", Rd, [
                    t[145] || (t[145] = e("label", { class: "di-form-label" }, "トリガー *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[50] || (t[50] = (o) => te.value = o),
                      type: "text",
                      placeholder: "注文確定時、ボタンクリック",
                      class: "di-input"
                    }, null, 512), [
                      [g, te.value]
                    ])
                  ]),
                  e("div", zd, [
                    t[146] || (t[146] = e("label", { class: "di-form-label" }, "宛先 *", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[51] || (t[51] = (o) => Z.value = o),
                      type: "text",
                      placeholder: "ユーザーメール、管理者固定",
                      class: "di-input"
                    }, null, 512), [
                      [g, Z.value]
                    ])
                  ])
                ]),
                e("div", Yd, [
                  e("div", Kd, [
                    t[147] || (t[147] = e("label", { class: "di-form-label" }, "CC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[52] || (t[52] = (o) => O.value = o),
                      type: "text",
                      placeholder: "CC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [g, O.value]
                    ])
                  ]),
                  e("div", Gd, [
                    t[148] || (t[148] = e("label", { class: "di-form-label" }, "BCC", -1)),
                    f(e("input", {
                      "onUpdate:modelValue": t[53] || (t[53] = (o) => ne.value = o),
                      type: "text",
                      placeholder: "BCC宛先",
                      class: "di-input"
                    }, null, 512), [
                      [g, ne.value]
                    ])
                  ])
                ]),
                e("div", Xd, [
                  t[149] || (t[149] = e("label", { class: "di-form-label" }, "件名テンプレート *", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[54] || (t[54] = (o) => we.value = o),
                    type: "text",
                    placeholder: "【注文確認】ご注文番号 {orderNumber}",
                    class: "di-input"
                  }, null, 512), [
                    [g, we.value]
                  ])
                ]),
                e("div", Jd, [
                  t[150] || (t[150] = e("label", { class: "di-form-label" }, "本文テンプレート概要", -1)),
                  f(e("textarea", {
                    "onUpdate:modelValue": t[55] || (t[55] = (o) => F.value = o),
                    rows: "3",
                    placeholder: "本文の概要を記述...",
                    class: "di-textarea"
                  }, null, 512), [
                    [g, F.value]
                  ])
                ]),
                e("div", Zd, [
                  t[151] || (t[151] = e("label", { class: "di-form-label" }, "テンプレートファイルパス", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[56] || (t[56] = (o) => $.value = o),
                    type: "text",
                    placeholder: "resources/mail/order_confirm.blade.php",
                    class: "di-input di-input-mono"
                  }, null, 512), [
                    [g, $.value]
                  ])
                ]),
                t[156] || (t[156] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "差し込み変数")
                ], -1)),
                e("div", Qd, [
                  e("div", Wd, [
                    (n(!0), i(_, null, P(C.value, (o, y) => (n(), i("span", {
                      key: y,
                      class: "di-calc-tag"
                    }, [
                      D(p(o) + " ", 1),
                      e("button", {
                        onClick: be((x) => $l(y), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, eu)
                    ]))), 128)),
                    f(e("input", {
                      "onUpdate:modelValue": t[57] || (t[57] = (o) => me.value = o),
                      onKeydown: [
                        t[58] || (t[58] = yt(be((o) => wl(), ["prevent"]), ["enter"])),
                        Cl
                      ],
                      type: "text",
                      placeholder: "変数名を入力してEnter (例: userName)",
                      class: "di-calc-tags-field",
                      autocomplete: "off"
                    }, null, 544), [
                      [g, me.value]
                    ])
                  ]),
                  t[152] || (t[152] = e("span", { class: "di-form-hint" }, "Enter で追加", -1))
                ]),
                t[157] || (t[157] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "オプション")
                ], -1)),
                e("div", tu, [
                  t[153] || (t[153] = e("label", { class: "di-form-label" }, "添付ファイル", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[59] || (t[59] = (o) => G.value = o),
                    type: "text",
                    placeholder: "添付ファイルの説明",
                    class: "di-input"
                  }, null, 512), [
                    [g, G.value]
                  ])
                ]),
                e("div", lu, [
                  t[154] || (t[154] = e("label", { class: "di-form-label" }, "送信条件", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[60] || (t[60] = (o) => Ae.value = o),
                    type: "text",
                    placeholder: "メール送信設定がONの場合",
                    class: "di-input"
                  }, null, 512), [
                    [g, Ae.value]
                  ])
                ]),
                e("div", ou, [
                  t[155] || (t[155] = e("label", { class: "di-form-label" }, "エラー処理", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": t[61] || (t[61] = (o) => qe.value = o),
                    type: "text",
                    placeholder: "キューに入れてリトライ",
                    class: "di-input"
                  }, null, 512), [
                    [g, qe.value]
                  ])
                ])
              ], 64)) : v("", !0),
              e("div", su, [
                t[158] || (t[158] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[62] || (t[62] = (o) => r.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [g, r.value]
                ])
              ])
            ], 64)) : v("", !0),
            I.value === "form" ? (n(), i(_, { key: 2 }, [
              e("div", nu, [
                t[160] || (t[160] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                f(e("select", {
                  "onUpdate:modelValue": t[63] || (t[63] = (o) => ce.value = o),
                  class: "di-select"
                }, [...t[159] || (t[159] = [
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
                  [_e, ce.value]
                ])
              ]),
              le.value.length > 0 ? (n(), i("div", iu, [
                t[161] || (t[161] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", au, [
                  (n(!0), i(_, null, P(le.value, (o, y) => (n(), i("div", {
                    key: y,
                    class: "di-field-tag"
                  }, [
                    e("span", du, p(o.table) + "." + p(o.column), 1),
                    o.type ? (n(), i("span", uu, p(o.type), 1)) : v("", !0),
                    e("button", {
                      onClick: (x) => $e(y),
                      class: "di-field-tag-remove"
                    }, "×", 8, ru)
                  ]))), 128))
                ])
              ])) : v("", !0),
              Ee.value ? (n(), i("div", cu, [
                e("div", vu, [
                  e("label", pu, [
                    w(u(rt), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[162] || (t[162] = D(" 対応するDBカラム ", -1))
                  ]),
                  e("div", mu, [
                    f(e("input", {
                      "onUpdate:modelValue": t[64] || (t[64] = (o) => Me.value = o),
                      onFocus: t[65] || (t[65] = (o) => nt.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [g, Me.value]
                    ]),
                    Me.value ? (n(), i("button", {
                      key: 0,
                      onClick: t[66] || (t[66] = (o) => {
                        Me.value = "", nt.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      w(u(Ze), { style: { width: "14px", height: "14px" } })
                    ])) : v("", !0)
                  ]),
                  nt.value && vt.value.length > 0 ? (n(), i("div", fu, [
                    (n(!0), i(_, null, P(vt.value, (o) => (n(), i("button", {
                      key: o.fullName,
                      onClick: (y) => Ct(o),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", hu, [
                        e("span", yu, p(o.fullName), 1),
                        e("span", gu, p(o.type), 1)
                      ]),
                      o.comment ? (n(), i("span", ku, p(o.comment), 1)) : v("", !0)
                    ], 8, bu))), 128))
                  ])) : v("", !0)
                ])
              ])) : v("", !0),
              M.value && (ce.value === "select" || ce.value === "radio" || ce.value === "checkbox") ? (n(), i("div", xu, [
                e("button", {
                  onClick: Pt,
                  class: z(["di-btn-condition-toggle", { "di-condition-active": ie.value }])
                }, [
                  w(u(Rt), { style: { width: "14px", height: "14px" } }),
                  t[163] || (t[163] = D(" 選択肢を定義 ", -1)),
                  Ue.value ? (n(), i("span", wu, p(Ue.value.entries.length) + "件", 1)) : v("", !0)
                ], 2),
                ie.value ? (n(), i("div", $u, [
                  ae.value.length > 0 ? (n(), i("div", Cu, [
                    t[164] || (t[164] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (n(!0), i(_, null, P(ae.value, (o, y) => (n(), i("div", {
                      key: y,
                      class: "di-master-entry-row"
                    }, [
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.value = x,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, _u), [
                        [g, o.value]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.label = x,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, Iu), [
                        [g, o.label]
                      ]),
                      f(e("input", {
                        "onUpdate:modelValue": (x) => o.color = x,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, Tu), [
                        [g, o.color]
                      ]),
                      e("button", {
                        onClick: (x) => Lt(y),
                        class: "di-master-entry-remove"
                      }, "×", 8, Uu)
                    ]))), 128))
                  ])) : v("", !0),
                  e("button", {
                    onClick: Bt,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : v("", !0)
              ])) : v("", !0),
              e("div", Vu, [
                e("button", {
                  onClick: t[67] || (t[67] = (o) => pe.value = !pe.value),
                  class: z(["di-btn-condition-toggle", { "di-condition-active": pe.value }])
                }, [
                  w(u(Gt), { style: { width: "14px", height: "14px" } }),
                  t[165] || (t[165] = D(" 必須入力 ", -1)),
                  pe.value ? (n(), i("span", Su, "必須")) : v("", !0)
                ], 2)
              ]),
              e("div", Mu, [
                t[166] || (t[166] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", Eu, [
                  (n(!0), i(_, null, P(N.value, (o, y) => (n(), i("span", {
                    key: y,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    D(p(o) + " ", 1),
                    e("button", {
                      onClick: be((x) => pl(y), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, Du)
                  ]))), 128)),
                  f(e("input", {
                    "onUpdate:modelValue": t[68] || (t[68] = (o) => K.value = o),
                    onKeydown: [
                      t[69] || (t[69] = yt(be((o) => vl(), ["prevent"]), ["enter"])),
                      ml
                    ],
                    type: "text",
                    placeholder: N.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, Pu), [
                    [g, K.value]
                  ])
                ]),
                t[167] || (t[167] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", Bu, [
                t[168] || (t[168] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[70] || (t[70] = (o) => de.value = o),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [g, de.value]
                ])
              ]),
              e("div", Lu, [
                t[169] || (t[169] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                f(e("input", {
                  "onUpdate:modelValue": t[71] || (t[71] = (o) => xe.value = o),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [g, xe.value]
                ])
              ]),
              e("div", Au, [
                t[170] || (t[170] = e("label", { class: "di-form-label" }, "説明", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[72] || (t[72] = (o) => ge.value = o),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [g, ge.value]
                ])
              ]),
              e("div", Fu, [
                t[171] || (t[171] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                f(e("textarea", {
                  "onUpdate:modelValue": t[73] || (t[73] = (o) => r.value = o),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [g, r.value]
                ])
              ])
            ], 64)) : v("", !0)
          ]),
          e("div", Ou, [
            e("button", {
              onClick: $t,
              class: "di-btn-delete"
            }, [
              w(u(gt), { style: { width: "14px", height: "14px" } }),
              t[172] || (t[172] = D(" 削除 ", -1))
            ]),
            e("div", Nu, [
              e("button", {
                onClick: Fe,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: bt,
                class: "di-btn-save"
              }, [
                w(u(Qt), { style: { width: "14px", height: "14px" } }),
                t[173] || (t[173] = D(" 保存 ", -1))
              ])
            ])
          ])
        ], 2)
      ])) : v("", !0)
    ]));
  }
}), Hu = /* @__PURE__ */ Ut(ju, [["__scopeId", "data-v-d0c9d835"]]), qu = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ru = { class: "di-highlight-label" }, zu = ["onClick"], Yu = {
  key: 0,
  class: "di-note-label-row"
}, Ku = ["onClick"], Gu = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Xu = ["onClick"], Ju = { class: "di-analysis-type" }, Zu = {
  key: 0,
  class: "di-analysis-tags"
}, Qu = {
  key: 1,
  class: "di-analysis-db"
}, Wu = {
  key: 2,
  class: "di-analysis-api-source"
}, er = {
  key: 3,
  class: "di-analysis-conditional"
}, tr = ["onClick"], lr = {
  key: 0,
  class: "di-analysis-text"
}, or = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, sr = ["onClick"], nr = {
  key: 0,
  class: "di-unannotated-label-text"
}, ir = /* @__PURE__ */ xt({
  __name: "DevPickOverlay",
  setup(q) {
    const a = wt(), I = b(null), T = b(null), Y = b(0), J = b(0), oe = b(0), ce = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, pe = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function N(L) {
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
      }[L] || L;
    }
    function K(L) {
      var c, S;
      const U = a.getElementConfig(L);
      if (U != null && U.elementType && pe[U.elementType])
        return pe[U.elementType];
      if ((c = U == null ? void 0 : U.note) != null && c.displayType)
        return ce[U.note.displayType] || "#60a5fa";
      if (!(U != null && U.sourceBinding)) {
        const B = ((S = U == null ? void 0 : U.note) == null ? void 0 : S.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[B] || "#60a5fa";
      }
      return U.sourceBinding.isStatic ? "#10b981" : U.sourceBinding.type === "v-model" ? "#8b5cf6" : U.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function de(L) {
      var te, Z, O, ne, we;
      const U = a.noteHighlightFilter;
      if (U === "all") return !0;
      const c = a.getElementConfig(L);
      if (!c) return !1;
      const S = (te = c.note) == null ? void 0 : te.displayType, B = !!((Z = c.note) != null && Z.condition || (O = c.note) != null && O.conditionColumn), ee = !!((ne = c.note) != null && ne.storedCalc);
      switch (U) {
        case "db":
          return S === "db_direct" || S === "db_formatted";
        case "calculated":
          return S === "calculated";
        case "storedCalc":
          return ee;
        case "static":
          return S === "static";
        case "conditional":
          return B;
        case "action":
          return c.elementType === "action";
        case "form":
          return c.elementType === "form";
        case "other":
          return S === "other" || !S && !c.elementType && !!((we = c.note) != null && we.text);
        default:
          return !0;
      }
    }
    const xe = H(() => {
      var B, ee, te, Z, O, ne, we, F, $, C, me, G, Ae, qe, ie, ae, M, Ue, A, le, se, ue, ve, fe, Ne, Te, ye, dt, Qe, We, Ye, et, Re, Se, De, Pe, je, ut, tt, ze, lt, Ke, ot, Ge, r, l, s;
      const L = Y.value, U = J.value;
      oe.value;
      const c = [];
      if (!a.isEnabled) return c;
      const S = a.getConfiguredSelectors();
      for (const h of S)
        try {
          const k = document.querySelector(h);
          if (k) {
            const Q = k.getBoundingClientRect(), d = a.getElementConfig(h), Xe = ((B = d == null ? void 0 : d.sourceBinding) == null ? void 0 : B.isStatic) || !1, st = ((ee = d == null ? void 0 : d.sourceBinding) == null ? void 0 : ee.type) || "";
            let X = "", re = "";
            const Fe = (te = d == null ? void 0 : d.note) == null ? void 0 : te.displayType, at = [];
            if ((Z = d == null ? void 0 : d.note) != null && Z.sampleValue ? at.push(`例: ${d.note.sampleValue}${d.note.unit ? d.note.unit : ""}`) : (O = d == null ? void 0 : d.note) != null && O.unit && at.push(`単位: ${d.note.unit}`), (ne = d == null ? void 0 : d.note) != null && ne.decimalHandling) {
              const E = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              at.push(E[d.note.decimalHandling] || d.note.decimalHandling);
            }
            (we = d == null ? void 0 : d.note) != null && we.nullDisplay && at.push(`NULL時: ${d.note.nullDisplay}`), (F = d == null ? void 0 : d.note) != null && F.displayFormat && at.push(d.note.displayFormat);
            const bt = at.length > 0 ? `
${at.join(" / ")}` : "", $t = !!(($ = d == null ? void 0 : d.note) != null && $.condition || (C = d == null ? void 0 : d.note) != null && C.conditionColumn);
            let ct = "";
            if ($t) {
              const E = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, $e = [];
              (me = d == null ? void 0 : d.note) != null && me.condition && $e.push(d.note.condition), (G = d == null ? void 0 : d.note) != null && G.conditionColumn && $e.push(`判定: ${d.note.conditionColumn}`), (Ae = d == null ? void 0 : d.note) != null && Ae.hiddenBehavior && $e.push(`不一致時: ${E[d.note.hiddenBehavior] || d.note.hiddenBehavior}`), (qe = d == null ? void 0 : d.note) != null && qe.hiddenNote && $e.push(`→ ${d.note.hiddenNote}`), ct = `
条件: ${$e.join(" / ")}`;
            }
            const Me = $t ? " ⚡" : "";
            if ((d == null ? void 0 : d.elementType) === "action" && (d != null && d.actionInfo)) {
              const E = d.actionInfo;
              E.type === "navigate" ? X = `遷移: ${E.target || "?"}` : E.type === "api" ? X = `API: ${E.method || "GET"} ${E.target || "?"}` : E.type === "modal" ? X = `モーダル: ${E.target || "?"}` : E.type === "emit" ? X = `イベント: ${E.target || "?"}` : E.type === "function" ? X = `関数: ${E.target || "?"}` : X = "アクション", re = (E.description || X) + ((ie = d == null ? void 0 : d.note) != null && ie.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "form" && (d != null && d.formInfo)) {
              const E = d.formInfo, $e = (ae = d == null ? void 0 : d.fieldInfoList) != null && ae.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [], Ee = $e.length > 0 ? $e.map((ht) => `${ht.table}.${ht.column}`).join(", ") : "", He = $e.length > 0 ? `${$e[0].table}.${$e[0].column}` : "", Je = He ? a.getMasterDefinition(He) : null;
              E.inputType === "select" ? X = `選択: ${Ee || E.description || "?"}${Je ? ` (${Je.entries.length}件)` : ""}` : E.inputType === "textarea" ? X = `テキスト: ${Ee || E.description || "?"}` : E.inputType === "checkbox" ? X = `チェック: ${Ee || E.description || "?"}` : E.inputType === "radio" ? X = `ラジオ: ${Ee || E.description || "?"}` : X = `入力: ${Ee || E.description || E.inputType || "?"}`, E.required && (X += " (必須)");
              const he = [];
              E.description && he.push(E.description), (M = E.validation) != null && M.length && he.push(`検証: ${E.validation.join(", ")}`), E.placeholder && he.push(`placeholder: ${E.placeholder}`), E.defaultValue && he.push(`初期値: ${E.defaultValue}`), re = he.join(`
`) + ((Ue = d == null ? void 0 : d.note) != null && Ue.text ? `
${d.note.text}` : "");
            } else if ((d == null ? void 0 : d.elementType) === "action")
              X = "アクション", re = ((A = d == null ? void 0 : d.note) == null ? void 0 : A.text) || "";
            else if ((d == null ? void 0 : d.elementType) === "form")
              X = "フォーム", re = ((le = d == null ? void 0 : d.note) == null ? void 0 : le.text) || "";
            else if (Fe === "db_direct") {
              const E = (se = d == null ? void 0 : d.fieldInfoList) != null && se.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (E.length > 0) {
                const $e = E.map((he) => `${he.table}.${he.column}`).join(", "), Ee = `${E[0].table}.${E[0].column}`, He = a.getMasterDefinition(Ee), Je = He ? ` (${He.entries.length}値)` : "";
                X = `DB: ${$e}${Je}${Me}`, re = E.map((he) => `${he.table}.${he.column}${he.type ? ` (${he.type})` : ""}`).join(`
`) + bt + ct + ((ue = d == null ? void 0 : d.note) != null && ue.text ? `
${d.note.text}` : "");
              }
            } else if (Fe === "db_formatted") {
              const E = (ve = d == null ? void 0 : d.fieldInfoList) != null && ve.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : [];
              if (E.length > 0) {
                const $e = E.map((he) => `${he.table}.${he.column}`).join(", "), Ee = `${E[0].table}.${E[0].column}`, He = a.getMasterDefinition(Ee), Je = He ? ` (${He.entries.length}値)` : "";
                X = `DB: ${$e} (整形)${Je}${Me}`, re = E.map((he) => `${he.table}.${he.column}`).join(`
`) + ((fe = d == null ? void 0 : d.note) != null && fe.formatDescription ? `
整形: ${d.note.formatDescription}` : "") + bt + ct + ((Ne = d == null ? void 0 : d.note) != null && Ne.text ? `
${d.note.text}` : "");
              }
            } else Fe === "calculated" ? (X = "計算値" + ((Te = d == null ? void 0 : d.note) != null && Te.unit ? ` (${d.note.unit})` : "") + Me, re = (((ye = d == null ? void 0 : d.note) == null ? void 0 : ye.calcDescription) || "計算値") + ((Qe = (dt = d == null ? void 0 : d.note) == null ? void 0 : dt.calcSources) != null && Qe.length ? `
参照: ${d.note.calcSources.join(", ")}` : "") + bt + ct + ((We = d == null ? void 0 : d.note) != null && We.text ? `
${d.note.text}` : "")) : Fe === "static" ? (X = "固定" + Me, re = (((Ye = d == null ? void 0 : d.note) == null ? void 0 : Ye.text) || "固定文言") + ct) : Fe === "other" ? (X = "メモ", re = ((et = d == null ? void 0 : d.note) == null ? void 0 : et.text) || "") : (Re = d == null ? void 0 : d.fieldInfoList) != null && Re.length || (Se = d == null ? void 0 : d.fieldInfo) != null && Se.table && ((De = d == null ? void 0 : d.fieldInfo) != null && De.column) ? (X = `DB: ${((Pe = d == null ? void 0 : d.fieldInfoList) != null && Pe.length ? d.fieldInfoList : d != null && d.fieldInfo ? [d.fieldInfo] : []).map((Ee) => `${Ee.table}.${Ee.column}`).join(", ")}`, re = ((je = d == null ? void 0 : d.note) == null ? void 0 : je.text) || "") : Xe ? (X = "固定", re = ((ut = d == null ? void 0 : d.note) == null ? void 0 : ut.text) || "固定文言") : st === "v-model" ? (X = "フォーム", re = ((tt = d == null ? void 0 : d.note) == null ? void 0 : tt.text) || "") : st === "api" ? (X = "データ", re = ((ze = d == null ? void 0 : d.note) == null ? void 0 : ze.text) || "") : (lt = d == null ? void 0 : d.note) != null && lt.type ? (X = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[d.note.type] || "メモ", re = ((Ke = d == null ? void 0 : d.note) == null ? void 0 : Ke.text) || "") : (X = "メモ", re = ((ot = d == null ? void 0 : d.note) == null ? void 0 : ot.text) || "");
            const nt = re || ((Ge = d == null ? void 0 : d.note) == null ? void 0 : Ge.text) || "", vt = ((r = d == null ? void 0 : d.note) == null ? void 0 : r.type) || "info", Ct = !!((l = d == null ? void 0 : d.note) != null && l.text || (s = d == null ? void 0 : d.note) != null && s.displayType);
            c.push({
              selector: h,
              top: `${Q.top + L}px`,
              left: `${Q.left + U}px`,
              width: `${Q.width}px`,
              height: `${Q.height}px`,
              color: K(h),
              isStatic: Xe,
              label: X,
              noteText: nt,
              noteType: vt,
              hasNote: Ct
            });
          }
        } catch {
        }
      return c;
    }), ge = H(() => {
      var S;
      const L = Y.value, U = J.value;
      oe.value;
      const c = [];
      if (!a.isEnabled || a.scanResults.length === 0) return c;
      for (const B of a.scanResults)
        try {
          const ee = document.querySelector(B.selector);
          if (ee) {
            const te = ee.getBoundingClientRect();
            c.push({
              selector: B.selector,
              top: `${te.top + L}px`,
              left: `${te.left + U}px`,
              width: `${te.width}px`,
              height: `${te.height}px`,
              isStatic: ((S = B.detected.sourceBinding) == null ? void 0 : S.isStatic) || !1
            });
          }
        } catch {
        }
      return c;
    }), W = H(() => {
      var B, ee;
      const L = Y.value, U = J.value;
      oe.value;
      const c = [], S = a.analysisFilter;
      if (S === "none" || !a.isEnabled || a.analysisResults.length === 0) return c;
      for (const te of a.analysisResults) {
        if (!te.matched) continue;
        const Z = te.element;
        try {
          const O = document.querySelector(te.selector);
          if (!O) continue;
          const ne = O.getBoundingClientRect();
          if (ne.width > window.innerWidth * 0.8 || ne.height > window.innerHeight * 0.5)
            continue;
          const we = O.querySelector("[data-di-binding]") || (O.hasAttribute("data-di-binding") ? O : null);
          let F = "", $ = Z.binding || "";
          const C = [...Z.tags || []];
          if (we) {
            const fe = we.getAttribute("data-di-db"), Ne = we.getAttribute("data-di-binding");
            fe && (F = fe, C.includes("db") || C.push("db")), Ne && ($ = Ne);
          }
          !F && Z.db && (F = `${Z.db.table}.${Z.db.column}`, C.includes("db") || C.push("db"));
          let me = "";
          Z.api && (me = `${Z.api.method} ${Z.api.endpoint}`, C.includes("api") || C.push("api"));
          let G = "";
          if ($) {
            const fe = a.getApiSourceForBinding($);
            fe && fe.endpoint ? G = `${fe.method || "GET"} ${fe.endpoint}` : fe && fe.composable && (G = fe.composable);
          }
          const Ae = (B = Z.conditional) == null ? void 0 : B.expression, qe = (ee = Z.modal) == null ? void 0 : ee.target, ie = !!F || C.includes("db"), ae = !!me || C.includes("api"), M = C.includes("form"), Ue = C.includes("button"), A = C.includes("link"), le = C.includes("modal"), se = C.includes("conditional"), ue = C.includes("computed");
          if (S === "db-api") {
            if (!ie && !ae) continue;
          } else if (S === "form") {
            if (!M) continue;
          } else if (S === "button") {
            if (!Ue) continue;
          } else if (S === "link") {
            if (!A) continue;
          } else if (S === "modal") {
            if (!le) continue;
          } else if (S === "conditional") {
            if (!se) continue;
          } else if (S === "computed") {
            if (!ue) continue;
          } else if (S === "other" && (ie || ae || M || Ue || A || le || se || ue))
            continue;
          let ve = "other";
          ie ? ve = "db" : ae ? ve = "api" : M ? ve = "form" : Ue ? ve = "button" : A ? ve = "link" : le ? ve = "modal" : se ? ve = "conditional" : ue && (ve = "computed"), c.push({
            selector: te.selector,
            top: `${ne.top + L}px`,
            left: `${ne.left + U}px`,
            width: `${ne.width}px`,
            height: `${ne.height}px`,
            tags: C,
            primaryTag: ve,
            text: Z.text || $ || "",
            dbInfo: F,
            apiInfo: me,
            apiSource: G,
            conditionalExpr: Ae,
            modalTarget: qe
          });
        } catch {
        }
      }
      return c;
    }), V = H(() => {
      const L = Y.value, U = J.value;
      oe.value;
      const c = [];
      if (!a.isEnabled || !a.showUnannotatedDetection || a.unannotatedElements.length === 0) return c;
      for (const S of a.unannotatedElements)
        try {
          const B = document.querySelector(S.selector);
          if (!B) continue;
          const ee = B.getBoundingClientRect();
          c.push({
            selector: S.selector,
            top: `${ee.top + L}px`,
            left: `${ee.left + U}px`,
            width: `${ee.width}px`,
            height: `${ee.height}px`,
            category: S.category,
            text: S.text
          });
        } catch {
        }
      return c;
    });
    function Ie(L) {
      if (!a.isPickMode) return;
      if (L.target.closest("[data-dev-inspector]")) {
        I.value = null, T.value = null, a.setHoveredSelector(null);
        return;
      }
      const c = document.elementFromPoint(L.clientX, L.clientY);
      if (!c || c === document.body || c === document.documentElement) {
        I.value = null, T.value = null, a.setHoveredSelector(null);
        return;
      }
      if (c.closest("[data-dev-inspector]"))
        return;
      T.value = c;
      const S = c.getBoundingClientRect();
      I.value = {
        top: `${S.top + window.scrollY}px`,
        left: `${S.left + window.scrollX}px`,
        width: `${S.width}px`,
        height: `${S.height}px`
      };
      const B = a.generateSelector(c);
      a.setHoveredSelector(B);
    }
    function Le(L) {
      if (!(!a.isPickMode || L.target.closest("[data-dev-inspector]")) && (L.preventDefault(), L.stopPropagation(), T.value)) {
        const c = a.generateSelector(T.value);
        if (a.remapTargetId) {
          a.remapAnnotation(a.remapTargetId, c), a.remapTargetId = null, a.togglePickMode(), a.openPanel();
          return;
        }
        a.startEditing(c), a.togglePickMode();
      }
    }
    function ke(L) {
      L.key === "Escape" && a.isPickMode && (a.remapTargetId = null, a.togglePickMode());
    }
    function Ve() {
      Y.value = window.scrollY, J.value = window.scrollX, oe.value++;
    }
    return Xt(() => {
      window.addEventListener("mousemove", Ie, !0), window.addEventListener("click", Le, !0), window.addEventListener("keydown", ke), window.addEventListener("scroll", Ve), window.addEventListener("resize", Ve);
    }), Tl(() => {
      window.removeEventListener("mousemove", Ie, !0), window.removeEventListener("click", Le, !0), window.removeEventListener("keydown", ke), window.removeEventListener("scroll", Ve), window.removeEventListener("resize", Ve);
    }), kt(() => a.isPickMode, (L) => {
      L || (I.value = null, T.value = null);
    }), (L, U) => (n(), Oe(it, { to: "body" }, [
      u(a).isInitializing ? (n(), i("div", qu, [...U[1] || (U[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : v("", !0),
      u(a).isPickMode && I.value ? (n(), i("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: Be({
          top: I.value.top,
          left: I.value.left,
          width: I.value.width,
          height: I.value.height
        })
      }, [
        e("div", Ru, p(u(a).hoveredSelector), 1)
      ], 4)) : v("", !0),
      u(a).isPickMode ? (n(), i("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: Be(u(a).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, p(u(a).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        U[2] || (U[2] = e("kbd", null, "ESC", -1)),
        U[3] || (U[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId ? (n(!0), i(_, { key: 3 }, P(xe.value, (c) => f((n(), i("div", {
        key: c.selector,
        "data-dev-inspector": "",
        class: z([
          c.hasNote ? "di-note-highlight" : "di-annotation-box",
          { "di-element-hovered-pulse": u(a).hoveredSelector === c.selector }
        ]),
        style: Be({
          top: c.top,
          left: c.left,
          width: c.width,
          height: c.height,
          borderColor: (c.hasNote, c.color),
          backgroundColor: u(a).hoveredSelector === c.selector ? c.color + "30" : c.color + (c.hasNote ? "18" : "15")
        }),
        onClick: (S) => u(a).startEditing(c.selector)
      }, [
        c.hasNote ? (n(), i("div", Yu, [
          e("span", {
            class: "di-note-indicator",
            style: Be({ backgroundColor: c.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: Be({ backgroundColor: c.color })
          }, p(c.label), 5)
        ])) : (n(), i("div", {
          key: 1,
          class: "di-annotation-label",
          style: Be({ backgroundColor: c.color })
        }, p(c.label), 5))
      ], 14, zu)), [
        [mt, !c.hasNote || u(a).showNoteHighlights && de(c.selector)]
      ])), 128)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && ge.value.length > 0 && u(a).analysisResults.length === 0 ? (n(), i(_, { key: 4 }, [
        (n(!0), i(_, null, P(ge.value, (c) => (n(), i("div", {
          key: "scan-" + c.selector,
          "data-dev-inspector": "",
          class: z(["di-scan-highlight", { "di-scan-static": c.isStatic }]),
          style: Be({
            top: c.top,
            left: c.left,
            width: c.width,
            height: c.height
          }),
          onClick: (S) => u(a).startEditing(c.selector)
        }, [
          e("div", {
            class: z(["di-scan-label", { "di-scan-label-static": c.isStatic }])
          }, p(c.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Ku))), 128)),
        e("div", Gu, [
          e("span", null, p(ge.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: U[0] || (U[0] = (c) => u(a).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).editingElementId && W.value.length > 0 ? (n(), i(_, { key: 5 }, [
        (n(!0), i(_, null, P(W.value, (c) => (n(), i("div", {
          key: "analysis-" + c.selector,
          "data-dev-inspector": "",
          class: z(["di-analysis-highlight", "di-analysis-" + c.primaryTag]),
          style: Be({
            top: c.top,
            left: c.left,
            width: c.width,
            height: c.height
          }),
          onClick: (S) => u(a).startEditing(c.selector)
        }, [
          e("div", {
            class: z(["di-analysis-label", "di-analysis-label-" + c.primaryTag])
          }, [
            e("span", Ju, p(N(c.primaryTag)), 1),
            c.tags.length > 1 ? (n(), i("span", Zu, "+" + p(c.tags.length - 1), 1)) : v("", !0),
            c.dbInfo ? (n(), i("span", Qu, p(c.dbInfo), 1)) : v("", !0),
            c.apiSource ? (n(), i("span", Wu, "← " + p(c.apiSource), 1)) : v("", !0),
            c.conditionalExpr ? (n(), i("span", er, p(c.conditionalExpr), 1)) : v("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: be((S) => u(a).removeAnalysisResult(c.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, tr)
          ], 2),
          c.text && c.text.length < 30 ? (n(), i("div", lr, p(c.text), 1)) : v("", !0)
        ], 14, Xu))), 128)),
        e("div", or, [
          e("span", null, "📊 分析データ: " + p(W.value.length) + "件の要素", 1)
        ])
      ], 64)) : v("", !0),
      u(a).isEnabled && !u(a).isPickMode && !u(a).editingElementId && V.value.length > 0 ? (n(!0), i(_, { key: 6 }, P(V.value, (c) => (n(), i("div", {
        key: "unannotated-" + c.selector,
        "data-dev-inspector": "",
        class: z(["di-unannotated-highlight", {
          "di-unannotated-hovered": u(a).hoveredUnannotatedSelector === c.selector,
          ["di-unannotated-hovered-" + c.category]: u(a).hoveredUnannotatedSelector === c.selector
        }]),
        style: Be({
          top: c.top,
          left: c.left,
          width: c.width,
          height: c.height
        }),
        onClick: (S) => u(a).quickAnnotate(c.selector, c.category === "form" ? "form" : c.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: z(["di-unannotated-label", { ["di-unannotated-label-" + c.category]: u(a).hoveredUnannotatedSelector === c.selector }])
        }, [
          e("span", null, p(c.category === "binding" ? "DB" : c.category === "form" ? "Form" : "Act"), 1),
          c.text ? (n(), i("span", nr, p(c.text), 1)) : v("", !0)
        ], 2)
      ], 14, sr))), 128)) : v("", !0)
    ]));
  }
}), ar = /* @__PURE__ */ Ut(ir, [["__scopeId", "data-v-45f6653b"]]), dr = { class: "di-editor-modal" }, ur = { class: "di-editor-header" }, rr = { class: "di-header-actions" }, cr = { class: "di-path-badge" }, vr = { class: "di-editor-content" }, pr = { class: "di-form-group" }, mr = { class: "di-form-group" }, fr = { class: "di-form-section" }, br = { class: "di-form-section-header" }, hr = { class: "di-api-header-actions" }, yr = { class: "di-dropdown-wrapper" }, gr = {
  key: 1,
  class: "di-suggestion-dropdown"
}, kr = {
  key: 0,
  class: "di-suggestion-actions"
}, xr = ["onMousedown", "disabled"], wr = { class: "di-suggestion-endpoint" }, $r = {
  key: 0,
  class: "di-suggestion-timing"
}, Cr = {
  key: 1,
  class: "di-suggestion-empty"
}, _r = {
  key: 0,
  class: "di-suggestion-banner"
}, Ir = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, Tr = {
  key: 2,
  class: "di-empty-hint"
}, Ur = { class: "di-api-entry-row" }, Vr = ["onUpdate:modelValue"], Sr = ["value"], Mr = ["onUpdate:modelValue"], Er = ["onClick"], Dr = { class: "di-api-entry-row2" }, Pr = ["onUpdate:modelValue"], Br = ["onUpdate:modelValue"], Lr = ["value"], Ar = { class: "di-form-section" }, Fr = { class: "di-auth-row" }, Or = {
  key: 0,
  class: "di-auth-details"
}, Nr = { class: "di-form-group" }, jr = { class: "di-form-group" }, Hr = { class: "di-form-group" }, qr = { class: "di-form-group" }, Rr = { class: "di-editor-footer" }, zr = { class: "di-editor-actions" }, Yr = ["disabled"], Kr = /* @__PURE__ */ xt({
  __name: "DevScreenEditor",
  setup(q) {
    const a = wt(), I = b(""), T = b(""), Y = b([]), J = b(!1), oe = b(""), ce = b(""), pe = b(""), N = b(""), K = b(!1), de = b([]), xe = b(!1), ge = H(() => typeof window < "u" ? window.location.pathname : "/");
    kt(() => a.editingScreen, (F) => {
      F && W();
    });
    function W() {
      var $, C, me, G;
      const F = a.getScreenConfig();
      F ? (I.value = F.name, T.value = F.description || "", Y.value = F.apis.map((Ae) => ({ ...Ae })), J.value = (($ = F.auth) == null ? void 0 : $.required) || !1, oe.value = ((me = (C = F.auth) == null ? void 0 : C.roles) == null ? void 0 : me.join(", ")) || "", ce.value = ((G = F.auth) == null ? void 0 : G.description) || "", pe.value = F.figmaUrl || "", N.value = F.notes || "") : V();
    }
    function V() {
      I.value = "", T.value = "", Y.value = [], J.value = !1, oe.value = "", ce.value = "", pe.value = "", N.value = "";
    }
    function Ie() {
      a.editingScreen = !1, V();
    }
    function Le() {
      Y.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function ke(F) {
      Y.value.splice(F, 1);
    }
    function Ve() {
      if (!I.value.trim()) return;
      const F = {
        path: ge.value,
        name: I.value.trim(),
        description: T.value.trim() || void 0,
        apis: Y.value.filter(($) => $.endpoint.trim()),
        auth: J.value || oe.value.trim() ? {
          required: J.value,
          roles: oe.value.trim() ? oe.value.split(",").map(($) => $.trim()).filter(Boolean) : void 0,
          description: ce.value.trim() || void 0
        } : void 0,
        figmaUrl: pe.value.trim() || void 0,
        notes: N.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      a.setScreenConfig(F), Ie();
    }
    function L() {
      a.deleteScreenConfig(ge.value), Ie();
    }
    const U = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, c = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function S() {
      de.value = a.suggestScreenApis(), K.value = !0;
    }
    function B(F) {
      return Y.value.some(
        ($) => $.method === F.method && $.endpoint === F.endpoint
      );
    }
    const ee = H(() => de.value.filter((F) => !B(F)));
    function te(F) {
      B(F) || Y.value.push({ ...F });
    }
    function Z() {
      for (const F of ee.value)
        Y.value.push({ ...F });
    }
    function O() {
      setTimeout(() => {
        xe.value = !1;
      }, 150);
    }
    const ne = ["GET", "POST", "PUT", "DELETE", "PATCH"], we = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (F, $) => (n(), Oe(it, { to: "body" }, [
      u(a).editingScreen ? (n(), i("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(Ie, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", dr, [
          e("div", ur, [
            $[9] || ($[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", rr, [
              e("span", cr, p(ge.value), 1),
              e("button", {
                onClick: Ie,
                class: "di-editor-close"
              }, [
                w(u(Ze), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", vr, [
            e("div", pr, [
              $[10] || ($[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              f(e("input", {
                "onUpdate:modelValue": $[0] || ($[0] = (C) => I.value = C),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [g, I.value]
              ])
            ]),
            e("div", mr, [
              $[11] || ($[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": $[1] || ($[1] = (C) => T.value = C),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [g, T.value]
              ])
            ]),
            e("div", fr, [
              e("div", br, [
                $[15] || ($[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", hr, [
                  e("button", {
                    onClick: S,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    w(u(Tt), { style: { width: "13px", height: "13px" } }),
                    $[12] || ($[12] = D(" 自動推定 ", -1))
                  ]),
                  e("div", yr, [
                    de.value.length > 0 ? (n(), i("button", {
                      key: 0,
                      onClick: $[2] || ($[2] = (C) => xe.value = !xe.value),
                      onBlur: $[3] || ($[3] = (C) => O()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      w(u(Jt), { style: { width: "13px", height: "13px" } }),
                      $[13] || ($[13] = D(" 候補から選択 ", -1))
                    ], 32)) : v("", !0),
                    xe.value && de.value.length > 0 ? (n(), i("div", gr, [
                      ee.value.length > 0 ? (n(), i("div", kr, [
                        e("button", {
                          onMousedown: be(Z, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + p(ee.value.length) + ") ", 33)
                      ])) : v("", !0),
                      (n(!0), i(_, null, P(de.value, (C, me) => (n(), i("button", {
                        key: me,
                        onMousedown: be((G) => te(C), ["prevent"]),
                        class: z(["di-suggestion-item", { "di-suggestion-added": B(C) }]),
                        disabled: B(C)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: Be({ backgroundColor: U[C.method] + "20", color: U[C.method] })
                        }, p(C.method), 5),
                        e("code", wr, p(C.endpoint), 1),
                        C.loadTiming ? (n(), i("span", $r, p(c[C.loadTiming] || C.loadTiming), 1)) : v("", !0),
                        B(C) ? (n(), Oe(u(Ml), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : v("", !0)
                      ], 42, xr))), 128)),
                      de.value.length === 0 ? (n(), i("div", Cr, " 推定結果がありません ")) : v("", !0)
                    ])) : v("", !0)
                  ]),
                  e("button", {
                    onClick: Le,
                    class: "di-btn-add"
                  }, [
                    w(u(ft), { style: { width: "14px", height: "14px" } }),
                    $[14] || ($[14] = D(" 手動追加 ", -1))
                  ])
                ])
              ]),
              K.value && de.value.length > 0 && ee.value.length > 0 ? (n(), i("div", _r, [
                w(u(Tt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, p(de.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: be(Z, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : K.value && de.value.length === 0 ? (n(), i("div", Ir, [...$[16] || ($[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : v("", !0),
              Y.value.length === 0 && !K.value ? (n(), i("div", Tr, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : v("", !0),
              (n(!0), i(_, null, P(Y.value, (C, me) => (n(), i("div", {
                key: me,
                class: "di-api-entry"
              }, [
                e("div", Ur, [
                  f(e("select", {
                    "onUpdate:modelValue": (G) => C.method = G,
                    class: "di-select di-select-method"
                  }, [
                    (n(), i(_, null, P(ne, (G) => e("option", {
                      key: G,
                      value: G
                    }, p(G), 9, Sr)), 64))
                  ], 8, Vr), [
                    [_e, C.method]
                  ]),
                  f(e("input", {
                    "onUpdate:modelValue": (G) => C.endpoint = G,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, Mr), [
                    [g, C.endpoint]
                  ]),
                  e("button", {
                    onClick: (G) => ke(me),
                    class: "di-btn-remove"
                  }, [
                    w(u(ql), { style: { width: "14px", height: "14px" } })
                  ], 8, Er)
                ]),
                e("div", Dr, [
                  f(e("input", {
                    "onUpdate:modelValue": (G) => C.description = G,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, Pr), [
                    [g, C.description]
                  ]),
                  f(e("select", {
                    "onUpdate:modelValue": (G) => C.loadTiming = G,
                    class: "di-select di-select-timing"
                  }, [
                    (n(), i(_, null, P(we, (G) => e("option", {
                      key: G.value,
                      value: G.value
                    }, p(G.label), 9, Lr)), 64))
                  ], 8, Br), [
                    [_e, C.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", Ar, [
              $[20] || ($[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", Fr, [
                e("button", {
                  onClick: $[4] || ($[4] = (C) => J.value = !J.value),
                  class: z(["di-toggle-btn", { active: J.value }])
                }, [
                  e("span", {
                    class: z(["di-toggle-knob", { active: J.value }])
                  }, null, 2)
                ], 2),
                $[17] || ($[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              J.value ? (n(), i("div", Or, [
                e("div", Nr, [
                  $[18] || ($[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": $[5] || ($[5] = (C) => oe.value = C),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [g, oe.value]
                  ])
                ]),
                e("div", jr, [
                  $[19] || ($[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  f(e("input", {
                    "onUpdate:modelValue": $[6] || ($[6] = (C) => ce.value = C),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [g, ce.value]
                  ])
                ])
              ])) : v("", !0)
            ]),
            e("div", Hr, [
              $[21] || ($[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              f(e("input", {
                "onUpdate:modelValue": $[7] || ($[7] = (C) => pe.value = C),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [g, pe.value]
              ])
            ]),
            e("div", qr, [
              $[22] || ($[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              f(e("textarea", {
                "onUpdate:modelValue": $[8] || ($[8] = (C) => N.value = C),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [g, N.value]
              ])
            ])
          ]),
          e("div", Rr, [
            e("button", {
              onClick: L,
              class: "di-btn-delete"
            }, [
              w(u(gt), { style: { width: "14px", height: "14px" } }),
              $[23] || ($[23] = D(" 削除 ", -1))
            ]),
            e("div", zr, [
              e("button", {
                onClick: Ie,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: Ve,
                class: "di-btn-save",
                disabled: !I.value.trim()
              }, [
                w(u(Qt), { style: { width: "14px", height: "14px" } }),
                $[24] || ($[24] = D(" 保存 ", -1))
              ], 8, Yr)
            ])
          ])
        ])
      ])) : v("", !0)
    ]));
  }
}), Gr = /* @__PURE__ */ Ut(Kr, [["__scopeId", "data-v-a3b58e7a"]]), Xr = {
  key: 0,
  "data-dev-inspector": ""
}, Jr = /* @__PURE__ */ xt({
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
  setup(q) {
    const a = q, I = wt();
    return Xt(() => {
      I.init({
        storageKey: a.storageKey,
        enabledInProduction: a.enabledInProduction,
        initialAnnotations: a.initialAnnotations
      });
    }), (T, Y) => u(I).isAvailable ? (n(), i("div", Xr, [
      w(Ti),
      w(Hu),
      w(Gr),
      w(ar)
    ])) : v("", !0);
  }
}), Wr = {
  install(q, a = {}) {
    const { autoRegister: I = !0, ...T } = a;
    I && q.component("DevInspector", Jr), q.provide("devInspectorOptions", T);
  }
};
export {
  Hu as DevElementEditor,
  Jr as DevInspector,
  Ti as DevPanel,
  ar as DevPickOverlay,
  Gr as DevScreenEditor,
  Wr as VueDevInspector,
  Wr as default,
  lc as useDevInspector,
  wt as useDevInspectorStore,
  sc as vitePluginDevInspector
};
