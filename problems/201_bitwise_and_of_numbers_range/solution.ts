/**
 * LeetCode Problem: 201. Bitwise AND of Numbers Range
 * https://leetcode.com/problems/bitwise-and-of-numbers-range/
 *
 * Solution by Takanori Kaitani
 */
function rangeBitwiseAnd(left: number, right: number): number {
    let shift = 0; // number of low bits to zero out
    for (let i = 31; i >= 0; i--) {
        const l = (left >>> i) & 1;
        const r = (right >>> i) & 1;
        if (l !== r) {
            shift = i + 1;
            break;
        }
    }

    return (left >>> shift) << shift;
}

/**
 * # Approach
 * - The bitwise AND of all numbers in [left, right] keeps only
 *   the common high-bit prefix of `left` and `right`.
 * - Find the highest bit position where `left` and `right` differ.
 *   - Once they differ at bit i, the range contains values
 *     where every lower bit (0..i) becomes both 0 and 1 at least once,
 *     so, the AND must be 0 for those bits.
 * - Let `shift = i + 1` be the number of lowest bits to clear.
 * - Clear the suffix by shifting right then left.
 * 
 * # Complexity
 * - Time:  O(1)
 * - Space: O(1)
 */
