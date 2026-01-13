/**
 * LeetCode Problem: 146. LRU Cache
 * https://leetcode.com/problems/lru-cache/
 *
 * Solution by Takanori Kaitani
 */
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
    private capacity = 0;
    private map = new Map<number, number>();
    constructor(capacity: number) {
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.map.has(key)) return -1;

        // Mark as most recently used
        const val = this.map.get(key)!;
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // Mark as most recently used
            this.map.delete(key);
        } else if (this.map.size === this.capacity) {
            // Evict least recently used
            const lruKey = this.map.keys().next().value!;
            this.map.delete(lruKey);
        }

        this.map.set(key, value);
    }
}

/**
 * # Approach
 * - Use JavaScript `Map` to implement an LRU cache.
 * - Key property: `Map` preserves insertion order, so the first key is the least recently used (LRU),
 *   and the last key is the most recently used (MRU).
 *
 * - `get(key)`:
 *   - If `key` is missing, return -1.
 *   - Otherwise, read the value and move the entry to MRU by:
 *     1) `delete(key)`
 *     2) `set(key, value)`
 *
 * - `put(key, value)`:
 *   - If `key` already exists, delete it first (so the re-insert becomes MRU).
 *   - Else, if the cache is full, evict the LRU entry:
 *     - `lruKey = map.keys().next().value`
 *     - `delete(lruKey)`
 *   - Insert `set(key, value)` as MRU.
 *
 * # Complexity
 * - Time:  O(1) average per operation
 * - Space: O(c) where c is the capacity
 */
