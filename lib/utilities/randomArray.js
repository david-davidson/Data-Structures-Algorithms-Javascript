'use strict';

module.exports = function(length) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array[i] = Math.floor(Math.random() * (length + 1));
	}
	return array;
};