import React, { useState } from "react";
import './popUp2.css'
const ModalPop = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="modwrap">
      <button onClick={() => setShowMenu(!showMenu)}>Pop-Up</button>
      <div className={`popUpc ${showMenu ? '' : 'inactive'}`} >
        <p>Pop-up</p>
        <span onClick={()=>setShowMenu(false)} className="close-modal-icon">&times;</span>
      </div>
    </div>
  );
};

export default ModalPop;
