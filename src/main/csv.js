const commaSplit = require('./comma-split.js');
const quoteTrimmer = require('./quote-trimmer.js');
const trim = require('lodash').trim;

function split(input) {
  return commaSplit.split(input)
    .map(quoteTrimmer.trimQuotes)
    .map(trim);
}

module.exports = {
  split: split
};