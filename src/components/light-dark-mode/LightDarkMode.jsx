import React, { useState } from "react";
import "./Theme.css";
const LightDarkMode = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  function handleClick() {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  }
  return (
    <div
      className={`theme  ${currentTheme === "light" ? "light" : "dark"}`}
      style={{
        textAlign: "center",
        height:'100vh',
        display: "flex",
        flexDirection:'column',
        //alignItems:'center',
        justifyContent:"center"
    
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: "50px",
          }}
        >
          Light-Dark Mode Changer
        </h2>
        <button onClick={handleClick} className={`buttonTheme ${currentTheme === "light" ? "light" : "dark"}`
    }>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
