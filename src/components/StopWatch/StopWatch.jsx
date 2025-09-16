import React, { useEffect, useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(120);
  const [running, setRunning] = useState(false);
  const intervalRef=useRef();
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(()=>{
    if(running){
     intervalRef.current=setInterval(()=>{
           
           setTime(
            
            prev=>{
                if(prev==0){
                    clearInterval(intervalRef.current)
                    return 0;
                }
                return prev-1
            })
            
    
     },1000)
    }
    else{
        clearInterval(intervalRef.current)
    }
     return ()=>clearInterval(intervalRef.current)
  },[running])

  function handlePause(){
     setRunning(!running)
  }
  function handleReset(){
     setRunning(false)
     setTime(120);
  }
  function handleStart(){
     setRunning(true)
  }
  return (
    <div className="StopWatchWrapper" style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
        <h1>Stop Watch</h1>
      <div className="StopWatch" style={{display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'40%', color:'white',backgroundColor:'orange',width:'90px', height:'90px',fontWeight:'bold', marginBottom:'20px'}}>
        <span>{String(minutes).padStart(2, "0")}</span>:
        <span> {String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="btnCont" >
        <button onClick={handlePause} style={{padding:'8px', borderRadius:'8px', backgroundColor:'greenyellow', marginBottom:'20px'}}>Pause/Resume</button>
        <button onClick={handleReset} style={{padding:'8px', borderRadius:'8px', backgroundColor:'greenyellow', marginBottom:'20px'}}>Reset</button>
        <button onClick={handleStart} style={{padding:'8px', borderRadius:'8px', backgroundColor:'greenyellow', marginBottom:'20px'}}>Start</button>
      </div>
    </div>
  );
};

export default StopWatch;
