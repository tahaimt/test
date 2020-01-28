const { Worker, workerData, isMainThread, parentPort } = require('worker_threads');
const generatePrimes = require('../utils/prime');
const getMedian = require('../utils/median');

if (isMainThread) {
  module.exports = async function getMedianOfPrimesUnderNumberAsync(raw) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: raw
      })
      worker.on('message', resolve)
      worker.on('error', reject)
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`))
        }
      })
    })
  }
} else {
  const result = getMedian(generatePrimes(workerData));
  parentPort.postMessage(result);
}