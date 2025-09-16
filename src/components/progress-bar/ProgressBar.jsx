import React, { useState } from "react";

const ProgressBar = () => {
  const [progressPercentage, setProgressPercentage] = useState(0);
  function handleChange(e){
    setProgressPercentage(e.target.value)
  }
  return (
    <div className="ProgressBarWrapper" style={{width:'100vw', height:'100vh', display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',textAlign:"center"}}>
      <div className="ProgressBar" style={{width:'150px', height:'10px', border:'2px solid ', borderRadius:'20%', marginBottom:'20px'}}>
        <div
          className="innerWrapper"
          style={{ width: `${progressPercentage}%`, background:'blue' ,height:'10px', transition:'1.5s ease 0.3s'}}
        >
          {progressPercentage}
        </div>
      </div>
      <div className="inputContp" style={{width:'250px', display:'flex'}}>
        <label>Input:   </label>
        <input type="number"
         value={progressPercentage}
         onChange={handleChange}>
        </input>
      </div>
    </div>
  );
};

export default ProgressBar;
