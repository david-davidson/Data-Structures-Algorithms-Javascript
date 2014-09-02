'use strict';

module.exports = function(array, i, j) {
	var t = array[i];
	array[i] = array[j];
	array[j] = t;
};