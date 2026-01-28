/**
 * LeetCode Problem: 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Solution by Takanori Kaitani
 */
function findKthLargest(nums: number[], k: number): number {
    let left = 0, right = nums.length - 1;
    const target = k - 1; // 0-indexed
    while (true) {
        const [gt, lt] = partition(nums, left, right);
        if      (gt > target) right = gt - 1;
        else if (lt < target) left = lt + 1;

        else return nums[target];
    }
}

/**
 * divide [start..end] into 3 part; [num > pivot][num === pivot][num < pivot]
 * [gt, lt]: boundaries of [num === pivot]
 */
function partition(nums: number[], start: number, end: number): [number, number] {
    const pivot = nums[start];
    let i = start, gt = start, lt = end;

    while (i <= lt) {
        if (nums[i] > pivot) {
            [nums[gt], nums[i]] = [nums[i], nums[gt]];
            gt++;
            i++;
        } else if (nums[i] < pivot) {
            [nums[i], nums[lt]] = [nums[lt], nums[i]];
            lt--;
        } else {
            i++;
        }
    }

    return [gt, lt];
}

/**
 * # Approach
 * - Quickselect with 3-way partition (Dutch National Flag) to find the k-th largest element.
 *   - We want the element that would be at index `target = k - 1` if the array were sorted in descending order.
 *
 * - `partition(nums, start, end)` (3-way):
 *   - Pick a pivot value and rearrange nums[start..end] into:
 *       [ > pivot ][ == pivot ][ < pivot ]
 *   - It returns `[gt, lt]`, the inclusive boundaries of the `== pivot` block.
 *   - Invariants while scanning with pointer `i`:
 *     - nums[start .. gt-1]  > pivot
 *     - nums[gt .. i-1]      == pivot
 *     - nums[i .. lt]        unknown (to be processed)
 *     - nums[lt+1 .. end]    < pivot
 *   - When nums[i] > pivot: swap into the front and advance `gt` and `i`.
 *   - When nums[i] < pivot: swap into the back and decrement `lt` (do not advance `i` because the swapped value is unprocessed).
 *   - When nums[i] == pivot: just advance `i`.
 *
 * - Quickselect loop:
 *   - After partitioning, if `target < gt`, the answer is in the left side → shrink `right`.
 *   - If `target > lt`, the answer is in the right side → grow `left`.
 *   - Otherwise `target` lies in [gt..lt], so `nums[target]` is the k-th largest.
 *
 * # Complexity
 * - Time: Average O(n), worst-case O(n^2) (depends on pivot choice)
 * - Space: O(1) extra (in-place)
 */
