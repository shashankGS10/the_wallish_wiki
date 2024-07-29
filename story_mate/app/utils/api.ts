// utils/api.ts
import axios, { AxiosError } from 'axios';
import { Story } from '../types/story';

const fetchStories = async (): Promise<Story[]> => {
  try {
    const response = await axios.get<Story[]>('https://wallishwiki.renv.link/stories'); //EC2 aws instance
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('Error fetching stories:', axiosError.response?.status, axiosError.response?.data);
      if (axiosError.response?.status === 401) {
        alert('Unauthorized access. Please check your credentials.');
      } else {
        alert('Failed to fetch stories. Please try again later.');
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return [];
  }
};

export default fetchStories;
