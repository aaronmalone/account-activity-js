const _ = require('lodash');

function split(input) {
    if (isEmptyString(input)) {
        return [];
    } else {
        const head = substringBeforeComma(input);
        const tail = substringAfterComma(input);
        return cons(head.trim(), split(tail));
    }
}

function isEmptyString(input) {
    return input === '';
}

function substringBeforeComma(input) {
    const index = indexOfUnquotedComma(input);
    if (index !== -1) {
        return input.substr(0, index);
    } else {
        return input;
    }
}

function indexOfUnquotedComma(input) {
    var inQuote = false;
    for (var i = 0; i < input.length; ++i) {
        var char = input[i];
        if (char === '"') {
            inQuote = !inQuote;
        } else if (char === ',' && !inQuote) {
            return i;
        }
    }
    return -1;
}

function substringAfterComma(input) {
    const index = indexOfUnquotedComma(input);
    if (index !== -1) {
        return input.substr(index + 1);
    } else {
        return '';
    }
}

function cons(element, list) {
    return _.concat([element], list);
}

module.exports = {split: split};