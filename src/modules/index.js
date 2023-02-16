import { combineReducers } from 'redux';
import record36 from './record36';
import record15 from './record15';
import tournament from './tournament';
import result from './result';
import totalResult from './totalResult';

const rootReducer = combineReducers({
  record36,
  record15,
  tournament,
  result,
  totalResult,
});

export default rootReducer;
