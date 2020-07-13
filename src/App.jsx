import React, { useEffect } from 'react';
import { connect, useStore } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/actions';

import CharacterCard from './components/CharacterCard.jsx';
import NotFound from './components/NotFound.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import Search from './components/Search.jsx';

import formatCharacters from './utils/formatCharacters';

const App = ({ characters, charactersSet, displayCharacters, isLoading }) => {
  const fetchCharacters = async () => {
    const characterPromise = await fetch('/characters');

    const characters = await characterPromise.json();
    window.localStorage.setItem(
      'bb-characters',
      JSON.stringify(formatCharacters(characters))
    );
    charactersSet(formatCharacters(characters));
  };

  useEffect(() => {
    if (!characters) {
      try {
        fetchCharacters();
      } catch (err) {
        console.log(`Fetch failed with ${err}`);
      }
    } else {
      setTimeout(() => {
        charactersSet(JSON.parse(characters));
      }, 250);
    }
  }, []);

  return (
    <div className="app">
      <div className="title-container">
        <h1>Breaking Bad Character Index</h1>
      </div>
      <Search />
      <div className="character-container">
        {isLoading ? (
          <LoadingSpinner />
        ) : displayCharacters.length ? (
          displayCharacters.map((displayCharacter) => (
            <CharacterCard
              character={characters[displayCharacter]}
              key={characters[displayCharacter].char_id}
            />
          ))
        ) : (
          <NotFound />
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
