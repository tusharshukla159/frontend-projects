import React, { useState } from "react";
import "./Tabs3.css";
const Tabs3 = ({ tabs3 }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="Tabs3Wrapper">
      <div className="tabs3">
        {tabs3.map((item) => {
          return (
            <div className={`tabsItem ${currentTab== item.index? 'active': ''}`} key={item.index}
             onClick={()=>setCurrentTab(item.index)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div style={{textAlign: 'center'}}>{tabs3[currentTab].content}</div>
    </div>
  );
};

export default Tabs3;
