// app/services/api.ts
import dummyStories from '../data/dummyStories';
import { Story } from '../types/story';

export const fetchStories = async (): Promise<Story[]> => {
  // Simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyStories);
    }, 1000);
  });
};
