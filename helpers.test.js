// jasmine test for helpers.js

// comment this line out for regular jasmine test
const { nums, randNums, mean, median, mode } = require('../../lib/jasmine_examples/helpers').nums;

describe('randNums', function(){
    it('should return a new randomized array of nums', function(){
        expect(randNums(5).length).toEqual(5);
        expect(randNums(10).length).toEqual(10);
    });
});

describe('mean', function(){
    it('should return the mean of the array', function(){
        expect(mean([1,2,3,4,5])).toEqual(3);
    });
});

describe('median', function(){
    it('should return the median of the odd numbered array', function(){
        expect(median([2,4,6,8,10])).toEqual(6);
    });
    it('should return the median of the even numbered array', function(){
        expect(median([2,4,6,8,10,20])).toEqual(7);
    });
});

describe('mode', function(){
    it('should return the modes of the array', function(){
        expect(mode([2,4,6,8,10,12,14,10,2,6,10])).toEqual([10]);
    });
});