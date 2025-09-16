import React, { useState } from "react";
import "./Accordion3.css";
import data3 from "./data3.js";
import { FaMinus, FaPlus } from "react-icons/fa";

const Accordion3 = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);
  const handleSingleClick = (id) => {
    setMultiple([]);
    if (selected == id) setSelected(null);
    else setSelected(id);
  };

  const handleMultiple = (id) => {
    let cpyMutiple = [...multiple];
    if (cpyMutiple.includes(id)) {
      let i = cpyMutiple.indexOf(id);
      cpyMutiple.splice(i, 1);
    } else cpyMutiple.push(id);
    setMultiple(cpyMutiple);
  };
  return (
    <div className="acc3">
      <div className="cont3">
        <button
          onClick={(e) => {
            setEnableMulti(!enableMulti);
            if (multiple.length!==0) setMultiple([])
            if(selected!==null){
                multiple.push(selected);
                setSelected(null)
              }
              
          }}
        >
          Enable Multi-Selection
        </button>
        {data3.map((item) => (
          <div
            className="item3"
            key={item.id}
            onClick={
              enableMulti
                ? () => handleMultiple(item.id)
                : () => handleSingleClick(item.id)
            }
          >
            <p>{item.question}</p>
            {(selected ==item.id || multiple.includes(item.id))?
                  <FaMinus />
                  : <FaPlus/>
            }
              
            
            {console.log(enableMulti)}
            {console.log(multiple)}
            {console.log(selected)}
            {enableMulti ? (
              multiple.includes(item.id) ? (
                <p>{item.answer}</p>
              ) : null
            ) : selected == item.id ? (
              <p>{item.answer}</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion3;
