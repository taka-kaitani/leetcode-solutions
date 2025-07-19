<?php
/**
 * LeetCode Problem: 1768. Merge Strings Alternately
 * https://leetcode.com/problems/merge-strings-alternately/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Merge two strings alternately.
     * @param  String $word1
     * @param  String $word2
     * @return String $merged
     */
    function mergeAlternately($word1, $word2): string
    {
        $arr_word1 = str_split($word1);
        $arr_word2 = str_split($word2);
        $max_len = max(count($arr_word1), count($arr_word2));
        $merged = '';

        // Merge characters alternately from both arrays
        for ($i = 0; $i < $max_len; $i++) {
            $merged .= $arr_word1[$i] ?? '';
            $merged .= $arr_word2[$i] ?? '';
        }

        return $merged;
    }
}
