var expect = require('chai').expect;
var meanMedianMode = require('../../meanMedianMode/meanMedianMode');
var mean = meanMedianMode.mean;
var median = meanMedianMode.median;
var mode = meanMedianMode.mode;

describe('mean', function() {
	it('Finds the mean of an array of numbers', function() {
		expect(mean([1, 3])).to.equal(2);
		expect(mean([1])).to.equal(1);
	});
});

describe('median', function() {
	it('Finds the center number, or the median of the center two', function() {
		expect(median([1, 2, 3])).to.equal(2);
		expect(median([1, 3])).to.equal(2);
		expect(median([1])).to.equal(1);
	});
});

describe('mode', function() {
	it('Finds the most common number(s)', function() {
		expect(mode([3, 1, 1, 2])).to.equal(1);
		expect(mode([1, 2, 3])).to.equal('It\'s a tie between 1 and 2 and 3');
		expect(mode([1])).to.equal(1);
	});
});