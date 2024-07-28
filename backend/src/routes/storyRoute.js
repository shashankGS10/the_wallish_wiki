const express = require('express');
const router = express.Router();
const { getAllStories, getStoryById, getStoryImage } = require('../model/storyModel');

router.get('/', async (req, res) => {
  try {
    const stories = await getAllStories();
    res.json(stories);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const story = await getStoryById(req.params.id);
    if (story) {
      res.json(story);
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/:id/image', async (req, res) => {
  try {
    const imageURL = await getStoryImage(req.params.id);
    if (imageURL) {
      res.redirect(imageURL); 
    } else {
      res.status(404).json({ message: 'Story image not found' });
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;