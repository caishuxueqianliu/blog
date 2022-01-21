---
title: vue3和vue2的双向绑定对比
date: 2021-12-01
tags:
 - vue3
categories:
 -  vue3
---
# vue3和vue2的双向绑定对比
## vue2双向绑定原理
::: tip Object.defineProperty() 
通过Object.defineProperty()来劫持对象属性的get set操作
在数据变动时通过发布订阅的方式，处罚监听回调
缺点是只能监听某个属性
:::
## vue2双向绑定原理
::: tip Object.defineProperty() 
通过ES6的proxy对象来劫持对象属性的get set操作，
优点是可以检测到数组内部数据的变化
:::