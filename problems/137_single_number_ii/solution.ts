/**
 * LeetCode Problem: 137. Single Number II
 * https://leetcode.com/problems/single-number-ii/
 *
 * Solution by Takanori Kaitani
 */
function singleNumber(nums: number[]): number {
    let counter = new Array(32).fill(0);
    for (const n of nums) {
        for (let b = 0; b < 32; b++) {
            counter[b] += (n >>> b) & 1;
        }
    }

    let ans = 0;
    for (let b = 0; b < 32; b++) {
        if (counter[b] % 3 !== 0) {
            ans |= (1 << b);
        }
    }

    return ans | 0;
}

/**
 * # Approach
 * - Bit counting (mod 3).
 * - For each bit position b = 0..31:
 *   - Count how many numbers have the b-th bit set.
 *   - Since every other number appears exactly 3 times, its contribution to each bit count
 *     is a multiple of 3 and disappears after `count % 3`.
 *   - The remaining bit (`count % 3`) is exactly the b-th bit of the unique number.
 * - Reconstruct the answer by setting bits whose `count % 3 !== 0`.
 *
 * # Notes (JS/TS)
 * - Use unsigned shift `>>>` to read bits consistently even for negative numbers.
 * - Return `ans | 0` to force the result into a 32-bit signed integer.
 *
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1) (32 counters)
 */
