---
title: ESModule 和 CommonJS的区别
date: 2022-01-15
tags:
 - js
categories:
 -  js
---
# ESModule 和 CommonJS的区别

## 区别一
::: tip 加载方式不同
  ESModule：编译时加载
  CommonJS: 运行时加载
  因此可以在 require 某个模块时 加上条件判断
  ``` js
    if (type === 1) {
     const math = require('./math')
    }

    // 报错，错误类似于
    // 'import' and 'export' may only appear at the top level
    if (type === 1) {
     import math from './math'
    }

  ```
:::


## 区别二
::: tip 加载内容区别
  ESModule：可以加载部分内容(对象中的某个熟悉)
  CommonJS: 只能加载整个模块对象
  ``` js
    import { xx } from 'xxx'

    const xx = require('xxx')
  ```
:::

## 区别三
::: tip 输出不同
  ESModule：输出的是值的引用
  CommonJS: 输出的是值的拷贝
  ``` js
    export default xxx
    export const xx = ()=>{}

    modules.export = xxx
  ```
:::


