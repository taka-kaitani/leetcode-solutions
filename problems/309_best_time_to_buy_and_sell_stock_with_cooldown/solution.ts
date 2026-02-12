/**
 * LeetCode Problem: 309. Best Time to Buy and Sell Stock with Cooldown
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 *
 * Solution by Takanori Kaitani
 */
function maxProfit(prices: number[]): number {
    let hold = -prices[0];
    let sell = 0;
    let cooldown = 0;

    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        const nextHold = Math.max(hold, cooldown - price);
        const nextSell = hold + price;
        cooldown = Math.max(cooldown, sell);
        hold = nextHold;
        sell = nextSell;
    }

    return Math.max(sell, cooldown);
}

/**
 * # Approach
 * - Dynamic programming
 *   - Maintain 3 states:
 *     - `hold`:     profit when holding a stock
 *     - `sell`:     profit just after selling a stock
 *     - `cooldown`: profit when cooldown
 *   - Transition
 *     - hold     -> max(hold, cooldown - price)
 *     - sell     -> hold + price
 *     - cooldown -> max(cooldown, sell)
 * - Return max(sell, cooldown) as the final profit.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
