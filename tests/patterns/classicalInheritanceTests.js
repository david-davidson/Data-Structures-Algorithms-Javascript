'use strict';

var inherit = require('../../lib/patterns/classicalInheritance'),
	expect = require('chai').expect,
	Mammal,
	Cat;

Mammal = function() {
	this.parentsOwnProperty = 'Some own property of the parent';
};

Mammal.prototype.getBloodTemp = function() {
	return 'warm';
};

Cat = function(name) {
	this.name = name;
};

Cat.prototype.says = function() {
	return 'meow';
};

describe('The "Holy Grail" inheritance pattern', function() {
	
	var socks;

	before(function() {
		inherit(Cat, Mammal);
		socks = new Cat('socks');
	});

	it('Inherits from the parent\'s prototype', function() {
		expect(socks.getBloodTemp()).to.eql('warm');
	});

	it('Overrides the child prototype\'s properties', function() {
		expect(typeof socks.says).to.eql('undefined');
	});

	it('Doesn\'t inherit from the parent\'s own properties', function() {
		expect(typeof socks.parentsOwnProperty).to.eql('undefined');
	});

	it('Doesn\'t allow the child to modify the parent', function() {
		Cat.prototype.getLegCount = function() {
			return 4;
		};
		expect(socks.getLegCount()).to.eql(4);
		expect(typeof Mammal.prototype.getLegCount).to.eql('undefined');
	});

	it('Resets the child\'s `constructor` property', function() {
		expect(socks.constructor).to.eql(Cat);
	});
});