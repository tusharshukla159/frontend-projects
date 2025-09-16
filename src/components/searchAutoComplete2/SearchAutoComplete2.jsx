import React, { useEffect, useState } from "react";

const SearchAutoComplete2 = () => {
  const [searchText, setSearchText] = useState("");
  const [showdropdown2, setShowdropdown2] = useState(false);
  const [userdata2, setUserdata2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  function searchUtility(value) {
    if (value === "") {
      setShowdropdown2(false);
      return;
    }
    setFilteredData(
      userdata2.filter((i, index) => i.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    );
    setShowdropdown2(true);
  }
  async function fetchUsers2() {
    const user2 = await fetch("https://dummyjson.com/users");
    const userNames2 = await user2.json();
    setUserdata2(userNames2.users.map((user) => user.firstName));
  }
  function handleChange(value) {
    setSearchText(value);
    searchUtility(value);
  }
  function handleClick() {
    searchUtility(searchText);
  }
  function handleListClick(index) {
    setSearchText(filteredData[index]);
    searchUtility(filteredData[index]);
  }

  useEffect(() => {
    fetchUsers2();
  }, []);
  return (
    <div
      className="searchAutowrapper2"
      style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
    >
      <div className="searchAutoComplete2">
        <input
          type="text"
          value={searchText}
          placeholder="search..."
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button onClick={() => handleClick()}>Search</button>
        <div className="userData2cont">
          { showdropdown2 && filteredData.map((item, index) => (
            <p key={index} onClick={() => handleListClick(index)}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAutoComplete2;
