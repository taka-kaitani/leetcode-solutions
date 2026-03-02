/**
 * LeetCode Problem: 448. Find All Numbers Disappeared in an Array
 * https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 *
 * Solution by Takanori Kaitani
 */
function findDisappearedNumbers(nums: number[]): number[] {
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;
        if (nums[idx] > 0) nums[idx] *= -1; // negate it as visited
    }

    return nums
        .map((v, i) => v > 0 ? i + 1 : 0)
        .filter((v, i) => v > 0)
    ;
}

/**
 * # Approach
 * - Update the original array when visited.
 * - 1. For each value in nums:
 *   - idx = Math.abs(nums[i]) - 1
 *   - Negate nums[idx] to mark visited.
 * - 2. For each values in nums:
 *   - If it is positive, update it `i + 1` as unvisited number.
 *   - Otherwise, update it `0` as visited.
 * - 3. Return only unvisited numbers.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra
 */
