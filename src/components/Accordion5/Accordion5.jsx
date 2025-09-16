import React, { useState } from "react";
import data5 from "./data5.js";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Accordion5.css";
const Accordion5 = () => {
  const [multiSelection5, setMultiSelection5] = useState(false);
  const [selection5, setSelection5] = useState(null);
  const [multiple5, setMultiple5] = useState([]);
  function changeSelection() {
    setSelection5(null);
    setMultiple5([]);
    setMultiSelection5(!multiSelection5);
  }
  function handleSingleSelection(index) {
    selection5 == index ? setSelection5(null) : setSelection5(index);
  }
  function handleMultiSelectionSelection(index) {
    const cpyMultiple5 = multiple5;
    const findIndex5 = cpyMultiple5.indexOf(index);
    if (findIndex5 > -1) {
      cpyMultiple5.splice(findIndex5, 1);
    } else {
      cpyMultiple5.push(index);
    }
    setMultiple5([...cpyMultiple5]);
  }
  return (
    <div className="accordion5wrapper">
      <button onClick={() => changeSelection()}>Enable MultiSelection</button>
      <div className="accordion5">
        {data5 &&
          data5.map((item, index) => (
            <div
              key={index}
              className="item5"
              onClick={
                multiSelection5
                  ? () => handleMultiSelectionSelection(index)
                  : () => handleSingleSelection(index)
              }
            >
              {item.question}
              { (selection5==index|| multiple5.includes(index))?<FaMinus/>:<FaPlus />}
              {multiSelection5 ? (multiple5.includes(index)?<p>{item.answer}</p>:null) : selection5 === index ? (
                <p>{item.answer}</p>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Accordion5;
