---
title: vue3生命周期、watch，computed
date: 2021-07-05
tags:
 - vue3
categories:
 -  vue3
---
## 生命周期
::: tip 对比vue2
beforeCreate()		 -> 使用	steup()	//	入口函数      
created()			 -> 使用	steup() //	入口函数  
beforeMount()		 ->使用	onBeforeMount()       // 虚拟dom生成完  
mounted()			 ->使用	onMounted()           // 真实dom挂载，页面渲染完成  
beforeUpdate()		 ->使用	onBeforeUpdate()      //  页面重新渲染之前触发  
updated()			 ->使用	onUpdated()           //  页面重新渲染之后触发  
beforeDestroy()		 ->使用	onBeforeUnmount()     // 销毁前执行,一般在这里善后:清除计时器等  
destroyed()			 ->使用	onUnmounted()         // 销毁后 （Dom元素存在，只是不再受vue控制）,卸载watcher，事件监听，子组件  
errorCaptured()		 ->使用	onErrorCaptured()     // 错误捕获
``` ts
setup() {
    onBeforeMount(() => {
      // 载入前（完成了data和el数据初始化），但是页面中的内容还是vue中的占位符，
	  // data中的message信息没有被挂在到Bom节点中，在这里可以在渲染前最后一次更改数据的机会，不会触发其他的钩子函数，一般可以在这里做初始数据的获取
    })
	onMounted(() => {
	  // 载入后html已经渲染(ajax请求可以放在这个函数中)
	})
	onBeforeUpdate(() => {
	  // 更新前状态（view层的数据变化前，不是data中的数据改变前），重新渲染之前触发，
	  // 然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染
	})
	onUpdated(() => {
	  // 数据已经更改完成，dom也重新render完成
	})
	onBeforeUnmount(() => {
	  // 销毁前执行,一般在这里善后:清除计时器、清除非指令绑定的事件等等…’)
	})
	onUnmounted(() => {
	  // 销毁后 （Dom元素存在，只是不再受vue控制）,卸载watcher，事件监听，子组件
	})
	onErrorCaptured(() => {
	  // 错误捕获
	})
  }
  ```
:::
## watch、computed
::: tip 使用

``` vue
<template>
      {{num}}
      <button @click='addNum()'>add</button>
      {{computedTest}}
</template>
```

``` ts
import { defineComponent,computed,watch,onMounted,ref } from 'vue'
export default defineComponent({

setup(){
  let num = ref(2)
  let computedTest = computed(()=>num.value * 2 )
  watch(num, (newValue, oldValue) => {
    console.log('The new num value is: ' + num.value)
  })
  const addNum = ()=>{
    num.value++
  }
  return {addNum,num,computedTest}
}
})
```
:::