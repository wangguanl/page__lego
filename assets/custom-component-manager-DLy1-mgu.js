const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./monaco-editor-CNXcw9Hr.js","./rolldown-runtime-aKtaBQYM.js","./runtime-core.esm-bundler-Dn4nvGT2.js","./dist-B0gSJlag.js","./index-Dm0L-M3a.js","./runtime-dom.esm-bundler-C1NCw-ul.js","./es-BfSxlBLK.js","./set-B04GZ3Z7.js","./index-buIfLx5w.css","./editor.api2-DaRHacoD.js","./editor-CGi5ri4_.css","./workers-CmDoeUdo.js","./monaco.contribution-DFfrZkai.js","./clipboard-CvrSUraS.js"])))=>i.map(i=>d[i]);
import{I as e,W as t,b as n,dt as r,i,pt as a,v as o,x as s,y as c}from"./runtime-core.esm-bundler-Dn4nvGT2.js";import{i as l,r as u}from"./es-BfSxlBLK.js";import{D as d,O as f,T as p,Y as m,k as h,lt as g}from"./dist-B0gSJlag.js";import{i as _}from"./index-Dm0L-M3a.js";import{S as v,T as y,b,o as x,v as S,w as C,x as w}from"./nodeDataBind-BWjhOjmr.js";import{n as T,r as E,t as D}from"./loader-Cd2x3402.js";import"./customComponent-Cpcy_OUp.js";var O=`/**
 * 由 demo/trans-3d 转化的用户自定义组件包
 *
 * 双轨：
 * - component：编辑器画布用 Vue（可交互）；须用 h()，沙箱不支持 JSX
 * - html.render：预览 / 导出 HTML 用纯原生（无 Vue、无第三方依赖）
 *
 * 外壳 / 布局 / 自由拖拽由 Schema 外壳负责；本组件根节点填满 100%。
 *
 * 用法：自定义组件管理 →「导入 3D 卡片示例」或上传本文件
 */
export default {
  id: 'cc-trans-3d-card',
  name: '3D 光效卡片',
  tag: 'custom-trans-3d-card',
  category: '自定义组件',
  version: '1.2.1',
  defaultW: 250,
  defaultH: 400,
  canvas: { mode: 'runtime' },

  props: [
    {
      name: 'image',
      label: '封面图',
      type: 'string',
      default:
        'https://key-drop.com/cdn-cgi/image/format=auto,width=270,dpr=2/uploads/skins/JAINA.png',
    },
    {
      name: 'sparkle',
      label: '闪光层',
      type: 'string',
      default: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif',
    },
    {
      name: 'intensity',
      label: '倾斜灵敏度',
      type: 'number',
      default: 10,
    },
    {
      name: 'radius',
      label: '圆角',
      type: 'number',
      default: 10,
    },
  ],

  // 用户物料一般不配 export.package：HTML/Vue/React 均由 DSL
  // 根据 Schema + html.render（及 sourceCode）生成自包含代码。
  // 仅当指向真实 npm 包（非 @/）时才走外部 import。

  defaults: {
    config: {
      units: { w: 'px', h: 'px' },
      events: { resizable: {} },
    },
  },

  /**
   * HTML 编译（预览 ≈ 导出 HTML）：禁止依赖第三方库
   */
  html: {
    render(props) {
      const image = props.image || '';
      const sparkle = props.sparkle || '';
      const intensity = Number(props.intensity) || 10;
      const r = \`\${props.radius ?? 10}px\`;

      return {
        html: \`<div class="lego-t3d-root"><div class="lego-t3d-card"><div class="lego-t3d-img" style="background-image:url('\${image}');--per:50%"></div></div></div>\`,
        css: \`
.lego-t3d-root{width:100%;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:#000;perspective:500px;transform-style:preserve-3d;cursor:pointer;overflow:hidden}
.lego-t3d-card{width:100%;height:100%;background:#000;border-radius:\${r};transform-style:preserve-3d;transition:transform .1s}
.lego-t3d-img{position:relative;width:100%;height:100%;background-size:cover;background-position:center;border-radius:\${r};filter:brightness(1.2)}
.lego-t3d-img::after{content:"";position:absolute;inset:0;border-radius:\${r};background:url("\${sparkle}") center/cover;mix-blend-mode:color-dodge;pointer-events:none}
.lego-t3d-img::before{content:"";position:absolute;inset:0;border-radius:\${r};background:linear-gradient(115deg,transparent 0%,#06e8ff var(--per),#ffab2e calc(var(--per) + 25%),#ff2212 calc(var(--per) + 50%),transparent 100%);mix-blend-mode:overlay;pointer-events:none}
\`.trim(),
        script({ id }) {
          return \`
(function(){
  var root=document.getElementById("\${id}");
  if(!root)return;
  var card=root.querySelector(".lego-t3d-card");
  var img=root.querySelector(".lego-t3d-img");
  if(!card||!img)return;
  var multiple=\${intensity};
  function move(e){
    var box=card.getBoundingClientRect();
    var calcX=-(e.clientY-box.y-box.height/2)/multiple;
    var calcY=(e.clientX-box.x-box.width/2)/multiple;
    var percentage=parseInt((e.clientX-box.x)/box.width*1000)/10;
    card.style.transform="rotateX("+calcX+"deg) rotateY("+calcY+"deg)";
    img.style.setProperty("--per",percentage+"%");
  }
  function leave(){card.style.transform="rotateX(0) rotateY(0)";}
  card.addEventListener("mousemove",function(e){requestAnimationFrame(function(){move(e);});});
  card.addEventListener("mouseleave",function(){requestAnimationFrame(leave);});
})();
\`.trim();
        },
      };
    },
  },

  /** 画布运行时（可用 Vue + h）；不进入 HTML 产物 */
  component: {
    props: ['image', 'sparkle', 'intensity', 'radius'],
    setup(props) {
      const rotateX = ref(0);
      const rotateY = ref(0);
      const per = ref(50);

      function onMove(e) {
        const el = e.currentTarget;
        if (!el) return;
        const box = el.getBoundingClientRect();
        const multiple = Number(props.intensity) || 10;
        rotateX.value = -(e.clientY - box.y - box.height / 2) / multiple;
        rotateY.value = (e.clientX - box.x - box.width / 2) / multiple;
        per.value =
          parseInt(((e.clientX - box.x) / box.width) * 1000, 10) / 10;
      }

      function onLeave() {
        rotateX.value = 0;
        rotateY.value = 0;
      }

      return () => {
        const r = \`\${props.radius ?? 10}px\`;
        const sparkle = props.sparkle || '';
        const image = props.image || '';
        const cssText = \`
.lego-t3d-root{width:100%;height:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;background:#000;perspective:500px;transform-style:preserve-3d;overflow:hidden}
.lego-t3d-card{width:100%;height:100%;background:#000;border-radius:\${r};transform-style:preserve-3d;transition:transform .1s}
.lego-t3d-img{position:relative;width:100%;height:100%;background-size:cover;background-position:center;border-radius:\${r};filter:brightness(1.2)}
.lego-t3d-img::after{content:"";position:absolute;inset:0;border-radius:\${r};background:url("\${sparkle}") center/cover;mix-blend-mode:color-dodge;pointer-events:none}
.lego-t3d-img::before{content:"";position:absolute;inset:0;border-radius:\${r};background:linear-gradient(115deg,transparent 0%,#06e8ff var(--per),#ffab2e calc(var(--per) + 25%),#ff2212 calc(var(--per) + 50%),transparent 100%);mix-blend-mode:overlay;pointer-events:none}
\`.trim();

        return h(Fragment, null, [
          h('style', cssText),
          h('div', { class: 'lego-t3d-root' }, [
            h(
              'div',
              {
                class: 'lego-t3d-card',
                style: {
                  transform: \`rotateX(\${rotateX.value}deg) rotateY(\${rotateY.value}deg)\`,
                },
                onMousemove: onMove,
                onMouseleave: onLeave,
              },
              [
                h('div', {
                  class: 'lego-t3d-img',
                  style: {
                    backgroundImage: image ? \`url("\${image}")\` : 'none',
                    '--per': \`\${per.value}%\`,
                  },
                }),
              ]
            ),
          ]),
        ]);
      };
    },
  },
};
`,k=n(()=>_(()=>import(`./monaco-editor-CNXcw9Hr.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url));function A(){return`cc-`+Date.now().toString(36)+`-`+Math.random().toString(36).slice(2,11)}function j(e){return C(e.trim().replace(/[^a-zA-Z0-9\u4e00-\u9fa5-]/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``).toLowerCase()||`component`)}function M(e){return e?.source===`preset`||!!e?._builtin}var N=x(s({components:{Plus:m,Delete:p,Edit:h,Upload:g,Download:f,Document:d,MonacoEditor:k},emits:[`close`,`updated`],setup(n,{emit:s}){let _=a([]),x=a(!1),N=a(!1),P=a(D),F=a(!1),I=a(null),L=a(!1),R=a(null),z=a(null),B=r({name:``,tag:``,category:`自定义组件`,icon:`Setting`,defaultW:100,defaultH:100,canvasMode:`placeholder`,props:[],exportEnabled:!1,exportPackage:``,exportName:``,exportImport:`default`,exportCss:``}),V=r({name:``,label:``,type:`string`,default:``,options:``});function H(){_.value=S()}e(()=>{H(),b(()=>H())});function U(){L.value=!1,I.value=null,Z(),x.value=!0}function W(e=null){if(e&&M(e)){l.warning(`内置预设不可编辑源码`);return}e?(P.value=e.sourceCode||D,I.value=e,L.value=!0):(P.value=D,I.value=null,L.value=!1),N.value=!0}function G(){N.value=!1,P.value=D,I.value=null,L.value=!1}async function K(){F.value=!0;try{let e=await T(P.value,{overwrite:!0});e.success?(l.success(`组件 "${e.material.name}" 已安装（runtime）`),G(),H(),s(`updated`)):l.error(e.error||`安装失败`)}catch(e){l.error(e.message||`安装失败`)}finally{F.value=!1}}async function q(e){let t=await E(e);return t.success?(l.success(`组件 "${t.material.name}" 已从文件安装`),H(),s(`updated`)):l.error(t.error||`上传失败`),!1}async function J(){F.value=!0;try{let e=await T(O,{overwrite:!0});e.success?(l.success(`已安装「${e.material.name}」，请到左侧自定义组件列表拖入画布测试`),H(),s(`updated`)):l.error(e.error||`安装失败`)}catch(e){l.error(e.message||`安装失败`)}finally{F.value=!1}}function Y(){W(),P.value=O,L.value=!1,I.value=null}function X(e){if(M(e)){l.warning(`内置预设组件不可编辑，可导出后作为模板新建`);return}if(e.sourceCode){W(e);return}L.value=!0,I.value=e,B.name=e.name||``,B.tag=e.tag||``,B.category=e.category||`自定义组件`,B.icon=e.icon||`Setting`,B.defaultW=e.defaultW||100,B.defaultH=e.defaultH||100,B.canvasMode=e.canvas?.mode===`container`||e.isContainer?`container`:`placeholder`,B.props=(e.props||[]).map(e=>({...e})),e.export?(B.exportEnabled=!0,B.exportPackage=e.export.package||``,B.exportName=e.export.export||``,B.exportImport=e.export.import||`default`,B.exportCss=e.export.css||``):(B.exportEnabled=!1,B.exportPackage=``,B.exportName=``,B.exportImport=`default`,B.exportCss=``),x.value=!0}function Z(){B.name=``,B.tag=``,B.category=`自定义组件`,B.icon=`Setting`,B.defaultW=100,B.defaultH=100,B.canvasMode=`placeholder`,B.props=[],B.exportEnabled=!1,B.exportPackage=``,B.exportName=``,B.exportImport=`default`,B.exportCss=``,V.name=``,V.label=``,V.type=`string`,V.default=``,V.options=``}function Q(){x.value=!1,Z()}function $(){if(!V.name.trim()){l.warning(`请输入属性名`);return}let e=V.type===`select`&&V.options.trim()?V.options.split(`,`).map(e=>{let t=e.trim();return{label:t,value:t}}):void 0;B.props.push({name:V.name.trim(),label:V.label.trim()||V.name.trim(),type:V.type,default:V.type===`number`?Number(V.default)||0:V.type===`boolean`?V.default===`true`:V.default||``,options:e}),V.name=``,V.label=``,V.type=`string`,V.default=``,V.options=``}function ee(e){B.props.splice(e,1)}function te(){if(!B.name.trim()){l.warning(`请输入组件名称`);return}let e=C(B.tag.trim()||j(B.name));if(!y(e)){l.warning(`标签名须为 custom- 开头的小写短横线格式，如 custom-card`);return}let t=L.value?I.value.id:A(),n=B.canvasMode===`container`,r={id:t,source:`user`,name:B.name.trim(),tag:e,renderTag:e,category:B.category.trim()||`自定义组件`,icon:B.icon||`Setting`,version:`1.0.0`,props:B.props,defaultW:B.defaultW||100,defaultH:B.defaultH||100,isContainer:n,canvas:{mode:B.canvasMode},defaults:{attrs:{style:{},class:{}},config:{},slots:{}},createdAt:L.value?I.value.createdAt:Date.now()};B.exportEnabled&&B.exportPackage.trim()&&(r.export={package:B.exportPackage.trim(),import:B.exportImport||`default`,version:`*`},B.exportName.trim()&&(r.export.export=B.exportName.trim()),B.exportCss.trim()&&(r.export.css=B.exportCss.trim()));try{w(r),l.success(L.value?`组件已更新`:`组件已创建`),Q(),H(),s(`updated`)}catch(e){l.error(e.message||`保存失败`)}}async function ne(e){if(M(e)){l.warning(`内置预设组件不可删除`);return}try{await u.confirm(`确定要删除组件 "${e.name}" 吗？已放置在画布上的实例将变为占位组件。`,`确认删除`,{confirmButtonText:`删除`,cancelButtonText:`取消`,type:`warning`}),v(e.id),l.success(`组件已删除`),H(),s(`updated`)}catch{}}function re(e){return!e||typeof e!=`object`?`文件内容必须是 JSON 对象`:!e.name||typeof e.name!=`string`?`缺少必填字段: name（组件名称）`:!e.tag||typeof e.tag!=`string`?`缺少必填字段: tag（组件标签名）`:null}function ie(e){if(!e.name.endsWith(`.json`))return l.warning(`仅支持 .json 格式的组件定义文件`),!1;let t=new FileReader;return t.onload=e=>{try{let t=JSON.parse(e.target.result),n=re(t);if(n){l.error(`文件内容无效: `+n);return}if(t.id=t.id||A(),t.source=`user`,t.tag=C(t.tag),t.renderTag=t.renderTag||t.tag,t.category=t.category||`自定义组件`,t.createdAt=t.createdAt||Date.now(),t.props=t.props||[],t.canvas=t.canvas||{mode:t.isContainer?`container`:`placeholder`},!y(t.tag)){l.error(`tag 须为 custom- 开头的小写短横线格式`);return}let r=S().find(e=>e.tag===t.tag||e.id===t.id);if(r){if(M(r)){l.error(`不能覆盖内置预设组件`);return}w({...t,id:r.id}),l.success(`组件 "${t.name}" 已覆盖更新`)}else w(t),l.success(`组件 "${t.name}" 导入成功`);H(),s(`updated`)}catch(e){l.error(`JSON 解析失败: `+e.message)}},t.onerror=()=>{l.error(`文件读取失败`)},t.readAsText(e),!1}function ae(e){let t={...e};delete t._builtin,delete t._isUserComponent,delete t.component,delete t._componentDef,delete t._defaultAttrs,delete t._defaultConfig,delete t._defaultSlots,delete t._bindingChild,delete t.propsTarget;let n=JSON.stringify(t,null,2),r=new Blob([n],{type:`application/json`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`${e.tag||e.id}.lego-component.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),l.success(`组件 "${e.name}" 已导出`)}return()=>N.value?oe():x.value?ce():se();function oe(){return c(`div`,{class:`custom-component-manager`},[c(`div`,{class:`ccm-header`},[c(`h3`,null,[L.value?`编辑组件源码`:`编写组件包`]),c(`div`,{class:`ccm-header-actions`},[c(t(`el-button`),{type:`primary`,loading:F.value,onClick:K},{default:()=>[o(`安装 / 更新`)]}),c(t(`el-button`),{onClick:G},{default:()=>[o(`取消`)]})])]),c(`div`,{class:`ccm-section-hint`,style:`margin-bottom: 8px`},[o(`export default 组件包；可用 h / ref / computed；canvas.mode 为 runtime 时画布真渲染`)]),c(`div`,{class:`ccm-code-editor`},[c(k,{modelValue:P.value,"onUpdate:modelValue":e=>{P.value=e},lang:`javascript`,height:`420px`,fontSize:13},null)])])}function se(){return c(`div`,{class:`custom-component-manager`},[c(`div`,{class:`ccm-header`},[c(`h3`,null,[o(`自定义组件管理`)]),c(`div`,{class:`ccm-header-actions`},[c(t(`el-button`),{type:`primary`,icon:m,onClick:U},{default:()=>[o(`表单新建`)]}),c(t(`el-button`),{type:`success`,icon:d,onClick:()=>W()},{default:()=>[o(`写代码`)]}),c(t(`el-button`),{loading:F.value,onClick:J},{default:()=>[o(`导入 3D 卡片示例`)]}),c(t(`el-button`),{link:!0,type:`primary`,onClick:Y},{default:()=>[o(`查看示例源码`)]}),c(t(`el-upload`),{ref:z,accept:`.js,.mjs`,"auto-upload":!1,"show-file-list":!1,onChange:e=>q(e.raw)},{default:()=>c(t(`el-button`),{icon:g},{default:()=>[o(`上传 .js`)]})}),c(t(`el-upload`),{ref:R,accept:`.json`,"auto-upload":!1,"show-file-list":!1,onChange:e=>ie(e.raw)},{default:()=>c(t(`el-button`),null,{default:()=>[o(`导入 JSON`)]})}),c(t(`el-button`),{onClick:()=>s(`close`)},{default:()=>[o(`关闭`)]})])]),c(`div`,{class:`ccm-storage-info`},[c(`span`,{class:`ccm-storage-label`},[o(`本地存储`)]),c(`span`,{class:`ccm-storage-text`},[o(`共 `),_.value.length,o(` 个组件`)])]),_.value.length===0?c(t(`el-empty`),{description:`暂无自定义组件，点击"新增组件"创建`},null):c(`div`,{class:`ccm-list`},[_.value.map(e=>c(`div`,{class:`ccm-item`,key:e.id},[c(`div`,{class:`ccm-item-icon`},[c(`span`,{class:`ccm-item-avatar`},[e.name?.charAt(0)||`C`])]),c(`div`,{class:`ccm-item-info`},[c(`div`,{class:`ccm-item-name`},[e.name]),c(`div`,{class:`ccm-item-meta`},[c(`span`,{class:`ccm-item-tag`},[`<`+e.tag+`>`]),c(`span`,{class:`ccm-item-category`},[e.category]),M(e)?c(t(`el-tag`),{size:`small`,type:`info`},{default:()=>[o(`内置`)]}):c(t(`el-tag`),{size:`small`},{default:()=>[o(`用户`)]}),e.sourceCode?c(t(`el-tag`),{size:`small`,type:`success`},{default:()=>[o(`源码`)]}):null,c(`span`,{class:`ccm-item-props`},[e.canvas?.mode||`placeholder`]),e.export?c(`span`,{class:`ccm-item-export-tag`},[o(`已配置导出`)]):null])]),c(`div`,{class:`ccm-item-actions`},[c(t(`el-button`),{size:`small`,icon:f,onClick:()=>ae(e)},{default:()=>[o(`导出`)]}),M(e)?null:c(i,null,[c(t(`el-button`),{size:`small`,icon:h,onClick:()=>X(e)},{default:()=>[o(`编辑`)]}),c(t(`el-button`),{size:`small`,type:`danger`,icon:p,onClick:()=>ne(e)},{default:()=>[o(`删除`)]})])])]))])])}function ce(){return c(`div`,{class:`custom-component-manager`},[c(`div`,{class:`ccm-header`},[c(`h3`,null,[L.value?`编辑组件`:`新增组件`]),c(`div`,{class:`ccm-header-actions`},[c(t(`el-button`),{type:`primary`,onClick:te},{default:()=>[o(`保存`)]}),c(t(`el-button`),{onClick:Q},{default:()=>[o(`取消`)]})])]),c(`div`,{class:`ccm-form`},[c(t(`el-form`),{"label-width":`100px`,class:`ccm-form-section`},{default:()=>[c(`div`,{class:`ccm-section-title`},[o(`基本信息`)]),c(t(`el-form-item`),{label:`组件名称`,required:!0},{default:()=>[c(t(`el-input`),{modelValue:B.name,"onUpdate:modelValue":e=>{B.name=e,L.value||(B.tag=j(e))},placeholder:`如：我的按钮`},null)]}),c(t(`el-row`),{gutter:16},{default:()=>[c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`标签名`,required:!0},{default:()=>[c(t(`el-input`),{modelValue:B.tag,"onUpdate:modelValue":e=>{B.tag=C(e)},placeholder:`custom-card`,disabled:L.value},null),c(`div`,{class:`ccm-section-hint`},[o(`须以 custom- 开头`)])]})]}),c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`分类`},{default:()=>[c(t(`el-input`),{modelValue:B.category,"onUpdate:modelValue":e=>{B.category=e},placeholder:`自定义组件`},null)]})]})]}),c(t(`el-row`),{gutter:16},{default:()=>[c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`默认宽度`},{default:()=>[c(t(`el-input-number`),{modelValue:B.defaultW,"onUpdate:modelValue":e=>{B.defaultW=e},min:20,max:2e3},null)]})]}),c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`默认高度`},{default:()=>[c(t(`el-input-number`),{modelValue:B.defaultH,"onUpdate:modelValue":e=>{B.defaultH=e},min:20,max:2e3},null)]})]})]}),c(t(`el-form-item`),{label:`图标`},{default:()=>[c(t(`el-input`),{modelValue:B.icon,"onUpdate:modelValue":e=>{B.icon=e},placeholder:`Element Plus 图标名`},null)]}),c(t(`el-form-item`),{label:`画布模式`},{default:()=>[c(t(`el-radio-group`),{modelValue:B.canvasMode,"onUpdate:modelValue":e=>{B.canvasMode=e}},{default:()=>[c(t(`el-radio`),{value:`placeholder`},{default:()=>[o(`占位`)]}),c(t(`el-radio`),{value:`container`},{default:()=>[o(`容器（可拖入子节点）`)]})]})]})]}),c(`div`,{class:`ccm-form-section`},[c(`div`,{class:`ccm-section-title`},[o(`属性定义`),c(`span`,{class:`ccm-section-hint`},[o(`（定义组件可配置的属性，将自动生成编辑面板）`)])]),B.props.length>0?c(t(`el-table`),{data:B.props,style:`width: 100%; margin-bottom: 12px;`},{default:()=>[c(t(`el-table-column`),{prop:`name`,label:`属性名`,width:`120`},null),c(t(`el-table-column`),{prop:`label`,label:`显示名`,width:`120`},null),c(t(`el-table-column`),{prop:`type`,label:`类型`,width:`80`},null),c(t(`el-table-column`),{prop:`default`,label:`默认值`},null),c(t(`el-table-column`),{label:`操作`,width:`70`},{default:({$index:e})=>c(t(`el-button`),{type:`danger`,size:`small`,icon:p,onClick:()=>ee(e)},null)})]}):null,c(`div`,{class:`ccm-add-prop`},[c(t(`el-row`),{gutter:8},{default:()=>[c(t(`el-col`),{span:4},{default:()=>[c(t(`el-input`),{modelValue:V.name,"onUpdate:modelValue":e=>{V.name=e},placeholder:`属性名`,size:`small`},null)]}),c(t(`el-col`),{span:4},{default:()=>[c(t(`el-input`),{modelValue:V.label,"onUpdate:modelValue":e=>{V.label=e},placeholder:`显示名`,size:`small`},null)]}),c(t(`el-col`),{span:3},{default:()=>[c(t(`el-select`),{modelValue:V.type,"onUpdate:modelValue":e=>{V.type=e},size:`small`,style:`width: 100%`},{default:()=>[c(t(`el-option`),{label:`字符串`,value:`string`},null),c(t(`el-option`),{label:`数字`,value:`number`},null),c(t(`el-option`),{label:`布尔`,value:`boolean`},null),c(t(`el-option`),{label:`下拉`,value:`select`},null),c(t(`el-option`),{label:`颜色`,value:`color`},null)]})]}),c(t(`el-col`),{span:4},{default:()=>[c(t(`el-input`),{modelValue:V.default,"onUpdate:modelValue":e=>{V.default=e},placeholder:`默认值`,size:`small`},null)]}),c(t(`el-col`),{span:V.type===`select`?4:5},{default:()=>[V.type===`select`?c(t(`el-input`),{modelValue:V.options,"onUpdate:modelValue":e=>{V.options=e},placeholder:`选项,逗号分隔`,size:`small`},null):null]}),c(t(`el-col`),{span:(V.type,5)},{default:()=>[c(t(`el-button`),{type:`primary`,size:`small`,icon:m,onClick:$,style:`width: 100%`},{default:()=>[o(`添加`)]})]})]})])]),c(t(`el-form`),{"label-width":`100px`,class:`ccm-form-section`},{default:()=>[c(`div`,{class:`ccm-section-title`},[o(`导出映射（可选）`)]),c(t(`el-form-item`),{label:`启用导出映射`},{default:()=>[c(t(`el-switch`),{modelValue:B.exportEnabled,"onUpdate:modelValue":e=>{B.exportEnabled=e}},null),c(`span`,{class:`ccm-section-hint`,style:`margin-left: 8px;`},[o(`启用后，导出代码时将自动生成 import 语句`)])]}),B.exportEnabled?c(i,null,[c(t(`el-form-item`),{label:`npm 包名`,required:!0},{default:()=>[c(t(`el-input`),{modelValue:B.exportPackage,"onUpdate:modelValue":e=>{B.exportPackage=e},placeholder:`如：my-ui-lib`},null)]}),c(t(`el-row`),{gutter:16},{default:()=>[c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`导出名`},{default:()=>[c(t(`el-input`),{modelValue:B.exportName,"onUpdate:modelValue":e=>{B.exportName=e},placeholder:`默认：标签名 PascalCase`},null)]})]}),c(t(`el-col`),{span:12},{default:()=>[c(t(`el-form-item`),{label:`导入方式`},{default:()=>[c(t(`el-select`),{modelValue:B.exportImport,"onUpdate:modelValue":e=>{B.exportImport=e},style:`width: 100%`},{default:()=>[c(t(`el-option`),{label:`默认导入 (default)`,value:`default`},null),c(t(`el-option`),{label:`解构导入 (named)`,value:`destructuring`},null)]})]})]})]}),c(t(`el-form-item`),{label:`CSS 路径`},{default:()=>[c(t(`el-input`),{modelValue:B.exportCss,"onUpdate:modelValue":e=>{B.exportCss=e},placeholder:`如：my-ui-lib/dist/style.css`},null)]})]):null]})])])}}}),[[`__scopeId`,`data-v-23c48bc9`]]);export{N as default};