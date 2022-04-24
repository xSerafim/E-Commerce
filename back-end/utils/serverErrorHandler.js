const status = require('./requestStatus');

function errorHandler(err) {
  console.log(err);
  return { code: status.SERVER_ERROR, message: err.message };
}

module.exports = { errorHandler };
