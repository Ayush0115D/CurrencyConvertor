import{useEffect,useState} from "react"
function useCurrencyInfo(currency){  //use har hooks ke aage ga lete standard approach
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  },[])
} 