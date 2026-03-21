/**
 * LeetCode Problem: 647. Palindromic Substrings
 * https://leetcode.com/problems/palindromic-substrings/
 *
 * Solution by Takanori Kaitani
 */
function countSubstrings(s: string): number {
    const len = s.length;
    let count = len; // One character string is always palindrome

    for (let i = 0; i < len; i++) {
        // Count odd palindromes
        let oddLeft = i - 1;
        let oddRight = i + 1;
        while (oddLeft >= 0 && oddRight < len && s[oddLeft] === s[oddRight]) {
            count++;
            oddLeft--;
            oddRight++;
        }

        // Count even palindromes
        let evenLeft = i;
        let evenRight = i + 1;
        while (evenLeft >= 0 && evenRight < len && s[evenLeft] === s[evenRight]) {
            count++;
            evenLeft--;
            evenRight++;
        }
    }

    return count;
}

/**
 * # Approach
 * - Use two pointers approach.
 * - For each index `i` in `s`:
 *   - Count odd palindromes whose center is `i`
 *   - Count even palindromes whose center is `i` and `i+1`
 * 
 * # Complexity
 * - Time:  O(n^2)
 * - Space: O(1)
 */
