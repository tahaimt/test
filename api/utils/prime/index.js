const debug = require('debug');
const { isInt } = require('..');

const generatePrimes = function (range) {
  let primes = [];
  if (!isInt(range)) {
    throw "Not an integer";
  }
  let primeAtIndex = []; 
  for(let i = 0; i < range; i++) {
    primeAtIndex[i] = true; 
  }

  for(let i = 2; i*i <= range; i++) 
  { 
    if (process.env.NODE_ENV !== 'test') {
      debug(`Updating indices at multiples of ${i}`);
    }
    // If primeAtIndex[p] is not changed, then it is a primeAtIndex 
    if(primeAtIndex[i] == true) 
    { 
      // Update all multiples of p 
      for(let j = i*i; j <= range; j += i) {
        debug(`Set ${j} as a multiple of ${i}`);
        primeAtIndex[j] = false; 
      }
    } 
  } 
  
  // Print all primeAtIndex numbers 
  for(let i = 2; i <= range; i++) 
  { 
    if(primeAtIndex[i] == true) {
      primes.push(i);
    }
  } 

  if (process.env.NODE_ENV !== 'test') {
    console.log(`N: ${range}`);
    console.log(`Prime Numbers < ${range}: ${primes}`);
  }
  return primes;
}

module.exports = generatePrimes;