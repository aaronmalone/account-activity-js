const firstElement = require('lodash').first;
const lastElement = require('lodash').last;
const trim = require('lodash').trim;

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function beginsAndEndsWithQuotes(string) {
  return firstElement(string) === DOUBLE_QUOTE && lastElement(string) === DOUBLE_QUOTE;
}
function trimQuotes(string) {
  if (beginsAndEndsWithQuotes(string)) {
    return string.slice(1, string.length - 1);
  } else {
    return string;
  }
}

function split(input) {

  var parts = [''];
  var quoted = false;

  input.split('').forEach(char => {
    if (char === DOUBLE_QUOTE) {
      quoted = !quoted;
    }

    if (char === COMMA && !quoted) {
      parts.push('');
    } else {
      parts[parts.length - 1] = lastElement(parts) + char;
    }
  });

  return parts
    .map(trimQuotes)
    .map(trim);
}

module.exports = {
  split: split
};