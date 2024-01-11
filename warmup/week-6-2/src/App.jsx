import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  userEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(function (response) {
        setTodos(response.data.todos)
      })
  }, []);
  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
    </>
  )
}

function Todo({ title, description }) {
  return <div>
    {title}
    {description}
  </div>
}

export default App
