import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating3.css'
const StarRating3 = () => {
    const[hover, setHover]=useState(0)
    const[rating, setRating]=useState(0)

    function handleMouseDown(index){
        setRating(index)
    }
    function handleMouseLeave(){
        setHover(rating)
    }
    function handleMouseEnter(index){
      setHover(index)
    }
  return (
    <div className='StarRating3' style={{display:'flex',justifyContent:'center'}}>
      {[...Array(5)].map((_,index)=>{  index = index + 1
      return <FaStar key={index} size={40} className={index<= (hover||rating) ? 'active':'inn'}
            onClick={()=>handleMouseDown(index)}
            onMouseLeave={()=>handleMouseLeave()}
            onMouseMove={()=>handleMouseEnter(index)}
      />})}
    </div>
  )
}

export default StarRating3
