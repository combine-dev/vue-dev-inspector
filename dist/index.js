import { h as Ct, defineComponent as at, ref as f, computed as K, watch as it, openBlock as o, createElementBlock as n, Fragment as S, createBlock as $e, Teleport as qe, unref as u, createVNode as k, createCommentVNode as c, createElementVNode as e, normalizeClass as X, toDisplayString as v, renderList as j, createTextVNode as N, withDirectives as w, vModelText as E, normalizeStyle as Me, withModifiers as be, resolveDynamicComponent as Ft, vModelSelect as Ne, withKeys as It, onMounted as At, onUnmounted as jt, vShow as Nt } from "vue";
import { u as dt } from "./useDevInspector-Bhjn2LIR.js";
import { a as Fd } from "./useDevInspector-Bhjn2LIR.js";
import { default as Nd } from "./vite.js";
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var ht = {
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
const qt = (q) => q.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), H = (q, s) => ({ size: M, strokeWidth: B = 2, absoluteStrokeWidth: R, color: Y, class: ie, ...oe }, { attrs: ae, slots: $ }) => Ct(
  "svg",
  {
    ...ht,
    width: M || ht.width,
    height: M || ht.height,
    stroke: Y || ht.stroke,
    "stroke-width": R ? Number(B) * 24 / Number(M) : B,
    ...ae,
    class: ["lucide", `lucide-${qt(q)}`],
    ...oe
  },
  [
    ...s.map((re) => Ct(...re)),
    ...$.default ? [$.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = H("AlertCircleIcon", [
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
const Ht = H("AlertTriangleIcon", [
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
const Mt = H("CalculatorIcon", [
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
const Rt = H("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = H("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = H("ClipboardListIcon", [
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
const Tt = H("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = H("DatabaseIcon", [
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
const yt = H("DownloadIcon", [
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
const Yt = H("ExternalLinkIcon", [
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
const Kt = H("EyeOffIcon", [
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
const Xt = H("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = H("FileSpreadsheetIcon", [
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
const St = H("FileTextIcon", [
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
const Jt = H("FormInputIcon", [
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
const Qt = H("GitBranchIcon", [
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
const Wt = H("GitMergeIcon", [
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
const Dt = H("ListIcon", [
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
const Et = H("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = H("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = H("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = H("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = H("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = H("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = H("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = H("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = H("SaveIcon", [
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
const ol = H("ScanIcon", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = H("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = H("ServerIcon", [
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
const Pt = H("ShieldQuestionIcon", [
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
const il = H("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = H("Trash2Icon", [
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
const al = H("TypeIcon", [
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
const dl = H("UploadIcon", [
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
const ft = H("Wand2Icon", [
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
const Je = H("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = H("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function rl(q, s, M = {}) {
  var de;
  const B = await import("./xlsx-BopDBbWb.js"), { systemName: R = "System", author: Y = "" } = M, ie = /* @__PURE__ */ new Date(), oe = `${ie.getFullYear()}/${ie.getMonth() + 1}/${ie.getDate()}`, ae = B.utils.book_new(), $ = [];
  $.push([
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
    R,
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
    Y,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    oe
  ]), $.push([]), $.push([
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
  ]), $.push([]), $.push(["機能概要"]), $.push([(q == null ? void 0 : q.description) || ""]), $.push([]), $.push(["画面レイアウト　figmaURL"]), $.push([(q == null ? void 0 : q.figmaUrl) || ""]), $.push([]), q != null && q.apis && q.apis.length > 0 && ($.push(["API一覧"]), $.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), q.apis.forEach((x) => {
    $.push(["", x.method, "", x.endpoint, "", "", "", "", "", "", "", x.description]);
  }), $.push([])), $.push(["画面項目　ヘッダーフッターは省く"]), $.push([
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
  ]), Object.values(s).forEach((x, ne) => {
    var r, _, G;
    const Ee = x.id;
    let D = "", U = "", y = "";
    if ((r = x.note) != null && r.text && (D = x.note.text), x.fieldInfo && (D += D ? `
` : "", D += `DB: ${x.fieldInfo.table}.${x.fieldInfo.column}`, x.fieldInfo.type && (D += ` (${x.fieldInfo.type})`), x.fieldInfo.description && (D += `
${x.fieldInfo.description}`)), x.actionInfo && (y = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[x.actionInfo.type] || x.actionInfo.type}]`, x.actionInfo.target && (y += ` ${x.actionInfo.method || ""} ${x.actionInfo.target}`), x.actionInfo.description && (y += `
${x.actionInfo.description}`)), x.links) {
      const V = [];
      x.links.testPath && V.push(`テスト: ${x.links.testPath}`), x.links.figmaUrl && V.push(`Figma: ${x.links.figmaUrl}`), x.links.githubIssue && V.push(`Issue: ${x.links.githubIssue}`), x.links.githubPr && V.push(`PR: ${x.links.githubPr}`), V.length > 0 && (y += y ? `

` : "", y += V.join(`
`));
    }
    if (x.devMeta) {
      const V = [];
      (_ = x.devMeta.usedStores) != null && _.length && V.push(`Store: ${x.devMeta.usedStores.join(", ")}`), (G = x.devMeta.usedComponents) != null && G.length && V.push(`Components: ${x.devMeta.usedComponents.join(", ")}`), x.devMeta.accessibility && V.push(`A11y: ${x.devMeta.accessibility}`), x.devMeta.responsive && V.push(`Responsive: ${x.devMeta.responsive}`), V.length > 0 && (y += y ? `

` : "", y += `[開発情報]
` + V.join(`
`));
    }
    $.push([
      "",
      ne + 1,
      "",
      Ee,
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
      D,
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
      U,
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
      y
    ]);
  });
  const ee = B.utils.aoa_to_sheet($);
  ee["!cols"] = [
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
  ], B.utils.book_append_sheet(ae, ee, "画面設計書");
  const ye = `画面仕様書_${((de = q == null ? void 0 : q.name) == null ? void 0 : de.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${oe.replace(/\//g, "")}.xlsx`;
  return B.writeFile(ae, ye), ye;
}
const cl = {
  key: 0,
  class: "di-panel",
  "data-dev-inspector": ""
}, vl = { class: "di-header" }, pl = { class: "di-header-title" }, ml = { class: "di-edit-section" }, hl = { class: "di-note-toggle-badge" }, yl = {
  key: 1,
  class: "di-note-filter"
}, fl = { class: "di-filter-buttons" }, bl = ["onClick"], gl = {
  key: 0,
  class: "di-unannotated-badge"
}, kl = {
  key: 2,
  class: "di-unannotated-results"
}, xl = { class: "di-unannotated-summary" }, wl = { key: 0 }, $l = { key: 1 }, _l = { key: 2 }, Cl = { class: "di-unannotated-list" }, Il = { class: "di-unannotated-text" }, Ml = ["onClick"], Tl = {
  key: 3,
  class: "di-unannotated-empty"
}, Sl = {
  key: 4,
  class: "di-broken-warning"
}, Dl = { class: "di-broken-header" }, El = { class: "di-broken-list" }, Ul = { class: "di-broken-item-info" }, Ll = { class: "di-broken-item-note" }, Vl = { class: "di-broken-item-selector" }, Pl = { class: "di-broken-item-actions" }, Al = ["onClick"], Bl = ["onClick"], Fl = { class: "di-broken-actions" }, jl = { class: "di-analysis-section" }, Nl = { class: "di-analysis-header" }, ql = { class: "di-analysis-input" }, Ol = { class: "di-analysis-buttons" }, Hl = ["disabled"], Rl = ["disabled"], zl = {
  key: 0,
  class: "di-analysis-error"
}, Gl = {
  key: 1,
  class: "di-analysis-status"
}, Yl = { class: "di-analysis-count" }, Kl = {
  key: 2,
  class: "di-analysis-filter"
}, Xl = { class: "di-filter-buttons" }, Zl = ["onClick"], Jl = {
  key: 0,
  class: "di-hidden-actions"
}, Ql = ["disabled"], Wl = { key: 1 }, es = { key: 2 }, ts = {
  key: 3,
  class: "di-page-apis"
}, ls = {
  key: 0,
  class: "di-api-group"
}, ss = { class: "di-api-group-header" }, os = { class: "di-api-group-count" }, ns = { class: "di-api-group-list" }, is = { class: "di-api-endpoint" }, as = {
  key: 0,
  class: "di-api-variable"
}, ds = { class: "di-api-trigger" }, us = {
  key: 1,
  class: "di-api-group"
}, rs = { class: "di-api-group-header" }, cs = { class: "di-api-group-count" }, vs = { class: "di-api-group-list" }, ps = { class: "di-api-endpoint" }, ms = {
  key: 0,
  class: "di-api-variable"
}, hs = { class: "di-content" }, ys = { class: "di-cross-search-section" }, fs = {
  key: 0,
  class: "di-cross-search-body"
}, bs = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, gs = ["onClick"], ks = ["placeholder"], xs = {
  key: 0,
  class: "di-cross-search-count"
}, ws = {
  key: 1,
  class: "di-cross-search-results"
}, $s = { class: "di-cross-search-page-header" }, _s = {
  key: 0,
  class: "di-cross-search-page-name"
}, Cs = ["onClick"], Is = { class: "di-cross-search-field" }, Ms = {
  key: 0,
  class: "di-cross-search-context"
}, Ts = { class: "di-screen-flow-section" }, Ss = {
  key: 0,
  class: "di-screen-flow-badge"
}, Ds = {
  key: 0,
  class: "di-screen-flow-body"
}, Es = {
  key: 0,
  class: "di-screen-flow-empty"
}, Us = { class: "di-flow-node-path" }, Ls = {
  key: 0,
  class: "di-flow-node-name"
}, Vs = ["onClick"], Ps = { class: "di-flow-target" }, As = {
  key: 0,
  class: "di-flow-edge-label"
}, Bs = {
  key: 1,
  class: "di-flow-orphans"
}, Fs = { class: "di-section" }, js = { class: "di-screen-header" }, Ns = { class: "di-screen-name" }, qs = {
  key: 0,
  class: "di-screen-desc"
}, Os = {
  key: 1,
  class: "di-auth-badges"
}, Hs = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, Rs = {
  key: 1,
  class: "di-auth-note"
}, zs = {
  key: 0,
  class: "di-card"
}, Gs = { class: "di-card-label" }, Ys = { class: "di-code-blue" }, Ks = {
  key: 1,
  class: "di-card"
}, Xs = { class: "di-card-label" }, Zs = ["href"], Js = {
  key: 2,
  class: "di-card"
}, Qs = { class: "di-card-label" }, Ws = { class: "di-api-list" }, eo = { class: "di-api-info" }, to = { class: "di-api-endpoint" }, lo = {
  key: 0,
  class: "di-api-desc"
}, so = {
  key: 0,
  class: "di-api-timing-badge"
}, oo = {
  key: 3,
  class: "di-card"
}, no = { class: "di-card-label" }, io = { class: "di-screen-notes" }, ao = {
  key: 1,
  class: "di-no-spec"
}, uo = { class: "di-card" }, ro = { class: "di-card-header" }, co = { class: "di-card-label" }, vo = { class: "di-count-badge" }, po = { class: "di-section" }, mo = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, ho = {
  key: 0,
  class: "di-section-badge"
}, yo = { class: "di-master-table-name" }, fo = ["onClick"], bo = { class: "di-master-item-header" }, go = { class: "di-master-col-name" }, ko = {
  key: 0,
  class: "di-master-col-type"
}, xo = { class: "di-master-item-name" }, wo = { class: "di-master-entries-preview" }, $o = {
  key: 0,
  class: "di-master-entry-more"
}, _o = { class: "di-master-editor" }, Co = { class: "di-master-editor-header" }, Io = { class: "di-master-editor-body" }, Mo = { class: "di-master-row" }, To = { class: "di-master-field" }, So = ["disabled"], Do = { class: "di-master-field" }, Eo = ["disabled"], Uo = { class: "di-master-row" }, Lo = { class: "di-master-field" }, Vo = { class: "di-master-field" }, Po = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, Ao = { class: "di-master-entries-header" }, Bo = { class: "di-master-entries-list" }, Fo = ["onUpdate:modelValue"], jo = ["onUpdate:modelValue"], No = ["onUpdate:modelValue"], qo = ["onUpdate:modelValue"], Oo = ["onClick"], Ho = { class: "di-master-editor-footer" }, Ro = ["disabled"], zo = {
  key: 0,
  class: "di-export-buttons"
}, Go = {
  key: 1,
  class: "di-export-hint"
}, Yo = { class: "di-action-buttons" }, Ko = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Xo = { class: "di-modal" }, Zo = ["value"], Jo = { class: "di-modal-actions" }, Qo = { class: "di-modal" }, Wo = { class: "di-file-drop" }, en = {
  key: 0,
  class: "di-error"
}, tn = { class: "di-modal-actions" }, ln = ["disabled"], sn = /* @__PURE__ */ at({
  __name: "DevPanel",
  setup(q) {
    const s = dt(), M = f(!1), B = f(!1), R = f(""), Y = f(""), ie = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, oe = K(() => s.currentScreenSpec), ae = K(() => s.getScreenConfig()), $ = K(() => {
      var d;
      const m = ae.value, l = oe.value;
      return !m && !l ? null : {
        name: (m == null ? void 0 : m.name) || (l == null ? void 0 : l.name) || "",
        description: (m == null ? void 0 : m.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (m == null ? void 0 : m.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (m == null ? void 0 : m.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (m == null ? void 0 : m.apis) || ((d = l == null ? void 0 : l.apis) == null ? void 0 : d.map((L) => ({ ...L, loadTiming: void 0 }))) || [],
        auth: (m == null ? void 0 : m.auth) || null,
        notes: (m == null ? void 0 : m.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), re = K(() => Object.keys(s.elementConfigs).length), ee = K(() => Object.values(s.elementConfigs).filter((m) => {
      var l, d;
      return !!((l = m.note) != null && l.text || (d = m.note) != null && d.displayType);
    }).length), ge = K(() => {
      const m = s.noteHighlightFilter;
      return m === "all" ? ee.value : Object.values(s.elementConfigs).filter((l) => {
        var le, we, Oe, Ge, He, Fe, Ae;
        if (!((le = l.note) != null && le.text || (we = l.note) != null && we.displayType || l.elementType)) return !1;
        const d = (Oe = l.note) == null ? void 0 : Oe.displayType, L = !!((Ge = l.note) != null && Ge.condition || (He = l.note) != null && He.conditionColumn), P = !!((Fe = l.note) != null && Fe.storedCalc);
        switch (m) {
          case "db":
            return d === "db_direct" || d === "db_formatted";
          case "calculated":
            return d === "calculated";
          case "storedCalc":
            return P;
          case "static":
            return d === "static";
          case "conditional":
            return L;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return d === "other" || !d && !l.elementType && !!((Ae = l.note) != null && Ae.text);
          default:
            return !0;
        }
      }).length;
    });
    function ye() {
      const m = s.exportConfigs();
      navigator.clipboard.writeText(m), M.value = !1;
    }
    function de() {
      const m = s.exportConfigs(), l = new Blob([m], { type: "application/json" }), d = URL.createObjectURL(l), L = document.createElement("a");
      L.href = d, L.download = "dev-mode-configs.json", L.click(), URL.revokeObjectURL(d), M.value = !1;
    }
    function x() {
      s.downloadAnnotations();
    }
    async function ne() {
      try {
        await rl(
          s.currentScreenSpec,
          s.elementConfigs,
          { systemName: "System" }
        );
      } catch (m) {
        console.error("Failed to export xlsx:", m), alert("xlsx export failed. Make sure xlsx package is installed.");
      }
    }
    function Ee() {
      try {
        s.importConfigs(R.value), R.value = "", Y.value = "", B.value = !1;
      } catch {
        Y.value = "JSONの形式が正しくありません";
      }
    }
    function D(m) {
      var P;
      const d = (P = m.target.files) == null ? void 0 : P[0];
      if (!d) return;
      const L = new FileReader();
      L.onload = (le) => {
        var we;
        R.value = (we = le.target) == null ? void 0 : we.result;
      }, L.readAsText(d);
    }
    function U() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    const y = f("/dev-inspector-analysis.json"), r = f(!1), _ = f(""), G = f(0), V = f(!1), z = [
      { value: "all", label: "すべて" },
      { value: "db", label: "DB" },
      { value: "calculated", label: "計算値" },
      { value: "storedCalc", label: "保存計算値" },
      { value: "static", label: "固定" },
      { value: "conditional", label: "条件付き" },
      { value: "action", label: "アクション" },
      { value: "form", label: "フォーム" },
      { value: "other", label: "その他" }
    ], O = [
      { value: "all", label: "すべて" },
      { value: "db-api", label: "DB/API" },
      { value: "form", label: "フォーム" },
      { value: "button", label: "ボタン" },
      { value: "link", label: "リンク" },
      { value: "modal", label: "モーダル" },
      { value: "conditional", label: "条件" },
      { value: "computed", label: "計算" },
      { value: "other", label: "その他" },
      { value: "none", label: "非表示" }
    ], Q = K(() => s.getCurrentPageApis()), ue = {
      onMount: "画面読込時",
      useFetch: "useFetch",
      useAsyncData: "useAsyncData",
      watch: "watch",
      action: "アクション",
      unknown: "不明"
    };
    async function ce() {
      r.value = !0, _.value = "";
      try {
        if (await s.loadAnalysisData(y.value), s.analysisData) {
          const m = Object.values(s.analysisData.components).reduce((l, d) => l + d.elements.length, 0);
          alert(`分析データを読み込みました（${Object.keys(s.analysisData.components).length}コンポーネント、${m}要素）`);
        } else
          _.value = "分析データの読み込みに失敗しました";
      } catch (m) {
        _.value = `読み込みエラー: ${m}`;
      } finally {
        r.value = !1;
      }
    }
    async function fe() {
      if (!s.analysisData) {
        alert("先に分析データを読み込んでください");
        return;
      }
      G.value = await s.applyAnalysisToPage();
    }
    const A = K(() => s.brokenAnnotations.length);
    it(() => s.isPanelOpen, (m) => {
      m && s.detectBrokenAnnotations();
    });
    function h() {
      confirm(`${A.value}件の壊れたメモを削除しますか？`) && s.deleteBrokenAnnotations();
    }
    const g = f(!1), J = f(null), C = f({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: []
    }), ve = K(() => Object.keys(s.masterDefinitions).length), Le = K(() => {
      const m = Object.values(s.masterDefinitions), l = {};
      for (const d of m)
        l[d.table] || (l[d.table] = []), l[d.table].push(d);
      return l;
    });
    function ke(m) {
      if (m) {
        const l = s.getMasterDefinition(m);
        l && (J.value = m, C.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((d) => ({ ...d }))]
        });
      } else
        J.value = null, C.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }]
        };
      g.value = !0;
    }
    function xe() {
      const m = C.value;
      if (!m.table || !m.column) return;
      const d = {
        id: `${m.table}.${m.column}`,
        table: m.table,
        column: m.column,
        name: m.name || m.column,
        columnType: m.columnType || void 0,
        description: m.description || void 0,
        entries: m.entries.filter((L) => L.value || L.label),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      s.setMasterDefinition(d), g.value = !1;
    }
    function Te() {
      C.value.entries.push({ value: "", label: "" });
    }
    function _e(m) {
      C.value.entries.splice(m, 1);
    }
    function Se(m) {
      confirm(`マスタ定義「${m}」を削除しますか？`) && s.deleteMasterDefinition(m);
    }
    async function Ce() {
      V.value = !0;
      try {
        s.clearHiddenSelectors(), s.analysisData && await s.applyAnalysisToPage();
      } finally {
        V.value = !1;
      }
    }
    const W = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], se = K(() => {
      var m;
      return ((m = W.find((l) => l.value === s.crossSearchMode)) == null ? void 0 : m.placeholder) || "検索...";
    }), te = K(() => {
      const m = {};
      for (const l of s.crossSearchResults)
        m[l.pagePath] || (m[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), m[l.pagePath].items.push(l);
      return Object.values(m);
    }), De = K(() => te.value.length), Ve = K(() => {
      const m = s.unannotatedElements;
      return {
        binding: m.filter((l) => l.category === "binding").length,
        form: m.filter((l) => l.category === "form").length,
        action: m.filter((l) => l.category === "action").length
      };
    });
    function Ue() {
      s.showUnannotatedDetection ? (s.showUnannotatedDetection = !1, s.unannotatedElements = []) : (s.showUnannotatedDetection = !0, s.detectUnannotatedElements());
    }
    const Qe = K(() => typeof window < "u" ? window.location.pathname : "/"), ze = K(() => {
      const m = s.screenFlowData, l = {};
      for (const d of m.edges) {
        if (!l[d.from]) {
          const L = m.nodes.find((P) => P.path === d.from) || { path: d.from, name: d.from, annotationCount: 0 };
          l[d.from] = { node: L, edges: [] };
        }
        l[d.from].edges.push(d);
      }
      return Object.values(l);
    });
    function Pe(m) {
      m && s.startEditing(m);
    }
    return (m, l) => (o(), n(S, null, [
      (o(), $e(qe, { to: "body" }, [
        u(s).isEnabled && !u(s).isPanelOpen ? (o(), n("button", {
          key: 0,
          onClick: l[0] || (l[0] = //@ts-ignore
          (...d) => u(s).openPanel && u(s).openPanel(...d)),
          class: "di-fab",
          title: "画面仕様を表示",
          "data-dev-inspector": ""
        }, [
          k(u(St), { style: { width: "20px", height: "20px" } })
        ])) : c("", !0)
      ])),
      (o(), $e(qe, { to: "body" }, [
        u(s).isEnabled && u(s).isPanelOpen ? (o(), n("div", cl, [
          e("div", vl, [
            e("div", pl, [
              k(u(Tt), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
              l[29] || (l[29] = e("span", null, "Developer Mode", -1))
            ]),
            e("button", {
              onClick: l[1] || (l[1] = //@ts-ignore
              (...d) => u(s).closePanel && u(s).closePanel(...d)),
              class: "di-close-btn"
            }, [
              k(u(Je), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", ml, [
            e("button", {
              onClick: l[2] || (l[2] = //@ts-ignore
              (...d) => u(s).togglePickMode && u(s).togglePickMode(...d)),
              class: X(["di-pick-btn", { active: u(s).isPickMode }])
            }, [
              k(u(Ut), { style: { width: "16px", height: "16px" } }),
              e("span", null, v(u(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
            ], 2),
            ee.value > 0 ? (o(), n("button", {
              key: 0,
              onClick: l[3] || (l[3] = //@ts-ignore
              (...d) => u(s).toggleNoteHighlights && u(s).toggleNoteHighlights(...d)),
              class: X(["di-note-toggle-btn", { active: u(s).showNoteHighlights }])
            }, [
              u(s).showNoteHighlights ? (o(), $e(u(Xt), {
                key: 0,
                style: { width: "14px", height: "14px" }
              })) : (o(), $e(u(Kt), {
                key: 1,
                style: { width: "14px", height: "14px" }
              })),
              l[30] || (l[30] = e("span", null, "メモハイライト", -1)),
              e("span", hl, v(u(s).noteHighlightFilter === "all" ? ee.value : `${ge.value}/${ee.value}`), 1)
            ], 2)) : c("", !0),
            ee.value > 0 && u(s).showNoteHighlights ? (o(), n("div", yl, [
              e("div", fl, [
                (o(), n(S, null, j(z, (d) => e("button", {
                  key: d.value,
                  onClick: (L) => u(s).noteHighlightFilter = d.value,
                  class: X(["di-filter-btn", { active: u(s).noteHighlightFilter === d.value }])
                }, v(d.label), 11, bl)), 64))
              ])
            ])) : c("", !0),
            e("button", {
              onClick: Ue,
              class: X(["di-unannotated-btn", { active: u(s).showUnannotatedDetection }])
            }, [
              k(u(Gt), { style: { width: "14px", height: "14px" } }),
              e("span", null, v(u(s).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
              u(s).unannotatedElements.length > 0 ? (o(), n("span", gl, v(u(s).unannotatedElements.length), 1)) : c("", !0)
            ], 2),
            u(s).showUnannotatedDetection && u(s).unannotatedElements.length > 0 ? (o(), n("div", kl, [
              e("div", xl, [
                N(v(u(s).unannotatedElements.length) + "件検出: ", 1),
                Ve.value.binding > 0 ? (o(), n("span", wl, "バインディング " + v(Ve.value.binding), 1)) : c("", !0),
                Ve.value.form > 0 ? (o(), n("span", $l, " / フォーム " + v(Ve.value.form), 1)) : c("", !0),
                Ve.value.action > 0 ? (o(), n("span", _l, " / アクション " + v(Ve.value.action), 1)) : c("", !0)
              ]),
              e("div", Cl, [
                (o(!0), n(S, null, j(u(s).unannotatedElements, (d) => (o(), n("div", {
                  key: d.selector,
                  class: "di-unannotated-item"
                }, [
                  e("span", {
                    class: X(["di-unannotated-category", "di-unannotated-cat-" + d.category])
                  }, v(d.category === "binding" ? "DB" : d.category === "form" ? "Form" : "Act"), 3),
                  e("span", Il, v(d.text || d.tagName), 1),
                  e("button", {
                    onClick: (L) => u(s).quickAnnotate(d.selector, d.suggestedType),
                    class: "di-unannotated-register"
                  }, " 登録 ", 8, Ml)
                ]))), 128))
              ])
            ])) : c("", !0),
            u(s).showUnannotatedDetection && u(s).unannotatedElements.length === 0 ? (o(), n("div", Tl, " 未登録の要素はありません ")) : c("", !0),
            A.value > 0 ? (o(), n("div", Sl, [
              e("div", Dl, [
                k(u(Ht), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                e("span", null, v(A.value) + "件のメモが見つかりません", 1)
              ]),
              l[33] || (l[33] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
              e("div", El, [
                (o(!0), n(S, null, j(u(s).brokenAnnotations, (d) => {
                  var L, P;
                  return o(), n("div", {
                    key: d,
                    class: "di-broken-item"
                  }, [
                    e("div", Ul, [
                      e("div", Ll, v(((P = (L = u(s).elementConfigs[d]) == null ? void 0 : L.note) == null ? void 0 : P.text) || "(メモなし)"), 1),
                      e("div", Vl, v(d), 1)
                    ]),
                    e("div", Pl, [
                      e("button", {
                        onClick: (le) => u(s).startRemap(d),
                        class: "di-broken-remap-btn",
                        title: "新しい要素に再設定"
                      }, [
                        k(u(Ut), { style: { width: "12px", height: "12px" } }),
                        l[31] || (l[31] = N(" 再設定 ", -1))
                      ], 8, Al),
                      e("button", {
                        onClick: (le) => {
                          u(s).deleteElementConfig(d), u(s).detectBrokenAnnotations();
                        },
                        class: "di-broken-item-delete",
                        title: "削除"
                      }, [
                        k(u(nt), { style: { width: "12px", height: "12px" } })
                      ], 8, Bl)
                    ])
                  ]);
                }), 128))
              ]),
              e("div", Fl, [
                e("button", {
                  onClick: h,
                  class: "di-broken-delete-btn"
                }, [
                  k(u(nt), { style: { width: "12px", height: "12px" } }),
                  l[32] || (l[32] = N(" まとめて削除 ", -1))
                ])
              ])
            ])) : c("", !0),
            e("div", jl, [
              e("div", Nl, [
                k(u(Vt), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                l[34] || (l[34] = e("span", null, "CLIソース解析", -1))
              ]),
              e("div", ql, [
                w(e("input", {
                  "onUpdate:modelValue": l[4] || (l[4] = (d) => y.value = d),
                  type: "text",
                  class: "di-analysis-url",
                  placeholder: "/dev-inspector-analysis.json"
                }, null, 512), [
                  [E, y.value]
                ])
              ]),
              e("div", Ol, [
                e("button", {
                  onClick: ce,
                  class: "di-analysis-btn",
                  disabled: r.value
                }, [
                  r.value ? (o(), $e(u(Et), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "14px", height: "14px" }
                  })) : (o(), $e(u(yt), {
                    key: 1,
                    style: { width: "14px", height: "14px" }
                  })),
                  l[35] || (l[35] = e("span", null, "読み込み", -1))
                ], 8, Hl),
                e("button", {
                  onClick: fe,
                  class: "di-analysis-btn di-analysis-btn-apply",
                  disabled: !u(s).analysisData
                }, [
                  k(u(ol), { style: { width: "14px", height: "14px" } }),
                  l[36] || (l[36] = e("span", null, "ページに適用", -1))
                ], 8, Rl)
              ]),
              _.value ? (o(), n("div", zl, v(_.value), 1)) : c("", !0),
              u(s).analysisResults.length > 0 ? (o(), n("div", Gl, [
                e("span", Yl, v(u(s).analysisResults.filter((d) => d.matched).length), 1),
                e("span", null, "/ " + v(u(s).analysisResults.length) + " 要素がマッチ", 1)
              ])) : c("", !0),
              u(s).analysisResults.length > 0 ? (o(), n("div", Kl, [
                l[38] || (l[38] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                e("div", Xl, [
                  (o(), n(S, null, j(O, (d) => e("button", {
                    key: d.value,
                    onClick: (L) => u(s).analysisFilter = d.value,
                    class: X(["di-filter-btn", { active: u(s).analysisFilter === d.value }])
                  }, v(d.label), 11, Zl)), 64))
                ]),
                u(s).hiddenAnalysisSelectors.size > 0 ? (o(), n("div", Jl, [
                  e("button", {
                    onClick: Ce,
                    class: "di-restore-btn",
                    disabled: V.value
                  }, [
                    V.value ? (o(), $e(u(Et), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "12px", height: "12px" }
                    })) : c("", !0),
                    V.value ? (o(), n("span", Wl, "リセット中...")) : (o(), n("span", es, "非表示 (" + v(u(s).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                  ], 8, Ql),
                  e("button", {
                    onClick: l[5] || (l[5] = (d) => u(s).downloadChanges()),
                    class: "di-export-changes-btn",
                    title: "削除した要素をエクスポート (CLI merge用)"
                  }, [
                    k(u(yt), { style: { width: "12px", height: "12px" } }),
                    l[37] || (l[37] = e("span", null, "変更をエクスポート", -1))
                  ])
                ])) : c("", !0)
              ])) : c("", !0),
              Q.value.pageLoad.length > 0 || Q.value.action.length > 0 ? (o(), n("div", ts, [
                Q.value.pageLoad.length > 0 ? (o(), n("div", ls, [
                  e("div", ss, [
                    l[39] || (l[39] = e("span", { class: "di-api-group-icon" }, "📡", -1)),
                    l[40] || (l[40] = e("span", null, "画面読込時のAPI", -1)),
                    e("span", os, v(Q.value.pageLoad.length), 1)
                  ]),
                  e("div", ns, [
                    (o(!0), n(S, null, j(Q.value.pageLoad, (d) => (o(), n("div", {
                      key: d.endpoint + d.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: X(["di-api-method", "di-api-method-" + d.method.toLowerCase()])
                      }, v(d.method), 3),
                      e("code", is, v(d.endpoint || d.composable), 1),
                      d.variable ? (o(), n("span", as, "→ " + v(d.variable), 1)) : c("", !0),
                      e("span", ds, v(ue[d.loadTrigger]), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                Q.value.action.length > 0 ? (o(), n("div", us, [
                  e("div", rs, [
                    l[41] || (l[41] = e("span", { class: "di-api-group-icon" }, "👆", -1)),
                    l[42] || (l[42] = e("span", null, "アクション時のAPI", -1)),
                    e("span", cs, v(Q.value.action.length), 1)
                  ]),
                  e("div", vs, [
                    (o(!0), n(S, null, j(Q.value.action, (d) => (o(), n("div", {
                      key: d.endpoint + d.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: X(["di-api-method", "di-api-method-" + d.method.toLowerCase()])
                      }, v(d.method), 3),
                      e("code", ps, v(d.endpoint || d.composable), 1),
                      d.variable ? (o(), n("span", ms, "→ " + v(d.variable), 1)) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0)
              ])) : c("", !0)
            ])
          ]),
          e("div", hs, [
            e("div", ys, [
              e("button", {
                onClick: l[6] || (l[6] = (d) => u(s).showCrossSearch = !u(s).showCrossSearch),
                class: X(["di-cross-search-toggle", { active: u(s).showCrossSearch }])
              }, [
                k(u(nl), { style: { width: "14px", height: "14px" } }),
                l[43] || (l[43] = e("span", null, "横断検索", -1))
              ], 2),
              u(s).showCrossSearch ? (o(), n("div", fs, [
                e("div", bs, [
                  (o(), n(S, null, j(W, (d) => e("button", {
                    key: d.value,
                    onClick: (L) => u(s).crossSearchMode = d.value,
                    class: X(["di-filter-btn", { active: u(s).crossSearchMode === d.value }])
                  }, v(d.label), 11, gs)), 64))
                ]),
                w(e("input", {
                  "onUpdate:modelValue": l[7] || (l[7] = (d) => u(s).crossSearchQuery = d),
                  type: "text",
                  class: "di-cross-search-input",
                  placeholder: se.value
                }, null, 8, ks), [
                  [E, u(s).crossSearchQuery]
                ]),
                u(s).crossSearchQuery.trim() ? (o(), n("div", xs, v(u(s).crossSearchResults.length) + "件 (" + v(De.value) + "画面) ", 1)) : c("", !0),
                te.value.length > 0 ? (o(), n("div", ws, [
                  (o(!0), n(S, null, j(te.value, (d) => (o(), n("div", {
                    key: d.pagePath,
                    class: "di-cross-search-group"
                  }, [
                    e("div", $s, [
                      N(v(d.pagePath) + " ", 1),
                      d.pageName !== d.pagePath ? (o(), n("span", _s, "(" + v(d.pageName) + ")", 1)) : c("", !0)
                    ]),
                    (o(!0), n(S, null, j(d.items, (L, P) => (o(), n("div", {
                      key: P,
                      class: X(["di-cross-search-item", L.elementType ? "di-cross-item-" + L.elementType : ""]),
                      onClick: (le) => L.selector && u(s).startEditing(L.selector)
                    }, [
                      e("span", Is, v(L.matchedField), 1),
                      L.matchContext ? (o(), n("span", Ms, v(L.matchContext), 1)) : c("", !0)
                    ], 10, Cs))), 128))
                  ]))), 128))
                ])) : c("", !0)
              ])) : c("", !0)
            ]),
            e("div", Ts, [
              e("button", {
                onClick: l[8] || (l[8] = (d) => u(s).showScreenFlow = !u(s).showScreenFlow),
                class: X(["di-screen-flow-toggle", { active: u(s).showScreenFlow }])
              }, [
                k(u(Wt), { style: { width: "14px", height: "14px" } }),
                l[44] || (l[44] = e("span", null, "画面フロー", -1)),
                u(s).screenFlowData.edges.length > 0 ? (o(), n("span", Ss, v(u(s).screenFlowData.nodes.length) + "画面 / " + v(u(s).screenFlowData.edges.length) + "遷移 ", 1)) : c("", !0)
              ], 2),
              u(s).showScreenFlow ? (o(), n("div", Ds, [
                u(s).screenFlowData.edges.length === 0 ? (o(), n("div", Es, " navigate型のアクションが登録されていません ")) : c("", !0),
                (o(!0), n(S, null, j(ze.value, (d) => (o(), n("div", {
                  key: d.node.path,
                  class: "di-flow-group"
                }, [
                  e("div", {
                    class: X(["di-flow-node", { "di-flow-node-current": d.node.path === Qe.value }])
                  }, [
                    e("span", Us, v(d.node.path), 1),
                    d.node.name !== d.node.path ? (o(), n("span", Ls, "(" + v(d.node.name) + ")", 1)) : c("", !0)
                  ], 2),
                  (o(!0), n(S, null, j(d.edges, (L) => (o(), n("div", {
                    key: L.from + L.to,
                    class: "di-flow-edge",
                    onClick: (P) => Pe(L.selector)
                  }, [
                    l[45] || (l[45] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                    e("span", Ps, v(L.to), 1),
                    L.label ? (o(), n("span", As, "[" + v(L.label) + "]", 1)) : c("", !0)
                  ], 8, Vs))), 128))
                ]))), 128)),
                u(s).screenFlowData.orphanPages.length > 0 ? (o(), n("div", Bs, [
                  l[46] || (l[46] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                  (o(!0), n(S, null, j(u(s).screenFlowData.orphanPages, (d) => (o(), n("span", {
                    key: d.path,
                    class: "di-flow-orphan-item"
                  }, v(d.path), 1))), 128))
                ])) : c("", !0)
              ])) : c("", !0)
            ]),
            $.value ? (o(), n(S, { key: 0 }, [
              e("div", Fs, [
                e("div", js, [
                  e("h2", Ns, v($.value.name), 1),
                  e("button", {
                    onClick: l[9] || (l[9] = (d) => u(s).editingScreen = !0),
                    class: "di-screen-edit-btn",
                    title: "画面情報を編集"
                  }, [
                    k(u(Lt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                $.value.description ? (o(), n("p", qs, v($.value.description), 1)) : c("", !0),
                $.value.auth ? (o(), n("div", Os, [
                  $.value.auth.required ? (o(), n("span", Hs, [
                    k(u(el), { style: { width: "11px", height: "11px" } }),
                    l[47] || (l[47] = N(" ログイン必須 ", -1))
                  ])) : c("", !0),
                  (o(!0), n(S, null, j($.value.auth.roles || [], (d) => (o(), n("span", {
                    key: d,
                    class: "di-auth-badge di-auth-role"
                  }, [
                    k(u(il), { style: { width: "11px", height: "11px" } }),
                    N(" " + v(d), 1)
                  ]))), 128)),
                  $.value.auth.description ? (o(), n("span", Rs, v($.value.auth.description), 1)) : c("", !0)
                ])) : c("", !0)
              ]),
              $.value.componentPath ? (o(), n("div", zs, [
                e("div", Gs, [
                  k(u(Tt), { style: { width: "16px", height: "16px" } }),
                  l[48] || (l[48] = e("span", null, "Component Path", -1))
                ]),
                e("code", Ys, v($.value.componentPath), 1)
              ])) : c("", !0),
              $.value.figmaUrl ? (o(), n("div", Ks, [
                e("div", Xs, [
                  k(u(Yt), { style: { width: "16px", height: "16px" } }),
                  l[49] || (l[49] = e("span", null, "Figma Design", -1))
                ]),
                e("a", {
                  href: $.value.figmaUrl,
                  target: "_blank",
                  class: "di-link-purple"
                }, v($.value.figmaUrl), 9, Zs)
              ])) : c("", !0),
              $.value.apis.length ? (o(), n("div", Js, [
                e("div", Qs, [
                  k(u(Vt), { style: { width: "16px", height: "16px" } }),
                  l[50] || (l[50] = e("span", null, "API Endpoints", -1))
                ]),
                e("div", Ws, [
                  (o(!0), n(S, null, j($.value.apis, (d, L) => (o(), n("div", {
                    key: L,
                    class: "di-api-item"
                  }, [
                    e("span", {
                      class: "di-method-badge",
                      style: Me({ backgroundColor: ie[d.method] + "20", color: ie[d.method] })
                    }, v(d.method), 5),
                    e("div", eo, [
                      e("code", to, v(d.endpoint), 1),
                      d.description ? (o(), n("p", lo, v(d.description), 1)) : c("", !0)
                    ]),
                    d.loadTiming ? (o(), n("span", so, v(d.loadTiming === "onMount" ? "読込時" : d.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : c("", !0)
                  ]))), 128))
                ])
              ])) : c("", !0),
              $.value.notes ? (o(), n("div", oo, [
                e("div", no, [
                  k(u(Ot), { style: { width: "16px", height: "16px" } }),
                  l[51] || (l[51] = e("span", null, "Notes", -1))
                ]),
                e("p", io, v($.value.notes), 1)
              ])) : c("", !0)
            ], 64)) : (o(), n("div", ao, [
              k(u(St), { style: { width: "48px", height: "48px", color: "#334155" } }),
              l[53] || (l[53] = e("p", null, [
                N("この画面の仕様情報は"),
                e("br"),
                N("まだ登録されていません")
              ], -1)),
              e("button", {
                onClick: l[10] || (l[10] = (d) => u(s).editingScreen = !0),
                class: "di-screen-register-btn"
              }, [
                k(u(Lt), { style: { width: "14px", height: "14px" } }),
                l[52] || (l[52] = N(" 画面情報を登録 ", -1))
              ])
            ])),
            e("div", uo, [
              e("div", ro, [
                e("div", co, [
                  k(u(sl), { style: { width: "16px", height: "16px" } }),
                  l[54] || (l[54] = e("span", null, "登録済み要素", -1)),
                  e("span", vo, v(re.value), 1)
                ])
              ]),
              e("div", po, [
                e("div", mo, [
                  k(u(Ze), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                  l[55] || (l[55] = e("span", null, "マスタ定義", -1)),
                  ve.value > 0 ? (o(), n("span", ho, v(ve.value), 1)) : c("", !0),
                  e("button", {
                    onClick: l[11] || (l[11] = (d) => ke()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    k(u(wt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                ve.value > 0 ? (o(!0), n(S, { key: 0 }, j(Le.value, (d, L) => (o(), n("div", {
                  key: L,
                  class: "di-master-table-group"
                }, [
                  e("div", yo, v(L), 1),
                  (o(!0), n(S, null, j(d, (P) => (o(), n("div", {
                    key: P.id,
                    class: "di-master-item",
                    onClick: (le) => ke(P.id)
                  }, [
                    e("div", bo, [
                      e("span", go, "." + v(P.column), 1),
                      P.columnType ? (o(), n("span", ko, v(P.columnType), 1)) : c("", !0),
                      e("span", xo, v(P.name), 1)
                    ]),
                    e("div", wo, [
                      (o(!0), n(S, null, j(P.entries.slice(0, 5), (le, we) => (o(), n("span", {
                        key: we,
                        class: "di-master-entry-chip",
                        style: Me(le.color ? { borderColor: le.color, color: le.color } : {})
                      }, v(le.value) + "=" + v(le.label), 5))), 128)),
                      P.entries.length > 5 ? (o(), n("span", $o, "+" + v(P.entries.length - 5), 1)) : c("", !0)
                    ])
                  ], 8, fo))), 128))
                ]))), 128)) : (o(), n("div", {
                  key: 1,
                  class: "di-master-empty",
                  onClick: l[12] || (l[12] = (d) => ke())
                }, [...l[56] || (l[56] = [
                  e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                ])]))
              ]),
              (o(), $e(qe, { to: "body" }, [
                g.value ? (o(), n("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[21] || (l[21] = be((d) => g.value = !1, ["self"]))
                }, [
                  e("div", _o, [
                    e("div", Co, [
                      e("h3", null, v(J.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                      e("button", {
                        onClick: l[13] || (l[13] = (d) => g.value = !1),
                        class: "di-close-btn"
                      }, [
                        k(u(Je), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", Io, [
                      e("div", Mo, [
                        e("div", To, [
                          l[57] || (l[57] = e("label", null, "テーブル", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[14] || (l[14] = (d) => C.value.table = d),
                            placeholder: "orders",
                            disabled: !!J.value
                          }, null, 8, So), [
                            [E, C.value.table]
                          ])
                        ]),
                        e("div", Do, [
                          l[58] || (l[58] = e("label", null, "カラム", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[15] || (l[15] = (d) => C.value.column = d),
                            placeholder: "status",
                            disabled: !!J.value
                          }, null, 8, Eo), [
                            [E, C.value.column]
                          ])
                        ])
                      ]),
                      e("div", Uo, [
                        e("div", Lo, [
                          l[59] || (l[59] = e("label", null, "表示名", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[16] || (l[16] = (d) => C.value.name = d),
                            placeholder: "ステータス"
                          }, null, 512), [
                            [E, C.value.name]
                          ])
                        ]),
                        e("div", Vo, [
                          l[60] || (l[60] = e("label", null, "型", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[17] || (l[17] = (d) => C.value.columnType = d),
                            placeholder: "integer"
                          }, null, 512), [
                            [E, C.value.columnType]
                          ])
                        ])
                      ]),
                      e("div", Po, [
                        l[61] || (l[61] = e("label", null, "説明", -1)),
                        w(e("input", {
                          "onUpdate:modelValue": l[18] || (l[18] = (d) => C.value.description = d),
                          placeholder: "注文のステータスを管理"
                        }, null, 512), [
                          [E, C.value.description]
                        ])
                      ]),
                      e("div", Ao, [
                        l[62] || (l[62] = e("label", null, "マスタ値", -1)),
                        e("button", {
                          onClick: Te,
                          class: "di-btn-icon",
                          title: "追加"
                        }, [
                          k(u(wt), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      e("div", Bo, [
                        (o(!0), n(S, null, j(C.value.entries, (d, L) => (o(), n("div", {
                          key: L,
                          class: "di-master-entry-row"
                        }, [
                          w(e("input", {
                            "onUpdate:modelValue": (P) => d.value = P,
                            placeholder: "値",
                            class: "di-master-entry-value"
                          }, null, 8, Fo), [
                            [E, d.value]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (P) => d.label = P,
                            placeholder: "ラベル",
                            class: "di-master-entry-label"
                          }, null, 8, jo), [
                            [E, d.label]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (P) => d.color = P,
                            placeholder: "#色",
                            class: "di-master-entry-color"
                          }, null, 8, No), [
                            [E, d.color]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (P) => d.description = P,
                            placeholder: "説明",
                            class: "di-master-entry-desc"
                          }, null, 8, qo), [
                            [E, d.description]
                          ]),
                          e("button", {
                            onClick: (P) => _e(L),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            k(u(Je), { style: { width: "12px", height: "12px" } })
                          ], 8, Oo)
                        ]))), 128))
                      ])
                    ]),
                    e("div", Ho, [
                      J.value ? (o(), n("button", {
                        key: 0,
                        onClick: l[19] || (l[19] = (d) => {
                          Se(J.value), g.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : c("", !0),
                      l[63] || (l[63] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[20] || (l[20] = (d) => g.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: xe,
                        class: "di-btn-small di-btn-primary",
                        disabled: !C.value.table || !C.value.column
                      }, "保存", 8, Ro)
                    ])
                  ])
                ])) : c("", !0)
              ])),
              re.value > 0 ? (o(), n("div", zo, [
                e("button", {
                  onClick: x,
                  class: "di-btn-green"
                }, [
                  k(u(Qt), { style: { width: "16px", height: "16px" } }),
                  l[64] || (l[64] = N(" Git管理用に保存 ", -1))
                ]),
                e("button", {
                  onClick: ne,
                  class: "di-btn-blue"
                }, [
                  k(u(Zt), { style: { width: "16px", height: "16px" } }),
                  l[65] || (l[65] = N(" 画面仕様書 (xlsx) 出力 ", -1))
                ])
              ])) : c("", !0),
              re.value > 0 ? (o(), n("p", Go, [...l[66] || (l[66] = [
                N(" JSON: ", -1),
                e("code", null, "dev-annotations.json", -1),
                N(" に配置してcommit ", -1)
              ])])) : c("", !0),
              e("div", Yo, [
                e("button", {
                  onClick: l[22] || (l[22] = (d) => M.value = !0),
                  class: "di-btn-small"
                }, [
                  k(u(yt), { style: { width: "14px", height: "14px" } }),
                  l[67] || (l[67] = N(" エクスポート ", -1))
                ]),
                e("button", {
                  onClick: l[23] || (l[23] = (d) => B.value = !0),
                  class: "di-btn-small"
                }, [
                  k(u(dl), { style: { width: "14px", height: "14px" } }),
                  l[68] || (l[68] = N(" インポート ", -1))
                ]),
                re.value > 0 ? (o(), n("button", {
                  key: 0,
                  onClick: U,
                  class: "di-btn-small di-btn-danger"
                }, [
                  k(u(nt), { style: { width: "14px", height: "14px" } }),
                  l[69] || (l[69] = N(" 全削除 ", -1))
                ])) : c("", !0)
              ])
            ])
          ]),
          l[70] || (l[70] = e("div", { class: "di-footer" }, [
            e("kbd", null, "Ctrl"),
            e("span", null, "+"),
            e("kbd", null, "Shift"),
            e("span", null, "+"),
            e("kbd", null, "D"),
            e("span", { class: "di-footer-text" }, "で開発者モード切替")
          ], -1))
        ])) : c("", !0)
      ])),
      (o(), $e(qe, { to: "body" }, [
        u(s).isEnabled ? (o(), n("div", Ko, [...l[71] || (l[71] = [
          e("span", { class: "di-indicator-dot" }, null, -1),
          N(" Developer Mode ", -1)
        ])])) : c("", !0)
      ])),
      (o(), $e(qe, { to: "body" }, [
        M.value ? (o(), n("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[25] || (l[25] = be((d) => M.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Xo, [
            l[73] || (l[73] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
            e("textarea", {
              readonly: "",
              value: u(s).exportConfigs(),
              class: "di-modal-textarea"
            }, null, 8, Zo),
            e("div", Jo, [
              e("button", {
                onClick: l[24] || (l[24] = (d) => M.value = !1),
                class: "di-btn-small"
              }, "閉じる"),
              e("button", {
                onClick: de,
                class: "di-btn-small di-btn-gray"
              }, [
                k(u(yt), { style: { width: "14px", height: "14px" } }),
                l[72] || (l[72] = N(" ファイル保存 ", -1))
              ]),
              e("button", {
                onClick: ye,
                class: "di-btn-small di-btn-primary"
              }, "コピー")
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), $e(qe, { to: "body" }, [
        B.value ? (o(), n("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[28] || (l[28] = be((d) => B.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Qo, [
            l[75] || (l[75] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
            e("label", Wo, [
              e("input", {
                type: "file",
                accept: ".json",
                onChange: D
              }, null, 32),
              l[74] || (l[74] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
            ]),
            w(e("textarea", {
              "onUpdate:modelValue": l[26] || (l[26] = (d) => R.value = d),
              placeholder: "またはJSONを直接貼り付け...",
              class: "di-modal-textarea di-modal-textarea-input"
            }, null, 512), [
              [E, R.value]
            ]),
            Y.value ? (o(), n("p", en, v(Y.value), 1)) : c("", !0),
            e("div", tn, [
              e("button", {
                onClick: l[27] || (l[27] = (d) => {
                  B.value = !1, R.value = "", Y.value = "";
                }),
                class: "di-btn-small"
              }, " キャンセル "),
              e("button", {
                onClick: Ee,
                disabled: !R.value,
                class: "di-btn-small di-btn-primary"
              }, " インポート ", 8, ln)
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), bt = (q, s) => {
  const M = q.__vccOpts || q;
  for (const [B, R] of s)
    M[B] = R;
  return M;
}, on = /* @__PURE__ */ bt(sn, [["__scopeId", "data-v-05616122"]]), nn = { class: "di-editor-modal" }, an = { class: "di-editor-header" }, dn = { class: "di-header-actions" }, un = {
  key: 0,
  class: "di-static-indicator"
}, rn = {
  key: 1,
  class: "di-binding-indicator"
}, cn = {
  key: 0,
  class: "di-binding-source"
}, vn = { class: "di-editor-tabs" }, pn = { class: "di-editor-content" }, mn = { class: "di-form-group" }, hn = { class: "di-display-type-grid" }, yn = ["onClick"], fn = { class: "di-display-type-desc" }, bn = {
  key: 0,
  class: "di-field-tags"
}, gn = { class: "di-field-tags-list" }, kn = { class: "di-field-tag-name" }, xn = {
  key: 0,
  class: "di-field-tag-type"
}, wn = ["onClick"], $n = {
  key: 1,
  class: "di-binding-selector"
}, _n = { class: "di-form-group" }, Cn = { class: "di-form-label" }, In = { class: "di-binding-search-wrapper" }, Mn = {
  key: 0,
  class: "di-binding-list"
}, Tn = ["onClick"], Sn = { class: "di-binding-item-main" }, Dn = { class: "di-binding-name" }, En = { class: "di-binding-type" }, Un = {
  key: 0,
  class: "di-binding-component"
}, Ln = {
  key: 1,
  class: "di-binding-empty"
}, Vn = {
  key: 2,
  class: "di-form-divider"
}, Pn = { class: "di-form-row" }, An = { class: "di-form-group di-suggest-wrapper" }, Bn = {
  key: 0,
  class: "di-suggest-list"
}, Fn = ["onMousedown"], jn = { class: "di-form-group di-suggest-wrapper" }, Nn = {
  key: 0,
  class: "di-suggest-list"
}, qn = ["onMousedown"], On = { class: "di-form-group" }, Hn = ["value"], Rn = ["disabled"], zn = {
  key: 3,
  class: "di-master-inline"
}, Gn = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Yn = {
  key: 0,
  class: "di-master-inline-section"
}, Kn = {
  key: 0,
  class: "di-master-entries-table"
}, Xn = ["onUpdate:modelValue"], Zn = ["onUpdate:modelValue"], Jn = ["onUpdate:modelValue"], Qn = ["onClick"], Wn = {
  key: 4,
  class: "di-form-group"
}, ei = { class: "di-stored-calc-toggle" }, ti = {
  key: 0,
  class: "di-condition-badge"
}, li = {
  key: 5,
  class: "di-stored-calc-section"
}, si = { class: "di-form-group" }, oi = { class: "di-form-group di-suggest-wrapper" }, ni = { class: "di-stored-calc-tags" }, ii = ["onClick"], ai = {
  key: 0,
  class: "di-suggest-list"
}, di = ["onMousedown"], ui = { class: "di-form-group" }, ri = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, ci = {
  key: 0,
  class: "di-calc-tag"
}, vi = ["onClick"], pi = {
  key: 1,
  class: "di-calc-text"
}, mi = ["placeholder"], hi = {
  key: 0,
  class: "di-suggest-list"
}, yi = ["onMousedown"], fi = {
  key: 2,
  class: "di-form-group"
}, bi = { class: "di-condition-toggle" }, gi = {
  key: 0,
  class: "di-condition-badge"
}, ki = {
  key: 0,
  class: "di-condition-section"
}, xi = { class: "di-form-group" }, wi = { class: "di-form-group di-suggest-wrapper" }, $i = { class: "di-form-row" }, _i = { class: "di-form-group" }, Ci = {
  key: 0,
  class: "di-form-group"
}, Ii = { class: "di-form-row" }, Mi = { class: "di-form-group" }, Ti = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, Si = { class: "di-form-row" }, Di = { class: "di-form-group" }, Ei = { class: "di-form-group" }, Ui = { class: "di-form-group" }, Li = { class: "di-form-group" }, Vi = { class: "di-form-group" }, Pi = { class: "di-form-group" }, Ai = ["placeholder"], Bi = {
  key: 0,
  class: "di-form-group"
}, Fi = { class: "di-form-group" }, ji = { class: "di-form-group" }, Ni = { class: "di-form-group" }, qi = {
  key: 0,
  class: "di-field-tags"
}, Oi = { class: "di-field-tags-list" }, Hi = { class: "di-field-tag-name" }, Ri = {
  key: 0,
  class: "di-field-tag-type"
}, zi = ["onClick"], Gi = {
  key: 1,
  class: "di-binding-selector"
}, Yi = { class: "di-form-group" }, Ki = { class: "di-form-label" }, Xi = { class: "di-binding-search-wrapper" }, Zi = {
  key: 0,
  class: "di-binding-list"
}, Ji = ["onClick"], Qi = { class: "di-binding-item-main" }, Wi = { class: "di-binding-name" }, ea = { class: "di-binding-type" }, ta = {
  key: 0,
  class: "di-binding-component"
}, la = {
  key: 2,
  class: "di-master-inline"
}, sa = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, oa = {
  key: 0,
  class: "di-master-inline-section"
}, na = {
  key: 0,
  class: "di-master-entries-table"
}, ia = ["onUpdate:modelValue"], aa = ["onUpdate:modelValue"], da = ["onUpdate:modelValue"], ua = ["onClick"], ra = { class: "di-condition-toggle" }, ca = {
  key: 0,
  class: "di-condition-badge"
}, va = { class: "di-form-group di-suggest-wrapper" }, pa = { class: "di-calc-tags-input" }, ma = ["onClick"], ha = ["placeholder"], ya = { class: "di-form-group" }, fa = { class: "di-form-group" }, ba = { class: "di-form-group" }, ga = { class: "di-form-group" }, ka = { class: "di-editor-footer" }, xa = { class: "di-editor-actions" }, wa = /* @__PURE__ */ at({
  __name: "DevElementEditor",
  setup(q) {
    const s = dt(), M = f("datasource"), B = f(""), R = f(""), Y = f(""), ie = f(""), oe = f(""), ae = f(!1), $ = f([]), re = f(""), ee = f(""), ge = f(""), ye = f(""), de = f(!1), x = f([]), ne = K(() => {
      if (U.value.length > 0) {
        const p = U.value[0];
        if (p.table && p.column) return `${p.table}.${p.column}`;
      }
      return "";
    }), Ee = K(() => ne.value && s.getMasterDefinition(ne.value) || null), D = f("db_direct"), U = f([]), y = f(""), r = f(""), _ = f(""), G = f(""), V = f(""), z = f([]), O = f(""), Q = f(!1), ue = f(""), ce = f(""), fe = f(""), A = f(""), h = f(""), g = f(!1), J = f(""), C = f([]), ve = f(""), Le = f(!1), ke = f(""), xe = f(""), Te = f(""), _e = f(""), Se = f(""), Ce = f(!1), W = f(""), se = f(""), te = f(""), De = f(!1), Ve = K(() => s.editingElementId !== null), Ue = K(() => s.editingElementId), Qe = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: Ze, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: ft, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Mt, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: al, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: tl, color: "#94a3b8", description: "自由メモ" }
    ];
    it(Ue, (p) => {
      if (p) {
        const t = s.getElementConfig(p);
        try {
          const i = document.querySelector(p);
          if (i) {
            t != null && t.elementType ? M.value = t.elementType : M.value = s.detectElementType(i);
            const b = i.querySelector("[data-di-binding]") || (i.hasAttribute("data-di-binding") ? i : null) || i.closest("[data-di-binding]");
            if (b) {
              const I = b.getAttribute("data-di-binding"), F = b.getAttribute("data-di-db"), he = b.getAttribute("data-di-db-type"), tt = b.getAttribute("data-di-db-comment");
              if (I && (te.value = I, se.value = "api", De.value = !1), F) {
                const [$t, _t] = F.split(".");
                $t && _t && (U.value.push({
                  table: $t,
                  column: _t,
                  type: he || void 0,
                  description: tt || void 0
                }), D.value || (D.value = "db_direct"));
              }
            }
          }
        } catch (i) {
          console.warn("[DevInspector] Failed to read element:", i);
        }
        t != null && t.fieldInfoList && t.fieldInfoList.length > 0 ? U.value = t.fieldInfoList.map((i) => ({ ...i })) : t != null && t.fieldInfo && (U.value = [{ ...t.fieldInfo }]), y.value = "", r.value = "", _.value = "", G.value = "", t != null && t.note && (W.value = t.note.text || W.value, D.value = t.note.displayType || D.value, V.value = t.note.formatDescription || "", ue.value = t.note.sampleValue || "", ce.value = t.note.decimalHandling || "", fe.value = t.note.unit || "", A.value = t.note.nullDisplay || "", h.value = t.note.displayFormat || "", et(t.note.calcDescription || "", t.note.calcSources || []), g.value = t.note.storedCalc || !1, J.value = t.note.storedCalcLogic || "", C.value = t.note.storedCalcSources ? [...t.note.storedCalcSources] : [], ke.value = t.note.storedCalcTiming || "", xe.value = t.note.condition || "", Te.value = t.note.conditionColumn || "", _e.value = t.note.hiddenBehavior || "", Se.value = t.note.hiddenNote || "", Ce.value = !!(t.note.condition || t.note.conditionColumn)), t != null && t.sourceBinding && (se.value = t.sourceBinding.type || se.value, te.value = t.sourceBinding.source || te.value, De.value = t.sourceBinding.isStatic || !1), t != null && t.actionInfo && (B.value = t.actionInfo.type || "", R.value = t.actionInfo.target || "", Y.value = t.actionInfo.method || "", ie.value = t.actionInfo.description || ""), t != null && t.formInfo && (oe.value = t.formInfo.inputType || "", ae.value = t.formInfo.required || !1, $.value = t.formInfo.validation ? [...t.formInfo.validation] : [], ee.value = t.formInfo.placeholder || "", ge.value = t.formInfo.defaultValue || "", ye.value = t.formInfo.description || "");
      } else
        ze();
    });
    function ze() {
      M.value = "datasource", D.value = "db_direct", U.value = [], y.value = "", r.value = "", _.value = "", G.value = "", V.value = "", ue.value = "", ce.value = "", fe.value = "", A.value = "", h.value = "", z.value = [], O.value = "", g.value = !1, J.value = "", C.value = [], ve.value = "", ke.value = "", xe.value = "", Te.value = "", _e.value = "", Se.value = "", Ce.value = !1, W.value = "", se.value = "", te.value = "", De.value = !1, B.value = "", R.value = "", Y.value = "", ie.value = "", oe.value = "", ae.value = !1, $.value = [], re.value = "", ee.value = "", ge.value = "", ye.value = "", de.value = !1, x.value = [];
    }
    function Pe() {
      s.stopEditing(), ze();
    }
    function m() {
      if (Ue.value)
        try {
          const p = document.querySelector(Ue.value);
          if (!p) return;
          const t = s.autoDetectElementInfo(p, Ue.value);
          t.sourceBinding && (se.value = t.sourceBinding.type || "", te.value = t.sourceBinding.source || "", De.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !D.value && (D.value = "static", W.value = W.value || "固定文言")), t.fieldInfo && (U.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), D.value || (D.value = "db_direct")), t.note && !W.value && (W.value = t.note.text || "");
        } catch (p) {
          console.error("[DevInspector] Auto-detect failed:", p);
        }
    }
    function l() {
      if (!Ue.value) return;
      const p = [...U.value];
      (D.value === "db_direct" || D.value === "db_formatted") && y.value && r.value && p.push({
        table: y.value,
        column: r.value,
        type: _.value || void 0,
        description: G.value || void 0
      });
      const t = p.length > 0 ? p : void 0, i = p.length > 0 ? p[0] : void 0, b = D.value === "db_direct" || D.value === "db_formatted", I = D.value || W.value ? {
        text: W.value || "",
        displayType: D.value,
        formatDescription: D.value === "db_formatted" && V.value || void 0,
        calcDescription: D.value === "calculated" && mt() || void 0,
        calcSources: D.value === "calculated" && Re().length > 0 ? Re() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: b && g.value ? !0 : void 0,
        storedCalcLogic: b && g.value && J.value || void 0,
        storedCalcSources: b && g.value && C.value.length > 0 ? C.value : void 0,
        storedCalcTiming: b && g.value && ke.value || void 0,
        sampleValue: ue.value || void 0,
        decimalHandling: ce.value || void 0,
        unit: fe.value || void 0,
        nullDisplay: A.value || void 0,
        displayFormat: h.value || void 0,
        condition: xe.value || void 0,
        conditionColumn: Te.value || void 0,
        hiddenBehavior: _e.value || void 0,
        hiddenNote: Se.value || void 0
      } : void 0, F = se.value ? {
        type: se.value,
        source: te.value || void 0,
        isStatic: De.value
      } : void 0, he = M.value === "action" && B.value ? {
        type: B.value,
        target: R.value || void 0,
        method: Y.value ? Y.value : void 0,
        description: ie.value || void 0
      } : void 0, tt = M.value === "form" ? {
        inputType: oe.value || void 0,
        required: ae.value || void 0,
        validation: $.value.length > 0 ? $.value : void 0,
        placeholder: ee.value || void 0,
        defaultValue: ge.value || void 0,
        description: ye.value || void 0
      } : void 0;
      s.setElementConfig(Ue.value, {
        elementType: M.value,
        fieldInfo: i,
        fieldInfoList: t,
        actionInfo: he,
        formInfo: tt,
        note: I,
        sourceBinding: F
      }), de.value && ne.value && Be(), Pe();
    }
    function d() {
      Ue.value && (s.deleteElementConfig(Ue.value), Pe());
    }
    const L = [
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
    ], P = f(""), le = f(!1), we = K(() => s.searchSchemaColumns(P.value).slice(0, 30));
    function Oe(p) {
      U.value.push({
        table: p.table,
        column: p.column,
        type: p.type || void 0,
        description: p.comment || void 0
      }), le.value = !1, P.value = "";
    }
    function Ge() {
      !y.value || !r.value || (U.value.push({
        table: y.value,
        column: r.value,
        type: _.value || void 0,
        description: G.value || void 0
      }), y.value = "", r.value = "", _.value = "", G.value = "");
    }
    function He(p) {
      U.value.splice(p, 1);
    }
    const Fe = K(() => s.getSchemaColumns().length > 0), Ae = f(!1), Ye = f(!1), lt = K(() => {
      var b;
      const p = /* @__PURE__ */ new Set();
      for (const I of Object.values(s.elementConfigs))
        if (I.fieldInfoList)
          for (const F of I.fieldInfoList)
            F.table && p.add(F.table);
        else (b = I.fieldInfo) != null && b.table && p.add(I.fieldInfo.table);
      for (const I of s.getSchemaColumns())
        p.add(I.table);
      const t = [...p].sort();
      if (!y.value) return t;
      const i = y.value.toLowerCase();
      return t.filter((I) => I.toLowerCase().includes(i));
    }), st = K(() => {
      var b;
      const p = /* @__PURE__ */ new Set();
      for (const I of Object.values(s.elementConfigs))
        if (I.fieldInfoList)
          for (const F of I.fieldInfoList)
            F.column && (!y.value || F.table === y.value) && p.add(F.column);
        else (b = I.fieldInfo) != null && b.column && (!y.value || I.fieldInfo.table === y.value) && p.add(I.fieldInfo.column);
      for (const I of s.getSchemaColumns())
        (!y.value || I.table === y.value) && p.add(I.column);
      const t = [...p].sort();
      if (!r.value) return t;
      const i = r.value.toLowerCase();
      return t.filter((I) => I.toLowerCase().includes(i));
    });
    function ut() {
      setTimeout(() => {
        Ae.value = !1;
      }, 150);
    }
    function rt() {
      setTimeout(() => {
        Ye.value = !1;
      }, 150);
    }
    function We(p) {
      if (y.value = p, Ae.value = !1, r.value) {
        const t = s.getSchemaColumns().find((i) => i.table === p && i.column === r.value);
        t && (_.value = t.type || "", G.value = t.comment || "");
      }
    }
    function ct(p) {
      if (r.value = p, Ye.value = !1, y.value) {
        const t = s.getSchemaColumns().find((i) => i.table === y.value && i.column === p);
        t && (_.value = t.type || "", G.value = t.comment || "");
      }
    }
    const Ke = K(() => {
      var b, I;
      const p = /* @__PURE__ */ new Set();
      for (const F of Object.values(s.elementConfigs))
        if (F.fieldInfoList)
          for (const he of F.fieldInfoList)
            he.table && he.column && p.add(`${he.table}.${he.column}`);
        else (b = F.fieldInfo) != null && b.table && ((I = F.fieldInfo) != null && I.column) && p.add(`${F.fieldInfo.table}.${F.fieldInfo.column}`);
      for (const F of s.getSchemaColumns())
        p.add(F.fullName);
      const t = [...p].sort();
      if (!O.value) return t;
      const i = O.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(i)) {
        const F = t.filter((he) => he.toLowerCase().includes(i));
        if (F.length > 0) return F;
      }
      return t;
    });
    function a(p) {
      O.value.trim() && z.value.push({ type: "text", value: O.value }), z.value.push({ type: "tag", value: p }), O.value = "";
    }
    function vt(p) {
      z.value.splice(p, 1);
    }
    function pt(p) {
      if (p.key === "Backspace" && !O.value && z.value.length > 0) {
        const t = z.value.pop();
        t.type === "text" && (O.value = t.value);
      }
    }
    function Z() {
      setTimeout(() => {
        Q.value = !1;
      }, 150);
    }
    const pe = K(() => {
      var b, I;
      const p = /* @__PURE__ */ new Set();
      for (const F of s.getSchemaColumns())
        p.add(F.fullName);
      for (const F of Object.values(s.elementConfigs))
        if (F.fieldInfoList)
          for (const he of F.fieldInfoList)
            he.table && he.column && p.add(`${he.table}.${he.column}`);
        else (b = F.fieldInfo) != null && b.table && ((I = F.fieldInfo) != null && I.column) && p.add(`${F.fieldInfo.table}.${F.fieldInfo.column}`);
      const t = [...p].sort();
      if (!ve.value) return t;
      const i = ve.value.trim().toLowerCase();
      return t.filter((F) => F.toLowerCase().includes(i));
    });
    function Xe() {
      setTimeout(() => {
        Le.value = !1;
      }, 150);
    }
    function je() {
      const p = ve.value.trim();
      p && !C.value.includes(p) && C.value.push(p), ve.value = "";
    }
    function ot(p) {
      C.value.includes(p) || C.value.push(p), ve.value = "";
    }
    function mt() {
      const p = z.value.map((t) => t.value);
      return O.value.trim() && p.push(O.value.trim()), p.join(" ").replace(/\s+/g, " ").trim();
    }
    function Re() {
      return z.value.filter((p) => p.type === "tag").map((p) => p.value);
    }
    function et(p, t) {
      if (!p && t.length === 0) {
        z.value = [], O.value = "";
        return;
      }
      if (t.length === 0) {
        z.value = [], O.value = p;
        return;
      }
      const i = [];
      let b = p;
      for (const F of t) {
        const he = b.indexOf(F);
        if (he >= 0) {
          const tt = b.substring(0, he).trim();
          tt && i.push({ type: "text", value: tt }), i.push({ type: "tag", value: F }), b = b.substring(he + F.length);
        }
      }
      const I = b.trim();
      I && i.push({ type: "text", value: I }), i.length === 0 ? O.value = p : (z.value = i, O.value = "");
    }
    function gt() {
      const p = re.value.trim();
      p && !$.value.includes(p) && $.value.push(p), re.value = "";
    }
    function kt(p) {
      $.value.splice(p, 1);
    }
    function xt(p) {
      p.key === "Backspace" && !re.value && $.value.length > 0 && $.value.pop();
    }
    it(ne, (p) => {
      if (p) {
        const t = s.getMasterDefinition(p);
        t ? (x.value = t.entries.map((i) => ({ ...i })), de.value = !0) : (x.value = [], de.value = !1);
      } else
        x.value = [], de.value = !1;
    });
    function T() {
      de.value = !de.value, de.value && x.value.length === 0 && x.value.push({ value: "", label: "" });
    }
    function me() {
      x.value.push({ value: "", label: "" });
    }
    function Ie(p) {
      x.value.splice(p, 1);
    }
    function Be() {
      var I;
      if (!ne.value) return;
      const [p, t] = ne.value.split(".");
      if (!p || !t) return;
      const i = x.value.filter((F) => F.value || F.label);
      if (i.length === 0) {
        s.deleteMasterDefinition(ne.value);
        return;
      }
      const b = s.getMasterDefinition(ne.value);
      s.setMasterDefinition({
        id: ne.value,
        table: p,
        column: t,
        name: (b == null ? void 0 : b.name) || t,
        columnType: (b == null ? void 0 : b.columnType) || ((I = U.value[0]) == null ? void 0 : I.type),
        description: b == null ? void 0 : b.description,
        entries: i,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (p, t) => (o(), $e(qe, { to: "body" }, [
      Ve.value ? (o(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(Pe, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", nn, [
          e("div", an, [
            t[52] || (t[52] = e("h3", null, "要素情報を編集", -1)),
            e("div", dn, [
              e("button", {
                onClick: m,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                k(u(ft), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Pe,
                class: "di-editor-close"
              }, [
                k(u(Je), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          De.value ? (o(), n("div", un, [...t[53] || (t[53] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : se.value ? (o(), n("div", rn, [
            e("span", {
              class: X(["di-binding-badge", "di-binding-" + se.value])
            }, v(se.value), 3),
            te.value ? (o(), n("span", cn, v(te.value), 1)) : c("", !0)
          ])) : c("", !0),
          e("div", vn, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => M.value = "datasource"),
              class: X(["di-editor-tab", { "di-editor-tab-active": M.value === "datasource" }])
            }, [
              k(u(Ze), { style: { width: "14px", height: "14px" } }),
              t[54] || (t[54] = N(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[1] || (t[1] = (i) => M.value = "action"),
              class: X(["di-editor-tab", { "di-editor-tab-active": M.value === "action" }])
            }, [
              k(u(ul), { style: { width: "14px", height: "14px" } }),
              t[55] || (t[55] = N(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[2] || (t[2] = (i) => M.value = "form"),
              class: X(["di-editor-tab", { "di-editor-tab-active": M.value === "form" }])
            }, [
              k(u(Jt), { style: { width: "14px", height: "14px" } }),
              t[56] || (t[56] = N(" フォーム ", -1))
            ], 2)
          ]),
          e("div", pn, [
            M.value === "datasource" ? (o(), n(S, { key: 0 }, [
              e("div", mn, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", hn, [
                  (o(), n(S, null, j(Qe, (i) => e("button", {
                    key: i.value,
                    onClick: (b) => D.value = i.value,
                    class: X(["di-display-type-card", { "di-display-type-active": D.value === i.value }]),
                    style: Me(D.value === i.value ? { borderColor: i.color, background: i.color + "18" } : {})
                  }, [
                    (o(), $e(Ft(i.icon), {
                      style: Me([{ width: "20px", height: "20px" }, { color: D.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: Me({ color: D.value === i.value ? i.color : "#94a3b8" })
                    }, v(i.label), 5),
                    e("span", fn, v(i.description), 1)
                  ], 14, yn)), 64))
                ])
              ]),
              D.value === "db_direct" || D.value === "db_formatted" ? (o(), n(S, { key: 0 }, [
                U.value.length > 0 ? (o(), n("div", bn, [
                  t[58] || (t[58] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", gn, [
                    (o(!0), n(S, null, j(U.value, (i, b) => (o(), n("div", {
                      key: b,
                      class: "di-field-tag"
                    }, [
                      e("span", kn, v(i.table) + "." + v(i.column), 1),
                      i.type ? (o(), n("span", xn, v(i.type), 1)) : c("", !0),
                      e("button", {
                        onClick: (I) => He(b),
                        class: "di-field-tag-remove"
                      }, "×", 8, wn)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                Fe.value ? (o(), n("div", $n, [
                  e("div", _n, [
                    e("label", Cn, [
                      k(u(Ze), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[59] || (t[59] = N(" schema.rb から選択 ", -1))
                    ]),
                    e("div", In, [
                      w(e("input", {
                        "onUpdate:modelValue": t[3] || (t[3] = (i) => P.value = i),
                        onFocus: t[4] || (t[4] = (i) => le.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [E, P.value]
                      ]),
                      P.value ? (o(), n("button", {
                        key: 0,
                        onClick: t[5] || (t[5] = (i) => {
                          P.value = "", le.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        k(u(Je), { style: { width: "14px", height: "14px" } })
                      ])) : c("", !0)
                    ]),
                    le.value && we.value.length > 0 ? (o(), n("div", Mn, [
                      (o(!0), n(S, null, j(we.value, (i) => (o(), n("button", {
                        key: i.fullName,
                        onClick: (b) => Oe(i),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", Sn, [
                          e("span", Dn, v(i.fullName), 1),
                          e("span", En, v(i.type), 1)
                        ]),
                        i.comment ? (o(), n("span", Un, v(i.comment), 1)) : c("", !0)
                      ], 8, Tn))), 128))
                    ])) : le.value && P.value && we.value.length === 0 ? (o(), n("div", Ln, " 該当するカラムが見つかりません ")) : c("", !0)
                  ])
                ])) : c("", !0),
                Fe.value ? (o(), n("div", Vn, [...t[60] || (t[60] = [
                  e("span", null, "または手動入力", -1)
                ])])) : c("", !0),
                e("div", Pn, [
                  e("div", An, [
                    t[61] || (t[61] = e("label", { class: "di-form-label" }, "テーブル名 *", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[6] || (t[6] = (i) => y.value = i),
                      onFocus: t[7] || (t[7] = (i) => Ae.value = !0),
                      onBlur: t[8] || (t[8] = (i) => ut()),
                      type: "text",
                      placeholder: "users",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [E, y.value]
                    ]),
                    Ae.value && lt.value.length > 0 ? (o(), n("div", Bn, [
                      (o(!0), n(S, null, j(lt.value.slice(0, 10), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => We(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(i), 41, Fn))), 128))
                    ])) : c("", !0)
                  ]),
                  e("div", jn, [
                    t[62] || (t[62] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (i) => r.value = i),
                      onFocus: t[10] || (t[10] = (i) => Ye.value = !0),
                      onBlur: t[11] || (t[11] = (i) => rt()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [E, r.value]
                    ]),
                    Ye.value && st.value.length > 0 ? (o(), n("div", Nn, [
                      (o(!0), n(S, null, j(st.value.slice(0, 10), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => ct(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(i), 41, qn))), 128))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", On, [
                  t[64] || (t[64] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  w(e("select", {
                    "onUpdate:modelValue": t[12] || (t[12] = (i) => _.value = i),
                    class: "di-select"
                  }, [
                    t[63] || (t[63] = e("option", { value: "" }, "選択してください", -1)),
                    (o(), n(S, null, j(L, (i) => e("option", {
                      key: i,
                      value: i
                    }, v(i), 9, Hn)), 64))
                  ], 512), [
                    [Ne, _.value]
                  ])
                ]),
                e("button", {
                  onClick: Ge,
                  class: "di-btn-add-field",
                  disabled: !y.value || !r.value
                }, " + カラムを追加 ", 8, Rn),
                ne.value ? (o(), n("div", zn, [
                  e("button", {
                    onClick: T,
                    class: X(["di-btn-condition-toggle", { "di-condition-active": de.value }])
                  }, [
                    k(u(Dt), { style: { width: "14px", height: "14px" } }),
                    t[65] || (t[65] = N(" マスタ値を定義 ", -1)),
                    Ee.value ? (o(), n("span", Gn, v(Ee.value.entries.length) + "件", 1)) : c("", !0)
                  ], 2),
                  de.value ? (o(), n("div", Yn, [
                    x.value.length > 0 ? (o(), n("div", Kn, [
                      t[66] || (t[66] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (o(!0), n(S, null, j(x.value, (i, b) => (o(), n("div", {
                        key: b,
                        class: "di-master-entry-row"
                      }, [
                        w(e("input", {
                          "onUpdate:modelValue": (I) => i.value = I,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, Xn), [
                          [E, i.value]
                        ]),
                        w(e("input", {
                          "onUpdate:modelValue": (I) => i.label = I,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, Zn), [
                          [E, i.label]
                        ]),
                        w(e("input", {
                          "onUpdate:modelValue": (I) => i.color = I,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, Jn), [
                          [E, i.color]
                        ]),
                        e("button", {
                          onClick: (I) => Ie(b),
                          class: "di-master-entry-remove"
                        }, "×", 8, Qn)
                      ]))), 128))
                    ])) : c("", !0),
                    e("button", {
                      onClick: me,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : c("", !0)
                ])) : c("", !0),
                D.value === "db_formatted" ? (o(), n("div", Wn, [
                  t[67] || (t[67] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  w(e("textarea", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => V.value = i),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [E, V.value]
                  ])
                ])) : c("", !0),
                e("div", ei, [
                  e("button", {
                    onClick: t[14] || (t[14] = (i) => g.value = !g.value),
                    class: X(["di-btn-condition-toggle", { "di-condition-active": g.value }])
                  }, [
                    k(u(Mt), { style: { width: "14px", height: "14px" } }),
                    t[68] || (t[68] = N(" このカラムは計算値を保存している ", -1)),
                    g.value ? (o(), n("span", ti, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                g.value ? (o(), n("div", li, [
                  e("div", si, [
                    t[69] || (t[69] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    w(e("textarea", {
                      "onUpdate:modelValue": t[15] || (t[15] = (i) => J.value = i),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [E, J.value]
                    ])
                  ]),
                  e("div", oi, [
                    t[70] || (t[70] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", ni, [
                      (o(!0), n(S, null, j(C.value, (i, b) => (o(), n("span", {
                        key: b,
                        class: "di-calc-tag"
                      }, [
                        N(v(i) + " ", 1),
                        e("button", {
                          onClick: be((I) => C.value.splice(b, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, ii)
                      ]))), 128)),
                      w(e("input", {
                        "onUpdate:modelValue": t[16] || (t[16] = (i) => ve.value = i),
                        onFocus: t[17] || (t[17] = (i) => Le.value = !0),
                        onBlur: Xe,
                        onKeydown: t[18] || (t[18] = It(be((i) => je(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [E, ve.value]
                      ])
                    ]),
                    Le.value && pe.value.length > 0 ? (o(), n("div", ai, [
                      (o(!0), n(S, null, j(pe.value.slice(0, 12), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => ot(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        k(u(Ze), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        N(" " + v(i), 1)
                      ], 40, di))), 128))
                    ])) : c("", !0),
                    t[71] || (t[71] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", ui, [
                    t[73] || (t[73] = e("label", { class: "di-form-label" }, "計算タイミング", -1)),
                    w(e("select", {
                      "onUpdate:modelValue": t[19] || (t[19] = (i) => ke.value = i),
                      class: "di-select"
                    }, [...t[72] || (t[72] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "on_save" }, "保存時（アプリ側で計算）", -1),
                      e("option", { value: "trigger" }, "DBトリガー", -1),
                      e("option", { value: "batch" }, "バッチ（定期実行）", -1),
                      e("option", { value: "realtime" }, "リアルタイム（ビュー/マテビュー）", -1)
                    ])], 512), [
                      [Ne, ke.value]
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : c("", !0),
              D.value === "calculated" ? (o(), n("div", ri, [
                t[74] || (t[74] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[23] || (t[23] = (i) => {
                    var b;
                    return (b = p.$refs.calcInputEl) == null ? void 0 : b.focus();
                  })
                }, [
                  (o(!0), n(S, null, j(z.value, (i, b) => (o(), n(S, { key: b }, [
                    i.type === "tag" ? (o(), n("span", ci, [
                      N(v(i.value) + " ", 1),
                      e("button", {
                        onClick: be((I) => vt(b), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, vi)
                    ])) : (o(), n("span", pi, v(i.value), 1))
                  ], 64))), 128)),
                  w(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[20] || (t[20] = (i) => O.value = i),
                    onFocus: t[21] || (t[21] = (i) => Q.value = !0),
                    onBlur: t[22] || (t[22] = (i) => Z()),
                    onKeydown: pt,
                    type: "text",
                    placeholder: z.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, mi), [
                    [E, O.value]
                  ])
                ]),
                Q.value && Ke.value.length > 0 ? (o(), n("div", hi, [
                  (o(!0), n(S, null, j(Ke.value.slice(0, 12), (i) => (o(), n("button", {
                    key: i,
                    onMousedown: be((b) => a(i), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    k(u(Ze), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    N(" " + v(i), 1)
                  ], 40, yi))), 128))
                ])) : c("", !0),
                t[75] || (t[75] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : c("", !0),
              D.value === "static" || D.value === "other" ? (o(), n("div", fi, [
                t[76] || (t[76] = e("label", { class: "di-form-label" }, "メモ", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => W.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, W.value]
                ])
              ])) : c("", !0),
              D.value && D.value !== "other" ? (o(), n(S, { key: 3 }, [
                e("div", bi, [
                  e("button", {
                    onClick: t[25] || (t[25] = (i) => Ce.value = !Ce.value),
                    class: X(["di-btn-condition-toggle", { "di-condition-active": Ce.value || xe.value }])
                  }, [
                    k(u(Pt), { style: { width: "14px", height: "14px" } }),
                    t[77] || (t[77] = N(" 条件付き表示 ", -1)),
                    xe.value ? (o(), n("span", gi, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                Ce.value ? (o(), n("div", ki, [
                  e("div", xi, [
                    t[78] || (t[78] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[26] || (t[26] = (i) => xe.value = i),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [E, xe.value]
                    ])
                  ]),
                  e("div", wi, [
                    t[79] || (t[79] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[27] || (t[27] = (i) => Te.value = i),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [E, Te.value]
                    ])
                  ]),
                  e("div", $i, [
                    e("div", _i, [
                      t[81] || (t[81] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      w(e("select", {
                        "onUpdate:modelValue": t[28] || (t[28] = (i) => _e.value = i),
                        class: "di-select"
                      }, [...t[80] || (t[80] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [Ne, _e.value]
                      ])
                    ])
                  ]),
                  _e.value === "different_value" ? (o(), n("div", Ci, [
                    t[82] || (t[82] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (i) => Se.value = i),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [E, Se.value]
                    ])
                  ])) : c("", !0)
                ])) : c("", !0)
              ], 64)) : c("", !0),
              D.value === "db_direct" || D.value === "db_formatted" || D.value === "calculated" ? (o(), n(S, { key: 4 }, [
                t[90] || (t[90] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Ii, [
                  e("div", Mi, [
                    t[83] || (t[83] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (i) => ue.value = i),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [E, ue.value]
                    ])
                  ]),
                  e("div", Ti, [
                    t[84] || (t[84] = e("label", { class: "di-form-label" }, "単位", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (i) => fe.value = i),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [E, fe.value]
                    ])
                  ])
                ]),
                e("div", Si, [
                  e("div", Di, [
                    t[86] || (t[86] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    w(e("select", {
                      "onUpdate:modelValue": t[32] || (t[32] = (i) => ce.value = i),
                      class: "di-select"
                    }, [...t[85] || (t[85] = [
                      e("option", { value: "" }, "未指定", -1),
                      e("option", { value: "round" }, "四捨五入", -1),
                      e("option", { value: "floor" }, "切り捨て", -1),
                      e("option", { value: "ceil" }, "切り上げ", -1),
                      e("option", { value: "decimal_1" }, "小数第1位まで", -1),
                      e("option", { value: "decimal_2" }, "小数第2位まで", -1),
                      e("option", { value: "integer" }, "整数のみ", -1)
                    ])], 512), [
                      [Ne, ce.value]
                    ])
                  ]),
                  e("div", Ei, [
                    t[87] || (t[87] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (i) => A.value = i),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [E, A.value]
                    ])
                  ])
                ]),
                e("div", Ui, [
                  t[88] || (t[88] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": t[34] || (t[34] = (i) => h.value = i),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [E, h.value]
                  ])
                ]),
                e("div", Li, [
                  t[89] || (t[89] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  w(e("textarea", {
                    "onUpdate:modelValue": t[35] || (t[35] = (i) => W.value = i),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [E, W.value]
                  ])
                ])
              ], 64)) : c("", !0)
            ], 64)) : c("", !0),
            M.value === "action" ? (o(), n(S, { key: 1 }, [
              e("div", Vi, [
                t[92] || (t[92] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[36] || (t[36] = (i) => B.value = i),
                  class: "di-select"
                }, [...t[91] || (t[91] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1)
                ])], 512), [
                  [Ne, B.value]
                ])
              ]),
              e("div", Pi, [
                t[93] || (t[93] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[37] || (t[37] = (i) => R.value = i),
                  type: "text",
                  placeholder: B.value === "navigate" ? "/tasks" : B.value === "api" ? "/api/users" : B.value === "modal" ? "confirm-dialog" : "",
                  class: "di-input di-input-mono"
                }, null, 8, Ai), [
                  [E, R.value]
                ])
              ]),
              B.value === "api" ? (o(), n("div", Bi, [
                t[95] || (t[95] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[38] || (t[38] = (i) => Y.value = i),
                  class: "di-select"
                }, [...t[94] || (t[94] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [Ne, Y.value]
                ])
              ])) : c("", !0),
              e("div", Fi, [
                t[96] || (t[96] = e("label", { class: "di-form-label" }, "説明", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[39] || (t[39] = (i) => ie.value = i),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, ie.value]
                ])
              ]),
              e("div", ji, [
                t[97] || (t[97] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[40] || (t[40] = (i) => W.value = i),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, W.value]
                ])
              ])
            ], 64)) : c("", !0),
            M.value === "form" ? (o(), n(S, { key: 2 }, [
              e("div", Ni, [
                t[99] || (t[99] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[41] || (t[41] = (i) => oe.value = i),
                  class: "di-select"
                }, [...t[98] || (t[98] = [
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
                  [Ne, oe.value]
                ])
              ]),
              U.value.length > 0 ? (o(), n("div", qi, [
                t[100] || (t[100] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", Oi, [
                  (o(!0), n(S, null, j(U.value, (i, b) => (o(), n("div", {
                    key: b,
                    class: "di-field-tag"
                  }, [
                    e("span", Hi, v(i.table) + "." + v(i.column), 1),
                    i.type ? (o(), n("span", Ri, v(i.type), 1)) : c("", !0),
                    e("button", {
                      onClick: (I) => He(b),
                      class: "di-field-tag-remove"
                    }, "×", 8, zi)
                  ]))), 128))
                ])
              ])) : c("", !0),
              Fe.value ? (o(), n("div", Gi, [
                e("div", Yi, [
                  e("label", Ki, [
                    k(u(Ze), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[101] || (t[101] = N(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Xi, [
                    w(e("input", {
                      "onUpdate:modelValue": t[42] || (t[42] = (i) => P.value = i),
                      onFocus: t[43] || (t[43] = (i) => le.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [E, P.value]
                    ]),
                    P.value ? (o(), n("button", {
                      key: 0,
                      onClick: t[44] || (t[44] = (i) => {
                        P.value = "", le.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      k(u(Je), { style: { width: "14px", height: "14px" } })
                    ])) : c("", !0)
                  ]),
                  le.value && we.value.length > 0 ? (o(), n("div", Zi, [
                    (o(!0), n(S, null, j(we.value, (i) => (o(), n("button", {
                      key: i.fullName,
                      onClick: (b) => Oe(i),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", Qi, [
                        e("span", Wi, v(i.fullName), 1),
                        e("span", ea, v(i.type), 1)
                      ]),
                      i.comment ? (o(), n("span", ta, v(i.comment), 1)) : c("", !0)
                    ], 8, Ji))), 128))
                  ])) : c("", !0)
                ])
              ])) : c("", !0),
              ne.value && (oe.value === "select" || oe.value === "radio" || oe.value === "checkbox") ? (o(), n("div", la, [
                e("button", {
                  onClick: T,
                  class: X(["di-btn-condition-toggle", { "di-condition-active": de.value }])
                }, [
                  k(u(Dt), { style: { width: "14px", height: "14px" } }),
                  t[102] || (t[102] = N(" 選択肢を定義 ", -1)),
                  Ee.value ? (o(), n("span", sa, v(Ee.value.entries.length) + "件", 1)) : c("", !0)
                ], 2),
                de.value ? (o(), n("div", oa, [
                  x.value.length > 0 ? (o(), n("div", na, [
                    t[103] || (t[103] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (o(!0), n(S, null, j(x.value, (i, b) => (o(), n("div", {
                      key: b,
                      class: "di-master-entry-row"
                    }, [
                      w(e("input", {
                        "onUpdate:modelValue": (I) => i.value = I,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, ia), [
                        [E, i.value]
                      ]),
                      w(e("input", {
                        "onUpdate:modelValue": (I) => i.label = I,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, aa), [
                        [E, i.label]
                      ]),
                      w(e("input", {
                        "onUpdate:modelValue": (I) => i.color = I,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, da), [
                        [E, i.color]
                      ]),
                      e("button", {
                        onClick: (I) => Ie(b),
                        class: "di-master-entry-remove"
                      }, "×", 8, ua)
                    ]))), 128))
                  ])) : c("", !0),
                  e("button", {
                    onClick: me,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : c("", !0)
              ])) : c("", !0),
              e("div", ra, [
                e("button", {
                  onClick: t[45] || (t[45] = (i) => ae.value = !ae.value),
                  class: X(["di-btn-condition-toggle", { "di-condition-active": ae.value }])
                }, [
                  k(u(Pt), { style: { width: "14px", height: "14px" } }),
                  t[104] || (t[104] = N(" 必須入力 ", -1)),
                  ae.value ? (o(), n("span", ca, "必須")) : c("", !0)
                ], 2)
              ]),
              e("div", va, [
                t[105] || (t[105] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", pa, [
                  (o(!0), n(S, null, j($.value, (i, b) => (o(), n("span", {
                    key: b,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    N(v(i) + " ", 1),
                    e("button", {
                      onClick: be((I) => kt(b), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, ma)
                  ]))), 128)),
                  w(e("input", {
                    "onUpdate:modelValue": t[46] || (t[46] = (i) => re.value = i),
                    onKeydown: [
                      t[47] || (t[47] = It(be((i) => gt(), ["prevent"]), ["enter"])),
                      xt
                    ],
                    type: "text",
                    placeholder: $.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, ha), [
                    [E, re.value]
                  ])
                ]),
                t[106] || (t[106] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", ya, [
                t[107] || (t[107] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[48] || (t[48] = (i) => ee.value = i),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [E, ee.value]
                ])
              ]),
              e("div", fa, [
                t[108] || (t[108] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[49] || (t[49] = (i) => ge.value = i),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [E, ge.value]
                ])
              ]),
              e("div", ba, [
                t[109] || (t[109] = e("label", { class: "di-form-label" }, "説明", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[50] || (t[50] = (i) => ye.value = i),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, ye.value]
                ])
              ]),
              e("div", ga, [
                t[110] || (t[110] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[51] || (t[51] = (i) => W.value = i),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [E, W.value]
                ])
              ])
            ], 64)) : c("", !0)
          ]),
          e("div", ka, [
            e("button", {
              onClick: d,
              class: "di-btn-delete"
            }, [
              k(u(nt), { style: { width: "14px", height: "14px" } }),
              t[111] || (t[111] = N(" 削除 ", -1))
            ]),
            e("div", xa, [
              e("button", {
                onClick: Pe,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: l,
                class: "di-btn-save"
              }, [
                k(u(Bt), { style: { width: "14px", height: "14px" } }),
                t[112] || (t[112] = N(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), $a = /* @__PURE__ */ bt(wa, [["__scopeId", "data-v-c36a51a1"]]), _a = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ca = { class: "di-highlight-label" }, Ia = ["onClick"], Ma = {
  key: 0,
  class: "di-note-label-row"
}, Ta = ["onClick"], Sa = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Da = ["onClick"], Ea = { class: "di-analysis-type" }, Ua = {
  key: 0,
  class: "di-analysis-tags"
}, La = {
  key: 1,
  class: "di-analysis-db"
}, Va = {
  key: 2,
  class: "di-analysis-api-source"
}, Pa = {
  key: 3,
  class: "di-analysis-conditional"
}, Aa = ["onClick"], Ba = {
  key: 0,
  class: "di-analysis-text"
}, Fa = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, ja = ["onClick"], Na = { class: "di-unannotated-label" }, qa = {
  key: 0,
  class: "di-unannotated-label-text"
}, Oa = /* @__PURE__ */ at({
  __name: "DevPickOverlay",
  setup(q) {
    const s = dt(), M = f(null), B = f(null), R = f(0), Y = f(0), ie = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, oe = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function ae(U) {
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
      }[U] || U;
    }
    function $(U) {
      var r, _;
      const y = s.getElementConfig(U);
      if (y != null && y.elementType && oe[y.elementType])
        return oe[y.elementType];
      if ((r = y == null ? void 0 : y.note) != null && r.displayType)
        return ie[y.note.displayType] || "#60a5fa";
      if (!(y != null && y.sourceBinding)) {
        const G = ((_ = y == null ? void 0 : y.note) == null ? void 0 : _.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[G] || "#60a5fa";
      }
      return y.sourceBinding.isStatic ? "#10b981" : y.sourceBinding.type === "v-model" ? "#8b5cf6" : y.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function re(U) {
      var z, O, Q, ue, ce;
      const y = s.noteHighlightFilter;
      if (y === "all") return !0;
      const r = s.getElementConfig(U);
      if (!r) return !1;
      const _ = (z = r.note) == null ? void 0 : z.displayType, G = !!((O = r.note) != null && O.condition || (Q = r.note) != null && Q.conditionColumn), V = !!((ue = r.note) != null && ue.storedCalc);
      switch (y) {
        case "db":
          return _ === "db_direct" || _ === "db_formatted";
        case "calculated":
          return _ === "calculated";
        case "storedCalc":
          return V;
        case "static":
          return _ === "static";
        case "conditional":
          return G;
        case "action":
          return r.elementType === "action";
        case "form":
          return r.elementType === "form";
        case "other":
          return _ === "other" || !_ && !r.elementType && !!((ce = r.note) != null && ce.text);
        default:
          return !0;
      }
    }
    const ee = K(() => {
      var G, V, z, O, Q, ue, ce, fe, A, h, g, J, C, ve, Le, ke, xe, Te, _e, Se, Ce, W, se, te, De, Ve, Ue, Qe, ze, Pe, m, l, d, L, P, le, we, Oe, Ge, He, Fe, Ae, Ye, lt, st, ut, rt;
      const U = R.value, y = Y.value, r = [];
      if (!s.isEnabled) return r;
      const _ = s.getConfiguredSelectors();
      for (const We of _)
        try {
          const ct = document.querySelector(We);
          if (ct) {
            const Ke = ct.getBoundingClientRect(), a = s.getElementConfig(We), vt = ((G = a == null ? void 0 : a.sourceBinding) == null ? void 0 : G.isStatic) || !1, pt = ((V = a == null ? void 0 : a.sourceBinding) == null ? void 0 : V.type) || "";
            let Z = "", pe = "";
            const Xe = (z = a == null ? void 0 : a.note) == null ? void 0 : z.displayType, je = [];
            if ((O = a == null ? void 0 : a.note) != null && O.sampleValue ? je.push(`例: ${a.note.sampleValue}${a.note.unit ? a.note.unit : ""}`) : (Q = a == null ? void 0 : a.note) != null && Q.unit && je.push(`単位: ${a.note.unit}`), (ue = a == null ? void 0 : a.note) != null && ue.decimalHandling) {
              const T = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              je.push(T[a.note.decimalHandling] || a.note.decimalHandling);
            }
            (ce = a == null ? void 0 : a.note) != null && ce.nullDisplay && je.push(`NULL時: ${a.note.nullDisplay}`), (fe = a == null ? void 0 : a.note) != null && fe.displayFormat && je.push(a.note.displayFormat);
            const ot = je.length > 0 ? `
${je.join(" / ")}` : "", mt = !!((A = a == null ? void 0 : a.note) != null && A.condition || (h = a == null ? void 0 : a.note) != null && h.conditionColumn);
            let Re = "";
            if (mt) {
              const T = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, me = [];
              (g = a == null ? void 0 : a.note) != null && g.condition && me.push(a.note.condition), (J = a == null ? void 0 : a.note) != null && J.conditionColumn && me.push(`判定: ${a.note.conditionColumn}`), (C = a == null ? void 0 : a.note) != null && C.hiddenBehavior && me.push(`不一致時: ${T[a.note.hiddenBehavior] || a.note.hiddenBehavior}`), (ve = a == null ? void 0 : a.note) != null && ve.hiddenNote && me.push(`→ ${a.note.hiddenNote}`), Re = `
条件: ${me.join(" / ")}`;
            }
            const et = mt ? " ⚡" : "";
            if ((a == null ? void 0 : a.elementType) === "action" && (a != null && a.actionInfo)) {
              const T = a.actionInfo;
              T.type === "navigate" ? Z = `遷移: ${T.target || "?"}` : T.type === "api" ? Z = `API: ${T.method || "GET"} ${T.target || "?"}` : T.type === "modal" ? Z = `モーダル: ${T.target || "?"}` : T.type === "emit" ? Z = `イベント: ${T.target || "?"}` : T.type === "function" ? Z = `関数: ${T.target || "?"}` : Z = "アクション", pe = (T.description || Z) + ((Le = a == null ? void 0 : a.note) != null && Le.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "form" && (a != null && a.formInfo)) {
              const T = a.formInfo, me = (ke = a == null ? void 0 : a.fieldInfoList) != null && ke.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [], Ie = me.length > 0 ? me.map((i) => `${i.table}.${i.column}`).join(", ") : "", Be = me.length > 0 ? `${me[0].table}.${me[0].column}` : "", p = Be ? s.getMasterDefinition(Be) : null;
              T.inputType === "select" ? Z = `選択: ${Ie || T.description || "?"}${p ? ` (${p.entries.length}件)` : ""}` : T.inputType === "textarea" ? Z = `テキスト: ${Ie || T.description || "?"}` : T.inputType === "checkbox" ? Z = `チェック: ${Ie || T.description || "?"}` : T.inputType === "radio" ? Z = `ラジオ: ${Ie || T.description || "?"}` : Z = `入力: ${Ie || T.description || T.inputType || "?"}`, T.required && (Z += " (必須)");
              const t = [];
              T.description && t.push(T.description), (xe = T.validation) != null && xe.length && t.push(`検証: ${T.validation.join(", ")}`), T.placeholder && t.push(`placeholder: ${T.placeholder}`), T.defaultValue && t.push(`初期値: ${T.defaultValue}`), pe = t.join(`
`) + ((Te = a == null ? void 0 : a.note) != null && Te.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "action")
              Z = "アクション", pe = ((_e = a == null ? void 0 : a.note) == null ? void 0 : _e.text) || "";
            else if ((a == null ? void 0 : a.elementType) === "form")
              Z = "フォーム", pe = ((Se = a == null ? void 0 : a.note) == null ? void 0 : Se.text) || "";
            else if (Xe === "db_direct") {
              const T = (Ce = a == null ? void 0 : a.fieldInfoList) != null && Ce.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (T.length > 0) {
                const me = T.map((t) => `${t.table}.${t.column}`).join(", "), Ie = `${T[0].table}.${T[0].column}`, Be = s.getMasterDefinition(Ie), p = Be ? ` (${Be.entries.length}値)` : "";
                Z = `DB: ${me}${p}${et}`, pe = T.map((t) => `${t.table}.${t.column}${t.type ? ` (${t.type})` : ""}`).join(`
`) + ot + Re + ((W = a == null ? void 0 : a.note) != null && W.text ? `
${a.note.text}` : "");
              }
            } else if (Xe === "db_formatted") {
              const T = (se = a == null ? void 0 : a.fieldInfoList) != null && se.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (T.length > 0) {
                const me = T.map((t) => `${t.table}.${t.column}`).join(", "), Ie = `${T[0].table}.${T[0].column}`, Be = s.getMasterDefinition(Ie), p = Be ? ` (${Be.entries.length}値)` : "";
                Z = `DB: ${me} (整形)${p}${et}`, pe = T.map((t) => `${t.table}.${t.column}`).join(`
`) + ((te = a == null ? void 0 : a.note) != null && te.formatDescription ? `
整形: ${a.note.formatDescription}` : "") + ot + Re + ((De = a == null ? void 0 : a.note) != null && De.text ? `
${a.note.text}` : "");
              }
            } else Xe === "calculated" ? (Z = "計算値" + ((Ve = a == null ? void 0 : a.note) != null && Ve.unit ? ` (${a.note.unit})` : "") + et, pe = (((Ue = a == null ? void 0 : a.note) == null ? void 0 : Ue.calcDescription) || "計算値") + ((ze = (Qe = a == null ? void 0 : a.note) == null ? void 0 : Qe.calcSources) != null && ze.length ? `
参照: ${a.note.calcSources.join(", ")}` : "") + ot + Re + ((Pe = a == null ? void 0 : a.note) != null && Pe.text ? `
${a.note.text}` : "")) : Xe === "static" ? (Z = "固定" + et, pe = (((m = a == null ? void 0 : a.note) == null ? void 0 : m.text) || "固定文言") + Re) : Xe === "other" ? (Z = "メモ", pe = ((l = a == null ? void 0 : a.note) == null ? void 0 : l.text) || "") : (d = a == null ? void 0 : a.fieldInfoList) != null && d.length || (L = a == null ? void 0 : a.fieldInfo) != null && L.table && ((P = a == null ? void 0 : a.fieldInfo) != null && P.column) ? (Z = `DB: ${((le = a == null ? void 0 : a.fieldInfoList) != null && le.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : []).map((Ie) => `${Ie.table}.${Ie.column}`).join(", ")}`, pe = ((we = a == null ? void 0 : a.note) == null ? void 0 : we.text) || "") : vt ? (Z = "固定", pe = ((Oe = a == null ? void 0 : a.note) == null ? void 0 : Oe.text) || "固定文言") : pt === "v-model" ? (Z = "フォーム", pe = ((Ge = a == null ? void 0 : a.note) == null ? void 0 : Ge.text) || "") : pt === "api" ? (Z = "データ", pe = ((He = a == null ? void 0 : a.note) == null ? void 0 : He.text) || "") : (Fe = a == null ? void 0 : a.note) != null && Fe.type ? (Z = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[a.note.type] || "メモ", pe = ((Ae = a == null ? void 0 : a.note) == null ? void 0 : Ae.text) || "") : (Z = "メモ", pe = ((Ye = a == null ? void 0 : a.note) == null ? void 0 : Ye.text) || "");
            const gt = pe || ((lt = a == null ? void 0 : a.note) == null ? void 0 : lt.text) || "", kt = ((st = a == null ? void 0 : a.note) == null ? void 0 : st.type) || "info", xt = !!((ut = a == null ? void 0 : a.note) != null && ut.text || (rt = a == null ? void 0 : a.note) != null && rt.displayType);
            r.push({
              selector: We,
              top: `${Ke.top + U}px`,
              left: `${Ke.left + y}px`,
              width: `${Ke.width}px`,
              height: `${Ke.height}px`,
              color: $(We),
              isStatic: vt,
              label: Z,
              noteText: gt,
              noteType: kt,
              hasNote: xt
            });
          }
        } catch {
        }
      return r;
    }), ge = K(() => {
      var _;
      const U = R.value, y = Y.value, r = [];
      if (!s.isEnabled || s.scanResults.length === 0) return r;
      for (const G of s.scanResults)
        try {
          const V = document.querySelector(G.selector);
          if (V) {
            const z = V.getBoundingClientRect();
            r.push({
              selector: G.selector,
              top: `${z.top + U}px`,
              left: `${z.left + y}px`,
              width: `${z.width}px`,
              height: `${z.height}px`,
              isStatic: ((_ = G.detected.sourceBinding) == null ? void 0 : _.isStatic) || !1
            });
          }
        } catch {
        }
      return r;
    }), ye = K(() => {
      var G, V;
      const U = R.value, y = Y.value, r = [], _ = s.analysisFilter;
      if (_ === "none" || !s.isEnabled || s.analysisResults.length === 0) return r;
      for (const z of s.analysisResults) {
        if (!z.matched) continue;
        const O = z.element;
        try {
          const Q = document.querySelector(z.selector);
          if (!Q) continue;
          const ue = Q.getBoundingClientRect();
          if (ue.width > window.innerWidth * 0.8 || ue.height > window.innerHeight * 0.5)
            continue;
          const ce = Q.querySelector("[data-di-binding]") || (Q.hasAttribute("data-di-binding") ? Q : null);
          let fe = "", A = O.binding || "";
          const h = [...O.tags || []];
          if (ce) {
            const te = ce.getAttribute("data-di-db"), De = ce.getAttribute("data-di-binding");
            te && (fe = te, h.includes("db") || h.push("db")), De && (A = De);
          }
          !fe && O.db && (fe = `${O.db.table}.${O.db.column}`, h.includes("db") || h.push("db"));
          let g = "";
          O.api && (g = `${O.api.method} ${O.api.endpoint}`, h.includes("api") || h.push("api"));
          let J = "";
          if (A) {
            const te = s.getApiSourceForBinding(A);
            te && te.endpoint ? J = `${te.method || "GET"} ${te.endpoint}` : te && te.composable && (J = te.composable);
          }
          const C = (G = O.conditional) == null ? void 0 : G.expression, ve = (V = O.modal) == null ? void 0 : V.target, Le = !!fe || h.includes("db"), ke = !!g || h.includes("api"), xe = h.includes("form"), Te = h.includes("button"), _e = h.includes("link"), Se = h.includes("modal"), Ce = h.includes("conditional"), W = h.includes("computed");
          if (_ === "db-api") {
            if (!Le && !ke) continue;
          } else if (_ === "form") {
            if (!xe) continue;
          } else if (_ === "button") {
            if (!Te) continue;
          } else if (_ === "link") {
            if (!_e) continue;
          } else if (_ === "modal") {
            if (!Se) continue;
          } else if (_ === "conditional") {
            if (!Ce) continue;
          } else if (_ === "computed") {
            if (!W) continue;
          } else if (_ === "other" && (Le || ke || xe || Te || _e || Se || Ce || W))
            continue;
          let se = "other";
          Le ? se = "db" : ke ? se = "api" : xe ? se = "form" : Te ? se = "button" : _e ? se = "link" : Se ? se = "modal" : Ce ? se = "conditional" : W && (se = "computed"), r.push({
            selector: z.selector,
            top: `${ue.top + U}px`,
            left: `${ue.left + y}px`,
            width: `${ue.width}px`,
            height: `${ue.height}px`,
            tags: h,
            primaryTag: se,
            text: O.text || A || "",
            dbInfo: fe,
            apiInfo: g,
            apiSource: J,
            conditionalExpr: C,
            modalTarget: ve
          });
        } catch {
        }
      }
      return r;
    }), de = K(() => {
      const U = R.value, y = Y.value, r = [];
      if (!s.isEnabled || !s.showUnannotatedDetection || s.unannotatedElements.length === 0) return r;
      for (const _ of s.unannotatedElements)
        try {
          const G = document.querySelector(_.selector);
          if (!G) continue;
          const V = G.getBoundingClientRect();
          r.push({
            selector: _.selector,
            top: `${V.top + U}px`,
            left: `${V.left + y}px`,
            width: `${V.width}px`,
            height: `${V.height}px`,
            category: _.category,
            text: _.text
          });
        } catch {
        }
      return r;
    });
    function x(U) {
      if (!s.isPickMode) return;
      if (U.target.closest("[data-dev-inspector]")) {
        M.value = null, B.value = null, s.setHoveredSelector(null);
        return;
      }
      const r = document.elementFromPoint(U.clientX, U.clientY);
      if (!r || r === document.body || r === document.documentElement) {
        M.value = null, B.value = null, s.setHoveredSelector(null);
        return;
      }
      if (r.closest("[data-dev-inspector]"))
        return;
      B.value = r;
      const _ = r.getBoundingClientRect();
      M.value = {
        top: `${_.top + window.scrollY}px`,
        left: `${_.left + window.scrollX}px`,
        width: `${_.width}px`,
        height: `${_.height}px`
      };
      const G = s.generateSelector(r);
      s.setHoveredSelector(G);
    }
    function ne(U) {
      if (!(!s.isPickMode || U.target.closest("[data-dev-inspector]")) && (U.preventDefault(), U.stopPropagation(), B.value)) {
        const r = s.generateSelector(B.value);
        if (s.remapTargetId) {
          s.remapAnnotation(s.remapTargetId, r), s.remapTargetId = null, s.togglePickMode(), s.openPanel();
          return;
        }
        s.startEditing(r), s.togglePickMode();
      }
    }
    function Ee(U) {
      U.key === "Escape" && s.isPickMode && (s.remapTargetId = null, s.togglePickMode());
    }
    function D() {
      R.value = window.scrollY, Y.value = window.scrollX;
    }
    return At(() => {
      window.addEventListener("mousemove", x, !0), window.addEventListener("click", ne, !0), window.addEventListener("keydown", Ee), window.addEventListener("scroll", D), window.addEventListener("resize", D);
    }), jt(() => {
      window.removeEventListener("mousemove", x, !0), window.removeEventListener("click", ne, !0), window.removeEventListener("keydown", Ee), window.removeEventListener("scroll", D), window.removeEventListener("resize", D);
    }), it(() => s.isPickMode, (U) => {
      U || (M.value = null, B.value = null);
    }), (U, y) => (o(), $e(qe, { to: "body" }, [
      u(s).isInitializing ? (o(), n("div", _a, [...y[1] || (y[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : c("", !0),
      u(s).isPickMode && M.value ? (o(), n("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: Me({
          top: M.value.top,
          left: M.value.left,
          width: M.value.width,
          height: M.value.height
        })
      }, [
        e("div", Ca, v(u(s).hoveredSelector), 1)
      ], 4)) : c("", !0),
      u(s).isPickMode ? (o(), n("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: Me(u(s).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, v(u(s).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        y[2] || (y[2] = e("kbd", null, "ESC", -1)),
        y[3] || (y[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : c("", !0),
      u(s).isEnabled && !u(s).isPickMode && !u(s).editingElementId ? (o(!0), n(S, { key: 3 }, j(ee.value, (r) => w((o(), n("div", {
        key: r.selector,
        "data-dev-inspector": "",
        class: X(r.hasNote ? "di-note-highlight" : "di-annotation-box"),
        style: Me({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height,
          borderColor: (r.hasNote, r.color),
          backgroundColor: r.color + (r.hasNote ? "18" : "15")
        }),
        onClick: (_) => u(s).startEditing(r.selector)
      }, [
        r.hasNote ? (o(), n("div", Ma, [
          e("span", {
            class: "di-note-indicator",
            style: Me({ backgroundColor: r.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: Me({ backgroundColor: r.color })
          }, v(r.label), 5)
        ])) : (o(), n("div", {
          key: 1,
          class: "di-annotation-label",
          style: Me({ backgroundColor: r.color })
        }, v(r.label), 5))
      ], 14, Ia)), [
        [Nt, !r.hasNote || u(s).showNoteHighlights && re(r.selector)]
      ])), 128)) : c("", !0),
      u(s).isEnabled && !u(s).editingElementId && ge.value.length > 0 && u(s).analysisResults.length === 0 ? (o(), n(S, { key: 4 }, [
        (o(!0), n(S, null, j(ge.value, (r) => (o(), n("div", {
          key: "scan-" + r.selector,
          "data-dev-inspector": "",
          class: X(["di-scan-highlight", { "di-scan-static": r.isStatic }]),
          style: Me({
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height
          }),
          onClick: (_) => u(s).startEditing(r.selector)
        }, [
          e("div", {
            class: X(["di-scan-label", { "di-scan-label-static": r.isStatic }])
          }, v(r.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Ta))), 128)),
        e("div", Sa, [
          e("span", null, v(ge.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: y[0] || (y[0] = (r) => u(s).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : c("", !0),
      u(s).isEnabled && !u(s).editingElementId && ye.value.length > 0 ? (o(), n(S, { key: 5 }, [
        (o(!0), n(S, null, j(ye.value, (r) => (o(), n("div", {
          key: "analysis-" + r.selector,
          "data-dev-inspector": "",
          class: X(["di-analysis-highlight", "di-analysis-" + r.primaryTag]),
          style: Me({
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height
          }),
          onClick: (_) => u(s).startEditing(r.selector)
        }, [
          e("div", {
            class: X(["di-analysis-label", "di-analysis-label-" + r.primaryTag])
          }, [
            e("span", Ea, v(ae(r.primaryTag)), 1),
            r.tags.length > 1 ? (o(), n("span", Ua, "+" + v(r.tags.length - 1), 1)) : c("", !0),
            r.dbInfo ? (o(), n("span", La, v(r.dbInfo), 1)) : c("", !0),
            r.apiSource ? (o(), n("span", Va, "← " + v(r.apiSource), 1)) : c("", !0),
            r.conditionalExpr ? (o(), n("span", Pa, v(r.conditionalExpr), 1)) : c("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: be((_) => u(s).removeAnalysisResult(r.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Aa)
          ], 2),
          r.text && r.text.length < 30 ? (o(), n("div", Ba, v(r.text), 1)) : c("", !0)
        ], 14, Da))), 128)),
        e("div", Fa, [
          e("span", null, "📊 分析データ: " + v(ye.value.length) + "件の要素", 1)
        ])
      ], 64)) : c("", !0),
      u(s).isEnabled && !u(s).isPickMode && !u(s).editingElementId && de.value.length > 0 ? (o(!0), n(S, { key: 6 }, j(de.value, (r) => (o(), n("div", {
        key: "unannotated-" + r.selector,
        "data-dev-inspector": "",
        class: "di-unannotated-highlight",
        style: Me({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height
        }),
        onClick: (_) => u(s).quickAnnotate(r.selector, r.category === "form" ? "form" : r.category === "action" ? "action" : "datasource")
      }, [
        e("div", Na, [
          e("span", null, v(r.category === "binding" ? "DB" : r.category === "form" ? "Form" : "Act"), 1),
          r.text ? (o(), n("span", qa, v(r.text), 1)) : c("", !0)
        ])
      ], 12, ja))), 128)) : c("", !0)
    ]));
  }
}), Ha = /* @__PURE__ */ bt(Oa, [["__scopeId", "data-v-927b2218"]]), Ra = { class: "di-editor-modal" }, za = { class: "di-editor-header" }, Ga = { class: "di-header-actions" }, Ya = { class: "di-path-badge" }, Ka = { class: "di-editor-content" }, Xa = { class: "di-form-group" }, Za = { class: "di-form-group" }, Ja = { class: "di-form-section" }, Qa = { class: "di-form-section-header" }, Wa = { class: "di-api-header-actions" }, ed = { class: "di-dropdown-wrapper" }, td = {
  key: 1,
  class: "di-suggestion-dropdown"
}, ld = {
  key: 0,
  class: "di-suggestion-actions"
}, sd = ["onMousedown", "disabled"], od = { class: "di-suggestion-endpoint" }, nd = {
  key: 0,
  class: "di-suggestion-timing"
}, id = {
  key: 1,
  class: "di-suggestion-empty"
}, ad = {
  key: 0,
  class: "di-suggestion-banner"
}, dd = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, ud = {
  key: 2,
  class: "di-empty-hint"
}, rd = { class: "di-api-entry-row" }, cd = ["onUpdate:modelValue"], vd = ["value"], pd = ["onUpdate:modelValue"], md = ["onClick"], hd = { class: "di-api-entry-row2" }, yd = ["onUpdate:modelValue"], fd = ["onUpdate:modelValue"], bd = ["value"], gd = { class: "di-form-section" }, kd = { class: "di-auth-row" }, xd = {
  key: 0,
  class: "di-auth-details"
}, wd = { class: "di-form-group" }, $d = { class: "di-form-group" }, _d = { class: "di-form-group" }, Cd = { class: "di-form-group" }, Id = { class: "di-editor-footer" }, Md = { class: "di-editor-actions" }, Td = ["disabled"], Sd = /* @__PURE__ */ at({
  __name: "DevScreenEditor",
  setup(q) {
    const s = dt(), M = f(""), B = f(""), R = f([]), Y = f(!1), ie = f(""), oe = f(""), ae = f(""), $ = f(""), re = f(!1), ee = f([]), ge = f(!1), ye = K(() => typeof window < "u" ? window.location.pathname : "/");
    it(() => s.editingScreen, (A) => {
      A && de();
    });
    function de() {
      var h, g, J, C;
      const A = s.getScreenConfig();
      A ? (M.value = A.name, B.value = A.description || "", R.value = A.apis.map((ve) => ({ ...ve })), Y.value = ((h = A.auth) == null ? void 0 : h.required) || !1, ie.value = ((J = (g = A.auth) == null ? void 0 : g.roles) == null ? void 0 : J.join(", ")) || "", oe.value = ((C = A.auth) == null ? void 0 : C.description) || "", ae.value = A.figmaUrl || "", $.value = A.notes || "") : x();
    }
    function x() {
      M.value = "", B.value = "", R.value = [], Y.value = !1, ie.value = "", oe.value = "", ae.value = "", $.value = "";
    }
    function ne() {
      s.editingScreen = !1, x();
    }
    function Ee() {
      R.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function D(A) {
      R.value.splice(A, 1);
    }
    function U() {
      if (!M.value.trim()) return;
      const A = {
        path: ye.value,
        name: M.value.trim(),
        description: B.value.trim() || void 0,
        apis: R.value.filter((h) => h.endpoint.trim()),
        auth: Y.value || ie.value.trim() ? {
          required: Y.value,
          roles: ie.value.trim() ? ie.value.split(",").map((h) => h.trim()).filter(Boolean) : void 0,
          description: oe.value.trim() || void 0
        } : void 0,
        figmaUrl: ae.value.trim() || void 0,
        notes: $.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      s.setScreenConfig(A), ne();
    }
    function y() {
      s.deleteScreenConfig(ye.value), ne();
    }
    const r = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, _ = {
      onMount: "読込時",
      action: "アクション",
      conditional: "条件付き"
    };
    function G() {
      ee.value = s.suggestScreenApis(), re.value = !0;
    }
    function V(A) {
      return R.value.some(
        (h) => h.method === A.method && h.endpoint === A.endpoint
      );
    }
    const z = K(() => ee.value.filter((A) => !V(A)));
    function O(A) {
      V(A) || R.value.push({ ...A });
    }
    function Q() {
      for (const A of z.value)
        R.value.push({ ...A });
    }
    function ue() {
      setTimeout(() => {
        ge.value = !1;
      }, 150);
    }
    const ce = ["GET", "POST", "PUT", "DELETE", "PATCH"], fe = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (A, h) => (o(), $e(qe, { to: "body" }, [
      u(s).editingScreen ? (o(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(ne, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", Ra, [
          e("div", za, [
            h[9] || (h[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Ga, [
              e("span", Ya, v(ye.value), 1),
              e("button", {
                onClick: ne,
                class: "di-editor-close"
              }, [
                k(u(Je), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", Ka, [
            e("div", Xa, [
              h[10] || (h[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              w(e("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (g) => M.value = g),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [E, M.value]
              ])
            ]),
            e("div", Za, [
              h[11] || (h[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              w(e("textarea", {
                "onUpdate:modelValue": h[1] || (h[1] = (g) => B.value = g),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [E, B.value]
              ])
            ]),
            e("div", Ja, [
              e("div", Qa, [
                h[15] || (h[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", Wa, [
                  e("button", {
                    onClick: G,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    k(u(ft), { style: { width: "13px", height: "13px" } }),
                    h[12] || (h[12] = N(" 自動推定 ", -1))
                  ]),
                  e("div", ed, [
                    ee.value.length > 0 ? (o(), n("button", {
                      key: 0,
                      onClick: h[2] || (h[2] = (g) => ge.value = !ge.value),
                      onBlur: h[3] || (h[3] = (g) => ue()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      k(u(zt), { style: { width: "13px", height: "13px" } }),
                      h[13] || (h[13] = N(" 候補から選択 ", -1))
                    ], 32)) : c("", !0),
                    ge.value && ee.value.length > 0 ? (o(), n("div", td, [
                      z.value.length > 0 ? (o(), n("div", ld, [
                        e("button", {
                          onMousedown: be(Q, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + v(z.value.length) + ") ", 33)
                      ])) : c("", !0),
                      (o(!0), n(S, null, j(ee.value, (g, J) => (o(), n("button", {
                        key: J,
                        onMousedown: be((C) => O(g), ["prevent"]),
                        class: X(["di-suggestion-item", { "di-suggestion-added": V(g) }]),
                        disabled: V(g)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: Me({ backgroundColor: r[g.method] + "20", color: r[g.method] })
                        }, v(g.method), 5),
                        e("code", od, v(g.endpoint), 1),
                        g.loadTiming ? (o(), n("span", nd, v(_[g.loadTiming] || g.loadTiming), 1)) : c("", !0),
                        V(g) ? (o(), $e(u(Rt), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : c("", !0)
                      ], 42, sd))), 128)),
                      ee.value.length === 0 ? (o(), n("div", id, " 推定結果がありません ")) : c("", !0)
                    ])) : c("", !0)
                  ]),
                  e("button", {
                    onClick: Ee,
                    class: "di-btn-add"
                  }, [
                    k(u(wt), { style: { width: "14px", height: "14px" } }),
                    h[14] || (h[14] = N(" 手動追加 ", -1))
                  ])
                ])
              ]),
              re.value && ee.value.length > 0 && z.value.length > 0 ? (o(), n("div", ad, [
                k(u(ft), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, v(ee.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: be(Q, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : re.value && ee.value.length === 0 ? (o(), n("div", dd, [...h[16] || (h[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : c("", !0),
              R.value.length === 0 && !re.value ? (o(), n("div", ud, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : c("", !0),
              (o(!0), n(S, null, j(R.value, (g, J) => (o(), n("div", {
                key: J,
                class: "di-api-entry"
              }, [
                e("div", rd, [
                  w(e("select", {
                    "onUpdate:modelValue": (C) => g.method = C,
                    class: "di-select di-select-method"
                  }, [
                    (o(), n(S, null, j(ce, (C) => e("option", {
                      key: C,
                      value: C
                    }, v(C), 9, vd)), 64))
                  ], 8, cd), [
                    [Ne, g.method]
                  ]),
                  w(e("input", {
                    "onUpdate:modelValue": (C) => g.endpoint = C,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, pd), [
                    [E, g.endpoint]
                  ]),
                  e("button", {
                    onClick: (C) => D(J),
                    class: "di-btn-remove"
                  }, [
                    k(u(ll), { style: { width: "14px", height: "14px" } })
                  ], 8, md)
                ]),
                e("div", hd, [
                  w(e("input", {
                    "onUpdate:modelValue": (C) => g.description = C,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, yd), [
                    [E, g.description]
                  ]),
                  w(e("select", {
                    "onUpdate:modelValue": (C) => g.loadTiming = C,
                    class: "di-select di-select-timing"
                  }, [
                    (o(), n(S, null, j(fe, (C) => e("option", {
                      key: C.value,
                      value: C.value
                    }, v(C.label), 9, bd)), 64))
                  ], 8, fd), [
                    [Ne, g.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", gd, [
              h[20] || (h[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", kd, [
                e("button", {
                  onClick: h[4] || (h[4] = (g) => Y.value = !Y.value),
                  class: X(["di-toggle-btn", { active: Y.value }])
                }, [
                  e("span", {
                    class: X(["di-toggle-knob", { active: Y.value }])
                  }, null, 2)
                ], 2),
                h[17] || (h[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              Y.value ? (o(), n("div", xd, [
                e("div", wd, [
                  h[18] || (h[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": h[5] || (h[5] = (g) => ie.value = g),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [E, ie.value]
                  ])
                ]),
                e("div", $d, [
                  h[19] || (h[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": h[6] || (h[6] = (g) => oe.value = g),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [E, oe.value]
                  ])
                ])
              ])) : c("", !0)
            ]),
            e("div", _d, [
              h[21] || (h[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              w(e("input", {
                "onUpdate:modelValue": h[7] || (h[7] = (g) => ae.value = g),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [E, ae.value]
              ])
            ]),
            e("div", Cd, [
              h[22] || (h[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              w(e("textarea", {
                "onUpdate:modelValue": h[8] || (h[8] = (g) => $.value = g),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [E, $.value]
              ])
            ])
          ]),
          e("div", Id, [
            e("button", {
              onClick: y,
              class: "di-btn-delete"
            }, [
              k(u(nt), { style: { width: "14px", height: "14px" } }),
              h[23] || (h[23] = N(" 削除 ", -1))
            ]),
            e("div", Md, [
              e("button", {
                onClick: ne,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: U,
                class: "di-btn-save",
                disabled: !M.value.trim()
              }, [
                k(u(Bt), { style: { width: "14px", height: "14px" } }),
                h[24] || (h[24] = N(" 保存 ", -1))
              ], 8, Td)
            ])
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Dd = /* @__PURE__ */ bt(Sd, [["__scopeId", "data-v-a3b58e7a"]]), Ed = {
  key: 0,
  "data-dev-inspector": ""
}, Ud = /* @__PURE__ */ at({
  __name: "DevInspector",
  props: {
    storageKey: { default: "devInspector:elementConfigs" },
    enabledInProduction: { type: Boolean, default: !1 },
    initialAnnotations: {},
    analysisData: {},
    analysisDataUrl: {},
    autoLoadAnalysis: { type: Boolean },
    autoApplyAnalysis: { type: Boolean },
    serverSync: { type: Boolean },
    supabase: {}
  },
  setup(q) {
    const s = q, M = dt();
    return At(() => {
      M.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (B, R) => u(M).isAvailable ? (o(), n("div", Ed, [
      k(on),
      k($a),
      k(Dd),
      k(Ha)
    ])) : c("", !0);
  }
}), Pd = {
  install(q, s = {}) {
    const { autoRegister: M = !0, ...B } = s;
    M && q.component("DevInspector", Ud), q.provide("devInspectorOptions", B);
  }
};
export {
  $a as DevElementEditor,
  Ud as DevInspector,
  on as DevPanel,
  Ha as DevPickOverlay,
  Dd as DevScreenEditor,
  Pd as VueDevInspector,
  Pd as default,
  Fd as useDevInspector,
  dt as useDevInspectorStore,
  Nd as vitePluginDevInspector
};
