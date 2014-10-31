'use strict';

var randomArray = require('../../lib/utilities/randomArray'),
	expect = require('chai').expect,
	myMax = 100,
	myArray;

describe('Utilities: `randomArray`', function() {
	it('Accepts a number, and returns an array of that length', function() {
		myArray = randomArray(myMax);
		expect(Array.isArray(myArray)).to.eql(true);
		expect(myArray.length).to.eql(myMax);
	});

	it('Prepopulates the array with random numbers between zero and max', function() {
		var fullOfNumbers = myArray.every(function(item) {
			return typeof item === 'number' &&
				0 <= item &&
				item <= myMax;
		});
		expect(fullOfNumbers).to.eql(true);
	});
});