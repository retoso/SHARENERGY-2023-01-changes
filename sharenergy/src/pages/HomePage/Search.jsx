import React, { useState } from "react";

const Search = ({ onClear, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleClean = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="search">
      <label htmlFor="query">Search</label>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleClean}>Clean</button>
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default Search;
