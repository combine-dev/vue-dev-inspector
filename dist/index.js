import { h as It, defineComponent as at, ref as f, computed as X, watch as it, openBlock as o, createElementBlock as n, Fragment as D, createBlock as we, Teleport as Oe, unref as u, createVNode as g, createCommentVNode as c, createElementVNode as e, normalizeClass as G, toDisplayString as v, renderList as j, createTextVNode as B, withDirectives as w, vModelText as U, normalizeStyle as Ie, withModifiers as be, resolveDynamicComponent as Ft, vModelSelect as qe, withKeys as Mt, onMounted as At, onUnmounted as jt, vShow as Nt } from "vue";
import { u as dt } from "./useDevInspector-BhAd79wp.js";
import { a as jd } from "./useDevInspector-BhAd79wp.js";
import { default as qd } from "./vite.js";
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
const qt = (N) => N.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), O = (N, s) => ({ size: T, strokeWidth: A = 2, absoluteStrokeWidth: H, color: K, class: ne, ...se }, { attrs: ie, slots: $ }) => It(
  "svg",
  {
    ...ht,
    width: T || ht.width,
    height: T || ht.height,
    stroke: K || ht.stroke,
    "stroke-width": H ? Number(A) * 24 / Number(T) : A,
    ...ie,
    class: ["lucide", `lucide-${qt(N)}`],
    ...se
  },
  [
    ...s.map((ue) => It(...ue)),
    ...$.default ? [$.default()] : []
  ]
);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = O("AlertCircleIcon", [
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
const Ht = O("AlertTriangleIcon", [
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
const Tt = O("CalculatorIcon", [
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
const Rt = O("CheckIcon", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = O("ChevronDownIcon", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = O("ClipboardListIcon", [
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
const St = O("CodeIcon", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = O("DatabaseIcon", [
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
const yt = O("DownloadIcon", [
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
const Yt = O("ExternalLinkIcon", [
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
const Kt = O("EyeOffIcon", [
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
const Xt = O("EyeIcon", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = O("FileSpreadsheetIcon", [
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
const ft = O("FileTextIcon", [
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
const Jt = O("FormInputIcon", [
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
const Qt = O("GitBranchIcon", [
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
const Wt = O("GitMergeIcon", [
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
const Dt = O("ListIcon", [
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
const Et = O("Loader2Icon", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = O("LockIcon", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = O("MessageSquareIcon", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = O("MinusIcon", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = O("MousePointer2Icon", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = O("PenLineIcon", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = O("PenSquareIcon", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = O("PlusIcon", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = O("SaveIcon", [
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
const ol = O("ScanIcon", [
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
const nl = O("SearchIcon", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = O("ServerIcon", [
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
const Pt = O("ShieldQuestionIcon", [
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
const il = O("ShieldIcon", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = O("Trash2Icon", [
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
const al = O("TypeIcon", [
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
const dl = O("UploadIcon", [
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
const bt = O("Wand2Icon", [
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
const Ge = O("XIcon", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-vue-next v0.300.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = O("ZapIcon", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
async function rl(N, s, T = {}) {
  var ae;
  const A = await import("./xlsx-BopDBbWb.js"), { systemName: H = "System", author: K = "" } = T, ne = /* @__PURE__ */ new Date(), se = `${ne.getFullYear()}/${ne.getMonth() + 1}/${ne.getDate()}`, ie = A.utils.book_new(), $ = [];
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
    H,
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
    (N == null ? void 0 : N.name) || "",
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
    K,
    "",
    "作成日",
    "",
    "",
    "",
    "",
    se
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
    (N == null ? void 0 : N.componentPath) || "",
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
    (N == null ? void 0 : N.figmaUrl) || ""
  ]), $.push([]), $.push(["機能概要"]), $.push([(N == null ? void 0 : N.description) || ""]), $.push([]), $.push(["画面レイアウト　figmaURL"]), $.push([(N == null ? void 0 : N.figmaUrl) || ""]), $.push([]), N != null && N.apis && N.apis.length > 0 && ($.push(["API一覧"]), $.push(["", "メソッド", "", "エンドポイント", "", "", "", "", "", "", "", "説明"]), N.apis.forEach((x) => {
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
  ]), Object.values(s).forEach((x, oe) => {
    var r, _, Y;
    const De = x.id;
    let E = "", V = "", y = "";
    if ((r = x.note) != null && r.text && (E = x.note.text), x.fieldInfo && (E += E ? `
` : "", E += `DB: ${x.fieldInfo.table}.${x.fieldInfo.column}`, x.fieldInfo.type && (E += ` (${x.fieldInfo.type})`), x.fieldInfo.description && (E += `
${x.fieldInfo.description}`)), x.actionInfo && (y = `[${{
      navigate: "画面遷移",
      api: "API呼び出し",
      modal: "モーダル表示",
      emit: "イベント発火",
      function: "関数実行"
    }[x.actionInfo.type] || x.actionInfo.type}]`, x.actionInfo.target && (y += ` ${x.actionInfo.method || ""} ${x.actionInfo.target}`), x.actionInfo.description && (y += `
${x.actionInfo.description}`)), x.links) {
      const L = [];
      x.links.testPath && L.push(`テスト: ${x.links.testPath}`), x.links.figmaUrl && L.push(`Figma: ${x.links.figmaUrl}`), x.links.githubIssue && L.push(`Issue: ${x.links.githubIssue}`), x.links.githubPr && L.push(`PR: ${x.links.githubPr}`), L.length > 0 && (y += y ? `

` : "", y += L.join(`
`));
    }
    if (x.devMeta) {
      const L = [];
      (_ = x.devMeta.usedStores) != null && _.length && L.push(`Store: ${x.devMeta.usedStores.join(", ")}`), (Y = x.devMeta.usedComponents) != null && Y.length && L.push(`Components: ${x.devMeta.usedComponents.join(", ")}`), x.devMeta.accessibility && L.push(`A11y: ${x.devMeta.accessibility}`), x.devMeta.responsive && L.push(`Responsive: ${x.devMeta.responsive}`), L.length > 0 && (y += y ? `

` : "", y += `[開発情報]
` + L.join(`
`));
    }
    $.push([
      "",
      oe + 1,
      "",
      De,
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
      E,
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
      V,
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
  const ee = A.utils.aoa_to_sheet($);
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
  ], A.utils.book_append_sheet(ie, ee, "画面設計書");
  const ye = `画面仕様書_${((ae = N == null ? void 0 : N.name) == null ? void 0 : ae.replace(/[/\\?%*:|"<>]/g, "-")) || "screen"}_${se.replace(/\//g, "")}.xlsx`;
  return A.writeFile(ie, ye), ye;
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
}, xl = { class: "di-unannotated-summary" }, wl = { key: 0 }, $l = { key: 1 }, _l = { key: 2 }, Cl = { class: "di-unannotated-list" }, Il = ["onMouseenter"], Ml = { class: "di-unannotated-text" }, Tl = ["onClick"], Sl = ["onClick"], Dl = {
  key: 3,
  class: "di-unannotated-empty"
}, El = {
  key: 4,
  class: "di-broken-warning"
}, Ul = { class: "di-broken-header" }, Vl = { class: "di-broken-list" }, Ll = { class: "di-broken-item-info" }, Pl = { class: "di-broken-item-note" }, Al = { class: "di-broken-item-selector" }, Bl = { class: "di-broken-item-actions" }, Fl = ["onClick"], jl = ["onClick"], Nl = { class: "di-broken-actions" }, ql = { class: "di-analysis-section" }, Ol = { class: "di-analysis-header" }, Hl = { class: "di-analysis-input" }, Rl = { class: "di-analysis-buttons" }, zl = ["disabled"], Gl = ["disabled"], Yl = {
  key: 0,
  class: "di-analysis-error"
}, Kl = {
  key: 1,
  class: "di-analysis-status"
}, Xl = { class: "di-analysis-count" }, Zl = {
  key: 2,
  class: "di-analysis-filter"
}, Jl = { class: "di-filter-buttons" }, Ql = ["onClick"], Wl = {
  key: 0,
  class: "di-hidden-actions"
}, es = ["disabled"], ts = { key: 1 }, ls = { key: 2 }, ss = {
  key: 3,
  class: "di-page-apis"
}, os = {
  key: 0,
  class: "di-api-group"
}, ns = { class: "di-api-group-header" }, is = { class: "di-api-group-count" }, as = { class: "di-api-group-list" }, ds = { class: "di-api-endpoint" }, us = {
  key: 0,
  class: "di-api-variable"
}, rs = { class: "di-api-trigger" }, cs = {
  key: 1,
  class: "di-api-group"
}, vs = { class: "di-api-group-header" }, ps = { class: "di-api-group-count" }, ms = { class: "di-api-group-list" }, hs = { class: "di-api-endpoint" }, ys = {
  key: 0,
  class: "di-api-variable"
}, fs = { class: "di-content" }, bs = { class: "di-cross-search-section" }, gs = {
  key: 0,
  class: "di-cross-search-body"
}, ks = {
  class: "di-filter-buttons",
  style: { "margin-bottom": "8px" }
}, xs = ["onClick"], ws = ["placeholder"], $s = {
  key: 0,
  class: "di-cross-search-count"
}, _s = {
  key: 1,
  class: "di-cross-search-results"
}, Cs = { class: "di-cross-search-page-header" }, Is = {
  key: 0,
  class: "di-cross-search-page-name"
}, Ms = ["onClick"], Ts = { class: "di-cross-search-field" }, Ss = {
  key: 0,
  class: "di-cross-search-context"
}, Ds = { class: "di-screen-flow-section" }, Es = {
  key: 0,
  class: "di-screen-flow-badge"
}, Us = {
  key: 0,
  class: "di-screen-flow-body"
}, Vs = {
  key: 0,
  class: "di-screen-flow-empty"
}, Ls = { class: "di-flow-node-path" }, Ps = {
  key: 0,
  class: "di-flow-node-name"
}, As = ["onClick"], Bs = { class: "di-flow-target" }, Fs = {
  key: 0,
  class: "di-flow-edge-label"
}, js = {
  key: 1,
  class: "di-flow-orphans"
}, Ns = { class: "di-section" }, qs = { class: "di-screen-header" }, Os = { class: "di-screen-name" }, Hs = {
  key: 0,
  class: "di-screen-desc"
}, Rs = {
  key: 1,
  class: "di-auth-badges"
}, zs = {
  key: 0,
  class: "di-auth-badge di-auth-required"
}, Gs = {
  key: 1,
  class: "di-auth-note"
}, Ys = {
  key: 0,
  class: "di-card"
}, Ks = { class: "di-card-label" }, Xs = { class: "di-code-blue" }, Zs = {
  key: 1,
  class: "di-card"
}, Js = { class: "di-card-label" }, Qs = ["href"], Ws = {
  key: 2,
  class: "di-card"
}, eo = { class: "di-card-label" }, to = { class: "di-api-list" }, lo = { class: "di-api-info" }, so = { class: "di-api-endpoint" }, oo = {
  key: 0,
  class: "di-api-desc"
}, no = {
  key: 0,
  class: "di-api-timing-badge"
}, io = {
  key: 3,
  class: "di-card"
}, ao = { class: "di-card-label" }, uo = { class: "di-screen-notes" }, ro = {
  key: 1,
  class: "di-no-spec"
}, co = { class: "di-card" }, vo = { class: "di-card-header" }, po = { class: "di-card-label" }, mo = { class: "di-count-badge" }, ho = { class: "di-section" }, yo = {
  class: "di-section-header",
  style: { "margin-bottom": "8px" }
}, fo = {
  key: 0,
  class: "di-section-badge"
}, bo = { class: "di-master-table-name" }, go = ["onClick"], ko = { class: "di-master-item-header" }, xo = { class: "di-master-col-name" }, wo = {
  key: 0,
  class: "di-master-col-type"
}, $o = { class: "di-master-item-name" }, _o = { class: "di-master-entries-preview" }, Co = {
  key: 0,
  class: "di-master-entry-more"
}, Io = { class: "di-master-editor" }, Mo = { class: "di-master-editor-header" }, To = { class: "di-master-editor-body" }, So = { class: "di-master-row" }, Do = { class: "di-master-field" }, Eo = ["disabled"], Uo = { class: "di-master-field" }, Vo = ["disabled"], Lo = { class: "di-master-row" }, Po = { class: "di-master-field" }, Ao = { class: "di-master-field" }, Bo = {
  class: "di-master-field",
  style: { "margin-bottom": "12px" }
}, Fo = { class: "di-master-entries-header" }, jo = { class: "di-master-entries-list" }, No = ["onUpdate:modelValue"], qo = ["onUpdate:modelValue"], Oo = ["onUpdate:modelValue"], Ho = ["onUpdate:modelValue"], Ro = ["onClick"], zo = { class: "di-master-editor-footer" }, Go = ["disabled"], Yo = {
  key: 0,
  class: "di-export-buttons"
}, Ko = {
  key: 1,
  class: "di-export-hint"
}, Xo = { class: "di-action-buttons" }, Zo = {
  key: 0,
  class: "di-indicator",
  "data-dev-inspector": ""
}, Jo = { class: "di-modal" }, Qo = ["value"], Wo = { class: "di-modal-actions" }, en = { class: "di-modal" }, tn = { class: "di-file-drop" }, ln = {
  key: 0,
  class: "di-error"
}, sn = { class: "di-modal-actions" }, on = ["disabled"], nn = /* @__PURE__ */ at({
  __name: "DevPanel",
  setup(N) {
    const s = dt(), T = f(!1), A = f(!1), H = f(""), K = f(""), ne = {
      GET: "#10b981",
      POST: "#3b82f6",
      PUT: "#f59e0b",
      DELETE: "#ef4444",
      PATCH: "#8b5cf6"
    }, se = X(() => s.currentScreenSpec), ie = X(() => s.getScreenConfig()), $ = X(() => {
      var d;
      const m = ie.value, l = se.value;
      return !m && !l ? null : {
        name: (m == null ? void 0 : m.name) || (l == null ? void 0 : l.name) || "",
        description: (m == null ? void 0 : m.description) || (l == null ? void 0 : l.description) || "",
        componentPath: (m == null ? void 0 : m.componentPath) || (l == null ? void 0 : l.componentPath) || "",
        figmaUrl: (m == null ? void 0 : m.figmaUrl) || (l == null ? void 0 : l.figmaUrl) || "",
        apis: (m == null ? void 0 : m.apis) || ((d = l == null ? void 0 : l.apis) == null ? void 0 : d.map((C) => ({ ...C, loadTiming: void 0 }))) || [],
        auth: (m == null ? void 0 : m.auth) || null,
        notes: (m == null ? void 0 : m.notes) || (l != null && l.notes ? l.notes.join(`
`) : "")
      };
    }), ue = X(() => Object.keys(s.elementConfigs).length), ee = X(() => Object.values(s.elementConfigs).filter((m) => {
      var l, d;
      return !!((l = m.note) != null && l.text || (d = m.note) != null && d.displayType);
    }).length), ge = X(() => {
      const m = s.noteHighlightFilter;
      return m === "all" ? ee.value : Object.values(s.elementConfigs).filter((l) => {
        var ve, Ue, je, Ae, Be, He, Re;
        if (!((ve = l.note) != null && ve.text || (Ue = l.note) != null && Ue.displayType || l.elementType)) return !1;
        const d = (je = l.note) == null ? void 0 : je.displayType, C = !!((Ae = l.note) != null && Ae.condition || (Be = l.note) != null && Be.conditionColumn), R = !!((He = l.note) != null && He.storedCalc);
        switch (m) {
          case "db":
            return d === "db_direct" || d === "db_formatted";
          case "calculated":
            return d === "calculated";
          case "storedCalc":
            return R;
          case "static":
            return d === "static";
          case "conditional":
            return C;
          case "action":
            return l.elementType === "action";
          case "form":
            return l.elementType === "form";
          case "other":
            return d === "other" || !d && !l.elementType && !!((Re = l.note) != null && Re.text);
          default:
            return !0;
        }
      }).length;
    });
    function ye() {
      const m = s.exportConfigs();
      navigator.clipboard.writeText(m), T.value = !1;
    }
    function ae() {
      const m = s.exportConfigs(), l = new Blob([m], { type: "application/json" }), d = URL.createObjectURL(l), C = document.createElement("a");
      C.href = d, C.download = "dev-mode-configs.json", C.click(), URL.revokeObjectURL(d), T.value = !1;
    }
    function x() {
      s.downloadAnnotations();
    }
    async function oe() {
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
    function De() {
      try {
        s.importConfigs(H.value), H.value = "", K.value = "", A.value = !1;
      } catch {
        K.value = "JSONの形式が正しくありません";
      }
    }
    function E(m) {
      var R;
      const d = (R = m.target.files) == null ? void 0 : R[0];
      if (!d) return;
      const C = new FileReader();
      C.onload = (ve) => {
        var Ue;
        H.value = (Ue = ve.target) == null ? void 0 : Ue.result;
      }, C.readAsText(d);
    }
    function V() {
      confirm("すべての要素設定を削除しますか？") && s.clearAllConfigs();
    }
    const y = f("/dev-inspector-analysis.json"), r = f(!1), _ = f(""), Y = f(0), L = f(!1), z = [
      { value: "all", label: "すべて" },
      { value: "db", label: "DB" },
      { value: "calculated", label: "計算値" },
      { value: "storedCalc", label: "保存計算値" },
      { value: "static", label: "固定" },
      { value: "conditional", label: "条件付き" },
      { value: "action", label: "アクション" },
      { value: "form", label: "フォーム" },
      { value: "other", label: "その他" }
    ], q = [
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
    ], Q = X(() => s.getCurrentPageApis()), de = {
      onMount: "画面読込時",
      useFetch: "useFetch",
      useAsyncData: "useAsyncData",
      watch: "watch",
      action: "アクション",
      unknown: "不明"
    };
    async function re() {
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
      Y.value = await s.applyAnalysisToPage();
    }
    const P = X(() => s.brokenAnnotations.length);
    it(() => s.isPanelOpen, (m) => {
      m && s.detectBrokenAnnotations();
    });
    function h() {
      confirm(`${P.value}件の壊れたメモを削除しますか？`) && s.deleteBrokenAnnotations();
    }
    const k = f(!1), J = f(null), I = f({
      table: "",
      column: "",
      name: "",
      columnType: "",
      description: "",
      entries: []
    }), ce = X(() => Object.keys(s.masterDefinitions).length), Ve = X(() => {
      const m = Object.values(s.masterDefinitions), l = {};
      for (const d of m)
        l[d.table] || (l[d.table] = []), l[d.table].push(d);
      return l;
    });
    function ke(m) {
      if (m) {
        const l = s.getMasterDefinition(m);
        l && (J.value = m, I.value = {
          table: l.table,
          column: l.column,
          name: l.name,
          columnType: l.columnType || "",
          description: l.description || "",
          entries: [...l.entries.map((d) => ({ ...d }))]
        });
      } else
        J.value = null, I.value = {
          table: "",
          column: "",
          name: "",
          columnType: "",
          description: "",
          entries: [{ value: "", label: "" }]
        };
      k.value = !0;
    }
    function xe() {
      const m = I.value;
      if (!m.table || !m.column) return;
      const d = {
        id: `${m.table}.${m.column}`,
        table: m.table,
        column: m.column,
        name: m.name || m.column,
        columnType: m.columnType || void 0,
        description: m.description || void 0,
        entries: m.entries.filter((C) => C.value || C.label),
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      s.setMasterDefinition(d), k.value = !1;
    }
    function Me() {
      I.value.entries.push({ value: "", label: "" });
    }
    function $e(m) {
      I.value.entries.splice(m, 1);
    }
    function Te(m) {
      confirm(`マスタ定義「${m}」を削除しますか？`) && s.deleteMasterDefinition(m);
    }
    async function _e() {
      L.value = !0;
      try {
        s.clearHiddenSelectors(), s.analysisData && await s.applyAnalysisToPage();
      } finally {
        L.value = !1;
      }
    }
    const W = [
      { value: "column", label: "カラム", placeholder: "users.email, orders..." },
      { value: "api", label: "API", placeholder: "GET /api/users..." },
      { value: "text", label: "テキスト", placeholder: "メモ、説明文で検索..." }
    ], le = X(() => {
      var m;
      return ((m = W.find((l) => l.value === s.crossSearchMode)) == null ? void 0 : m.placeholder) || "検索...";
    }), te = X(() => {
      const m = {};
      for (const l of s.crossSearchResults)
        m[l.pagePath] || (m[l.pagePath] = { pagePath: l.pagePath, pageName: l.pageName, items: [] }), m[l.pagePath].items.push(l);
      return Object.values(m);
    }), Se = X(() => te.value.length), Le = X(() => {
      const m = s.unannotatedElements;
      return {
        binding: m.filter((l) => l.category === "binding").length,
        form: m.filter((l) => l.category === "form").length,
        action: m.filter((l) => l.category === "action").length
      };
    });
    function Ee() {
      s.showUnannotatedDetection ? (s.showUnannotatedDetection = !1, s.unannotatedElements = [], s.hoveredUnannotatedSelector = null) : (s.showUnannotatedDetection = !0, s.detectUnannotatedElements());
    }
    function Je(m) {
      s.unannotatedElements = s.unannotatedElements.filter((l) => l.selector !== m);
    }
    function Ye(m) {
      s.hoveredUnannotatedSelector = m;
      try {
        const l = document.querySelector(m);
        if (!l) return;
        const d = l.getBoundingClientRect();
        (d.bottom < 0 || d.top > window.innerHeight) && l.scrollIntoView({ behavior: "smooth", block: "center" });
      } catch {
      }
    }
    function Pe() {
      s.hoveredUnannotatedSelector = null;
    }
    const Qe = X(() => typeof window < "u" ? window.location.pathname : "/"), We = X(() => {
      const m = s.screenFlowData, l = {};
      for (const d of m.edges) {
        if (!l[d.from]) {
          const C = m.nodes.find((R) => R.path === d.from) || { path: d.from, name: d.from, annotationCount: 0 };
          l[d.from] = { node: C, edges: [] };
        }
        l[d.from].edges.push(d);
      }
      return Object.values(l);
    });
    function et(m) {
      m && s.startEditing(m);
    }
    return (m, l) => (o(), n(D, null, [
      (o(), we(Oe, { to: "body" }, [
        u(s).isEnabled && !u(s).isPanelOpen ? (o(), n("button", {
          key: 0,
          onClick: l[0] || (l[0] = //@ts-ignore
          (...d) => u(s).openPanel && u(s).openPanel(...d)),
          class: "di-fab",
          title: "画面仕様を表示",
          "data-dev-inspector": ""
        }, [
          g(u(ft), { style: { width: "20px", height: "20px" } })
        ])) : c("", !0)
      ])),
      (o(), we(Oe, { to: "body" }, [
        u(s).isEnabled && u(s).isPanelOpen ? (o(), n("div", cl, [
          e("div", vl, [
            e("div", pl, [
              g(u(St), { style: { width: "20px", height: "20px", color: "#60a5fa" } }),
              l[31] || (l[31] = e("span", null, "Developer Mode", -1))
            ]),
            e("button", {
              onClick: l[1] || (l[1] = //@ts-ignore
              (...d) => u(s).closePanel && u(s).closePanel(...d)),
              class: "di-close-btn"
            }, [
              g(u(Ge), { style: { width: "20px", height: "20px" } })
            ])
          ]),
          e("div", ml, [
            e("button", {
              onClick: l[2] || (l[2] = //@ts-ignore
              (...d) => u(s).togglePickMode && u(s).togglePickMode(...d)),
              class: G(["di-pick-btn", { active: u(s).isPickMode }])
            }, [
              g(u(Ut), { style: { width: "16px", height: "16px" } }),
              e("span", null, v(u(s).isPickMode ? "要素選択中..." : "任意の要素にメモを追加"), 1)
            ], 2),
            ee.value > 0 ? (o(), n("button", {
              key: 0,
              onClick: l[3] || (l[3] = //@ts-ignore
              (...d) => u(s).toggleNoteHighlights && u(s).toggleNoteHighlights(...d)),
              class: G(["di-note-toggle-btn", { active: u(s).showNoteHighlights }])
            }, [
              u(s).showNoteHighlights ? (o(), we(u(Xt), {
                key: 0,
                style: { width: "14px", height: "14px" }
              })) : (o(), we(u(Kt), {
                key: 1,
                style: { width: "14px", height: "14px" }
              })),
              l[32] || (l[32] = e("span", null, "メモハイライト", -1)),
              e("span", hl, v(u(s).noteHighlightFilter === "all" ? ee.value : `${ge.value}/${ee.value}`), 1)
            ], 2)) : c("", !0),
            ee.value > 0 && u(s).showNoteHighlights ? (o(), n("div", yl, [
              e("div", fl, [
                (o(), n(D, null, j(z, (d) => e("button", {
                  key: d.value,
                  onClick: (C) => u(s).noteHighlightFilter = d.value,
                  class: G(["di-filter-btn", { active: u(s).noteHighlightFilter === d.value }])
                }, v(d.label), 11, bl)), 64))
              ])
            ])) : c("", !0),
            e("button", {
              onClick: Ee,
              class: G(["di-unannotated-btn", { active: u(s).showUnannotatedDetection }])
            }, [
              g(u(Gt), { style: { width: "14px", height: "14px" } }),
              e("span", null, v(u(s).showUnannotatedDetection ? "未登録検出 ON" : "未登録要素を検出"), 1),
              u(s).unannotatedElements.length > 0 ? (o(), n("span", gl, v(u(s).unannotatedElements.length), 1)) : c("", !0)
            ], 2),
            u(s).showUnannotatedDetection && u(s).unannotatedElements.length > 0 ? (o(), n("div", kl, [
              e("div", xl, [
                B(v(u(s).unannotatedElements.length) + "件検出: ", 1),
                Le.value.binding > 0 ? (o(), n("span", wl, "バインディング " + v(Le.value.binding), 1)) : c("", !0),
                Le.value.form > 0 ? (o(), n("span", $l, " / フォーム " + v(Le.value.form), 1)) : c("", !0),
                Le.value.action > 0 ? (o(), n("span", _l, " / アクション " + v(Le.value.action), 1)) : c("", !0)
              ]),
              e("div", Cl, [
                (o(!0), n(D, null, j(u(s).unannotatedElements, (d) => (o(), n("div", {
                  key: d.selector,
                  class: G(["di-unannotated-item", { "di-unannotated-item-active": u(s).hoveredUnannotatedSelector === d.selector, ["di-unannotated-item-" + d.category]: u(s).hoveredUnannotatedSelector === d.selector }]),
                  onMouseenter: (C) => Ye(d.selector),
                  onMouseleave: Pe
                }, [
                  e("span", {
                    class: G(["di-unannotated-category", "di-unannotated-cat-" + d.category])
                  }, v(d.category === "binding" ? "DB" : d.category === "form" ? "Form" : "Act"), 3),
                  e("span", Ml, v(d.text || d.tagName), 1),
                  e("button", {
                    onClick: (C) => u(s).quickAnnotate(d.selector, d.suggestedType),
                    class: "di-unannotated-register"
                  }, " 登録 ", 8, Tl),
                  e("button", {
                    onClick: (C) => Je(d.selector),
                    class: "di-unannotated-dismiss"
                  }, [
                    g(u(Ge), { style: { width: "10px", height: "10px" } })
                  ], 8, Sl)
                ], 42, Il))), 128))
              ])
            ])) : c("", !0),
            u(s).showUnannotatedDetection && u(s).unannotatedElements.length === 0 ? (o(), n("div", Dl, " 未登録の要素はありません ")) : c("", !0),
            P.value > 0 ? (o(), n("div", El, [
              e("div", Ul, [
                g(u(Ht), { style: { width: "14px", height: "14px", color: "#f59e0b" } }),
                e("span", null, v(P.value) + "件のメモが見つかりません", 1)
              ]),
              l[35] || (l[35] = e("div", { class: "di-broken-desc" }, "コード変更によりセレクタが壊れた可能性があります", -1)),
              e("div", Vl, [
                (o(!0), n(D, null, j(u(s).brokenAnnotations, (d) => {
                  var C, R;
                  return o(), n("div", {
                    key: d,
                    class: "di-broken-item"
                  }, [
                    e("div", Ll, [
                      e("div", Pl, v(((R = (C = u(s).elementConfigs[d]) == null ? void 0 : C.note) == null ? void 0 : R.text) || "(メモなし)"), 1),
                      e("div", Al, v(d), 1)
                    ]),
                    e("div", Bl, [
                      e("button", {
                        onClick: (ve) => u(s).startRemap(d),
                        class: "di-broken-remap-btn",
                        title: "新しい要素に再設定"
                      }, [
                        g(u(Ut), { style: { width: "12px", height: "12px" } }),
                        l[33] || (l[33] = B(" 再設定 ", -1))
                      ], 8, Fl),
                      e("button", {
                        onClick: (ve) => {
                          u(s).deleteElementConfig(d), u(s).detectBrokenAnnotations();
                        },
                        class: "di-broken-item-delete",
                        title: "削除"
                      }, [
                        g(u(nt), { style: { width: "12px", height: "12px" } })
                      ], 8, jl)
                    ])
                  ]);
                }), 128))
              ]),
              e("div", Nl, [
                e("button", {
                  onClick: h,
                  class: "di-broken-delete-btn"
                }, [
                  g(u(nt), { style: { width: "12px", height: "12px" } }),
                  l[34] || (l[34] = B(" まとめて削除 ", -1))
                ])
              ])
            ])) : c("", !0),
            e("div", ql, [
              e("div", Ol, [
                g(u(Lt), { style: { width: "16px", height: "16px", color: "#3b82f6" } }),
                l[36] || (l[36] = e("span", null, "CLIソース解析", -1))
              ]),
              e("div", Hl, [
                w(e("input", {
                  "onUpdate:modelValue": l[4] || (l[4] = (d) => y.value = d),
                  type: "text",
                  class: "di-analysis-url",
                  placeholder: "/dev-inspector-analysis.json"
                }, null, 512), [
                  [U, y.value]
                ])
              ]),
              e("div", Rl, [
                e("button", {
                  onClick: re,
                  class: "di-analysis-btn",
                  disabled: r.value
                }, [
                  r.value ? (o(), we(u(Et), {
                    key: 0,
                    class: "di-spin",
                    style: { width: "14px", height: "14px" }
                  })) : (o(), we(u(yt), {
                    key: 1,
                    style: { width: "14px", height: "14px" }
                  })),
                  l[37] || (l[37] = e("span", null, "読み込み", -1))
                ], 8, zl),
                e("button", {
                  onClick: fe,
                  class: "di-analysis-btn di-analysis-btn-apply",
                  disabled: !u(s).analysisData
                }, [
                  g(u(ol), { style: { width: "14px", height: "14px" } }),
                  l[38] || (l[38] = e("span", null, "ページに適用", -1))
                ], 8, Gl)
              ]),
              _.value ? (o(), n("div", Yl, v(_.value), 1)) : c("", !0),
              u(s).analysisResults.length > 0 ? (o(), n("div", Kl, [
                e("span", Xl, v(u(s).analysisResults.filter((d) => d.matched).length), 1),
                e("span", null, "/ " + v(u(s).analysisResults.length) + " 要素がマッチ", 1)
              ])) : c("", !0),
              u(s).analysisResults.length > 0 ? (o(), n("div", Zl, [
                l[40] || (l[40] = e("span", { class: "di-filter-label" }, "表示フィルター:", -1)),
                e("div", Jl, [
                  (o(), n(D, null, j(q, (d) => e("button", {
                    key: d.value,
                    onClick: (C) => u(s).analysisFilter = d.value,
                    class: G(["di-filter-btn", { active: u(s).analysisFilter === d.value }])
                  }, v(d.label), 11, Ql)), 64))
                ]),
                u(s).hiddenAnalysisSelectors.size > 0 ? (o(), n("div", Wl, [
                  e("button", {
                    onClick: _e,
                    class: "di-restore-btn",
                    disabled: L.value
                  }, [
                    L.value ? (o(), we(u(Et), {
                      key: 0,
                      class: "di-spin",
                      style: { width: "12px", height: "12px" }
                    })) : c("", !0),
                    L.value ? (o(), n("span", ts, "リセット中...")) : (o(), n("span", ls, "非表示 (" + v(u(s).hiddenAnalysisSelectors.size) + ") をリセット", 1))
                  ], 8, es),
                  e("button", {
                    onClick: l[5] || (l[5] = (d) => u(s).downloadChanges()),
                    class: "di-export-changes-btn",
                    title: "削除した要素をエクスポート (CLI merge用)"
                  }, [
                    g(u(yt), { style: { width: "12px", height: "12px" } }),
                    l[39] || (l[39] = e("span", null, "変更をエクスポート", -1))
                  ])
                ])) : c("", !0)
              ])) : c("", !0),
              Q.value.pageLoad.length > 0 || Q.value.action.length > 0 ? (o(), n("div", ss, [
                Q.value.pageLoad.length > 0 ? (o(), n("div", os, [
                  e("div", ns, [
                    l[41] || (l[41] = e("span", { class: "di-api-group-icon" }, "📡", -1)),
                    l[42] || (l[42] = e("span", null, "画面読込時のAPI", -1)),
                    e("span", is, v(Q.value.pageLoad.length), 1)
                  ]),
                  e("div", as, [
                    (o(!0), n(D, null, j(Q.value.pageLoad, (d) => (o(), n("div", {
                      key: d.endpoint + d.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: G(["di-api-method", "di-api-method-" + d.method.toLowerCase()])
                      }, v(d.method), 3),
                      e("code", ds, v(d.endpoint || d.composable), 1),
                      d.variable ? (o(), n("span", us, "→ " + v(d.variable), 1)) : c("", !0),
                      e("span", rs, v(de[d.loadTrigger]), 1)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                Q.value.action.length > 0 ? (o(), n("div", cs, [
                  e("div", vs, [
                    l[43] || (l[43] = e("span", { class: "di-api-group-icon" }, "👆", -1)),
                    l[44] || (l[44] = e("span", null, "アクション時のAPI", -1)),
                    e("span", ps, v(Q.value.action.length), 1)
                  ]),
                  e("div", ms, [
                    (o(!0), n(D, null, j(Q.value.action, (d) => (o(), n("div", {
                      key: d.endpoint + d.method,
                      class: "di-api-group-item"
                    }, [
                      e("span", {
                        class: G(["di-api-method", "di-api-method-" + d.method.toLowerCase()])
                      }, v(d.method), 3),
                      e("code", hs, v(d.endpoint || d.composable), 1),
                      d.variable ? (o(), n("span", ys, "→ " + v(d.variable), 1)) : c("", !0)
                    ]))), 128))
                  ])
                ])) : c("", !0)
              ])) : c("", !0)
            ])
          ]),
          e("div", fs, [
            e("div", bs, [
              e("button", {
                onClick: l[6] || (l[6] = (d) => u(s).showCrossSearch = !u(s).showCrossSearch),
                class: G(["di-cross-search-toggle", { active: u(s).showCrossSearch }])
              }, [
                g(u(nl), { style: { width: "14px", height: "14px" } }),
                l[45] || (l[45] = e("span", null, "横断検索", -1))
              ], 2),
              u(s).showCrossSearch ? (o(), n("div", gs, [
                e("div", ks, [
                  (o(), n(D, null, j(W, (d) => e("button", {
                    key: d.value,
                    onClick: (C) => u(s).crossSearchMode = d.value,
                    class: G(["di-filter-btn", { active: u(s).crossSearchMode === d.value }])
                  }, v(d.label), 11, xs)), 64))
                ]),
                w(e("input", {
                  "onUpdate:modelValue": l[7] || (l[7] = (d) => u(s).crossSearchQuery = d),
                  type: "text",
                  class: "di-cross-search-input",
                  placeholder: le.value
                }, null, 8, ws), [
                  [U, u(s).crossSearchQuery]
                ]),
                u(s).crossSearchQuery.trim() ? (o(), n("div", $s, v(u(s).crossSearchResults.length) + "件 (" + v(Se.value) + "画面) ", 1)) : c("", !0),
                te.value.length > 0 ? (o(), n("div", _s, [
                  (o(!0), n(D, null, j(te.value, (d) => (o(), n("div", {
                    key: d.pagePath,
                    class: "di-cross-search-group"
                  }, [
                    e("div", Cs, [
                      B(v(d.pagePath) + " ", 1),
                      d.pageName !== d.pagePath ? (o(), n("span", Is, "(" + v(d.pageName) + ")", 1)) : c("", !0)
                    ]),
                    (o(!0), n(D, null, j(d.items, (C, R) => (o(), n("div", {
                      key: R,
                      class: G(["di-cross-search-item", C.elementType ? "di-cross-item-" + C.elementType : ""]),
                      onClick: (ve) => C.selector && u(s).startEditing(C.selector)
                    }, [
                      e("span", Ts, v(C.matchedField), 1),
                      C.matchContext ? (o(), n("span", Ss, v(C.matchContext), 1)) : c("", !0)
                    ], 10, Ms))), 128))
                  ]))), 128))
                ])) : c("", !0)
              ])) : c("", !0)
            ]),
            e("div", Ds, [
              e("button", {
                onClick: l[8] || (l[8] = (d) => u(s).showScreenFlow = !u(s).showScreenFlow),
                class: G(["di-screen-flow-toggle", { active: u(s).showScreenFlow }])
              }, [
                g(u(Wt), { style: { width: "14px", height: "14px" } }),
                l[46] || (l[46] = e("span", null, "画面フロー", -1)),
                u(s).screenFlowData.edges.length > 0 ? (o(), n("span", Es, v(u(s).screenFlowData.nodes.length) + "画面 / " + v(u(s).screenFlowData.edges.length) + "遷移 ", 1)) : c("", !0)
              ], 2),
              u(s).showScreenFlow ? (o(), n("div", Us, [
                u(s).screenFlowData.edges.length === 0 ? (o(), n("div", Vs, " navigate型のアクションが登録されていません ")) : c("", !0),
                (o(!0), n(D, null, j(We.value, (d) => (o(), n("div", {
                  key: d.node.path,
                  class: "di-flow-group"
                }, [
                  e("div", {
                    class: G(["di-flow-node", { "di-flow-node-current": d.node.path === Qe.value }])
                  }, [
                    e("span", Ls, v(d.node.path), 1),
                    d.node.name !== d.node.path ? (o(), n("span", Ps, "(" + v(d.node.name) + ")", 1)) : c("", !0)
                  ], 2),
                  (o(!0), n(D, null, j(d.edges, (C) => (o(), n("div", {
                    key: C.from + C.to,
                    class: "di-flow-edge",
                    onClick: (R) => et(C.selector)
                  }, [
                    l[47] || (l[47] = e("span", { class: "di-flow-arrow" }, "→", -1)),
                    e("span", Bs, v(C.to), 1),
                    C.label ? (o(), n("span", Fs, "[" + v(C.label) + "]", 1)) : c("", !0)
                  ], 8, As))), 128))
                ]))), 128)),
                u(s).screenFlowData.orphanPages.length > 0 ? (o(), n("div", js, [
                  l[48] || (l[48] = e("div", { class: "di-flow-orphans-header" }, "遷移なしのページ", -1)),
                  (o(!0), n(D, null, j(u(s).screenFlowData.orphanPages, (d) => (o(), n("span", {
                    key: d.path,
                    class: "di-flow-orphan-item"
                  }, v(d.path), 1))), 128))
                ])) : c("", !0)
              ])) : c("", !0)
            ]),
            $.value ? (o(), n(D, { key: 0 }, [
              e("div", Ns, [
                e("div", qs, [
                  e("h2", Os, v($.value.name), 1),
                  e("button", {
                    onClick: l[9] || (l[9] = (d) => u(s).editingScreen = !0),
                    class: "di-screen-edit-btn",
                    title: "画面情報を編集"
                  }, [
                    g(u(Vt), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                $.value.description ? (o(), n("p", Hs, v($.value.description), 1)) : c("", !0),
                $.value.auth ? (o(), n("div", Rs, [
                  $.value.auth.required ? (o(), n("span", zs, [
                    g(u(el), { style: { width: "11px", height: "11px" } }),
                    l[49] || (l[49] = B(" ログイン必須 ", -1))
                  ])) : c("", !0),
                  (o(!0), n(D, null, j($.value.auth.roles || [], (d) => (o(), n("span", {
                    key: d,
                    class: "di-auth-badge di-auth-role"
                  }, [
                    g(u(il), { style: { width: "11px", height: "11px" } }),
                    B(" " + v(d), 1)
                  ]))), 128)),
                  $.value.auth.description ? (o(), n("span", Gs, v($.value.auth.description), 1)) : c("", !0)
                ])) : c("", !0)
              ]),
              $.value.componentPath ? (o(), n("div", Ys, [
                e("div", Ks, [
                  g(u(St), { style: { width: "16px", height: "16px" } }),
                  l[50] || (l[50] = e("span", null, "Component Path", -1))
                ]),
                e("code", Xs, v($.value.componentPath), 1)
              ])) : c("", !0),
              $.value.figmaUrl ? (o(), n("div", Zs, [
                e("div", Js, [
                  g(u(Yt), { style: { width: "16px", height: "16px" } }),
                  l[51] || (l[51] = e("span", null, "Figma Design", -1))
                ]),
                e("a", {
                  href: $.value.figmaUrl,
                  target: "_blank",
                  class: "di-link-purple"
                }, v($.value.figmaUrl), 9, Qs)
              ])) : c("", !0),
              $.value.apis.length ? (o(), n("div", Ws, [
                e("div", eo, [
                  g(u(Lt), { style: { width: "16px", height: "16px" } }),
                  l[52] || (l[52] = e("span", null, "API Endpoints", -1))
                ]),
                e("div", to, [
                  (o(!0), n(D, null, j($.value.apis, (d, C) => (o(), n("div", {
                    key: C,
                    class: "di-api-item"
                  }, [
                    e("span", {
                      class: "di-method-badge",
                      style: Ie({ backgroundColor: ne[d.method] + "20", color: ne[d.method] })
                    }, v(d.method), 5),
                    e("div", lo, [
                      e("code", so, v(d.endpoint), 1),
                      d.description ? (o(), n("p", oo, v(d.description), 1)) : c("", !0)
                    ]),
                    d.loadTiming ? (o(), n("span", no, v(d.loadTiming === "onMount" ? "読込時" : d.loadTiming === "action" ? "アクション" : "条件付き"), 1)) : c("", !0)
                  ]))), 128))
                ])
              ])) : c("", !0),
              $.value.notes ? (o(), n("div", io, [
                e("div", ao, [
                  g(u(Ot), { style: { width: "16px", height: "16px" } }),
                  l[53] || (l[53] = e("span", null, "Notes", -1))
                ]),
                e("p", uo, v($.value.notes), 1)
              ])) : c("", !0)
            ], 64)) : (o(), n("div", ro, [
              g(u(ft), { style: { width: "48px", height: "48px", color: "#334155" } }),
              l[55] || (l[55] = e("p", null, [
                B("この画面の仕様情報は"),
                e("br"),
                B("まだ登録されていません")
              ], -1)),
              e("button", {
                onClick: l[10] || (l[10] = (d) => u(s).editingScreen = !0),
                class: "di-screen-register-btn"
              }, [
                g(u(Vt), { style: { width: "14px", height: "14px" } }),
                l[54] || (l[54] = B(" 画面情報を登録 ", -1))
              ])
            ])),
            e("div", co, [
              e("div", vo, [
                e("div", po, [
                  g(u(sl), { style: { width: "16px", height: "16px" } }),
                  l[56] || (l[56] = e("span", null, "登録済み要素", -1)),
                  e("span", mo, v(ue.value), 1)
                ])
              ]),
              e("div", ho, [
                e("div", yo, [
                  g(u(Ze), { style: { width: "16px", height: "16px", color: "#a78bfa" } }),
                  l[57] || (l[57] = e("span", null, "マスタ定義", -1)),
                  ce.value > 0 ? (o(), n("span", fo, v(ce.value), 1)) : c("", !0),
                  e("button", {
                    onClick: l[11] || (l[11] = (d) => ke()),
                    class: "di-btn-icon",
                    style: { "margin-left": "auto" },
                    title: "新規追加"
                  }, [
                    g(u($t), { style: { width: "14px", height: "14px" } })
                  ])
                ]),
                ce.value > 0 ? (o(!0), n(D, { key: 0 }, j(Ve.value, (d, C) => (o(), n("div", {
                  key: C,
                  class: "di-master-table-group"
                }, [
                  e("div", bo, v(C), 1),
                  (o(!0), n(D, null, j(d, (R) => (o(), n("div", {
                    key: R.id,
                    class: "di-master-item",
                    onClick: (ve) => ke(R.id)
                  }, [
                    e("div", ko, [
                      e("span", xo, "." + v(R.column), 1),
                      R.columnType ? (o(), n("span", wo, v(R.columnType), 1)) : c("", !0),
                      e("span", $o, v(R.name), 1)
                    ]),
                    e("div", _o, [
                      (o(!0), n(D, null, j(R.entries.slice(0, 5), (ve, Ue) => (o(), n("span", {
                        key: Ue,
                        class: "di-master-entry-chip",
                        style: Ie(ve.color ? { borderColor: ve.color, color: ve.color } : {})
                      }, v(ve.value) + "=" + v(ve.label), 5))), 128)),
                      R.entries.length > 5 ? (o(), n("span", Co, "+" + v(R.entries.length - 5), 1)) : c("", !0)
                    ])
                  ], 8, go))), 128))
                ]))), 128)) : (o(), n("div", {
                  key: 1,
                  class: "di-master-empty",
                  onClick: l[12] || (l[12] = (d) => ke())
                }, [...l[58] || (l[58] = [
                  e("span", null, "テーブル.カラムのマスタ値を定義", -1)
                ])]))
              ]),
              (o(), we(Oe, { to: "body" }, [
                k.value ? (o(), n("div", {
                  key: 0,
                  "data-dev-inspector": "",
                  class: "di-modal-overlay",
                  onClick: l[21] || (l[21] = be((d) => k.value = !1, ["self"]))
                }, [
                  e("div", Io, [
                    e("div", Mo, [
                      e("h3", null, v(J.value ? "マスタ定義を編集" : "新規マスタ定義"), 1),
                      e("button", {
                        onClick: l[13] || (l[13] = (d) => k.value = !1),
                        class: "di-close-btn"
                      }, [
                        g(u(Ge), { style: { width: "16px", height: "16px" } })
                      ])
                    ]),
                    e("div", To, [
                      e("div", So, [
                        e("div", Do, [
                          l[59] || (l[59] = e("label", null, "テーブル", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[14] || (l[14] = (d) => I.value.table = d),
                            placeholder: "orders",
                            disabled: !!J.value
                          }, null, 8, Eo), [
                            [U, I.value.table]
                          ])
                        ]),
                        e("div", Uo, [
                          l[60] || (l[60] = e("label", null, "カラム", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[15] || (l[15] = (d) => I.value.column = d),
                            placeholder: "status",
                            disabled: !!J.value
                          }, null, 8, Vo), [
                            [U, I.value.column]
                          ])
                        ])
                      ]),
                      e("div", Lo, [
                        e("div", Po, [
                          l[61] || (l[61] = e("label", null, "表示名", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[16] || (l[16] = (d) => I.value.name = d),
                            placeholder: "ステータス"
                          }, null, 512), [
                            [U, I.value.name]
                          ])
                        ]),
                        e("div", Ao, [
                          l[62] || (l[62] = e("label", null, "型", -1)),
                          w(e("input", {
                            "onUpdate:modelValue": l[17] || (l[17] = (d) => I.value.columnType = d),
                            placeholder: "integer"
                          }, null, 512), [
                            [U, I.value.columnType]
                          ])
                        ])
                      ]),
                      e("div", Bo, [
                        l[63] || (l[63] = e("label", null, "説明", -1)),
                        w(e("input", {
                          "onUpdate:modelValue": l[18] || (l[18] = (d) => I.value.description = d),
                          placeholder: "注文のステータスを管理"
                        }, null, 512), [
                          [U, I.value.description]
                        ])
                      ]),
                      e("div", Fo, [
                        l[64] || (l[64] = e("label", null, "マスタ値", -1)),
                        e("button", {
                          onClick: Me,
                          class: "di-btn-icon",
                          title: "追加"
                        }, [
                          g(u($t), { style: { width: "14px", height: "14px" } })
                        ])
                      ]),
                      e("div", jo, [
                        (o(!0), n(D, null, j(I.value.entries, (d, C) => (o(), n("div", {
                          key: C,
                          class: "di-master-entry-row"
                        }, [
                          w(e("input", {
                            "onUpdate:modelValue": (R) => d.value = R,
                            placeholder: "値",
                            class: "di-master-entry-value"
                          }, null, 8, No), [
                            [U, d.value]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (R) => d.label = R,
                            placeholder: "ラベル",
                            class: "di-master-entry-label"
                          }, null, 8, qo), [
                            [U, d.label]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (R) => d.color = R,
                            placeholder: "#色",
                            class: "di-master-entry-color"
                          }, null, 8, Oo), [
                            [U, d.color]
                          ]),
                          w(e("input", {
                            "onUpdate:modelValue": (R) => d.description = R,
                            placeholder: "説明",
                            class: "di-master-entry-desc"
                          }, null, 8, Ho), [
                            [U, d.description]
                          ]),
                          e("button", {
                            onClick: (R) => $e(C),
                            class: "di-btn-icon di-btn-icon-danger"
                          }, [
                            g(u(Ge), { style: { width: "12px", height: "12px" } })
                          ], 8, Ro)
                        ]))), 128))
                      ])
                    ]),
                    e("div", zo, [
                      J.value ? (o(), n("button", {
                        key: 0,
                        onClick: l[19] || (l[19] = (d) => {
                          Te(J.value), k.value = !1;
                        }),
                        class: "di-btn-small di-btn-danger"
                      }, "削除")) : c("", !0),
                      l[65] || (l[65] = e("div", { style: { flex: "1" } }, null, -1)),
                      e("button", {
                        onClick: l[20] || (l[20] = (d) => k.value = !1),
                        class: "di-btn-small"
                      }, "キャンセル"),
                      e("button", {
                        onClick: xe,
                        class: "di-btn-small di-btn-primary",
                        disabled: !I.value.table || !I.value.column
                      }, "保存", 8, Go)
                    ])
                  ])
                ])) : c("", !0)
              ])),
              ue.value > 0 ? (o(), n("div", Yo, [
                e("button", {
                  onClick: x,
                  class: "di-btn-green"
                }, [
                  g(u(Qt), { style: { width: "16px", height: "16px" } }),
                  l[66] || (l[66] = B(" Git管理用に保存 ", -1))
                ]),
                e("button", {
                  onClick: oe,
                  class: "di-btn-blue"
                }, [
                  g(u(Zt), { style: { width: "16px", height: "16px" } }),
                  l[67] || (l[67] = B(" 画面仕様書 (xlsx) 出力 ", -1))
                ]),
                e("button", {
                  onClick: l[22] || (l[22] = (d) => u(s).downloadSddSpec()),
                  class: "di-btn-green-outline"
                }, [
                  g(u(ft), { style: { width: "16px", height: "16px" } }),
                  l[68] || (l[68] = B(" SDD仕様書 (md) ", -1))
                ]),
                e("button", {
                  onClick: l[23] || (l[23] = (d) => u(s).downloadClientSpec()),
                  class: "di-btn-blue-outline"
                }, [
                  g(u(ft), { style: { width: "16px", height: "16px" } }),
                  l[69] || (l[69] = B(" 納品用仕様書 (md) ", -1))
                ])
              ])) : c("", !0),
              ue.value > 0 ? (o(), n("p", Ko, [...l[70] || (l[70] = [
                B(" JSON: ", -1),
                e("code", null, "dev-annotations.json", -1),
                B(" に配置してcommit ", -1)
              ])])) : c("", !0),
              e("div", Xo, [
                e("button", {
                  onClick: l[24] || (l[24] = (d) => T.value = !0),
                  class: "di-btn-small"
                }, [
                  g(u(yt), { style: { width: "14px", height: "14px" } }),
                  l[71] || (l[71] = B(" エクスポート ", -1))
                ]),
                e("button", {
                  onClick: l[25] || (l[25] = (d) => A.value = !0),
                  class: "di-btn-small"
                }, [
                  g(u(dl), { style: { width: "14px", height: "14px" } }),
                  l[72] || (l[72] = B(" インポート ", -1))
                ]),
                ue.value > 0 ? (o(), n("button", {
                  key: 0,
                  onClick: V,
                  class: "di-btn-small di-btn-danger"
                }, [
                  g(u(nt), { style: { width: "14px", height: "14px" } }),
                  l[73] || (l[73] = B(" 全削除 ", -1))
                ])) : c("", !0)
              ])
            ])
          ]),
          l[74] || (l[74] = e("div", { class: "di-footer" }, [
            e("kbd", null, "Ctrl"),
            e("span", null, "+"),
            e("kbd", null, "Shift"),
            e("span", null, "+"),
            e("kbd", null, "D"),
            e("span", { class: "di-footer-text" }, "で開発者モード切替")
          ], -1))
        ])) : c("", !0)
      ])),
      (o(), we(Oe, { to: "body" }, [
        u(s).isEnabled ? (o(), n("div", Zo, [...l[75] || (l[75] = [
          e("span", { class: "di-indicator-dot" }, null, -1),
          B(" Developer Mode ", -1)
        ])])) : c("", !0)
      ])),
      (o(), we(Oe, { to: "body" }, [
        T.value ? (o(), n("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[27] || (l[27] = be((d) => T.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", Jo, [
            l[77] || (l[77] = e("h3", { class: "di-modal-title" }, "設定をエクスポート", -1)),
            e("textarea", {
              readonly: "",
              value: u(s).exportConfigs(),
              class: "di-modal-textarea"
            }, null, 8, Qo),
            e("div", Wo, [
              e("button", {
                onClick: l[26] || (l[26] = (d) => T.value = !1),
                class: "di-btn-small"
              }, "閉じる"),
              e("button", {
                onClick: ae,
                class: "di-btn-small di-btn-gray"
              }, [
                g(u(yt), { style: { width: "14px", height: "14px" } }),
                l[76] || (l[76] = B(" ファイル保存 ", -1))
              ]),
              e("button", {
                onClick: ye,
                class: "di-btn-small di-btn-primary"
              }, "コピー")
            ])
          ])
        ])) : c("", !0)
      ])),
      (o(), we(Oe, { to: "body" }, [
        A.value ? (o(), n("div", {
          key: 0,
          class: "di-modal-overlay",
          onClick: l[30] || (l[30] = be((d) => A.value = !1, ["self"])),
          "data-dev-inspector": ""
        }, [
          e("div", en, [
            l[79] || (l[79] = e("h3", { class: "di-modal-title" }, "設定をインポート", -1)),
            e("label", tn, [
              e("input", {
                type: "file",
                accept: ".json",
                onChange: E
              }, null, 32),
              l[78] || (l[78] = e("span", null, "JSONファイルをドラッグまたはクリック", -1))
            ]),
            w(e("textarea", {
              "onUpdate:modelValue": l[28] || (l[28] = (d) => H.value = d),
              placeholder: "またはJSONを直接貼り付け...",
              class: "di-modal-textarea di-modal-textarea-input"
            }, null, 512), [
              [U, H.value]
            ]),
            K.value ? (o(), n("p", ln, v(K.value), 1)) : c("", !0),
            e("div", sn, [
              e("button", {
                onClick: l[29] || (l[29] = (d) => {
                  A.value = !1, H.value = "", K.value = "";
                }),
                class: "di-btn-small"
              }, " キャンセル "),
              e("button", {
                onClick: De,
                disabled: !H.value,
                class: "di-btn-small di-btn-primary"
              }, " インポート ", 8, on)
            ])
          ])
        ])) : c("", !0)
      ]))
    ], 64));
  }
}), gt = (N, s) => {
  const T = N.__vccOpts || N;
  for (const [A, H] of s)
    T[A] = H;
  return T;
}, an = /* @__PURE__ */ gt(nn, [["__scopeId", "data-v-a9d8701c"]]), dn = { class: "di-editor-modal" }, un = { class: "di-editor-header" }, rn = { class: "di-header-actions" }, cn = {
  key: 0,
  class: "di-static-indicator"
}, vn = {
  key: 1,
  class: "di-binding-indicator"
}, pn = {
  key: 0,
  class: "di-binding-source"
}, mn = { class: "di-editor-tabs" }, hn = { class: "di-editor-content" }, yn = { class: "di-form-group" }, fn = { class: "di-display-type-grid" }, bn = ["onClick"], gn = { class: "di-display-type-desc" }, kn = {
  key: 0,
  class: "di-field-tags"
}, xn = { class: "di-field-tags-list" }, wn = { class: "di-field-tag-name" }, $n = {
  key: 0,
  class: "di-field-tag-type"
}, _n = ["onClick"], Cn = {
  key: 1,
  class: "di-binding-selector"
}, In = { class: "di-form-group" }, Mn = { class: "di-form-label" }, Tn = { class: "di-binding-search-wrapper" }, Sn = {
  key: 0,
  class: "di-binding-list"
}, Dn = ["onClick"], En = { class: "di-binding-item-main" }, Un = { class: "di-binding-name" }, Vn = { class: "di-binding-type" }, Ln = {
  key: 0,
  class: "di-binding-component"
}, Pn = {
  key: 1,
  class: "di-binding-empty"
}, An = {
  key: 2,
  class: "di-form-divider"
}, Bn = { class: "di-form-row" }, Fn = { class: "di-form-group di-suggest-wrapper" }, jn = {
  key: 0,
  class: "di-suggest-list"
}, Nn = ["onMousedown"], qn = { class: "di-form-group di-suggest-wrapper" }, On = {
  key: 0,
  class: "di-suggest-list"
}, Hn = ["onMousedown"], Rn = { class: "di-form-group" }, zn = ["value"], Gn = ["disabled"], Yn = {
  key: 3,
  class: "di-master-inline"
}, Kn = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, Xn = {
  key: 0,
  class: "di-master-inline-section"
}, Zn = {
  key: 0,
  class: "di-master-entries-table"
}, Jn = ["onUpdate:modelValue"], Qn = ["onUpdate:modelValue"], Wn = ["onUpdate:modelValue"], ei = ["onClick"], ti = {
  key: 4,
  class: "di-form-group"
}, li = { class: "di-stored-calc-toggle" }, si = {
  key: 0,
  class: "di-condition-badge"
}, oi = {
  key: 5,
  class: "di-stored-calc-section"
}, ni = { class: "di-form-group" }, ii = { class: "di-form-group di-suggest-wrapper" }, ai = { class: "di-stored-calc-tags" }, di = ["onClick"], ui = {
  key: 0,
  class: "di-suggest-list"
}, ri = ["onMousedown"], ci = { class: "di-form-group" }, vi = {
  key: 1,
  class: "di-form-group di-suggest-wrapper"
}, pi = {
  key: 0,
  class: "di-calc-tag"
}, mi = ["onClick"], hi = {
  key: 1,
  class: "di-calc-text"
}, yi = ["placeholder"], fi = {
  key: 0,
  class: "di-suggest-list"
}, bi = ["onMousedown"], gi = {
  key: 2,
  class: "di-form-group"
}, ki = { class: "di-condition-toggle" }, xi = {
  key: 0,
  class: "di-condition-badge"
}, wi = {
  key: 0,
  class: "di-condition-section"
}, $i = { class: "di-form-group" }, _i = { class: "di-form-group di-suggest-wrapper" }, Ci = { class: "di-form-row" }, Ii = { class: "di-form-group" }, Mi = {
  key: 0,
  class: "di-form-group"
}, Ti = { class: "di-form-row" }, Si = { class: "di-form-group" }, Di = {
  class: "di-form-group",
  style: { flex: "0 0 80px" }
}, Ei = { class: "di-form-row" }, Ui = { class: "di-form-group" }, Vi = { class: "di-form-group" }, Li = { class: "di-form-group" }, Pi = { class: "di-form-group" }, Ai = { class: "di-form-group" }, Bi = { class: "di-form-group" }, Fi = ["placeholder"], ji = {
  key: 0,
  class: "di-form-group"
}, Ni = { class: "di-form-group" }, qi = { class: "di-form-group" }, Oi = { class: "di-form-group" }, Hi = {
  key: 0,
  class: "di-field-tags"
}, Ri = { class: "di-field-tags-list" }, zi = { class: "di-field-tag-name" }, Gi = {
  key: 0,
  class: "di-field-tag-type"
}, Yi = ["onClick"], Ki = {
  key: 1,
  class: "di-binding-selector"
}, Xi = { class: "di-form-group" }, Zi = { class: "di-form-label" }, Ji = { class: "di-binding-search-wrapper" }, Qi = {
  key: 0,
  class: "di-binding-list"
}, Wi = ["onClick"], ea = { class: "di-binding-item-main" }, ta = { class: "di-binding-name" }, la = { class: "di-binding-type" }, sa = {
  key: 0,
  class: "di-binding-component"
}, oa = {
  key: 2,
  class: "di-master-inline"
}, na = {
  key: 0,
  class: "di-condition-badge",
  style: { background: "#a78bfa" }
}, ia = {
  key: 0,
  class: "di-master-inline-section"
}, aa = {
  key: 0,
  class: "di-master-entries-table"
}, da = ["onUpdate:modelValue"], ua = ["onUpdate:modelValue"], ra = ["onUpdate:modelValue"], ca = ["onClick"], va = { class: "di-condition-toggle" }, pa = {
  key: 0,
  class: "di-condition-badge"
}, ma = { class: "di-form-group di-suggest-wrapper" }, ha = { class: "di-calc-tags-input" }, ya = ["onClick"], fa = ["placeholder"], ba = { class: "di-form-group" }, ga = { class: "di-form-group" }, ka = { class: "di-form-group" }, xa = { class: "di-form-group" }, wa = { class: "di-editor-footer" }, $a = { class: "di-editor-actions" }, _a = /* @__PURE__ */ at({
  __name: "DevElementEditor",
  setup(N) {
    const s = dt(), T = f("datasource"), A = f(""), H = f(""), K = f(""), ne = f(""), se = f(""), ie = f(!1), $ = f([]), ue = f(""), ee = f(""), ge = f(""), ye = f(""), ae = f(!1), x = f([]), oe = X(() => {
      if (V.value.length > 0) {
        const p = V.value[0];
        if (p.table && p.column) return `${p.table}.${p.column}`;
      }
      return "";
    }), De = X(() => oe.value && s.getMasterDefinition(oe.value) || null), E = f("db_direct"), V = f([]), y = f(""), r = f(""), _ = f(""), Y = f(""), L = f(""), z = f([]), q = f(""), Q = f(!1), de = f(""), re = f(""), fe = f(""), P = f(""), h = f(""), k = f(!1), J = f(""), I = f([]), ce = f(""), Ve = f(!1), ke = f(""), xe = f(""), Me = f(""), $e = f(""), Te = f(""), _e = f(!1), W = f(""), le = f(""), te = f(""), Se = f(!1), Le = X(() => s.editingElementId !== null), Ee = X(() => s.editingElementId), Je = [
      { value: "db_direct", label: "DBカラム (そのまま)", icon: Ze, color: "#3b82f6", description: "DBの値をそのまま表示" },
      { value: "db_formatted", label: "DBカラム (整形)", icon: bt, color: "#8b5cf6", description: "DBの値を整形して表示" },
      { value: "calculated", label: "計算値", icon: Tt, color: "#f59e0b", description: "複数カラムから計算" },
      { value: "static", label: "固定文言", icon: al, color: "#10b981", description: "コード内の固定テキスト" },
      { value: "other", label: "その他メモ", icon: tl, color: "#94a3b8", description: "自由メモ" }
    ];
    it(Ee, (p) => {
      if (p) {
        const t = s.getElementConfig(p);
        try {
          const i = document.querySelector(p);
          if (i) {
            t != null && t.elementType ? T.value = t.elementType : T.value = s.detectElementType(i);
            const b = i.querySelector("[data-di-binding]") || (i.hasAttribute("data-di-binding") ? i : null) || i.closest("[data-di-binding]");
            if (b) {
              const M = b.getAttribute("data-di-binding"), F = b.getAttribute("data-di-db"), he = b.getAttribute("data-di-db-type"), st = b.getAttribute("data-di-db-comment");
              if (M && (te.value = M, le.value = "api", Se.value = !1), F) {
                const [_t, Ct] = F.split(".");
                _t && Ct && (V.value.push({
                  table: _t,
                  column: Ct,
                  type: he || void 0,
                  description: st || void 0
                }), E.value || (E.value = "db_direct"));
              }
            }
          }
        } catch (i) {
          console.warn("[DevInspector] Failed to read element:", i);
        }
        t != null && t.fieldInfoList && t.fieldInfoList.length > 0 ? V.value = t.fieldInfoList.map((i) => ({ ...i })) : t != null && t.fieldInfo && (V.value = [{ ...t.fieldInfo }]), y.value = "", r.value = "", _.value = "", Y.value = "", t != null && t.note && (W.value = t.note.text || W.value, E.value = t.note.displayType || E.value, L.value = t.note.formatDescription || "", de.value = t.note.sampleValue || "", re.value = t.note.decimalHandling || "", fe.value = t.note.unit || "", P.value = t.note.nullDisplay || "", h.value = t.note.displayFormat || "", lt(t.note.calcDescription || "", t.note.calcSources || []), k.value = t.note.storedCalc || !1, J.value = t.note.storedCalcLogic || "", I.value = t.note.storedCalcSources ? [...t.note.storedCalcSources] : [], ke.value = t.note.storedCalcTiming || "", xe.value = t.note.condition || "", Me.value = t.note.conditionColumn || "", $e.value = t.note.hiddenBehavior || "", Te.value = t.note.hiddenNote || "", _e.value = !!(t.note.condition || t.note.conditionColumn)), t != null && t.sourceBinding && (le.value = t.sourceBinding.type || le.value, te.value = t.sourceBinding.source || te.value, Se.value = t.sourceBinding.isStatic || !1), t != null && t.actionInfo && (A.value = t.actionInfo.type || "", H.value = t.actionInfo.target || "", K.value = t.actionInfo.method || "", ne.value = t.actionInfo.description || ""), t != null && t.formInfo && (se.value = t.formInfo.inputType || "", ie.value = t.formInfo.required || !1, $.value = t.formInfo.validation ? [...t.formInfo.validation] : [], ee.value = t.formInfo.placeholder || "", ge.value = t.formInfo.defaultValue || "", ye.value = t.formInfo.description || "");
      } else
        Ye();
    });
    function Ye() {
      T.value = "datasource", E.value = "db_direct", V.value = [], y.value = "", r.value = "", _.value = "", Y.value = "", L.value = "", de.value = "", re.value = "", fe.value = "", P.value = "", h.value = "", z.value = [], q.value = "", k.value = !1, J.value = "", I.value = [], ce.value = "", ke.value = "", xe.value = "", Me.value = "", $e.value = "", Te.value = "", _e.value = !1, W.value = "", le.value = "", te.value = "", Se.value = !1, A.value = "", H.value = "", K.value = "", ne.value = "", se.value = "", ie.value = !1, $.value = [], ue.value = "", ee.value = "", ge.value = "", ye.value = "", ae.value = !1, x.value = [];
    }
    function Pe() {
      s.stopEditing(), Ye();
    }
    function Qe() {
      if (Ee.value)
        try {
          const p = document.querySelector(Ee.value);
          if (!p) return;
          const t = s.autoDetectElementInfo(p, Ee.value);
          t.sourceBinding && (le.value = t.sourceBinding.type || "", te.value = t.sourceBinding.source || "", Se.value = t.sourceBinding.isStatic || !1, t.sourceBinding.isStatic && !E.value && (E.value = "static", W.value = W.value || "固定文言")), t.fieldInfo && (V.value.push({
            table: t.fieldInfo.table || "",
            column: t.fieldInfo.column || "",
            type: t.fieldInfo.type || void 0,
            description: t.fieldInfo.description || void 0
          }), E.value || (E.value = "db_direct")), t.note && !W.value && (W.value = t.note.text || "");
        } catch (p) {
          console.error("[DevInspector] Auto-detect failed:", p);
        }
    }
    function We() {
      if (!Ee.value) return;
      const p = [...V.value];
      (E.value === "db_direct" || E.value === "db_formatted") && y.value && r.value && p.push({
        table: y.value,
        column: r.value,
        type: _.value || void 0,
        description: Y.value || void 0
      });
      const t = p.length > 0 ? p : void 0, i = p.length > 0 ? p[0] : void 0, b = E.value === "db_direct" || E.value === "db_formatted", M = E.value || W.value ? {
        text: W.value || "",
        displayType: E.value,
        formatDescription: E.value === "db_formatted" && L.value || void 0,
        calcDescription: E.value === "calculated" && mt() || void 0,
        calcSources: E.value === "calculated" && ze().length > 0 ? ze() : void 0,
        // 保存済み計算値 (db_direct / db_formatted のみ)
        storedCalc: b && k.value ? !0 : void 0,
        storedCalcLogic: b && k.value && J.value || void 0,
        storedCalcSources: b && k.value && I.value.length > 0 ? I.value : void 0,
        storedCalcTiming: b && k.value && ke.value || void 0,
        sampleValue: de.value || void 0,
        decimalHandling: re.value || void 0,
        unit: fe.value || void 0,
        nullDisplay: P.value || void 0,
        displayFormat: h.value || void 0,
        condition: xe.value || void 0,
        conditionColumn: Me.value || void 0,
        hiddenBehavior: $e.value || void 0,
        hiddenNote: Te.value || void 0
      } : void 0, F = le.value ? {
        type: le.value,
        source: te.value || void 0,
        isStatic: Se.value
      } : void 0, he = T.value === "action" && A.value ? {
        type: A.value,
        target: H.value || void 0,
        method: K.value ? K.value : void 0,
        description: ne.value || void 0
      } : void 0, st = T.value === "form" ? {
        inputType: se.value || void 0,
        required: ie.value || void 0,
        validation: $.value.length > 0 ? $.value : void 0,
        placeholder: ee.value || void 0,
        defaultValue: ge.value || void 0,
        description: ye.value || void 0
      } : void 0;
      s.setElementConfig(Ee.value, {
        elementType: T.value,
        fieldInfo: i,
        fieldInfoList: t,
        actionInfo: he,
        formInfo: st,
        note: M,
        sourceBinding: F
      }), ae.value && oe.value && Fe(), Pe();
    }
    function et() {
      Ee.value && (s.deleteElementConfig(Ee.value), Pe());
    }
    const m = [
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
    ], l = f(""), d = f(!1), C = X(() => s.searchSchemaColumns(l.value).slice(0, 30));
    function R(p) {
      V.value.push({
        table: p.table,
        column: p.column,
        type: p.type || void 0,
        description: p.comment || void 0
      }), d.value = !1, l.value = "";
    }
    function ve() {
      !y.value || !r.value || (V.value.push({
        table: y.value,
        column: r.value,
        type: _.value || void 0,
        description: Y.value || void 0
      }), y.value = "", r.value = "", _.value = "", Y.value = "");
    }
    function Ue(p) {
      V.value.splice(p, 1);
    }
    const je = X(() => s.getSchemaColumns().length > 0), Ae = f(!1), Be = f(!1), He = X(() => {
      var b;
      const p = /* @__PURE__ */ new Set();
      for (const M of Object.values(s.elementConfigs))
        if (M.fieldInfoList)
          for (const F of M.fieldInfoList)
            F.table && p.add(F.table);
        else (b = M.fieldInfo) != null && b.table && p.add(M.fieldInfo.table);
      for (const M of s.getSchemaColumns())
        p.add(M.table);
      const t = [...p].sort();
      if (!y.value) return t;
      const i = y.value.toLowerCase();
      return t.filter((M) => M.toLowerCase().includes(i));
    }), Re = X(() => {
      var b;
      const p = /* @__PURE__ */ new Set();
      for (const M of Object.values(s.elementConfigs))
        if (M.fieldInfoList)
          for (const F of M.fieldInfoList)
            F.column && (!y.value || F.table === y.value) && p.add(F.column);
        else (b = M.fieldInfo) != null && b.column && (!y.value || M.fieldInfo.table === y.value) && p.add(M.fieldInfo.column);
      for (const M of s.getSchemaColumns())
        (!y.value || M.table === y.value) && p.add(M.column);
      const t = [...p].sort();
      if (!r.value) return t;
      const i = r.value.toLowerCase();
      return t.filter((M) => M.toLowerCase().includes(i));
    });
    function ut() {
      setTimeout(() => {
        Ae.value = !1;
      }, 150);
    }
    function rt() {
      setTimeout(() => {
        Be.value = !1;
      }, 150);
    }
    function tt(p) {
      if (y.value = p, Ae.value = !1, r.value) {
        const t = s.getSchemaColumns().find((i) => i.table === p && i.column === r.value);
        t && (_.value = t.type || "", Y.value = t.comment || "");
      }
    }
    function ct(p) {
      if (r.value = p, Be.value = !1, y.value) {
        const t = s.getSchemaColumns().find((i) => i.table === y.value && i.column === p);
        t && (_.value = t.type || "", Y.value = t.comment || "");
      }
    }
    const Ke = X(() => {
      var b, M;
      const p = /* @__PURE__ */ new Set();
      for (const F of Object.values(s.elementConfigs))
        if (F.fieldInfoList)
          for (const he of F.fieldInfoList)
            he.table && he.column && p.add(`${he.table}.${he.column}`);
        else (b = F.fieldInfo) != null && b.table && ((M = F.fieldInfo) != null && M.column) && p.add(`${F.fieldInfo.table}.${F.fieldInfo.column}`);
      for (const F of s.getSchemaColumns())
        p.add(F.fullName);
      const t = [...p].sort();
      if (!q.value) return t;
      const i = q.value.trim().toLowerCase();
      if (/^[a-z0-9_.]+$/i.test(i)) {
        const F = t.filter((he) => he.toLowerCase().includes(i));
        if (F.length > 0) return F;
      }
      return t;
    });
    function a(p) {
      q.value.trim() && z.value.push({ type: "text", value: q.value }), z.value.push({ type: "tag", value: p }), q.value = "";
    }
    function vt(p) {
      z.value.splice(p, 1);
    }
    function pt(p) {
      if (p.key === "Backspace" && !q.value && z.value.length > 0) {
        const t = z.value.pop();
        t.type === "text" && (q.value = t.value);
      }
    }
    function Z() {
      setTimeout(() => {
        Q.value = !1;
      }, 150);
    }
    const pe = X(() => {
      var b, M;
      const p = /* @__PURE__ */ new Set();
      for (const F of s.getSchemaColumns())
        p.add(F.fullName);
      for (const F of Object.values(s.elementConfigs))
        if (F.fieldInfoList)
          for (const he of F.fieldInfoList)
            he.table && he.column && p.add(`${he.table}.${he.column}`);
        else (b = F.fieldInfo) != null && b.table && ((M = F.fieldInfo) != null && M.column) && p.add(`${F.fieldInfo.table}.${F.fieldInfo.column}`);
      const t = [...p].sort();
      if (!ce.value) return t;
      const i = ce.value.trim().toLowerCase();
      return t.filter((F) => F.toLowerCase().includes(i));
    });
    function Xe() {
      setTimeout(() => {
        Ve.value = !1;
      }, 150);
    }
    function Ne() {
      const p = ce.value.trim();
      p && !I.value.includes(p) && I.value.push(p), ce.value = "";
    }
    function ot(p) {
      I.value.includes(p) || I.value.push(p), ce.value = "";
    }
    function mt() {
      const p = z.value.map((t) => t.value);
      return q.value.trim() && p.push(q.value.trim()), p.join(" ").replace(/\s+/g, " ").trim();
    }
    function ze() {
      return z.value.filter((p) => p.type === "tag").map((p) => p.value);
    }
    function lt(p, t) {
      if (!p && t.length === 0) {
        z.value = [], q.value = "";
        return;
      }
      if (t.length === 0) {
        z.value = [], q.value = p;
        return;
      }
      const i = [];
      let b = p;
      for (const F of t) {
        const he = b.indexOf(F);
        if (he >= 0) {
          const st = b.substring(0, he).trim();
          st && i.push({ type: "text", value: st }), i.push({ type: "tag", value: F }), b = b.substring(he + F.length);
        }
      }
      const M = b.trim();
      M && i.push({ type: "text", value: M }), i.length === 0 ? q.value = p : (z.value = i, q.value = "");
    }
    function kt() {
      const p = ue.value.trim();
      p && !$.value.includes(p) && $.value.push(p), ue.value = "";
    }
    function xt(p) {
      $.value.splice(p, 1);
    }
    function wt(p) {
      p.key === "Backspace" && !ue.value && $.value.length > 0 && $.value.pop();
    }
    it(oe, (p) => {
      if (p) {
        const t = s.getMasterDefinition(p);
        t ? (x.value = t.entries.map((i) => ({ ...i })), ae.value = !0) : (x.value = [], ae.value = !1);
      } else
        x.value = [], ae.value = !1;
    });
    function S() {
      ae.value = !ae.value, ae.value && x.value.length === 0 && x.value.push({ value: "", label: "" });
    }
    function me() {
      x.value.push({ value: "", label: "" });
    }
    function Ce(p) {
      x.value.splice(p, 1);
    }
    function Fe() {
      var M;
      if (!oe.value) return;
      const [p, t] = oe.value.split(".");
      if (!p || !t) return;
      const i = x.value.filter((F) => F.value || F.label);
      if (i.length === 0) {
        s.deleteMasterDefinition(oe.value);
        return;
      }
      const b = s.getMasterDefinition(oe.value);
      s.setMasterDefinition({
        id: oe.value,
        table: p,
        column: t,
        name: (b == null ? void 0 : b.name) || t,
        columnType: (b == null ? void 0 : b.columnType) || ((M = V.value[0]) == null ? void 0 : M.type),
        description: b == null ? void 0 : b.description,
        entries: i,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    return (p, t) => (o(), we(Oe, { to: "body" }, [
      Le.value ? (o(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(Pe, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", dn, [
          e("div", un, [
            t[52] || (t[52] = e("h3", null, "要素情報を編集", -1)),
            e("div", rn, [
              e("button", {
                onClick: Qe,
                class: "di-btn-auto",
                title: "自動検出"
              }, [
                g(u(bt), { style: { width: "16px", height: "16px" } })
              ]),
              e("button", {
                onClick: Pe,
                class: "di-editor-close"
              }, [
                g(u(Ge), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          Se.value ? (o(), n("div", cn, [...t[53] || (t[53] = [
            e("span", { class: "di-static-badge" }, "固定文言", -1),
            e("span", { class: "di-static-hint" }, "このテキストはソースコードに直接記述されています", -1)
          ])])) : le.value ? (o(), n("div", vn, [
            e("span", {
              class: G(["di-binding-badge", "di-binding-" + le.value])
            }, v(le.value), 3),
            te.value ? (o(), n("span", pn, v(te.value), 1)) : c("", !0)
          ])) : c("", !0),
          e("div", mn, [
            e("button", {
              onClick: t[0] || (t[0] = (i) => T.value = "datasource"),
              class: G(["di-editor-tab", { "di-editor-tab-active": T.value === "datasource" }])
            }, [
              g(u(Ze), { style: { width: "14px", height: "14px" } }),
              t[54] || (t[54] = B(" データソース ", -1))
            ], 2),
            e("button", {
              onClick: t[1] || (t[1] = (i) => T.value = "action"),
              class: G(["di-editor-tab", { "di-editor-tab-active": T.value === "action" }])
            }, [
              g(u(ul), { style: { width: "14px", height: "14px" } }),
              t[55] || (t[55] = B(" アクション ", -1))
            ], 2),
            e("button", {
              onClick: t[2] || (t[2] = (i) => T.value = "form"),
              class: G(["di-editor-tab", { "di-editor-tab-active": T.value === "form" }])
            }, [
              g(u(Jt), { style: { width: "14px", height: "14px" } }),
              t[56] || (t[56] = B(" フォーム ", -1))
            ], 2)
          ]),
          e("div", hn, [
            T.value === "datasource" ? (o(), n(D, { key: 0 }, [
              e("div", yn, [
                t[57] || (t[57] = e("label", { class: "di-form-label" }, "表示タイプ", -1)),
                e("div", fn, [
                  (o(), n(D, null, j(Je, (i) => e("button", {
                    key: i.value,
                    onClick: (b) => E.value = i.value,
                    class: G(["di-display-type-card", { "di-display-type-active": E.value === i.value }]),
                    style: Ie(E.value === i.value ? { borderColor: i.color, background: i.color + "18" } : {})
                  }, [
                    (o(), we(Ft(i.icon), {
                      style: Ie([{ width: "20px", height: "20px" }, { color: E.value === i.value ? i.color : "#64748b" }])
                    }, null, 8, ["style"])),
                    e("span", {
                      class: "di-display-type-label",
                      style: Ie({ color: E.value === i.value ? i.color : "#94a3b8" })
                    }, v(i.label), 5),
                    e("span", gn, v(i.description), 1)
                  ], 14, bn)), 64))
                ])
              ]),
              E.value === "db_direct" || E.value === "db_formatted" ? (o(), n(D, { key: 0 }, [
                V.value.length > 0 ? (o(), n("div", kn, [
                  t[58] || (t[58] = e("label", { class: "di-form-label" }, "登録済みカラム", -1)),
                  e("div", xn, [
                    (o(!0), n(D, null, j(V.value, (i, b) => (o(), n("div", {
                      key: b,
                      class: "di-field-tag"
                    }, [
                      e("span", wn, v(i.table) + "." + v(i.column), 1),
                      i.type ? (o(), n("span", $n, v(i.type), 1)) : c("", !0),
                      e("button", {
                        onClick: (M) => Ue(b),
                        class: "di-field-tag-remove"
                      }, "×", 8, _n)
                    ]))), 128))
                  ])
                ])) : c("", !0),
                je.value ? (o(), n("div", Cn, [
                  e("div", In, [
                    e("label", Mn, [
                      g(u(Ze), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                      t[59] || (t[59] = B(" schema.rb から選択 ", -1))
                    ]),
                    e("div", Tn, [
                      w(e("input", {
                        "onUpdate:modelValue": t[3] || (t[3] = (i) => l.value = i),
                        onFocus: t[4] || (t[4] = (i) => d.value = !0),
                        type: "text",
                        placeholder: "テーブル.カラムを検索... (例: users, email)",
                        class: "di-input di-binding-search"
                      }, null, 544), [
                        [U, l.value]
                      ]),
                      l.value ? (o(), n("button", {
                        key: 0,
                        onClick: t[5] || (t[5] = (i) => {
                          l.value = "", d.value = !1;
                        }),
                        class: "di-binding-clear"
                      }, [
                        g(u(Ge), { style: { width: "14px", height: "14px" } })
                      ])) : c("", !0)
                    ]),
                    d.value && C.value.length > 0 ? (o(), n("div", Sn, [
                      (o(!0), n(D, null, j(C.value, (i) => (o(), n("button", {
                        key: i.fullName,
                        onClick: (b) => R(i),
                        class: "di-binding-item has-db"
                      }, [
                        e("div", En, [
                          e("span", Un, v(i.fullName), 1),
                          e("span", Vn, v(i.type), 1)
                        ]),
                        i.comment ? (o(), n("span", Ln, v(i.comment), 1)) : c("", !0)
                      ], 8, Dn))), 128))
                    ])) : d.value && l.value && C.value.length === 0 ? (o(), n("div", Pn, " 該当するカラムが見つかりません ")) : c("", !0)
                  ])
                ])) : c("", !0),
                je.value ? (o(), n("div", An, [...t[60] || (t[60] = [
                  e("span", null, "または手動入力", -1)
                ])])) : c("", !0),
                e("div", Bn, [
                  e("div", Fn, [
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
                      [U, y.value]
                    ]),
                    Ae.value && He.value.length > 0 ? (o(), n("div", jn, [
                      (o(!0), n(D, null, j(He.value.slice(0, 10), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => tt(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(i), 41, Nn))), 128))
                    ])) : c("", !0)
                  ]),
                  e("div", qn, [
                    t[62] || (t[62] = e("label", { class: "di-form-label" }, "カラム名 *", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[9] || (t[9] = (i) => r.value = i),
                      onFocus: t[10] || (t[10] = (i) => Be.value = !0),
                      onBlur: t[11] || (t[11] = (i) => rt()),
                      type: "text",
                      placeholder: "name",
                      class: "di-input",
                      autocomplete: "off"
                    }, null, 544), [
                      [U, r.value]
                    ]),
                    Be.value && Re.value.length > 0 ? (o(), n("div", On, [
                      (o(!0), n(D, null, j(Re.value.slice(0, 10), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => ct(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, v(i), 41, Hn))), 128))
                    ])) : c("", !0)
                  ])
                ]),
                e("div", Rn, [
                  t[64] || (t[64] = e("label", { class: "di-form-label" }, "データ型", -1)),
                  w(e("select", {
                    "onUpdate:modelValue": t[12] || (t[12] = (i) => _.value = i),
                    class: "di-select"
                  }, [
                    t[63] || (t[63] = e("option", { value: "" }, "選択してください", -1)),
                    (o(), n(D, null, j(m, (i) => e("option", {
                      key: i,
                      value: i
                    }, v(i), 9, zn)), 64))
                  ], 512), [
                    [qe, _.value]
                  ])
                ]),
                e("button", {
                  onClick: ve,
                  class: "di-btn-add-field",
                  disabled: !y.value || !r.value
                }, " + カラムを追加 ", 8, Gn),
                oe.value ? (o(), n("div", Yn, [
                  e("button", {
                    onClick: S,
                    class: G(["di-btn-condition-toggle", { "di-condition-active": ae.value }])
                  }, [
                    g(u(Dt), { style: { width: "14px", height: "14px" } }),
                    t[65] || (t[65] = B(" マスタ値を定義 ", -1)),
                    De.value ? (o(), n("span", Kn, v(De.value.entries.length) + "件", 1)) : c("", !0)
                  ], 2),
                  ae.value ? (o(), n("div", Xn, [
                    x.value.length > 0 ? (o(), n("div", Zn, [
                      t[66] || (t[66] = e("div", { class: "di-master-entries-header" }, [
                        e("span", { class: "di-master-col-val" }, "値"),
                        e("span", { class: "di-master-col-lbl" }, "ラベル"),
                        e("span", { class: "di-master-col-color" }, "色"),
                        e("span", { class: "di-master-col-act" })
                      ], -1)),
                      (o(!0), n(D, null, j(x.value, (i, b) => (o(), n("div", {
                        key: b,
                        class: "di-master-entry-row"
                      }, [
                        w(e("input", {
                          "onUpdate:modelValue": (M) => i.value = M,
                          placeholder: "1",
                          class: "di-master-input di-master-col-val"
                        }, null, 8, Jn), [
                          [U, i.value]
                        ]),
                        w(e("input", {
                          "onUpdate:modelValue": (M) => i.label = M,
                          placeholder: "受付",
                          class: "di-master-input di-master-col-lbl"
                        }, null, 8, Qn), [
                          [U, i.label]
                        ]),
                        w(e("input", {
                          "onUpdate:modelValue": (M) => i.color = M,
                          type: "color",
                          class: "di-master-color-input"
                        }, null, 8, Wn), [
                          [U, i.color]
                        ]),
                        e("button", {
                          onClick: (M) => Ce(b),
                          class: "di-master-entry-remove"
                        }, "×", 8, ei)
                      ]))), 128))
                    ])) : c("", !0),
                    e("button", {
                      onClick: me,
                      class: "di-btn-add-field",
                      style: { "margin-top": "4px" }
                    }, " + 値を追加 ")
                  ])) : c("", !0)
                ])) : c("", !0),
                E.value === "db_formatted" ? (o(), n("div", ti, [
                  t[67] || (t[67] = e("label", { class: "di-form-label" }, "整形方法", -1)),
                  w(e("textarea", {
                    "onUpdate:modelValue": t[13] || (t[13] = (i) => L.value = i),
                    rows: "2",
                    placeholder: "YYYY年MM月DD日 に整形、姓 + 名 で結合 など",
                    class: "di-textarea"
                  }, null, 512), [
                    [U, L.value]
                  ])
                ])) : c("", !0),
                e("div", li, [
                  e("button", {
                    onClick: t[14] || (t[14] = (i) => k.value = !k.value),
                    class: G(["di-btn-condition-toggle", { "di-condition-active": k.value }])
                  }, [
                    g(u(Tt), { style: { width: "14px", height: "14px" } }),
                    t[68] || (t[68] = B(" このカラムは計算値を保存している ", -1)),
                    k.value ? (o(), n("span", si, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                k.value ? (o(), n("div", oi, [
                  e("div", ni, [
                    t[69] || (t[69] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                    w(e("textarea", {
                      "onUpdate:modelValue": t[15] || (t[15] = (i) => J.value = i),
                      rows: "2",
                      placeholder: "SUM(order_items.price * quantity)、unit_price × quantity など",
                      class: "di-textarea di-textarea-mono"
                    }, null, 512), [
                      [U, J.value]
                    ])
                  ]),
                  e("div", ii, [
                    t[70] || (t[70] = e("label", { class: "di-form-label" }, "元データ（テーブル.カラム）", -1)),
                    e("div", ai, [
                      (o(!0), n(D, null, j(I.value, (i, b) => (o(), n("span", {
                        key: b,
                        class: "di-calc-tag"
                      }, [
                        B(v(i) + " ", 1),
                        e("button", {
                          onClick: be((M) => I.value.splice(b, 1), ["stop"]),
                          class: "di-calc-tag-remove"
                        }, "×", 8, di)
                      ]))), 128)),
                      w(e("input", {
                        "onUpdate:modelValue": t[16] || (t[16] = (i) => ce.value = i),
                        onFocus: t[17] || (t[17] = (i) => Ve.value = !0),
                        onBlur: Xe,
                        onKeydown: t[18] || (t[18] = Mt(be((i) => Ne(), ["prevent"]), ["enter"])),
                        type: "text",
                        placeholder: "order_items.price",
                        class: "di-calc-tags-field",
                        autocomplete: "off"
                      }, null, 544), [
                        [U, ce.value]
                      ])
                    ]),
                    Ve.value && pe.value.length > 0 ? (o(), n("div", ui, [
                      (o(!0), n(D, null, j(pe.value.slice(0, 12), (i) => (o(), n("button", {
                        key: i,
                        onMousedown: be((b) => ot(i), ["prevent"]),
                        class: "di-suggest-item"
                      }, [
                        g(u(Ze), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                        B(" " + v(i), 1)
                      ], 40, ri))), 128))
                    ])) : c("", !0),
                    t[71] || (t[71] = e("span", { class: "di-form-hint" }, "Enter で追加、またはドロップダウンから選択", -1))
                  ]),
                  e("div", ci, [
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
                      [qe, ke.value]
                    ])
                  ])
                ])) : c("", !0)
              ], 64)) : c("", !0),
              E.value === "calculated" ? (o(), n("div", vi, [
                t[74] || (t[74] = e("label", { class: "di-form-label" }, "計算ロジック", -1)),
                e("div", {
                  class: "di-calc-tags-input",
                  onClick: t[23] || (t[23] = (i) => {
                    var b;
                    return (b = p.$refs.calcInputEl) == null ? void 0 : b.focus();
                  })
                }, [
                  (o(!0), n(D, null, j(z.value, (i, b) => (o(), n(D, { key: b }, [
                    i.type === "tag" ? (o(), n("span", pi, [
                      B(v(i.value) + " ", 1),
                      e("button", {
                        onClick: be((M) => vt(b), ["stop"]),
                        class: "di-calc-tag-remove"
                      }, "×", 8, mi)
                    ])) : (o(), n("span", hi, v(i.value), 1))
                  ], 64))), 128)),
                  w(e("input", {
                    ref: "calcInputEl",
                    "onUpdate:modelValue": t[20] || (t[20] = (i) => q.value = i),
                    onFocus: t[21] || (t[21] = (i) => Q.value = !0),
                    onBlur: t[22] || (t[22] = (i) => Z()),
                    onKeydown: pt,
                    type: "text",
                    placeholder: z.value.length === 0 ? "カラムを選択 or 自由入力 (例: × 2)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, yi), [
                    [U, q.value]
                  ])
                ]),
                Q.value && Ke.value.length > 0 ? (o(), n("div", fi, [
                  (o(!0), n(D, null, j(Ke.value.slice(0, 12), (i) => (o(), n("button", {
                    key: i,
                    onMousedown: be((b) => a(i), ["prevent"]),
                    class: "di-suggest-item"
                  }, [
                    g(u(Ze), { style: { width: "10px", height: "10px", opacity: "0.5", "flex-shrink": "0" } }),
                    B(" " + v(i), 1)
                  ], 40, bi))), 128))
                ])) : c("", !0),
                t[75] || (t[75] = e("span", { class: "di-form-hint" }, "DBカラムはドロップダウンから挿入、演算子や数値はそのまま入力", -1))
              ])) : c("", !0),
              E.value === "static" || E.value === "other" ? (o(), n("div", gi, [
                t[76] || (t[76] = e("label", { class: "di-form-label" }, "メモ", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[24] || (t[24] = (i) => W.value = i),
                  rows: "4",
                  placeholder: "この要素についてのメモ...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, W.value]
                ])
              ])) : c("", !0),
              E.value && E.value !== "other" ? (o(), n(D, { key: 3 }, [
                e("div", ki, [
                  e("button", {
                    onClick: t[25] || (t[25] = (i) => _e.value = !_e.value),
                    class: G(["di-btn-condition-toggle", { "di-condition-active": _e.value || xe.value }])
                  }, [
                    g(u(Pt), { style: { width: "14px", height: "14px" } }),
                    t[77] || (t[77] = B(" 条件付き表示 ", -1)),
                    xe.value ? (o(), n("span", xi, "設定あり")) : c("", !0)
                  ], 2)
                ]),
                _e.value ? (o(), n("div", wi, [
                  e("div", $i, [
                    t[78] || (t[78] = e("label", { class: "di-form-label" }, "表示条件", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[26] || (t[26] = (i) => xe.value = i),
                      type: "text",
                      placeholder: "管理者ロール時のみ / ステータスがactiveの時",
                      class: "di-input"
                    }, null, 512), [
                      [U, xe.value]
                    ])
                  ]),
                  e("div", _i, [
                    t[79] || (t[79] = e("label", { class: "di-form-label" }, "判定カラム", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[27] || (t[27] = (i) => Me.value = i),
                      type: "text",
                      placeholder: "users.role / orders.status",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [U, Me.value]
                    ])
                  ]),
                  e("div", Ci, [
                    e("div", Ii, [
                      t[81] || (t[81] = e("label", { class: "di-form-label" }, "条件不一致時の挙動", -1)),
                      w(e("select", {
                        "onUpdate:modelValue": t[28] || (t[28] = (i) => $e.value = i),
                        class: "di-select"
                      }, [...t[80] || (t[80] = [
                        e("option", { value: "" }, "未指定", -1),
                        e("option", { value: "hidden" }, "非表示", -1),
                        e("option", { value: "disabled" }, "無効化 (グレーアウト)", -1),
                        e("option", { value: "different_value" }, "別の値を表示", -1),
                        e("option", { value: "empty" }, "空欄", -1)
                      ])], 512), [
                        [qe, $e.value]
                      ])
                    ])
                  ]),
                  $e.value === "different_value" ? (o(), n("div", Mi, [
                    t[82] || (t[82] = e("label", { class: "di-form-label" }, "代わりに表示する値", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[29] || (t[29] = (i) => Te.value = i),
                      type: "text",
                      placeholder: "「権限がありません」/ 「***」",
                      class: "di-input"
                    }, null, 512), [
                      [U, Te.value]
                    ])
                  ])) : c("", !0)
                ])) : c("", !0)
              ], 64)) : c("", !0),
              E.value === "db_direct" || E.value === "db_formatted" || E.value === "calculated" ? (o(), n(D, { key: 4 }, [
                t[90] || (t[90] = e("div", { class: "di-form-divider" }, [
                  e("span", null, "表示の詳細")
                ], -1)),
                e("div", Ti, [
                  e("div", Si, [
                    t[83] || (t[83] = e("label", { class: "di-form-label" }, "サンプル値", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[30] || (t[30] = (i) => de.value = i),
                      type: "text",
                      placeholder: "12,500 / 田中太郎",
                      class: "di-input di-input-mono"
                    }, null, 512), [
                      [U, de.value]
                    ])
                  ]),
                  e("div", Di, [
                    t[84] || (t[84] = e("label", { class: "di-form-label" }, "単位", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[31] || (t[31] = (i) => fe.value = i),
                      type: "text",
                      placeholder: "円 / %",
                      class: "di-input"
                    }, null, 512), [
                      [U, fe.value]
                    ])
                  ])
                ]),
                e("div", Ei, [
                  e("div", Ui, [
                    t[86] || (t[86] = e("label", { class: "di-form-label" }, "小数点の扱い", -1)),
                    w(e("select", {
                      "onUpdate:modelValue": t[32] || (t[32] = (i) => re.value = i),
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
                      [qe, re.value]
                    ])
                  ]),
                  e("div", Vi, [
                    t[87] || (t[87] = e("label", { class: "di-form-label" }, "NULL/ゼロ時", -1)),
                    w(e("input", {
                      "onUpdate:modelValue": t[33] || (t[33] = (i) => P.value = i),
                      type: "text",
                      placeholder: "- / 0 / 非表示 / N/A",
                      class: "di-input"
                    }, null, 512), [
                      [U, P.value]
                    ])
                  ])
                ]),
                e("div", Li, [
                  t[88] || (t[88] = e("label", { class: "di-form-label" }, "表示フォーマット", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": t[34] || (t[34] = (i) => h.value = i),
                    type: "text",
                    placeholder: "カンマ区切り / ¥記号付き / YYYY/MM/DD",
                    class: "di-input"
                  }, null, 512), [
                    [U, h.value]
                  ])
                ]),
                e("div", Pi, [
                  t[89] || (t[89] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                  w(e("textarea", {
                    "onUpdate:modelValue": t[35] || (t[35] = (i) => W.value = i),
                    rows: "2",
                    placeholder: "補足情報があれば...",
                    class: "di-textarea"
                  }, null, 512), [
                    [U, W.value]
                  ])
                ])
              ], 64)) : c("", !0)
            ], 64)) : c("", !0),
            T.value === "action" ? (o(), n(D, { key: 1 }, [
              e("div", Ai, [
                t[92] || (t[92] = e("label", { class: "di-form-label" }, "アクションタイプ", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[36] || (t[36] = (i) => A.value = i),
                  class: "di-select"
                }, [...t[91] || (t[91] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "navigate" }, "画面遷移", -1),
                  e("option", { value: "api" }, "API呼び出し", -1),
                  e("option", { value: "modal" }, "モーダル表示", -1),
                  e("option", { value: "emit" }, "イベント発火", -1),
                  e("option", { value: "function" }, "関数実行", -1)
                ])], 512), [
                  [qe, A.value]
                ])
              ]),
              e("div", Bi, [
                t[93] || (t[93] = e("label", { class: "di-form-label" }, "ターゲット", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[37] || (t[37] = (i) => H.value = i),
                  type: "text",
                  placeholder: A.value === "navigate" ? "/tasks" : A.value === "api" ? "/api/users" : A.value === "modal" ? "confirm-dialog" : "",
                  class: "di-input di-input-mono"
                }, null, 8, Fi), [
                  [U, H.value]
                ])
              ]),
              A.value === "api" ? (o(), n("div", ji, [
                t[95] || (t[95] = e("label", { class: "di-form-label" }, "HTTPメソッド", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[38] || (t[38] = (i) => K.value = i),
                  class: "di-select"
                }, [...t[94] || (t[94] = [
                  e("option", { value: "" }, "選択してください", -1),
                  e("option", { value: "GET" }, "GET", -1),
                  e("option", { value: "POST" }, "POST", -1),
                  e("option", { value: "PUT" }, "PUT", -1),
                  e("option", { value: "DELETE" }, "DELETE", -1),
                  e("option", { value: "PATCH" }, "PATCH", -1)
                ])], 512), [
                  [qe, K.value]
                ])
              ])) : c("", !0),
              e("div", Ni, [
                t[96] || (t[96] = e("label", { class: "di-form-label" }, "説明", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[39] || (t[39] = (i) => ne.value = i),
                  rows: "3",
                  placeholder: "このアクションの説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, ne.value]
                ])
              ]),
              e("div", qi, [
                t[97] || (t[97] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[40] || (t[40] = (i) => W.value = i),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, W.value]
                ])
              ])
            ], 64)) : c("", !0),
            T.value === "form" ? (o(), n(D, { key: 2 }, [
              e("div", Oi, [
                t[99] || (t[99] = e("label", { class: "di-form-label" }, "入力タイプ", -1)),
                w(e("select", {
                  "onUpdate:modelValue": t[41] || (t[41] = (i) => se.value = i),
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
                  [qe, se.value]
                ])
              ]),
              V.value.length > 0 ? (o(), n("div", Hi, [
                t[100] || (t[100] = e("label", { class: "di-form-label" }, "対応カラム", -1)),
                e("div", Ri, [
                  (o(!0), n(D, null, j(V.value, (i, b) => (o(), n("div", {
                    key: b,
                    class: "di-field-tag"
                  }, [
                    e("span", zi, v(i.table) + "." + v(i.column), 1),
                    i.type ? (o(), n("span", Gi, v(i.type), 1)) : c("", !0),
                    e("button", {
                      onClick: (M) => Ue(b),
                      class: "di-field-tag-remove"
                    }, "×", 8, Yi)
                  ]))), 128))
                ])
              ])) : c("", !0),
              je.value ? (o(), n("div", Ki, [
                e("div", Xi, [
                  e("label", Zi, [
                    g(u(Ze), { style: { width: "12px", height: "12px", display: "inline", "vertical-align": "middle" } }),
                    t[101] || (t[101] = B(" 対応するDBカラム ", -1))
                  ]),
                  e("div", Ji, [
                    w(e("input", {
                      "onUpdate:modelValue": t[42] || (t[42] = (i) => l.value = i),
                      onFocus: t[43] || (t[43] = (i) => d.value = !0),
                      type: "text",
                      placeholder: "テーブル.カラムを検索...",
                      class: "di-input di-binding-search"
                    }, null, 544), [
                      [U, l.value]
                    ]),
                    l.value ? (o(), n("button", {
                      key: 0,
                      onClick: t[44] || (t[44] = (i) => {
                        l.value = "", d.value = !1;
                      }),
                      class: "di-binding-clear"
                    }, [
                      g(u(Ge), { style: { width: "14px", height: "14px" } })
                    ])) : c("", !0)
                  ]),
                  d.value && C.value.length > 0 ? (o(), n("div", Qi, [
                    (o(!0), n(D, null, j(C.value, (i) => (o(), n("button", {
                      key: i.fullName,
                      onClick: (b) => R(i),
                      class: "di-binding-item has-db"
                    }, [
                      e("div", ea, [
                        e("span", ta, v(i.fullName), 1),
                        e("span", la, v(i.type), 1)
                      ]),
                      i.comment ? (o(), n("span", sa, v(i.comment), 1)) : c("", !0)
                    ], 8, Wi))), 128))
                  ])) : c("", !0)
                ])
              ])) : c("", !0),
              oe.value && (se.value === "select" || se.value === "radio" || se.value === "checkbox") ? (o(), n("div", oa, [
                e("button", {
                  onClick: S,
                  class: G(["di-btn-condition-toggle", { "di-condition-active": ae.value }])
                }, [
                  g(u(Dt), { style: { width: "14px", height: "14px" } }),
                  t[102] || (t[102] = B(" 選択肢を定義 ", -1)),
                  De.value ? (o(), n("span", na, v(De.value.entries.length) + "件", 1)) : c("", !0)
                ], 2),
                ae.value ? (o(), n("div", ia, [
                  x.value.length > 0 ? (o(), n("div", aa, [
                    t[103] || (t[103] = e("div", { class: "di-master-entries-header" }, [
                      e("span", { class: "di-master-col-val" }, "値"),
                      e("span", { class: "di-master-col-lbl" }, "ラベル"),
                      e("span", { class: "di-master-col-color" }, "色"),
                      e("span", { class: "di-master-col-act" })
                    ], -1)),
                    (o(!0), n(D, null, j(x.value, (i, b) => (o(), n("div", {
                      key: b,
                      class: "di-master-entry-row"
                    }, [
                      w(e("input", {
                        "onUpdate:modelValue": (M) => i.value = M,
                        placeholder: "1",
                        class: "di-master-input di-master-col-val"
                      }, null, 8, da), [
                        [U, i.value]
                      ]),
                      w(e("input", {
                        "onUpdate:modelValue": (M) => i.label = M,
                        placeholder: "受付",
                        class: "di-master-input di-master-col-lbl"
                      }, null, 8, ua), [
                        [U, i.label]
                      ]),
                      w(e("input", {
                        "onUpdate:modelValue": (M) => i.color = M,
                        type: "color",
                        class: "di-master-color-input"
                      }, null, 8, ra), [
                        [U, i.color]
                      ]),
                      e("button", {
                        onClick: (M) => Ce(b),
                        class: "di-master-entry-remove"
                      }, "×", 8, ca)
                    ]))), 128))
                  ])) : c("", !0),
                  e("button", {
                    onClick: me,
                    class: "di-btn-add-field",
                    style: { "margin-top": "4px" }
                  }, " + 値を追加 ")
                ])) : c("", !0)
              ])) : c("", !0),
              e("div", va, [
                e("button", {
                  onClick: t[45] || (t[45] = (i) => ie.value = !ie.value),
                  class: G(["di-btn-condition-toggle", { "di-condition-active": ie.value }])
                }, [
                  g(u(Pt), { style: { width: "14px", height: "14px" } }),
                  t[104] || (t[104] = B(" 必須入力 ", -1)),
                  ie.value ? (o(), n("span", pa, "必須")) : c("", !0)
                ], 2)
              ]),
              e("div", ma, [
                t[105] || (t[105] = e("label", { class: "di-form-label" }, "バリデーションルール", -1)),
                e("div", ha, [
                  (o(!0), n(D, null, j($.value, (i, b) => (o(), n("span", {
                    key: b,
                    class: "di-calc-tag",
                    style: { background: "#ec4899" }
                  }, [
                    B(v(i) + " ", 1),
                    e("button", {
                      onClick: be((M) => xt(b), ["stop"]),
                      class: "di-calc-tag-remove"
                    }, "×", 8, ya)
                  ]))), 128)),
                  w(e("input", {
                    "onUpdate:modelValue": t[46] || (t[46] = (i) => ue.value = i),
                    onKeydown: [
                      t[47] || (t[47] = Mt(be((i) => kt(), ["prevent"]), ["enter"])),
                      wt
                    ],
                    type: "text",
                    placeholder: $.value.length === 0 ? "max:255, email, 必須 など (Enter で追加)" : "",
                    class: "di-calc-tags-field",
                    autocomplete: "off"
                  }, null, 40, fa), [
                    [U, ue.value]
                  ])
                ]),
                t[106] || (t[106] = e("span", { class: "di-form-hint" }, "Enter で追加、Backspace で削除", -1))
              ]),
              e("div", ba, [
                t[107] || (t[107] = e("label", { class: "di-form-label" }, "プレースホルダー", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[48] || (t[48] = (i) => ee.value = i),
                  type: "text",
                  placeholder: "例: user@example.com",
                  class: "di-input"
                }, null, 512), [
                  [U, ee.value]
                ])
              ]),
              e("div", ga, [
                t[108] || (t[108] = e("label", { class: "di-form-label" }, "デフォルト値", -1)),
                w(e("input", {
                  "onUpdate:modelValue": t[49] || (t[49] = (i) => ge.value = i),
                  type: "text",
                  placeholder: "初期値",
                  class: "di-input di-input-mono"
                }, null, 512), [
                  [U, ge.value]
                ])
              ]),
              e("div", ka, [
                t[109] || (t[109] = e("label", { class: "di-form-label" }, "説明", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[50] || (t[50] = (i) => ye.value = i),
                  rows: "3",
                  placeholder: "このフォーム要素の説明...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, ye.value]
                ])
              ]),
              e("div", xa, [
                t[110] || (t[110] = e("label", { class: "di-form-label" }, "補足メモ（任意）", -1)),
                w(e("textarea", {
                  "onUpdate:modelValue": t[51] || (t[51] = (i) => W.value = i),
                  rows: "2",
                  placeholder: "補足情報があれば...",
                  class: "di-textarea"
                }, null, 512), [
                  [U, W.value]
                ])
              ])
            ], 64)) : c("", !0)
          ]),
          e("div", wa, [
            e("button", {
              onClick: et,
              class: "di-btn-delete"
            }, [
              g(u(nt), { style: { width: "14px", height: "14px" } }),
              t[111] || (t[111] = B(" 削除 ", -1))
            ]),
            e("div", $a, [
              e("button", {
                onClick: Pe,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: We,
                class: "di-btn-save"
              }, [
                g(u(Bt), { style: { width: "14px", height: "14px" } }),
                t[112] || (t[112] = B(" 保存 ", -1))
              ])
            ])
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ca = /* @__PURE__ */ gt(_a, [["__scopeId", "data-v-c36a51a1"]]), Ia = {
  key: 0,
  "data-dev-inspector": "",
  class: "di-loading-overlay"
}, Ma = { class: "di-highlight-label" }, Ta = ["onClick"], Sa = {
  key: 0,
  class: "di-note-label-row"
}, Da = ["onClick"], Ea = {
  "data-dev-inspector": "",
  class: "di-scan-banner"
}, Ua = ["onClick"], Va = { class: "di-analysis-type" }, La = {
  key: 0,
  class: "di-analysis-tags"
}, Pa = {
  key: 1,
  class: "di-analysis-db"
}, Aa = {
  key: 2,
  class: "di-analysis-api-source"
}, Ba = {
  key: 3,
  class: "di-analysis-conditional"
}, Fa = ["onClick"], ja = {
  key: 0,
  class: "di-analysis-text"
}, Na = {
  "data-dev-inspector": "",
  class: "di-analysis-banner"
}, qa = ["onClick"], Oa = {
  key: 0,
  class: "di-unannotated-label-text"
}, Ha = /* @__PURE__ */ at({
  __name: "DevPickOverlay",
  setup(N) {
    const s = dt(), T = f(null), A = f(null), H = f(0), K = f(0), ne = {
      db_direct: "#3b82f6",
      db_formatted: "#8b5cf6",
      calculated: "#f59e0b",
      static: "#10b981",
      other: "#94a3b8"
    }, se = {
      action: "#a78bfa",
      form: "#ec4899"
    };
    function ie(V) {
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
      }[V] || V;
    }
    function $(V) {
      var r, _;
      const y = s.getElementConfig(V);
      if (y != null && y.elementType && se[y.elementType])
        return se[y.elementType];
      if ((r = y == null ? void 0 : y.note) != null && r.displayType)
        return ne[y.note.displayType] || "#60a5fa";
      if (!(y != null && y.sourceBinding)) {
        const Y = ((_ = y == null ? void 0 : y.note) == null ? void 0 : _.type) || "info";
        return {
          info: "#60a5fa",
          warning: "#fbbf24",
          todo: "#10b981",
          question: "#a78bfa"
        }[Y] || "#60a5fa";
      }
      return y.sourceBinding.isStatic ? "#10b981" : y.sourceBinding.type === "v-model" ? "#8b5cf6" : y.sourceBinding.type === "api" ? "#f59e0b" : "#60a5fa";
    }
    function ue(V) {
      var z, q, Q, de, re;
      const y = s.noteHighlightFilter;
      if (y === "all") return !0;
      const r = s.getElementConfig(V);
      if (!r) return !1;
      const _ = (z = r.note) == null ? void 0 : z.displayType, Y = !!((q = r.note) != null && q.condition || (Q = r.note) != null && Q.conditionColumn), L = !!((de = r.note) != null && de.storedCalc);
      switch (y) {
        case "db":
          return _ === "db_direct" || _ === "db_formatted";
        case "calculated":
          return _ === "calculated";
        case "storedCalc":
          return L;
        case "static":
          return _ === "static";
        case "conditional":
          return Y;
        case "action":
          return r.elementType === "action";
        case "form":
          return r.elementType === "form";
        case "other":
          return _ === "other" || !_ && !r.elementType && !!((re = r.note) != null && re.text);
        default:
          return !0;
      }
    }
    const ee = X(() => {
      var Y, L, z, q, Q, de, re, fe, P, h, k, J, I, ce, Ve, ke, xe, Me, $e, Te, _e, W, le, te, Se, Le, Ee, Je, Ye, Pe, Qe, We, et, m, l, d, C, R, ve, Ue, je, Ae, Be, He, Re, ut, rt;
      const V = H.value, y = K.value, r = [];
      if (!s.isEnabled) return r;
      const _ = s.getConfiguredSelectors();
      for (const tt of _)
        try {
          const ct = document.querySelector(tt);
          if (ct) {
            const Ke = ct.getBoundingClientRect(), a = s.getElementConfig(tt), vt = ((Y = a == null ? void 0 : a.sourceBinding) == null ? void 0 : Y.isStatic) || !1, pt = ((L = a == null ? void 0 : a.sourceBinding) == null ? void 0 : L.type) || "";
            let Z = "", pe = "";
            const Xe = (z = a == null ? void 0 : a.note) == null ? void 0 : z.displayType, Ne = [];
            if ((q = a == null ? void 0 : a.note) != null && q.sampleValue ? Ne.push(`例: ${a.note.sampleValue}${a.note.unit ? a.note.unit : ""}`) : (Q = a == null ? void 0 : a.note) != null && Q.unit && Ne.push(`単位: ${a.note.unit}`), (de = a == null ? void 0 : a.note) != null && de.decimalHandling) {
              const S = { round: "四捨五入", floor: "切り捨て", ceil: "切り上げ", decimal_1: "小数第1位", decimal_2: "小数第2位", integer: "整数" };
              Ne.push(S[a.note.decimalHandling] || a.note.decimalHandling);
            }
            (re = a == null ? void 0 : a.note) != null && re.nullDisplay && Ne.push(`NULL時: ${a.note.nullDisplay}`), (fe = a == null ? void 0 : a.note) != null && fe.displayFormat && Ne.push(a.note.displayFormat);
            const ot = Ne.length > 0 ? `
${Ne.join(" / ")}` : "", mt = !!((P = a == null ? void 0 : a.note) != null && P.condition || (h = a == null ? void 0 : a.note) != null && h.conditionColumn);
            let ze = "";
            if (mt) {
              const S = { hidden: "非表示", disabled: "無効化", different_value: "別の値", empty: "空欄" }, me = [];
              (k = a == null ? void 0 : a.note) != null && k.condition && me.push(a.note.condition), (J = a == null ? void 0 : a.note) != null && J.conditionColumn && me.push(`判定: ${a.note.conditionColumn}`), (I = a == null ? void 0 : a.note) != null && I.hiddenBehavior && me.push(`不一致時: ${S[a.note.hiddenBehavior] || a.note.hiddenBehavior}`), (ce = a == null ? void 0 : a.note) != null && ce.hiddenNote && me.push(`→ ${a.note.hiddenNote}`), ze = `
条件: ${me.join(" / ")}`;
            }
            const lt = mt ? " ⚡" : "";
            if ((a == null ? void 0 : a.elementType) === "action" && (a != null && a.actionInfo)) {
              const S = a.actionInfo;
              S.type === "navigate" ? Z = `遷移: ${S.target || "?"}` : S.type === "api" ? Z = `API: ${S.method || "GET"} ${S.target || "?"}` : S.type === "modal" ? Z = `モーダル: ${S.target || "?"}` : S.type === "emit" ? Z = `イベント: ${S.target || "?"}` : S.type === "function" ? Z = `関数: ${S.target || "?"}` : Z = "アクション", pe = (S.description || Z) + ((Ve = a == null ? void 0 : a.note) != null && Ve.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "form" && (a != null && a.formInfo)) {
              const S = a.formInfo, me = (ke = a == null ? void 0 : a.fieldInfoList) != null && ke.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [], Ce = me.length > 0 ? me.map((i) => `${i.table}.${i.column}`).join(", ") : "", Fe = me.length > 0 ? `${me[0].table}.${me[0].column}` : "", p = Fe ? s.getMasterDefinition(Fe) : null;
              S.inputType === "select" ? Z = `選択: ${Ce || S.description || "?"}${p ? ` (${p.entries.length}件)` : ""}` : S.inputType === "textarea" ? Z = `テキスト: ${Ce || S.description || "?"}` : S.inputType === "checkbox" ? Z = `チェック: ${Ce || S.description || "?"}` : S.inputType === "radio" ? Z = `ラジオ: ${Ce || S.description || "?"}` : Z = `入力: ${Ce || S.description || S.inputType || "?"}`, S.required && (Z += " (必須)");
              const t = [];
              S.description && t.push(S.description), (xe = S.validation) != null && xe.length && t.push(`検証: ${S.validation.join(", ")}`), S.placeholder && t.push(`placeholder: ${S.placeholder}`), S.defaultValue && t.push(`初期値: ${S.defaultValue}`), pe = t.join(`
`) + ((Me = a == null ? void 0 : a.note) != null && Me.text ? `
${a.note.text}` : "");
            } else if ((a == null ? void 0 : a.elementType) === "action")
              Z = "アクション", pe = (($e = a == null ? void 0 : a.note) == null ? void 0 : $e.text) || "";
            else if ((a == null ? void 0 : a.elementType) === "form")
              Z = "フォーム", pe = ((Te = a == null ? void 0 : a.note) == null ? void 0 : Te.text) || "";
            else if (Xe === "db_direct") {
              const S = (_e = a == null ? void 0 : a.fieldInfoList) != null && _e.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (S.length > 0) {
                const me = S.map((t) => `${t.table}.${t.column}`).join(", "), Ce = `${S[0].table}.${S[0].column}`, Fe = s.getMasterDefinition(Ce), p = Fe ? ` (${Fe.entries.length}値)` : "";
                Z = `DB: ${me}${p}${lt}`, pe = S.map((t) => `${t.table}.${t.column}${t.type ? ` (${t.type})` : ""}`).join(`
`) + ot + ze + ((W = a == null ? void 0 : a.note) != null && W.text ? `
${a.note.text}` : "");
              }
            } else if (Xe === "db_formatted") {
              const S = (le = a == null ? void 0 : a.fieldInfoList) != null && le.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : [];
              if (S.length > 0) {
                const me = S.map((t) => `${t.table}.${t.column}`).join(", "), Ce = `${S[0].table}.${S[0].column}`, Fe = s.getMasterDefinition(Ce), p = Fe ? ` (${Fe.entries.length}値)` : "";
                Z = `DB: ${me} (整形)${p}${lt}`, pe = S.map((t) => `${t.table}.${t.column}`).join(`
`) + ((te = a == null ? void 0 : a.note) != null && te.formatDescription ? `
整形: ${a.note.formatDescription}` : "") + ot + ze + ((Se = a == null ? void 0 : a.note) != null && Se.text ? `
${a.note.text}` : "");
              }
            } else Xe === "calculated" ? (Z = "計算値" + ((Le = a == null ? void 0 : a.note) != null && Le.unit ? ` (${a.note.unit})` : "") + lt, pe = (((Ee = a == null ? void 0 : a.note) == null ? void 0 : Ee.calcDescription) || "計算値") + ((Ye = (Je = a == null ? void 0 : a.note) == null ? void 0 : Je.calcSources) != null && Ye.length ? `
参照: ${a.note.calcSources.join(", ")}` : "") + ot + ze + ((Pe = a == null ? void 0 : a.note) != null && Pe.text ? `
${a.note.text}` : "")) : Xe === "static" ? (Z = "固定" + lt, pe = (((Qe = a == null ? void 0 : a.note) == null ? void 0 : Qe.text) || "固定文言") + ze) : Xe === "other" ? (Z = "メモ", pe = ((We = a == null ? void 0 : a.note) == null ? void 0 : We.text) || "") : (et = a == null ? void 0 : a.fieldInfoList) != null && et.length || (m = a == null ? void 0 : a.fieldInfo) != null && m.table && ((l = a == null ? void 0 : a.fieldInfo) != null && l.column) ? (Z = `DB: ${((d = a == null ? void 0 : a.fieldInfoList) != null && d.length ? a.fieldInfoList : a != null && a.fieldInfo ? [a.fieldInfo] : []).map((Ce) => `${Ce.table}.${Ce.column}`).join(", ")}`, pe = ((C = a == null ? void 0 : a.note) == null ? void 0 : C.text) || "") : vt ? (Z = "固定", pe = ((R = a == null ? void 0 : a.note) == null ? void 0 : R.text) || "固定文言") : pt === "v-model" ? (Z = "フォーム", pe = ((ve = a == null ? void 0 : a.note) == null ? void 0 : ve.text) || "") : pt === "api" ? (Z = "データ", pe = ((Ue = a == null ? void 0 : a.note) == null ? void 0 : Ue.text) || "") : (je = a == null ? void 0 : a.note) != null && je.type ? (Z = {
              info: "情報",
              warning: "注意",
              todo: "TODO",
              question: "質問"
            }[a.note.type] || "メモ", pe = ((Ae = a == null ? void 0 : a.note) == null ? void 0 : Ae.text) || "") : (Z = "メモ", pe = ((Be = a == null ? void 0 : a.note) == null ? void 0 : Be.text) || "");
            const kt = pe || ((He = a == null ? void 0 : a.note) == null ? void 0 : He.text) || "", xt = ((Re = a == null ? void 0 : a.note) == null ? void 0 : Re.type) || "info", wt = !!((ut = a == null ? void 0 : a.note) != null && ut.text || (rt = a == null ? void 0 : a.note) != null && rt.displayType);
            r.push({
              selector: tt,
              top: `${Ke.top + V}px`,
              left: `${Ke.left + y}px`,
              width: `${Ke.width}px`,
              height: `${Ke.height}px`,
              color: $(tt),
              isStatic: vt,
              label: Z,
              noteText: kt,
              noteType: xt,
              hasNote: wt
            });
          }
        } catch {
        }
      return r;
    }), ge = X(() => {
      var _;
      const V = H.value, y = K.value, r = [];
      if (!s.isEnabled || s.scanResults.length === 0) return r;
      for (const Y of s.scanResults)
        try {
          const L = document.querySelector(Y.selector);
          if (L) {
            const z = L.getBoundingClientRect();
            r.push({
              selector: Y.selector,
              top: `${z.top + V}px`,
              left: `${z.left + y}px`,
              width: `${z.width}px`,
              height: `${z.height}px`,
              isStatic: ((_ = Y.detected.sourceBinding) == null ? void 0 : _.isStatic) || !1
            });
          }
        } catch {
        }
      return r;
    }), ye = X(() => {
      var Y, L;
      const V = H.value, y = K.value, r = [], _ = s.analysisFilter;
      if (_ === "none" || !s.isEnabled || s.analysisResults.length === 0) return r;
      for (const z of s.analysisResults) {
        if (!z.matched) continue;
        const q = z.element;
        try {
          const Q = document.querySelector(z.selector);
          if (!Q) continue;
          const de = Q.getBoundingClientRect();
          if (de.width > window.innerWidth * 0.8 || de.height > window.innerHeight * 0.5)
            continue;
          const re = Q.querySelector("[data-di-binding]") || (Q.hasAttribute("data-di-binding") ? Q : null);
          let fe = "", P = q.binding || "";
          const h = [...q.tags || []];
          if (re) {
            const te = re.getAttribute("data-di-db"), Se = re.getAttribute("data-di-binding");
            te && (fe = te, h.includes("db") || h.push("db")), Se && (P = Se);
          }
          !fe && q.db && (fe = `${q.db.table}.${q.db.column}`, h.includes("db") || h.push("db"));
          let k = "";
          q.api && (k = `${q.api.method} ${q.api.endpoint}`, h.includes("api") || h.push("api"));
          let J = "";
          if (P) {
            const te = s.getApiSourceForBinding(P);
            te && te.endpoint ? J = `${te.method || "GET"} ${te.endpoint}` : te && te.composable && (J = te.composable);
          }
          const I = (Y = q.conditional) == null ? void 0 : Y.expression, ce = (L = q.modal) == null ? void 0 : L.target, Ve = !!fe || h.includes("db"), ke = !!k || h.includes("api"), xe = h.includes("form"), Me = h.includes("button"), $e = h.includes("link"), Te = h.includes("modal"), _e = h.includes("conditional"), W = h.includes("computed");
          if (_ === "db-api") {
            if (!Ve && !ke) continue;
          } else if (_ === "form") {
            if (!xe) continue;
          } else if (_ === "button") {
            if (!Me) continue;
          } else if (_ === "link") {
            if (!$e) continue;
          } else if (_ === "modal") {
            if (!Te) continue;
          } else if (_ === "conditional") {
            if (!_e) continue;
          } else if (_ === "computed") {
            if (!W) continue;
          } else if (_ === "other" && (Ve || ke || xe || Me || $e || Te || _e || W))
            continue;
          let le = "other";
          Ve ? le = "db" : ke ? le = "api" : xe ? le = "form" : Me ? le = "button" : $e ? le = "link" : Te ? le = "modal" : _e ? le = "conditional" : W && (le = "computed"), r.push({
            selector: z.selector,
            top: `${de.top + V}px`,
            left: `${de.left + y}px`,
            width: `${de.width}px`,
            height: `${de.height}px`,
            tags: h,
            primaryTag: le,
            text: q.text || P || "",
            dbInfo: fe,
            apiInfo: k,
            apiSource: J,
            conditionalExpr: I,
            modalTarget: ce
          });
        } catch {
        }
      }
      return r;
    }), ae = X(() => {
      const V = H.value, y = K.value, r = [];
      if (!s.isEnabled || !s.showUnannotatedDetection || s.unannotatedElements.length === 0) return r;
      for (const _ of s.unannotatedElements)
        try {
          const Y = document.querySelector(_.selector);
          if (!Y) continue;
          const L = Y.getBoundingClientRect();
          r.push({
            selector: _.selector,
            top: `${L.top + V}px`,
            left: `${L.left + y}px`,
            width: `${L.width}px`,
            height: `${L.height}px`,
            category: _.category,
            text: _.text
          });
        } catch {
        }
      return r;
    });
    function x(V) {
      if (!s.isPickMode) return;
      if (V.target.closest("[data-dev-inspector]")) {
        T.value = null, A.value = null, s.setHoveredSelector(null);
        return;
      }
      const r = document.elementFromPoint(V.clientX, V.clientY);
      if (!r || r === document.body || r === document.documentElement) {
        T.value = null, A.value = null, s.setHoveredSelector(null);
        return;
      }
      if (r.closest("[data-dev-inspector]"))
        return;
      A.value = r;
      const _ = r.getBoundingClientRect();
      T.value = {
        top: `${_.top + window.scrollY}px`,
        left: `${_.left + window.scrollX}px`,
        width: `${_.width}px`,
        height: `${_.height}px`
      };
      const Y = s.generateSelector(r);
      s.setHoveredSelector(Y);
    }
    function oe(V) {
      if (!(!s.isPickMode || V.target.closest("[data-dev-inspector]")) && (V.preventDefault(), V.stopPropagation(), A.value)) {
        const r = s.generateSelector(A.value);
        if (s.remapTargetId) {
          s.remapAnnotation(s.remapTargetId, r), s.remapTargetId = null, s.togglePickMode(), s.openPanel();
          return;
        }
        s.startEditing(r), s.togglePickMode();
      }
    }
    function De(V) {
      V.key === "Escape" && s.isPickMode && (s.remapTargetId = null, s.togglePickMode());
    }
    function E() {
      H.value = window.scrollY, K.value = window.scrollX;
    }
    return At(() => {
      window.addEventListener("mousemove", x, !0), window.addEventListener("click", oe, !0), window.addEventListener("keydown", De), window.addEventListener("scroll", E), window.addEventListener("resize", E);
    }), jt(() => {
      window.removeEventListener("mousemove", x, !0), window.removeEventListener("click", oe, !0), window.removeEventListener("keydown", De), window.removeEventListener("scroll", E), window.removeEventListener("resize", E);
    }), it(() => s.isPickMode, (V) => {
      V || (T.value = null, A.value = null);
    }), (V, y) => (o(), we(Oe, { to: "body" }, [
      u(s).isInitializing ? (o(), n("div", Ia, [...y[1] || (y[1] = [
        e("div", { class: "di-loading-content" }, [
          e("div", { class: "di-loading-spinner" }),
          e("span", { class: "di-loading-text" }, "Developer Mode 起動中...")
        ], -1)
      ])])) : c("", !0),
      u(s).isPickMode && T.value ? (o(), n("div", {
        key: 1,
        "data-dev-inspector": "",
        class: "di-highlight",
        style: Ie({
          top: T.value.top,
          left: T.value.left,
          width: T.value.width,
          height: T.value.height
        })
      }, [
        e("div", Ma, v(u(s).hoveredSelector), 1)
      ], 4)) : c("", !0),
      u(s).isPickMode ? (o(), n("div", {
        key: 2,
        "data-dev-inspector": "",
        class: "di-pick-banner",
        style: Ie(u(s).remapTargetId ? { background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)" } : {})
      }, [
        e("span", null, v(u(s).remapTargetId ? "新しい要素をクリックして再設定" : "要素をクリックしてメモを追加"), 1),
        y[2] || (y[2] = e("kbd", null, "ESC", -1)),
        y[3] || (y[3] = e("span", { class: "di-pick-hint" }, "でキャンセル", -1))
      ], 4)) : c("", !0),
      u(s).isEnabled && !u(s).isPickMode && !u(s).editingElementId ? (o(!0), n(D, { key: 3 }, j(ee.value, (r) => w((o(), n("div", {
        key: r.selector,
        "data-dev-inspector": "",
        class: G(r.hasNote ? "di-note-highlight" : "di-annotation-box"),
        style: Ie({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height,
          borderColor: (r.hasNote, r.color),
          backgroundColor: r.color + (r.hasNote ? "18" : "15")
        }),
        onClick: (_) => u(s).startEditing(r.selector)
      }, [
        r.hasNote ? (o(), n("div", Sa, [
          e("span", {
            class: "di-note-indicator",
            style: Ie({ backgroundColor: r.color })
          }, null, 4),
          e("div", {
            class: "di-annotation-label",
            style: Ie({ backgroundColor: r.color })
          }, v(r.label), 5)
        ])) : (o(), n("div", {
          key: 1,
          class: "di-annotation-label",
          style: Ie({ backgroundColor: r.color })
        }, v(r.label), 5))
      ], 14, Ta)), [
        [Nt, !r.hasNote || u(s).showNoteHighlights && ue(r.selector)]
      ])), 128)) : c("", !0),
      u(s).isEnabled && !u(s).editingElementId && ge.value.length > 0 && u(s).analysisResults.length === 0 ? (o(), n(D, { key: 4 }, [
        (o(!0), n(D, null, j(ge.value, (r) => (o(), n("div", {
          key: "scan-" + r.selector,
          "data-dev-inspector": "",
          class: G(["di-scan-highlight", { "di-scan-static": r.isStatic }]),
          style: Ie({
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height
          }),
          onClick: (_) => u(s).startEditing(r.selector)
        }, [
          e("div", {
            class: G(["di-scan-label", { "di-scan-label-static": r.isStatic }])
          }, v(r.isStatic ? "固定文言" : "動的データ"), 3)
        ], 14, Da))), 128)),
        e("div", Ea, [
          e("span", null, v(ge.value.length) + "件の要素を検出", 1),
          e("button", {
            onClick: y[0] || (y[0] = (r) => u(s).clearScanResults()),
            class: "di-scan-banner-close"
          }, "✕ 閉じる")
        ])
      ], 64)) : c("", !0),
      u(s).isEnabled && !u(s).editingElementId && ye.value.length > 0 ? (o(), n(D, { key: 5 }, [
        (o(!0), n(D, null, j(ye.value, (r) => (o(), n("div", {
          key: "analysis-" + r.selector,
          "data-dev-inspector": "",
          class: G(["di-analysis-highlight", "di-analysis-" + r.primaryTag]),
          style: Ie({
            top: r.top,
            left: r.left,
            width: r.width,
            height: r.height
          }),
          onClick: (_) => u(s).startEditing(r.selector)
        }, [
          e("div", {
            class: G(["di-analysis-label", "di-analysis-label-" + r.primaryTag])
          }, [
            e("span", Va, v(ie(r.primaryTag)), 1),
            r.tags.length > 1 ? (o(), n("span", La, "+" + v(r.tags.length - 1), 1)) : c("", !0),
            r.dbInfo ? (o(), n("span", Pa, v(r.dbInfo), 1)) : c("", !0),
            r.apiSource ? (o(), n("span", Aa, "← " + v(r.apiSource), 1)) : c("", !0),
            r.conditionalExpr ? (o(), n("span", Ba, v(r.conditionalExpr), 1)) : c("", !0),
            e("button", {
              class: "di-analysis-delete",
              onClick: be((_) => u(s).removeAnalysisResult(r.selector), ["stop"]),
              title: "この要素を非表示"
            }, "×", 8, Fa)
          ], 2),
          r.text && r.text.length < 30 ? (o(), n("div", ja, v(r.text), 1)) : c("", !0)
        ], 14, Ua))), 128)),
        e("div", Na, [
          e("span", null, "📊 分析データ: " + v(ye.value.length) + "件の要素", 1)
        ])
      ], 64)) : c("", !0),
      u(s).isEnabled && !u(s).isPickMode && !u(s).editingElementId && ae.value.length > 0 ? (o(!0), n(D, { key: 6 }, j(ae.value, (r) => (o(), n("div", {
        key: "unannotated-" + r.selector,
        "data-dev-inspector": "",
        class: G(["di-unannotated-highlight", {
          "di-unannotated-hovered": u(s).hoveredUnannotatedSelector === r.selector,
          ["di-unannotated-hovered-" + r.category]: u(s).hoveredUnannotatedSelector === r.selector
        }]),
        style: Ie({
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height
        }),
        onClick: (_) => u(s).quickAnnotate(r.selector, r.category === "form" ? "form" : r.category === "action" ? "action" : "datasource")
      }, [
        e("div", {
          class: G(["di-unannotated-label", { ["di-unannotated-label-" + r.category]: u(s).hoveredUnannotatedSelector === r.selector }])
        }, [
          e("span", null, v(r.category === "binding" ? "DB" : r.category === "form" ? "Form" : "Act"), 1),
          r.text ? (o(), n("span", Oa, v(r.text), 1)) : c("", !0)
        ], 2)
      ], 14, qa))), 128)) : c("", !0)
    ]));
  }
}), Ra = /* @__PURE__ */ gt(Ha, [["__scopeId", "data-v-03d274cc"]]), za = { class: "di-editor-modal" }, Ga = { class: "di-editor-header" }, Ya = { class: "di-header-actions" }, Ka = { class: "di-path-badge" }, Xa = { class: "di-editor-content" }, Za = { class: "di-form-group" }, Ja = { class: "di-form-group" }, Qa = { class: "di-form-section" }, Wa = { class: "di-form-section-header" }, ed = { class: "di-api-header-actions" }, td = { class: "di-dropdown-wrapper" }, ld = {
  key: 1,
  class: "di-suggestion-dropdown"
}, sd = {
  key: 0,
  class: "di-suggestion-actions"
}, od = ["onMousedown", "disabled"], nd = { class: "di-suggestion-endpoint" }, id = {
  key: 0,
  class: "di-suggestion-timing"
}, ad = {
  key: 1,
  class: "di-suggestion-empty"
}, dd = {
  key: 0,
  class: "di-suggestion-banner"
}, ud = {
  key: 1,
  class: "di-suggestion-banner di-suggestion-banner-empty"
}, rd = {
  key: 2,
  class: "di-empty-hint"
}, cd = { class: "di-api-entry-row" }, vd = ["onUpdate:modelValue"], pd = ["value"], md = ["onUpdate:modelValue"], hd = ["onClick"], yd = { class: "di-api-entry-row2" }, fd = ["onUpdate:modelValue"], bd = ["onUpdate:modelValue"], gd = ["value"], kd = { class: "di-form-section" }, xd = { class: "di-auth-row" }, wd = {
  key: 0,
  class: "di-auth-details"
}, $d = { class: "di-form-group" }, _d = { class: "di-form-group" }, Cd = { class: "di-form-group" }, Id = { class: "di-form-group" }, Md = { class: "di-editor-footer" }, Td = { class: "di-editor-actions" }, Sd = ["disabled"], Dd = /* @__PURE__ */ at({
  __name: "DevScreenEditor",
  setup(N) {
    const s = dt(), T = f(""), A = f(""), H = f([]), K = f(!1), ne = f(""), se = f(""), ie = f(""), $ = f(""), ue = f(!1), ee = f([]), ge = f(!1), ye = X(() => typeof window < "u" ? window.location.pathname : "/");
    it(() => s.editingScreen, (P) => {
      P && ae();
    });
    function ae() {
      var h, k, J, I;
      const P = s.getScreenConfig();
      P ? (T.value = P.name, A.value = P.description || "", H.value = P.apis.map((ce) => ({ ...ce })), K.value = ((h = P.auth) == null ? void 0 : h.required) || !1, ne.value = ((J = (k = P.auth) == null ? void 0 : k.roles) == null ? void 0 : J.join(", ")) || "", se.value = ((I = P.auth) == null ? void 0 : I.description) || "", ie.value = P.figmaUrl || "", $.value = P.notes || "") : x();
    }
    function x() {
      T.value = "", A.value = "", H.value = [], K.value = !1, ne.value = "", se.value = "", ie.value = "", $.value = "";
    }
    function oe() {
      s.editingScreen = !1, x();
    }
    function De() {
      H.value.push({
        method: "GET",
        endpoint: "",
        description: "",
        loadTiming: "onMount"
      });
    }
    function E(P) {
      H.value.splice(P, 1);
    }
    function V() {
      if (!T.value.trim()) return;
      const P = {
        path: ye.value,
        name: T.value.trim(),
        description: A.value.trim() || void 0,
        apis: H.value.filter((h) => h.endpoint.trim()),
        auth: K.value || ne.value.trim() ? {
          required: K.value,
          roles: ne.value.trim() ? ne.value.split(",").map((h) => h.trim()).filter(Boolean) : void 0,
          description: se.value.trim() || void 0
        } : void 0,
        figmaUrl: ie.value.trim() || void 0,
        notes: $.value.trim() || void 0,
        updatedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      s.setScreenConfig(P), oe();
    }
    function y() {
      s.deleteScreenConfig(ye.value), oe();
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
    function Y() {
      ee.value = s.suggestScreenApis(), ue.value = !0;
    }
    function L(P) {
      return H.value.some(
        (h) => h.method === P.method && h.endpoint === P.endpoint
      );
    }
    const z = X(() => ee.value.filter((P) => !L(P)));
    function q(P) {
      L(P) || H.value.push({ ...P });
    }
    function Q() {
      for (const P of z.value)
        H.value.push({ ...P });
    }
    function de() {
      setTimeout(() => {
        ge.value = !1;
      }, 150);
    }
    const re = ["GET", "POST", "PUT", "DELETE", "PATCH"], fe = [
      { value: "onMount", label: "画面読込時" },
      { value: "action", label: "アクション時" },
      { value: "conditional", label: "条件付き" }
    ];
    return (P, h) => (o(), we(Oe, { to: "body" }, [
      u(s).editingScreen ? (o(), n("div", {
        key: 0,
        class: "di-editor-overlay",
        onClick: be(oe, ["self"]),
        "data-dev-inspector": ""
      }, [
        e("div", za, [
          e("div", Ga, [
            h[9] || (h[9] = e("h3", null, "画面情報を編集", -1)),
            e("div", Ya, [
              e("span", Ka, v(ye.value), 1),
              e("button", {
                onClick: oe,
                class: "di-editor-close"
              }, [
                g(u(Ge), { style: { width: "20px", height: "20px" } })
              ])
            ])
          ]),
          e("div", Xa, [
            e("div", Za, [
              h[10] || (h[10] = e("label", { class: "di-form-label" }, "画面名 *", -1)),
              w(e("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (k) => T.value = k),
                type: "text",
                placeholder: "ユーザー詳細",
                class: "di-input"
              }, null, 512), [
                [U, T.value]
              ])
            ]),
            e("div", Ja, [
              h[11] || (h[11] = e("label", { class: "di-form-label" }, "画面の説明", -1)),
              w(e("textarea", {
                "onUpdate:modelValue": h[1] || (h[1] = (k) => A.value = k),
                rows: "2",
                placeholder: "この画面の概要...",
                class: "di-textarea"
              }, null, 512), [
                [U, A.value]
              ])
            ]),
            e("div", Qa, [
              e("div", Wa, [
                h[15] || (h[15] = e("label", { class: "di-form-label" }, "API一覧", -1)),
                e("div", ed, [
                  e("button", {
                    onClick: Y,
                    class: "di-btn-suggest",
                    title: "要素情報からAPI推定"
                  }, [
                    g(u(bt), { style: { width: "13px", height: "13px" } }),
                    h[12] || (h[12] = B(" 自動推定 ", -1))
                  ]),
                  e("div", td, [
                    ee.value.length > 0 ? (o(), n("button", {
                      key: 0,
                      onClick: h[2] || (h[2] = (k) => ge.value = !ge.value),
                      onBlur: h[3] || (h[3] = (k) => de()),
                      class: "di-btn-dropdown",
                      title: "推定結果から選択"
                    }, [
                      g(u(zt), { style: { width: "13px", height: "13px" } }),
                      h[13] || (h[13] = B(" 候補から選択 ", -1))
                    ], 32)) : c("", !0),
                    ge.value && ee.value.length > 0 ? (o(), n("div", ld, [
                      z.value.length > 0 ? (o(), n("div", sd, [
                        e("button", {
                          onMousedown: be(Q, ["prevent"]),
                          class: "di-suggestion-add-all"
                        }, " すべて追加 (" + v(z.value.length) + ") ", 33)
                      ])) : c("", !0),
                      (o(!0), n(D, null, j(ee.value, (k, J) => (o(), n("button", {
                        key: J,
                        onMousedown: be((I) => q(k), ["prevent"]),
                        class: G(["di-suggestion-item", { "di-suggestion-added": L(k) }]),
                        disabled: L(k)
                      }, [
                        e("span", {
                          class: "di-suggestion-method",
                          style: Ie({ backgroundColor: r[k.method] + "20", color: r[k.method] })
                        }, v(k.method), 5),
                        e("code", nd, v(k.endpoint), 1),
                        k.loadTiming ? (o(), n("span", id, v(_[k.loadTiming] || k.loadTiming), 1)) : c("", !0),
                        L(k) ? (o(), we(u(Rt), {
                          key: 1,
                          style: { width: "12px", height: "12px", color: "#10b981", "flex-shrink": "0" }
                        })) : c("", !0)
                      ], 42, od))), 128)),
                      ee.value.length === 0 ? (o(), n("div", ad, " 推定結果がありません ")) : c("", !0)
                    ])) : c("", !0)
                  ]),
                  e("button", {
                    onClick: De,
                    class: "di-btn-add"
                  }, [
                    g(u($t), { style: { width: "14px", height: "14px" } }),
                    h[14] || (h[14] = B(" 手動追加 ", -1))
                  ])
                ])
              ]),
              ue.value && ee.value.length > 0 && z.value.length > 0 ? (o(), n("div", dd, [
                g(u(bt), { style: { width: "13px", height: "13px", color: "#f59e0b", "flex-shrink": "0" } }),
                e("span", null, v(ee.value.length) + "件のAPIを推定しました", 1),
                e("button", {
                  onMousedown: be(Q, ["prevent"]),
                  class: "di-suggestion-banner-btn"
                }, "すべて追加", 32)
              ])) : ue.value && ee.value.length === 0 ? (o(), n("div", ud, [...h[16] || (h[16] = [
                e("span", null, "要素のDB情報からAPIを推定できませんでした。要素にDB情報を登録してください。", -1)
              ])])) : c("", !0),
              H.value.length === 0 && !ue.value ? (o(), n("div", rd, " APIが未登録です。「自動推定」で要素情報からAPIを推定できます。 ")) : c("", !0),
              (o(!0), n(D, null, j(H.value, (k, J) => (o(), n("div", {
                key: J,
                class: "di-api-entry"
              }, [
                e("div", cd, [
                  w(e("select", {
                    "onUpdate:modelValue": (I) => k.method = I,
                    class: "di-select di-select-method"
                  }, [
                    (o(), n(D, null, j(re, (I) => e("option", {
                      key: I,
                      value: I
                    }, v(I), 9, pd)), 64))
                  ], 8, vd), [
                    [qe, k.method]
                  ]),
                  w(e("input", {
                    "onUpdate:modelValue": (I) => k.endpoint = I,
                    type: "text",
                    placeholder: "/api/users/:id",
                    class: "di-input di-input-endpoint"
                  }, null, 8, md), [
                    [U, k.endpoint]
                  ]),
                  e("button", {
                    onClick: (I) => E(J),
                    class: "di-btn-remove"
                  }, [
                    g(u(ll), { style: { width: "14px", height: "14px" } })
                  ], 8, hd)
                ]),
                e("div", yd, [
                  w(e("input", {
                    "onUpdate:modelValue": (I) => k.description = I,
                    type: "text",
                    placeholder: "説明（任意）",
                    class: "di-input di-input-desc"
                  }, null, 8, fd), [
                    [U, k.description]
                  ]),
                  w(e("select", {
                    "onUpdate:modelValue": (I) => k.loadTiming = I,
                    class: "di-select di-select-timing"
                  }, [
                    (o(), n(D, null, j(fe, (I) => e("option", {
                      key: I.value,
                      value: I.value
                    }, v(I.label), 9, gd)), 64))
                  ], 8, bd), [
                    [qe, k.loadTiming]
                  ])
                ])
              ]))), 128))
            ]),
            e("div", kd, [
              h[20] || (h[20] = e("label", { class: "di-form-label" }, "認証設定", -1)),
              e("div", xd, [
                e("button", {
                  onClick: h[4] || (h[4] = (k) => K.value = !K.value),
                  class: G(["di-toggle-btn", { active: K.value }])
                }, [
                  e("span", {
                    class: G(["di-toggle-knob", { active: K.value }])
                  }, null, 2)
                ], 2),
                h[17] || (h[17] = e("span", { class: "di-auth-label" }, "ログイン必須", -1))
              ]),
              K.value ? (o(), n("div", wd, [
                e("div", $d, [
                  h[18] || (h[18] = e("label", { class: "di-form-label" }, "必要ロール（カンマ区切り）", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": h[5] || (h[5] = (k) => ne.value = k),
                    type: "text",
                    placeholder: "admin, manager",
                    class: "di-input"
                  }, null, 512), [
                    [U, ne.value]
                  ])
                ]),
                e("div", _d, [
                  h[19] || (h[19] = e("label", { class: "di-form-label" }, "認証メモ", -1)),
                  w(e("input", {
                    "onUpdate:modelValue": h[6] || (h[6] = (k) => se.value = k),
                    type: "text",
                    placeholder: "自分のデータのみ閲覧可",
                    class: "di-input"
                  }, null, 512), [
                    [U, se.value]
                  ])
                ])
              ])) : c("", !0)
            ]),
            e("div", Cd, [
              h[21] || (h[21] = e("label", { class: "di-form-label" }, "Figma URL", -1)),
              w(e("input", {
                "onUpdate:modelValue": h[7] || (h[7] = (k) => ie.value = k),
                type: "text",
                placeholder: "https://www.figma.com/design/...",
                class: "di-input"
              }, null, 512), [
                [U, ie.value]
              ])
            ]),
            e("div", Id, [
              h[22] || (h[22] = e("label", { class: "di-form-label" }, "メモ", -1)),
              w(e("textarea", {
                "onUpdate:modelValue": h[8] || (h[8] = (k) => $.value = k),
                rows: "3",
                placeholder: "この画面に関するメモ...",
                class: "di-textarea"
              }, null, 512), [
                [U, $.value]
              ])
            ])
          ]),
          e("div", Md, [
            e("button", {
              onClick: y,
              class: "di-btn-delete"
            }, [
              g(u(nt), { style: { width: "14px", height: "14px" } }),
              h[23] || (h[23] = B(" 削除 ", -1))
            ]),
            e("div", Td, [
              e("button", {
                onClick: oe,
                class: "di-btn-cancel"
              }, "キャンセル"),
              e("button", {
                onClick: V,
                class: "di-btn-save",
                disabled: !T.value.trim()
              }, [
                g(u(Bt), { style: { width: "14px", height: "14px" } }),
                h[24] || (h[24] = B(" 保存 ", -1))
              ], 8, Sd)
            ])
          ])
        ])
      ])) : c("", !0)
    ]));
  }
}), Ed = /* @__PURE__ */ gt(Dd, [["__scopeId", "data-v-a3b58e7a"]]), Ud = {
  key: 0,
  "data-dev-inspector": ""
}, Vd = /* @__PURE__ */ at({
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
  setup(N) {
    const s = N, T = dt();
    return At(() => {
      T.init({
        storageKey: s.storageKey,
        enabledInProduction: s.enabledInProduction,
        initialAnnotations: s.initialAnnotations
      });
    }), (A, H) => u(T).isAvailable ? (o(), n("div", Ud, [
      g(an),
      g(Ca),
      g(Ed),
      g(Ra)
    ])) : c("", !0);
  }
}), Ad = {
  install(N, s = {}) {
    const { autoRegister: T = !0, ...A } = s;
    T && N.component("DevInspector", Vd), N.provide("devInspectorOptions", A);
  }
};
export {
  Ca as DevElementEditor,
  Vd as DevInspector,
  an as DevPanel,
  Ra as DevPickOverlay,
  Ed as DevScreenEditor,
  Ad as VueDevInspector,
  Ad as default,
  jd as useDevInspector,
  dt as useDevInspectorStore,
  qd as vitePluginDevInspector
};
