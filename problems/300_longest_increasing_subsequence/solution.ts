/**
 * LeetCode Problem: 300. Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Solution by Takanori Kaitani
 */
function lengthOfLIS(nums: number[]): number {
    let tails: number[] = [];
    for (const n of nums) {
        if (!tails.length || tails.at(-1)! < n) tails.push(n);
        else tails[upper(tails, n)] = n;
    }

    return tails.length;
};

function upper(tails: number[], target: number): number {
    let left = 0;
    let right = tails.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (tails[mid] >= target) right = mid;
        else left = mid + 1;
    }

    return right;
}

/**
 * # Approach
 * - Use dynamic programming with binary search
 *   to find the length of the Longest Increasing Subsequence (LIS).
 * - Maintain an array `tails`, where `tails[i]` is the smallest possible tail value
 *   of an increasing subsequence of length `i + 1`.
 * - For each element `n` in nums,
 *   - Use binary search to find the index to be replaced with the current elements of `nums`.
 * - return the length of tails as a result.
 *   - If `n` is greater than the last element in `tails`, append it.
 *   - Otherwise, use a binary search to find the first index `i` where `tails[i] >= n`,
 *     and replace it with `n`.
 * - The final length of `trails` represent the LIS length.
 * 
 * # Complexity
 * - Time:  O(n log n)
 * - Space: O(n)
 */
