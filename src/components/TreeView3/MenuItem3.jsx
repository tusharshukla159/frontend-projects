import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa6';
import MenuList3 from './MenuList3';

const MenuItem3 = ({item}) => {
    const [displayCurrentChildrens, setDisplayCurrentChildrens]=useState({});
    function handleClick(label){setDisplayCurrentChildrens({...displayCurrentChildrens,
     [label]: !displayCurrentChildrens[label]})
    }
  return (
    <li>
      <div style={{display:'flex'}}>
       <p>{item.label}</p>
       <span onClick={()=>handleClick(item.label)}>
        {item.children ? (displayCurrentChildrens[item.label]? <FaMinus/>:<FaPlus/>):''}
       </span>
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildrens[item.label] ? (
        <MenuList3 list={item.children} />
      ) : null}
    </li>
  )
}

export default MenuItem3
