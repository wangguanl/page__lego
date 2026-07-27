import{j as e}from"./nodeDataBind-BWjhOjmr.js";function t(e){return!!e&&typeof e==`object`&&e.type===`http`&&typeof e.url==`string`&&e.url.trim().length>0}function n(n){return Object.entries(e(n)).filter(([,e])=>t(e))}async function r(e){if(String(e.method||`GET`).toUpperCase()!==`GET`)throw Error(`当前仅支持 GET 请求`);let t=await fetch(e.url.trim(),{method:`GET`});if(!t.ok)throw Error(`HTTP ${t.status}`);return(t.headers.get(`content-type`)||``).includes(`application/json`)?t.json():t.text()}async function i(e){let t=n(e),i={};return await Promise.all(t.map(async([e,t])=>{try{i[e]=await r(t)}catch(n){i[e]=t.mock===void 0?null:t.mock,i[`__error_${e}`]=String(n?.message||n)}})),i}function a(t={}){let r=t.pageData&&typeof t.pageData==`object`?t.pageData:{},i=e(t.sources),a=n(i),o=e=>JSON.stringify(e).replace(/</g,`\\u003c`),s=a.map(([e,t])=>`
    fetch('${String(t.url||``).replace(/\\/g,`\\\\`).replace(/'/g,`\\'`)}', { method: 'GET' })
      .then(function(r){ return r.json().catch(function(){ return r.text(); }); })
      .then(function(data){ __Lego.sourcesData['${e}'] = data; })
      .catch(function(){ __Lego.sourcesData['${e}'] = ${o(t.mock??null)}; })
      .finally(function(){ __Lego.applyDataBinds && __Lego.applyDataBinds(); });`).join(`
`);return`(function(){
  if (!window.__Lego) window.__Lego = { elements: {}, fn: {} };
  __Lego.pageData = ${o(r)};
  __Lego.sourcesData = {};
  __Lego.sourcesConfig = ${o(i)};

  function readPath(obj, parts){
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  function parseLiteral(seg){
    var m = seg.trim().match(/^(['"])([\\s\\S]*)\\1$/);
    return m ? m[2] : null;
  }

  function resolveExpr(expr){
    if (!expr || typeof expr !== 'string') return undefined;
    var segments = expr.split('||').map(function(s){ return s.trim(); }).filter(Boolean);
    var lastLit;
    for (var i = 0; i < segments.length; i++) {
      var seg = segments[i];
      var lit = parseLiteral(seg);
      if (lit !== null) {
        lastLit = lit;
        if (lit !== '' && lit != null) return lit;
        continue;
      }
      var value;
      if (seg.indexOf('pageData.') === 0) {
        value = readPath(__Lego.pageData || {}, seg.slice(9).split('.'));
      } else if (seg.indexOf('api.') === 0) {
        var rest = seg.slice(4).split('.');
        var sourceName = rest.shift();
        var root = (__Lego.sourcesData || {})[sourceName];
        value = rest.length ? readPath(root, rest) : root;
      }
      if (value !== undefined && value !== null && value !== '') return value;
    }
    return lastLit;
  }

  function applyTarget(el, target, expr){
    var val = resolveExpr(expr);
    if (target === 'text') {
      el.textContent = val == null ? '' : String(val);
      return;
    }
    if (target === 'src') {
      if (val != null && val !== '') el.setAttribute('src', String(val));
      return;
    }
    if (target === 'alt') {
      if (val != null) el.setAttribute('alt', String(val));
      return;
    }
    if (target === 'visibility') {
      el.style.display = val === false || val === 'false' || val === 0 || val === '0' ? 'none' : '';
    }
  }

  __Lego.applyDataBinds = function(){
    document.querySelectorAll('[data-lego-bind]').forEach(function(el){
      var raw = el.getAttribute('data-lego-bind');
      if (!raw) return;
      try {
        var spec = JSON.parse(raw);
        Object.keys(spec || {}).forEach(function(target){
          applyTarget(el, target, spec[target]);
        });
      } catch (e) {}
    });
  };

  __Lego.applyDataBinds();
  ${s}
})();`}export{i as n,a as t};