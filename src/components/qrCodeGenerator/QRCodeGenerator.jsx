import React, { useState } from "react";
import QRCode from "react-qr-code";
import './QrCode.css'
const QRCodeGenerator = () => {
  const [searchValue, setSearchValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleClick = () => {
    setQrValue(searchValue);
    setSearchValue("");
  };
  return (
    <div className='mainContainer'>
      <div className="input-container">
        <input
          type="text"
          name="qrCode"
          value={searchValue}
          placeholder="type to generate QR"
          onChange={(e)=>setSearchValue(e.target.value)}
        ></input>
        <button onClick={handleClick}>Generate QR</button>
      </div>
      <div>
        <QRCode id="qr-code" value={qrValue} size={250}></QRCode>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
