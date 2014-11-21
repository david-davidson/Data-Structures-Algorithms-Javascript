'use strict';

var merge = require('../utilities/merge'),
    mergeSort;

/**
 * Accepts an array of numbers and sorts them using top-down (recursive)
 * implementation of mergesort
 *
 * How it works: `merge` is a simple function that accepts previously
 * sorted arrays and merges them; it's simple and fast. `Mergesort`
 * recursively calls itself on its left and right halves until we reach
 * the base case--an array of length 1 or less. Then it works back out, merging
 * sorted array segments into larger sorted segments. On an array of length 8,
 * it would sort 0 and 1, then 2 and 3, then 0 through 3, then 4 and 5, then 6
 * and 7, then 4 through 7; finally, it would merge the two sorted halves.
 *
 * Performance: O(N(lg(N)))--on large arrays, the first of the fast algorithms
 *
 * @param {Array} numbers   The array to be sorted
 * @returns {Array}         The sorted array
 */

mergeSort = function(numbers) {
    if (numbers.length < 2) {
        return numbers;
    }

    var middle = Math.floor(numbers.length / 2),
        left = numbers.slice(0, middle),
        right = numbers.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

module.exports = mergeSort;