/**
 * LeetCode Problem: 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 *
 * Solution by Takanori Kaitani
 */
function maxOperations(nums: number[], k: number): number {
    let freq = new Map<number, number>();
    for (const n of nums) {
        freq.set(n, (freq.get(n) ?? 0) + 1);
    }

    let res = 0;
    // Snapshot the keys to avoid modifying the map while iterating
    for (const [i, count] of [...freq]) {
        const target = k - i;
        if (i === target) {
            res += Math.floor(count / 2);
        } else if (freq.has(target)) {
            res += Math.min(count, freq.get(target)!);
            freq.set(i, 0);
            freq.set(target, 0);
        }
    }

    return res;
};
