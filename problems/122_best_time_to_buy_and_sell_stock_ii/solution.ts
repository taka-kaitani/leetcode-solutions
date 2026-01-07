/**
 * LeetCode Problem: 122. Best Time to Buy and Sell Stock II
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * Solution by Takanori Kaitani
 */
function maxProfit(prices: number[]): number {
    let hold = -prices[0];
    let release = 0;
    for (const p of prices) {
        const prevHold = hold;
        hold = Math.max(prevHold, release - p);
        release = Math.max(release, prevHold + p);
    }

    return release;
}

/**
 * # Approach
 * - Two-state DP in one pass.
 * - Maintain:
 *   - `hold`: max profit after day i if we are holding one stock
 *   - `release`: max profit after day i if we are not holding a stock
 * - Transition for each price p:
 *   - hold    = max(hold, release - p)   // buy today or do nothing
 *   - release = max(release, hold + p)   // sell today or do nothing
 * - Answer is `release` after processing all days.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
