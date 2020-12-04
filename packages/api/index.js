const express = require('express');
const cors = require('cors');
const movies = require('./database.json');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/movies', (req, res) => {
  res.send(movies);
});

app.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});
