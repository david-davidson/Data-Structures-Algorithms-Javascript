'use strict';

module.exports = function(array) {
	var results = [],
		i;

	for (i = 0; i < array.length; i++) {
		if (!(isNaN(array[i]))) { // (Removes "node" and the file path, too)
			results.push(array[i]);
		}
	}

	results = results.map(Number);

	if (results.length < 1) {
		console.log('Uh oh, you didn\'t give me any numbers!');
		return false;
	} else {
		return results;
	}
};