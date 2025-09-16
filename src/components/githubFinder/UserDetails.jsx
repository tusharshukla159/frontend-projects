import React from "react";

const UserDetails = ({ user }) => {
  const { login, avatar_url, followers, following, created_at, name,public_repos } = user;
  const createdDate = new Date(created_at);
  return (
    <div>
      <div className="imgContainer">
        <img src={avatar_url} className="avatar" alt="user"></img>
      </div>
      <div className='name-container'>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
            User joined on{' '}
            {
                `${createdDate.getDate()} ${createdDate.toLocaleString('en-us',{
                    month:'short'
                })} ${createdDate.getFullYear()}`
            }
        </p>
      </div>
      <div className="detailContainer">
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public Repos: {public_repos}</p>
      </div>
    </div>
  );
};

export default UserDetails;
