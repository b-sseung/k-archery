import { createAction, handleActions } from 'redux-actions';

const INSERT = 'record36/INSERT';
const REMOVE = 'record36/REMOVE';
const RESET = 'record36/RESET';

const initialState = !localStorage.getItem('totalResult')
  ? {
      results: [],
    }
  : JSON.parse(localStorage.getItem('totalResult'));

console.log(initialState);

export const insert = createAction(INSERT, (key, text) => ({
  id: key,
  text,
}));

export const remove = createAction(REMOVE, (id) => id);

export const reset = createAction(RESET, () => {});

const totalResult = handleActions(
  {
    [INSERT]: (state, action) => ({
      ...state,
      results: state.results.concat(action.payload),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      results: state.results.filter((data) => data.id !== action.payload),
    }),
    [RESET]: (state, action) => ({
      ...state,
      results: [],
    }),
  },
  initialState,
);

export default totalResult;
