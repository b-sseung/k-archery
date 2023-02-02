import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'record/CHANGE_INPUT';
const CHANGE_SELECT = 'record/CHANE_SELECT';
const INSERT = 'record/INSERT';
const CLICK = 'record/CLICK';
const REMOVE = 'record/REMOVE';
const RESET = 'record/RESET';

const initialState = {
  input: '',
  selectOption: '0',
  records: [],
};

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const changeSelect = createAction(CHANGE_SELECT, (value) => value);

export const insert = createAction(INSERT, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const click = createAction(CLICK, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

export const reset = createAction(RESET, () => {});

const recordgames = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [CHANGE_SELECT]: (state, action) => ({
      ...state,
      selectOption: action.payload,
    }),
    [INSERT]: (state, action) => ({
      ...state,
      records: state.records.concat(action.payload),
    }),
    [CLICK]: (state, action) => ({
      ...state,
      records: state.records.map((turn) =>
        turn.id === action.payload
          ? { ...turn, visible: true }
          : { ...turn, visible: false },
      ),
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
