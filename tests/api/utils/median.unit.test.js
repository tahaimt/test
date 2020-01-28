const getMedian = require('../../../api/utils/median');

describe('Median Finder Unit Tests', () => {
  it('should throw an error on no input', async (done) => {
    try {
      getMedian();
      done.fail(new Error('This should have thrown an error but didn\'t'));
    } catch (error) {
      expect(error).toEqual('Not an Array');
    } finally {
      done();
    }
  });
  it('should throw an error on bad parameter', async (done) => {
    try {
      getMedian(123);
      done.fail(new Error('This should have thrown an error but didn\'t'));
    } catch (error) {
      expect(error).toEqual('Not an Array');
    } finally {
      done();
    }
  });
  it('should throw an error on string which is an array of characters', async (done) => {
    try {
      getMedian('abcd');
      done.fail(new Error('This should have thrown an error but didn\'t'));
    } catch (error) {
      expect(error).toEqual('Not an Array');
    } finally {
      done();
    }
  });
  it('should return correct medians for known array of odd length', async (done) => {
    let medians = getMedian([1,2,3,4,5,6,7]);
    expect(medians).toEqual([4]);
    done();
  });
  it('should return an empty array for an empty array', async (done) => {
    let medians = getMedian([]);
    expect(medians).toEqual([]);
    done();
  });
  it('should return correct medians for known array of even length', async (done) => {
    let medians = getMedian([1,2,3,4,5,6,7,8]);
    expect(medians).toEqual([4,5]);
    done();
  });
  it('should return correct median for random array of a random length between 1 and 200', async (done) => {
    let correctMedians = [];
    let inputArray = [];
    let arrayLength = parseInt((Math.random() + 1) * 200);
    let medianIndices = arrayLength & 1 == 1 ? [parseInt(arrayLength / 2)] : [parseInt((arrayLength - 1) / 2), parseInt(((arrayLength - 1) / 2) + 1)];
    for (var i = 0, thisNumber = parseInt(Math.random() * Math.floor(1000)); i < arrayLength; i++, thisNumber = parseInt(Math.random() * Math.floor(1000))) {
      inputArray.push(thisNumber);
      if (medianIndices.includes(i)) {
        correctMedians.push(thisNumber);
      }
    }
    let calculatedMedians = getMedian(inputArray);
    expect(calculatedMedians).toEqual(correctMedians);
    done();
  });
});