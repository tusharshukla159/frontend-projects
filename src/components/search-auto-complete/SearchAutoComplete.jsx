import React, { useEffect, useState } from "react";

const SearchAutoComplete = () => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUserData(data.users.map((userItem) => userItem.firstName));
  }
  function searchUtility(query){
    if (query === "") {
      setShowDropdown(false);
      return;
    }
    const filtered = userData.filter(
      (item) => item.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredData(filtered);
    setShowDropdown(true);
  }
  function handleClick() {
    searchUtility(searchText);
  }
  function handleChange(e) {
    searchUtility(e.target.value);
    setSearchText(e.target.value);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  function handleListClick(index) {
    setSearchText(filteredData[index]);
    setShowDropdown(false);
  }
  return (
    <div
      className="SearchAutoCont"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="searchAuto">
        <input
          type="text"
          placeholder="search..."
          value={searchText}
          onChange={(e) => handleChange(e)}
        ></input>
        <button onClick={handleClick}>Search</button>
        {/* {console.log(userData)} */}

        {showDropdown && (
          <ul style={{ listStyle: "none" }}>
            {filteredData.map((i, index) => (
              <li onClick={() => handleListClick(index)}> {i} </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchAutoComplete;
