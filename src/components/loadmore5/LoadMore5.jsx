import React, { useEffect, useRef, useState } from "react";
import "./LoadMore5.css";
const LoadMore5 = () => {
  const [prod5, setProd5] = useState([]);
  const [count5, setCount5] = useState(0);
  const [scrollPercentage5, setScrollPercentage5] = useState(0);
  const ref = useRef(null);
  async function fetchprod5() {
    const prodData = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count5 === 0 ? 0 : count5 * 20
      }`
    );
    const prodDD = await prodData.json();
    if (prod5 && prodDD.products.length > 0) {
      setProd5((prev) => [...prev, ...prodDD.products]);
    }
  }
  function handleClick() {
    setCount5(count5 + 1);
  }
  function scrollToTop() {
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

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      if (count5 < 10) setCount5((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll5);
    return () => {
      removeEventListener('scroll', handleScroll5);
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleScroll5() {
    const scrolled = document.documentElement.scrollTop;
    const scrollArea =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage5((scrolled / scrollArea) * 100);
  }
  useEffect(() => {
    fetchprod5();
  }, [count5]);
  return (
    <div className="loadMore5Wrapper">
      <div className="loadMore5cont">
        <div
          className="topContainer5"
          style={{
            height: "132px",
            background: "pink",
            width: "100%",
            position: "fixed",
            top: 0,
          }}
        >
          <h1>Load More Products Pro</h1>

          <button onClick={() => scrollToBottom()}>Scroll to bottom</button>
          <div
            className="progressTracking5"
            style={{ height: "10px", background: "pink", width: "100%" }}
          >
            <div
              className="progressBar5"
              style={{
                height: "10px",
                background: "blueviolet",
                width: `${scrollPercentage5}%`,
              }}
            ></div>
          </div>
        </div>
        <div className="prodCont5">
          {prod5 && prod5.length > 0
            ? prod5.map((item, index) => (
                <div className="prod5" key={`${item.id}-${index}`}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      <div>
        <button onClick={() => handleClick()} disabled={count5 >= 4}>
          {" "}
          Load More 5
        </button>
      </div>
      <div>
        <button onClick={() => scrollToTop()}>Scroll to Top</button>
      </div>
      <div ref={ref}></div>
    </div>
  );
};

export default LoadMore5;
