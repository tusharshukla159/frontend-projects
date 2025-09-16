import React, { useEffect, useState } from "react";
import "./scrollIndicator.css";
const ScrollIndicator = () => {
  const [products, setProducts] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchProducts() {
    const data = await fetch("https://dummyjson.com/products");
    const productData = await data.json();
    if (productData) {
      setProducts(productData.products);
    }
  }
  function handleScroll() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const scrollArea =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / scrollArea) * 100);
  }
  useEffect(() => {
    fetchProducts();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(scroll, () => {});
    };
  }, []);
  return (
    <div className="main-div">
      <div className="top-container">
        <h1>Scroll-Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="progress-bar"
            style={{
              width: `${scrollPercentage}%`,
              backgroundColor: "blueviolet",
              height: '5px'
            }}
          >
            {console.log(scrollPercentage)}
          </div>
        </div>
      </div>
      <div className="prodContainer">
        {products && products.length > 0 ? (
          products.map((product, index) => {
            return <p key={index}>{product.title}</p>;
          })
        ) : (
          <h1>loading products...</h1>
        )}
      </div>
    </div>
  );
};

export default ScrollIndicator;
