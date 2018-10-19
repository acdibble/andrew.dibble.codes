const mongoose = require('mongoose');

const { Schema } = mongoose;

const AppSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  showInfo: {
    type: Boolean,
    default: false,
  },
  info: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('app', AppSchema);
