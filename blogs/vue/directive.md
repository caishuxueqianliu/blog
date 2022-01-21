---
title: vue2自定义指令
date: 2020-12-15
tags:
 - vue
categories:
 -  vue
---
# vue2自定义指令
## 全局自定义指令
::: tip Vue.directive
``` js
//自定义全局的指令
Vue.directive('focus', {
     //第一个参数永远是el，表示原生的js对象
     bind: function (el) { //当指令绑定到元素上的时候，会立即执行bind函数，只执行一次，此时元素还没有插入到DOM中,focus聚焦此时不会生效
         el.focus()
     },
     inserted: function (el) { //当元素插入到DOM中的时候，会执行inserted函数，只执行一次
         el.focus()
     },
     updated: function () { //当VNode的时候，会执行updated函数，可能出发多次
     }
 });

```
:::
## 私有自定义指令
::: tip directives
代码如下
:::
``` js
directives: {
    'fontweight': {
        bind: function (el, bingding) {
            el.style.fontWeight = bingding.value;
        }
    },
    'fontsize': function (el, bingding) { //这个function等同于把代码写到了bind和update中去
        el.style.fontSize = parseInt(bingding.value) + 'px';
    }
}

```
:::