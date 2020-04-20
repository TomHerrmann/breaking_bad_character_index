import React, { useState, useEffect } from 'react';

const Search = () => {
  return (
    <div className="search">
      <form>
        <label>
          <input
            type="text"
            placeholder="Character Name"
            // onSubmit={() => {
            //
            // }}
          />
        </label>
      </form>
    </div>
  );
};

export default Search;
