'use strict';

module.exports = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (isNaN(array[i])) { // (Removes "node" and the file path, too)
			array.splice(i, 1);
			i--; // So that the array doesn't "shift" and hide one argument
		}
	}
	array = array.map(Number);
	if (array.length < 1) {
		console.log('Uh oh, you didn\'t give me any numbers!');
		return false;
	} else {
		return true;
	}
};