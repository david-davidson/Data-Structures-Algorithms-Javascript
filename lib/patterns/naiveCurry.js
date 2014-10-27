'use strict';

/**
 * Accepts either one or two arguments; if two, returns the sum; if one, returns
 * the partial application as a new function
 *
 * @param {Number} x: the first number to add
 * @param {Number} y: the second number to add
 * @returns {Number} the sum of x and y, OR,
 *	if only x is supplied, a new function that adds it to y
 */

module.exports = function(x, y) {
	if (typeof y === 'undefined') { // If one param, partial application...
		return function(y) {
			return x + y; // Note the closure over x!
		};
	}
	return x + y; // ... else full (normal) application
};