import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count: 0
}

function App() {
  const [count, setCount] = useState(0)

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button onClick={()=>setCount((count)=>count+1)}>count is {count}</button>
      </div> */}
      <button onClick={onClickHandler}> {count}</button>

    </>
  )

  function CustomButton(props){
    function onClickHandler(){
      props.setCount(props.count+1);
    }
    return <button onClick={onClickHandler}>
      Counter {props.count}
    </button>
  }
}

export default App
