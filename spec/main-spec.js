const main = require('../main/main');

describe('taxi fee', function () {

    it('returns when given the distance less than 2', function() {
        var distance = 1;
        var time = 0;
        var result = main(distance, time);
        expect(result).toEqual(6);
    });

    it('returns when given the distance more than 2 and less than 8', function() {
        var distance = 5;
        var time = 8;
        var result = main(distance, time);
        expect(result).toEqual(10);
    });

    it('returns when given the distance more than 8', function() {
        var distance = 10;
        var time = 8;
        var result = main(distance, time);
        expect(result).toEqual(15);
    });
});
