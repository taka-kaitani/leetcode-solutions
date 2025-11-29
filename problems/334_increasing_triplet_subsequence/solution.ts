/**
 * LeetCode Problem: 334. Increasing Triplet Subsequence
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function increasingTriplet(nums: number[]): boolean {
    let low = Infinity, mid = Infinity;
    for (const n of nums) {
        if (n <= low)      low = n;
        else if (n <= mid) mid = n;
        else               return true;
    }

    return false;
}

/**
 * # Approach
 * - Use a greedy single-pass approach to check if there exists a triplet
 *   of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k].
 *
 * - Maintain two variables while traversing the array:
 *   - `low`: the smallest value seen so far (candidate for nums[i]).
 *   - `mid`: the smallest value seen so far that is strictly greater than `low`
 *     (candidate for nums[j]).
 *   Both are initialized to Infinity.
 *
 * - For each element `n` in `nums`:
 *   - If `n <= low`, update `low = n`. This gives us a better (smaller) start
 *     for a potential triplet.
 *   - Else if `n <= mid`, update `mid = n`. Now we have a better (smaller)
 *     middle value that is still greater than `low`.
 *   - Else (`n > mid`), we have found a value greater than both `low` and `mid`,
 *     so there exists an increasing triplet `low < mid < n`. Return `true`.
 *
 * - If we finish the traversal without returning `true`, no increasing
 *   triplet subsequence exists, so return `false`.
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(1)
 */
