var exchange = require('../../../utilities/exchange');

/**
 * This function accepts an array of numbers and sorts them using the basic 
 * selection-sort algorithm.
 * 
 * How it works: Find the smallest item in the array; insert it as the first 
 * entry; find the second item; insert it as the second entry, etc.
 *
 * Performance: On^2, sorts in place.
 *
 * @param {Array} numbers
 * @return {Array} the sorted array
 */

var selectionSort = function(numbers) {
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

exports.selectionSort = selectionSort;