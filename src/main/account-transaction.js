"use strict";

const TransactionPrototype = require('./transaction-prototype.js');
const csvSplit = require('./csv.js');
const parseTransDate = require('./parse-trans-date.js');

const TYPE_INDEX = 0;
const POST_DATE_INDEX = 1;
const DESCRIPTION_INDEX = 2;
const RAW_AMOUNT_INDEX = 3;

class AccountTransaction extends TransactionPrototype {
  constructor(type, postDate, description, rawAmount) {
    super(type, postDate, description, rawAmount);
    this.transDate = parseTransDate(description, this.postDate);
  }

  static fromCsvLine(line) {
    let parts = csvSplit(line);
    return new AccountTransaction(
      parts[TYPE_INDEX],
      parts[POST_DATE_INDEX],
      parts[DESCRIPTION_INDEX],
      parts[RAW_AMOUNT_INDEX]);
  }
}

module.exports = AccountTransaction;