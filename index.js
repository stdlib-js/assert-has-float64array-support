// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,n=o,e=function(t){return n.call(t)},r=Object.prototype.hasOwnProperty,l=function(t,o){return null!=t&&r.call(t,o)},f="function"==typeof Symbol?Symbol.toStringTag:"",a=l,u=f,y=o,i=e,c=function(t){var o,n,e;if(null==t)return y.call(t);n=t[u],o=a(t,u);try{t[u]=void 0}catch(o){return y.call(t)}return e=y.call(t),o?t[u]=n:delete t[u],e},p=t&&"symbol"==typeof Symbol.toStringTag?c:i,b="function"==typeof Float64Array,s=function(t){return b&&t instanceof Float64Array||"[object Float64Array]"===p(t)},d="function"==typeof Float64Array?Float64Array:null;return function(){var t,o;if("function"!=typeof d)return!1;try{o=new d([1,3.14,-3.14,NaN]),t=s(o)&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).hasFloat64ArraySupport=o();
//# sourceMappingURL=index.js.map
