import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'tournament/CHANGE_INPUT';
const CHANGE_SELECT = 'tournament/CHANE_SELECT';
const INSERT_MATCHS = 'tournament/INSERT_NATCHS';
const INSERT_TURNS = 'tournament/INSERT_TURNS';
const CLICK_MATCHS = 'tournament/CLICK_MATCHS';
const CLICK_TURNS = 'tournament/CLICK_TURNS';
const REMOVE_MATCHS = 'tournament/REMOVE_MATCHS';
const REMOVE_TURNS = 'tournament/REMOVE_TURNS';
const RESET_MATCHS = 'tournament/RESET_MATCHS';
const RESET_TURNS = 'tournament/RESET_TURNS';

const initialState = !localStorage.getItem('tournament')
  ? {
      input: '',
      selectOption: '0',
      matchs: [],
      turns: [],
    }
  : JSON.parse(localStorage.getItem('tournament'));

console.log(initialState);

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const changeSelect = createAction(CHANGE_SELECT, (value) => value);

export const insertMatchs = createAction(INSERT_MATCHS, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const insertTurns = createAction(INSERT_TURNS, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const clickMatchs = createAction(CLICK_MATCHS, (id) => id);

export const clickTurns = createAction(CLICK_TURNS, (id) => id);

export const removeMatchs = createAction(REMOVE_MATCHS, (id) => id);

export const removeTurns = createAction(REMOVE_TURNS, (id) => id);

export const resetMatchs = createAction(RESET_MATCHS, () => {});

export const resetTurns = createAction(RESET_TURNS, () => {});

const tournament = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload,
    }),
    [CHANGE_SELECT]: (state, action) => ({
      ...state,
      selectOption: action.payload,
    }),
    [INSERT_MATCHS]: (state, action) => ({
      ...state,
      matchs: state.matchs.concat(action.payload),
    }),
    [INSERT_TURNS]: (state, action) => ({
      ...state,
      turns: state.turns.concat(action.payload),
    }),
    [CLICK_MATCHS]: (state, action) => ({
      ...state,
      matchs: state.matchs.map((match) =>
        match.id === action.payload
          ? { ...match, visible: !match.visible }
          : { ...match, visible: false },
      ),
    }),
    [CLICK_TURNS]: (state, action) => ({
      ...state,
      turns: state.turns.map((turn) =>
        turn.id === action.payload
          ? { ...turn, visible: !turn.visible }
          : { ...turn, visible: false },
      ),
    }),
    [REMOVE_MATCHS]: (state, action) => ({
      ...state,
      matchs: state.matchs.filter((match) => match.id !== action.payload),
    }),
    [REMOVE_TURNS]: (state, action) => ({
      ...state,
      turns: state.turns.filter((turn) => turn.id !== action.payload),
    }),
    [RESET_MATCHS]: (state, action) => ({
      ...state,
      matchs: [],
    }),
    [RESET_TURNS]: (state, action) => ({
      ...state,
      turns: [],
    }),
  },
  initialState,
);

export default tournament;
