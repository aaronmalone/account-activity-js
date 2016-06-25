"use strict";

const isMonthDayDate = require('./is-month-day-date.js');

function stripDate(desc) {
  let last5 = desc.slice(-5);
  return isMonthDayDate(last5) ? desc.slice(0, -5) : desc;
}

function parseDescription(description) {
  return stripDate(description).trim();
}

module.exports = parseDescription;