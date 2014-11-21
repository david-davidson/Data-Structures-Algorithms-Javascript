'use strict';

var exchange = require('../utilities/exchange');

/**
 * Accepts an array of numbers and sorts them using the basic
 * selection-sort algorithm
 *
 * How it works: Find the smallest item in the array; insert it as the first
 * entry; find the second item; insert it as the second entry, etc.
 *
 * Performance: O(N^2), sorts in place.
 *
 * @param {Array} numbers		The array to be sorted
 * @returns {Array} 				The sorted array
 */

module.exports = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		var min = i;
		// Check the rest of the array: is anything smaller?
		for (var j = i + 1; j < numbers.length; j++) {
			if (numbers[j] < numbers[min]) {
				min = j;
			}
		}
		// If the minimum *isn't* i, swap the two
		if (i !== min) {
			exchange(numbers, i, min);
		}
	}
	return numbers;
};