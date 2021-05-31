import { http } from '../service/index';
import { IEpisodeResponse } from '../types/episode';

export const getEpisodeApi = (id: number): Promise<IEpisodeResponse> =>
  http.get(`/episode/${id}`, {});
