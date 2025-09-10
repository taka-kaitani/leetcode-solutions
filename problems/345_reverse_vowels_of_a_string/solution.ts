/**
 * LeetCode Problem: 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 *
 * Solution by Takanori Kaitani
 */
function reverseVowels(s: string): string {
    const vowels = new Set<string>(["a","e","i","o","u","A","E","I","O","U"]);
    const n: number = s.length;
    let arr = s.split("");

    let left = 0;
    let right = n - 1;
    while (left < right) {
        while (left < right && !vowels.has(arr[left])) left++;
        while (left < right && !vowels.has(arr[right])) right--;

        // Swap vowels
        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }

    return arr.join("");
};
