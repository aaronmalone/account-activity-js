const toIsoFormat = require('../main/date-to-iso-format.js');

describe('toIsoFormat', function () {
  it('should return correct results', function () {
    expect(toIsoFormat('01/23/4567')).toEqual('4567-01-23')
  });
});