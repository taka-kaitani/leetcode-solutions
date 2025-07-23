<?php
/**
 * LeetCode Problem: 328. Odd Even Linked List
 * https://leetcode.com/problems/odd-even-linked-list/
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
     * Rearranges the linked list such that all odd indexed nodes are grouped together followed by all even indexed nodes.
     * @param ListNode $head
     * @return ListNode
     */
    function oddEvenList($head)
    {
        if ($head === null || $head->next === null) return $head;
        $odd = $head;
        $even = $head->next;
        $evenHead = $even;
        while ($even !== null && $even->next !== null) {
            $odd->next = $even->next;
            $odd = $odd->next;
            $even->next = $odd->next;
            $even = $even->next;
        }

        $odd->next = $evenHead;
        return $head;
    }
}