import React from 'react'
import { useState } from 'react'

const App = () => {

       const [title , setTitle]=useState('')
       const[todo,setTodo]=useState([]) 

  const submitHandler=(e)=>{
    e.preventDefault()

  const allTodo=[...todo]
  allTodo.push({title})
  setTodo(allTodo)

  setTitle('')
  }

  const deleteTodo=(idx)=>{
    const all =[...todo]
    all.splice(idx,1)
    setTodo(all)

  }

 

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter a Todo'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />

        <button>Add Todo</button>

      </form>
      <ul>
      {todo.map((elem,idx)=>(
        <li key={idx}>{elem.title } 
         <button onClick={(idx)=>{
          deleteTodo(idx)
        }}>delete</button></li>
       
      ))}
      </ul>
      
    </div>
  )
}

export default App
