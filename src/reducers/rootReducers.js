import { combineReducers } from 'redux';

import characterReducers from './characterReducers';

// using combine reducers for future scalability

const rootReducer = combineReducers({
  characters: characterReducers,
});

export default rootReducer;
