import React from "react";

const Searchbar = ({ query, setQuery, searchRecipes }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={query}
        placeholder="Search recipe..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
    </div>
  );
};

export default Searchbar;
