/**
 * LeetCode Problem: 494. Target Sum
 * https://leetcode.com/problems/target-sum/
 *
 * Solution by Takanori Kaitani
 */
function findTargetSumWays(nums: number[], target: number): number {
    let counts = new Map<number, number>(); // sum => count
    counts.set(0, 1);

    for (const num of nums) {
        const nextCounts = new Map<number, number>(); // next sum => count
        for (const [sum, count] of counts) {
            nextCounts.set(sum + num, (nextCounts.get(sum + num) ?? 0) + count);
            nextCounts.set(sum - num, (nextCounts.get(sum - num) ?? 0) + count);
        }

        counts = nextCounts;
    }

    return counts.get(target) ?? 0;
}

/**
 * # Approach
 * - Track possible sums and their frequencies in a map, updating each step by branching ±num
 *
 * # Complexity
 * - Time:  O(n * S) where S is the sum of all elements in nums
 * - Space: O(S)
 */
