// SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
  return (
    <input
      type="text"
      placeholder="Search transactions"
      value={searchTerm}
      onChange={onSearchTermChange}
    />
  );
};

export default SearchBar;
