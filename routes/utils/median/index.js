const debug = require('debug');

const getMedian = function (array) {
  if (!Array.isArray(array)) {
    throw "Not an Array";
  }
  let result = [];
  if ([0,1,2].includes(array.length)) {
    result = array;
  } else {
    let medianIndices = array.length & 1 == 1 ? [parseInt(array.length / 2)] : [parseInt((array.length - 1) / 2), parseInt((array.length - 1) / 2) + 1];
    medianIndices.map(index => result.push(array[index]));
  }
  
  if (process.env.NODE_ENV !== 'test') {
    debug(`array: ${array}`);
    debug(`median: ${result}`);
  }
  
  return result;
}

module.exports = getMedian;