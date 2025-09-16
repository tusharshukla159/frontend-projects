import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";
const Accordian = () => {
  const [selected, setSelected] = useState([]);
  const [multi, setMulti] = useState(false);
  const handleSingleSelection = (id) => {
    selected.includes(id) ? setSelected([]) : setSelected([id]);
  };
  const handleMultiSelection = (id) => {
    let cpyMutiple = [...selected];
    const findIndexOfCurrentId = cpyMutiple.indexOf(id);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(id);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setSelected(cpyMutiple);
  };
  return (
    <div className="wrapper">
      <button
        onClick={multi === true ? () => setMulti(false) : () => setMulti(true)}
      >
        Enable Multi Selection
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div 
            className="dataItem"
            onClick={
              multi === true
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
            }
          >
            <div className="itemTitle">{item.question}</div>
            <span>+</span>
            {selected.includes(item.id) ? <div> {item.answer} </div> : null}
          </div>
        ))
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

export default Accordian;
