import React, { useEffect, useState } from "react";

const DebounceApi = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [debounceValue, setDebounceValue] = useState("");
//   const debounceVal = fetchDebouncedValue(searchParam);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(searchParam);
    }, 1000);
    return ()=>clearTimeout(timer);
  }, [searchParam]);

  async function fetchRecipes() {
    const result = await fetch(
      `https://dummyjson.com/recipes/search?q=${debounceValue}`
    ).then((res) => res.json());
    if (result) {
      setRecipes(result.recipes);
    }
  }
  useEffect(() => {
  console.log("Recipes updated:", recipes);
}, [recipes]);
  useEffect(() => {
    if (debounceValue.trim() === '') {
      setRecipes([]);
      return;
    }
    fetchRecipes();
  }, [debounceValue]);
  return (
    <div className="DebounceApiWrapper" style={{textAlign:'center'}}>
      <h1>Debounce Api</h1>
      <div className="DebounceApi">
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        ></input>
        <ul style={{listStyle:'none'}}>
          {recipes.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DebounceApi;
