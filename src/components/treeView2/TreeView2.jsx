import React from "react";
import MenuList2 from "./MenuList2";
const TreeView2 = ({ menus }) => {
  return (
    <div
      className="ran"
      style={{
        backgroundColor: "pink",
        height: "100vh",
        width: "250px",
        paddingTop:'5px'
      }}
    >
      <MenuList2 menus={menus} />
    </div>
  );
};

export default TreeView2;
