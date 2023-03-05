import { combineReducers } from 'redux';
import record36 from './record36';
import record15 from './record15';
import tournament from './tournament';
import result from './result';
import mergeResult from './mergeResult';

const rootReducer = combineReducers({
  record36,
  record15,
  tournament,
  result,
  mergeResult,
});

export default rootReducer;
