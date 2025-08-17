<?php
/**
 * LeetCode Problem: 2462. Total Cost to Hire K Workers
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 *
 * Solution by Takanori Kaitani
 */
class Solution {

    /**
     * Total cost to hire k workers.
     * 
     * @param int[] $costs
     * @param int   $k
     * @param int   $candidates
     * @return int
     */
    function totalCost(array $costs, int $k, int $candidates): int
    {
        $n = count($costs);
        $left = 0;
        $right = $n - 1;

        $heapL = new PairMinHeap();
        $heapR = new PairMinHeap();

        for ($i = 0; $i < $candidates && $left <= $right; $i++, $left++) {
            $heapL->insert([$costs[$left], $left]);
        }
        for ($i = 0; $i < $candidates && $left <= $right; $i++, $right--) {
            $heapR->insert([$costs[$right], $right]);
        }

        $total = 0;
        for ($i = 0; $i < $k; $i++) {
            if (
                $heapR->isEmpty() ||
                !$heapL->isEmpty() && $this->isLess($heapL->top(), $heapR->top())
            ) {
                // Pick from left heap
                [$c, $idx] = $heapL->extract();
                $total += $c;
                if ($left <= $right) {
                    $heapL->insert([$costs[$left], $left]);
                    $left++;
                }
            } else {
                // Pick from right heap
                [$c, $idx] = $heapR->extract();
                $total += $c;
                if ($left <= $right) {
                    $heapR->insert([$costs[$right], $right]);
                    $right--;
                }
            }
        }

        return $total;
    }

    /**
     * Return true if $a should be preferred over $b in selection
     * - lower cost first; on ties, lower index first.
     */
    private function isLess(array $a, array $b): bool
    {
        if ($a[0] === $b[0]) return $a[1] < $b[1];
        return $a[0] < $b[0];
    }
}

class PairMinHeap extends SplMinHeap {
    protected function compare($a, $b): int
    {
        if ($b[0] === $a[0]) return $b[1] <=> $a[1]; // prefer smaller index
        return $b[0] <=> $a[0];                      // prefer smaller cost
    }
}