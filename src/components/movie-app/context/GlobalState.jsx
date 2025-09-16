import React, { createContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { useContext } from "react";
import UseDebounce from "../../Debounce-Api/UseDebounce";
import { Reducer } from "./Reducer";

export const MovieContext = createContext(null);
const tmbi_api_key = "7c24517cf26e1e0c271a5fff32ae8e9b";
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};
const GlobalState = ({ children }) => {
  const [searchParam, setSearchParam] = useState("");
  const [movieList, setMovieList] = useState([]);

  const debouncedValue = UseDebounce(searchParam, 1000);
  const [state, dispatch] = useReducer(Reducer, initialState);

  async function fetchMovieList() {
    const result = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${tmbi_api_key}&query=${debouncedValue}&include_adult=false&language=en-US&page=1`
    ).then((res) => res.json());
    if (result.results && result.results.length > 0) {
      setMovieList(result.results);
    }
  }
  function handleAddToWatchlist(movie) {
    dispatch({
      type: 'ADD_TO_WATCHLIST',
      payload: movie,
    });
  }
  function handleAddToWatched(movie) {
    {
      dispatch({
        type:'ADD_TO_WATCHED',
        payload:movie
      });
    }
  }
  function handleRemoveFromWatchlist(id){
     {
      dispatch({
        type:'REMOVE_FROM_WATCHLIST',
        payload:id
      });
    }
  }
  function handleRemoveFromWatched(id){
     {
      dispatch({
        type:'REMOVE_FROM_WATCHED',
        payload:id
      });
    }
  }
  function moveToWatched(movie){
     {
      dispatch({
        type:'MOVE_TO_WATCHED',
        payload:movie
      });
    }
  }

  useEffect(() => {
    if (debouncedValue !== "") fetchMovieList();
  }, [debouncedValue]);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <MovieContext.Provider
      value={{
        searchParam,
        setSearchParam,
        movieList,
        handleAddToWatchlist,
        handleAddToWatched,
        handleRemoveFromWatchlist,
        handleRemoveFromWatched,
        moveToWatched,
        state,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default GlobalState;
