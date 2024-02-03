import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input type="text" placeholder="Search transactions" value={searchTerm} onChange={onSearch} />
  );
};

export default SearchBar;
