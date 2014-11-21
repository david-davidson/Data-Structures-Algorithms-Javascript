'use strict';

/**
 * Accepts a function and 0 or more arguments to partially apply (from left
 * to right); returns a new function with the arguments already applied
 *
 * @param {Function} func     The function we want to curry
 * @returns {Function}        The curried function
 */

module.exports = function(func) {
	// Note that we expect only one parameter: the function. After all, we're not sure how many values (if any) to partially apply.

	var slice = Array.prototype.slice,
		storedArgs = slice.call(arguments, 1); // Stores everything BUT the first arg (the name of the function) in an array that's visible to the following function:

	return function() {
		var newArgs = slice.call(arguments), // Stores all the new args, including the first, since the curried function expects nothing but data
			allArgs = storedArgs.concat(newArgs); // Array of all the arguments, ever

		return func.apply(null, allArgs); // <== Magic!
	};
};