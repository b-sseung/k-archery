import { createAction, handleActions } from 'redux-actions';

const INSERT = 'mergeResult/INSERT';
const REMOVE = 'mergeResult/REMOVE';
const RESET = 'mergeResult/RESET';

const initialState = !localStorage.getItem('mergeResult')
  ? {
      results: [],
    }
  : JSON.parse(localStorage.getItem('mergeResult'));

console.log(initialState);

export const insert = createAction(INSERT, (key, text) => ({
  id: key,
  text,
}));

export const remove = createAction(REMOVE, (id) => id);

export const reset = createAction(RESET, () => {});

const mergeResult = handleActions(
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

export default mergeResult;
