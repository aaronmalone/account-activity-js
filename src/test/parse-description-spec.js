"use strict";

const parseDescription = require('../main/parse-description.js');

describe('parseDescription', function () {
  it('should return unchangd a description that does not have a date', function () {
    let result = parseDescription('foo bar baz quux');
    expect(result).toEqual('foo bar baz quux');
  });

  it('should strip off ending date and whitespace', function () {
    let input = 'bought something       06/14';
    let result = parseDescription(input);
    expect(result).toEqual('bought something');
  });

  it('should trim whitespace even if there is no date', function () {
    let input = ' bought something ';
    let result = parseDescription(input);
    expect(result).toEqual('bought something')
  });
});