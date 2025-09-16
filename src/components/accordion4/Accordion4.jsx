import React, { useState } from "react";
import data4 from "./data4.js";
import "./Accordion4.css";
import { FaMinus, FaPlus } from "react-icons/fa";
const Accordion4 = () => {
  const [selection4, setSelection4] = useState(null);
  const [multiple4, setMultiple4] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  function handleMultiple4(index) {
    const cpyMultiple4 = multiple4;
    const findIndex = cpyMultiple4.indexOf(index);
    if (findIndex > -1) {
      cpyMultiple4.splice(findIndex, 1);
      setMultiple4([...cpyMultiple4]);
    } else {
      setMultiple4([...cpyMultiple4, index]);
    }
  }
  function handleSingleSelection(index) {
    setSelection4(
      multiSelection
        ? () => handleMultiple4(index)
        : selection4 == index
        ? null
        : index
    );
  }
  function changeselection() {
    setMultiple4([]);
    setMultiSelection(!multiSelection);
    setSelection4(null);
  }
  return (
    <div className="accordion4wrapper">
      <button onClick={() => changeselection()}> Enable Multi Selection</button>
      <div className="accordion4">
        <div className="item">
          {data4 && data4.length
            ? data4.map((item, index) => (
                <div key={index} onClick={() => handleSingleSelection(index)}>
                  {item.question}
                  {selection4 == index || multiple4.includes(index) ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                  {multiSelection ? (
                    multiple4.includes(index) ? (
                      <p>{item.answer}</p>
                    ) : null
                  ) : selection4 == index ? (
                    <p>{item.answer}</p>
                  ) : null}
                  
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Accordion4;
