'use strict';

/**
 * Accepts either one or two arguments; if two, returns the sum; if one, returns
 * the partial application as a new function
 */

var curryMe = function(x, y) {
	if (typeof y === 'undefined') {
		// If one param, partial application...
		return function(y) {
			return x + y;
		};
	}
	// ... else full application
	return x + y;
};

// console.log(curryMe(1, 2));
// var add10 = curryMe(10);
// console.log(add10(1));



/**
 * Accepts a function;
 */

var currify = function(func) {
	// "arguments", not named as a parameter, is an object that holds
	// the values you're trying to partially apply.

	var slice = Array.prototype.slice,
		storedArgs = slice.call(arguments, 1);
	console.log('storedArgs: %s', storedArgs); // 5, 5: all args to currify EXCEPT the function

	return function() {
		var newArgs = slice.call(arguments), // Only difference: no 1 as second arg, because we're not trying to trim away a function
			allArgs = storedArgs.concat(newArgs);
			// Note that "arguments" now === those passed into NEW function
			// Also note that storedArgs, func still visible b/c closure
		console.log('newArgs: %s', newArgs); // 1, 1
		console.log('allArgs: %s', allArgs); // 5, 5, 1, 1

		return func.apply(null, allArgs);
	};
};

// Some throwaway function
function add(w, x, y, z) {
	return w + x + y + z;
}

// Define and then invoke the new curried function
var add10 = currify(add, 5, 5);
console.log('add10 plus 1 plus 1: %d', add10(1, 1));