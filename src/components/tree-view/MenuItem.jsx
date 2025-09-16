import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleClick = (currentChildren) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentChildren]: !displayCurrentChildren[currentChildren]
    });
  };
  return (
    <li>
      <div
        className="itemContainer"
        style={{
          color: "white",
          display: "flex",
          marginBottom: "0px",
          gap: "10px",
        }}
      >
        <p>{item.label}</p>

        <span onClick={() => handleClick(item.label)}>
          {displayCurrentChildren[item.label] ? (
            <FaMinus color="#fff" size={25} />
          ) : (
            <FaPlus color="#fff" size={25} />
          )}
        </span>
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
