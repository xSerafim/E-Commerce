const status = require('./requestStatus');

function errorHandler(err) {
  console.log(err.message);
  return { code: status.SERVER_ERROR, message: err.message };
}

module.exports = { errorHandler };
