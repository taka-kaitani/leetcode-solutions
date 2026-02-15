/**
 * LeetCode Problem: 344. Reverse String
 * https://leetcode.com/problems/reverse-string/
 *
 * Solution by Takanori Kaitani
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

/**
 * # Approach
 * - Use two pointers starting at opposite ends.
 * - Swap elements and move pointers toward the center
 * - Stop when pointers meet (covers all elements exactly once)
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
