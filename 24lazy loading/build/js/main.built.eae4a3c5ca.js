!function(){var e,n,t={},r={};function o(e){if(r[e])return r[e].exports;var n=r[e]={exports:{}};return t[e](n,n.exports,o),n.exports}o.m=t,o.x=function(){},o.F={},o.E=function(e){Object.keys(o.F).map((function(n){o.F[n](e)}))},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))},o.u=function(e){return"js/test41.built.2c020ddb2e.js"},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},e={},o.l=function(n,t,r,i){if(e[n])e[n].push(t);else{var u,c;if(void 0!==r)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==n){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=n),e[n]=[t];var s=function(t,r){u.onerror=u.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var n=o.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"}(),function(){var e={179:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));t.push(r[2]=i);var u=o.p+o.u(n),c=new Error;o.l(u,(function(t){if(o.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}}),"chunk-"+n,n)}},o.F.j=function(n){if(!o.o(e,n)||void 0===e[n]){e[n]=null;var t=document.createElement("link");o.nc&&t.setAttribute("nonce",o.nc),t.rel="prefetch",t.as="script",t.href=o.p+o.u(n),document.head.appendChild(t)}};var n=function(n,t){for(var r,i,u=t[0],c=t[1],a=t[2],l=0,f=[];l<u.length;l++)i=u[l],o.o(e,i)&&e[i]&&f.push(e[i][0]),e[i]=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);for(a&&a(o),n&&n(t);f.length;)f.shift()()},t=self.webpackChunk=self.webpackChunk||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),n=o.x,o.x=function(){var e=n();return o.E(390),e},console.log("index.js 被加载了"),document.getElementById("btn").onclick=function(){o.e(390).then(o.bind(o,411)).then((({mul:e})=>{console.log(e(2,3))}))},o.x()}();