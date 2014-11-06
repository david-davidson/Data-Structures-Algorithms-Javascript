'use strict';

/**
 * This isn't a best practice in JavaScript, but it is interesting: classical
 * inheritance.
 *
 * The function accepts a child and a parent, overrides the child's prototype
 * with the parent's (via a proxy, so that changes to the child's proto don't
 * affect the parent), stores a reference to the parent as `superclass`, and 
 * resets the child's constructor as itself. Note that it doesn't inherit the
 * parent's own properties, only properties on the proto--since that's the
 * place for reusable code, it's not a weakness.
 */

module.exports = function(child, parent) {
	
	/**
	 * Inherit all properties of the parent's prototype, but don't let 
	 * a child's modifications to the prototype modify the parent--
	 * instead, break the direct link with an empty proxy function
	 */

	var Proxy = function() {};
	Proxy.prototype = parent.prototype; // Inherits from parent
	child.prototype = new Proxy(); // Breaks direct link

	/**
	 * Just in case, store a reference to the original parent
	 */
	child.superclass = parent.prototype;

	/**
	 * Reset the (informational, not useful) "constructor" reference
	 */
	child.prototype.constructor = child;
};