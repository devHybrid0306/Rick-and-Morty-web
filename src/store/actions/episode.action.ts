import { getEpisodeApi } from '../../apis/episode';
import * as actions from '../action-types/episode.type';

export const getEpisode = (id: number) => {
  return async (dispatch: any) => {
    dispatch({ type: actions.GET_EPISODE_REQUEST });

    try {
      const res = await getEpisodeApi(id);

      dispatch({
        type: actions.GET_EPISODE_SUCCESS,
        payload: res,
      });
    } catch (err) {
      dispatch({ type: actions.GET_EPISODE_FAILED });
    }
  };
};
