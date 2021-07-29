(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{370:function(t,s,a){"use strict";a.r(s);var e=a(44),_=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"发布流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布流程"}},[t._v("#")]),t._v(" 发布流程")]),t._v(" "),a("h2",{attrs:{id:"构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),a("p",[t._v("当项目开发完毕，只需要运行一行命令就可以打包你的应用：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包开发环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包测试环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:test\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包正式环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod\n")])])]),a("p",[t._v("构建打包成功之后，会在根目录生成 "),a("code",[t._v("dist")]),t._v(" 文件夹，里面就是构建打包好的文件，通常是 "),a("code",[t._v("***.js")]),t._v("、"),a("code",[t._v("***.css")]),t._v("、"),a("code",[t._v("index.html")]),t._v(" 等静态文件。")]),t._v(" "),a("p",[t._v("如果需要自定义构建，则需要在 "),a("code",[t._v("vue.config.js")]),t._v(" 中进行配置。")]),t._v(" "),a("h2",{attrs:{id:"环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),a("p",[t._v("所有环境变量的配置都在 "),a("code",[t._v(".env.xxx")]),t._v(" 文件中。")]),t._v(" "),a("p",[t._v("它们都会通过 "),a("code",[t._v("webpack.DefinePlugin")]),t._v(" 插件注入到全局。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("环境变量必须以 "),a("code",[t._v("VUE_APP_")]),t._v(" 为开头。如: "),a("code",[t._v("VUE_APP_BASE_API")]),t._v("、"),a("code",[t._v("VUE_APP_PORT")]),t._v("。")]),t._v(" "),a("p",[t._v("代码可以通过一下方式获取：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VUE_APP_xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"构建文件体积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建文件体积"}},[t._v("#")]),t._v(" 构建文件体积")]),t._v(" "),a("p",[t._v("项目中已经配置了 "),a("code",[t._v("webpack-bundle-analyzer")]),t._v("。当构建完成之后会自动打开 "),a("code",[t._v("http://localhost:9999")]),t._v(" 页面看到具体的体积分布。")]),t._v(" "),a("p",[t._v("如果需要更改相关配置，则需要在 "),a("code",[t._v("vue.config.js")]),t._v(" 中进行配置。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/analysis.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),a("p",[t._v("只需要将最终生成的静态文件，也就是通常情况下 "),a("code",[t._v("dist")]),t._v(" 文件夹的静态文件发布到你的 "),a("code",[t._v("cdn")]),t._v(" 或者静态服务器即可。")])])}),[],!1,null,null,null);s.default=_.exports}}]);