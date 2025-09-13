/**
 * LeetCode Problem: 643. Maximum Average Subarray I
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * Solution by Takanori Kaitani
 */
function findMaxAverage(nums: number[], k: number): number {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    // Slide the window
    const n = nums.length;
    let maxSum = sum;
    for (let i = k; i < n; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};
