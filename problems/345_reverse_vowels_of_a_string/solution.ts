/**
 * LeetCode Problem: 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 *
 * Solution by Takanori Kaitani
 */
function reverseVowels(s: string): string {
    const vowels = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let res: string[] = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (!vowels.has(res[left]) && left < right) left++;
        while (!vowels.has(res[right]) && left < right) right--;

        [res[left], res[right]] = [res[right], res[left]];
        left++;
        right--;
    }

    return res.join('');
}

/**
 * # Approach
 * - Use two pointers to reverse only the vowels in `s`.
 * - Initialize `left` at the start and `right` at the end of the string.
 * - Move `left` forward until it points to a vowel.
 * - Move `right` backward until it points to a vowel.
 * - When both `left` and `right` point to vowels, swap them and move both pointers inward.
 * - Repeat in `left <= right`, then join the modified character array into a string.
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(n)
 */
