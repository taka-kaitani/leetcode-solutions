/**
 * LeetCode Problem: 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 *
 * Solution by Takanori Kaitani
 */
function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    // Init with i = 0
    let start0 = {
        robPrev: nums[0],
        skipPrev: 0
    };
    let start1 = {
        robPrev: 0,
        skipPrev: 0
    };

    // DP from i = 1
    for (let i = 1; i < nums.length; i++) {
        const n = nums[i];
        start0 = {
            robPrev: start0.skipPrev + n,
            skipPrev: Math.max(start0.robPrev, start0.skipPrev)
        };
        start1 = {
            robPrev: start1.skipPrev + n,
            skipPrev: Math.max(start1.robPrev, start1.skipPrev)
        };
    }

    return Math.max(start0.skipPrev, start1.robPrev);
};

/**
 * # Approach
 * - Use Dynamic Programming to maximize the total money can be robbed
 *   without robbing two adjacent houses, considering the circular arrangement.
 * - The circular constraint means house 0 and house n-1 cannot both be robbed.
 * - Therefor, run two DP scenarios:
 *   - 1. Rob houses in range [0, n-2] (include first, exclude last)
 *   - 2. Rob houses in range [1, n-1] (exclude first, include last)
 *   - `start0` represent states when i=0 is robbed and `start1` is also when i=1.
*   - Each DB keeps two states:
 *     - `robPrev`:  maximum money if the previous house was robbed
 *     - `skipPrev`: maximum money if the previous house was skipped
 * - The final result is the maximum of the two runs.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
