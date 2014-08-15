var exchange = require('../../../utilities/exchange');

/**
 * This function accepts an array of numbers and sorts them using insertion sort.
 *
 * How it works: remove each item from the unsorted array elements; insert it in
 * the right spot among the already-sorted elements; continue.
 *
 * Performance: On^2, though it's just N - 1 if the array is already sorted!
 *
 * @param {Array} numbers
 * @return {Array} the sorted array
 */

var insertionSort = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		// Insert numbers[i] among numbers[i - 1], numbers[i - 2], etc.
		for (var j = i; j > 0 && numbers[j] < numbers[j - 1]; j--) {
			// If the array is already sorted, we never enter this inner loop!
			exchange(numbers, j, j-1);
		}
	}
	return numbers;
};

exports.insertionSort = insertionSort;