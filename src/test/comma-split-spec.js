"use strict";

let commaSplit = require('../main/comma-split.js');

describe('comma split', function () {
  it('should return a list with the input string if there are no commas', function () {
    let input = 'the quick brown fox';
    let result = commaSplit.split(input);
    expect(result).toEqual([input]);
  });

  it('should not split a quoted string', function () {
    let input = 'one,"two,three",four';
    let result = commaSplit.split(input);
    expect(result).toEqual(['one', '"two,three"', 'four']);
  });
});
