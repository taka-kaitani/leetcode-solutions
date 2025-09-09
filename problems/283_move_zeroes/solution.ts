/**
 * LeetCode Problem: 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 *
 * Solution by Takanori Kaitani
 */

/**
 * Move all 0's to the end of the input array in-place
 */
function moveZeroes(nums: number[]): void {
    let left = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] !== 0) {
            nums[left] = nums[i];
            left++;
        }
    }

    for (let i = left; i < n; i++) {
        nums[i] = 0;
    }
};