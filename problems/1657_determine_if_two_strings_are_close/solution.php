<?php
/**
 * LeetCode Problem: 1657. Determine if Two Strings Are Close
 * https://leetcode.com/problems/determine-if-two-strings-are-close/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Check if two strings are close.
     * @param string $word1
     * @param string $word2
     * @return bool
     */
    function closeStrings(string $word1, string $word2): bool
    {
        if (strlen($word1) !== strlen($word2)) return false;

        $chars1 = count_chars($word1, 1);
        $chars2 = count_chars($word2, 1);

        if (array_keys($chars1) !== array_keys($chars2)) return false;

        sort($chars1);
        sort($chars2);
        return $chars1 === $chars2;
    }
}