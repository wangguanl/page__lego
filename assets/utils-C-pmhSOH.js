import{$ as e,J as t,K as n,U as r,W as i,q as a}from"./nodeDataBind-BWjhOjmr.js";function o(e,t){let n=Object.entries(e).filter(([e,t])=>(t+``).replace(/\s+/g,``)!==``).map(([e,t])=>[i(e),t].join(`: `));return n.join(`;${t?`
`:` `}`)+(n.length?`;`:``)}function s(e){var t=document.createElement(`div`);t.setAttribute(`style`,e);for(var n={},r=0;r<t.style.length;r++){var i=t.style[r];n[i]=t.style.getPropertyValue(i)}return n}function c(e,t){return{display:{flex:[[`flex-direction`,`flex-wrap`,`justify-content`,`align-items`,`align-content`],[`row`,`nowrap`,`unset`,`unset`,`unset`]]}}[e][t]}function l(e,t){let n={};for(let r in e)n[r]=/^-?[1-9]\d*\.\d+$|^-?0\.\d+$|^-?[1-9]\d*$|^0$/.test(e[r])?Math.floor(e[r])+((Math.floor(e[r])?t[r]:``)||``):e[r];return n}function u(e,t={}){let n=[`w`,`h`,`x`,`y`,`font-size`,`opacity`],r={};for(let a in e)e[a]!==t[a]&&([...n,...n.map(e=>i(e))].indexOf(a)!==-1||e[a])&&(r[a]=e[a]);let[a]=c(`display`,`flex`);if(Object.keys(r).indexOf(`display`)===-1)[...a,...a.map(e=>i(e))].forEach(e=>{delete r[e]});else for(let t in r)t===`display`&&e[t]!==`flex`&&[...a,...a.map(e=>i(e))].forEach(e=>{delete r[e]});return r}function d(e){let t={},n={w:`width`,h:`height`,z:`zIndex`,...e.position===`absolute`?{x:`left`,y:`top`}:{x:`marginLeft`,y:`marginTop`}};return Object.entries(e).forEach(([e,r])=>{n[e]?t[n[e]]=r:t[e]=r}),t}function f(e){let t={},n={},r={width:`w`,height:`h`,zIndex:`z`,"z-index":`z`,...!e.position||e.position===`relative`?{marginLeft:`x`,marginTop:`y`,"margin-left":`x`,"margin-top":`y`}:{left:`x`,top:`y`}};return Object.entries(e).forEach(([e,i])=>{r[e]?t[r[e]]=i:n[e]=i}),[t,n]}var p={"font-size":12,"line-height":1,"box-sizing":`border-box`,color:`rgb(0, 0, 0, 1)`,display:`block`,"word-break":`break-all`},m={w:`px`,h:`px`,x:`px`,y:`px`,"line-height":``,"font-size":`px`,"text-indent":`px`,"letter-spacing":`px`,"border-width":`px`,"border-radius":`px`,"border-top-left-radius":`px`,"border-top-right-radius":`px`,"border-bottom-left-radius":`px`,"border-bottom-right-radius":`px`,padding:`px`,"padding-left":`px`,"padding-top":`px`,"padding-right":`px`,"padding-bottom":`px`,"word-spacing":`px`},h={children:[],__attrs__:{style:{...p},class:{}},__props__:{w:0,h:0,x:0,y:0,z:0,style:{position:`relative`,display:`block`},class:{},parent:!1},__config__:{units:{...m},__attrs__:{style:{},class:{}},attrs:{style:{},class:{}}},__slots__:{}},g=(()=>{function t(t){t=e(t);let n={};for(let e in t.__attrs__.style)t.__attrs__.style[e]!=={...p}[e]&&(n[e]=t.__attrs__.style[e]);let r={};for(let e in t.__config__.units)t.__config__.units[e]!==m[e]&&(r[e]=t.__config__.units[e]);return{...t,__attrs__:{...t.__attrs__,style:n},__config__:{...t.__config__,units:r}}}return function e(n){let r=[];for(let i=0;i<n.length;i++)r[i]=t(n[i]),r[i].children.length&&(r[i].children=e(n[i].children));return r}})(),_=e=>{if(!e)return[[],[]];let t=n(),r=e.replace(/\n/g,``).replace(/\s+/g,` `).replace(/\,(\s+)?url|\,(\s+)?(repeating-)?(linear|radial|conic)-gradient/g,e=>t+e.slice(1)).split(t).map(e=>e.trim()),i=[],a=[];for(let e=0;e<r.length;e++)/^url\(/.test(r[e])?i.push(r[e]):/^(repeating-)?(linear|radial|conic)-gradient\(/.test(r[e])&&a.push(r[e]);return[i,a]},v=e=>e?e.replace(/\'/g,`"`).replace(/url\(\"(.*?)\"\)/g,(e,t)=>t.replace(/\s+/g,``)):``;function y(e,t,n){let r=[`w`,`h`,`x`,`y`,`z`];return d(l(u({...e,...(()=>{let e={};return n&&r.forEach(t=>e[t]=n[t]),e})()},(()=>{let e={...p};return r.forEach(t=>e[t]=0),e})()),{...m,...t}))}function b(e){return[...new Set(Object.entries(e).map(([e,t])=>typeof t==`boolean`&&t?e:Array.isArray(t)?t.join(` `):t))].join(` `)}function x(e={},t,n={}){let{ImgLazyLoad:r=!0,PxToRem:i=!1,disassemblyStyle:s=`style`,lineWrap:c=!1}=n;if(r){for(let n in e)if(n===`src`&&t===`img`&&e.style.height!==`auto`)e={...e,src:``,"__lego__lazy-load_image":e.src||e[`data-src`]||e[`__lego__lazy-load_image`]};else if(n===`style`&&e.style[`background-image`]){let[t,n]=_(e.style[`background-image`]);e={...e,"__lego__lazy-load_background-image":t.map(e=>v(e)).join(`,`),style:{...e.style,"background-image":n.join(`,`)}}}}return[Object.entries(e).filter(([e])=>s===`inline`?!0:e!==`style`).map(([e,t])=>{let n=``;if(typeof t==`boolean`)return t?`${e}="true"`:``;if(Array.isArray(t))n=t.join(`,`);else if(Object.prototype.toString.call(t)===`[object Object]`){if(e===`class`)n=b(t);else if(e===`style`){let e=o(t,c);n=i?a(e,100):e}}else if(e===`href`){let e=t.replace(/\s+/g,``)||`javascript:void(0);`;n=e,/^\d+$/g.test(e.replace(/-/g,``))&&(n=`tel:${e}`)}else n=e===`style`&&i?a(t,100):t;return[e,`"${n}"`].join(`=`)}).filter(Boolean).join(c?`
`:` `),s===`inline`?``:Object.prototype.toString.call(e.style)===`[object Object]`?`#${e.id} {
${i?a(o(e.style,c),100):o(e.style,c)}
}`:a(e.style,100)]}function S(t,n={}){let{id:i,tag:a,renderTag:o,aliasName:s,text:c,children:l,__attrs__:u,__props__:d,__config__:f,__slots__:p}=t,m=y({...d?.style||{},...u?.style||{},...f?.attrs?.style||{}},f?.units||{},d||{}),[h,g]=x(r(e({...u||{},style:m,id:i}),{class:{__lego__tag:!0}}),a,n);return{id:i,tag:a,renderTag:o,aliasName:s,className:C(u?.class),style:m,attrString:h,cssString:g,text:c||``,children:l||[],slots:p||{}}}function C(e={}){return Object.entries(e).filter(([e,t])=>t).map(([e])=>e).join(` `)}function w(e){let{__props__:t}=e,n={};return t?(t.autoplay!==void 0&&(n.autoplay=t.autoplay),t.interval!==void 0&&(n.interval=t.interval),t.loop!==void 0&&(n.loop=t.loop),t.pagination!==void 0&&(n.pagination=t.pagination),n):n}var T={MODULE_CLASS:`module`,INLINE_CSS:`inline`,IMPORT_CLASS:`import`},E={HOOKS:`hooks`,COMPONENT:`component`},D={PROJECT:`project`,COMPONENT:`component`},O={framework:`react`,cssUnit:`px`,inlineStyle:`module`,componentStyle:`hooks`,outputStyle:`component`,cssStyle:`kebabCase`,useTypescript:!1,globalCss:!0,scale:1,responseWidth:750},k=[`img`,`input`,`br`,`hr`,`meta`,`link`,`area`,`base`,`col`,`embed`,`param`,`source`,`track`,`wbr`],A=`position.display.float.left.top.right.bottom.z-index.overflow.clear.width.height.max-width.max-height.padding.padding-top.padding-bottom.padding-left.padding-right.border.border-width.border-style.border-color.border-radius.margin.margin-top.margin-bottom.margin-left.margin-right.background.background-color.background-image.background-size.font-family.font-size.font-style.font-weight.font-variant.line-height.color.text-align.vertical-align.text-wrap.text-transform.text-indent.text-decoration.letter-spacing.word-spacing.white-space.text-overflow.content.box-shadow.transform`.split(`.`),j=`/**
 * 全局样式 global.css
 * 由 Lego DSL 自动生成
 */
.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.justify-start {
  display: flex;
  justify-content: flex-start;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.justify-end {
  display: flex;
  justify-content: flex-end;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}

.justify-around {
  display: flex;
  justify-content: space-around;
}

.items-start {
  display: flex;
  align-items: flex-start;
}

.items-center {
  display: flex;
  align-items: center;
}

.items-end {
  display: flex;
  align-items: flex-end;
}
`;function M(e,t){if(Array.isArray(e)){e.forEach(e=>M(e,t));return}!e||typeof e!=`object`||(t(e),e.children&&Array.isArray(e.children)&&e.children.length>0&&e.children.forEach(e=>M(e,t)),e.__slots__&&typeof e.__slots__==`object`&&Object.values(e.__slots__).forEach(e=>{Array.isArray(e)&&e.forEach(e=>M(e,t))}))}function N(e){let{__props__:t={},__attrs__:n={},__config__:r={}}=e;return y({...t.style||{},...n.style||{},...r.attrs?.style||{}},r.units||{},t)}function P(e=`styles`,t){if(!t||!t.trim())return``;let n=t.trim();return/[-]/.test(n)||/^\d/.test(n)?`${e}['${n}']`:`${e}.${n}`}function F(e,t=2){let n=` `.repeat(t);return e.split(`
`).map(e=>e.trim()?n+e:e).join(`
`)}function I(e){return typeof e==`string`?e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/\{/g,`&#123;`).replace(/\}/g,`&#125;`):String(e)}function L(e){return e?e.replace(/[-_](\w)/g,(e,t)=>t.toUpperCase()).replace(/^./,e=>e.toUpperCase()):``}function R(e,t){return e?/^[\x21-\x7E]+$/.test(e)?L(e):L(t||`Component`):t||`Component`}function z(e){return!e||Object.keys(e).length===0?``:Object.entries(e).map(([e,t])=>{let n=i(e),r=A.indexOf(n);return{key:n,value:t,index:r===-1?999:r}}).sort((e,t)=>e.index-t.index).map(({key:e,value:t})=>`  ${e}: ${t};`).join(`
`)}function B(e,t){if(!e)return!1;let{componentsMap:n,importsMap:r,dependenceList:i}=t;if(!n||!n[e])return!1;let a=n[e],o=a.packageName||e,s=a.exportName||L(e);return r.has(o)||r.set(o,new Set),r.get(o).add({name:s,exportName:s,subName:a.subName,destructuring:a.dependence?.destructuring}),i.find(e=>e.package===o)||i.push({package:o,version:a.dependenceVersion||`*`}),!0}function V(e){let t=[],n=[];for(let[r,i]of e){let e=new Set,a=new Set;for(let t of i){let{name:r,exportName:i,subName:o,destructuring:s}=t;if(o){n.push(`const ${r} = ${i}.${o};`);continue}s?a.add(i):r===i?e.add(i):e.add(`${i} as ${r}`)}let o=[];e.size>0&&o.push([...e].join(`, `)),a.size>0&&o.push(`{ ${[...a].join(`, `)} }`),o.length>0&&t.push(`import ${o.join(`, `)} from '${r}';`)}return[...t,...n]}function H(e,n){return!e||e===`draggableSort`?!1:!t(e)}function U(e){return e?e.renderTag===`draggableSort`&&e.children?.length>0:!1}export{d as A,y as C,p as D,h as E,s as F,l as M,c as N,m as O,o as P,x as S,v as T,D as _,V as a,S as b,H as c,R as d,M as f,j as g,O as h,z as i,f as j,g as k,L as l,T as m,I as n,F as o,E as p,P as r,U as s,B as t,N as u,k as v,_ as w,b as x,w as y};