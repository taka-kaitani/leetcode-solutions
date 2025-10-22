/**
 * LeetCode Problem: 438. Find All Anagrams in a String
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 *
 * Solution by Takanori Kaitani
 */
function findAnagrams(s: string, p: string): number[] {
    const codeA = 'a'.charCodeAt(0);
    let countsP = new Array(26).fill(0);
    for (const ch of p) countsP[ch.charCodeAt(0) - codeA]++;

    let countsS = new Array(26).fill(0);
    let res: number[] = [];
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        countsS[s[right].charCodeAt(0) - codeA]++;

        if (right - left + 1 > p.length) {
            countsS[s[left++].charCodeAt(0) - codeA]--;
        }
        if (right - left + 1 === p.length && isSame(countsP, countsS)) {
            res.push(left);
        }
    }

    return res;
};

function isSame(a: number[], b: number[]): boolean {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

/**
 * # Approach
 * - Use a sliding window to find p's anagrams, keeping its length equal to p's length.
 * - Maintain two frequency arrays `countsP` and `countsS`.
 * - At each step, compare the two frequencies.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
