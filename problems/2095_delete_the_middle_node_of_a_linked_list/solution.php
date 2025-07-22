<?php
/**
 * LeetCode Problem: 2095. Delete the Middle Node of a Linked List
 * https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
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
     * Delete the middle node of a linked list.
     * @param ListNode $head
     * @return ListNode
     */
    function deleteMiddle($head)
    {
        $n = 0;
        $node = $head;
        while ($node !== null) {
            $n++;
            $node = $node->next;
        }

        $delete = intdiv($n, 2);
        if ($delete === 0) {
            return null;
        }

        $curr = $head;
        for ($i = 0; $i < $delete - 1; $i++) {
            $curr = $curr->next;
        }

        // Delete the middle node 
        $curr->next = $curr->next->next;

        return $head;
    }
}