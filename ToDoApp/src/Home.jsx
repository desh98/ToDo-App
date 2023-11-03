import React, { useState } from 'react'
import Create from './components/Create'

function Home() {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h1>To Do List</h1>
        <Create />
        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo => (
                <div>
                    {todo}
                </div>
            ))
        }
    </div>
    
  )
}

export default Home