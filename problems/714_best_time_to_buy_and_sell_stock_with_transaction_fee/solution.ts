/**
 * LeetCode Problem: 714. Best Time to Buy and Sell Stock with Transaction Fee
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 *
 * Solution by Takanori Kaitani
 */
function maxProfit(prices: number[], fee: number): number {
    const n = prices.length;
    let hold = -prices[0];
    let release = 0;

    for (let i = 1; i < n; i++) {
        hold    = Math.max(hold, release - prices[i]);
        release = Math.max(release, hold + prices[i] - fee);
    }

    return release;
};
