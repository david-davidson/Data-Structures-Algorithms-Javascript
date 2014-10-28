'use strict';

var Sandbox = require('../../lib/patterns/sandbox'),
	expect = require('chai').expect;

describe('The sandbox pattern', function() {
	
	it('Protects the global scope', function() {
		
		new Sandbox('events', function(box) {
			
			// Do stuff with the `events` methods
			// Variables defined here won't reach the global scope

			expect(typeof box.addListener).to.eql('function');
			var privateVar = box.addListener();
			expect(privateVar).to.eql('Just added an event listener');
		});

		expect(function() {
			box.addListener(); // jshint ignore:line
		}).to.throw(Error);

		expect(typeof privateVar).to.eql('undefined');

	});

	it('Lets me expose the methods I want and hide the ones I don\'t', function() {
		new Sandbox('dom', function(box) {
			expect(typeof box.addListener).to.eql('undefined');
			expect(typeof box.addDomElement).to.eql('function');
		});
	});

	it('Exposes all its methods if I don\'t ask for any in particular', function() {
		new Sandbox(function(box) {
			expect(typeof box.addListener).to.eql('function');
			expect(typeof box.addDomElement).to.eql('function');
		});
	});

});