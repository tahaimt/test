const debug = require('debug');

const errorHandler = function (error, res, status, errorMessage) {
  if (process.env.NODE_ENV !== 'test') {
    debug(`An error occurred with response ====> {status: ${status}, message: ${errorMessage}}`);
    console.trace(error);
  }
  res.status(status).send({ status, errorMessage });
}
module.exports = errorHandler;