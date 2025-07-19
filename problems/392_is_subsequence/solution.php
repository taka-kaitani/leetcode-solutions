<?php
/**
 * LeetCode Problem: 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Check if string $s is a subsequence of string $t.
     * @param  string $s
     * @param  string $t
     * @return bool
     */
    function isSubsequence(string $s, string $t): bool
    {
        $s_i = 0;
        $s_len = strlen($s);
        $t_len = strlen($t);

        if ($s_len === 0) {
            return true;
        }

        for ($t_i = 0; $t_i < $t_len; $t_i++) {
            if ($t[$t_i] === $s[$s_i]) {
                $s_i++;

                // Found all characters in $s
                if ($s_i >= $s_len) {
                    return true;
                }
            }
        }

        return $s_i >= $s_len;
    }
}