'use strict';

/**
 * Binds a function to an object such that, within the function, 
 * `this` points to the object
 *
 * @param {Function} func     The function to be bound
 * @param {Object} context    The object to bind to `this`
 * @returns {Function}        The bound function
 */

module.exports = function(func, context) {
	return function() {
		return func.apply(context, arguments); // Note closure over both func and context
	};
};