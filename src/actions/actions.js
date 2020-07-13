import {
  CHARACTERS_SET,
  CHARACTERS_SET_DISPLAY,
  SEARCH_QUERY_SET,
} from './types';

export const charactersSet = (charactersObj) => ({
  type: CHARACTERS_SET,
  payload: charactersObj,
});
export const characterSetDisplay = (charactersArr) => ({
  type: CHARACTERS_SET_DISPLAY,
  payload: charactersArr,
});
export const searchQuerySet = (query) => ({
  type: SEARCH_QUERY_SET,
  payload: query,
});
