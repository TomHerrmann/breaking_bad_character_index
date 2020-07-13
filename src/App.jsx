import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import CharacterCard from './components/CharacterCard.jsx';
import NotFound from './components/NotFound.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import { defaultCharacters } from './utils/enums';
import formatCharacters from './utils/formatCharacters';
import search from './utils/search';

const App = ({ apiError, charactersSet, characterSetDisplay }) => {
  const [characters, setCharacters] = useState(null);
  const [displayCharacters, setDisplayCharacters] = useState(defaultCharacters);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterPromise = await fetch('/characters');
      const characters = await characterPromise.json();

      setCharacters(formatCharacters(characters));
      setIsLoading(false);
    };

    try {
      fetchCharacters();
    } catch (err) {
      console.log(`Fetch failed with ${err}`);
    }
  }, []);

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
      <div className="title-container">
        <h1>Breaking Bad Character Index</h1>
      </div>
      <Search onSearch={onSearch} searchQuery={searchQuery} />
      <div className="character-container">
        {!isLoading ? (
          displayCharacters.length ? (
            displayCharacters.map((displayCharacter) => (
              <CharacterCard
                character={characters[displayCharacter]}
                key={characters[displayCharacter].char_id}
              />
            ))
          ) : (
            <NotFound />
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return store;
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...actions }, dispatch);
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
