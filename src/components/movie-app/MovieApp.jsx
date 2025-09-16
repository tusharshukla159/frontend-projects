import React, { useContext } from "react";
import { MovieContext } from "./context/GlobalState";
import "./MovieApp.css";
import WatchList from "./Components/WatchList";
import Watched from "./Components/Watched";
const MovieApp = () => {
  const { searchParam, setSearchParam, movieList ,handleAddToWatchlist,handleAddToWatched,state,moveToWatched} = useContext(MovieContext);
  return (
    <div
      className="MovieAppWrapper"
      style={{
        textAlign: "center",
      }}
    >
      <h1>Movie App</h1>
      <div
        className="MovieApp"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap:'20px'
        }}
      >
        <input
          type="text"
          value={searchParam || ""}
          name="searchParam"
          placeholder="search..."
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <div className="lists">
          <WatchList />
          <Watched />
        </div>
        <h1>Movie Results</h1>
        <div className="searchResultContainer">
          {movieList.map((item) => (
            <div className="movie-card" key={item.id}>
              <div className="img ">
                {item.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  />
                ) : (
                  <div className="fill-img"> No Image Available</div>
                )}
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.release_date}</p>
                <p>{item.original_title}</p>
              </div>
              <div className="btn" style={{display:'flex', marginBottom: '15px', gap:'10px'}}>
              <button disabled={state.watchlist.includes(item)} onClick={()=>handleAddToWatchlist(item)}> Add to Watchlist</button>
              <button disabled={state.watched.includes(item)} onClick={state.watchlist.includes(item)?()=>moveToWatched(item):()=>handleAddToWatched(item)}> Add to Watched</button>
              
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieApp;
