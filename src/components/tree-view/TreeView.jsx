import React from 'react'
import MenuList from './MenuList'
import './TreeView.css'
const TreeView = ({menus}) => {
  return (
    <div className='tree-view-container'>
      <MenuList list={menus}/>
    </div>
  )
}

export default TreeView


