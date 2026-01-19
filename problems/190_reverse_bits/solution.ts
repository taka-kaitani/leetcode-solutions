/**
 * LeetCode Problem: 190. Reverse Bits
 * https://leetcode.com/problems/reverse-bits/
 *
 * Solution by Takanori Kaitani
 */
function reverseBits(n: number): number {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) | (n & 1)
        n >>>= 1;
    }

    return res;
}

/**
 * # Approach
 * - Build the reversed bits one by one.
 * - Repeat 32 times:
 *   - Take the least-significant bit of `n` (`n & 1`)
 *   - Shift `res` left and append that bit
 *   - Shift `n` right (unsigned) to process the next bit
 *
 * # Complexity
 * - Time:  O(1) (32 steps)
 * - Space: O(1)
 */
