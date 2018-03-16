import * as CONST from './constants';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const asyncAddOne = () => async (dispatch) => {
  await delay(2000);

  dispatch({
    type: CONST.ASYNC_ADDONE_COUNT,
    count: 1,
  });
};

export const asyncSubOne = () => async (dispatch) => {
  await delay(2000);

  dispatch({
    type: CONST.ASYNC_SUBONE_COUNT,
    count: 1,
  });
};
