'use strict';

var hasSecrets,
	checkGlobalScope;

/**
 * Uses closures to build an object with private data and privileged methods
 */

hasSecrets = (function() {

	var privatePrimitive = 'a string',
		privateObject,
		isValid;

	privateObject = {
		type: 'object',
		characteristics: 'secret'
	};

	// A dummy validator: for our purposes, simply green-lights everything
	isValid = function() {
		return true;
	};

	return {
		
		// Privileged read access
		seePrimitive: function() {
			return privatePrimitive;
		},

		// Privileged write access, with forced validation
		updatePrimitive: function(newSecret) {
			if (isValid(newSecret)) {
				privatePrimitive = newSecret;
			}
		},

		// Unsafe: passes by reference, lets outside world modify
		seeObjectNaive: function() {
			return privateObject;
		},

		// Safe: passes new object
		seeObjectSecure: function() {
			return {
				type: privateObject.type,
				characteristics: privateObject.characteristics
			};
		}
	};
}());

checkGlobalScope = function() {
	return privatePrimitive || privateObject; // jshint ignore:line
};

exports.hasSecrets = hasSecrets;
exports.checkGlobalScope = checkGlobalScope;