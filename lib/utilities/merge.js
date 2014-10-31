'use strict';

/**
 * Merges two sorted arrays into a single sorted array
 *
 * @param {Array} left: the first sorted array to merge
 * @param {Array} right: the second
 * @returns {Array} the sorted combination of the two
 */

module.exports = function(left, right) {

	var results = [];

	while (left.length || right.length) {
		if (!right.length || left[0] < right [0]) {
			results.push(left.shift());
		} else {
			results.push(right.shift());
		}
	}

	return results;
};