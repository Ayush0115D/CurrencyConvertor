import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
function App() {
const [amount,setAmount]=useState(0)
  return (
    <>
     
  <h1 className='text-3xl bg-orange-500'>Currency App</h1>
    </>
  )
}

export default App
