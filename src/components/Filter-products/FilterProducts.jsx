import React, { useEffect, useState } from 'react'
import './FilterProducts.css'
const FilterProducts = () => {
    const[products, setProducts]=useState([])
    const[filProducts, setFilProducts]=useState([])
    const[currCategory, setCurrCategory]=useState('')
    async function fetchProducts(){
     const res= await fetch("https://dummyjson.com/products").then(r=>r.json());
     if(res && res.products.length>0){
        setProducts(res.products)
        setFilProducts(res.products)
     }
    }
    const uniqueCategories= [...new Set (products.map((item)=>item.category))];

    function fetchFilProducts(){
        setFilProducts(products && products.length >0 && currCategory!=''?(
            products.filter((item)=>item.category===currCategory )
        ):products)
    }

    useEffect(()=>{null
        fetchProducts();
    },[])

    useEffect(()=>{
       fetchFilProducts();
    },[currCategory])
  return (
    <div className='filterProductWrapper' style={{textAlign:'center'}}>
        <h1>Filter products</h1>
    <div className='filterProduct' style={{}} >
      {
        uniqueCategories.map((item)=>(
            <button className={` catbtn ${currCategory === item ? 'active' : ''}`} key={item} onClick={()=>setCurrCategory(item!==currCategory?item:'')}>{item}</button>
        ))
      }
      <ul style={{listStyle:'none', display:'grid', gridTemplateColumns:'repeat(3,1fr)',gap:'50px'}}>
      {  filProducts && filProducts.length>0?
        filProducts.map((item)=>(
            <li key={item.id}><p>{item.title}</p>
           <button>{item.category}</button> 
            </li>
        )):null
      }
      </ul>
    </div>
    </div>
  )
}

export default FilterProducts
