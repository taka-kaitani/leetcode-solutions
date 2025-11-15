/**
 * LeetCode Problem: 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Solution by Takanori Kaitani
 */
function findKthLargest(nums: number[], k: number): number {
    const n = nums.length;
    const target = n - k;
    let low = 0;
    let high = n;
    while (true) {
        const [lt, gt] = threeWayPartition(nums, low, high);
        if      (gt < target) low = gt + 1;
        else if (lt > target) high = lt;
        else return nums[target];
    }
}

function threeWayPartition(nums: number[], low: number, high: number): [number, number] {
    let lt = low, i = low, gt = high - 1;
    const pivot = nums[low];
    // `< pivot` | `== pivot` | `> pivot`
    //           |↑lt      gt↑|
    while (i <= gt) {
        if (nums[i] < pivot) {
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt++;
            i++;
        } else if (nums[i] > pivot) {
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
            gt--;
        } else {
            i++;
        }
    }

    return [lt, gt];
}

/**
 * # Approach
 * - Use the Quickselect algorithm to find the kth largest element.
 * - Convert "kth largest" into "nth smallest" by targeting index (n - k).
 * - Use a Dutch National Flag 3-way partition to split the subarray into:
 *     1. values < pivot
 *     2. values = pivot
 *     3. values > pivot
 * - If the target index lies inside the equal-pivot region, we are done.
 * - Otherwise, recurse only into the necessary partition.
 *
 * # Complexity
 * - Time:  Average O(n), Worst-case O(n²)
 * - Space: O(1) (in-place partitioning)
 */
