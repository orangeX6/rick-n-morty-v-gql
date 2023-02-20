import { filterReducer } from '../store';

describe('filter reducer', () => {
  it('should return the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = filterReducer(initialState, action);
    expect(result).toEqual({
      name: '',
      species: '',
      status: '',
      gender: '',
    });
  });
});
