const mongoose = require('mongoose');

const errIfNotConnected = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    res.sendStatus(500);
  } else {
    next();
  }
};

module.exports = {
  errIfNotConnected,
};
