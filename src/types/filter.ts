enum Gender {
  female = 'female',
  male = 'male',
  genderless = 'genderless',
  unknown = 'unknown',
}

enum Status {
  alive = 'alive',
  dead = 'dead',
  unknown = 'unknown',
}

export interface FilterCharacter {
  name?: string;
  species?: string;
  gender?: string;
  status?: string;
}
