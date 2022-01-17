---
title: react-hooks
date: 2021-09-03
tags:
 - react
categories:
 -  react
---
# react-hooks
::: tip 说明
纯函数组件没有状态
纯函数组件没有生命周期
纯函数组件没有this
只能是纯函数
:::
## useState()
::: tip 说明
我们知道，纯函数组件没有状态，useState()用于为函数组件引入状态。
``` tsx
import React, {useState} from 'react'
const AddCount = () => {
  const [ count, setCount ] = useState(0)
  const addcount = () => {
    let newCount = count
    setCount(newCount+=1)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={addcount}>count++</button>
    </>
  )
}
export default AddCount


```
:::

## userContext()
::: tip 说明
useContext():共享状态钩子
该钩子的作用是，在组件之间共享状态
``` tsx
import React,{ useContext } from 'react'
const Ceshi = () => {
  const AppContext = React.createContext({})
  const A =() => {
    const { name } = useContext(AppContext)
    return (
        <p>我是A组件的名字{name}<span>我是A的子组件{name}</span></p>
    )
}
const B =() => {
  const { name } = useContext(AppContext)
  return (
      <p>我是B组件的名字{name}</p>
  )
}
  return (
    <AppContext.Provider value={{name: 'hook测试'}}>
    <A/>
    <B/>
    </AppContext.Provider>
  )
}
export default Ceshi


```
:::

## userReducer()
::: tip 说明
useReducer():Action钩子
我们知道，在使用React的过程中，如遇到状态管理，我们一般会用到Redux,而React本身是不提供状态管理的。而useReducer()为我们提供了状态管理。首先，关于redux我们都知道，其原理是我们通过用户在页面中发起action,从而通过reducer方法来改变state,从而实现页面和状态的通信。而Reducer的形式是(state, action) => newstate。类似，我们的useReducer()是这样的
它接受reducer函数和状态的初始值作为参数，返回一个数组，其中第一项为当前的状态值，第二项为发送action的dispatch函数。下面我们依然用来实现一个计数器。
和redux一样，我们是需要通过页面组件发起action来调用reducer方法，从而改变状态，达到改变页面UI的这样一个过程。所以我们会先写一个Reducer函数，然后通过useReducer()返回给我们的state和dispatch来驱动这个数据流。思路就是这样，下面我们上代码
``` tsx
import React,{useReducer} from 'react'

const AddCount = () => {
const reducer = (state, action) =>  {
 if(action.type === ''add){
  return {
  ...state,
  count: state.count +1,
  }
 }else {
   return state
  }
 }
const addcount = () => {
  dispatch({
    type: 'add'
  })
 }
const [state, dispatch] = useReducer(reducer, {count: 0})
return (
<>
<p>{state.count}</p>
<button onClick={addcount}>count++</button>
</>
)
}
export default AddCount


```
:::

## useEffect()
::: tip 说明
useEffect():副作用钩子
useEffect()接受两个参数，第一个参数是你要进行的异步操作，第二个参数是一个数组，用来给出Effect的依赖项。只要这个数组发生变化，useEffect()就会执行。当第二项省略不填时，useEffect()会在每次组件渲染时执行。这一点类似于类组件的componentDidMount。
``` tsx
useEffect(() => {},[array])
```
``` tsx
import React, { useState, useEffect } from 'react'
const AsyncPage = () => {
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(()=> {
      setLoading(false)
    },5000)
  })
return (
loading ? <p>Loading...</p>: <p>异步请求完成</p>
)
}

export default AsyncPage

```
``` tsx
import React, { useState, useEffect } from 'react'

const AsyncPage = ({name}) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return (
    <>
      {loading?<p>Loading...</p>:<p>{person.name}</p>}
    </>
  )
}

const PersonPage = () =>{
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage

```
:::

## 创建自己的Hooks
::: tip 说明
以上我们介绍了四种最常用的react提供给我们的默认React Hooks,有时候我们需要创建我们自己想要的Hooks,来满足更便捷的开发，在小编看来，无非就是根据业务场景对以上四种Hooks进行组装，从而得到满足自己需求的钩子。
比如，我们要将我们上面的代码功能封装成Hooks,代码如下
``` tsx
import React, { useState, useEffect } from 'react'

const usePerson = (name) => {
const [loading, setLoading] = useState(true)
const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setPerson({name})
    },2000)
  },[name])
  return [loading,person]
}

const AsyncPage = ({name}) => {
  const [loading, person] = usePerson(name)
    return (
      <>
        {loading?<p>Loading...</p>:<p>{person.name}</p>}
      </>
    )
  }

const PersonPage = () =>{
  const [state, setState]=useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state}/>
      <button onClick={() => {changeName('名字1')}}>名字1</button>
      <button onClick={() => {changeName('名字2')}}>名字2</button>
    </>
  )
}

export default PersonPage

```
上面代码中，我们将之前的例子封装成了自己的Hooks,便于共享。其中，我们定义usePerson()为我们的自定义Hooks,它接受一个字符串，返回一个数组，数组中包括两个数据的状态，之后我们在使用usePerson()时，会根据我们传入的参数不同而返回不同的状态，然后很简便的应用于我们的页面中。
:::