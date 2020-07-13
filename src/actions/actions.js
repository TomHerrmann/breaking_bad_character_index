import {
  APP_LOADING,
  CHARACTERS_SET,
  CHARACTERS_DISPLAY_SET,
} from '../contstants/actionTypes';

export const appLoading = (isLoading) => ({
  type: APP_LOADING,
  payloading: isLoading,
});

export const charactersSet = (characters) => ({
  type: CHARACTERS_SET,
  payload: characters,
});
export const characterDisplaySet = (displayCharacters) => ({
  type: CHARACTERS_DISPLAY_SET,
  payload: displayCharacters,
});
