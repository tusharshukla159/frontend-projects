import React, { useEffect, useState } from "react";
import "./GithubFinder4.css";
import UserDetails from "../githubFinder/UserDetails";
const GithubFinder4 = () => {
  const [searchParam4, setSearchParam4] = useState("sangammukherjee");
  const [userDetails, setUserDetails] = useState({});
  function handleChange4(value) {
    setSearchParam4(value);
  }
  function handleClick4() {
    fetchGithubData4(searchParam4);
    setSearchParam4('')
  }
  async function fetchGithubData4(){
    const data= await fetch(`https://api.github.com/users/${searchParam4}`);
    const res =await data.json()
    if(res){
        setUserDetails(res)
    }
  }
  useEffect(() => {
    fetchGithubData4(searchParam4);
  }, []);
  return (
    <div className="githubFinder4wrapper">
      <div className="githubFinder4">
        <input
          type="text"
          value={searchParam4}
          placeholder="search..."
          onChange={(e) => handleChange4(e.target.value)}
        ></input>
        <button onClick={handleClick4}>Search</button>
        <img src={userDetails.avatar_url} alt={UserDetails.login} className="avatarr"/>
        <p><a href={userDetails.html_url}>{userDetails.name|| userDetails.login}</a></p>
        <p style={{color:"brown"}}>Followers:{userDetails.followers}</p>
        <p style={{color:"brown"}}>Following:{userDetails.following}</p>
        <p style={{color:"brown"}}>Public Repos:{userDetails.public_repos}</p>
      </div>
    </div>
  );
};

export default GithubFinder4;
