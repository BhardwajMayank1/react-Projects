import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [todo, setTodo] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const allTodo = [...todo]
    allTodo.push({ title })
    setTodo(allTodo)

    console.log(allTodo)

    setTitle('')
  }

  const deleteTodo=(index)=>{
const allTodo=[...todo]
allTodo.splice(index,1)
setTodo(allTodo)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <button>Add Notes</button>

      </form>

      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item.title}
          <button onClick={()=>{
            deleteTodo(index)
          }}>Delete</button></li>
          
        ))}
      </ul>
    </div>
  )
}

export default App
