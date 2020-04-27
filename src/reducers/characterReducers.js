import * as types from './types';

import { defaultCharacters } from '../utils/enums';

const intialState = {
  characters: null,
  displayCharacters: defaultCharacters,
  isLoading: true,
  searchQuery: '',
};

const characterReducers = (state = intialState, action) => {
  switch (action.types) {
    case types.SET_CHARACTERS:
      return { ...state };
    case types.SET_DISPLAY_CHARACTERS:
      return { ...state };
    case types.SET_SEARCH_QUERY:
      return { ...state };
    default:
      return state;
  }
};

export default characterReducers;
