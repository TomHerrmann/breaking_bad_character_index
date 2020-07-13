import {
  APP_LOADING,
  CHARACTERS_SET,
  CHARACTERS_DISPLAY_SET,
} from '../contstants/actionTypes';

import { defaultCharacters } from '../utils/enums';

const intialState = {
  characters: window.localStorage.getItem('bb-characters'),
  defaultCharacters,
  displayCharacters: defaultCharacters,
  isLoading: true,
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case APP_LOADING: {
      const isLoading = action.payload;

      return {
        ...state,
        isLoading,
      };
    }
    case CHARACTERS_SET: {
      const characters = action.payload;

      return {
        ...state,
        characters,
        isLoading: false,
      };
    }
    case CHARACTERS_DISPLAY_SET: {
      const displayCharacters = action.payload;

      return {
        ...state,
        displayCharacters,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
