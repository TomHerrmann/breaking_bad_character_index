import {
  API_ERROR,
  CHARACTERS_SET,
  CHARACTERS_SET_DISPLAY,
} from '../contstants/actionTypes';

import { defaultCharacters } from '../utils/enums';

const intialState = {
  characters: null,
  displayCharacters: defaultCharacters,
  isLoading: false,
};

const reducer = (state = intialState, action) => {
  switch (action.types) {
    case API_ERROR: {
      return { ...state };
    }
    case CHARACTERS_SET: {
      const { contacts } = action.payload;
      return {
        ...state,
        contacts,
        isLoading: false,
      };
    }
    case CHARACTERS_SET_DISPLAY: {
      return { ...state };
    }
    default:
      return state;
  }
};

export default reducer;
