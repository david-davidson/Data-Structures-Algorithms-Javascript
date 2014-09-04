'use strict';

/**
 * @module BST
 *
 * Exposes an interface for building and traversing binary search trees
 *
 * @constructor
 */

var BST = function() {
	this.Node = function(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	};
	this.root = null;
};

/**
 * Inserts a new node into our binary search tree
 *
 * @param data: the value we'd like to add
 */

BST.prototype.insert = function(data) {
	var newNode = new this.Node(data, null, null);
	if (this.root === null) {
		this.root = newNode;
	} else {
		var current = this.root,
			parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
					parent.left = newNode;
					break;
				}
			} else {
				current = current.right;
				if (current === null) {
					parent.right = newNode;
					break;
				}
			}
		}
	}
};

/**
 * Traverses the tree from least to greatest value
 *
 * @param node: where we'd like to start
 */

BST.prototype.traverseInOrder = function(node) {
	var results = [];
	var recurse = function(node) {
		if (node !== null) {
			recurse(node.left);
			results.push(node.data);
			recurse(node.right);
		}
	};
	recurse(node);
	return results;
};

/**
 * Traverses the tree from the root through the left subtrees and then right subtrees
 *
 * @param node: where we'd like to start
 */

BST.prototype.traversePreOrder = function(node) {
	var results = [];
	var recurse = function(node) {
		if (node !== null) {
			results.push(node.data);
			recurse(node.left);
			recurse(node.right);
		}
	};
	recurse(node);
	return results;
};

/**
 * Traverses up the left subtree, up the right subtree, and then to root
 *
 * @param node: where we'd like to start
 */

BST.prototype.traversePostOrder = function(node) {
	var results = [];
	var recurse = function(node) {
		if (node !== null) {
			recurse(node.left);
			recurse(node.right);
			results.push(node.data);
		}
	};
	recurse(node);
	return results;
};

module.exports = BST;