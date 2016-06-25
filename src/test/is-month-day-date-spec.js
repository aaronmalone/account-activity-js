"use strict";

const isMonthDayDate = require('../main/is-month-day-date.js');

describe('isMonthDate', function () {

  it('should match a date', function () {
    let result = isMonthDayDate('03/24');
    expect(result).toEqual(true);
  });

  it('should not match non-dates', function () {
    expect(isMonthDayDate('12345')).toEqual(false);
    expect(isMonthDayDate('ab/cd')).toEqual(false);
  });
});