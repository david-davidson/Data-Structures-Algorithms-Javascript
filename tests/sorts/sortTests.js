'use strict';

var expect = require('chai').expect,
	globalRandomArray = require('../../lib/utilities/randomArray')(1000),
	bubbleSort = require('../../lib/sorts/bubbleSort'),
	selectionSort = require('../../lib/sorts/selectionSort'),
	insertionSort = require('../../lib/sorts/insertionSort'),
	shellSort = require('../../lib/sorts/shellSort'),
	randomArray,
	startTime,
	sortedArray,
	endTime;

describe('Bubble sort', function() {
	it('Sorts a random array from low to high', function() {
		randomArray = globalRandomArray.slice();
		startTime = new Date();
		sortedArray = bubbleSort(randomArray);
		endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Insertion sort', function() {
	it('Sorts a random array from low to high', function() {
		randomArray = globalRandomArray.slice();
		startTime = new Date();
		sortedArray = insertionSort(randomArray);
		endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Selection sort', function() {
	it('Sorts a random array from low to high', function() {
		randomArray = globalRandomArray.slice();
		startTime = new Date();
		sortedArray = selectionSort(randomArray);
		endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Shellsort', function() {
	it('Sorts a random array from low to high', function() {
		randomArray = globalRandomArray.slice();
		startTime = new Date();
		sortedArray = shellSort(randomArray);
		endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});