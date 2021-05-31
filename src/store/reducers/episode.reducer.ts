import * as actions from '../action-types/episode.type';

const initialState = {
  episodeDetail: null,
  isFetching: false,
};

const episodeReducer = (state = initialState, action: ActionRedux) => {
  switch (action.type) {
    case actions.GET_EPISODE_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_EPISODE_SUCCESS:
      return {
        ...state,
        episodeDetail: action.payload,
        isFetching: false,
      };

    case actions.GET_EPISODE_FAILED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default episodeReducer;
