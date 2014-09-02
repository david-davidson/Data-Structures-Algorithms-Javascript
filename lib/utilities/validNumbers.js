'use strict';

module.exports = function() {
	for (var i = 0; i < process.argv.length; i++) {
		if (isNaN(process.argv[i])) { // (Removes "node" and the file path, too)
			process.argv.splice(i, 1);
			i--; // So that the array doesn't "shift" and hide one argument
		}
	}
	process.argv = process.argv.map(Number);
	if (process.argv.length < 1) {
		console.log('Uh oh, you didn\'t give me any numbers!');
		return false;
	} else {
		return true;
	}
};