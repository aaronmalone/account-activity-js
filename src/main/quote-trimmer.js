"use strict";

const firstElement = require('lodash').first;
const lastElement = require('lodash').last;
const DOUBLE_QUOTE = '"';

function trimQuotes(input) {
  if (beginsAndEndsWithQuotes(input)) {
    let sliced = input.slice(1, input.length - 1);
    return trimQuotes(sliced);
  } else {
    return input;
  }
}

function beginsAndEndsWithQuotes(string) {
  return firstElement(string) === DOUBLE_QUOTE
    && lastElement(string) === DOUBLE_QUOTE;
}

module.exports = {
  trimQuotes: trimQuotes
};