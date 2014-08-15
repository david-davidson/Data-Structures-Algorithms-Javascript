var expect = require('chai').expect;
var bubbleSort = require('../../sorts/bubbleSort/lib/bubbleSort').bubbleSort;

describe('bubbleSort', function() {
	it('Sorts an array of numbers from low to high', function() {
		expect(Array.isArray(bubbleSort([3, 1, 2]))).to.equal(true);
		expect(bubbleSort([3, 1, 2])).to.eql([1, 2, 3]);
		expect(bubbleSort([3, 10, 2])).to.eql([2, 3, 10]);
	});
});