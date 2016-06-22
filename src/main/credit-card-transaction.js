"use strict";

const csvSplit = require('./csv.js');
const TransactionPrototype = require('./transaction-prototype.js');
const toIsoFormat = require('./date-to-iso-format.js');

const TYPE_INDEX = 0;
const TRANS_DATE_INDEX = 1;
const POST_DATE_INDEX = 2;
const DESCRIPTION_INDEX = 3;
const RAW_AMOUNT_INDEX = 4;

class CreditCardTransaction extends TransactionPrototype {

  constructor(type, transDate, postDate, description, rawAmount) {
    super(type, postDate, description, rawAmount);
    this.transDate = toIsoFormat(transDate);
  }

  static fromCsvLine(line) {
    var parts = csvSplit(line);

    return new CreditCardTransaction(
      parts[TYPE_INDEX],
      parts[TRANS_DATE_INDEX],
      parts[POST_DATE_INDEX],
      parts[DESCRIPTION_INDEX],
      parts[RAW_AMOUNT_INDEX]);
  }
}

module.exports = CreditCardTransaction;