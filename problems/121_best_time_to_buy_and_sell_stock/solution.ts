/**
 * LeetCode Problem: 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * Solution by Takanori Kaitani
 */
function maxProfit(prices: number[]): number {
    let best = 0;
    let min = Infinity;
    for (const price of prices) {
        best = Math.max(best, price - min);
        min = Math.min(min, price);
    }
    return best;
}

/**
 * # Approach
 * - One pass greedy scan.
 * - Track:
 *   - `min`: minimum price seen so far (best day to buy up to today)
 *   - `best`: maximum profit seen so far
 * - For each price:
 *   - Profit if we sell today = price - min
 *   - Update `best`, then update `min` with today's price
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
