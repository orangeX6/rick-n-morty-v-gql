import fetchMock from 'jest-fetch-mock';
import {
  characterDetailsApi,
  serviceURL,
} from '../store/apis/characterDetailsApi';
import { setupApiStore } from '../utils/test-utils';

beforeEach(() => {
  jest.resetAllMocks();
  fetchMock.mockResponse(JSON.stringify({}));
});

const character = {
  character: {
    id: '14',
    name: 'Alien Morty',
    status: 'unknown',
    species: 'Alien',
    type: '',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/14.jpeg',
    created: '2017-11-04T20:51:31.373Z',
    origin: { name: 'unknown', type: null, dimension: null },
    location: {
      name: 'Citadel of Ricks',
      type: 'Space station',
      dimension: 'unknown',
    },
    episode: [
      {
        name: 'Close Rick-counters of the Rick Kind',
        episode: 'S01E10',
        air_date: 'April 7, 2014',
      },
    ],
  },
};

describe('FetchCharacterDetails', () => {
  fetchMock.enableMocks();

  test('successful response', () => {
    const storeRef = setupApiStore(characterDetailsApi);
    fetchMock.mockResponse(JSON.stringify(character));

    return storeRef.store
      .dispatch<any>(
        characterDetailsApi.endpoints.FetchCharacterDetails.initiate({ id: 14 })
      )
      .then((action: any) => {
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual(character);
      });
  });

  test('unsuccessful response', () => {
    const storeRef = setupApiStore(characterDetailsApi);

    return storeRef.store
      .dispatch<any>(
        characterDetailsApi.endpoints.FetchCharacterDetails.initiate({
          id: '',
        })
      )
      .then((action: any) => {
        const {
          status,
          error: { error },
          isError,
        } = action;
        expect(status).toBe('rejected');
        expect(isError).toBe(true);
        expect(error).toBe(undefined);
      });
  });

  it('should return an error when the server returns an error', async () => {
    const mockErrorResponse = {
      errors: [
        {
          message: 'Character not found',
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockErrorResponse), {
      status: 404,
    });
  });
});
