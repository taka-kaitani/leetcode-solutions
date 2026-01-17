/**
 * LeetCode Problem: 167. Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii---input-array-is-sorted/
 *
 * Solution by Takanori Kaitani
 */
function twoSum(numbers: number[], target: number): number[] {
    const n = numbers.length;
    let left = 0;
    let right = n - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) return [left + 1, right + 1];

        // Binary search
        if (sum > target) right--;
        else              left++;
    }

    return [];
}

/**
 * # Approach
 * - Two pointers on a sorted array.
 * - Start with `left = 0`, `right = n - 1`.
 * - While `left < right`:
 *   - Let `sum = numbers[left] + numbers[right]`.
 *   - If `sum` is too large, move `right` left (to decrease the sum).
 *   - If `sum` is too small, move `left` right (to increase the sum).
 * - Return 1-based indices when `sum === target`.
 *
 * # Complexity
 * - Time:  O(n) (each pointer moves at most n times)
 * - Space: O(1)
 */
