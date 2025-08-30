<?php
/**
 * LeetCode Problem: 714. Best Time to Buy and Sell Stock with Transaction Fee
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Compute the maximum profit from stock trading with a transaction fee
     * 
     * @param int[] $prices
     * @param int   $fee
     * @return int
     */
    function maxProfit(array $prices, int $fee): int
    {
        $n = count($prices);
        if ($n === 0) return 0;

        $cash = 0;            // max profit when NOT holding a stock at the end of day i
        $hold = -$prices[0];  // max profit when holding ONE share at the end of day i

        for ($i = 1; $i < $n; $i++) {
            $prevCash = $cash;
            $cash = max($cash, $hold + $prices[$i] - $fee);
            $hold = max($hold, $prevCash - $prices[$i]);
        }

        return $cash;
    }
}
