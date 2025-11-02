/**
 * LeetCode Problem: 198. House Robber
 * https://leetcode.com/problems/house-robber/
 *
 * Solution by Takanori Kaitani
 */
function rob(nums: number[]): number {
    // dp
    let robPrev = 0;
    let skipPrev = 0;

    for (const n of nums) {
        [robPrev, skipPrev] = [
            skipPrev + n,
            Math.max(robPrev, skipPrev)
        ];
    }

    return Math.max(robPrev, skipPrev);
};

/**
 * # Approach
 * - Use dynamic Programming to maximize the total money that can be robbed
 *   without robbing two adjacent houses.
 * - Maintain two states;
 *   - `robPrev`:  maximum money if the previous house was robbed.
 *   - `skipPrev`: maximum money if the previous house was slipped.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
