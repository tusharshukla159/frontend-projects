import React, { useState } from "react";

const ModalPopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  function onClose(){
    setShowPopUp(false)
  }
  return (
    <div
      className="popUpCont"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        width: "50%",
      }}
    >
      <button onClick={() => setShowPopUp(!showPopUp)}>popup</button>
      {showPopUp ? (
        <div
          className="popUp"
          style={{
            background: "yellow",
          }}
        >
          <h1> Header</h1>
          <span onClick={onClose} className="close-modal-icon">&times;</span>
          <p>This is the popup</p>
        </div>
      ) : null}
    </div>
  );
};

export default ModalPopUp;
