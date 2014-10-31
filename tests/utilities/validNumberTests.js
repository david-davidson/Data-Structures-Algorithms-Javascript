'use strict';

var validNumbers = require('../../lib/utilities/validNumbers'),
	expect = require('chai').expect,
	partialNumsArray = [ 1, 2, 'cat', 'dog', 3 ],
	noNumsArray = [ 'cat', 'dog', 'horse' ],
	valid;

describe('Utilities: `validNumbers`', function() {

	it('Removes non-numbers from an array', function() {
		expect(validNumbers(partialNumsArray)).to.eql(true);
		expect(partialNumsArray).to.eql([ 1, 2, 3 ]);
	});

	it('Returns false when the array contains no numbers', function() {
		expect(validNumbers(noNumsArray)).to.eql(false);
	});
});