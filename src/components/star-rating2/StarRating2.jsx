import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './starRating2.css'
const StarRating2 = () => {
    const[hover, setHover]=useState(0);
    const[rating, setRating]=useState(0);
    function handleMouseDown(index){
        setRating(index);
    }
    function handleMouseMove(index){
        setHover(index);
    }
    function handleMouseLeave(){
        setHover(rating);
    }
  return (
    <div className='starRating2cont'>
       <div className='starRating'>
         {
            [...Array(10)].map((_,index)=>{
                index += 1;
              return  <FaStar size={40}  key={index}
                onClick={()=>handleMouseDown(index)}
                onMouseMove={()=>handleMouseMove(index)}
                onMouseLeave={()=>handleMouseLeave()}
                
                 className={index<= (hover)? 'active': ''}
              ></FaStar>
            })
         }
       </div>
    </div>
  )
}

export default StarRating2
