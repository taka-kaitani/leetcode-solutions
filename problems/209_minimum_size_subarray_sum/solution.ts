/**
 * LeetCode Problem: 209. Minimum Size Subarray Sum
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 *
 * Solution by Takanori Kaitani
 */
function minSubArrayLen(target: number, nums: number[]): number {
    let sum = 0;
    let minLen = Infinity;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
};

/**
 * # Approach
 * - Use a sliding window to find the minimal-length subarray
 *   whose sum is greater than or equal to `target`.
 * - Expand the right boundary to increase the sum,
 *   and shrink the left boundary whenever possible to minimize the length.
 * - Return 0 if no such subarray exists.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */