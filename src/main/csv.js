const _ = require('lodash');

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function split(input) {

    function appendCharacterToLastElement(array, character) {
        const withoutLast = array.slice(0, array.length - 1);
        return _.concat(withoutLast, _.last(array) + character);
    }

    function splitRecursively(parts, index, quoted) {
        if (index === input.length) {
            return parts;
        } else {
            const char = input.charAt(index);
            if (char === DOUBLE_QUOTE) {
                return splitRecursively(parts, index + 1, !quoted);
            } else if (char === COMMA && !quoted) {
                return splitRecursively(_.concat(parts, ''), index + 1, quoted);
            } else {
                const array = appendCharacterToLastElement(parts, char);
                return splitRecursively(array, index + 1, quoted);
            }

        }
    }

    return splitRecursively([''], 0, false).map(_.trim);
}

module.exports = {split: split};