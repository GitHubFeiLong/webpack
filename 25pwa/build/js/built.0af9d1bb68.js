(()=>{var r={9944:r=>{r.exports=function(r){if("function"!=typeof r)throw TypeError(String(r)+" is not a function");return r}},6112:(r,t,e)=>{var n=e(8759);r.exports=function(r){if(!n(r))throw TypeError(String(r)+" is not an object");return r}},6198:(r,t,e)=>{var n=e(4088),o=e(4005),i=e(7740),u=function(r){return function(t,e,u){var c,a=n(t),f=o(a.length),s=i(u,f);if(r&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((r||s in a)&&a[s]===e)return r||s||0;return!r&&-1}};r.exports={includes:u(!0),indexOf:u(!1)}},2802:(r,t,e)=>{"use strict";var n=e(3677);r.exports=function(r,t){var e=[][r];return!!e&&n((function(){e.call(null,t||function(){throw 1},1)}))}},8758:(r,t,e)=>{var n=e(9944),o=e(3060),i=e(5974),u=e(4005),c=function(r){return function(t,e,c,a){n(e);var f=o(t),s=i(f),p=u(f.length),l=r?p-1:0,v=r?-1:1;if(c<2)for(;;){if(l in s){a=s[l],l+=v;break}if(l+=v,r?l<0:p<=l)throw TypeError("Reduce of empty array with no initial value")}for(;r?l>=0:p>l;l+=v)l in s&&(a=e(a,s[l],l,f));return a}};r.exports={left:c(!1),right:c(!0)}},2306:r=>{var t={}.toString;r.exports=function(r){return t.call(r).slice(8,-1)}},8474:(r,t,e)=>{var n=e(3167),o=e(6095),i=e(4399),u=e(7826);r.exports=function(r,t){for(var e=o(t),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(r,s)||c(r,s,a(t,s))}}},2585:(r,t,e)=>{var n=e(5283),o=e(7826),i=e(5736);r.exports=n?function(r,t,e){return o.f(r,t,i(1,e))}:function(r,t,e){return r[t]=e,r}},5736:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},5283:(r,t,e)=>{var n=e(3677);r.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(r,t,e)=>{var n=e(2086),o=e(8759),i=n.document,u=o(i)&&o(i.createElement);r.exports=function(r){return u?i.createElement(r):{}}},1801:(r,t,e)=>{var n=e(2306),o=e(2086);r.exports="process"==n(o.process)},4999:(r,t,e)=>{var n=e(563);r.exports=n("navigator","userAgent")||""},1448:(r,t,e)=>{var n,o,i=e(2086),u=e(4999),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=n[1]),r.exports=o&&+o},8684:r=>{r.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(r,t,e)=>{var n=e(2086),o=e(4399).f,i=e(2585),u=e(1007),c=e(3648),a=e(8474),f=e(7189);r.exports=function(r,t){var e,s,p,l,v,g=r.target,h=r.global,y=r.stat;if(e=h?n:y?n[g]||c(g,{}):(n[g]||{}).prototype)for(s in t){if(l=t[s],p=r.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:g+(y?".":"#")+s,r.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(r.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,r)}}},3677:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},563:(r,t,e)=>{var n=e(9775),o=e(2086),i=function(r){return"function"==typeof r?r:void 0};r.exports=function(r,t){return arguments.length<2?i(n[r])||i(o[r]):n[r]&&n[r][t]||o[r]&&o[r][t]}},2086:(r,t,e)=>{var n=function(r){return r&&r.Math==Math&&r};r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},3167:r=>{var t={}.hasOwnProperty;r.exports=function(r,e){return t.call(r,e)}},7153:r=>{r.exports={}},6761:(r,t,e)=>{var n=e(5283),o=e(3677),i=e(821);r.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(r,t,e)=>{var n=e(3677),o=e(2306),i="".split;r.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(r){return"String"==o(r)?i.call(r,""):Object(r)}:Object},9277:(r,t,e)=>{var n=e(4489),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(r){return o.call(r)}),r.exports=n.inspectSource},3278:(r,t,e)=>{var n,o,i,u=e(9316),c=e(2086),a=e(8759),f=e(2585),s=e(3167),p=e(4489),l=e(8944),v=e(7153),g=c.WeakMap;if(u){var h=p.state||(p.state=new g),y=h.get,x=h.has,d=h.set;n=function(r,t){return t.facade=r,d.call(h,r,t),t},o=function(r){return y.call(h,r)||{}},i=function(r){return x.call(h,r)}}else{var b=l("state");v[b]=!0,n=function(r,t){return t.facade=r,f(r,b,t),t},o=function(r){return s(r,b)?r[b]:{}},i=function(r){return s(r,b)}}r.exports={set:n,get:o,has:i,enforce:function(r){return i(r)?o(r):n(r,{})},getterFor:function(r){return function(t){var e;if(!a(t)||(e=o(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return e}}}},7189:(r,t,e)=>{var n=e(3677),o=/#|\.prototype\./,i=function(r,t){var e=c[u(r)];return e==f||e!=a&&("function"==typeof t?n(t):!!t)},u=i.normalize=function(r){return String(r).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";r.exports=i},8759:r=>{r.exports=function(r){return"object"==typeof r?null!==r:"function"==typeof r}},3296:r=>{r.exports=!1},9316:(r,t,e)=>{var n=e(2086),o=e(9277),i=n.WeakMap;r.exports="function"==typeof i&&/native code/.test(o(i))},7826:(r,t,e)=>{var n=e(5283),o=e(6761),i=e(6112),u=e(1288),c=Object.defineProperty;t.f=n?c:function(r,t,e){if(i(r),t=u(t,!0),i(e),o)try{return c(r,t,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(r[t]=e.value),r}},4399:(r,t,e)=>{var n=e(5283),o=e(7446),i=e(5736),u=e(4088),c=e(1288),a=e(3167),f=e(6761),s=Object.getOwnPropertyDescriptor;t.f=n?s:function(r,t){if(r=u(r),t=c(t,!0),f)try{return s(r,t)}catch(r){}if(a(r,t))return i(!o.f.call(r,t),r[t])}},62:(r,t,e)=>{var n=e(1352),o=e(8684).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(r){return n(r,o)}},6952:(r,t)=>{t.f=Object.getOwnPropertySymbols},1352:(r,t,e)=>{var n=e(3167),o=e(4088),i=e(6198).indexOf,u=e(7153);r.exports=function(r,t){var e,c=o(r),a=0,f=[];for(e in c)!n(u,e)&&n(c,e)&&f.push(e);for(;t.length>a;)n(c,e=t[a++])&&(~i(f,e)||f.push(e));return f}},7446:(r,t)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);t.f=o?function(r){var t=n(this,r);return!!t&&t.enumerable}:e},6095:(r,t,e)=>{var n=e(563),o=e(62),i=e(6952),u=e(6112);r.exports=n("Reflect","ownKeys")||function(r){var t=o.f(u(r)),e=i.f;return e?t.concat(e(r)):t}},9775:(r,t,e)=>{var n=e(2086);r.exports=n},1007:(r,t,e)=>{var n=e(2086),o=e(2585),i=e(3167),u=e(3648),c=e(9277),a=e(3278),f=a.get,s=a.enforce,p=String(String).split("String");(r.exports=function(r,t,e,c){var a,f=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof t||i(e,"name")||o(e,"name",t),(a=s(e)).source||(a.source=p.join("string"==typeof t?t:""))),r!==n?(f?!v&&r[t]&&(l=!0):delete r[t],l?r[t]=e:o(r,t,e)):l?r[t]=e:u(t,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},9586:r=>{r.exports=function(r){if(null==r)throw TypeError("Can't call method on "+r);return r}},3648:(r,t,e)=>{var n=e(2086),o=e(2585);r.exports=function(r,t){try{o(n,r,t)}catch(e){n[r]=t}return t}},8944:(r,t,e)=>{var n=e(9197),o=e(5422),i=n("keys");r.exports=function(r){return i[r]||(i[r]=o(r))}},4489:(r,t,e)=>{var n=e(2086),o=e(3648),i="__core-js_shared__",u=n[i]||o(i,{});r.exports=u},9197:(r,t,e)=>{var n=e(3296),o=e(4489);(r.exports=function(r,t){return o[r]||(o[r]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7740:(r,t,e)=>{var n=e(9679),o=Math.max,i=Math.min;r.exports=function(r,t){var e=n(r);return e<0?o(e+t,0):i(e,t)}},4088:(r,t,e)=>{var n=e(5974),o=e(9586);r.exports=function(r){return n(o(r))}},9679:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){return isNaN(r=+r)?0:(r>0?e:t)(r)}},4005:(r,t,e)=>{var n=e(9679),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},3060:(r,t,e)=>{var n=e(9586);r.exports=function(r){return Object(n(r))}},1288:(r,t,e)=>{var n=e(8759);r.exports=function(r,t){if(!n(r))return r;var e,o;if(t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;if("function"==typeof(e=r.valueOf)&&!n(o=e.call(r)))return o;if(!t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;throw TypeError("Can't convert object to primitive value")}},5422:r=>{var t=0,e=Math.random();r.exports=function(r){return"Symbol("+String(void 0===r?"":r)+")_"+(++t+e).toString(36)}},3902:(r,t,e)=>{"use strict";var n=e(1695),o=e(8758).left,i=e(2802),u=e(1448),c=e(1801);n({target:"Array",proto:!0,forced:!i("reduce")||!c&&u>79&&u<83},{reduce:function(r){return o(this,r,arguments.length,arguments.length>1?arguments[1]:void 0)}})}},t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return r[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),(()=>{"use strict";e(3902),console.log(NaN),console.log([1,2,3,4,5,6].reduce(((r,t)=>r+t),0)),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./service-worker.js").then((()=>{console.log("serviceworker 注册成功了")})).catch((()=>{console.log("serviceworker注册失败了")}))}))})()})();
//# sourceMappingURL=built.0af9d1bb68.js.map