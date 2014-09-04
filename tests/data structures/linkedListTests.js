'use strict';

var LinkedList = require('../../lib/data structures/linkedList');
var expect = require('chai').expect;

describe('Linked list', function() {
	var linkedList;
	before(function() {
		linkedList = new LinkedList();
	});

	it('Instantiates a new linked list', function() {
		expect(linkedList).to.be.an.instanceof(LinkedList);
	});

	it('Allows me to insert new nodes', function() {
		linkedList.insert('one', 'head');
		linkedList.insert('two', 'one');
		expect(linkedList.seeAll()).to.eql(['one', 'two']);
	});

	it('Allows me to find a node', function() {
		expect(linkedList.find('two').element).to.eql('two');
	});

	it('Allows me to delete a note', function() {
		linkedList.remove('two');
		expect(linkedList.seeAll()).to.eql(['one']);
	});
});