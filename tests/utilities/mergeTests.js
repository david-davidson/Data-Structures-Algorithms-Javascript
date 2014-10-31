'use strict';

var merge = require('../../lib/utilities/merge'),
	expect = require('chai').expect;

describe('Utilities: `merge`', function() {
	it('merges sorted arrays in order', function() {
		expect(merge([ 0, 5, 10 ],[ 1, 3, 12 ])).to.eql([ 0, 1, 3, 5, 10, 12 ]);
	});

	it('can handle arrays of differing length', function() {
		expect(merge([ 0, 4, 11, 55, 100 ], [ 1, 2, 12 ])).to.eql([ 0, 1, 2, 4, 11, 12, 55, 100 ]);
		expect(merge([ 1, 2, 12 ],[ 0, 4, 11, 55, 100 ])).to.eql([ 0, 1, 2, 4, 11, 12, 55, 100 ]);
	});
});