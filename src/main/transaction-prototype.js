"use strict";

const assert = require('assert');
const _ = require('lodash');
const toIsoFormat = require('./date-to-iso-format.js');

class TransactionPrototype {
  constructor(type, postDate, description, rawAmount) {
    this.type = type;
    this.postDate = toIsoFormat(postDate);
    this.description = description;
    this.rawAmount = rawAmount;
  }

  get amountInCents() {
    assert.equal(_.nth(this.rawAmount, -3), '.');
    return parseInt(this.rawAmount.replace('.', ''));
  }
}

module.exports = TransactionPrototype;