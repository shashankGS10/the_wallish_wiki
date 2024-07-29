// testFetch.js
const axios = require('axios');

const fetchStories = async () => {
  try {
    const response = await axios.get('https://the-wallish-wiki-d1qxpqpzz-shashankgs10s-projects.vercel.app/stories');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching stories:', error);
  }
};

fetchStories();
