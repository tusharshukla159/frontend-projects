import React, { useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import "./GithubFinder.css";

const GithubFinder = () => {
  const [user, setUser] = useState("sangammukherjee");
  const [userData, setUserData] = useState({});
  async function getGithubUser() {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data =  await res.json();
    console.log('data'+data);
    if (data) {
      setUserData(data);
      console.log(userData)
      setUser("");
    }
  }
  function handleClick() {
    getGithubUser();
  }
  useEffect(() => {
    getGithubUser();
  }, []);

  return (
    <div className="giFinder">
      <div className="input-wr">
        <input
          type="text"
          value={user}
          placeholder="Search Github Username..."
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <button onClick={handleClick}> Search</button>
      </div>

      {userData !== null ? <UserDetails user={userData} /> : null}
    </div>
  );
};

export default GithubFinder;
