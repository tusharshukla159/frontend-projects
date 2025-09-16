import React, { useState } from 'react'
import './ToolTip.css'
const ToolTip = () => {
    const[isVisible, setIsVisible]=useState(false)
    let timeout;
    function onMouseEnter(){
     timeout=setTimeout(()=>{
        setIsVisible(true)
     },500)
    }
    function onMouseLeave(){
         clearTimeout(timeout);
        setIsVisible(false);
     
    }
  return (
    <div className='ToolWrapper' >
      <h1>Tooltip</h1>
      <div className='TooltipWrapper' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {
           <p>Hover me!</p> 
          }
          {
            isVisible? <div className='ToolTip'>ToolTip content </div>: null
          }
      </div>

    </div>
  )
}

export default ToolTip
