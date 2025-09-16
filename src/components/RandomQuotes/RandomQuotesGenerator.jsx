import React, { useEffect, useState } from "react";

const RandomQuotesGenerator = () => {
   const[quote, setQuote]= useState('')
    async function fetchquote(){
     const res= await fetch("http://api.quotable.io/quotes/random", {
        method: "GET",
      
     });
     const result = await res.json();
     if(result){
        setQuote(result[0])
     }}
     function handleRefresh(
     ){
      fetchquote()
     }
    useEffect(()=>{
        fetchquote()
    },[])
  return (
    <div className="RandomQuotesCont" style={{display:'flex', flexDirection:'column',alignItems:'center' , textAlign:"center"}}>
      <h1>Random Quotes Generator</h1>
      <div className="RandomQuotes" style={{ width:'400px', background:'darkblue', color:'white', marginBottom:'20px'}}>
        <p>{quote?.author}</p>
        <p>{quote?.content}</p>
       {
        console.log(quote)
       }
      </div>
      <button onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
};

export default RandomQuotesGenerator;
