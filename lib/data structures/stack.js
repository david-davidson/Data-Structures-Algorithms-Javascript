'use strict';

/**
 * @module Stack
 * Exposes a stack interface
 *
 * @constructor
 */

var Stack = function() {
	this.dataStore = [];
	this.top = 0;
};

Stack.prototype.push = function(element) {
	this.dataStore[this.top++] = element;
	// this.dataStore.push(element);
};

Stack.prototype.pop = function() {
	return this.dataStore[--this.top];
	// return this.dataStore.pop();
};

Stack.prototype.peek = function() {
	return this.dataStore[this.top - 1];
	// return this.dataStore[this.dataStore.length - 1];
};

Stack.prototype.getLength = function() {
	return this.top;
	// return this.dataStore.length;
};

Stack.prototype.isEmpty = function() {
	return this.dataStore.length === 0;
};

Stack.prototype.seeAll = function() {
	return this.dataStore.join('\n');
};

module.exports = Stack;