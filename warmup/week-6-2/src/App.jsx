import { useEffect, useMemo, useState, Suspense, lazy, useContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios";
import './App.css'
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
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

// function App() {
//   const [count, setCount] = useState(0);
//   //wrap anyone that wants to use the teleported value inside a provider
//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount} />
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count({ count, setCount }) {
//   return <div>
//     <CountRenderer />
//     {count}
//     <Buttons setCount={setCount} />
//   </div>
// }

// function CountRenderer() {
//   const count = useContext(CountContext); //this is like services in angular. can teleport values across components
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({ setCount }) {
//   const count = useContext(CountContext);
//   return (
//     <div>
//       <button onClick={() => { setCount(count + 1) }}>Increase</button>
//       <button onClick={() => { setCount(count - 1) }}>Decrease</button>

//     </div>
//   )
// }

// --------------------------------------------------------

function useIsOnlines() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    })
    window.addEventListener("offline", () => {
      setIsOnline(false);
    })
  }, []);
  return isOnline;
}

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => { setDebouncedValue(value) }, delay);
    return () => clearTimeout(timerId);
  }, [value])
  return debouncedValue;
}

function useInterval(fn, timeout) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fn();
    }, timeout);
    console.log("sup")
    return () => {
      clearInterval(intervalId) //for demounting
    }
  }
    , [])
}

function App() {
  const [render, setRender] = useState(true);
  const [posts, setPosts] = useState([]);
  const [count, setcount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  useInterval(() => {
    setcount(c => c + 1);
  }, 1000);
  const isOnline = useIsOnlines();
  if (isOnline) {
    console.log("u is online");
  }
  else {
    console.log("u offline");
  }
  useEffect(() => {
    setInterval(() => { setRender(!render) }, 9000)
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data);
    })
  }, [])

  //wrap anyone that wants to use the teleported value inside a provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      <div>
        {render ? <BusinessCard></BusinessCard> : <div></div>}
      </div>
      {posts.map(post => <Track post={post} />)}
      <div>
        Timer is at {count}
        <br />
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search...'></input>
        <br />
        debounced value is {debouncedValue}
      </div>
    </div>

  )
}

function Track({ post }) {
  return <div>
    {post.title}
    <br />
    {post.description}
  </div>
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  //const  isEven = useRecoilValue(evenSelector); //one more way

  const count = useRecoilValue(countAtom);
  const isEven = useMemo(() => {
    return count % 2 == 0
  }, [count])

  return <div>
    {(isEven) ? "It is even" : null}
  </div>
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>

    </div>
  )
}

function BusinessCard() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "blue" }}>hi</div>
      </div>

      <div className='grid grid-cols-3' style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
        <div className='bg-red-500 col-span-4'>hi</div>
        <div className='bg-red-500 col-span-4'>hi</div>
        <div className='bg-blue-500 col-span-4'>hi</div>
        <div className='bg-red-500 col-span-4'>hi</div>
        <div className='bg-blue-500 col-span-4'>hi</div>

      </div>
      <div className='bg-red-500 md:bg-blue-500'>
        yo
      </div>
    </div>

  )
}

const styles = {

}

export default App;
