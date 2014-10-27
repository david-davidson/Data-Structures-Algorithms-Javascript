'use strict';

var naiveCurry = require('../../lib/patterns/naiveCurry'),
	expect = require('chai').expect,
	addTen;

describe('A naive implementation of curried `add`', function() {
	it('When given two arguments, adds them', function() {
		expect(naiveCurry(1, 2)).to.eql(3);
	});

	it('When given one arg, returns a curried function', function() {
		addTen = naiveCurry(10);
		expect(typeof addTen).to.eql('function');
		expect(addTen(10)).to.eql(20);
	});
});