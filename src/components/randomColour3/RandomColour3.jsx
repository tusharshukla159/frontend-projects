import React, { useEffect, useState } from 'react'

const RandomColour3 = () => {
    const[colour, setColour]=useState('')
    const[colourType, setColourType]=useState('hex')

    function colourUtility(length){
        return Math.floor(Math.random() * length);
    }
    
    function generateRGB(){
         setColour(`rgb(${colourUtility(256)},${colourUtility(256)},${colourUtility(256)})`)
         setColourType('rgb')
    }
    function generateHEX(){
     let hex="#";
     const arr=['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
     for(let i=0;i<6;i++){
      hex=hex+arr[colourUtility(arr.length)]
     }
     console.log('hex'+hex)
     setColour(hex);
     setColourType('hex')
    }
    function generateRandom(){
      colourType=='hex'?generateHEX():generateRGB();
    }
    useEffect(()=>{
        generateRandom()
    },[colourType])
  return (
    <div className='randomColor3' style={{display:'flex', justifyContent:'center',height:'100vh', backgroundColor:colour}}>
    <div className='randomColorcont' >
      <button onClick={()=>generateRGB()}>Generate RGB Colour</button>
      <button onClick={()=>generateHEX()}>Generate HEX Colour</button>
      <button onClick={()=>generateRandom()}>Generate Random Colour</button>
    </div>
    </div>
  )
}

export default RandomColour3
