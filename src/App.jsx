import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
function App() {
const [amount,setAmount]=useState(0)
const[from,setFrom]=useState("usd")
const[to,setTo]=useState("inr")
const[consvertedAmount,setConvertedAmount]=useState(0)

const currencyInfo=useCurrencyInfo(from)
const options=Object.keys(currencyInfo)
const swap=()=>{
  setFrom(to)
  setFrom(from)
  setConvertedAmount(amount)
  setAmount(consvertedAmount)
}

  return (
    <>
     
  <h1 className='text-3xl bg-orange-500'>Currency App</h1>
    </>
  )
}

export default App
