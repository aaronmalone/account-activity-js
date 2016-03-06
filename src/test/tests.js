var csv = require('../main/csv.js');

describe('#split', function () {

    it('should return a list with the input string if there are no commas', function () {
        const input = 'the quick brown fox';
        const result = csv.split(input);
        expect(result).toEqual([input]);
    });

    it('should split based on commas', function () {
        const input = 'one,two,three';
        const result = csv.split(input);
        expect(result).toEqual(['one', 'two', 'three']);
    });

    it('should not split a quoted string', function () {
        const input = 'He said, "Shall we, my dear?"';
        const result = csv.split(input);
        expect(result).toEqual(['He said', 'Shall we, my dear?']);
    });

    it('should trim the resulting elements', function () {
        const input = 'one, two , three';
        const result = csv.split(input);
        expect(result).toEqual(['one', 'two', 'three']);
    });

    it('should trim off leading and trailing quotation marks', function () {
        const input = 'four,"five,six"';
        const result = csv.split(input);
        expect(result).toEqual(['four', 'five,six']);
    });

});