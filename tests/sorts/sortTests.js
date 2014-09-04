'use strict';

var expect = require('chai').expect;
var globalRandomArray = require('../../lib/utilities/randomArray')(10000);

var bubbleSort = require('../../lib/sorts/bubbleSort');
var selectionSort = require('../../lib/sorts/selectionSort');
var insertionSort = require('../../lib/sorts/insertionSort');
var shellSort = require('../../lib/sorts/shellSort');

describe('Bubble sort', function() {
	it('Sorts a random array from low to high', function() {
		var randomArray = globalRandomArray.slice();
		var startTime = new Date();
		var sortedArray = bubbleSort(randomArray);
		var endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Insertion sort', function() {
	it('Sorts a random array from low to high', function() {
		var randomArray = globalRandomArray.slice();
		var startTime = new Date();
		var sortedArray = insertionSort(randomArray);
		var endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Selection sort', function() {
	it('Sorts a random array from low to high', function() {
		var randomArray = globalRandomArray.slice();
		var startTime = new Date();
		var sortedArray = selectionSort(randomArray);
		var endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});

describe('Shellsort', function() {
	it('Sorts a random array from low to high', function() {
		var randomArray = globalRandomArray.slice();
		var startTime = new Date();
		var sortedArray = shellSort(randomArray);
		var endTime = new Date();
		expect(sortedArray).to.eql(randomArray.sort());
		console.log('Sorts ' + sortedArray.length + ' numbers in ' +
			(endTime - startTime) + ' ms');
	});
});