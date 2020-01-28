const request = require('supertest');
const { app, httpServer } = require('../../../server');

describe('Prime Endpoint Integration Tests', () => {
  it('should return 400 error due to empty input', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"errorMessage": "Bad input was provided. Please try again with a request appropriate input.", "status": 400});
    done();
  });
  it('should return 400 error due to bad input', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=ABC');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toEqual({"errorMessage": "Bad input was provided. Please try again with a request appropriate input.", "status": 400});
    done();
  });
  it('should return empty response if numbers less than 2', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=2');
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual([]);
    done();
  });
  it('should return correct prime numbers less than 4', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=4');
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual([2, 3]);
    done();
  });
  it('should return a total of 30 prime numbers less than 120', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=120');
    expect(res.statusCode).toEqual(201);
    expect(res.body.length).toEqual(2);
    done();
  });
  it('(IGNORE IF FAILS ON SLOWER COMPUTERS) should be able to process primes less than 35000 under the jest default limit of 5 seconds', async (done) => {
    const res = await request(app).get('/api/primes/median/get?number=30000');
    expect(res.statusCode).toEqual(201);
    done();
  });
});

afterAll(async done => {
  httpServer.close();
  done();
});