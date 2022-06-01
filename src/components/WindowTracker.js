import React from 'react'

function WindowTracker() {
  const[width,setWidth]=React.useState(""+window.innerWidth+" Height:"+window.innerHeight)

  React.useEffect(()=>{
      window.addEventListener("resize", function(){
          setWidth(prevState=> ""+this.window.innerWidth+" Height:"+this.window.innerHeight)
      })
  },[])

  
    return (<div>
       <h1> Window width:{width}</h1>
       
    </div>
   
  )
}

export default WindowTracker