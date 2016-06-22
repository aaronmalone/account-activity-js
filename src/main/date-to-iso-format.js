const assert = require('assert');

function toIsoFormat(dateStr) {
  assert.equal(dateStr.charAt(2), '/');
  assert.equal(dateStr.charAt(5), '/');
  const dateParts = dateStr.split('/');
  return dateParts[2] + '-' + dateParts[0] + '-' + dateParts[1];

}

module.exports = toIsoFormat;