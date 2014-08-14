var expect = require('chai').expect;
var selectionSort = require('../../sorts/selectionSort/lib/selectionSort').selectionSort;

describe('selectionSort', function() {
	it('Sorts an array of numbers from low to high', function() {
		expect(Array.isArray(selectionSort([3, 1, 2]))).to.equal(true); // Returns an array?
		expect(selectionSort([3, 1, 2])).to.eql([1, 2, 3]); // Sorts properly?
	});
});