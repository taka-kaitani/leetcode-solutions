<?php
/**
 * LeetCode Problem: 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Reverse the vowels in a string.
     * @param  string $s
     * @return string
     */
    function reverseVowels(string $s): string
    {
        $vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        $sArray = str_split($s);
        $left = 0;
        $right = count($sArray) - 1;

        while ($left < $right) {
            if (!in_array($sArray[$left], $vowels, true)) {
                $left++;
                continue;
            }
            if (!in_array($sArray[$right], $vowels, true)) {
                $right--;
                continue;
            }

            // Swap vowels
            $tmp = $sArray[$left];
            $sArray[$left] = $sArray[$right];
            $sArray[$right] = $tmp;

            $left++;
            $right--;
        }

        return implode('', $sArray);
    }
}