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
        const [lt, gt] = ThreeWayPartition(nums, low, high);

        if      (target < lt) high = lt;
        else if (target > gt) low = gt + 1;
        else return nums[target];
    }
}

function ThreeWayPartition(nums: number[], low: number, high: number): number[] {
    const pivot = nums[low];
    let lt = low;  // nums[lt] < pivot
    let i  = low;  // nums[i]  = pivot
    let gt = high; // nums[gt] > pivot
    while (i < gt) {
        if (nums[i] < pivot) {
            [nums[lt], nums[i]] = [nums[i], nums[lt]];
            lt++;
            i++;
        } else if (nums[i] > pivot) {
            gt--;
            [nums[i], nums[gt]] = [nums[gt], nums[i]];
        } else {
            i++;
        }
    }

    return [lt, --gt];
}
