module.exports = function() {
	for (var i = 0; i < process.argv.length; i++) {
		if (isNaN(process.argv[i])) { // (Removes "node" and "~/**/numbers.js", too)
			process.argv.splice(i, 1);
			i--; // So that the array doesn't "shift" and hide one argument
		}
	}
	if (process.argv.length < 1) {
		console.log('Uh oh, you didn\'t give me any numbers!');
		return false;
	} else {
		return true;
	}
};