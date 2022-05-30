import React from 'react'
import ReactDOM from 'react-dom'

export default function Practice(){
    const [thingArr, setThingArr] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem(){
        setThingArr(prevStat=> [...prevStat,`Thing ${prevStat.length +1}`])
    }
    

   const element=thingArr.map(thing => {<p key={thing}>{thing}</p>})
    
    return(
        <div>
            <button onClick={addItem}></button>
                {element}
        </div>
    )
}