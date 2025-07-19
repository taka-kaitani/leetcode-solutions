<?php
/**
 * LeetCode Problem: 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Count the number of pairs of equal rows and columns in a grid.
     * @param int[][] $grid
     * @return int
     */
    function equalPairs(array $grid): int
    {
        $n = count($grid);
        $res = 0;

        // Create a map to count occurrences of each row
        $rowMap = [];
        foreach ($grid as $row) {
            $key = implode(',', $row);
            $rowMap[$key] = ($rowMap[$key] ?? 0) + 1;
        }

        // Check each column against the row map
        for ($j = 0; $j < $n; $j++) {
            $col = [];
            for ($i = 0; $i < $n; $i++) {
                $col[] = $grid[$i][$j];
            }
            $key = implode(',', $col);
            if (isset($rowMap[$key])) {
                $res += $rowMap[$key];
            }
        }

        return $res;
    }
}