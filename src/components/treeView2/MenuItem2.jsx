import React, { useState } from "react";
import MenuList2 from "./MenuList2";

const MenuItem2 = ({ item, id }) => {
  const [showMenu, setShowMenu] = useState([]);
  function handleClick(id) {
    const cpyMenu = [...showMenu];
    if (cpyMenu.includes(id)) {
      const findIndex = cpyMenu.indexOf(id);
      cpyMenu.splice(findIndex, 1);
    } else {
      cpyMenu.push(id);
    }
    setShowMenu(cpyMenu);
  }
  return (
    <li key={id} style={{ color: "white", cursor: "pointer" }}>
      <span>{item.label}</span>{" "}
      <span onClick={() => handleClick(item.label)}>
        {item.children ? (showMenu.includes(item.label) ? "-" : "+") : ""}
      </span>
      {item.children && showMenu.includes(item.label) ? (
        <MenuList2 menus={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem2;
