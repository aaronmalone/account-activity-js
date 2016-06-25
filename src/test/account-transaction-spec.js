"use strict";

const AccountTransaction = require('../main/account-transaction.js');

describe('AccountTransaction.fromCsvLine function', () => {
  let line = 'DEBIT,03/29/2016,"CHIPOTLE 0626 COLUMBUS OH                    03/28",-6.99,';
  let result = AccountTransaction.fromCsvLine(line);

  it('should return a result with the correct type', () => {
    expect(result.type).toBe('DEBIT');
  });

  it('should return a result with the correct post date', () => {
    expect(result.postDate).toEqual('2016-03-29');
  });

  it('should return a result with the correct description', () => {
    expect(result.description).toEqual('CHIPOTLE 0626 COLUMBUS OH');
  });

  it('should return a result with a rawAmount field', () => {
    expect(result.rawAmount).toEqual('-6.99');
  });

  it('should return a result with a transDate', () => {
    expect(result.transDate).toEqual('2016-03-28');
  });
});