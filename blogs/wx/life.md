---
title: 小程序生命周期
date: 2019-12-15
tags:
 - lifeCycle
categories:
 -  wx
---
# 小程序生命周期
## app生命周期

``` js
App({
onLaunch: function () {
console.log(“App生命周期函数——onLaunch函数”);
},
onShow: function () {
console.log(“App生命周期函数——onShow函数”);
},
onHide: function () {
console.log(“App生命周期函数——onHide函数”);
},
onError: function (msg) {
console.log(“App生命周期函数——onError函数”);
}
})
```
::: tip 说明
运行:   
（1）程序启动时，会触发以下2个函数. 
第一执行onLauch函数——当小程序初始化完成时，会触发 onLaunch（全局只触发一次)  
第二执行onShow函数——当小程序启动，或从后台进入前台显示，会触发 onShow  

（2）当点击“后台”时，会触发以下函数  
onHide函数——当小程序从前台进入后台，会触发 onHide  
当点击“前台”时，就会再次触发onShow函数  
:::




## page生命周期
``` js
App({
onLoad: function () {
console.log(“page生命周期函数——onLoad函数”);
},
onShow: function () {
console.log(“page生命周期函数——onShow函数”);
},
onReady: function () {
console.log(“page生命周期函数——onReady函数”);
},
onHide: function () {
console.log(“page生命周期函数——onHide函数”);
}
})
```
::: tip 说明
onLoad: 页面加载  
一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。  

onShow: 页面显示. 
每次打开页面都会调用一次。  

onReady: 页面初次渲染完成  
一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。  
对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期  

onHide: 页面隐藏  
当navigateTo或底部tab切换时调用  

onUnload: 页面卸载  
当redirectTo或navigateBack的时候调用  
:::

## 组件生命周期
``` js
lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
```
::: tip 说明
created  
在组件实例刚刚被创建时执行	 

attached  
在组件实例进入页面节点树时执行	 

ready  
在组件在视图层布局完成后执行	

moved  
在组件实例被移动到节点树另一个位置时执行	 

detached  
在组件实例被从页面节点树移除时执行	

error(Object Error)  
每当组件方法抛出错误时执行  
:::




