/**
 * LeetCode Problem: 746. Min Cost Climbing Stairs
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 *
 * Solution by Takanori Kaitani
 */

/**
 * Compute the minimum cost to reach the top of the floor.
 * 
 * @param cost cost[i]: cost of i-th step on a staircase
 * @returns    minimum cost
 */
function minCostClimbingStairs(cost: number[]): number {
    let prev1: number = 0
    let prev2: number = 0

    for (const val of cost) {
        const curr = Math.min(prev2, prev1) + val;
        prev2 = prev1;
        prev1 = curr;
    }

    return Math.min(prev2, prev1);
};
