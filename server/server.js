const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const { fetchCharacters } = require('./controllers/characterController');

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/characters', fetchCharacters, (req, res) => {
  res.status(200).send(res.locals.characters);
});

app.get('/', (req, res) =>
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
);

app.get("*", (req, res) => res.status(404).send("404 - Page Not Found"));;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
