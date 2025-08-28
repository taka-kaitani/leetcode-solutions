<?php
/**
 * LeetCode Problem: 790. Domino and Tromino Tiling
 * https://leetcode.com/problems/domino-and-tromino-tiling/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * @param int $n
     * @return int
     */
    function numTilings(int $n): int
    {
        $MOD = 1_000_000_007;
        $dp = [1, 1, 2];
        $g = [0, 0, 1];
        for ($i = 3; $i <= $n; $i++) {
            $dp[$i] = ($dp[$i - 2] + $dp[$i - 1] + 2 * $g[$i - 1]) % $MOD;
            $g[$i] = ($dp[$i - 2] + $g[$i - 1]) % $MOD;
        }

        return $dp[$n];
    }
}
