import {
  CHARACTERS_SET,
  CHARACTERS_SET_DISPLAY,
  SEARCH_QUERY_SET,
} from '../contstants/actionTypes';

import { defaultCharacters } from '../utils/enums';

const intialState = {
  characters: null,
  displayCharacters: defaultCharacters,
  isLoading: false,
};

const reducer = (state = intialState, action) => {
  switch (action.types) {
    case CHARACTERS_SET: {
      return { ...state };
    }
    case CHARACTERS_SET_DISPLAY: {
      return { ...state };
    }
    case SEARCH_QUERY_SET: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
