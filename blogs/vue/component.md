---
title: 组件通信
date: 2019-12-15
tags:
 - components
categories:
 -  vue
---
# 组件通信
## 父向子传值
::: tip 说明
父组件代码
:::
``` html
<template>
    <test :msg="msg"/>
</template>
```
``` js
import test from "./components/test";
export default{
	data() {
            return {
              msg:"我是父组件的值"
            }
        }
}
```
::: tip 说明
子组件代码
:::
``` html
<template>
<div id="test">
         子组件收到的值==={{msg}}
    </div>
</template>
```
``` js
export default{
	props: {
          msg: {
            type: String,
            require: true
          }
}
```
::: warning 补充
父组件调用子组件方法
:::
``` html
//父组件中

<template>
    <div>
        <Button @click="handleClick">点击调用子组件方法</Button>
        <Child ref="child"/>
    </div>
</template>    

<script>
import Child from './child';

export default {
    methods: {
        handleClick() {
              this.$refs.child.sing();
        },
    },
}
</script>


//子组件中

<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  methods: {
    sing() {
      console.log('我是子组件的方法');
    },
  },
};
</script>

````
``` html
//父组件中

<template>
    <div>
        <Button @click="handleClick">点击调用子组件方法</Button>
        <Child ref="child"/>
    </div>
</template>    

<script>
import Child from './child';

export default {
    methods: {
        handleClick() {
              this.$refs.child.sing();
        },
    },
}
</script>


//子组件中

<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  methods: {
    sing() {
      console.log('我是子组件的方法');
    },
  },
};
</script>
```
## 子向父传值
::: tip 说明
父组件代码
:::
``` html
<template>
<test :msg="msg" @msg="this.msg1=$event"></test> // @msg="transmit"
     父组件收到的值==={{msg1}}
</template>
```
``` js
import test from "./components/test";
export default{
	 data() {
            return {
              msg:"我是父组件的值",
              mgs1:''
            }
        },
     methods:{
     	    transmit (msg) {
            	this.msg1= msg
          }
      }
}
```
::: tip 说明
子组件代码
:::
``` js
export default{
	data() {
            return {
              msg1: "我是子组件的值"
        }},
    mounted() {
          this.$emit('msg',this.msg1)
        }
```