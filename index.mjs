// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64array@v0.2.2-esm/index.mjs";var r="function"==typeof Float64Array?Float64Array:null;function a(){var a,n;if("function"!=typeof r)return!1;try{n=new r([1,3.14,-3.14,NaN]),a=t(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(t){a=!1}return a}export{a as default};
//# sourceMappingURL=index.mjs.map
