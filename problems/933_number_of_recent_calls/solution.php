<?php
/**
 * LeetCode Problem: 933. Number of Recent Calls
 * https://leetcode.com/problems/number-of-recent-calls/
 *
 * Solution by Takanori Kaitani
 */
class RecentCounter {
    /**
     * Queue to store the timestamps of recent calls.
     * The queue will only keep timestamps within the last 3000 milliseconds.
     * @var array<int> $queue
     */
    private array $queue;

    function __construct() {
        $this->queue = [];
    }

    /**
     * Records a recent call and returns the number of calls in the last 3000 milliseconds.
     * @param  int $t
     * @return int
     */
    function ping(int $t): int
    {
        $this->queue[] = $t;

        while ($this->queue[0] < $t - 3000) {
            array_shift($this->queue);
        }
        
        return count($this->queue);
    }
}