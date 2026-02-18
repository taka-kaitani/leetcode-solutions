/**
 * LeetCode Problem: 383. Ransom Note
 * https://leetcode.com/problems/ransom-note/
 *
 * Solution by Takanori Kaitani
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const freq: number[] = new Array(26).fill(0); // a-z
    const codeA = 'a'.charCodeAt(0);
    for (let i = 0; i < magazine.length; i++) {
        const idx = magazine.charCodeAt(i) - codeA;
        freq[idx]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const idx = ransomNote.charCodeAt(i) - codeA;
        if (freq[idx] === 0) return false;
        freq[idx]--;
    }

    return true;
}

/**
 * # Approach
 * - Use a hash array of lowercase English letters.
 * - Store the frequency of each letter in `magazine`.
 * - Scanning each letter in `ransomNote`:
 *   - If the letter doesn't remain in `freq`,
 *     `ransomNote` has a letter that `magazine` doesn't have.
 *   - Decrement the frequency of the letter.
 * - If we can finish the scanning without early returning,
 *   all the letters in `ransomNote` is included in `magazine`.
 * 
 * # Complexity
 * - Let
 *   - m be magazine.length
 *   - n be ransomNote.length
 * - Time:  O(m + n)
 * - Space: O(1)
 */
