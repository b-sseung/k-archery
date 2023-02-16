import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'record15/CHANGE_INPUT';
const CHANGE_SELECT = 'record15/CHANE_SELECT';
const INSERT = 'record15/INSERT';
const CLICK = 'record15/CLICK';
const REMOVE = 'record15/REMOVE';
const RESET = 'record15/RESET';

const initialState = !localStorage.getItem('record15')
  ? {
      input: '',
      selectOption: '0',
      records: [],
    }
  : JSON.parse(localStorage.getItem('record15'));

console.log(initialState);
export const changeInput15 = createAction(CHANGE_INPUT, (input) => input);
export const changeSelect15 = createAction(CHANGE_SELECT, (value) => value);

export const insert15 = createAction(INSERT, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const click15 = createAction(CLICK, (id) => id);

export const remove15 = createAction(REMOVE, (id) => id);

export const reset15 = createAction(RESET, () => {});

const record15 = handleActions(
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

export default record15;
