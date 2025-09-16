import React from 'react'
import MenuList3 from './MenuList3'
import './Treeview3.css'

const TreeView3 = ({menus}) => {
  return (
    <div className='treeView3'>
      <MenuList3 list={menus}/>
    </div>
  )
}

export default TreeView3
