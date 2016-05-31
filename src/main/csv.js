const initial = require('lodash').initial;
const last = require('lodash').last;
const trim = require('lodash').trim;

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function isSeparatorComma(char, quoted) {
	return char === COMMA && !quoted;
}

function startNewBlankItem(parts) {
	return parts.concat('');
}

function addToLastItem(parts, char) {
	return initial(parts).concat(last(parts) + char);
}

function split(input) {

	function splitRecursively(parts, index, quoted) {
		if (index === input.length) {
			return parts;
		}

		const char = input.charAt(index++);

		quoted = char === DOUBLE_QUOTE ? !quoted : quoted;
		if (char !== DOUBLE_QUOTE) {
			parts = isSeparatorComma(char, quoted) ? startNewBlankItem(parts) : addToLastItem(parts, char);
		}

		return splitRecursively(parts, index, quoted);
	}

	return splitRecursively([''], 0, false).map(trim);
}

module.exports = {
	split: split
};