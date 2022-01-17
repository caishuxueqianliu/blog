---
title: react组件通信（hooks）
date: 2021-09-02
tags:
 - react
categories:
 -  react
---
# react组件通信（hooks）
## 父传子 props 子传父调用子组件方法
::: tip 父组件
``` tsx
const Children = React.lazy(()=> import('./components/children'))

const Children = React.lazy(()=> import('./components/children'))
const App = (props: any) => {
  let [count, setCount] = useState(0)
  const addCount = () => {
    setCount(++count)
  }
  return (
      <div className="App">
          <React.Suspense
              fallback={
                  <div>loading...</div>
              }
          >
        <Children count={count} addCount={addCount}/>
          </React.Suspense>
        <button onClick={addCount}>父组件+1</button>
        {count}
      </div>
  )
}

```
::: 
::: tip 子组件
``` tsx
const Children = (props: any) => {
    useEffect(() => {
        console.log(props)
    })
    const changeCout = () => {
        console.log(props)
        props.addCount()
    }
    return (
        <div>
            <button onClick={props.addCount}>自组件+1</button>
            {props.count}
        </div>
    )
}

```
::: 


