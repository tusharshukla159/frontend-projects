import React, { useState } from "react";
import "./CustomTab4.css";
const CustomTabs4 = () => {
  const [active4, setActive4] = useState(0);
  return (
    <div
  className="customTabs4wrapper"
  style={{
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column", // <-- change to column
    alignItems: "center",
    gap: "20px",
  }}
>
  {/* Tabs Row */}
  <div style={{ display: "flex", gap: "10px" }}>
    {[...Array(3)].map((_, index) => (
      <div
        key={index}
        onClick={() => setActive4(index)}
        className={index === active4 ? "active4" : "inactive4"}
        style={{
          width: "70px",
          height: "30px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        {"Tab" + (index + 1)}
      </div>
    ))}
  </div>

  {/* H1 below tabs */}
  <h1>{"Tab " + (active4 + 1) + " is active"}</h1>
</div>

  );
};

export default CustomTabs4;
