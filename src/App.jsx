import React, { useState, useEffect } from 'react';

import Search from './components/Search.jsx';
import CharacterCard from './components/CharacterCard.jsx';
import formatCharacters from './utils/formatCharacters';

import { defaultCharacters } from './utils/enums';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  const [displayCharacters, setDisplayCharacters] = useState(defaultCharacters);

  console.log(defaultCharacters);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterPromise = await fetch('/characters');
      const characters = await characterPromise.json();

      setCharacters(formatCharacters(characters));
      setIsLoading(false);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="app">
      <h1>Breaking Bad Character Index</h1>
      <Search />
      {!isLoading
        ? displayCharacters.map((displayCharacter) => (
            <CharacterCard character={characters[displayCharacter]} />
          ))
        : null}
    </div>
  );
};

export default App;
