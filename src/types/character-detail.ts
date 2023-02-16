export type CharacterDetail = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;

  origin: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
  };

  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;
  };

  episode: {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
  }[];
};
