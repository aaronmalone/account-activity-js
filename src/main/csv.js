const _ = require('lodash');

const initial = _.initial;
const last = _.last;
const trim = _.trim;

const DOUBLE_QUOTE = '"';
const COMMA = ',';

function split(input) {

    function splitRecursively(parts, index, quoted) {
        if (index === input.length) {
            return parts;
        } else {
            const char = input.charAt(index);
            if (char === DOUBLE_QUOTE) {
                return splitRecursively(parts, index + 1, !quoted);
            } else {
                const newArray = char === COMMA && !quoted
                    ? parts.concat('')
                    : initial(parts).concat(last(parts) + char);
                return splitRecursively(newArray, index + 1, quoted);
            }
        }
    }

    return splitRecursively([''], 0, false).map(trim);
}

module.exports = {split: split};