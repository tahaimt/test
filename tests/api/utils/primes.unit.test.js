const generatePrimes = require('../../../api/utils/prime');

describe('Prime Generator Unit Tests', () => {
  it('should return no prime number less than a very small number', async (done) => {
    let response = generatePrimes(-99999999);
    expect(response).toEqual([]);
    done();
  });
  it('should throw error on not integer', async (done) => {
    try {
      generatePrimes('abc');
      done.fail(new Error('This should have thrown an error but didn\'t'));
    } catch (error) {
      expect(error).toEqual('Not an integer');
    } finally {
      done();
    }
  });
  it('should return no prime number less than 2', async (done) => {
    let response = generatePrimes(2);
    expect(response).toEqual([]);
    done();
  });
  it('should return one prime number less than 3', async (done) => {
    let response = generatePrimes(3);
    expect(response).toEqual([2]);
    done();
  });
  it('should correctly generate prime numbers upto 200', async (done) => {
    for(var i = 2; i < 200; i++) {
      let primeNumbersList = generatePrimes(i);
      primeNumbersList.forEach(number => {
        for (let factor = 2; factor < number; factor++){
          expect(number % factor).not.toEqual(0);
        }
      });
    }
    done();
  });
});