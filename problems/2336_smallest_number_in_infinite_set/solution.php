<?php
/**
 * LeetCode Problem: 2336. Smallest Number in Infinite Set
 * https://leetcode.com/problems/smallest-number-in-infinite-set/
 *
 * Solution by Takanori Kaitani
 */
class SmallestInfiniteSet {
    private int $next = 1;
    private SplMinHeap $heap;
    /** @var array<int, true> Set of numbers currently in the heap (for de-dup). */
    private array $inHeap = [];

    function __construct() {
        $this->heap = new SplMinHeap();
    }

    /**
     * @return integer
     */
    function popSmallest(): int
    {
        if (!$this->heap->isEmpty()) {
            $val = $this->heap->extract();
            unset($this->inHeap[$val]);
            return $val;
        }
        return $this->next++;
    }

    /**
     * @param integer $num
     */
    function addBack(int $num): void
    {
        if ($num >= $this->next)         return; // not popped yet
        if (!empty($this->inHeap[$num])) return; // already in heap
        $this->heap->insert($num);
        $this->inHeap[$num] = true;
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * $obj = SmallestInfiniteSet();
 * $ret_1 = $obj->popSmallest();
 * $obj->addBack($num);
 */