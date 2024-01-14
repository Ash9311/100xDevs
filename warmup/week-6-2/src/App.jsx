import { useEffect, useMemo, useState } from 'react'
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
    <br />
    <hr />
    <App2></App2>
  </div>
}

function App2() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [finalValue, setFinalValue] = useState(0);

  useEffect(() => {
    let count = 0;
    for (let i = 1; i <= inputValue; i++) {
      count = count + i; //sum of all num till n
    }
    setFinalValue(count);
  }, [inputValue]);

  // let count = useMemo(() => { //little optimization
  //   let count = 0;
  //   for (let i = 1; i <= inputValue; i++) {
  //     count = count + i; //sum of all num till n
  //   }
  //   return count;
  // }, [inputValue]);

  return <div>
    <input onChange={function (e) { setInputValue(e.target.value) }} placeholder='Find sum from 1 to n' type="text" />
    <br />
    Sum from 1 to {inputValue} is {finalValue}
    <br />
    <button onClick={() => { setCounter(counter + 1) }}>Counter({counter})</button>
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
    Id:{todo.id}

    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;
