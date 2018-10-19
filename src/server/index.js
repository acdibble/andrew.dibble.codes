const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');

const App = require('./models/app');
const { errIfNotConnected } = require('./helpers/middleware');
require('dotenv').config();

global.Promise = Promise;
mongoose.Promise = Promise;

let isConnected = false;

mongoose.connect(process.env.ATLAS_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to MongoDB.');
    isConnected = true;
  }
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.get('/api/apps', errIfNotConnected(() => isConnected), (req, res) => {
  App.find()
    .then(docs => res.json(docs.sort(({ _id: a }, { _id: b }) => (a < b ? -1 : 1))));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}.`));
