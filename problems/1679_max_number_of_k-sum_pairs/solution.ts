/**
 * LeetCode Problem: 1679. Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 *
 * Solution by Takanori Kaitani
 */
function maxOperations(nums: number[], k: number): number {
    const remain = new Map<number, number>();
    let count = 0;
    for (const n of nums) {
        const need = k - n;
        const needCount = remain.get(need) ?? 0;

        if (needCount > 0) {
            remain.set(need, needCount - 1);
            count++;
        } else {
            remain.set(n, (remain.get(n) ?? 0) + 1);
        }
    }

    return count;
}

/**
 * 
 */
