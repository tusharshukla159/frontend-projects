import React from "react";
import MenuItem3 from "./MenuItem3";

const MenuList3 = ({ list }) => {
  return (
    
      <ul style={{listStyle:'none'}}>{list ? list.map((item) => <MenuItem3 item={item}/>) : null}</ul>
    
  );
};

export default MenuList3;
