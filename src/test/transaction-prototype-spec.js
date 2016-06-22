"use strict";

const TransactionPrototype = require('../main/transaction-prototype.js');

describe('TransactionPrototype constructor', function () {

  let result = new TransactionPrototype('the type', '06/21/2016', 'DESCRIBE ME, BRO', '-12.34');

  it('should construct a type', function () {
    expect(result.type).toEqual('the type');
  });

  it('should construct a post date', function () {
    expect(result.postDate).toEqual('2016-06-21');
  });

  it('should construct a description', function () {
    expect(result.description).toEqual('DESCRIBE ME, BRO');
  });

  it('should construct a rawAmount field', function () {
    expect(result.rawAmount).toEqual('-12.34');
  });
});

describe('TransactionPrototype.amountInCents', function () {
  it('should return a negative integer for a negative amount', function () {
    let txn = new TransactionPrototype('type', '06/21/2016', 'description', '-12.34');
    let result = txn.amountInCents;
    expect(result).toEqual(-1234);
  });

  it('should return a postive integer for a positive amount', function () {
    let txn = new TransactionPrototype('type', '06/21/2016', 'description', '6.14');
    let result = txn.amountInCents;
    expect(result).toEqual(614);
  });
});