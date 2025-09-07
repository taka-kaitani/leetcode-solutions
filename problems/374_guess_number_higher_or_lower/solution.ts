/**
 * LeetCode Problem: 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 *
 * Solution by Takanori Kaitani
 */

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return       -1 if num is higher than the picked number
 *               1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {
    let left: number = 0;
    let right: number = n;

    while (true) {
        let mid: number = Math.floor((left + right) / 2);
        let res: number = guess(mid);

        if (res === 0) return mid;
        if (res > 0) left = mid + 1;
        else        right = mid - 1;
    }
};
