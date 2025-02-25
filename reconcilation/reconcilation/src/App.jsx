import { useCallback, useEffect, useMemo, useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 100
    })
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 100
    })
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000);
  }, []);

  const cryptoReturns = useMemo(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const calculateCryptoReturnCallback = useCallback(() => {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      {incomeTax}
      <CryptoGainsCalculator calculateCryptoReturnCallback={calculateCryptoReturnCallback} />
    </div>
  )


}

const CryptoGainsCalculator = memo(({ calculateCryptoReturnCallback }) => {
  console.log('crypto child re-rendered');
  return <div>
    your crypto return from call back are {calculateCryptoReturnCallback()}
  </div>

})

export default App
