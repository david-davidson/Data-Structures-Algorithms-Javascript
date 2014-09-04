'use strict';

var Queue = require('../../lib/data structures/queue');
var expect = require('chai').expect;

describe('Queue', function() {
	var q;
	before(function() {
		q = new Queue();
	});

	it('Instantiates a new queue', function() {
		expect(q).to.be.an.instanceof(Queue);
	});

	it('Has a data store', function() {
		expect(q).to.have.property('dataStore');
	});

	it('Can enqueue', function() {
		q.enqueue(1);
		q.enqueue(2);
		expect(q.isEmpty()).to.eql(false);
	});

	it('Can peek', function() {
		expect(q.peek()).to.eql(1);
	});

	it('Can dequeue, FIFO', function() {
		expect(q.dequeue()).to.eql(1);
		expect(q.dequeue()).to.eql(2);
		expect(q.isEmpty()).to.eql(true);
	});
});