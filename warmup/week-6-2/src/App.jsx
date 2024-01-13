import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function (response) {
//         setTodos(response.data.todos)
//       })
//   }, []);

//   // useEffect(() => {
//   //   if (count == 5) {
//   //     console.log("Hey");
//   //   }
//   // }, [count])

//   return (
//     <>
//       {todos.map(todo => <Todo title={todo.title} description={todo.description}></Todo>)}
//     </>
//   )
// }

// function Todo({ title, description }) {
//   return <div>
//     {title}
//     {description}
//   </div>
// }

function App() {
  const [selectedId, setSelectedId] = useState([1]);
  return <div>
    <button onClick={function () {
      setSelectedId(1)
    }}>1</button>
    <button onClick={function () {
      setSelectedId(2)
    }}>2</button>
    <button onClick={function () {
      setSelectedId(3)
    }}>3</button>
    <button onClick={function () {
      setSelectedId(4)
    }}>4</button>
    <Todo id={selectedId}></Todo>
  </div>
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        setTodo(response.data.todo);

      })
  }, [id])

  return <div>
    Id:{id}

    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
