'use strict';

var Sandbox = require('../../lib/patterns/sandbox'),
	expect = require('chai').expect,
	utils;

describe('The sandbox pattern', function() {
	
	it('Protects the global scope', function() {
		new Sandbox(function(utils) {
			expect(typeof utils.addListener).to.eql('function');
			var privateVar = utils.addListener();
			expect(privateVar).to.eql('Just added an event listener');
		});

		expect(function() {
			utils.addListener(); // jshint ignore:line
		}).to.throw(Error);

		expect(typeof privateVar).to.eql('undefined');
		expect(typeof utils).to.eql('undefined');
	});

	it('Lets me expose the methods I want and hide the ones I don\'t', function() {
		new Sandbox('dom', function(utils) {
			expect(typeof utils.addListener).to.eql('undefined');
			expect(typeof utils.addDomElement).to.eql('function');
		});
	});

	it('Exposes all its methods if I don\'t ask for any in particular', function() {
		new Sandbox(function(utils) {
			expect(typeof utils.addListener).to.eql('function');
			expect(typeof utils.addDomElement).to.eql('function');
		});
	});

});