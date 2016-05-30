const DOUBLE_QUOTE = '"';
const COMMA = ',';

function split(input) {

    function appendCharacterToLastElement(array, character) {
        const last = array.pop();
        array.push(last + character);
        return array;
    }

    function splitRecursively(parts, index, quoted) {
        if (index === input.length) {
            return parts;
        } else {
            const char = input.charAt(index);
            if (char === DOUBLE_QUOTE) {
                return splitRecursively(parts, index + 1, !quoted);
            } else if (char === COMMA && !quoted) {
                parts.push('');
                return splitRecursively(parts, index + 1, quoted);
            } else {
                const array = appendCharacterToLastElement(parts, char);
                return splitRecursively(array, index + 1, quoted);
            }

        }
    }

    const parts = splitRecursively([''], 0, false);
    return parts.map(part => part.trim());
}

module.exports = {split: split};