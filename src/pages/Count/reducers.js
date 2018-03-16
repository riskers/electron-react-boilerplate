import * as CONST from './constants';

export const asyncCountReducer = (state = 0, action) => {
  switch (action.type) {
    case CONST.ASYNC_ADDONE_COUNT:
      return state + 1;
    case CONST.ASYNC_SUBONE_COUNT:
      return state - 1;
    default:
      return state;
  }
};
