"use strict";

const toIsoFormat = require('./date-to-iso-format.js');
const S = require('string');

function yearFromIsoDate(isoDate) {
  return parseInt(isoDate.split('-')[0]);
}

function isNumeric(str) {
  return S(str).isNumeric();
}

function isMonthDayDate(str) {
  return str.charAt(2) === '/'
    && isNumeric(str.slice(0, 2))
    && isNumeric(str.slice(-2));
}

function parseTransDate(description, postDate) {
  let postYear = yearFromIsoDate(postDate);
  let dateFromDesc = description.slice(-5);
  if (isMonthDayDate(dateFromDesc)) {
    let transDateSameYear = toIsoFormat(dateFromDesc + '/' + postYear);
    return transDateSameYear <= postDate ? transDateSameYear : toIsoFormat(dateFromDesc + '/' + (postYear - 1));
  } else {
    return postDate;
  }
}

module.exports = parseTransDate;