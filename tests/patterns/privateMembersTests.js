'use strict';

var privateMembers = require('../../lib/patterns/privateMembers'),
	hasSecrets = privateMembers.hasSecrets,
	Mammal = privateMembers.Mammal,
	checkGlobalScope = privateMembers.checkGlobalScope,
	expect = require('chai').expect;

describe('Private properties and methods', function() {
	it('Hide data from the global scope', function() {
		expect(checkGlobalScope).to.throw(Error);
	});

	it('Allow privileged read access to private properties', function() {
		expect(hasSecrets.seePrimitive()).to.eql('Esse est percipi');
	});

	it('Allow privileged write access to private properties', function() {
		hasSecrets.updatePrimitive('something new');
		expect(hasSecrets.seePrimitive()).to.eql('something new');
	});

	it('Can be added directly to a prototype', function() {
		var cat = new Mammal('cat');
		expect(cat.getKingdom()).to.eql('animal'); // Method defined on the proto
		expect(typeof cat.kingdom).to.eql('undefined');
	});

	describe('Vulnerability: returning private objects directly (by reference)', function() {
		it('Lets the outside world modify them', function() {
			var outsideWorld,
				anotherInstance;

			outsideWorld = hasSecrets.seeObjectNaive();
			expect(outsideWorld.characteristics).to.eql('secret');
			outsideWorld.characteristics = 'not so secret anymore!';

			anotherInstance = hasSecrets.seeObjectNaive();
			expect(anotherInstance.characteristics).to.eql('not so secret anymore!');
			outsideWorld.characteristics = 'secret';
		});
	});

	describe('Solution: pass back a brand-new object', function() {
		it('Protects the private data', function() {
			var outsideWorld,
				anotherInstance;

			outsideWorld = hasSecrets.seeObjectSecure();
			expect(outsideWorld.characteristics).to.eql('secret');
			outsideWorld.characteristics = 'not so secret anymore!';

			anotherInstance = hasSecrets.seeObjectSecure();
			expect(anotherInstance.characteristics).to.eql('secret');
		});
	});
});