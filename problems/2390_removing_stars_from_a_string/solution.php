<?php
/**
 * LeetCode Problem: 2390. Removing Stars From a String
 * https://leetcode.com/problems/removing-stars-from-a-string/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Removes stars from the string according to the problem statement.
     * Each '*' removes the last character added to the result.
     * @param string $s
     * @return string
     */
    function removeStars(string $s): string
    {
        $stack = [];

        for ($i = 0, $n = strlen($s); $i < $n; $i++) {
            if ($s[$i] === '*') {
                array_pop($stack);
            } else {
                $stack[] = $s[$i];
            }
        }

        return implode('', $stack);
    }
}