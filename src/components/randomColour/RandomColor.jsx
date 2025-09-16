import React, { useEffect, useState } from "react";
import "./RandomColor.css";
const RandomColor = () => {
  const [bgColor, setBgColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const handleRGBColor = () => {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);
    setBgColor(`rgb(${r},${g},${b})`);
  };
  const handleHexColor = () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCol = "#";
    for (let i = 0; i < 6; i++) {
      hexCol = hexCol + a[randomColorUtility(a.length)];
    }
    setBgColor(hexCol);
  };
  const generateRandomColor = () => {
    typeOfColor === "hex" ? handleHexColor() : handleRGBColor();
  };
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  useEffect(() => {
    generateRandomColor();
  }, [typeOfColor]);
  return (
    <div
      className="random-wrapper"
      style={{
        background: bgColor,
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setTypeOfColor("rgb")}>
          Generate RGB Color
        </button>
        <button onClick={() => setTypeOfColor("hex")}>
          Generate HEX Color
        </button>
        <button onClick={generateRandomColor}>Generate Random Color</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor}</h3>
        <h3>{bgColor}</h3>
      </div>
    </div>
  );
};

export default RandomColor;
