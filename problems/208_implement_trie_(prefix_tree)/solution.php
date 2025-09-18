<?php
/**
 * LeetCode Problem: 208. Implement Trie (Prefix Tree)
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 *
 * Solution by Takanori Kaitani
 */
class TrieNode {
    public array $children = [];
    public bool $isEnd = false;
}

class Trie {
    private TrieNode $root;

    /**
     */
    function __construct()
    {
        $this->root = new TrieNode();
    }

    /**
     * @param string $word
     * @return void
     */
    function insert(string $word): void
    {
        $node = $this->root;
        foreach (str_split($word) as $ch) {
            if (!isset($node->children[$ch])) {
                $node->children[$ch] = new TrieNode();
            }

            $node = $node->children[$ch];
        }

        $node->isEnd = true;
    }

    /**
     * @param string $word
     * @return bool
     */
    function search(string $word): bool
    {
        $node = $this->root;
        foreach (str_split($word) as $ch) {
            if (!isset($node->children[$ch])) return false;
            $node = $node->children[$ch];
        }

        return $node->isEnd;
    }

    /**
     * @param string $prefix
     * @return bool
     */
    function startsWith(string $prefix): bool
    {
        $node = $this->root;
        foreach (str_split($prefix) as $ch) {
            if (!isset($node->children[$ch])) return false;
            $node = $node->children[$ch];
        }

        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * $obj = Trie();
 * $obj->insert($word);
 * $ret_2 = $obj->search($word);
 * $ret_3 = $obj->startsWith($prefix);
 */