const express = require('express');
const bodyParser = require('body-parser');
const { readFileSync } = require('fs');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.get('/api/portfolios', (req, res) => {
  res.json(apps);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}.`));

const apps = [
  {
    name: 'My personal site',
    href: 'https://andrewdibble.com',
    img: readFileSync(`${__dirname}/../../static/assets/img/andrewdibble.com.jpg`).toString('base64'),
    description: 'What you\'re looking at right now',
    source: 'https://github.com/acdibble/andrewdibble.com',
    showInfo: false,
    info: 'This is my personal site that I built using the vue-cli. I used Vue.js, vue-router, Vuetify, and Pug to create the front end. The back end uses a simple Express server that (as of yet) only serves the static index.html file. It is currently hosted on a Google Cloud Compute Engine running an Ubuntu 16.04 LTS VM with Nginx and PM2. It may also find itself from time to time being hosted from my RaspberryPi.',
  },
  {
    name: 'The Daily Article',
    href: 'https://article-store.herokuapp.com',
    img: readFileSync(`${__dirname}/../../static/assets/img/article-store.jpg`).toString('base64'),
    description: 'A store for articles',
    source: 'https://github.com/acdibble/article-store',
    showInfo: false,
    info: 'A basic CRUD app for articles. The front end uses React, Redux, and Bootstrap. It runs on a MongoDB storage and uses Node with Express for the server.',
  },
  {
    name: 'Waggl',
    // href: 'http://www.waggl.dog',
    img: readFileSync(`${__dirname}/../../static/assets/img/waggl.jpg`).toString('base64'),
    description: 'A connection between adoptable shelter dogs and prospective owners',
    source: 'https://github.com/contigoers/waggl',
    showInfo: false,
    info: 'An app conceived and created by four dog-loving software engineers with the dream of finding an easier way to connect all the shelter dogs to central site so they might get adopted more quickly. We created it using React and Redux. The styling is courtesy of Ant Design and SASS. It is running on a Koa server hosted on an Amazon Web Services EC2 instance, with the data being stored on an AWS Relational Database Service using MySQL.\n<br />\n<br />\nShout out to my co-engineers on this project: <a href="https://github.com/jpangelle/" target="_blank">Jean Paul Angelle</a>, <a href="https://github.com/kmehta903/" target="_blank">Krisha Mehta</a>, and <a href="https://github.com/shannonpearson/" target="_blank">Shannon Pearson</a>.',
  },
  {
    name: 'grnfld.',
    href: 'https://grnfld.herokuapp.com',
    img: readFileSync(`${__dirname}/../../static/assets/img/grnfld.jpg`).toString('base64'),
    description: 'An open forum for helping aspiring coders with their questions and problems',
    source: 'https://github.com/dabraintrust/grnfld',
    showInfo: false,
    info: 'A Stack Overflow inspired clone for novice coders to post questions and get help and answers from more knowledgeable coders. It runs on AngularJS on the front end and a backing PostgreSQL database.',
  },
  {
    name: 'uMTV',
    href: 'https://umtv.herokuapp.com',
    img: readFileSync(`${__dirname}/../../static/assets/img/umtv.jpg`).toString('base64'),
    description: 'A video player that allows every YouTube video to only be played once',
    source: 'https://github.com/acdibble/mvp',
    showInfo: false,
    info: 'A playlist maker that only allows YouTube videos to be played that haven\'t already been played. It uses MongoDB to store videos that have already been played.',
  },
];
