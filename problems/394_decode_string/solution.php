<?php
/**
 * LeetCode Problem: 394. Decode String
 * https://leetcode.com/problems/decode-string/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Decode a string
     * @param string $s
     * @return string
     */
    function decodeString(string $s): string
    {
        $depth = 0;
        $n = 0;    // Repetition count for the outermost []
        $left = 0; // Start index of the outermost []
        $res = '';
        for ($i = 0, $len = strlen($s); $i < $len; $i++) {
            $char = $s[$i];
            if (is_numeric($char)) {
                if ($depth === 0) {
                    $n = 10 * $n + (int)$char; // The outermost number
                }
            } elseif ($char === '[') {
                if ($depth === 0) {
                    $left = $i + 1;
                }
                $depth++;
            } elseif ($char === ']') {
                $depth--;
                if ($depth === 0) {
                    // Duplicate the string in [] $n times
                    $decoded = $this->decodeString(substr($s, $left, $i - $left));
                    $res .= str_repeat($decoded, $n);
                    $n = 0;
                }
            } elseif ($depth === 0) {
                $res .= $char;
            }
        }

        return $res;
    }
}