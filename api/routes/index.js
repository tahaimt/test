const { checkSchema, validationResult } = require('express-validator');
const errorHandler = require('../utils/errorHandler');
const getMedianOfPrimesUnderNumberAsync = require('./worker')
const Router = require('express').Router;
const router = (module.exports = Router());

router.route('/api/primes/median/get').get(
  checkSchema({
    number: {
      in: ['params', 'query'],
      errorMessage: 'number is not an integer',
      isInt: true
    }
  }),
  (req, res, next) => {
    try {
      const validationResults = validationResult(req);
      if (validationResults.errors.length > 0) {
        throw validationResults.errors
      }
      next();
    } catch (error) {
      errorHandler(error, res, 400, "Bad input was provided. Please try again with a request appropriate input.");
    }
  },
  async (req, res) => {
    try {
      const result = await getMedianOfPrimesUnderNumberAsync(req.query.number);
      res.status(201).send(result);
    } catch (error) {
      errorHandler(error, res, 500, "A server error occurred. Please contact administrator.");
    }
  }
);