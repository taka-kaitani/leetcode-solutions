/**
 * LeetCode Problem: 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Solution by Takanori Kaitani
 */
function maxSubArray(nums: number[]): number {
    let current = nums[0];
    let best = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // best subarray ending at i: either start new at nums[i], or extend previous
        current = Math.max(nums[i], current + nums[i]);
        best = Math.max(best, current);
    }

    return best;
}

/**
 * # Approach
 * - Kadane's algorithm (DP in one pass).
 * - Maintain:
 *   - `current`: maximum subarray sum that must end at the current index.
 *   - `best`: maximum subarray sum seen so far.
 * - For each element, decide whether to:
 *   - start a new subarray at this element, or
 *   - extend the previous subarray.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
