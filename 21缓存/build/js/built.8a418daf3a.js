(()=>{var t={9944:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},6112:(t,r,e)=>{var n=e(8759);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},6198:(t,r,e)=>{var n=e(4088),o=e(4005),i=e(7740),u=function(t){return function(r,e,u){var c,a=n(r),f=o(a.length),s=i(u,f);if(t&&e!=e){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},2802:(t,r,e)=>{"use strict";var n=e(3677);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){throw 1},1)}))}},8758:(t,r,e)=>{var n=e(9944),o=e(3060),i=e(5974),u=e(4005),c=function(t){return function(r,e,c,a){n(e);var f=o(r),s=i(f),p=u(f.length),l=t?p-1:0,v=t?-1:1;if(c<2)for(;;){if(l in s){a=s[l],l+=v;break}if(l+=v,t?l<0:p<=l)throw TypeError("Reduce of empty array with no initial value")}for(;t?l>=0:p>l;l+=v)l in s&&(a=e(a,s[l],l,f));return a}};t.exports={left:c(!1),right:c(!0)}},2306:t=>{var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},8474:(t,r,e)=>{var n=e(3167),o=e(6095),i=e(4399),u=e(7826);t.exports=function(t,r){for(var e=o(r),c=u.f,a=i.f,f=0;f<e.length;f++){var s=e[f];n(t,s)||c(t,s,a(r,s))}}},2585:(t,r,e)=>{var n=e(5283),o=e(7826),i=e(5736);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},5736:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},5283:(t,r,e)=>{var n=e(3677);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},821:(t,r,e)=>{var n=e(2086),o=e(8759),i=n.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},1801:(t,r,e)=>{var n=e(2306),o=e(2086);t.exports="process"==n(o.process)},4999:(t,r,e)=>{var n=e(563);t.exports=n("navigator","userAgent")||""},1448:(t,r,e)=>{var n,o,i=e(2086),u=e(4999),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(n=f.split("."))[0]+n[1]:u&&(!(n=u.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=u.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},8684:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1695:(t,r,e)=>{var n=e(2086),o=e(4399).f,i=e(2585),u=e(1007),c=e(3648),a=e(8474),f=e(7189);t.exports=function(t,r){var e,s,p,l,v,y=t.target,h=t.global,g=t.stat;if(e=h?n:g?n[y]||c(y,{}):(n[y]||{}).prototype)for(s in r){if(l=r[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(h?s:y+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,t)}}},3677:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},563:(t,r,e)=>{var n=e(9775),o=e(2086),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][r]||o[t]&&o[t][r]}},2086:(t,r,e)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},3167:t=>{var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},7153:t=>{t.exports={}},6761:(t,r,e)=>{var n=e(5283),o=e(3677),i=e(821);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5974:(t,r,e)=>{var n=e(3677),o=e(2306),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},9277:(t,r,e)=>{var n=e(4489),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},3278:(t,r,e)=>{var n,o,i,u=e(9316),c=e(2086),a=e(8759),f=e(2585),s=e(3167),p=e(4489),l=e(8944),v=e(7153),y=c.WeakMap;if(u){var h=p.state||(p.state=new y),g=h.get,x=h.has,d=h.set;n=function(t,r){return r.facade=t,d.call(h,t,r),r},o=function(t){return g.call(h,t)||{}},i=function(t){return x.call(h,t)}}else{var b=l("state");v[b]=!0,n=function(t,r){return r.facade=t,f(t,b,r),r},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!a(r)||(e=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},7189:(t,r,e)=>{var n=e(3677),o=/#|\.prototype\./,i=function(t,r){var e=c[u(t)];return e==f||e!=a&&("function"==typeof r?n(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},8759:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},3296:t=>{t.exports=!1},9316:(t,r,e)=>{var n=e(2086),o=e(9277),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},7826:(t,r,e)=>{var n=e(5283),o=e(6761),i=e(6112),u=e(1288),c=Object.defineProperty;r.f=n?c:function(t,r,e){if(i(t),r=u(r,!0),i(e),o)try{return c(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},4399:(t,r,e)=>{var n=e(5283),o=e(7446),i=e(5736),u=e(4088),c=e(1288),a=e(3167),f=e(6761),s=Object.getOwnPropertyDescriptor;r.f=n?s:function(t,r){if(t=u(t),r=c(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},62:(t,r,e)=>{var n=e(1352),o=e(8684).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},6952:(t,r)=>{r.f=Object.getOwnPropertySymbols},1352:(t,r,e)=>{var n=e(3167),o=e(4088),i=e(6198).indexOf,u=e(7153);t.exports=function(t,r){var e,c=o(t),a=0,f=[];for(e in c)!n(u,e)&&n(c,e)&&f.push(e);for(;r.length>a;)n(c,e=r[a++])&&(~i(f,e)||f.push(e));return f}},7446:(t,r)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},6095:(t,r,e)=>{var n=e(563),o=e(62),i=e(6952),u=e(6112);t.exports=n("Reflect","ownKeys")||function(t){var r=o.f(u(t)),e=i.f;return e?r.concat(e(t)):r}},9775:(t,r,e)=>{var n=e(2086);t.exports=n},1007:(t,r,e)=>{var n=e(2086),o=e(2585),i=e(3167),u=e(3648),c=e(9277),a=e(3278),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,r,e,c){var a,f=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,v=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof r||i(e,"name")||o(e,"name",r),(a=s(e)).source||(a.source=p.join("string"==typeof r?r:""))),t!==n?(f?!v&&t[r]&&(l=!0):delete t[r],l?t[r]=e:o(t,r,e)):l?t[r]=e:u(r,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},9586:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3648:(t,r,e)=>{var n=e(2086),o=e(2585);t.exports=function(t,r){try{o(n,t,r)}catch(e){n[t]=r}return r}},8944:(t,r,e)=>{var n=e(9197),o=e(5422),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4489:(t,r,e)=>{var n=e(2086),o=e(3648),i="__core-js_shared__",u=n[i]||o(i,{});t.exports=u},9197:(t,r,e)=>{var n=e(3296),o=e(4489);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.9.0",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7740:(t,r,e)=>{var n=e(9679),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},4088:(t,r,e)=>{var n=e(5974),o=e(9586);t.exports=function(t){return n(o(t))}},9679:t=>{var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},4005:(t,r,e)=>{var n=e(9679),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3060:(t,r,e)=>{var n=e(9586);t.exports=function(t){return Object(n(t))}},1288:(t,r,e)=>{var n=e(8759);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},5422:t=>{var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},3902:(t,r,e)=>{"use strict";var n=e(1695),o=e(8758).left,i=e(2802),u=e(1448),c=e(1801);n({target:"Array",proto:!0,forced:!i("reduce")||!c&&u>79&&u<83},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})}},r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";e(3902),console.log([1,2,3,4,5].reduce(((t,r)=>t+r),0))})()})();
//# sourceMappingURL=built.8a418daf3a.js.map