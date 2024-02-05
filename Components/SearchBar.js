// SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, onSearchTermChange }) {
  return (
    <input
      type="text"
      placeholder="Search transactions"
      value={searchTerm}
      onChange={onSearchTermChange}
    />
  );
}

export default SearchBar;
