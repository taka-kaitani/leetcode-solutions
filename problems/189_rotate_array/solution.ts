/**
 * LeetCode Problem: 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 *
 * Solution by Takanori Kaitani
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k %= n;
    if (k === 0) return;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
}

function reverse(nums: number[], l: number, r: number): void {
    while (l < r) {
        const tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
        l++;
        r--;
    }
}

/**
 * # Approach
 * - Rotate right by k using three reversals:
 *   1) Reverse the whole array.
 *   2) Reverse the first k elements.
 *   3) Reverse the remaining n-k elements.
 * - This places every element into its rotated position in-place.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
