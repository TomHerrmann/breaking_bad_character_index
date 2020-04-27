import * as types from './types';

export const setCharacters = (charactersObj) => ({
  type: types.SET_CHARACTERS,
  payload: charactersObj,
});
export const setDisplayCharacters = (charactersArr) => ({
  type: types.SET_DISPLAY_CHARACTERS,
  payload: charactersArr,
});
export const setSearchQuery = (query) => ({
  type: types.SET_SEARCH_QUERY,
  payload: query,
});
