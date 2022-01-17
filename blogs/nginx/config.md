---
title: 代理转发和重定向配置
date: 2019-12-15
tags:
 - nginx
categories:
 -  nginx
---
# 代理转发和重定向配置
## 代理转发
::: tip nginx配置
  	location /api/ {
        	rewrite  ^.+api/?(.*)$ /$1 break;
            proxy_pass  http://iosaudit.xuegaogame.com/; 
        }
:::
## 重定向配置
::: tip 前端
1.打包路径  // 以二级为例  
```
// vue.config  
module.exports = {  
  publicPath:'/autoSign'  
} 
// vite.config  
export default defineConfig({  
  base:"/audioServer/"  
} 
```
1.路由路径 // 以二级为例  
``` 
// vue router/index.js 
const router = new VueRouter({  
  mode: 'history',  
  base: '/autoSign',  
  routes  
});  
// react 
<!-- <Router basename="/audioServer">  
                <Switch>  
                    <Route path="/login" component={Login}/>  
                    <Route path="/" component={Layout}/>  
                </Switch>  
            </Router>  
``` 
:::  
::: tip nginx配置
    // 一级
    # location / {
    # try_files $uri $uri/ /index.html;
    # }
    // 二级
    location /audioServer {
    root /www/wwwroot/www.liuhao.link/;
    try_files $uri   $uri/  /audioServer/index.html; 
      }
:::
