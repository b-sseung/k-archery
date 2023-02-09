import { createAction, handleActions } from 'redux-actions';

const CHANGE_TITLES = 'result/CHANGE_TITLES';
const CHANGE_GOOGLE_INIT = 'result/CHANGE_GOOGLE_INIT';
const UPDATE_SHEET = 'result/UPDATE_SHEET';

const initialState = {
  googleInit: false,
  titles: [],
  sheetsData: [],
};

export const changeTitles = createAction(CHANGE_TITLES, (titles) => titles);
export const changeGoogleInit = createAction(
  CHANGE_GOOGLE_INIT,
  (value) => value,
);
export const updateSheet = createAction(UPDATE_SHEET, (data) => data);

const result = handleActions(
  {
    [CHANGE_GOOGLE_INIT]: (state, action) => ({
      ...state,
      googleInit: action.payload,
    }),
    [CHANGE_TITLES]: (state, action) => ({
      ...state,
      titles: action.payload,
    }),
    [UPDATE_SHEET]: (state, action) => ({
      ...state,
      sheetsData: action.payload,
    }),
  },
  initialState,
);

export default result;
