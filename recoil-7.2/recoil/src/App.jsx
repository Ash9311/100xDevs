import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count"
import './App.css'
import { useMemo } from 'react';

function App() {

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function EvenCountRenderer() {
  // const count = useRecoilValue(countAtom);
  // const isEven = useMemo(() => { return count % 2 == 0 }, [count])
  const isEven = useSetRecoilState(evenSelector);
  return <div>
    {isEven ? 'Even' : 'Odd'}
  </div>
}

function CountRenderer() {
  const count = useRecoilValue( );
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer/>
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

export default App
