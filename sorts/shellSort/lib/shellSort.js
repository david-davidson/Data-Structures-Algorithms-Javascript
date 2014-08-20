var exchange = require('../../../utilities/exchange');

/**
 * This function accepts an array of numbers and sorts them using shellsort.
 *
 * How it works:
 *
 * Insertion sort's strength is its speed (linear) with sorted
 * arrays; its weakness is that, when it rearranges elements, it does so in
 * increments of one. Shellsort partially sorts the array ahead of time, in a
 * way that allows the exchange of array entries that are far apart.

 * It starts with an int h, and sorts the array made up of every h-th element.
 * Then it moves to a smaller h and sorts again. When h is 1, we finish sorting.
 * (In fact, the h = 1 sort is normal insertion sort, and works on its own.)
 *
 * There's no definitive best increment sequence for h, though Knuth's (3h + 1)
 * performs quite well in most cases.
 *
 * @param {Array} numbers
 * @return {Array} the sorted array
 */

var shellSort = function(numbers) {
	// Generate number of h sorts using Knuth sequence: 1, 4, 13, 40, 121 ...
	var h = 1;
	while (h < numbers.length / 3) {
		h = (3 * h) + 1;
	}

	while (h >= 1) {
		for (var i = h; i < numbers.length; i++) {
			// Insert numbers[i] among numbers[i - h], numbers[i - 2h], etc.
			for (var j = i; j >= h && numbers[j] < numbers[j - h]; j -= h) {
				exchange(numbers, j, j - h);
			}
		}
		h = --h / 3; // Important to deincrement first
	}
	return numbers;
};

exports.shellSort = shellSort;