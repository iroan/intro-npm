const assert = require('assert').strict;
const myadd = require('.');

assert.equal(myadd.add(2, 3), 5);
assert.equal(myadd.add(2, -1), 1);

console.info('tess passed!')