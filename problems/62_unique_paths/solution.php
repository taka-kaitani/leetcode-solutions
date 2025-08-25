<?php
/**
 * LeetCode Problem: 62. Unique Paths
 * https://leetcode.com/problems/unique-paths/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * @param int $m
     * @param int $n
     * @return int
     */
    function uniquePaths(int $m, int $n): int
    {
        $a = $m + $n - 2;
        $min = min($m - 1, $n - 1);
        $res = 1;

        for ($i = 1; $i <= $min; $i++) {
            $res = $res * ($a - $i + 1) / $i;
        }

        return (int)$res;
    }
}