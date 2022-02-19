import React from "react";
import "./searchbox.css";

const SearchBox = ({ searchRef, searchChange }) => {
  return (
    <>
      <input
        className="search-box"
        name="searchbox"
        placeholder="Search Robo"
        ref={searchRef}
        onChange={searchChange}
      />
    </>
  );
};

export default SearchBox;
