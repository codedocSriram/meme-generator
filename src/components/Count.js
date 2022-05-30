import React from 'react'

export default function Count(props){
    console.log("Count Rendered")
    return(
        <div>
            <h1>{props.number}</h1>
        </div>
    )
}