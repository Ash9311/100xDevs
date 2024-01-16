import { useEffect, useMemo, useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

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

//-------------------------------------------------------------------------- 

// function App() {
//   const [selectedId, setSelectedId] = useState([1]);
//   return <div>
//     <div style={{ background: "black", color: 'white' }}>
//       Hi this is top bar
//     </div>
//     <button onClick={function () {
//       setSelectedId(1)
//     }}>1</button>
//     <button onClick={function () {
//       setSelectedId(2)
//     }}>2</button>
//     <button onClick={function () {
//       setSelectedId(3)
//     }}>3</button>
//     <button onClick={function () {
//       setSelectedId(4)
//     }}>4</button>
//     <Todo id={selectedId}></Todo>
//     <br />
//     <hr />
//     <App2></App2>

//     <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//         <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//         {/* suspense is to handle async calls */}
//       </Routes>

//     </BrowserRouter>
//   </div>
// }

// function Appbar() { //internal library of BrowserRouter is written such that it expects useNavigate declaration as a child
//   const navigate = useNavigate();
//   return (
//     <div>
//       {/* <button onClick={() => { window.location.href = "/" }}></button>
//   <button onClick={() => { window.location.href = "/dashboard" }}></button> */}
//       <button onClick={() => { navigate("/"); }}>Landing Page</button>
//       <button onClick={() => { navigate("/dashboard"); }}>Dashboard</button>
//     </div>
//   )
// }

// function App2() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);
//   const [finalValue, setFinalValue] = useState(0);

//   useEffect(() => {
//     let count = 0;
//     for (let i = 1; i <= inputValue; i++) {
//       count = count + i; //sum of all num till n
//     }
//     setFinalValue(count);
//   }, [inputValue]);

//   // let count = useMemo(() => { //little optimization
//   //   let count = 0;
//   //   for (let i = 1; i <= inputValue; i++) {
//   //     count = count + i; //sum of all num till n
//   //   }
//   //   return count;
//   // }, [inputValue]);

//   return <div>
//     <input onChange={function (e) { setInputValue(e.target.value) }} placeholder='Find sum from 1 to n' type="text" />
//     <br />
//     Sum from 1 to {inputValue} is {finalValue}
//     <br />
//     <button onClick={() => { setCounter(counter + 1) }}>Counter({counter})</button>
//   </div>
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(response => {
//         setTodo(response.data.todo);

//       })
//   }, [id])

//   return <div>
//     Id:{todo.id}

//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

//-------------------------------------------------------------------------- 

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />

    </div>
  )
}

function Count({ count, setCount }) {
  return <div>
    {count}
    <Buttons count={count} setCount={setCount} />
  </div>
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>

    </div>
  )
}

export default App;
