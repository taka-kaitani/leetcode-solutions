<?php
/**
 * LeetCode Problem: 151. Reverse Words in a String
 * https://leetcode.com/problems/reverse-words-in-a-string/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Reverse the words in a given string.
     * @param string $s
     * @return string
     */
    function reverseWords(string $s): string
    {
        $words = array_filter(explode(' ', $s), fn($w) => $w !== '');
        $words = array_reverse($words);
        return implode(' ', $words);
    }
}