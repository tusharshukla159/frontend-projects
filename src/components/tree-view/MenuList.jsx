import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list }) => {
  return (
    <ul className="menu-list-container" style={{
        listStyle: 'none',
    }}>
      {list && list.length > 0
        ? list.map((listItem) => {
            return <MenuItem item={listItem} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
