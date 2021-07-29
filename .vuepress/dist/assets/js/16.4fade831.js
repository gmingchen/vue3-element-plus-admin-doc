(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{366:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"路由和侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由和侧边栏"}},[t._v("#")]),t._v(" 路由和侧边栏")]),t._v(" "),a("p",[t._v("路由和侧边栏是组织起一个后台应用的关键。")]),t._v(" "),a("p",[t._v("本项目的所有路由菜单侧边栏和路由是绑定在一起的，是维护数据库中的，所以你知道在菜单模块中直接添加相应的模块菜单，侧边栏就能动态的生成。大大减轻了手动重复编辑侧边栏的工作量，这样就需要在配置路由的时候遵循一些约定的规则。\n"),a("img",{attrs:{src:"/images/menu.png",alt:""}}),a("img",{attrs:{src:"/images/menu-add.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("先了解一下本项目配置路由时提供了哪些配置项。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("meta "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由ID 类型不限 但是必须唯一 ")]),t._v("\n  title_cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由中文名称 会显示在侧边栏和标签栏以及浏览器页签")]),t._v("\n  title_en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路由英文名称 如果不是用国际化可以忽略")]),t._v("\n  isTab"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示在标签栏")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型 0：目录 1：菜单 2：按钮 可以忽略 这边都是1\t")]),t._v("\n  isDynamic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否是动态路由")]),t._v("\n  keepAlive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否缓存路由")]),t._v("\n  multiple"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签栏是否可以多开 例如不同ID的详情页")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("component")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/views/modules/demo/index.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title_cn"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title_en"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isTab"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    isDynamic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    keepAlive"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    multiple"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由"}},[t._v("#")]),t._v(" 路由")]),t._v(" "),a("p",[t._v("这里的路由分为两种，"),a("code",[t._v("globalRoutes")]),t._v(" 和 "),a("code",[t._v("dynamicRoutes")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("globalRoutes")]),t._v("：代表那些不需要动态判断权限的路由，如登录页、404、401等通用页面。")]),t._v(" "),a("p",[a("strong",[t._v("dynamicRoutes")]),t._v("：代表那些需求动态判断权限并通过 "),a("code",[t._v("addRoute")]),t._v(" 动态添加的页面。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("vue-router4")]),t._v(" 中移除了 "),a("code",[t._v("addRoutes")]),t._v("。所以这边是直接添加的父级路由。\n还要注意的是 "),a("code",[t._v("vue-router4")]),t._v(" 中移除了 "),a("code",[t._v("path:'*'")]),t._v(" "),a("strong",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRoute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/:pathMatch(.*)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'401'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"侧边栏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏"}},[t._v("#")]),t._v(" 侧边栏")]),t._v(" "),a("p",[t._v("本项目侧边栏主要基于 "),a("code",[t._v("element-plus")]),t._v(" 的 "),a("code",[t._v("el-menu")]),t._v(" 改造。")]),t._v(" "),a("p",[t._v("侧边栏是通过请求接口、注册路由，动态生成的，而且还需要支持路由无限嵌套，所以这里还使用到了递归组件。")]),t._v(" "),a("p",[t._v("一般侧边栏有两种形式即："),a("code",[t._v("el-submenu")]),t._v("、"),a("code",[t._v("el-menu-item")]),t._v(",。 一个是嵌套子菜单，另一个则是直接一个链接。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/menu-example.png",alt:""}}),t._v("\n在 "),a("code",[t._v("Sidebar")]),t._v(" 中已经做了判断，当你一个路由下面的 children 的路由 "),a("code",[t._v(">1")]),t._v(" 个时，自动会变成嵌套的模式。如果子路由正好等于一个就会默认将子路由作为根路由显示在侧边栏中。")]),t._v(" "),a("h2",{attrs:{id:"侧边栏多级目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏多级目录"}},[t._v("#")]),t._v(" 侧边栏多级目录")]),t._v(" "),a("p",[t._v("如果路由是多级目录，只需要在菜单模块添加多级目录即可实现多层嵌套菜单。\n"),a("img",{attrs:{src:"/images/menu-add.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"侧边栏链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#侧边栏链接"}},[t._v("#")]),t._v(" 侧边栏链接")]),t._v(" "),a("p",[t._v("你也可以在侧边栏中配置一个链接，只要你在菜单模块 "),a("code",[t._v("URL")]),t._v(" 填入合法的链接即可在项目里面 "),a("code",[t._v("main")]),t._v(" 主要内容部分显示链接内容。主要是通过项目中 "),a("code",[t._v("iframe")]),t._v(" 组件实现。\n"),a("img",{attrs:{src:"/images/api.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);