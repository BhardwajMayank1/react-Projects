import React, { useState } from 'react'

const App = () => {
  const[count,setCount]=useState(0)
  const[theme,setTheme]=useState('light')

  const increment=()=>{
    setCount(count+1)
  }

  const decrement=()=>{
    if(count>0){
      setCount(count-1)
    }

  }

  const reset=()=>{
 setCount(0)
  }

  const Theme=()=>{
    if(theme =='light'){
      setTheme('dark')
    }
  }


  return (
    <div>
      <h1>{count}</h1>
      <h2>{theme}</h2>

      <button onClick={()=>{
        increment()
      }}> Increment</button>

      <button onClick={()=>{
       decrement()
      }}>Decrement</button>

       <button onClick={()=>{
       reset()
      }}>Reset</button>

      <button onClick={()=>{
        Theme()
      }}>Change Theme</button>
    </div>
  )
}

export default App
