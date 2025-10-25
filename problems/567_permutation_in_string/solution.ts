/**
 * LeetCode Problem: 567. Permutation in String
 * https://leetcode.com/problems/permutation-in-string/
 *
 * Solution by Takanori Kaitani
 */
function checkInclusion(s1: string, s2: string): boolean {
    const codeA = 'a'.charCodeAt(0);
    let freq1 = new Array(26).fill(0);
    for (const ch of s1) freq1[ch.charCodeAt(0) - codeA]++;

    let matches = 0;
    let freq2 = new Array(26).fill(0);
    for (let i = 0; i < 26; i++) {
        if (freq1[i] === freq2[i]) matches++;
    }

    for (let right = 0; right < s2.length; right++) {
        const idxR = s2[right].charCodeAt(0) - codeA;
        freq2[idxR]++;
        if (freq2[idxR] === freq1[idxR]) matches++;
        else if (freq2[idxR] === freq1[idxR] + 1) matches--;

        if (right >= s1.length) {
            const idxL = s2[right - s1.length].charCodeAt(0) - codeA;
            freq2[idxL]--;
            if (freq2[idxL] === freq1[idxL]) matches++;
            else if (freq2[idxL] === freq1[idxL] - 1) matches--;
        }

        if (matches === 26) return true;
    }

    return false;
};

/**
 * # Approach
 * - Use a sliding window
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
