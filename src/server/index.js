const express = require('express');
const mongoose = require('mongoose');

const App = require('./models/app');
const { errIfNotConnected } = require('./helpers/middleware');
require('dotenv').config();

mongoose.connect(process.env.ATLAS_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MongoDB.');
  }
});

const app = express();

app.use(
  express.json(),
  express.static('public'),
);

app.get('/api/apps', errIfNotConnected, async (req, res) => {
  const docs = await App.find();
  res.json(docs.sort(({ _id: a }, { _id: b }) => (a < b ? -1 : 1)));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}.`));
