/**
 * This function accepts an array of one or more numbers and returns
 * their mean.
 *
 * @param {Array} numbers
 * @return {Number} The mean of the array's contents
 */

var mean = function(numbers) {
	var meanSum = 0;
	for (var i = 0; i < numbers.length; i++) {
		meanSum += Number(numbers[i]);
	}
	return (meanSum / numbers.length);
};

/**
 * This function accepts an array of one or more numbers and returns
 * their median: either the "middle" number, or (if the array's length is even)
 * the mean of the middle two.
 *
 * @param {Array} numbers
 * @return {Number} The median of the array's contents
 */

var median = function(numbers) {
	var sortedNumbers = numbers.slice().sort(function(a, b) { 
		return a - b;  // .slice() lets us sort a copy, not the original: no side effects
	});
	if (sortedNumbers.length % 2 !== 0) {
		var middle = (sortedNumbers.length - 1) / 2;
		return sortedNumbers[middle]; 
	} else {
		var lowerMiddle = Math.floor((sortedNumbers.length - 1) / 2);
		var higherMiddle = Math.ceil((sortedNumbers.length - 1) / 2);
		return mean([sortedNumbers[lowerMiddle], sortedNumbers[higherMiddle]]);
	}
};

/**
 * This function accepts an array of one or more numbers and returns
 * their mode, or--if there's more than one mode--all the "winners."
 *
 * @param {Array} numbers
 * @return {Number or String} The mode of the array's contents, or (if there's)
 * no single winner) a string naming all the modes
 */

var mode = function(numbers) {
	var numAppearances = [], winners = [], prevMax = 0;
	for (var i = 0; i < numbers.length; i++) {
		// Increment the count if it's available; otherwise, start a new one
		numAppearances[numbers[i]] = (numAppearances[numbers[i]] || 0) + 1;
		if (numAppearances[numbers[i]] > prevMax) {
			prevMax = numAppearances[numbers[i]];
			winners = []; // Clear previous winner(s)
			winners.push(numbers[i]);
		} else if (numAppearances[numbers[i]] == prevMax) {
			winners.push(numbers[i]); // DON'T clear previous winner(s)
		}
	}
	return winners.length > 1 ? 'It\'s a tie between ' + winners.join(' and ') : winners[0];
};

// For testing
// (Must be above the return statement that checks for empty input!)
exports.mean = mean;
exports.median = median;
exports.mode = mode;

// Start of execution

// Sanitize input
for (var i = 0; i < process.argv.length; i++) {
	if (isNaN(process.argv[i])) { // (Removes "node" and "~/**/numbers.js", too)
		process.argv.splice(i, 1);
		i--; // So that the array doesn't "shift" and hide one argument
	}
}
if (process.argv.length < 1) {
	console.log('Uh oh, you didn\'t give me any numbers!');
	return false;
}

// Now let's do some math!
console.log('mean: ' + mean(process.argv));
console.log('median: ' + median(process.argv));
console.log('mode: ' + mode(process.argv));