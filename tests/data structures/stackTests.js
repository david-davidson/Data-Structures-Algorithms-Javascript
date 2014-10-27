'use strict';

var Stack = require('../../lib/data structures/stack'),
	expect = require('chai').expect,
	stack;

describe('A stack', function() {

	before(function() {
		stack = new Stack();
	});

	it('Instantiates a new stack', function() {
		expect(stack).to.be.an.instanceof(Stack);
	});

	it('Has a data store', function() {
		expect(stack).to.have.property('dataStore');
	});

	it('Can push', function() {
		stack.push(1);
		stack.push(2);
		expect(stack.isEmpty()).to.eql(false);
	});

	it('Can peek', function() {
		expect(stack.peek()).to.eql(2);
	});

	it('Can pop, LIFO', function() {
		expect(stack.pop()).to.eql(2);
		expect(stack.pop()).to.eql(1);
	});
	
});