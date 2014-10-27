'use strict';

var curry = require('../../lib/patterns/curry'),
	expect = require('chai').expect,
	tax,
	waTax,
	addFour,
	curriedAdd;

tax = function(rate, amount) {
	return amount + (rate * amount);
};

addFour = function(a, b, c, d) {
	return a + b + c + d;
};

describe('The full implementation of curry', function() {
	
	it('Returns a function', function() {
		waTax = curry(tax, 0.0888);
		expect(typeof waTax).to.eql('function');
	});

	it('Can partially apply one argument', function() {
		expect(waTax(10)).to.eql(10.888);
	});

	it('Can partially apply more than one argument', function() {
		curriedAdd = curry(addFour, 1, 2, 3);
		expect(curriedAdd(4)).to.eql(10);
	});

	it('Doesn\'t *need* arguments to partially apply', function() {
		waTax = curry(tax); // No args to partially apply!
		expect(tax(0.0888, 10)).to.eql(10.888);
		expect(waTax(0.0888, 10)).to.eql(10.888);
	});

});