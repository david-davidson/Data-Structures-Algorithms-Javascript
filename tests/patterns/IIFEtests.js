'use strict';

var expect = require('chai').expect,
	IIFE = require('../../lib/patterns/IIFE').Thing,
	checkGlobalScope = require('../../lib/patterns/IIFE').checkGlobalScope,
	myIIFE;

describe('An IIFE', function() {

	before(function() {
		myIIFE = new IIFE();
	});

	it('Allows (gated) read access to a private variable', function() {
		expect(myIIFE.getPrivateVar()).to.equal('default secret value');
	});

	it('Allows (gated) write access to that private variable', function() {
		myIIFE.setPrivateVar('new secret value');
		expect(myIIFE.getPrivateVar()).to.equal('new secret value');
	});

	it('Hides the private value', function() {
		expect(checkGlobalScope).to.throw(Error);
	});

});