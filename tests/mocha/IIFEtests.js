var expect = require('chai').expect;
var IIFE = require('../../scopes/IIFE').privateThing;
var checkGlobalScope = require('../../scopes/IIFE').checkGlobalScope;

describe('IIFE', function() {
	it('Allows (gated) read access to a private variable', function() {
		expect(IIFE.getPrivateVar()).to.equal('default secret value');
	});
	it('Allows (gated) write access to that private variable', function() {
		expect(IIFE.setPrivateVar('new secret value'), function() {
			expect(IIFE.getPrivateVar()).to.equal('new secret value');
		});
	});
	it('Hides the private value', function() {
		expect(checkGlobalScope).to.throw(Error);
	});
});