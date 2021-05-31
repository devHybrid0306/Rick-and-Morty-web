import * as actions from '../action-types/character.type';

const initialState = {
  characterList: [],
  currentPage: 1,
  pageInfo: null,
  isFetching: false,
};

const characterReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.GET_CHARACTER_LIST_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_CHARACTER_LIST_SUCCESS:
      return {
        ...state,
        characterList: action.payload,
        pageInfo: action.append,
        isFetching: false,
      };

    case actions.GET_CHARACTER_LIST_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    case actions.SET_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default characterReducer;
