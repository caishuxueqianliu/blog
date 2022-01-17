---
title: Class、原型、原型链
date: 2019-12-15
tags:
 - js
categories:
 -  js
---
# Class、原型、原型链
## Class
::: tip 总结
| 关键字    | 类本身  | 类的方法 |    类的实例 |    子类  |  子类方法   |    子类的实例  | 
| ----     |   ---- |   ----  |    ----    |    ----  |    ----   |       ----    |
| static   |   +    |    -    |      -     |     +   |    -       |     -         | 
| public   |   -    |    +    |      +     |     -   |    +       |    +          |  
| private  |   -    |    +    |      -     |     -   |    -       |    -          | 
| protected|   -    |    +    |      -     |     -   |    +       |    -          | 
 ::: 
``` ts
class Parent {
    protected name
    private age
    constructor(name,age){
      this.age = age
      this.name = name
      
    }
    static log(){
      console.log('我是静态方法，')
    }
    say(){
      console.log(this.age , this.name)
    }
  }
  Parent.prototype.sleep = function(){
    console.log(456)
  }
  console.log(Parent.prototype)
  Parent.prototype.sleep()
  // Parent.prototype.say()
  console.log(Parent)

  let p1 = new Parent(99,'liuhao')
  console.log(typeof(Parent))
  console.log(typeof(p1))
  console.log(p1)
  p1.say()
  Parent.log()
  console.log(p1.name)

```
## 原型、原型链
::: tip 说明
Fn构造函数或者Class上存在prototype(显式原型),  
new出来的是实例对象上存在__proto__(隐式原型),    
调用一个对象上的方法时，首先看本身有没有，如果没有就去__proto__上去找，即Class的prototype上找,  
如果还没有就去Class的prototype上的__proto__中去找，依次类推,即原型链。
:::

