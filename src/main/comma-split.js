"use strict";

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function split(input) {
  let parts = [''];
  let quoted = false;

  input.split('').forEach(char => {
    if (char === DOUBLE_QUOTE) {
      quoted = !quoted;
    }

    if (char === COMMA && !quoted) {
      parts.push('');
    } else {
      parts[parts.length - 1] = parts[parts.length - 1] + char;
    }
  });

  return parts;
}

module.exports = {
  split: split
};