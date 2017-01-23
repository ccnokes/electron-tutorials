// This works in the either the main or renderer processes.

const { requireTaskPool } = require('electron-remote');
const work = requireTaskPool(require.resolve('./work'));
const _ = require('lodash');

function doWork() {
  console.log('start work');

  // `work` will get executed concurrently in separate background processes
  // and resolve with a promise
  _.times(25, () => {
    work().then(result => {
      console.log(`work done in ${result} ms`);
    });
  });
}

module.exports = doWork;
