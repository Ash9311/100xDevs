
import './App.css'
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { CountContext } from './context';
import { useContext } from 'react';
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={"loading..."}> <Landing /></Suspense>}></Route>
        </Routes>
        <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount} />
        </CountContext.Provider>

      </BrowserRouter >
    </>
  )
}

function Count({ setCount }) {
  return (
    <div>
      <CountRenderer />
      <Button setCount={setCount}></Button>
    </div>
  )
}

function CountRenderer() {
  const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => { setCount(count - 1) }}>Decrease</button>
      <button onClick={() => { setCount(count + 1) }}>Increase</button>
    </div>
  )
}

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => { navigate("/"); }}>Landing Page</button>
      <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
      <div style={{ background: "aqua" }}>
        Hi this is top bar
      </div>
    </div>
  );
}

export default App
