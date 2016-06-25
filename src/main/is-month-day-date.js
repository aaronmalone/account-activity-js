const S = require('string');

function isNumeric(str) {
  return S(str).isNumeric();
}

function isMonthDayDate(str) {
  return str.charAt(2) === '/'
    && isNumeric(str.slice(0, 2))
    && isNumeric(str.slice(-2));
}

module.exports = isMonthDayDate;