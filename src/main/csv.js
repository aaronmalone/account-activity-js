const initial = require('lodash').initial;
const last = require('lodash').last;
const trim = require('lodash').trim;

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function isUnquotedComma(char, quoted) {
	return char === COMMA && !quoted;
}

function startNewElement(parts) {
	return parts.concat('');
}

function appendToLastItem(parts, char) {
	return initial(parts).concat(last(parts) + char);
}

function split(input) {

	function splitRecursively(parts, index, quoted) {
		if (index === input.length) {
			return parts;
		}

		const char = input.charAt(index);

		if (char === DOUBLE_QUOTE) {
			return splitRecursively(parts, index + 1, !quoted);
		} else {
			const newParts = isUnquotedComma(char, quoted) ? startNewElement(parts) : appendToLastItem(parts, char);
			return splitRecursively(newParts, index + 1, quoted);
		}
	}

	return splitRecursively([''], 0, false).map(trim);
}

module.exports = {
	split: split
};