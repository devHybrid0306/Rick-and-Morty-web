import { getCharacterListApi } from '../../apis/character';
import * as actions from '../action-types/character.type';

export const getCharacterList = (page: number) => {
  return async (dispatch: any) => {
    dispatch({ type: actions.GET_CHARACTER_LIST_REQUEST });

    try {
      const res = await getCharacterListApi(page);

      dispatch({
        type: actions.GET_CHARACTER_LIST_SUCCESS,
        payload: res.results,
        append: res.info,
      });
    } catch (err) {
      dispatch({ type: actions.GET_CHARACTER_LIST_FAILED });
    }
  };
};

export const setCurrentPageNumber = (page: number) => {
  return async (dispatch: any) => {
    dispatch({ type: actions.SET_CURRENT_PAGE_NUMBER, payload: page });
  };
};
