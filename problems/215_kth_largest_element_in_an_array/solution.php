<?php
/**
 * LeetCode Problem: 215. Kth Largest Element in an Array
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Find the `k`th largest number
     * 
     * @param integer[] $nums
     * @param integer   $k
     * @return integer
     */
    function findKthLargest(array $nums, int $k): int
    {
        $n = count($nums);
        $target = $n - $k;
        $left = 0;
        $right = $n - 1;

        while (true) {
            $pivotIndex = mt_rand($left, $right);
            [$low, $high] = $this->partitionThreeWay($nums, $left, $right, $pivotIndex);

            if     ($target < $low)   $right = $low - 1;
            elseif ($target > $high)  $left = $high + 1;
            else                      return $nums[$target];
        }
    }

    /**
     * Lomuto-style partition: [< pivot][pivot][>= pivot]
     * 
     * @param array $nums
     * @param integer $left
     * @param integer $right
     * @param integer $pivotIndex
     * @return integer
     */
    private function partitionThreeWay(array &$nums, int $left, int $right, int $pivotIndex): array
    {
        $pivot = $nums[$pivotIndex];
        $low = $left;
        $mid = $left;
        $high = $right;

        while ($mid <= $high) {
            if ($nums[$mid] < $pivot) {
                $this->swap($nums, $low, $mid);
                $mid++;
                $low++;
            } elseif ($nums[$mid] > $pivot) {
                $this->swap($nums, $mid, $high);
                $high--;
            } else {
                $mid++;
            }
        }

        return [$low, $high];
    }

    private function swap(array &$arr, int $i, int $j): void
    {
        $tmp = $arr[$i];
        $arr[$i] = $arr[$j];
        $arr[$j] = $tmp;
    }
}