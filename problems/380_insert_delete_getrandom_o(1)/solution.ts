/**
 * LeetCode Problem: 380. Insert Delete GetRandom O(1)
 * https://leetcode.com/problems/insert-delete-getrandom-o1/
 *
 * Solution by Takanori Kaitani
 */
class RandomizedSet {
    private nums: number[] = [];
    private numsMap = new Map<number, number>(); // val -> idx

    insert(val: number): boolean {
        if (this.numsMap.has(val)) return false;

        this.nums.push(val);
        this.numsMap.set(val, this.nums.length - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this.numsMap.has(val)) return false;

        const idx = this.numsMap.get(val)!;
        const lastVal = this.nums[this.nums.length - 1];

        this.nums[idx] = lastVal;
        this.numsMap.set(lastVal, idx);

        this.nums.pop();
        this.numsMap.delete(val);
        return true;
    }

    getRandom(): number {
        const randIdx = Math.floor(Math.random() * this.nums.length);
        return this.nums[randIdx];
    }
}

/**
 * # Approach
 * - Use an array `nums` and map `numsMap` (val -> idx).
 * 
 * - `insert(val)`:
 *   - If `nums` already has `val`, just return false.
 *   - Otherwise, update `nums` and `numsMap`.
 * 
 * - `remove(val)`:
 *   - If `nums` doesn't have `val`, just return false.
 *   - Otherwise, remove the val and idx from `nums` and `numsMap` in O(1) runtime.
 *     - Swap `val` and last element in `nums` and `numsMap`.
 *     - Pop the `val` from `nums and delete `val` mapping.
 * 
 * - `getRandom()`:
 *   - Get a random integer in the range [0, nums.length).
 *   - Return nums[randIdx] as the random number.
 * 
 * # Complexity
 * - Time: O(1)
 * - Space: O(n)
 */
