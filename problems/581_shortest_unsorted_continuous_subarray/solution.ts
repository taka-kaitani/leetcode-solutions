/**
 * LeetCode Problem: 581. Shortest Unsorted Continuous Subarray
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 *
 * Solution by Takanori Kaitani
 */
function findUnsortedSubarray(nums: number[]): number {
    const n = nums.length;

    let max = -Infinity;
    let right = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] < max) right = i;
        else max = nums[i];
    }

    if (right === 0) return 0;

    let min = Infinity;
    let left = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > min) left = i;
        else min = nums[i];
    }

    return right - left + 1;
}

/**
 * # Approach
 * - 2 scans:
 *   - Left -> right:
 *     - Maintain max
 *     - When nums[i] < max, update `right = i`
 *   - Right -> left:
 *     - Maintain min
 *     - When nums[i] > min, update `left = i`
 * - `right` and `left` are the boundaries of the sorted subarray.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
