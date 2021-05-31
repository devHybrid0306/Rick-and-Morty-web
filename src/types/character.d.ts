export interface IPageInfo {
  count: null | number;
  pages: null | number;
  next: null | string;
  prev: null | string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterListResponse {
  info: IPageInfo;
  results: ICharacter[];
}
