const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./nodeDataBind-BWjhOjmr.js","./rolldown-runtime-aKtaBQYM.js","./index-Dm0L-M3a.js","./runtime-core.esm-bundler-Dn4nvGT2.js","./runtime-dom.esm-bundler-C1NCw-ul.js","./es-BfSxlBLK.js","./set-B04GZ3Z7.js","./dist-B0gSJlag.js","./index-buIfLx5w.css"])))=>i.map(i=>d[i]);
import{i as e}from"./index-Dm0L-M3a.js";import{d as t,h as n}from"./nodeDataBind-BWjhOjmr.js";import{f as r}from"./utils-C-pmhSOH.js";var i=new Set([`resizable`]);function a(e){return!e||typeof e!=`object`||Array.isArray(e)||typeof e==`function`||e.type&&e.type!==`script`?!1:typeof e.source==`string`&&e.source.trim().length>0}function o(e){let t=[];return r(e,e=>{if(!e?.id)return;let n=e.__config__?.events;if(!(!n||typeof n!=`object`))for(let[r,o]of Object.entries(n))i.has(r)||a(o)&&t.push({id:e.id,eventName:r,source:o.source.trim()})}),t}function s(){let e=t().filter(e=>e.sourceCode);return e.length?e.map(e=>`
(function(global){
  try {
    var module = { exports: {} };
    var exports = module.exports;
    ${n(e.sourceCode)}
    var plugin = module.exports && module.exports.default
      ? module.exports.default
      : module.exports;
    global.__Lego = global.__Lego || {};
    global.__Lego.fn = global.__Lego.fn || {};
    var fns = plugin && plugin.fns;
    if (fns) {
      for (var k in fns) {
        if (Object.prototype.hasOwnProperty.call(fns, k) && typeof fns[k] === 'function') {
          global.__Lego.fn[k] = fns[k];
        }
      }
    }
  } catch (e) {
    console.error('[lego-global-fn] install failed: ${e.id}', e);
  }
})(window);`).join(`
`):``}function c(e){return e?.length?`
(function(){
  function __legoBindEvents(){
${e.map(({id:e,eventName:t,source:n})=>{let r=JSON.stringify(e),i=JSON.stringify(t);return`
    (function(){
      var el = document.getElementById(${r});
      if (!el) return;
      el.addEventListener(${i}, function(event) {
        var el = event.currentTarget;
        try {
${n}
        } catch (err) {
          console.error('[lego-event]', ${r}, ${i}, err);
        }
      });
    })();`}).join(`
`)}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __legoBindEvents);
  } else {
    __legoBindEvents();
  }
})();`:``}function l(e){return`on${e.charAt(0).toUpperCase()}${e.slice(1)}`}function u(e){let t=e?.__config__?.events;if(!t||typeof t!=`object`)return{};let n={};for(let[r,o]of Object.entries(t)){if(i.has(r)||!a(o))continue;let t=o.source.trim();n[l(r)]=n=>{try{let e=n?.currentTarget;Function(`event`,`el`,t)(n,e)}catch(t){console.error(`[lego-runtime-event]`,e?.id,r,t)}}}return n}function d(e){let t=o(e),n=s(),r=c(t);return{fnScript:n,eventScript:r,hasFn:!!n,hasEvents:!!r}}var f=null;async function p(){return f||=(async()=>{try{let{restoreUserGlobalFns:t}=await e(async()=>{let{restoreUserGlobalFns:e}=await import(`./nodeDataBind-BWjhOjmr.js`).then(e=>e.m);return{restoreUserGlobalFns:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url);await t()}catch(e){console.warn(`[lego-global-fn] Failed to init:`,e)}})(),f}export{a as i,d as n,u as r,p as t};