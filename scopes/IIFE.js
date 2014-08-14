/*
REAL-LIFE USE CASE FOR AN IIFE
==============================

Suppose you have an object with a sensitive property; you want to validate 
any attempt to reset it. Well, you make that property an inner var in an IIFE,
and write your own functions to get and set it--that way, you can force the set() 
function to validate.

The inner var is inaccessible without those methods, and it persists even after
changes!
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

var myThing = new Thing();
console.log(myThing.getPrivateVar()); // 'default secret value'

// console.log(privateVar); // <= throws an exception
// console.log(myThing.privateVar); // <= 'undefined'

myThing.setPrivateVar('new secret value');
console.log(myThing.getPrivateVar()); // 'new secret value'