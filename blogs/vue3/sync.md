---
title: vue2和vue3的.sync用法
date: 2021-08-26
tags:
 - .sync
categories:
 -  vue3
---
# vue2和vue3的.sync用法
# 在vue2中使用
::: tip 初始写法
父组件
``` vue
<children :msg='this.msg' @updateMsgEvent='msg=$event'/>
```
子组件
``` js
this.$emit('updateMsgEvent',123)
```
:::
::: tip .sync写法
父组件
``` vue
<children :msg.sync='this.msg'/>
```
子组件
``` js
this.$emit('update:msg',123)
```
:::
# 在vue3中使用
::: tip 初始写法
父组件
``` vue
<children :msg='this.msg' @updateMsgEvent='msg=$event'/>
```
子组件
``` js
setup(props,context){
    context.emit('updateMsgEvent',123)
}
```
:::
::: tip v-model写法
父组件
``` vue
<children v-model:msg='this.msg'/>
```
子组件
``` js
setup(props,context){
    context.emit('update:msg',123)
}
```
:::