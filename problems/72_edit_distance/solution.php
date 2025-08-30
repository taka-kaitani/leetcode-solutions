<?php
/**
 * LeetCode Problem: 72. Edit Distance
 * https://leetcode.com/problems/edit-distance/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the minimum number of operations to convert `word1` to `word2`
     * @param string $word1
     * @param string $word2
     * @return int
     */
    function minDistance(string $word1, string $word2): int
    {
        $m = strlen($word1);
        $n = strlen($word2);
        if ($m === 0) return $n;
        if ($n === 0) return $m;
        $dp = []; // dp[i][j]: min operations to convert the first i chars of word1 to the first j chars of word2

        for ($i = 0; $i <= $m; $i++) $dp[$i][0] = $i;
        for ($i = 0; $i <= $n; $i++) $dp[0][$i] = $i;

        for ($i = 1; $i <= $m; $i++) {
            for ($j = 1; $j <= $n; $j++) {
                if ($word1[$i - 1] === $word2[$j - 1]) {
                    // last chars match: no new operation needed
                    $dp[$i][$j] = $dp[$i - 1][$j - 1];
                } else {
                    $dp[$i][$j] = 1 + min(
                        $dp[$i - 1][$j],    // delete
                        $dp[$i][$j - 1],    // insert
                        $dp[$i - 1][$j - 1] // replace
                    );
                }
            }
        }

        return $dp[$m][$n];
    }
}
