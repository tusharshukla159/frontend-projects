import React, { useState } from "react";

const LightDarkmode2 = () => {
  const [bColour2, setBColour2] = useState('white');
  const [colour2, setColour2] = useState('black');
  function toggleChange2() {
    setColour2(colour2=='black'?'white':'black');
    setBColour2(bColour2== 'white'?'black':'white');
  }
  return (
    <div
      className="LightDark2"
      style={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center",
        height:'100vh',
        transition:' all 0.5s ',
        background: bColour2,
        color: colour2,
      }}
    >
        <h1>Theme Changer</h1>
      <button onClick={toggleChange2}>Change Mode</button>
    </div>
  );
};

export default LightDarkmode2;
