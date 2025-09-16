import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
   const intervalid=setInterval(()=>{
        setTime(new Date())
   },1000)
   return ()=>clearInterval(intervalid);
  },[])
  return (
    <div className="DigitalClock" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
        <h1>Digital Clock</h1>
      <div className="Clock" style={{display:'flex', flexDirection:'column',alignItems:'center',borderRadius:'10px', color:'white',backgroundColor:'orange',width:'350px', height:'130px',fontWeight:'bold'}} >
        <h1>Current Date & Time</h1>
        <div className="time" style={{display:'flex'}}>
          <span>{time.getHours().toString().padStart(2, "0")}</span>:
          <span>{time.getMinutes().toString().padStart(2, "0")}</span>:
          <span>{time.getSeconds().toString().padStart(2, "0")}</span>
        </div>
        <div className="date">
            {
                time.toLocaleDateString(undefined,{
                     weekday:'long',
                     month:'long',
                     day:'numeric',
                     year:'numeric'

                })
            }
        </div>
      </div>
    </div>
  );
};

export default DigitalClock;
