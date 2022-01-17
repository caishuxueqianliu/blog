---
title: 组件运用及通信
date: 2019-12-15
tags:
 - components
categories:
 -  wx
---
# 组件运用及通信
## 组件运用

::: tip 用法
在子组件中配置
:::
``` json
  "component": true
```

``` js
 Component({
    options: {
        addGlobalClass: true // 使用 app.css
    },
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        data1: {
            type: String
        }
    },
    data: {

    },
    methods: {
        // 这里是一个自定义方法
        closeEvent(){
            const bool = false
           this.triggerEvent('closeEvent',bool )
       }
    }
})
```
::: tip 用法
父组件使用
:::
``` json
    "usingComponents": {
    "buyNow":"./components/buyNow/index",
  },

```
``` html
 <buyNow></buyNow>
```

## 组件通信
### 父传子
::: tip 用法
父组件使用
:::
``` js
data:{
	list:[{
		a:'1'
	}]
}
````
``` html
 <buyNow list="{{list}}"></buyNow>
```
::: tip 用法
子组件使用
:::
``` js
Component({
    properties: { 
  		list:{
  	 	 type:Array,
  	  	 observer: function (newVal, oldVal, changedPath) {
      // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串
      // 通常 newVal 就是新设置的数据， oldVal 是旧数据
   		 }
  		}
    }
  }); 
````
::: danger 踩坑
组件的 attached 和 created 中 打印不出接收的properties
可以采用 methods中 处理properties数据  父组件调用
:::
::: warning 补充
父组件调用子组件方法 （vue中 this.$refs.child.sing()）
小程序  使用    this.selectComponent("#getData").getData()
:::
### 子传父
::: tip 用法
子组件使用 类似vue 传递一个事件给父组件
:::
``` js
       closeEvent(){
            const bool = false
           this.triggerEvent('closeEvent',bool )
       }
````
::: tip 用法
父组件使用 类似vue 传递一个事件给父组件
:::
``` html
 <buyNow  bind:myEvent="getData"></buyNow>

```
``` js
   getData:function(e){
        this.setData({
            paramsShow:e.detail,
            rentShow:e.detail,
            buyShow:e.detail
        })
````
















