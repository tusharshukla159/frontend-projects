import React, { useState } from "react";
import Pagination from "./Pagination";

const PaginationTest = () => {
  const list = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
  }));
  function handleChange(value) {
    setCurrentPage(value);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = list.length / itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOFirstItem = indexOfLastItem - itemsPerPage;
  const currentList = list.slice(indexOFirstItem, indexOfLastItem);
  return (
     <div className="PaginationTestw"
      style={{display:'flex' , flexDirection:'column', alignItems:'center'}}>
          <h1>Pagination</h1>
    <div
      className="PaginationTest"
      style={{
        listStyle: "none",
        gap: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        width: "500px",
        marginBottom: "50px",
      }}
    >
      {currentList.map((item, index) => (
        <li
          style={{ background: "purple", width: "100px", color: "white" }}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
       </div>
       
        <Pagination totalPages={totalPages} currentPage={currentPage} handleChange={handleChange} />
        
     
    </div>
  );
};

export default PaginationTest;
