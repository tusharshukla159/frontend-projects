import React from 'react'
import './Pagination.css'
const Pagination = ({totalPages,handleChange,currentPage}) => {
    // const pages=[];
    // function getPages(){
    //     for(let i=1;i<=totalPages)
    // }
  return (
    <div className='PaginationWrapper'>
      <button onClick={()=>handleChange(currentPage-1)} disabled={currentPage===1}>
        prev
      </button>
      {
        [...Array(totalPages)].map((_,index)=>(
            <button className={`pagButton ${currentPage==index+1 ? 'activ': ''}`} onClick={()=>handleChange(index+1)} key={index}>{index+1} </button>
        ))
      }
      <button onClick={()=>handleChange(currentPage+1)} disabled={currentPage===totalPages}>
        next
      </button>
    </div>
  )
}

export default Pagination
