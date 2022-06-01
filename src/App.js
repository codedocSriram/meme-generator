import React from 'react'
import Header from './components/Header'
import Meme from './components/Meme'
import PlusMinus from './components/PlusMinus'
import Practice from './components/Practice'
import memesData from './memesData'
import WindowTracker from './components/WindowTracker'

export default function App(){
    const [show,setShow]=React.useState(true)
    function toggleShow(){
       setShow(prevState=>!prevState)
    }
    return(
        <div className ="container">
            <button onClick={toggleShow}>
                Toggle WindowTracker
            </button>
            {show?<WindowTracker/>:""}
        </div>
        
    )
}
