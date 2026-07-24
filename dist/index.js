"use strict";var e=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=e(function(v,o){
var n=typeof Float64Array=="function"?Float64Array:null;o.exports=n
});var i=e(function(A,l){
var p=require('@stdlib/assert-is-float64array/dist'),u=s();function y(){var a,r;if(typeof u!="function")return!1;try{r=new u([1,3.14,-3.14,NaN]),a=p(r)&&r[0]===1&&r[1]===3.14&&r[2]===-3.14&&r[3]!==r[3]}catch(t){a=!1}return a}l.exports=y
});var c=i();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
