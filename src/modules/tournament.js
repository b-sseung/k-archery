import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'tournament/CHANGE_INPUT';
const CHANGE_SELECT = 'tournament/CHANE_SELECT';
const INSERT_MATCHES = 'tournament/INSERT_NATCHES';
const INSERT_TURNS = 'tournament/INSERT_TURNS';
const CLICK_MATCHES = 'tournament/CLICK_MATCHES';
const CLICK_TURNS = 'tournament/CLICK_TURNS';
const REMOVE_MATCHES = 'tournament/REMOVE_MATCHES';
const REMOVE_TURNS = 'tournament/REMOVE_TURNS';
const RESET_MATCHES = 'tournament/RESET_MATCHES';
const RESET_TURNS = 'tournament/RESET_TURNS';

const initialState = !localStorage.getItem('tournament')
  ? {
      input: '',
      selectOption: '0',
      matches: [],
      turns: [],
    }
  : JSON.parse(localStorage.getItem('tournament'));

console.log(initialState);

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const changeSelect = createAction(CHANGE_SELECT, (value) => value);

export const insertMatches = createAction(INSERT_MATCHES, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const insertTurns = createAction(INSERT_TURNS, (index, text) => ({
  id: index,
  text,
  visible: false,
}));

export const clickMatches = createAction(CLICK_MATCHES, (id) => id);

export const clickTurns = createAction(CLICK_TURNS, (id) => id);

export const removeMatches = createAction(REMOVE_MATCHES, (id) => id);

export const removeTurns = createAction(REMOVE_TURNS, (id) => id);

export const resetMatches = createAction(RESET_MATCHES, () => {});

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
    [INSERT_MATCHES]: (state, action) => ({
      ...state,
      matches: state.matches.concat(action.payload),
    }),
    [INSERT_TURNS]: (state, action) => ({
      ...state,
      turns: state.turns.concat(action.payload),
    }),
    [CLICK_MATCHES]: (state, action) => ({
      ...state,
      matches: state.matches.map((match) =>
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
    [REMOVE_MATCHES]: (state, action) => ({
      ...state,
      matches: state.matches.filter((match) => match.id !== action.payload),
    }),
    [REMOVE_TURNS]: (state, action) => ({
      ...state,
      turns: state.turns.filter((turn) => turn.id !== action.payload),
    }),
    [RESET_MATCHES]: (state, action) => ({
      ...state,
      matches: [],
    }),
    [RESET_TURNS]: (state, action) => ({
      ...state,
      turns: [],
    }),
  },
  initialState,
);

export default tournament;
