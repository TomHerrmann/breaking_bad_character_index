import {
  API_ERROR,
  CHARACTERS_SET,
  CHARACTERS_SET_DISPLAY,
} from '../contstants/actionTypes';

export const apiError = (status) => ({
  type: API_ERROR,
  payload: status,
});

export const charactersSet = (characters) => ({
  type: CHARACTERS_SET,
  payload: charactersObj,
});
export const characterSetDisplay = (charactersArr) => ({
  type: CHARACTERS_SET_DISPLAY,
  payload: charactersArr,
});
