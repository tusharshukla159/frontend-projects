import React from "react";
import MenuItem2 from "./MenuItem2";

const MenuList2 = ({ menus }) => {
  return (
    <ul
      className="TreeView2"
      style={{
        listStyle: "none",
      }}
    >
      {menus.map((item, index) => (
        <MenuItem2 item={item} key={index} id={index} />
      ))}
    </ul>
  );
};

export default MenuList2;
