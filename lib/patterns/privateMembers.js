'use strict';

var hasSecrets,
	checkGlobalScope;

hasSecrets = (function() {

	var privatePrimitive = 'a string',
		privateObject,
		isValid;

	privateObject = {
		type: 'object',
		characteristics: 'secret'
	};

	isValid = function() {
		// Would contain real validation logic, but for our purposes...
		return true;
	};

	return {
		seePrimitive: function() {
			return privatePrimitive;
		},

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