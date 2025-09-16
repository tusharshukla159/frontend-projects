import React, { useEffect, useState } from "react";
import "./LOadMOre4.css";
const LOadMore4 = () => {
  const [prodd, setProdd] = useState([]);
  const [counttt, setCounttt] = useState(0);
  async function getProdd() {
    const data = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        counttt === 0 ? 0 : counttt * 20
      }`
    );
    const ress = await data.json();
    if (ress && ress.products && ress.products.length > 0) {
      setProdd((prev) => [...prev, ...ress.products]);
    }
  }
  useEffect(() => {
    getProdd();
  }, [counttt]);
  return (
    <div className="loadMore4wrapper">
      <div className="loadMore4">
        {prodd && prodd.length > 0
          ? prodd.map((item) => (
              <div className="producttt" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : "loading"}
      </div>
      <button onClick={() => setCounttt(counttt + 1)} disabled={counttt == 4}>
        Load More
      </button>
    </div>
  );
};

export default LOadMore4;
