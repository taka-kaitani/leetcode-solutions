<?php
/**
 * LeetCode Problem: 901. Online Stock Span
 * https://leetcode.com/problems/online-stock-span/
 *
 * Solution by Takanori Kaitani
 */
class StockSpanner {
    private array $stack; // Stack of [span, price]; prices are strictly decreasing from bottom to top

    function __construct() {
        $this->stack = [];
    }

    /**
     * Return the stock span for the given day's price.
     * 
     * The span of the stock's price is the maximum number of consecutive days (including today)
     * for which the price was less than or equal to today's price.
     * 
     * @param int $price
     * @return int
     */
    function next(int $price): int
    {
        $currSpan = 1;

        while (!empty($this->stack) && end($this->stack)[1] <= $price) {
            [$span, $_] = array_pop($this->stack);
            $currSpan += $span;
        }

        $this->stack[] = [$currSpan, $price];

        return $currSpan;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * $obj = StockSpanner();
 * $ret_1 = $obj->next($price);
 */
