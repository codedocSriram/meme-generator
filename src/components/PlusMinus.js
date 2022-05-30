import React from "react"
import Count from "./Count"
export default function PlusMinus() {
    console.log("plusMinus rendered")
   const [count,setCount]=React.useState(0)
    return (
        <div className="counter">
            <button className="counter--minus" onClick={minus}>–</button>
            <Count number={count}/>
            <button className="counter--plus" onClick={plus}>+</button>
        </div>
    )
    
    function minus(){
        setCount(prevCount=> prevCount-1)
        
    }
    function plus(){
        setCount(prevCount=> prevCount+1)
        
    }
}