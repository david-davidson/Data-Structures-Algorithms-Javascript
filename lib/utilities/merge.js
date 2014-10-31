'use strict';

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