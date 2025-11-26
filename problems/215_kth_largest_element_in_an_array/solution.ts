/**
 * LeetCode Problem: 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Solution by Takanori Kaitani
 */
function findKthLargest(nums: number[], k: number): number {
    const target = k - 1;
    let left = 0;
    let right = nums.length;

    while (true) {
        const [gt, lt] = threeWayDescPartition(nums, left, right);
        if (target < gt)     right = gt;
        else if (lt < target) left = lt + 1;
        else return nums[target];
    }
}

/**
 * Three way partition (Dutch Flag Partition) for descending order.
 * 
 * It partitions nums[left..right-1] into:
 *   1. nums[left .. gt-1]    > pivot
 *   2. nums[gt   .. lt]      == pivot
 *   3. nums[lt+1 .. right-1] < pivot
 */
function threeWayDescPartition(nums: number[], left: number, right: number): [number, number] {
    let gt = left, i = left, lt = right - 1;
    const pivot = nums[left];

    while (i <= lt) {
        if (nums[i] > pivot) {
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            i++;
            gt++;
        } else if (nums[i] === pivot) {
            i++;
        } else {
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt--;
        }
    }

    return [gt, lt];
}

/**
 * # Approach
 * - Use Quickselect with a three-way (Dutch National Flag) partition to find
 *   the kth largest element in-place.
 *
 * - We work with a target index `target = k - 1`, which corresponds to the
 *   kth largest element if the array were sorted in descending order.
 *
 * - The helper `threeWayDescPartition(nums, left, right)` chooses a pivot and
 *   partitions the subarray `nums[left..right-1]` into three regions:
 *   1. Elements greater than the pivot.
 *   2. Elements equal to the pivot.
 *   3. Elements less than the pivot.
 *   It returns `[gt, lt]`, the start and end indices of the "equal" region.
 *
 * - After partitioning:
 *   - If `target < gt`, the kth largest lies in the "greater than pivot" part.
 *   - If `target > lt`, it lies in the "less than pivot" part.
 *   - Otherwise, the target index lies inside the equal region, and any
 *     element there is the answer.
 *
 * # Complexity
 * - Let n be the length of `nums`.
 * - Average Time: O(n)  (Quickselect expected complexity)
 * - Worst-case Time: O(n^2)  (when pivots are consistently poor)
 * - Space: O(1) extra space (in-place)
 */
