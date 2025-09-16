import React, { useState } from "react";

const ModalPopUp3 = () => {
  const [showPopUp3, setShowPopUp3] = useState(false);
  return (
    <div
      className="m3wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={() => setShowPopUp3(!showPopUp3)}>PopUp 3</button>
      {showPopUp3 && (
        <div
          className="PopUp3"
          style={{ height: "200px", width: "200px", background: "brown", display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",margin:"5px" }}
        >
          <p>Header</p>
          <span onClick={() => setShowPopUp3(false)}>&times;</span>
          <p>Footer</p>
        </div>
      )}
    </div>
  );
};

export default ModalPopUp3;
