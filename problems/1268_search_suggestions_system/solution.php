<?php
/**
 * LeetCode Problem: 1268. Search Suggestions System
 * https://leetcode.com/problems/search-suggestions-system/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Return up to 3 lexicographically smallest products for each prefix of searchWord.
     * 
     * @param string[] $products
     * @param string   $searchWord
     * @return string[][]
     */
    function suggestedProducts(array $products, string $searchWord): array
    {
        $m = strlen($searchWord);
        $result = array_fill(0, $m, []);
        sort($products);

        for ($i = 0; $i < $m; $i++) {
            $prefix = substr($searchWord, 0, $i + 1);
            $left  = $this->lowerBound($products, $prefix);
            $right = $this->lowerBound($products, $prefix . '{');

            for ($j = $left; $j < min($left + 3, $right); $j++) {
                $result[$i][] = $products[$j];
            }
        }

        return $result;
    }

    /**
     * Find the first index where arr[index] >= target using binary search.
     * 
     * @param string[] $arr
     * @param string   $target
     * @return int
     */
    private function lowerBound(array $arr, string $target): int
    {
        $lo = 0;
        $hi = count($arr);

        while ($lo < $hi) {
            $mid = intdiv($lo + $hi, 2);
            if (strcmp($arr[$mid], $target) < 0) {
                $lo = $mid + 1;
            } else {
                $hi = $mid;
            }
        }

        return $lo;
    }
}
