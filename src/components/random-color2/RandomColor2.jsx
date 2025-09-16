import React, { useEffect, useState } from "react";

const RandomColor2 = () => {
  const [color, setColor] = useState("");
  const [typeOfColor, setTypeOfColor] = useState("hex");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function generateRGBColor() {
    setColor(
      `rgb(${randomColorUtility(256)},${randomColorUtility(
        256
      )},${randomColorUtility(256)})`
    );
    setTypeOfColor("rgb");
  }
  function generateHEXColor() {
    const a = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex = hex + a[randomColorUtility(a.length)];
    }
    setColor(hex);
    setTypeOfColor("hex");
  }
  function generateRandomColor() {
    typeOfColor === "hex" ? generateHEXColor() : generateRGBColor();
  }
  useEffect(() => {
    generateRandomColor();
  }, []);

  return (
    <div
      className="randomColor2cont"
      style={{
        backgroundColor: color,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="randomColor2"
        style={{
          margin: "5px",
        }}
      >
        <button onClick={generateRGBColor}> Generate RGB Color</button>
        <button onClick={generateHEXColor}> Generate HEX Color</button>
        <button onClick={generateRandomColor}> Generate Random Color</button>
        <div
          className="colorDetails"
          style={{
            textAlign: "center",
            color: "white",
            marginTop: "200px",
          }}
        >
          <h1> Type of Color: {typeOfColor}</h1>
          <h1> Color: {color}</h1>
        </div>
      </div>
    </div>
  );
};

export default RandomColor2;
