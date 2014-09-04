'use strict';

var BST = require('../../lib/data structures/binarySearchTree');
var expect = require('chai').expect;

describe('Binary search tree', function() {
	var bst;
	before(function() {
		bst = new BST();
	});

	it('Instantiates a new binary search tree', function() {
		expect(bst).to.be.an.instanceof(BST);
	});

	it('Allows me to insert new nodes', function() {
		bst.insert(1);
		expect(bst.root).to.have.property('data');
	});

	it('Supports in-order traversal', function() {
		bst.insert(9);
		bst.insert(2);
		bst.insert(6);
		expect(bst.traverseInOrder(bst.root)).to.eql([1, 2, 6, 9]);
	});

	it('Supports preorder traversal', function() {
		expect(bst.traversePreOrder(bst.root)).to.eql([1, 9, 2, 6]);
	});

	it('Supports postorder traversal', function() {
		expect(bst.traversePostOrder(bst.root)).to.eql([6, 2, 9, 1]);
	});
});