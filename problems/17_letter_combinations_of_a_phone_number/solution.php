<?php
/**
 * LeetCode Problem: 17. Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Given a string of digits from 2 to 9, return all possible letter combinations
     * that the number could represent based on the classic phone keypad mapping.
     * 
     * @param string $digits
     * @return string[]
     */
    function letterCombinations(string $digits): array
    {
        $map = [
            '2' => ['a', 'b', 'c'],
            '3' => ['d', 'e', 'f'],
            '4' => ['g', 'h', 'i'],
            '5' => ['j', 'k', 'l'],
            '6' => ['m', 'n', 'o'],
            '7' => ['p', 'q', 'r', 's'],
            '8' => ['t', 'u', 'v'],
            '9' => ['w', 'x', 'y', 'z']
        ];
        $n = strlen($digits);
        if ($n === 0) return [];

        $result = $map[$digits[0]];
        for ($i = 1; $i < $n; $i++) {
            $next = [];
            foreach ($map[$digits[$i]] as $letter) {
                $current = $result;
                foreach ($current as &$Combo) {
                    $Combo .= $letter;
                }
                unset($Combo);
                $next = array_merge($next, $current);
            }
            $result = $next;
        }

        return $result;
    }
}