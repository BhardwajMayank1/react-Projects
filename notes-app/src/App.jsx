  import React, { useState,useEffect } from 'react'

  const App = () => {

    

    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])


useEffect(() => {
  const saved = localStorage.getItem('Todos')
  if (saved) setTodo(JSON.parse(saved))
}, []) // Empty dependency array

// Save to localStorage whenever todo changes
useEffect(() => {
  localStorage.setItem('Todos', JSON.stringify(todo))
}, [todo])


    const submitHandler = (e) => {
      e.preventDefault()

      const copyTask =[...todo];

    copyTask.push({task});
    setTodo(copyTask) 
    console.log(copyTask )


      setTask('')
    
    }
    const deleteBtn=(idx)=>{
      const copyTask=[...todo]
      copyTask.splice(idx,1)
      setTodo(copyTask)
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button>Add</button>
        </form>

        <ul>
          {todo.map((elem, idx) => (
            <li key={idx}>{elem.task}
            <button 
            onClick={()=>{
              deleteBtn(idx)
            }}>Delete</button></li>
          
          ))}
        </ul>
      </div>
    )
  }

  export default App
