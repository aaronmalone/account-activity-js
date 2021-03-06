"use strict";

const parseTransDate = require('../main/parse-trans-date.js');

describe('parseTransDate', function () {

  it('should use the year from the post date if the post date is the next day in the same year', function () {
    let description = 'CHIPOTLE 0626 COLUMBUS OH                    03/28';
    let postDate = '1986-03-29';

    let result = parseTransDate(description, postDate);

    expect(result).toEqual('1986-03-28');
  });

  it('should use the previous year if the transaction date would be after the post date', function () {
    let description = 'CHIPOTLE 0626 COLUMBUS OH                    12/31';
    let postDate = '2000-01-02';

    let result = parseTransDate(description, postDate);

    expect(result).toEqual('1999-12-31');
  });

  it('should return the post date if there is no date in the description', function () {
    let description = 'CHIPOTLE 0626 COLUMBUS /OH';
    let postDate = '2000-06-14';

    let result = parseTransDate(description, postDate);

    expect(result).toEqual('2000-06-14');
  });
});