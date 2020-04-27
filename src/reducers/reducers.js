import { combineReducers } from 'redux';

import charcterReducers from './characterReducers';
import characterReducers from './characterReducers';

// using combine reducers for future scalability

const reducers = combineReducers({
  characters: characterReducers,
});

export default reducers;
