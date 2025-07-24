<?php
/**
 * LeetCode Problem: 2130. Maximum Twin Sum of a Linked List
 * https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 *
 * Solution by Takanori Kaitani
 */
/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * Finds the maximum twin sum of a linked list.
     * @param ListNode $head
     * @return int
     */
    function pairSum($head): int
    {
        $fast = $head;
        $slow = $head;
        $n = 0;
        // Find the middle of the linked list
        while ($fast && $fast->next) {
            $fast = $fast->next->next;
            $slow = $slow->next;
            $n++;
        }

        $first = $head;
        $second = $slow;
        $twinSums = array_fill(0, $n, 0);
        // Calculate the twin sums
        for ($i = 0; $i < $n; $i++) {
            $twinSums[$i] += $first->val;
            $twinSums[$n - 1 - $i] += $second->val;
            $first = $first->next;
            $second = $second->next;
        }

        return max($twinSums);
    }
}