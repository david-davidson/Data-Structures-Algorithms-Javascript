var exchange = require('../utilities/exchange');

/**
 * This function accepts an array of numbers and sorts them using bubble sort.
 *
 * How it works: In the inner loop, move through the array pair by pair, and
 * swap any two that are out of order. Keep doing this over and over (governed
 * by the outer loop) until the array is sorted.
 *
 * Performance: On^2; no real reason to use it.
 *
 * @param {Array} numbers
 * @return {Array} the sorted array
 */

module.exports = function(numbers) {
	for (var i = 0; i < numbers.length; i++) {
		for (var j = 0; j < numbers.length - i; j++) {
			if (numbers[j] > numbers[j + 1]) {
				exchange(numbers, j, j + 1);
			}
		}
	}
	return numbers;
};