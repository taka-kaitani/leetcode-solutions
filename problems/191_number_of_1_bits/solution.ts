/**
 * LeetCode Problem: 191. Number of 1 Bits
 * https://leetcode.com/problems/number-of-1-bits/
 *
 * Solution by Takanori Kaitani
 */
function hammingWeight(n: number): number {
    let count = 0;
    n >>>= 0; // normalize to unit-32
    while (n !== 0) {
        count += n & 1;
        n >>>= 1;
    }

    return count;
}

/**
 * # Approach
 * - Count bits by scanning from least significant to most significant.
 * - While `n` is not zero:
 *   - Add the least significant bit: `n & 1`.
 *   - Shift right using unsigned shift `>>>` to move to the next bit.
 *
 * # Complexity
 * - Time:  O(1) (at most 32 iterations for a 32-bit integer)
 * - Space: O(1)
 */
