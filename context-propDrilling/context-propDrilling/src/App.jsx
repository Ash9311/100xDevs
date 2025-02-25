
import './App.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = React.lazy(() => import('./components/Dashboard'))
const Landing = React.lazy(() => import('./components/Landing'))

function App() {

  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={"loading..."}> <Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter >
    </>
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
