---
title: vue-router4使用
date: 2021-07-01
tags:
 - vue3
categories:
 -  vue3
---
# vue-router4使用
## main.ts配置
::: tip 配置
``` ts
import { createApp } from 'vue'
import  App from './App.vue'
import  router  from './router/index'
import  store  from './store/index'
createApp(App).use(router).use(store).mount('#app')
```
:::
## router/index.ts配置
::: tip 配置
``` ts
/// createWebHashHistory 是hash模式就是访问链接带有#
// createWebHistory  是history模式
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
 
const LifeCycle = () => import("../views/lifeCycle.vue");
const Ref = () => import("../views/ref.vue");

const routes = [

  {
    path: "/lifeCycle",
    name: "LifeCycle",
    component: LifeCycle,
  },
  {
    path: "/ref/:id",
    name: "Ref",
    component: Ref,
  },
//   {
//     path: "/:pathMatch(.*)*", // 代替vue2的通配符path: "*",
//     name: "NotFound",
//     component: NotFound,
//   },
];
 
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


```
:::
## 在vue中使用
::: tip 使用
1.声明式（和vue2一样）
``` html
<template>
     <router-link to="/ref">Go to ref</router-link>
    <router-link to="/lifeCycle">Go to lifeCycle</router-link>
</template>
  <router-view></router-view>
```
2.编程式、query、params
``` ts
<script lang="ts">
import { useRoute, useRouter } from "vue-router";
setup(){
    const route = useRoute()  // vue2 的this.$router
    const router = useRouter() // vue2的this.$route
    const goToRef = ()=>{
     router.push({
                name:'Ref',
                params:{
                id:2
                }
               
            })
               console.log(route)
   }
     const goLifeCycle = ()=>{
     router.push({
                path:'/lifeCycle',
                  query:{
                     id:1
                 }
               
            })
               console.log(route)  
   }
}
</script>
```
:::
## 路由守卫
::: tip 使用
``` js
// 路由守卫
router.beforeEach((to, from) => {
  // ...
  // 返回 false 以取消导航
  return true
})
router.afterEach((to, from) => {
  })
  ```