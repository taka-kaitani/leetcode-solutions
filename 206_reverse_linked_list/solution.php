<?php
/**
 * LeetCode Problem: 206. Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
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
     * Reverse a singly linked list.
     * @param  ListNode $head
     * @return ListNode
     */
    function reverseList($head)
    {
        $prev = null;
        $curr = $head;

        while ($curr !== null) {
            $next = $curr->next; // Store the next node temporarily
            $curr->next = $prev; // Reverse the current node's pointer
            $prev = $curr; // Move prev to the current node
            $curr = $next; // Move to the next node
        }

        return $prev;
    }
}