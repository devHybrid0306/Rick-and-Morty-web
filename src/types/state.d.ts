import { ICharacter, IPageInfo } from './character';
import { IEpisodeResponse } from './episode';

export interface IState {
  character: {
    characterList: ICharacter[];
    pageInfo: IPageInfo;
    isFetching: boolean;
    currentPage: number;
  };
  episode: {
    episodeDetail: IEpisodeResponse;
    isFetching: boolean;
  };
}
