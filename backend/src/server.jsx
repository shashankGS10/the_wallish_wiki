const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/stories', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'stories.json'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
