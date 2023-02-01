import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'record/CHANGE_INPUT';
const INSERT = 'record/INSERT';
const REMOVE = 'record/REMOVE';
const RESET = 'record/RESET';

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3;
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
}));

export const remove = createAction(REMOVE, (id) => id);

export const reset = createAction(RESET, () => {});

const initialState = {
  input: '',
  records: [
    { id: 1, text: '' },
    { id: 2, text: '' },
  ],
};

const recordgames = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [INSERT]: (state, action) => ({
      ...state,
      records: state.records.concat(action.payload),
    }),
    [REMOVE]: (state, action) => ({
      ...state,
      records: state.records.filter((turn) => turn.id !== action.payload),
    }),
    [RESET]: (state, action) => ({
      ...state,
      records: [],
    }),
  },
  initialState,
);

export default recordgames;
