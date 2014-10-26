'use strict';

/**
 * Accepts either one or two arguments; if two, returns the sum; if one, returns
 * the partial application as a new function
 */

// var add = function(x, y) {
// 	if (typeof y === 'undefined') { // If one param, partial application...
// 		return function(y) { // Returns a function, not a value
// 			return x + y; // Note the closure over x!
// 		};
// 	}
// 	return x + y; // ... else full (normal) application
// };

// add(1, 2); // 3
// var addOne = add(1); // typeof addOne: function
// addOne(2); // 3

var add = function(x, y) {
	return x + y;
};


// console.log(curryMe(1, 2));
// var add10 = curryMe(10);
// console.log(add10(1));

var tax = function(rate, amount) {
	return amount + (rate * amount);
};

/**
 * Accepts a function;
 */

var curry = function(func) {
	// Note that we expect only one parameter: the function. After all, we're not sure how many values (if any) to partially apply.
	// So how do we access other arguments? `arguments`, never actually named as a param--it's an object that holds exactly what you think :)
	// One more thing: since JS functions are objects with methods, we can use Function.prototype.call (accepts single arg) and Function.prototype.apply (accepts array of args):
	// 		e.g., tax.apply(null, [.1, 10]); // (object to bind to `this`, args)

	var slice = Array.prototype.slice,
		storedArgs = slice.call(arguments, 1); // Stores everything BUT the first arg (the name of the function) in an array that's visible to the following function:

	return function() {
		var newArgs = slice.call(arguments), // Stores all the new args, including the first, since the curried function expects nothing but data
			allArgs = storedArgs.concat(newArgs); // Array of all the arguments, ever

		return func.apply(null, allArgs); // <== Magic!
	};
};

tax(.0888, 10); // 10.888
var waTax = curry(tax, .0888);
waTax(10); // 10.888

// Or just use Underscore:

var tax = function(rate, amount) {
	return amount + (rate * amount);
};




var waTax = _.partial(tax, .0888);
waTax(10); // 10.888









// console.log('before currying: ' + add(1, 2));
// var addOne = curry(add, 1);
// console.log('after currying: ' + addOne(2));

// Some throwaway function
// function add(w, x, y, z) {
// 	return w + x + y + z;
// }

function afterTax(rate, price) {
	return price + (price * rate);
}

// console.log('tax: ' + afterTax(.1, 10));
// var waTax = curry(afterTax, .0888);
// var caTax = curry(afterTax, .0841);
// console.log('WA10: ' + waTax(10));
// console.log('WA20: ' + waTax(20));
// console.log('CA: ' + caTax(10));

// Define and then invoke the new curried function
// var add10 = curry(add, 5, 5);
// console.log('add10 plus 1 plus 1: %d', add10(1, 1));