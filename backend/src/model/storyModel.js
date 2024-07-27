const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    image: { type: String, required: true },
    thumbnail: { type: String, required: true },
    timestamp: { type: String, required: true }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
