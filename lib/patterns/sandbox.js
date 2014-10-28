'use strict';

/**
 * An alternative to traditional namespacing: the sandbox pattern
 *
 * 	1. Define a single global constructor (here, `Sandbox`)
 * 	2. Save, as properties on the function, the methods you'd like to isolate
 *	3. Invoke `new Sandbox` (note: without saving the result to a variable), 
 *	  and pass in:
 *		* The string names of the methods you want to use, and
 *		* A callback function that expects `box` (which exposes the methods
 *		  you want to use) and provides the isolated sandbox environment
 */

var Sandbox = function() {
	
	/**
	 * Save 1.) an array of requested modules and 2.) the callback
	 */

	var modules = Array.prototype.slice.call(arguments),
		callback = modules.pop(),
		key;

	/**
	 * If the user hasn't requested any modules in particular, make all the
	 * modules available
	 */

	if (modules.length === 0) {
		for (key in Sandbox.modules) {
			modules.push(key); // Just the string name, not the function (yet)
		}
	}

	/**
	 * Check each requested module against the Sandbox.modules object: if it's
	 * a key there, invoke the corresponding value ( = one of your sandboxed
	 * functions) with the argument `this`. (The functions operate on `this`
	 * directly.)
	 */

	modules.forEach(function(module) {
		if (Sandbox.modules.hasOwnProperty(module)) {
			Sandbox.modules[module](this);
		}
	}, this);

	/**
	 * Now that `this` has been built up with the requested methods, execute
	 * the sandboxed code and pass it `this`
	 */

	callback(this);
};

Sandbox.modules = {};

/**
 * Some dummy methods
 */

Sandbox.modules.events = function(box) {
	
	box.addListener = function() {
		// ...
		return 'Just added an event listener';
	};

	box.removeListener = function() {
		// ...
		return 'Just removed an event listener';
	};

};

Sandbox.modules.dom = function(box) {
	
	box.addDomElement = function() {
		// ...
		return 'Just added a DOM element';
	};

	box.removeDomElement = function() {
		// ...
		return 'Just removed a DOM element';
	};

};

module.exports = Sandbox;