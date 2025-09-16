import React from 'react'
import MenuItem4 from './MenuItem4'

const MenuList4 = ({menuss}) => {
  return (
    <ul style={{listStyle:'none'}}>
      {
        menuss.map((item)=><MenuItem4 item={item}/>)
      }
    </ul>
  )
}

export default MenuList4
