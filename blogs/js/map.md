---
title: Map&Set
date: 2021-09-15
tags:
 - js
categories:
 -  js
---
# Map&Set
## new Map()
::: tip 说明
Map是一组键值对的结构，具有极快的查找速度。键值唯一   
// clear    
//     从映射中移除所有元素。  
// delete   
//     从映射中移除指定的元素。   
// forEach   
//     对映射中的每个元素执行指定操作。   
// get    
//     返回映射中的指定元素。  
// has   
//     如果映射包含指定元素，则返回 true。  
// toString   
//     返回映射的字符串表示形式。  
// valueOf   
//     返回指定对象的原始值。  
:::
``` js
let map = new Map([["a",1],["b",2]])
map.set('c',3)
console.log(map.get("a"))
map.delete('b')
console.log(map)
console.log(...map)
```
## new Set()
::: tip 说明
Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。
:::
``` js
let set = new Set([1,2,3])
set.add(4,'4')
console.log(set)
set.delete(4)
console.log(set)
console.log([...set])


let arr = [1,2,3]
console.log([...arr,4,5,6])
let obj  ={a:1,b:2}
console.log({...obj})
console.log({...obj,c:3})
```