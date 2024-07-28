const express = require('express');
const dotenv = require('dotenv');
const storyRoutes = require('./src/routes/storyRoute');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/stories', storyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
