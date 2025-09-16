import React, { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    const prods = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await prods.json();
    console.log(result)
    if (result && result.products && result.products.length) {
      setProducts((prevData) => [...prevData, ...result.products]);
      
    }
  }
 
  useEffect(() => {
    const prods = fetchProducts();
  }, [count]);
     const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {
           if (count < 10) 
            setCount((prevPage) => prevPage + 1);

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className="mainWrapper">
    <div className="loadMoreWrapper">
      {products && products.length ? (
        products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))
      ) : (
        <h1>no products available</h1>
      )}
       </div>
      <button onClick={()=> setCount(count + 1)} disabled={count > 3}>
        
        Load More Products
      </button>
      
   </div>
  );
};

export default LoadMore;
