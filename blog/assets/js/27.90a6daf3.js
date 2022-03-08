(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{694:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"代理转发和重定向配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理转发和重定向配置"}},[s._v("#")]),s._v(" 代理转发和重定向配置")]),s._v(" "),t("h2",{attrs:{id:"代理转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理转发"}},[s._v("#")]),s._v(" 代理转发")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("nginx配置")]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("location /api/ {\n    \trewrite  ^.+api/?(.*)$ /$1 break;\n        proxy_pass  http://iosaudit.xuegaogame.com/; \n    }\n")])])])]),t("h2",{attrs:{id:"重定向配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重定向配置"}},[s._v("#")]),s._v(" 重定向配置")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("前端")]),t("p",[s._v("1.打包路径  // 以二级为例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// vue.config  \nmodule.exports = {  \n  publicPath:'/autoSign'  \n} \n// vite.config  \nexport default defineConfig({  \n  base:\"/audioServer/\"  \n} \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("1.路由路径 // 以二级为例")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// vue router/index.js \nconst router = new VueRouter({  \n  mode: \'history\',  \n  base: \'/autoSign\',  \n  routes  \n});  \n// react \n\x3c!-- <Router basename="/audioServer">  \n                <Switch>  \n                    <Route path="/login" component={Login}/>  \n                    <Route path="/" component={Layout}/>  \n                </Switch>  \n            </Router>  \n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"},[s._v("nginx配置")]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("// 一级\n# location / {\n# try_files $uri $uri/ /index.html;\n# }\n// 二级\nlocation /audioServer {\nroot /www/wwwroot/www.liuhao.link/;\ntry_files $uri   $uri/  /audioServer/index.html; \n  }\n")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);