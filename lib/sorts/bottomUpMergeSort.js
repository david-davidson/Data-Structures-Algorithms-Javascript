'use strict';

var merge = require('../utilities/merge');

/**
 * Accepts an array of numbers and sorts them using the bottom-up
 * implemention of mergesort
 *
 * How it works: rather than starting with the whole array and halving
 * until we reach arrays of length 1, we *start* with arrays of length 1
 * and build out from there. This avoids the issue of recursion stack
 * overflows in JavaScript.
 *
 * Performance: O(N(lg(N)))--in theory, exactly the same merges as the
 * top-down version, just in a different order.
 *
 * @param {Array} numbers   The array to be sorted
 * @returns {Array}         The sorted array
 */

module.exports = function(numbers) {
	
	var arraySize,
		index,
		rightIndex,
		middle,
		mergedArraySize,
		merged;

	for (arraySize = 1; arraySize < numbers.length; arraySize *= 2) {
		for (index = 0; index < numbers.length - arraySize; index += arraySize + arraySize) {
			mergedArraySize = arraySize + arraySize;
			rightIndex = index + mergedArraySize;
			middle = Math.floor((index + rightIndex) / 2);

			merged = merge(numbers.slice(index, middle), 
				numbers.slice(middle, rightIndex));

			/**
			 * The native `splice` method adds individual array items, not
			 * entire arrays; how to work around that? Use `apply`, which 
			 * accepts its arguments as an array but applies them individually! 
			 *
			 * By passing in [ index, merged.length ] concated with `merged`,
			 * we replicate the behavior of numbers.splice(index, 
			 * merged.length, merged)... if `splice` accepted an entire array.
			 *
			 * Credit http://stackoverflow.com/questions/1348178/a-better-way-to-splice-an-array-into-an-array-in-javascript
			 */

			Array.prototype.splice.apply(numbers, [ index, merged.length ].concat(merged));
		}
	}
	return numbers;
};