<?php
/**
 * LeetCode Problem: 1137. N-th Tribonacci Number
 * https://leetcode.com/problems/n-th-tribonacci-number/
 *
 * Solution by Takanori Kaitani
 */

class Solution {

    /**
     * Calculate the n-th Tribonacci number.
     * @param Integer $n
     * @return Integer
     */
    function tribonacci($n): int
    {
        if ($n === 0) {
            return 0;
        } elseif ($n === 1 || $n === 2) {
            return 1;
        }

        $a = 0;
        $b = 1;
        $c = 1;

        for ($i = 3; $i <= $n; $i++) {
            $next = $a + $b + $c;
            $a = $b;
            $b = $c;
            $c = $next;
        }

        return $c;
    }
}