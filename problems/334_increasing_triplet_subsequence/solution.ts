/**
 * LeetCode Problem: 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function increasingTriplet(nums: number[]): boolean {
    let first:  number = Infinity;
    let second: number = Infinity;
    for (const n of nums) {
        if      (n <= first)  first = n;
        else if (n <= second) second = n;
        else    return true;
    }

    return false;
};
