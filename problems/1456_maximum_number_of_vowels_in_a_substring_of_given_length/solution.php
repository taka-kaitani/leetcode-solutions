<?php
/**
 * LeetCode Problem: 1456. Maximum Number of Vowels in a Substring of Given Length
 * https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the maximum number of vowels in any substring of length k.
     * @param string $s
     * @param int    $k
     * @return int
     */
    function maxVowels(string $s, int $k): int
    {
        $vowels = ["a" => 1, "e" => 1, "i" => 1, "o" => 1, "u" => 1];
        $n = strlen($s);
        $max = $count = 0;

        // First window
        for ($i = 0; $i < $k; $i++) {
            if (isset($vowels[$s[$i]])) {
                $count++;
            }
        }

        $max = $count;
        if ($max === $k) return $k;

        // Slide the window
        $count = $max;
        for ($i = $k; $i < $n; $i++) {
            if (isset($vowels[$s[$i - $k]])) {
                $count--;
            }
            if (isset($vowels[$s[$i]])) {
                $count++;
            }
            if ($count > $max) {
                $max = $count;
                if ($max === $k) return $k;
            }
        }

        return $max;
    }
}