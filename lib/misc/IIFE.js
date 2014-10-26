'use strict';

/*
Suppose you have an object with a sensitive property; you want to validate
any attempt to reset it. Make that property an inner var in an IIFE,
and write functions to get and set it--that way, you can force the set()
function to validate.

The inner var is inaccessible without those methods, and it persists even after
changes. Yeah JavaScript!
*/

var Thing = (function() {
	return function() {
		var privateVar = 'default secret value';
		this.getPrivateVar = function() {
			return privateVar;
		};
		function isValid(newVar) {
			// Replace with real validation logic, but for now...
			return true;
		}
		this.setPrivateVar = function(newVar) {
			if (isValid(newVar)) {
				privateVar = newVar;
			}
		};
		// We can even do Object.preventExtensions(this);
	};
}());

// For testing: make sure privateVar doesn't exist in the global scope
// Should throw an error
var checkGlobalScope = function() {
	return privateVar; // jshint ignore:line
};

var privateThing = new Thing();

// Export for testing
exports.privateThing = privateThing;
exports.checkGlobalScope = checkGlobalScope;