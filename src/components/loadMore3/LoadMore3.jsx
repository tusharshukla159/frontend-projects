import React, { useEffect, useRef, useState } from "react";
import './LoadMore3.css'
const LoadMore3 = () => {
  const [prodss, setProdss] = useState([]);
  const [countt, setCountt] = useState(0);
  const ref = useRef(null);
  async function fetchProductss() {
    const pro = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        countt === 0 ? 0 : countt * 20
      }`
    );
    const data = await pro.json();
    console.log(data.products)
    if (data && data.products && data.products.length) {
  setProdss((prev) => [...prev, ...data.products]);
}
  }

    function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  
  useEffect(() => {
    fetchProductss();
  }, [countt]);
  return (
    <div className="loadMore3Wrapper">
      <h2>Load More Products </h2>
       <button onClick={scrollToBottom}>Sroll to bottom</button>
      <div className="loadMore3">
        {console.log(prodss)}
        { 
          prodss && prodss.length>0 ?(
           prodss.map((item)=>(
             <div className="productt" key={item.id}> 
            <img src={item.thumbnail} alt={item.title}/>
            <p>{item.title}</p>

            </div>
  ))):'loading'
        }
        </div>
        <button onClick={()=>setCountt(countt+1)}>Load More</button>
        <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={ref}></div>
    </div>
  );
};

export default LoadMore3;
