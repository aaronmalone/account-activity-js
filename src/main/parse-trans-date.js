"use strict";

const toIsoFormat = require('./date-to-iso-format.js');
const isMonthDayDate = require('./is-month-day-date.js');

function yearFromIsoDate(isoDate) {
  return parseInt(isoDate.split('-')[0]);
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