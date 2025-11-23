/**
 * LeetCode Problem: 338. Counting Bits
 * https://leetcode.com/problems/counting-bits/
 *
 * Solution by Takanori Kaitani
 */
function countBits(n: number): number[] {
    let res = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        res[i] = res[i >> 1] + (i & 1);
    }

    return res;
}

/**
 * # Approach
 * - Use a dp relation based on the binary representation of `i`.
 * - For each `i` from 1 to `n`:
 *   - Right shift drops the least-significant bit: `i >> 1`.
 *   - The least-significant bit itself is `i & 1`.
 *   - Therefor: bits(i) = bits(i >> 1) + (i & 1).
 * - Store these counts in a array `res[0..n]`.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(n)
 */