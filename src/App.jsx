import React, { useState, useEffect } from 'react';

import Search from './components/Search.jsx';
import CharacterCard from './components/CharacterCard.jsx';
import formatCharacters from './utils/formatCharacters';

import { defaultCharacters } from './utils/enums';
import search from './utils/search';
import { debounce } from 'lodash';

const App = () => {
  const [characters, setCharacters] = useState(null);
  const [displayCharacters, setDisplayCharacters] = useState(defaultCharacters);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterPromise = await fetch('/characters');
      const characters = await characterPromise.json();

      setCharacters(formatCharacters(characters));
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  // const onDebounceSearch = (query) => {
  //   setSearchQuery(query);
  //   debounce(onSearch, 2000);
  // };

  const onSearch = (event) => {
    setSearchQuery(event.target.value);

    if (!event.target.value) {
      setDisplayCharacters(defaultCharacters);
    } else {
      setIsLoading(true);
      setDisplayCharacters(search(event.target.value, Object.keys(characters)));
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Breaking Bad Character Index</h1>
      <Search onSearch={onSearch} searchQuery={searchQuery} />
      {!isLoading
        ? displayCharacters.map((displayCharacter) => (
            <CharacterCard
              character={characters[displayCharacter]}
              key={characters[displayCharacter].char_id}
            />
          ))
        : null}
    </div>
  );
};

export default App;
