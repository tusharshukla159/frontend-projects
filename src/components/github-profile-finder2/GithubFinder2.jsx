import React, { useEffect, useState } from "react";
import './gitFinder2.css'
const GithubFinder2 = () => {

  const [userData, setUserData]=useState({});
  const [userName, setUserName]=useState('sangammukherjee');
   
  function handleClick(){
    fetchUserData();
  }
 async function fetchUserData(){
     const res= await fetch(`https://api.github.com/users/${userName}`);
     const data= await res.json();
     setUserData(data);
  }
  useEffect(()=>{
    fetchUserData();
  },[])
  return (
    <div
      className="gitWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="profCont"
        style={{
          backgroundColor: "beige",
          border: " 2px solid",
          width: "350px",
          height: "410px",
          padding:'5px',
          textAlign:"center"
        }}
      >
        <input type='text' value={userName} placeholder="search..."  onChange={(e)=>setUserName(e.target.value)}></input>
        <button onClick={handleClick}>Search</button>
        <div className="imgcontainer" style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
        }} >
          <img src={userData.avatar_url} className="avatar"/>
          <a href={userData.html_url}>{userData.name|| userData.login}</a>
        </div>
        <div className="profData" style={{
          fontWeight: 'bold'
        }}>
          <p> Created at: {userData.created_at}</p>
          <p> Followers: {userData.followers}</p>
          <p> Following: {userData.following}</p>
        </div>
      </div>
    </div>
  );
};

export default GithubFinder2;
