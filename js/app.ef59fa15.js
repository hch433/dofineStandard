(function(t){function e(e){for(var a,i,o=e[0],r=e[1],u=e[2],p=0,v=[];p<o.length;p++)i=o[p],s[i]&&v.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(v.length)v.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,o=1;o<n.length;o++){var r=n[o];0!==s[r]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},c=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dofineStandard/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=r;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0324":function(t,e,n){},"0344":function(t,e,n){"use strict";var a=n("505b"),s=n.n(a);s.a},"3a0f":function(t,e,n){t.exports=n.p+"img/structure.3b5fde61.jpg"},"4ee2":function(t,e,n){},"4ffd":function(t,e,n){t.exports=n.p+"img/logo.8e5bff6d.png"},"505b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i=(n("7c55"),n("2877")),o={},r=Object(i["a"])(o,s,c,!1,null,null,null),u=r.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("dofine-menu",{staticClass:"menu"}),n("div",{staticClass:"left"}),n("div",{staticClass:"right"},[n("div",{staticClass:"home-title-wrapper"},[n("h3",{staticClass:"title"},[t._v(t._s(t.name))]),n("div",[n("a-breadcrumb",t._l(t.$route.matched,function(e,a){return n("a-breadcrumb-item",{key:a},[t._v(t._s(e.name))])}),1)],1)]),n("div",{staticClass:"content"},[n("router-view")],1)])],1)},v=[],d=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"menu-container"},[t._m(0),n("a-menu",{staticClass:"dofine-ant-menu",attrs:{defaultSelectedKeys:t.index,mode:"inline"}},[n("a-menu-item",{key:"1"},[n("router-link",{attrs:{to:"/component_standard"}},[t._v("组件化开发")])],1),n("a-menu-item",{key:"2"},[n("router-link",{attrs:{to:"/notes"}},[t._v("注释规范")])],1),n("a-menu-item",{key:"3"},[n("router-link",{attrs:{to:"/codes"}},[t._v("编码规范")])],1),n("a-menu-item",{key:"4"},[n("router-link",{attrs:{to:"/cooperation"}},[t._v("与后端的工作")])],1)],1)],1)])}),f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("a",{attrs:{href:"http://do-fine.com/",target:"_blank"}},[a("img",{staticClass:"logo",attrs:{src:n("4ffd")}})])])}],_={name:"dofineMenu",components:{},filter:{},props:{},data:function(){return{}},computed:{index:function(){return["".concat(this.$route.meta.index)]}},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},m=_,b=(n("fd55"),Object(i["a"])(m,d,f,!1,null,"14cabd37",null)),C=b.exports,h={name:"home",data:function(){return{}},computed:{name:function(){return this.$route.name}},created:function(){},components:{dofineMenu:C}},g=h,x=(n("a2b9"),Object(i["a"])(g,p,v,!1,null,"a32579a2",null)),y=x.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentStandard"},[t._m(0),t._m(1),n("div",{staticClass:"part"},[n("h3",{staticClass:"title"},[t._v("vue文件基本结构")]),n("dofine-code")],1),t._m(2),t._m(3)])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"part"},[n("p",[t._v("单文件系统，样式局部作用域")]),n("p",[t._v("基本组成结构：<template/> <script/> <style scoped/>")]),n("p",[t._v("组件注册方式：1）公共组件全局注册 2）其余组件局部注册")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"part"},[n("h3",{staticClass:"title"},[t._v("组件命名规范")]),n("p",[t._v("命名可遵循以下规则：")]),n("p",[n("span",{staticClass:"number"},[t._v("1.")]),t._v("有意义的名词、简短、具有可读性")]),n("p",[n("span",{staticClass:"number"},[t._v("2.")]),t._v("以小写开头，采用短横线分割命名")]),n("p",[n("span",{staticClass:"number"},[t._v("3.")]),t._v("公共组件命名以公司名称简拼为命名空间(doFineXX.vue)")]),n("p",[n("span",{staticClass:"number"},[t._v("4.")]),t._v("文件夹命名主要以功能模块代表命名")]),n("p",[t._v("同时还需要注意：必须符合自定义元素规范: 使用连字符分隔单词，切勿使用保留字。doFine- 前缀作为命名空间。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"part"},[n("h3",{staticClass:"title"},[t._v("vue文件方法声明顺序")]),n("p",[t._v("•\t    - components")]),n("p",[t._v("•\t    - filter")]),n("p",[t._v("•\t    - props")]),n("p",[t._v("•\t    - data")]),n("p",[t._v("•\t    - computed")]),n("p",[t._v("•\t    - watch")]),n("p",[t._v("•\t    - created")]),n("p",[t._v("•\t    - mounted")]),n("p",[t._v("•\t    - activited")]),n("p",[t._v("•\t    - update")]),n("p",[t._v("•\t    - beforeRouteUpdate")]),n("p",[t._v("•\t    - methods")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"part"},[a("h3",{staticClass:"title"},[t._v("结构化规范")]),a("div",{staticClass:"img"},[a("img",{attrs:{src:n("3a0f")}})])])}],k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pre",{staticClass:"pre"},[t._v("    "),n("code",{staticClass:"label"},[t._v("<template>")]),t._v("\n        "),n("code",{staticClass:"code"},[t._v("<div>")]),t._v("\n            "),n("code",{staticClass:"note"},[t._v("\x3c!--必须在div中编写页面--\x3e")]),t._v("\n        "),n("code",{staticClass:"code"},[t._v("</div>")]),t._v("\n    "),n("code",{staticClass:"label"},[t._v("</template>")]),t._v("\n\n    "),n("code",{staticClass:"code"},[t._v("<script>")]),t._v("\n    "),n("code",{staticClass:"label"},[t._v("export default")]),t._v(" {\n        "),n("code",{staticClass:"in-code"},[t._v("components")]),t._v(": {\n        },\n        "),n("code",{staticClass:"code"},[t._v("data ()")]),t._v(" {\n            "),n("code",{staticClass:"label"},[t._v("return ")]),t._v("{\n                "),n("code",{staticClass:"note"},[t._v("//data")]),t._v("\n            }\n        },\n        "),n("code",{staticClass:"code"},[t._v("mounted()")]),t._v(" {\n        },\n        "),n("code",{staticClass:"in-code"},[t._v("methods")]),t._v(": {\n        }\n    }\n    "),n("code",{staticClass:"code"},[t._v("<\/script>")]),t._v("\n\n    "),n("code",{staticClass:"note"},[t._v("\x3c!--声明语言，并且添加scoped--\x3e")]),t._v("\n\n    "),n("code",{staticClass:"code"},[t._v('<style lang="lass" scoped>')]),t._v("\n\n    "),n("code",{staticClass:"code"},[t._v("</style>")]),t._v("\n")])])}],j={name:"defineCode",components:{},filter:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},O=j,S=(n("f781"),Object(i["a"])(O,k,E,!1,null,"d4638630",null)),U=S.exports,P={name:"componentStandard",components:{dofineCode:U},filter:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},R=P,M=(n("ad2b"),Object(i["a"])(R,w,$,!1,null,"4b3c3ccc",null)),A=M.exports,T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("以下情况，务必添加注释")]),n("p",[n("span",{staticClass:"number"},[t._v("1.")]),t._v("公共组件使用说明")]),n("p",[n("span",{staticClass:"number"},[t._v("2.")]),t._v("各组件中重要函数或者类说明")]),n("p",[n("span",{staticClass:"number"},[t._v("3.")]),t._v("复杂的业务逻辑处理说明")]),n("p",[n("span",{staticClass:"number"},[t._v("4.")]),t._v("特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的hack、使用了某种算法或思路等需要进行注释描述")]),n("p",[n("span",{staticClass:"number"},[t._v("5.")]),t._v("注释块必须以/**（至少两个星号）开头**/；")]),n("p",[n("span",{staticClass:"number"},[t._v("6.")]),t._v("单行注释使用//；")]),n("p",[t._v("•\t单行注释")]),n("p",[t._v("•\t   普通方法一般使用单行注释// 来说明该方法主要作用")]),n("p",[t._v("•\t多行注释")]),n("p",[t._v("•\t   组件使用说明，和调用说明")])])}],I={name:"notes",components:{},filter:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},J=I,X=Object(i["a"])(J,T,F,!1,null,"1ec29d1e",null),K=X.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code"},[n("h4",{staticClass:"weight"},[t._v("尽量按照ESLint格式要求编写代码")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("1.")]),t._v("变量与常量，方法等命名应尽可能带有语义")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("2.")]),t._v("使用ES6风格编码源码")]),n("p",[t._v("定义变量使用let ,定义常量使用const")]),n("p",[t._v("使用export ，import 模块化")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("3.")]),t._v("组件 props 原子化")]),n("p",[t._v("提供默认值")]),n("p",[t._v("使用 type 属性校验类型")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("4.")]),t._v("避免 this.$parent")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("5.")]),t._v("谨慎使用 this.$refs")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("6.")]),t._v("无需将 this 赋值给 component 变量")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("7.")]),t._v("调试信息console.log() debugger 使用完及时删除")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("8.")]),t._v(" 避免 v-if 和 v-for 用在一起必要")]),n("p",[t._v("永远不要把 v-if 和 v-for 同时用在同一个元素上。")]),n("p",[t._v("一般我们在两种常见的情况下会倾向于这样做：")]),n("p",[t._v('为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。')]),n("p",[t._v('为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。')]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("9.")]),t._v(" 为 v-for 设置键值必要")]),n("p",[t._v("总是用 key 配合 v-for。")]),n("p",[t._v("在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。")])])}],z={name:"codes",components:{},filter:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},B=z,D=(n("cfac"),Object(i["a"])(B,L,q,!1,null,"b62c327e",null)),G=D.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cooperation"},[n("div",{staticClass:"work_process"},[n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("1.")]),t._v("评审阶段：")]),n("p",[t._v("产品召集前后端进行需求评审，前后端各自捋清楚自己的业务量以及联调之间工作量，从而进行开发时间评估。")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("2.")]),t._v("开发准备阶段：")]),n("p",[t._v("前后端一起商量需求中需要联调的部分，进行接口的口头协议交流。")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("3.")]),t._v("接口定义阶段：")]),n("p",[t._v("前后端中的一方根据之前的口头协议拟定出一份详细的接口，并书写API文档，完成后由另一方确认。有疑问的地方重新商量直至双方都没有问题。注意：第一份确认并书写好API的接口基本不会大改。")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("4.")]),t._v("开发阶段：")]),n("p",[t._v("双方根据协商出来的接口为基础进行开发，如在开发过程中发现需要新增或删除一些字段，重复步骤3。注意：前端在开发过程中记得跟进接口，mock数据进行本地测试。")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("5.")]),t._v("联调阶段：")]),n("p",[t._v("双方独自的工作完成，开始前后端联调，如在联调过程发现有疑问，重复步骤3，直至联调完成。")]),n("p",{staticClass:"line-title"},[n("span",{staticClass:"number"},[t._v("6.")]),t._v("提测阶段：")]),n("p",[t._v("将完成的需求提给测试人员，让其对该需求进行测试，如发现问题，及时通知开发并让其修改，直至需求没有bug。")])]),n("div",{staticClass:"restful"},[n("p",[t._v("后端工作人与前端工作人员协商基本数据的类型，结构后需要制作接口文档")]),n("p",[t._v("内容包括但不限于: 方法、uri、请求参数、返回参数、编码方式")]),n("p",[t._v("可推荐采用Spring,swagger")]),n("p",{staticClass:"line-title"},[t._v("参考文档：")]),n("p",[n("a",{attrs:{href:"http://editor.swagger.io/",target:"_blank"}},[t._v("http://editor.swagger.io/")])])])])}],Q={name:"cooperation",components:{},filter:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},activited:function(){},update:function(){},beforeRouteUpdate:function(){},methods:{}},V=Q,W=(n("0344"),Object(i["a"])(V,H,N,!1,null,"ff3c6710",null)),Y=W.exports;a["a"].use(l["a"]);var Z=new l["a"]({mode:"history",base:"/dofineStandard/",routes:[{path:"/",name:"主页",component:y,redirect:"/component_standard",children:[{path:"/component_standard",name:"组件化开发",component:A,meta:{index:1}},{path:"/notes",name:"注释规范",component:K,meta:{index:2}},{path:"/codes",name:"编码规范",component:G,meta:{index:3}},{path:"/cooperation",name:"与后端协作说明",component:Y,meta:{index:4}}]}]}),tt=n("2f62");a["a"].use(tt["a"]);var et=new tt["a"].Store({state:{},mutations:{},actions:{}}),nt=(n("e810"),n("c825")),at=(n("42be"),n("bc5d")),st=(n("c69c"),n("5358")),ct=(n("e820"),n("2e14"));a["a"].use(ct["a"]),a["a"].use(st["a"]),a["a"].use(at["a"]),a["a"].use(nt["a"]);n("4ee2");a["a"].config.productionTip=!1,new a["a"]({router:Z,store:et,render:function(t){return t(u)}}).$mount("#app")},"5b06":function(t,e,n){},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var a=n("5c48"),s=n.n(a);s.a},"959a":function(t,e,n){},a2b9:function(t,e,n){"use strict";var a=n("959a"),s=n.n(a);s.a},ad2b:function(t,e,n){"use strict";var a=n("e39b"),s=n.n(a);s.a},cfac:function(t,e,n){"use strict";var a=n("0324"),s=n.n(a);s.a},cfbb:function(t,e,n){},e39b:function(t,e,n){},f781:function(t,e,n){"use strict";var a=n("5b06"),s=n.n(a);s.a},fd55:function(t,e,n){"use strict";var a=n("cfbb"),s=n.n(a);s.a}});
//# sourceMappingURL=app.ef59fa15.js.map