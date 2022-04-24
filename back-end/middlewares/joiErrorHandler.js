const JOI = require('joi');
const status = require('../utils/requestStatus');

function joiErrorHandler(err, _req, res, next) {
  if (JOI.isError(err)) {
    return res.status(status.BAD_REQUEST).json({ message: err.message });
  }
  return next(err);
}

module.exports = joiErrorHandler;
