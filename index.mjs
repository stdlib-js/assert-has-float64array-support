// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float64array@esm/index.mjs";var r="function"==typeof Float64Array?Float64Array:null,a=t,n=r;var e=function(){var t,r;if("function"!=typeof n)return!1;try{r=new n([1,3.14,-3.14,NaN]),t=a(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};export{e as default};
//# sourceMappingURL=index.mjs.map
