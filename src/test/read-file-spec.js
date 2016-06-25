"use strict";

const readFile = require('../main/read-file.js');

const TEST_FILE_NAME = './src/test/resources/read-lines-test-data.txt';

describe('file reader', function () {
  it('should read a file as a list of trimmed lines', function () {
    let result = readFile(TEST_FILE_NAME);

    expect(result).toEqual(['this', 'is', 'a', 'test']);
  });
});