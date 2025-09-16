import React, { useEffect, useState } from 'react'

const ScrollIndicator2 = () => {
  const[scrollpercentage2,setScrollpercentage2]=useState(0)
  const[prodName,setProdName]=useState([])
  
   async function fetchProducts2(){
     const data= await fetch("https://dummyjson.com/products")
     const resul= await data.json();
     if(resul){
      setProdName(resul.products)
     }
     console.log(resul)
  }
  function handleScroll2(){
    const scrolled= document.documentElement.scrollTop;
    const scrollArea= document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scrollPercentage=((scrolled/scrollArea)*100);
    setScrollpercentage2(scrollPercentage);

  }
  useEffect(()=>{
    fetchProducts2();
    window.addEventListener('scroll', handleScroll2);

    return ()=>{
      window.removeEventListener(scroll, ()=>{})
    }
  },[])
  return (
    <div className='scrollIndicator2wrapper' style={{width:'100vw', height:'100vh', textAlign:'center', color:'blueviolet'}}>
        <div className='scrollIndicator2' style={{width:'100vw', height:'70px',background:' #f1eef1',position:'fixed',top:'0'}}>
         <h2>Scroll Indicator</h2>
         <div  className='progressTrackingcont2' style={{width:'100vw', height:'10px'}}>
            <div className='progressbar2' style={{width:`${scrollpercentage2}%`, height:'10px',background:'pink'}}></div>
         </div>
        </div>
        <div className='prodcont2' style={{marginTop:'70px', color:'grey'}}>
          {
            prodName && prodName.length?(prodName.map((item,index)=>(<p key={index}>{item.title}</p>))): 'loading'
          }
        </div>
      
    </div>
  )
}

export default ScrollIndicator2
