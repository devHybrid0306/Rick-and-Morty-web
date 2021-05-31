import { http } from '../service/index';
import { ICharacterListResponse } from '../types/character';

export const getCharacterListApi = (page: number): Promise<ICharacterListResponse> =>
  http.get('/character', { page });
