'use strict';

var exchange = require('../../lib/utilities/exchange'),
	expect = require('chai').expect,
	myArray = [ 1, 2, 3, 4, 5 ];

describe('Utilities: `exchange`', function() {
	it('Accepts an array and two indexes, and swaps the elements at those indexes', function() {
		exchange(myArray, 0, 1); // Modifies the array in place
		expect(myArray).to.eql([ 2, 1, 3, 4, 5 ]);
	});
});