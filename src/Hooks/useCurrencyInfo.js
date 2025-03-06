import{useEffect,useState} from "react"
function useCurrencyInfo(currency){  //use har hooks ke aage ga lete standard approach
  const[data,setData]=useState({})
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json()) //dsta converted into json
    .then((res)=>setData(res[currency]))  //data hold...ko useState hook use kra
console.log(data);
  },[currency])
  console.log(data);
  return data;
}  
export default useCurrencyInfo;