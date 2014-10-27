'use strict';

var Thing,
	checkGlobalScope;

Thing = (function() {
	return function() {

		var privateVar = 'default secret value',
			isValid = function(newVar) {
				// Replace with real validation logic, but for now...
				return true;
			};

		this.getPrivateVar = function() {
			return privateVar;
		};

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
checkGlobalScope = function() {
	return privateVar; // jshint ignore:line
};

// Export for testing
exports.Thing = Thing;
exports.checkGlobalScope = checkGlobalScope;