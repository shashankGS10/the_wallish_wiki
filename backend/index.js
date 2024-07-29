const express = require('express');
const dotenv = require('dotenv');
const storyRoute = require('./src/routes/storyRoute');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/stories', storyRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
