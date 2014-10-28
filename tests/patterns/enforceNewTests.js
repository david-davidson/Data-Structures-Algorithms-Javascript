// jshint expr:true
'use strict';

var enforceNew = require('../../lib/patterns/enforceNew'),
	NormalConstructor = enforceNew.NormalConstructor,
	SelfEnforcingConstructor = enforceNew.SelfEnforcingConstructor,
	expect = require('chai').expect,
	myInstance,
	secondInstance;

describe('The self-enforcing constructor', function() {
	
	describe('Default constructor behavior', function() {
		it('Fails without `new`', function() {
			
			myInstance = new NormalConstructor();
			expect(myInstance).to.be.ok;
			expect(myInstance.is).to.eql('Bound to `this`');

			expect(function() {
				myInstance = NormalConstructor(); // jshint ignore:line
			}).to.throw(Error);

		});
	});

	it('Immediately re-calls itself with `new` if `this` isn\'t an instance of the constructor', function() {

		myInstance = SelfEnforcingConstructor(); // jshint ignore:line
		expect(myInstance).to.be.ok;
		expect(myInstance.is).to.eql('Bound to `this`');

	});

	it('Maintains access to the prototype', function() {
		SelfEnforcingConstructor.prototype.newAttr = 'new';
		myInstance = new SelfEnforcingConstructor();
		secondInstance = SelfEnforcingConstructor(); // jshint ignore:line

		expect(myInstance.newAttr).to.eql('new');
		expect(secondInstance.newAttr).to.eql('new');
	});
});