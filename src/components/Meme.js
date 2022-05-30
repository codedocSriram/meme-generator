import React from 'react'
import memesData from '../memesData'

export default function Meme(){
   const [meme,setMeme]=React.useState({
    topText:"",
    bottomText:"",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})
const [allMemes,setAllMemes]=React.useState([])
const[count, setCount]=React.useState(1)

React.useEffect(function(){
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data=> setAllMemes(data.data.memes))
},[])

 
    function getMemeImage(){
        const randomNumber=Math.floor(Math.random() * allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme => ({...prevMeme,randomImage:url})  
        )
        memeText.topText=""
        memeText.bottomText="" 
    }

    const[memeText,setMemeText]=React.useState({
        topText:"",
        bottomText:""
    })

    function handleChange(event){
        const{name,value}=event.target
    setMemeText(prevState=>{
        return{
            ...prevState,[name]:value
        }
    })
    }





   
    return(
         <main>
             <div className="form">
                 <input 
                        name="topText"
                        type="text"
                        className="form--input"
                        value={memeText.topText}
                        onChange={handleChange}
                    />
                 <input 
                        name="bottomText"
                        type="text"
                        className="form--input"
                        value={memeText.bottomText}
                        onChange={handleChange}
                    />
                 <button onClick={getMemeImage}
                 className="form--button"
                   >
                     Get a new meme image 
                    </button>
             </div>
             <div className="meme">
                    <img src={meme.randomImage} className="meme--image"></img>
                    <h2 className="meme--text top">{memeText.topText}</h2>
                    <h2 className="meme--text bottom">{memeText.bottomText}</h2>
             </div>
         </main>
    )
}