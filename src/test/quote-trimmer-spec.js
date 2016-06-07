"use strict";

const quoteTrimmer = require('../main/quote-trimmer.js');

describe('the quote trimmer', function () {
  it('should return an unquoted string as-is', function () {
    let input = 'foo-bar';
    let result = quoteTrimmer.trimQuotes(input);
    expect(result).toEqual('foo-bar');
  });

  it('should remove leading and trailing quotes', function () {
    let input = '"baz"';
    let result = quoteTrimmer.trimQuotes(input);
    expect(result).toEqual('baz');
  });

  it('should remove nested wrapping quotes', function () {
    let input = '""quux""';
    let result = quoteTrimmer.trimQuotes(input);
    expect(result).toEqual('quux');
  })
});