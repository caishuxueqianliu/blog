---
title: 小程序mixins使用
date: 2021-7-15
tags:
 - mixins
categories:
 -  wx
---
# 小程序mixins使用
## index.js
``` js
// 保存原生的 Page 函数
const originPage = Page
// 定义小程序内置的属性/方法
const originProperties = ['data', 'properties', 'options']
const originMethods = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onTabItemTap']

Page = (options) => {
  const mixins = options.mixins
  // mixins 必须为数组
  if (Array.isArray(mixins)) {
    delete options.mixins
    // mixins 注入并执行相应逻辑
    options = merge(mixins, options)
  }
  // 释放原生 Page 函数
  originPage(options)
}



function merge (mixins, options) {
  mixins.forEach((mixin) => {
    if (Object.prototype.toString.call(mixin) !== '[object Object]') {
      throw new Error('mixin 类型必须为对象！')
    }
    // 遍历 mixin 里面的所有属性
    for (let [key, value] of Object.entries(mixin)) {
      if (originProperties.includes(key)) {
        // 内置对象属性混入
        options[key] = { ...value, ...options[key] }
      } else if (originMethods.includes(key)) {
        // 内置方法属性混入，优先执行混入的部分
        const originFunc = options[key]
        options[key] = function (...args) {
          value.call(this, ...args)
          return originFunc && originFunc.call(this, ...args)
        }
      } else {
        // 自定义方法混入
        options = { ...mixin, ...options }
      }
    }
  })
  return options
}
```
::: tips 引入
在小程序的 app.js 里引入 mixins.js
在小程序的 app.js 里引入 mixins.js
``` js
require('./mixins/index.js')
```
:::
## 页面引入mixins
::: tip 说明
写一个公共数据方法的commonMixin.js
:::
``` js
åconst api = require('../api/index')
const commonMixin = {
  data: { 
    datalist: [],
    pagenum: 1, //初始页默认值为1
    total:0,
    isLoadingStatus:0, // 0.什么都不显示 1.加载 2.没有更多
   },
  onShow () {
  },
  onHide(){
    clearTimeout(this.timer);
  },
  // 打电话
  customerService(){
    wx.makePhoneCall({
      phoneNumber: '025-52214192' //仅为示例，并非真实的电话号码
    })
   },
        // 获取列表数据
        getCommonList(pagenum,apiName,extend){
    
          let data ={  
                "pageSize": "10",
                "pageNo": pagenum || 1
          }
          Object.assign(data,extend)
          api[apiName](data).then(res=>{
              if(res.code == 0){
                this.setData({
                  isLoadingStatus:0
                })
                  if(data.pageNo !=1){
                  const arr = this.data.datalist
                  const newArr = arr.concat(res.data.records)
                  this.setData({
                    datalist:newArr,
                    total:res.data.total
                  })
                }else{

                    this.setData({
                        datalist:res.data.records,
                        total:res.data.total,
                        pagenum:1
                      })
                }
              }
          })
      },
      onReachBottomList(apiName,extend) { //触底开始下一页
        this.setData({
          isLoadingStatus:1
        })
       this.timer = setTimeout(()=>{
        if(this.data.total == this.data.datalist.length){
          this.setData({
            isLoadingStatus:2
          })
            return
        }
        var that=this;
        var pagenum = this.data.pagenum + 1; //获取当前页数并+1
        that.setData({
          pagenum, //更新当前页数
        })
    
 
          that.getCommonList(pagenum,apiName,extend);//重新调用请求获取下一页数据
  
         },1000)
       
      }
  }
 module.exports = commonMixin
 ```
::: tip 说明
其他页面引入,就可以直接使用commonMixin里的数据和方法了
:::
``` js
const commonMixin = require('../../../../mixins/commonMixin.js')
page({
    mixins:[commonMixin]
})

```
::: warning 注意
生命周期属性，会优先执行来自 Mixins 当中的，后执行来自组件当中的。  
对象类型属性，来自 Mixins 和来自组件中的会共存。
:::

