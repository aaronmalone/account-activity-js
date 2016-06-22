"use strict";

const CreditCardTransaction = require('../main/credit-card-transaction.js');

describe('CreditCardTransaction.fromCsvLine', function () {

  let csvLine = 'Sale,03/25/2016,03/28/2016,"BAKERSFIELD TACOS",-15.30';
  let txn = CreditCardTransaction.fromCsvLine(csvLine);

  it('should use ISO format for dates', function () {
    expect(txn.transDate).toEqual('2016-03-25');
    expect(txn.postDate).toEqual('2016-03-28');
  });

  it('should return the correct description', function () {
    expect(txn.description).toEqual('BAKERSFIELD TACOS');
  });
});