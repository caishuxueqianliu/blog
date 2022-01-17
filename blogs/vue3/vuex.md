---
title: vuex4使用
date: 2021-07-02
tags:
 - vue3
categories:
 -  vue3
---
# vuex4使用
## main.ts配置
::: tip 配置
``` ts
import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建 store 容器实例.
const store = createStore({
    state: {
        count: 0,
        todos: [
          { id: 1, text: '...', done: true },
          { id: 2, text: '...', done: false }
        ]
      },
   getters:{
     doneTodos(state)  {
       return state.todos.filter(todo => todo.done)
     }

  },
  mutations: {
    increment (state,count1) {
      state.count = count1
    }
  },
  actions:{
    test(context,count1){
        context.commit('increment',count1)
      //  context.dispatch()
    }
  }
})
export default store
```
:::
## 在vue中使用
::: tip 使用
``` ts
<script lang="ts">
import { useStore } from 'vuex'
setup(){
   const store = useStore()
   console.log(store)
   console.log(store.state.count)// 0
   console.log(store.getters.doneTodos)
   store.dispatch('test',3) 
   console.log(store.state.count)//3 
   store.commit('increment',5) 
   console.log(store.state.count)//5
</script>
```
:::