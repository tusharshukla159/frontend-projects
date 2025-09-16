import React, { useState } from "react";
import "./CustomTabs.css";
const CustomTabs = ({ tabs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleClick(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="tabsCont">
      <div
        className="heading"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {tabs.map((item, index) => (
          <div
            className={`tab-item ${currentIndex === index ? "active" : ""}`}
            key={index}
          >
            <span onClick={() => handleClick(index)}>{item.label}</span>
          </div>
        ))}
      </div>
      <div
        className="content"
        style={{
          color: "red",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          width: "50%",
        }}
      >
        {tabs[currentIndex] && tabs[currentIndex].content}
      </div>
    </div>
  );
};

export default CustomTabs;
