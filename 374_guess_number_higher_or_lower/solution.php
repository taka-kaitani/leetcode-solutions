<?php
/**
 * LeetCode Problem: 374. Guess Number Higher or Lower
 * https://leetcode.com/problems/guess-number-higher-or-lower/
 *
 * Solution by Takanori Kaitani
 */

/** 
 * The API guess is defined in the parent class.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * public function guess($num){}
 */

class Solution extends GuessGame {
    /**
     * @param  Integer  $n
     * @return Integer
     */
    function guessNumber($n): int
    {
        $left = 1;
        $right = $n;

        while ($left <= $right) {
            $mid = intdiv($left + $right, 2);
            $res = $this->guess($mid);

            if ($res === 0) {
                return $mid;
            } elseif ($res === 1) {
                $left = $mid + 1;
            } else {
                $right = $mid -1;
            }
        }

        return -1; // This line should never be reached if the input is valid
    }
}