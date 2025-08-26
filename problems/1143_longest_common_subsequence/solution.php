<?php
/**
 * LeetCode Problem: 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * @param string $text1
     * @param string $text2
     * @return int
     */
    function longestCommonSubsequence(string $text1, string $text2): int {
        $len1 = strlen($text1);
        $len2 = strlen($text2);

        // dp[i][j] is the longest common subsequence of text1[0...i] and text2[0...j]
        $dp = array_fill(0, $len1 + 1, array_fill(0, $len2 + 1, 0));

        for ($i = 1; $i <= $len1; $i++) {
            $c1 = $text1[$i - 1];
            for ($j = 1; $j <= $len2; $j++) {
                $c2 = $text2[$j - 1];
                if ($c1 === $c2) $dp[$i][$j] = $dp[$i - 1][$j - 1] + 1;
                else             $dp[$i][$j] = max($dp[$i - 1][$j], $dp[$i][$j - 1]);
            }
        }

        return $dp[$len1][$len2];
    }
}