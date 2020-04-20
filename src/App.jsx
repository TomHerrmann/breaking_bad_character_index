import React, { useState, useEffect } from 'react';

import Search from './components/Search.jsx';
import CharacterCard from './components/CharacterCard.jsx';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterPromise = await fetch('/characters');
      const characters = await characterPromise.json();

      setCharacters(characters);
    };

    fetchCharacters();
  }, []);

  console.log('state chars --> ', characters);
  return (
    <div className="app">
      <h1>Breaking Bad Character Index</h1>
      <Search />
      <CharacterCard />
    </div>
  );
};

export default App;
