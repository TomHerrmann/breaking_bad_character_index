import React, { useState, useEffect } from 'react';

// import Search from './components/Search';
import CharacterCard from './components/CharacterCard';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  const [orderedCharacters, setOrderedCharacters] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterPromise = await fetch('/characters');
      const characters = await characterPromise.json();

      setCharacters(characters);
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchOrderedCharacters = async () => {
      const orderedCharacterPromise = await fetch('/orderedcharacters');
      const orderedCharacters = await orderedCharacterPromise.json();

      console.log(orderedCharacters);
      setOrderedCharacters(orderedCharacters);
    };

    if (!isLoading && !orderedCharacters) {
      fetchOrderedCharacters();
    }
  }, [isLoading]);

  console.log('in state ', characters);

  return (
    <div>
      <h1>Breaking Bad Character Index</h1>
      {/* <Search /> */}
      <CharacterCard />
    </div>
  );
};

export default App;
