import React, { useState, useEffect } from 'react';
import store from './store';

const Search = ({ onSearch, searchQuery }) => {
  return (
    <div className="search-container">
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          <input
            type="text"
            placeholder="Character Name"
            onChange={(event) => {
              onSearch(event);
            }}
            value={searchQuery}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
