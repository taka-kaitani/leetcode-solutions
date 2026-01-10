/**
 * LeetCode Problem: 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * Solution by Takanori Kaitani
 */
function longestConsecutive(nums: number[]): number {
    const set = new Set<number>(nums);

    let best = 0;
    for (const num of set) {
        if (set.has(num - 1)) continue; // not a start of a sequence

        let x = num;
        while (set.has(x + 1)) x++;
        best = Math.max(best, x + 1 - num);
    }

    return best;
}

/**
 * # Approach
 * - Put all numbers into a Set for O(1) average membership checks.
 * - For each number `num` in the set:
 *   - Only start counting when `num` is the start of a sequence
 *     (i.e., `num - 1` is not in the set).
 *   - Extend the sequence by checking `num + 1`, `num + 2`, ... in the set.
 *   - Update `best` with the longest length found.
 *
 * # Complexity
 * - Time:  O(n) average (each number is visited at most a constant number of times)
 * - Space: O(n)
 */
