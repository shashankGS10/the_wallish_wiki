import axios from 'axios';
import fetchStories from '../utils/api';
import dummyStories from '../data/dummyStories';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchStories', () => {
  it('should return stories data on successful API call', async () => {

    mockedAxios.get.mockResolvedValueOnce({ data: dummyStories });
    const stories = await fetchStories();
    expect(stories).toEqual(dummyStories);
    expect(mockedAxios.get).toHaveBeenCalledWith('https://wallishwiki.renv.link/stories');
  });

  it('should handle 401 Unauthorized error', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      response: { status: 401, data: 'Unauthorized' }
    });
    const stories = await fetchStories();
    expect(stories).toEqual([]);
  });

  it('should handle other errors', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));
    const stories = await fetchStories();
    expect(stories).toEqual([]);
  });
});
