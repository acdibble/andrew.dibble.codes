require('dotenv').config();
const mongoose = require('mongoose');
const App = require('../src/server/models/app');
const fs = require('fs');

mongoose.connect(process.env.ATLAS_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log('Connected to MongoDB.');
  }
});

const PATH_TO_FILE = '';
const photoString = fs.readFileSync(PATH_TO_FILE).toString('base64');

(async () => {
  // const apps = (await App.find()).map((a) => {
  //   const { img, ...rest } = a.toObject();
  //   return rest;
  // });
  // fs.writeFileSync('./out.json', JSON.stringify(apps, null, 2), 'utf8');

  const newApp = new App({
    name: '',
    href: '',
    description: '',
    source: '',
    info: '',
    img: photoString,
  });

  await newApp.save();
  mongoose.disconnect();
})();
