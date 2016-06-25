"use strict";

const fs = require('fs');

function readFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  return content.split('\n').map(s => s.trim());
}

module.exports = readFile;