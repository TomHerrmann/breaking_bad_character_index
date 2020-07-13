import React, { useState, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { appLoading, characterDisplaySet } from '../actions/actions';
import search from '../utils/search';

const Search = () => {
  const dispatch = useDispatch();
  const store = useStore();
  const { characters, defaultCharacters } = store.getState();
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (event) => {
    setSearchQuery(event.target.value);

    if (!event.target.value) {
      dispatch(characterDisplaySet(defaultCharacters));
    } else {
      const newDisplayCharacters = search(
        event.target.value,
        Object.keys(characters)
      );
      dispatch(appLoading(true));
      setTimeout(
        () => dispatch(characterDisplaySet(newDisplayCharacters)),
        250
      );
    }
  };

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
