---
title: 页面通信总结
date: 2019-12-15
tags:
 - wx
categories:
 -  wx
---
# 页面通信总结
## 一、全局变量
::: tip 用法
在app.js中定义
:::
``` js
App({
  onLaunch() {
 
  },

  globalData: {
    userInfo: {name:"liuhao"}
  }

})

```
::: tip 用法
在page中使用
:::
``` js
app.golbalData.userInfo = {name:'test'} // set
const data = app.golbalData.userInfo // get
})

```
## 二、storeage
::: tip 用法
本地永久存储
:::
``` js
 // 推荐使用
 wx.setStorageSync('key', 'value')   // set
 const data = wx.getStorageSync('key') // get

 ```
## 三、getCurrentPages

::: tip 用法
获取其他页面的数据
:::
``` js

// get 
// 获取上一页传来的数据
   var pages = getCurrentPages();
   var prePage = pages[pages.length - 2];
  //    prePage.setData({
  //         ...
  //    })

```
## 四、路由传参
::: tip 用法
当前页面
:::
``` js

wx.navigateTo({
	url:'/pages/index/index?id=1'
})


```

::: tip 用法
跳转页面
:::
``` js
onLoad(options){
	const id = options.id
}

```






