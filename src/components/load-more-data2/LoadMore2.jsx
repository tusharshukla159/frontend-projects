import React, { useEffect, useRef, useState } from "react";
import "./lodeMore2.css";
const LoadMore2 = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const ref = useRef(null);
  async function fetchProducts() {
    const prods = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const data = await prods.json();
    setProducts([...products, ...data.products]);
  }
  function handleCLick() {
    setCount(count + 1);
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
  function handleScroll() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollArea =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((scrolled / scrollArea) * 100);
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className="lodeMoreCont"
      style={{ textAlign: "center", color: "rgb(0, 21, 255)" }}
    >
      <div className="top">
        <h1> LoadMore Container</h1>
        <button onClick={scrollToBottom}>Sroll to bottom</button>
        <div
          className="scroll-container"
          style={{
            height: "10px",
            background: "pink",
            width: "100%",
          }}
        >
          <div
            className="current-scroll"
            style={{
              height: "10px",
              width: `${scrollPercentage}%`,
              background: "blueviolet",
            }}
          ></div>
        </div>
      </div>

      <div className="productCont">
        {products && products.length > 0 ? (
          products.map((item) => (
            <div className="productItem">
              <img src={item.thumbnail}></img>
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <h1> loading</h1>
        )}
      </div>
      <button disabled={count === 4} onClick={handleCLick}>
        Load More Products
      </button>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
      <div ref={ref}></div>
    </div>
  );
};

export default LoadMore2;
