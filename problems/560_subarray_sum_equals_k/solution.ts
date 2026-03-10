/**
 * LeetCode Problem: 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 *
 * Solution by Takanori Kaitani
 */
function subarraySum(nums: number[], k: number): number {
    const prefixSums = new Map<number, number>([[0,1]]); // sum => freq
    let currSum = 0;
    let count = 0;
    for (const num of nums) {
        currSum += num;
        count += prefixSums.get(currSum - k) ?? 0;
        prefixSums.set(currSum, (prefixSums.get(currSum) ?? 0) + 1);
    }

    return count;
}

/**
 * # Approach
 * - Use a prefix sums to calculate subarray sums.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(n) for prefix sum (worst case)
 */
