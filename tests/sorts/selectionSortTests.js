'use strict';

var expect = require('chai').expect,
	arrayOne = require('../../lib/utilities/randomArray')(1000),
	arrayTwo = arrayOne.slice(),
	selectionSort = require('../../lib/sorts/selectionSort');

describe('Selection sort', function() {
	
	it('Sorts a random array from low to high', function() {
		var startTime = new Date(),
			sortedArray = selectionSort(arrayOne),
			endTime = new Date();
		
		expect(sortedArray).to.eql(arrayTwo.sort(function(x, y) {
			return x - y;
		}));
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});