'use strict';

var exchange = require('../utilities/exchange');

/**
 * Accepts an array of numbers and sorts them using insertion sort
 *
 * How it works: remove each item from the unsorted array elements; insert it in
 * the right spot among the already-sorted elements; continue.
 *
 * Performance: On^2, though it's just N - 1 if the array is already sorted!
 * (In that case, and with small arrays, it's fine--V8 uses it for arrays under
 * 10, I think?) On average, about twice as fast as selection sort.
 *
 * @param {Array} numbers
 * @return {Array} the sorted array
 */

module.exports = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		// Insert numbers[i] among numbers[i - 1], numbers[i - 2], etc.
		for (var j = i; j > 0 && numbers[j] < numbers[j - 1]; j--) {
			// If the array is already sorted, we never enter this inner loop!
			exchange(numbers, j, j-1);
		}
	}
	return numbers;
};