var expect = require('chai').expect;
var insertionSort = require('../../sorts/insertionSort/lib/insertionSort').insertionSort;

describe('insertionSort', function() {
	it('Sorts an array of numbers from low to high', function() {
		expect(Array.isArray(insertionSort([3, 1, 2]))).to.equal(true); // Returns an array?
		expect(insertionSort([3, 1, 2])).to.eql([1, 2, 3]); // Sorts properly?
		expect(insertionSort([3, 10, 2])).to.eql([2, 3, 10]); // Is sorting strings, not numbers?
	});
});