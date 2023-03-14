import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'record36/CHANGE_INPUT';
const CHANGE_SELECT = 'record36/CHANE_SELECT';
const INSERT = 'record36/INSERT';
const CLICK = 'record36/CLICK';
const REMOVE = 'record36/REMOVE';
const RESET = 'record36/RESET';

const initialState = !localStorage.getItem('record36')
  ? {
      input: '',
      selectOption: '0',
      records: [],
    }
  : JSON.parse(localStorage.getItem('record36'));

console.log(initialState);
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

const record36 = handleActions(
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
          ? { ...turn, visible: !turn.visible }
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

export default record36;
