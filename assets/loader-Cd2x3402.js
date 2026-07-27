import{n as e}from"./rolldown-runtime-aKtaBQYM.js";import{I as t,L as n,N as r,T as i,d as a,dt as o,et as s,i as c,pt as l,s as u,x as d}from"./runtime-core.esm-bundler-Dn4nvGT2.js";import{t as f}from"./runtime-dom.esm-bundler-C1NCw-ul.js";import{E as p,T as m,_ as h,g,w as _,x as v}from"./nodeDataBind-BWjhOjmr.js";var y=5e3,b=[/\bfetch\s*\(/,/\bXMLHttpRequest\b/,/\bWebSocket\b/,/\beval\s*\(/,/\bimport\s*\(/,/\bnew\s+Function\s*\(/,/\blocalStorage\b/,/\bsessionStorage\b/,/\bindexedDB\b/,/\bWorker\b/,/\bFunction\s*\(/];function x(e){return e.replace(/\/\/.*$/gm,``).replace(/\/\*[\s\S]*?\*\//g,``).replace(/`(?:\\.|[^`\\])*`/g,`""`).replace(/"(?:\\.|[^"\\])*"/g,`""`).replace(/'(?:\\.|[^'\\])*'/g,`''`)}function S(e){let t=[],n=x(e);for(let e of b)if(e.test(n)){let r=n.match(e);t.push(`禁止使用 "${r?r[0]:e}"。`)}return{valid:t.length===0,errors:t}}function C(e){return e.replace(/\bexport\s+default\b/g,`module.exports =`).replace(/\bexport\s+function\b/g,`function`).replace(/\bexport\s+const\b/g,`const`).replace(/\bexport\s+let\b/g,`let`).replace(/\bexport\s+var\b/g,`var`).replace(/\bexport\s*\{[^}]*\}\s*;?/g,``)}function w(e){return new Promise(p=>{let{valid:m,errors:h}=S(e);if(!m){p({success:!1,error:h.join(`
`)});return}let g=setTimeout(()=>{p({success:!1,error:`组件代码执行超时（超过 ${y/1e3} 秒）`})},y);try{let m={console:{log:(...e)=>console.log(`[custom-component]`,...e),warn:(...e)=>console.warn(`[custom-component]`,...e),error:(...e)=>console.error(`[custom-component]`,...e)},JSON,Math,Date,Array,Object,String,Number,Boolean,RegExp,Map,Set,Promise,Error,parseInt,parseFloat,isNaN,isFinite,undefined:void 0,null:null,true:!0,false:!1,h:i,ref:l,reactive:o,computed:a,watch:s,onMounted:t,onUnmounted:n,onBeforeUnmount:r,defineComponent:d,Fragment:c,Teleport:u,Transition:f,module:{exports:{}},exports:{},document:void 0,window:void 0,fetch:void 0,eval:void 0,Function:void 0,localStorage:void 0,globalThis:void 0},h=C(e),_=Function(`sandbox`,`
        with (sandbox) {
          ${h}
          return module.exports || exports;
        }
      `)(m);clearTimeout(g);let v=_?.default||_;if(!v||typeof v!=`object`){p({success:!1,error:`组件包未导出有效对象。请 export default { id, name, tag, props, component }`});return}p({success:!0,material:v})}catch(e){clearTimeout(g),p({success:!1,error:`组件代码执行错误: ${e.message}`})}})}var T=e({COMPONENT_PACKAGE_TEMPLATE:()=>j,compileComponentSource:()=>A,loadComponentFromCode:()=>O,loadComponentFromFile:()=>k});function E(e){return e?typeof e==`function`?e:e.setup||e.render||e.template?d(e):e:null}function D(e,t){let n=p({...e,source:`user`,sourceCode:t});if(n.id||=`cc-`+Date.now().toString(36)+`-`+Math.random().toString(36).slice(2,9),n.tag=_(n.tag||n.id),n.renderTag=n.tag,!m(n.tag))throw Error(`无效 tag: "${n.tag}"，须为 custom- 开头`);if(!n.name)throw Error(`组件包缺少 name`);return e.component?(n.component=E(e.component),n.canvas={mode:`runtime`},n.isContainer=!!(e.isContainer||e.canvas?.mode===`container`)):e.canvas?.mode===`runtime`&&t?n.canvas={mode:`runtime`}:n.canvas?.mode||(n.canvas={mode:`placeholder`}),e.html&&(n.html=e.html),n.sourceCode=t,n}async function O(e,t={}){let{persist:n=!0,overwrite:r=!0}=t,i=await w(e);if(!i.success||!i.material)return{success:!1,error:i.error||`组件代码执行失败`};let a;try{a=D(i.material,e)}catch(e){return{success:!1,error:e.message}}let o=g(a.id),s=h(a.tag),c=o||s;if(c){if(c.source===`preset`||c._builtin)return{success:!1,error:`不能覆盖内置组件 "${c.tag}"`};if(!r)return{success:!1,error:`组件 "${a.tag}" 已存在，请先删除或开启覆盖`};a.id=c.id}try{return v(a,{persist:n}),{success:!0,material:a}}catch(e){return{success:!1,error:e.message}}}function k(e){return new Promise(t=>{if(!e?.name?.endsWith(`.js`)&&!e?.name?.endsWith(`.mjs`)){t({success:!1,error:`仅支持 .js 组件包文件`});return}let n=new FileReader;n.onload=async e=>{let n=e.target.result;t(await O(String(n)))},n.onerror=()=>{t({success:!1,error:`读取文件 "${e.name}" 失败`})},n.readAsText(e)})}async function A(e){let t=await w(e);return!t.success||!t.material?{success:!1,error:t.error}:{success:!0,component:E(t.material.component)||null,material:t.material}}var j=`export default {
  id: 'cc-demo-card',
  name: '演示卡片',
  tag: 'custom-demo-card',
  category: '自定义组件',
  version: '1.0.0',
  defaultW: 280,
  defaultH: 120,
  // placeholder | container（子树可编）| runtime（画布真渲染，须提供 component；用 h() 非 JSX）
  canvas: { mode: 'runtime' },
  // 若要「颗粒可把控」：改用 canvas: { mode: 'container' }，并在 defaults.slots.default 放默认子节点

  props: [
    { name: 'title', label: '标题', type: 'string', default: 'Hello Lego' },
    { name: 'subtitle', label: '副标题', type: 'string', default: '自定义组件预览' },
  ],

  defaults: {
    config: {
      units: { w: 'px', h: 'px' },
      events: { resizable: {} },
    },
    // slots: { default: [] }, // container 模式下默认子树
  },

  export: {
    package: '@/components/DemoCard',
    export: 'default',
    import: 'default',
  },

  /**
   * 画布运行时（可用 h / ref / computed；沙箱不支持 JSX）
   * 根节点请 width/height:100%，布局与自由拖拽交给 Schema 外壳
   */
  component: {
    props: ['title', 'subtitle'],
    setup(props, { slots }) {
      return () =>
        h(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              padding: '16px 18px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0052d9 0%, #36cfc9 55%, #ffc53d 100%)',
              boxShadow: '0 8px 20px rgba(0, 82, 217, 0.28)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '6px',
              color: '#fff',
            },
          },
          [
            h('div', { style: { fontSize: '18px', fontWeight: '700', textShadow: '0 1px 2px rgba(0,0,0,.2)' } }, props.title),
            h('div', { style: { fontSize: '13px', opacity: '0.92' } }, props.subtitle),
            slots.default?.(),
          ]
        );
    },
  },
};`;export{T as i,O as n,k as r,j as t};