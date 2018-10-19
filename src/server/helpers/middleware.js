const errIfNotConnected = isConnected => (req, res, next) => {
  if (!isConnected()) {
    res.sendStatus(500);
  } else {
    next();
  }
};

module.exports = {
  errIfNotConnected,
};
