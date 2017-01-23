const crypto = require('crypto');

// do random work
// usually takes a few seconds on newer MBP
// return how long it took to complete
function work(limit = 100000) {
  let start = Date.now();
  for(let i = 0; i <= limit; i++) {
    crypto.randomBytes(2048);
  }
  return Date.now() - start;
}

module.exports = work;
