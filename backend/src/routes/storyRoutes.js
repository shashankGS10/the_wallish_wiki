const express = require('express');
const router = express.Router();
const Story = require('../model/storyModel');

// Get all stories
router.get('/', async (req, res) => {
    try {
        const stories = await Story.find();
        res.json(stories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a story by ID
router.get('/:id', async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (story == null) {
            return res.status(404).json({ message: 'Cannot find story' });
        }
        res.json(story);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new story
router.post('/', async (req, res) => {
    const story = new Story({
        id: req.body.id,
        username: req.body.username,
        avatar: req.body.avatar,
        image: req.body.image,
        thumbnail: req.body.thumbnail,
        timestamp: req.body.timestamp
    });

    try {
        const newStory = await story.save();
        res.status(201).json(newStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a story
router.patch('/:id', async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (story == null) {
            return res.status(404).json({ message: 'Cannot find story' });
        }

        if (req.body.id != null) {
            story.id = req.body.id;
        }
        if (req.body.username != null) {
            story.username = req.body.username;
        }
        if (req.body.avatar != null) {
            story.avatar = req.body.avatar;
        }
        if (req.body.image != null) {
            story.image = req.body.image;
        }
        if (req.body.thumbnail != null) {
            story.thumbnail = req.body.thumbnail;
        }
        if (req.body.timestamp != null) {
            story.timestamp = req.body.timestamp;
        }

        const updatedStory = await story.save();
        res.json(updatedStory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a story
router.delete('/:id', async (req, res) => {
    try {
        const story = await Story.findById(req.params.id);
        if (story == null) {
            return res.status(404).json({ message: 'Cannot find story' });
        }

        await story.remove();
        res.json({ message: 'Deleted Story' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;