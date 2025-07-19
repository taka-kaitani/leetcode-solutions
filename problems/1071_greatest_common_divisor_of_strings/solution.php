<?php
/**
 * LeetCode Problem: 1071. Greatest Common Divisor of Strings
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the greatest common divisor of two strings.
     */
    function gcdOfStrings(string $str1, string $str2): string
    {
        // No common divisor string.
        if ($str1 . $str2 !== $str2 . $str1) {
            return '';
        }

        $gcdLength = $this->gcd(strlen($str1), strlen($str2));

        // Return substring of that gcd length from either string
        return substr($str1, 0, $gcdLength);
    }

    /**
     * Calculate GCD of two numbers
     */
    private function gcd(int $a, int $b): int
    {
        return $b === 0 ? $a : $this->gcd($b, $a % $b);
    }
}