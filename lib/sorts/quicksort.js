'use strict';

var exchange = require('../utilities/exchange'),
	partition,
	quickSort;

/**
 * Partitions an array (or array segment) around a pivot point (the
 * center of the unpartitioned array) such that all items before the
 * pivot are less than the pivot value, and all items after the pivot
 * are greater 
 *
 * @param {Array} numbers: the array (or segment) to be partioned
 *	- Note that, rather than returning it, we modify it directly
 * @param {Number} left: the left index within which to partition
 * @param {Number} right: the right index within which to partition
 * @returns {Number} the index from which to start partitioning the
 * 	next segment
 */

partition = function(numbers, left, right) {

    var pivot = numbers[Math.floor((left + right) / 2)],
    	leftPointer = left, // Runs left -> right
    	rightPointer = right; // Runs right -> left

    /**
     * Run pointers inward until they meet
     */
    while (leftPointer <= rightPointer) {

        /**
         * Loop left until we find something larger than the pivot
         */
        while (numbers[leftPointer] < pivot) {
            leftPointer++;
        }

        /**
         * Loop right until we find something smaller than the pivot
         */
        while (numbers[rightPointer] > pivot) {
            rightPointer--;
        }

        /**
         * If the outer loop's condition (leftPointer <= rightPointer)
         * remains the case, the pointers haven't passed each other yet, 
         * so something's out of order: swap the two values, increment 
         * the pointers, and continue the outer loop
         */
        if (leftPointer <= rightPointer) {
            exchange(numbers, leftPointer, rightPointer);
            leftPointer++;
            rightPointer--;
        }
    }

    return leftPointer;
};

/**
 * Sorts an array between left and right indexes by recursively calling
 * `partition` on itself
 *
 * How it works: `partition` does all the heavy lifting (both the
 * comparisons and the array swaps); `quickSort` simply calls
 * `partition` on smaller and smaller segments.
 *
 * Performance: O(N(lg(N)))--widely regarded as the most optimized sort,
 * since (unlike mergesort) it doesn't require extra memory
 *
 * @param {Array} numbers: the array to be sorted
 * @param {Number} left: the left bound of the segment to sort
 * @param {Number} right: the right bound of the segment to sort
 */

quickSort = function(numbers, left, right) {

    var index;

	/**
	 * Defaults: if no left and right args passed in, sort the
	 * whole array
	 */

	if (!left) {
		left = 0;
	}

	if (!right) {
		right = numbers.length - 1;
	}

	/**
	 * Terminating case: don't sort arrays/segments of length 1 or less
	 */
	if (numbers.length < 2) {
		return numbers;
	}

    /**
     * Partition the segment in question, and store the value of the left
     * pointer as `index`
     */
    index = partition(numbers, left, right);

    /**
     * Recursively partition the left and right segments
     */

    if (index - 1 > left) {
        quickSort(numbers, left, index - 1);
    }

    if (index < right) {
        quickSort(numbers, index, right);
    }

    return numbers;
};

module.exports = quickSort;