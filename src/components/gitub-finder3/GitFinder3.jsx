import React, { useEffect, useState } from "react";
import "./gitFinder3.css";

const GitFinder3 = () => {
  const [searchParam, setSearchParam] = useState("tom");
  const [data, setData] = useState({});

  async function getGithubData() {
    const res = await fetch(`https://api.github.com/users/${searchParam}`);
    const result = await res.json();
    console.log( "thisss"+result);
    if (result) {
      setData(result);
    }
    setSearchParam('')
    // const { login, avatar_url, followers, following, public_repos, url, name } =
    //   data;
  }
  useEffect(() => {
    getGithubData();
  }, []);
  return (
    <div className="git3Wrapper">
        <h1>Github Profile Finder</h1>
      <div className="git3cont">
        <div className="inputCont">
          <input
            type="text"
            value={searchParam}
            placeholder="search..."
            onChange={(e) => setSearchParam(e.target.value)}
          ></input>
          <button onClick={() => getGithubData(searchParam)}>Search</button>
        </div>
        {console.log(data)}
        {
        data && (
          <div className="userCont">
            <img src={data.avatar_url} className="avatar" alt={data.login}></img>
            <a href={data.html_url}>{data.login}</a>
            <p>Followers: {data.followers}  Following: {data.following}</p>
            <p>Public Repos: {data.public_repos}  Created at: {data.created_at}</p>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default GitFinder3;
