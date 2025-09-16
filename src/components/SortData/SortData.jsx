import React, { useEffect, useState } from "react";

const SortData = () => {
  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  const [sort, setSort] = useState("");
  async function fetchUsers() {
    const result = await fetch("https://dummyjson.com/users").then((res) =>
      res.json()
    );
    if (result && result.users.length > 0) {
      setUsers(result.users);
      setUsers2(result.users);
    }
  }
  function handleChange(event) {
    
    setSort(event.target.value);
    
  }
  function handleSort() {
    let cpyUsers = [...users];
    if (sort == "ascending") {
      cpyUsers = cpyUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    setUsers(cpyUsers);

    } else if (sort == "descending") {
      cpyUsers = cpyUsers.sort((a, b) => (a.firstName > b.firstName ? -1 : 1));
    setUsers(cpyUsers);

    }
    else{
        setUsers(users2);
        
    }

  }
  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    handleSort();
  }, [sort]);
  return (
    <div className="SortDataWrapper" style={{textAlign:'center'}}>
        <h1>Sort Data</h1>
      <div className="SortData">
        <select value={sort} onChange={handleChange}>
          <option value={"ascending"}>Ascending</option>
          <option value={"descending"}>Descending</option>
          <option value={""} name='Select Sort'>Select Sort</option>
        </select>
      </div>
      <div>
        <ul style={{listStyle:'none', color:'darkblue'}}>
          {users && users.length > 0
            ? users.map((item) => <li>{item.firstName}</li>)
            : null}{" "}
        </ul>
      </div>
    </div>
  );
};

export default SortData;
