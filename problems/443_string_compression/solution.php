<?php
/**
 * LeetCode Problem: 443. String Compression
 * https://leetcode.com/problems/string-compression/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * 
     * @param string[] $chars
     * @return int
     */
    function compress(array &$chars): int
    {
        $n = count($chars);
        $write = 0; // The index of $chars where we write the compressed characters
        $read  = 0; // The index of $chars where we read the characters

        while ($read < $n) {
            $char = $chars[$read];
            $count = 0;

            // Count the occurrences of the current character
            while ($read < $n && $chars[$read] === $char) {
                $read++;
                $count++;
            }

            // Write the character
            $chars[$write++] = $char;

            // Write the count
            if ($count > 1) {
                foreach (str_split((string)$count) as $digit) {
                    $chars[$write++] = $digit;
                }
            }
        }

        return $write;
    }
}