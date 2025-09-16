import React, { useState } from "react";
import data2 from "./data2";
import "./Accordion2.css";
import { FaPlus } from "react-icons/fa";
const Accordion2 = () => {
  const [multiSelection, setMultiSelection] = useState(false);
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
    setMultiple([]);
  }
  function handleMultiSelection(id) {
    const cpyMutiple = [...multiple];
    if(selected!==null){
      cpyMutiple.push(selected);
      setSelected(null)
    }
    const findIndex = cpyMutiple.indexOf(id);
    if (findIndex === -1) {
      cpyMutiple.push(id);
    } else cpyMutiple.splice(findIndex, 1);
    setMultiple(cpyMutiple);
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", color: "orange" }}> Accordion</h2>
      <div className="accordion2con">
        <button onClick={() => setMultiSelection(!multiSelection)}>
          Enable multi-selection
        </button>
        <div className="accordionItem">
          {data2 && data2.length > 0 ? (
            data2.map((item) => (
              <div
                key={item.id}
                className="itemcon"
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <p>{item.question}</p>
                <p>
                  <FaPlus></FaPlus>
                </p>
                {multiSelection && multiple.indexOf(item.id) !== -1 ? (
                  <p>{item.answer}</p>
                ) : selected === item.id ? (
                  <p>{item.answer}</p>
                ) : null}
                {
                  console.log(multiple)
                  
                }
                {console.log(selected)}
              </div>
            ))
          ) : (
            <h2> no data </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion2;
