'use strict';

/**
 * Self-enforcing constructor pattern
 *
 * Normally, if you invoke a constructor without `new`, the instance is undefined,
 * and its would-be attributes are instead added to the global object. Before a 
 * self-enforcing constructor does anything else, it checks that `this` is an
 * instance of the constructor (i.e., that `new` was used); if not, it simply
 * calls itself again with `new`.
 */

var SelfEnforcingConstructor,
	NormalConstructor;

SelfEnforcingConstructor = function() {
	if (!(this instanceof SelfEnforcingConstructor)) {
		return new SelfEnforcingConstructor();
	}
	this.is = 'Bound to `this`';
};

/**
 * For testing
 */

NormalConstructor = function() {
	this.is = 'Bound to `this`';
};

exports.SelfEnforcingConstructor = SelfEnforcingConstructor;
exports.NormalConstructor = NormalConstructor;