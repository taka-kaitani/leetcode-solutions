/**
 * LeetCode Problem: 153. Find Minimum in Rotated Sorted Array
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 *
 * Solution by Takanori Kaitani
 */
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else                         right = mid;
    }

    return nums[left];
}

/**
 * # Approach
 * - Binary search using the property of a rotated sorted array.
 * - Compare `nums[mid]` with `nums[right]`:
 *   - If `nums[mid] > nums[right]`, the minimum is to the right of `mid`.
 *   - Otherwise, the minimum is at `mid` or to the left, so move `right = mid`.
 * - When `left === right`, it points to the minimum.
 *
 * # Complexity
 * - Time:  O(log n)
 * - Space: O(1)
 */
