import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import MenuList4 from './MenuList4';

const MenuItem4 = ({item}) => {
    const[displaycurrChilds,setDisplaycurrChilds]= useState({});
    function handleClick(label){
        setDisplaycurrChilds({...displaycurrChilds,
            [label]:!displaycurrChilds[label]
        })
    }
  return (
    <li>
      <div style={{display:'flex'}}>
        <p>{item.label}</p>
        <span onClick={()=>handleClick(item.label)}>{ item.children? (displaycurrChilds[item.label]?<FaMinus/>:<FaPlus/>):""}</span>
      </div>
      {item && item.children && 
        displaycurrChilds[item.label]?<MenuList4 menuss={item.children}/>:null
      }
    </li>
  )
}

export default MenuItem4
