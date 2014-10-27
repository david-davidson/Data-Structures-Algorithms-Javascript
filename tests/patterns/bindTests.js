'use strict';

var bind = require('../../lib/patterns/bind'),
	expect = require('chai').expect,
	myObject,
	myFunction,
	boundFunction;

myObject = {
	name: 'David'
};

myFunction = function() {
	return 'Hi, ' + this.name;
};

describe('A manual implementation of `bind`', function() {
	it('Returns a new function', function() {
		boundFunction = bind(myFunction, myObject);
		expect(typeof boundFunction).to.eql('function');	
	});

	it('Binds `this` to the chosen context', function() {
		expect(boundFunction()).to.eql('Hi, David');
	});
});