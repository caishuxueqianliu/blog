---
title: ref,reactive,toRef,toRefs
date: 2021-07-13
tags:
 - vue3
categories:
 -  vue3
---
# ref,reactive,toRef,toRefs
# ref
::: tip ref
ref是对reactive的二次包装,一般用于传入基本数据类型(深拷贝)，
也可传入对象(浅拷贝)，数据改变会触发页面改变
:::
# reactive
::: tip reactive
reactive传入一个对象(浅拷贝)，数据改变会触发页面改变
:::
# toRef
::: tip toRef
toRef传入一个对象和对象的某个属性(浅拷贝)，数据改变不会触发页面改变
:::
# toRefs
::: tip toRefs
toRefs传入一个对象(浅拷贝)，数据改变不会触发页面改变
:::
``` js
<template>

原数据:{{refData.value}} <button type="button" @click="refAdd()">ref</button>响应式数据:{{refData1}}<br/>
原数据:{{refData.value}} <button type="button" @click="refAdd1()">ref1</button>响应式数据:{{refData2.value}}<br/>
原数据:{{reactiveData.value}} <button type="button" @click="reactiveAdd()">reactive</button>响应式数据: {{reactiveData1.value}}<br/>
原数据:{{toRefsData.value}} <button type="button" @click="toRefsAdd()">toRefs</button>响应式数据: {{toRefsData1.value.value}}<br/>
原数据:{{toRefData.value}} <button type="button" @click="toRefAdd()">toRef</button> 响应式数据:{{toRefData1}}<br/>

</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRef,toRefs } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    toRefsData:{
      type:Object
    },
     toRefData:{
      type:Object
    },
    refData:{
      type:Object
    },
     reactiveData:{
      type:Object
    },
  },
  setup: (props) => {  
  let refData1 = ref(props.refData.value)
  let refData2 = ref(props.refData)
  let toRefsData1 = toRefs(props.toRefsData)
  let reactiveData1 = reactive(props.reactiveData)
  let toRefData1 = toRef(props.toRefData,'value')
   function refAdd(){
      refData1.value++
      console.log(props.refData.value,refData1.value)// 1 2
   }
      function refAdd1(){
      refData2.value.value++
      console.log(props.refData.value,refData2.value.value)// 2 2
   }
      function toRefAdd(){
      toRefData1.value ++
       console.log(props.toRefData.value,toRefData1.value)// 2 2
  
   }
      function reactiveAdd(){
      reactiveData1.value++
       console.log(props.reactiveData.value,reactiveData1.value) // 2 2
   }
      function toRefsAdd(){
      toRefsData1.value.value++
       console.log(props.toRefsData.value,toRefsData1.value.value)// 2 2

   }
  return { refData1,refData2,toRefsData1 ,toRefData1,reactiveData1,refAdd,refAdd1,reactiveAdd,toRefAdd,toRefsAdd}
  }
})
</script>
```