const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./manager-WFWoc0DW.js","./export-page-C7r7YlCK.js","./rolldown-runtime-aKtaBQYM.js","./runtime-core.esm-bundler-Dn4nvGT2.js","./es-BfSxlBLK.js","./runtime-dom.esm-bundler-C1NCw-ul.js","./set-B04GZ3Z7.js","./dist-B0gSJlag.js","./index-Dm0L-M3a.js","./index-buIfLx5w.css","./nodeDataBind-BWjhOjmr.js","./utils-C-pmhSOH.js","./injectComponentRefs-DoydX2uV.js","./prettier-CXXniNmP.js","./editor-DxOPhowk.js","./dependencies-DAlWrKmU.js","./globalComponentLibrary-nzzmWPdb.js","./project-Ck43BimC.js","./customComponent-Cpcy_OUp.js","./loader-Cd2x3402.js","./pageSources-DgqpOwzQ.js","./globalFn-DUpJURjE.js","./legoBootstrap-B1-2-kuk.js","./canvas-dialog-preview-C8gbDU0u.js","./sortable.esm-BqtE8hmV.js","./openCanvasDialogPreview-BeNXusfx.js","./projectLibrary-ChPpRmYa.js","./openProjectRuntime-Uc-rQ--r.js","./canvas-dialog-preview-BwxDkHY4.css","./export-page-D2X5SLsj.css","./store-BiVw4-xC.js"])))=>i.map(i=>d[i]);
import{i as e}from"./index-Dm0L-M3a.js";import{$ as t,W as n}from"./nodeDataBind-BWjhOjmr.js";import{_ as r,a as i,b as a,c as o,d as s,f as c,g as l,h as u,i as d,k as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x,v as S,y as C}from"./utils-C-pmhSOH.js";function w(e,t={}){let{dslConfig:n={}}=t,r={},i={};return c(e,e=>{let t=x(e);if(!t||Object.keys(t).length===0)return;let n=e._legoClassName||e._cssClassName;n&&(r[n]=t)}),T(e,r,i),{styleMap:r,commonStyles:i}}function T(e,t,n){c(e,e=>{if(!e.children||e.children.length<2)return;let r=[],i=[];for(let n of e.children){let e=n._legoClassName||n._cssClassName;e&&t[e]&&(r.push(t[e]),i.push(e))}if(r.length<2)return;let a=E(r);if(a.length>3){let e={};for(let t of a)e[t]=r[0][t];let o=`common_${i[0]}`;n[o]=e;for(let e of i){for(let n of a)delete t[e][n];Object.keys(t[e]).length===0&&delete t[e]}}})}function E(e){if(e.length===0)return[];let t=e[0],n=[];for(let r of Object.keys(t)){let i=JSON.stringify(t[r]);e.every(e=>JSON.stringify(e[r])===i)&&n.push(r)}return n}function D(e){let t=[];c(e,e=>{let n=x(e);n&&n.fontFamily&&t.push(n.fontFamily)});let n=ee(t);c(e,e=>{if(!e.__attrs__)return;let t=e.__attrs__.style||{};(t.fontWeight===400||t.fontWeight===`400`||t.fontWeight===`normal`)&&delete t.fontWeight,t.flexDirection===`row`&&delete t.flexDirection,t.textDecoration===`none`&&delete t.textDecoration,t.fontStyle===`normal`&&delete t.fontStyle,t.display===`block`&&(!t.position||t.position===`static`||t.position===`relative`)&&delete t.display,n&&t.fontFamily===n&&delete t.fontFamily})}function ee(e){if(e.length===0)return null;let t={},n=0,r=null;for(let i of e)t[i]=(t[i]||0)+1,t[i]>n&&(n=t[i],r=i);return r}function O(e,t={}){let{cssStyle:n=`kebabCase`,commonStyles:r={}}=t;if(!e||Object.keys(e).length===0)return Object.keys(r).length===0?``:k(r,n);let i=``;Object.keys(r).length>0&&(i+=k(r,n),i+=`
`);for(let t of Object.keys(e)){let r=e[t];if(!r||Object.keys(r).length===0)continue;let a=A(t,n),o=d(r);i+=`.${a} {\n${o}\n}\n\n`}return i.trim()}function k(e,t){let n=``;for(let r of Object.keys(e)){let i=A(r,t),a=d(e[r]);n+=`.${i} {\n${a}\n}\n\n`}return n}function A(e,t){return t===`camelCase`?e:n(e)}function te(e){let t=new Set,n=0;c(e,e=>{let r=``;e.aliasName&&(r=j(e.aliasName)),!r&&e.tag&&(r=j(e.tag)),r||=`el`;let i=r;for(;t.has(i);)n++,i=`${r}_${n}`;t.add(i),e._cssClassName=i})}function j(e){return e?e.replace(/[^a-zA-Z0-9_-]/g,`-`).replace(/^-+|-+$/g,``).replace(/-{2,}/g,`-`).toLowerCase()||`el`:``}function ne(e,t,n={}){let{componentName:r=`Component`,isPage:i=!1,blocks:a=[]}=n,{dslConfig:o={}}=t,{componentStyle:c=`hooks`,inlineStyle:l=`module`}=o,u={};for(let e of a){let t=s(e.aliasName,p(e._componentName||e.id||`Block`));t&&(u[e.id]=t)}let d=M(e,t,{isPage:i,blockNames:u,indentLevel:1}),f=z(t,r,l),m;return m=c===_.HOOKS?L(r,d,f,i):R(r,d,f,i),m}function M(e,t,n={}){if(!e)return``;let r=a(e,{}),{blockNames:i={},indentLevel:s=0}=n,{dslConfig:c={}}=t,{inlineStyle:l=`module`}=c,u=r.renderTag===`draggableSort`?`div`:r.tag||`div`,d=e.tag||r.tag||u;if(d&&d!==`div`&&o(d,d))return F(e,r,t,n);if(e._isBlock&&!n.isPage&&i[e.id])return`<${i[e.id]} />`;let f=N(e,r,t,l),p=``;r.text&&(p=h(r.text));let m=[];if(r.children&&r.children.length>0)for(let e of r.children){let r=M(e,t,{...n,indentLevel:0});r&&m.push(r)}if(e.__slots__&&typeof e.__slots__==`object`){for(let r of Object.values(e.__slots__))if(Array.isArray(r))for(let e of r){let r=M(e,t,{...n,indentLevel:0});r&&m.push(r)}}return m.length>0&&(p=`
`+m.map(e=>g(e,2)).join(`
`)+`
`),S.includes(u)?`<${u}${f?` `+f:``} />`:(p&&r.text,`<${u}${f?` `+f:``}>${p}</${u}>`)}function N(e,t,n,r){let i=[],a=e._cssClassName||e.id;if(r===m.MODULE_CLASS&&a){let e=[];t.className&&e.push(t.className);let n=a;n&&e.push(v(`styles`,n)),e.length===1?i.push(`className={${e[0]}}`):e.length>1&&i.push(`className={\`${e.join(` `)}\`}`)}else if(r===m.IMPORT_CLASS&&a){let e=[];t.className&&e.push(t.className),a&&e.push(a),e.length>0&&i.push(`className="${e.join(` `)}"`)}else t.className&&i.push(`className="${t.className}"`);if(t.id&&i.push(`id="${t.id}"`),r===m.INLINE_CSS&&t.style&&Object.keys(t.style).length>0){let e=P(t.style);e&&i.push(`style={${e}}`)}let o=e.__attrs__?.src||e.__attrs__?.style?.src;t.tag===`img`&&o&&i.push(`src="${h(o)}"`);let s=e.__attrs__?.href;t.tag===`a`&&s&&i.push(`href="${h(s)}"`);let c=e.__attrs__?.placeholder;t.tag===`input`&&c&&i.push(`placeholder="${h(c)}"`);let l=e.__attrs__?.type;if(t.tag===`input`&&l&&i.push(`type="${l}"`),e.__config__?.events)for(let[t,n]of Object.entries(e.__config__.events))typeof n==`function`&&i.push(`${t}={${n.toString()}}`);return i.join(` `)}function P(e){let t=Object.entries(e).filter(([,e])=>e!=null&&e!==``).map(([e,t])=>{let n=e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),r=parseFloat(t);return`${n}: ${!isNaN(r)&&String(r)===t?r:`'${t}'`}`});return t.length===0?``:`{ ${t.join(`, `)} }`}function F(e,t,n,r){let i=e.tag||e.renderTag,{dslConfig:a={}}=n,{inlineStyle:o=`module`}=a;if(b(i,n),i===`swiper`||e.renderTag===`swiper`)return I(e,n,r);let s=n.componentsMap?.[i]?.exportName||p(i),c=[],l=e._cssClassName||e.id;o===m.MODULE_CLASS&&l&&c.push(`className={${v(`styles`,l)}}`);let u=e.__attrs__||{};for(let[e,t]of Object.entries(u))if(!(e===`class`||e===`style`||t==null)&&typeof t!=`object`){if(typeof t==`boolean`){c.push(`${e}={${t}}`);continue}if(typeof t==`number`){c.push(`${e}={${t}}`);continue}c.push(`${e}="${String(t).replace(/"/g,`\\"`)}"`)}let d=c.join(` `),f=[];if(t.children&&t.children.length>0)for(let e of t.children){let t=M(e,n,{...r,indentLevel:0});t&&f.push(t)}if(e.__slots__&&typeof e.__slots__==`object`){for(let t of Object.values(e.__slots__))if(Array.isArray(t))for(let e of t){let t=M(e,n,{...r,indentLevel:0});t&&f.push(t)}}if(f.length===0)return`<${s}${d?` `+d:``} />`;let h=`
`+f.map(e=>g(e,2)).join(`
`)+`
`;return`<${s}${d?` `+d:``}>${h}</${s}>`}function I(e,t,n){let r=C(e),i=[];for(let[e,t]of Object.entries(r))typeof t==`boolean`?t&&i.push(`${e}={true}`):typeof t==`number`?i.push(`${e}={${t}}`):i.push(`${e}="${h(String(t))}"`);let a=i.join(` `),o=``;if(e.__slots__){let r=[];for(let i of Object.values(e.__slots__))if(Array.isArray(i))for(let e of i){let i=M(e,t,{...n,indentLevel:0});i&&r.push(g(`<SwiperSlide>\n${g(i,2)}\n</SwiperSlide>`,2))}r.length>0&&(o=`
`+r.join(`
`)+`
`)}return`<Swiper${a?` `+a:``}>${o}</Swiper>`}function L(e,t,n,r){return`${n.join(`
`)}

export default function ${e}() {
  return (
${g(t,2)}
  );
}`}function R(e,t,n,r){return`${n.join(`
`)}

export default class ${e} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
${g(t,3)}
    );
  }
}`}function z(e,t,n){let r=[],{dslConfig:a={},importsMap:o,importMods:s}=e;a.componentStyle===_.HOOKS?r.push(`import React from 'react';`):r.push(`import React, { Component } from 'react';`),n===m.MODULE_CLASS?r.push(`import styles from './`+t+`.module.css';`):n===m.IMPORT_CLASS&&r.push(`import './`+t+`.css';`);let c=i(o);return c.length>0&&(r.push(``),r.push(...c)),s&&s.length>0&&(r.push(``),r.push(...s)),r.filter(Boolean)}function B(e,t,n={}){let{componentName:r=`Component`,isPage:i=!1,blocks:a=[]}=n,{dslConfig:o={}}=t,{inlineStyle:c=`module`}=o,l={};for(let e of a){let t=s(e.aliasName,p(e._componentName||e.id||`Block`));t&&(l[e.id]=t)}let u=V(e,t,{isPage:i,blockNames:l,indentLevel:0}),d=G(t,l),f=K(t,r);return`<template>
${g(u,1)}
</template>

${d}
${f}`}function V(e,t,n={}){if(!e)return``;let r=a(e,{}),{blockNames:i={},indentLevel:s=0}=n,{dslConfig:c={}}=t,{inlineStyle:l=`module`}=c,u=r.renderTag===`draggableSort`?`div`:r.tag||`div`,d=e.tag||r.tag||u;if(d&&d!==`div`&&o(d,d))return W(e,r,t,n);if(e._isBlock&&!n.isPage&&i[e.id])return`<${i[e.id]} />`;let f=H(e,r,t,l),p=``;r.text&&(p=r.text);let m=[];if(r.children&&r.children.length>0)for(let e of r.children){let r=V(e,t,{...n,indentLevel:0});r&&m.push(r)}if(e.__slots__&&typeof e.__slots__==`object`){for(let[r,i]of Object.entries(e.__slots__))if(Array.isArray(i))for(let e of i){let i=V(e,t,{...n,indentLevel:0});i&&(r==="default"?m.push(i):m.push(`<template #${r}>\n${g(i,1)}\n</template>`))}}return m.length>0&&(p=`
`+m.map(e=>g(e,2)).join(`
`)+`
`),S.includes(u)?`<${u}${f?` `+f:``} />`:(p&&r.text,`<${u}${f?` `+f:``}>${p}</${u}>`)}function H(e,t,n,r){let i=[],a=e._cssClassName||e.id;if(r===m.MODULE_CLASS&&a){let e=[];t.className&&e.push(t.className),a&&e.push(a),e.length>0&&i.push(`class="${e.join(` `)}"`)}else t.className&&i.push(`class="${t.className}"`);if(t.id&&i.push(`id="${t.id}"`),r===m.INLINE_CSS&&t.style&&Object.keys(t.style).length>0){let e=U(t.style);e&&i.push(`:style="${e}"`)}let o=e.__attrs__?.src||e.__attrs__?.style?.src;t.tag===`img`&&o&&i.push(`:src="'${h(o)}'"`);let s=e.__attrs__?.href;t.tag===`a`&&s&&i.push(`href="${h(s)}"`);let c=e.__attrs__?.placeholder;t.tag===`input`&&c&&i.push(`placeholder="${h(c)}"`);let l=e.__attrs__?.type;if(t.tag===`input`&&l&&i.push(`type="${l}"`),e.__config__?.events)for(let[t,n]of Object.entries(e.__config__.events))typeof n==`function`&&i.push(`@${t}="${n.toString().replace(/"/g,`'`)}"`);return i.join(` `)}function U(e){let t=Object.entries(e).filter(([,e])=>e!=null&&e!==``).map(([e,t])=>{let n=e.replace(/([A-Z])/g,`-$1`).toLowerCase(),r=parseFloat(t);return`${n}: ${!isNaN(r)&&String(r)===t?r:`'${t}'`}`});return t.length===0?``:`{ ${t.join(`, `)} }`}function W(e,t,n,r){let i=e.tag||e.renderTag,{dslConfig:a={}}=n,{inlineStyle:o=`module`}=a;b(i,n);let s=n.componentsMap?.[i]?.exportName||p(i),c=[],l=e._cssClassName||e.id;o===m.MODULE_CLASS&&l&&c.push(`class="${l}"`);let u=e.__attrs__||{};for(let[e,t]of Object.entries(u))if(!(e===`class`||e===`style`||t==null)&&typeof t!=`object`){if(typeof t==`boolean`){t&&c.push(e);continue}if(typeof t==`number`){c.push(`:${e}="${t}"`);continue}c.push(`${e}="${String(t).replace(/"/g,`&quot;`)}"`)}let d=c.join(` `),f=[];if(t.children&&t.children.length>0)for(let e of t.children){let t=V(e,n,{...r,indentLevel:0});t&&f.push(t)}if(e.__slots__&&typeof e.__slots__==`object`){for(let[t,i]of Object.entries(e.__slots__))if(Array.isArray(i))for(let e of i){let i=V(e,n,{...r,indentLevel:0});i&&(t==="default"?f.push(i):f.push(`<template #${t}>\n${g(i,1)}\n</template>`))}}if(f.length===0)return`<${s}${d?` `+d:``} />`;let h=`
`+f.map(e=>g(e,2)).join(`
`)+`
`;return`<${s}${d?` `+d:``}>${h}</${s}>`}function G(e,t){let{importsMap:n,importMods:r}=e,a=[];a.push(`import { ref } from 'vue';`);let o=i(n);return o.length>0&&(a.push(``),a.push(...o)),r&&r.length>0&&(a.push(``),a.push(...r)),a.length===1&&a[0]===`import { ref } from 'vue';`&&Object.keys(t).length===0?`<script setup>
<\/script>`:`<script setup>
${a.join(`
`)}
<\/script>`}function K(e,t){let{dslConfig:n={},styleMap:r={},commonStyles:i={}}=e,{inlineStyle:a=`module`,cssStyle:o=`kebabCase`}=n;return a===m.MODULE_CLASS?`
<style scoped>
${O(r,{cssStyle:o,commonStyles:i})||`/* 暂无样式 */`}
</style>`:``}function q(e,t={}){let{dslConfig:n=u,prettier:r=e=>e,componentsMap:i={},blocks:a=[]}=t,{framework:o=`react`,inlineStyle:c=`module`,outputStyle:l=`component`,cssStyle:d=`kebabCase`,useTypescript:f=!1}=n,h=[],g=s(e.aliasName,p(e._componentName||e.id||`Component`)),_=l===`component`?`components/${g}`:``;te(e);let{styleMap:v,commonStyles:y}=w(e,{dslConfig:n}),b={dslConfig:n,importsMap:new Map,dependenceList:[],importMods:[],importStyles:[],styleMap:v,commonStyles:y,componentsMap:i};if(a.length>0&&!e._isBlock)for(let e of a){let t=s(e.aliasName,p(e._componentName||e.id||`Block`));t&&b.importMods.push(`import ${t} from '../${t}/${t}';`)}let x;x=o===`react`?ne(e,b,{componentName:g,isPage:!e._isBlock,blocks:a}):B(e,b,{componentName:g,isPage:!e._isBlock,blocks:a});let S=r(x,o===`react`?`js`:`html`),C,T;if(o===`react`?(C=f?`tsx`:`jsx`,T=f?`tsx`:`jsx`):(C=`vue`,T=`vue`),h.push({panelName:`${g}.${C}`,panelValue:S,panelType:T,folder:_,panelDependencies:b.dependenceList.length>0?b.dependenceList:void 0}),c===m.MODULE_CLASS&&o===`react`){let e=O(v,{cssStyle:d,commonStyles:y});if(e){let t=r(e,`css`),n=o===`react`?`${g}.module.css`:`${g}.css`;h.push({panelName:n,panelValue:t,panelType:`css`,folder:_})}}return h}function J(e,t={}){let{dslConfig:n=u,prettier:r=e=>e,dependencies:i=[],pageName:a=`LegoPage`}=t,{framework:o=`react`,useTypescript:s=!1}=n;return o===`react`?Y(e,{dslConfig:n,prettier:r,dependencies:i,pageName:a,useTypescript:s}):ae(e,{dslConfig:n,prettier:r,dependencies:i,pageName:a,useTypescript:s})}function Y(e,t){let{dependencies:n,pageName:r,useTypescript:i}=t,a=i?`tsx`:`jsx`,o=i?`ts`:`js`,s=[];return s.push({panelName:`index.html`,panelValue:X(r),panelType:`html`,folder:`public`}),s.push({panelName:`main.${a}`,panelValue:re(r,a),panelType:a,folder:`src`}),s.push({panelName:`App.${a}`,panelValue:ie(r,a),panelType:a,folder:`src`}),s.push({panelName:`package.json`,panelValue:Z(`react`,n,i),panelType:`json`,folder:``}),s.push({panelName:`vite.config.${o}`,panelValue:Q(`react`,i),panelType:o,folder:``}),i&&s.push({panelName:`tsconfig.json`,panelValue:JSON.stringify({compilerOptions:{target:`ES2020`,module:`ESNext`,jsx:`react-jsx`,moduleResolution:`bundler`,strict:!0,esModuleInterop:!0,skipLibCheck:!0},include:[`src`]},null,2),panelType:`json`,folder:``}),s}function X(e){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${e}</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"><\/script>
</body>
</html>`}function re(e,t){return`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`}function ie(e,t){return`import React from 'react';
import ${e} from './components/${e}/${e}';

export default function App() {
  return (
    <${e} />
  );
}`}function ae(e,t){let{dependencies:n,pageName:r,useTypescript:i}=t,a=i?`ts`:`js`,o=[];return o.push({panelName:`index.html`,panelValue:oe(r),panelType:`html`,folder:``}),o.push({panelName:`main.${a}`,panelValue:se(r,a),panelType:a,folder:`src`}),o.push({panelName:`App.vue`,panelValue:ce(r),panelType:`vue`,folder:`src`}),o.push({panelName:`package.json`,panelValue:Z(`vue`,n,i),panelType:`json`,folder:``}),o.push({panelName:`vite.config.${a}`,panelValue:Q(`vue`,i),panelType:a,folder:``}),o}function oe(e){return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${e}</title>
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/src/main.js"><\/script>
</body>
</html>`}function se(e,t){return`import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');`}function ce(e){return`<template>
  <${e} />
</template>

<script setup>
import ${e} from './components/${e}/${e}.vue';
<\/script>`}function Z(e,t,n){let r={},i={};e===`react`?(i.react=`^18.2.0`,i[`react-dom`]=`^18.2.0`,r[`@vitejs/plugin-react`]=`^4.0.0`):(i.vue=`^3.3.0`,r[`@vitejs/plugin-vue`]=`^4.0.0`),r.vite=`^5.0.0`,n&&(r.typescript=`^5.0.0`,r[`@types/react`]=`^18.2.0`,r[`@types/react-dom`]=`^18.2.0`);for(let e of t)e.package&&(i[e.package]=e.version||`*`);return JSON.stringify({name:`lego-project`,private:!0,version:`1.0.0`,type:`module`,scripts:{dev:`vite`,build:`vite build`,preview:`vite preview`},dependencies:i,devDependencies:r},null,2)}function Q(e,t){return`import { defineConfig } from 'vite';
import ${e} from '@vitejs/plugin-${e===`react`?`react`:`vue`}';

export default defineConfig({
  plugins: [${e}()],
});`}function le(e,t={}){let{dslConfig:n=u,prettier:r=e=>e,folder:i=``}=t;return n.globalCss?[{panelName:`global.css`,panelValue:r(l,`css`),panelType:`css`,folder:i}]:[]}function $(e,n={}){let i=t(e);if(i.VNodes&&Array.isArray(i.VNodes)&&(i.VNodes=f(i.VNodes)),!i.VNodes||i.VNodes.length===0)return{panelDisplay:[]};let a=i.VNodes[0],o={...u,...n},{outputStyle:l=`component`,globalCss:d=!0}=o,m=[];c(a,e=>{y(e)&&e!==a&&(e._isBlock=!0,e._componentName=s(e.aliasName,p(e.id||`Block`)),m.push(e))}),D(a);let h=s(a.aliasName,p(a.id||`LegoPage`)),g=[];for(let e of m){let t=q(e,{dslConfig:o,prettier:n.prettier,componentsMap:n.componentsMap,blocks:m});g=g.concat(t)}let _=q(a,{dslConfig:o,prettier:n.prettier,componentsMap:n.componentsMap,blocks:m});if(g=g.concat(_),l===r.PROJECT){let e=[];for(let t of g)if(t.panelDependencies)for(let n of t.panelDependencies)e.find(e=>e.package===n.package)||e.push(n);let t=J(a,{dslConfig:o,prettier:n.prettier,dependencies:e,pageName:h});g=g.concat(t)}if(l===r.COMPONENT&&d){let e=le(a,{dslConfig:o,prettier:n.prettier,folder:``});g=g.concat(e)}return{panelDisplay:g}}async function ue(){try{let{registerDsl:t}=await e(async()=>{let{registerDsl:e}=await import(`./manager-WFWoc0DW.js`);return{registerDsl:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url),n=(await e(async()=>{let{default:e}=await import(`./react-standard-pyv4TmEG.js`);return{default:e}},[],import.meta.url)).default,r=(await e(async()=>{let{default:e}=await import(`./vue-standard-CzSmWF_P.js`);return{default:e}},[],import.meta.url)).default;t(n),t(r);let{restoreUserDsls:i}=await e(async()=>{let{restoreUserDsls:e}=await import(`./store-BiVw4-xC.js`);return{restoreUserDsls:e}},__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]),import.meta.url),a=(await i()).filter(e=>e.success).length;a>0&&console.log(`[lego-dsl] Restored ${a} user DSL(s) from localStorage`)}catch(e){console.error(`[lego-dsl] Failed to init DSLs:`,e)}}export{ue as n,$ as t};