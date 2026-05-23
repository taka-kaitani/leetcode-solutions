/**
 * LeetCode Problem: 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 * https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 *
 * Solution by Takanori Kaitani
 */
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    // sliding window
    const targetSum = k * threshold;
    let sum = 0;
    for (let i = 0; i < k; i++) sum += arr[i];

    let count = 0;
    if (sum >= targetSum) count++;

    for (let i = k; i < arr.length; i++) {
        sum = sum + arr[i] - arr[i - k];
        if (sum >= targetSum) count++;
    }

    return count;
}

/**
 * # Approach
 * - Use a sliding window approach to count the number of subarray whose size === k and average >= threshold.
 * - Maintain
 *   - sum: window sum compared with targetSum (= k * threshold)
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) extra
 */
