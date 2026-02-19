/**
 * LeetCode Problem: 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * Solution by Takanori Kaitani
 */
function firstUniqChar(s: string): number {
    // -1:  not seen so far
    // -2:  repeated
    // idx: non-repeated
    const idxArr: number[] = new Array(26).fill(-1);
    const codeA = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i) - codeA;
        if (idxArr[code] === -1) idxArr[code] = i;
        else idxArr[code] = -2; // mark repeated
    }

    let min = Infinity;
    for (let i = 0; i < 26; i++) {
        if (idxArr[i] >= 0) min = Math.min(min, idxArr[i]);
    }

    return min === Infinity ? -1 : min;
}

/**
 * # Approach
 * - Use a hash map `idxArr` of all lowercase English letters.
 *   - `idxArr[i] = -1 when letter_i isn't seen so far.
 *   - `idxArr[i] = -2 when letter_i is repeated.
 *   - `idxArr[i] = idx when letter_i appeared once (`s[idx]`).
 * - Find the minimum idx of `idxArr` except -1 and -2.
 *   - If the minimum doesn't exist, return -1;
 * 
 * # Complexity
 * - Time:  O(n) where n is s.length
 * - Space: O(1)
 */
