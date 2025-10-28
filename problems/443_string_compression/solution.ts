/**
 * LeetCode Problem: 443. String Compression
 * https://leetcode.com/problems/string-compression/
 *
 * Solution by Takanori Kaitani
 */
function compress(chars: string[]): number {
    const n = chars.length;
    let seen: string = chars[0];
    let count = 1;
    let left = 1;

    for (let right = 1; right < n; right++) {
        const ch = chars[right];
        if (ch === seen) count++;
        else {
            if (count > 1) {
                for (const digit of String(count)) {
                    chars[left++] = digit;
                }
            }
            chars[left++] = ch;
            seen = ch;
            count = 1;
        }
    }

    if (count > 1) {
        for (const digit of String(count)) {
            chars[left++] = digit;
        }
    }

    return left;
};

/**
 * # Approach
 * - Use two pointers to compress the array in-place without extra space.
 *   - `left` points to the next position to write to.
 *   - `right` scans the array from left to right.
 * - During traversal;
 *   - Count consecutive identical characters.
 *   - When the current character starts a new group,
 *     write the previous group's result and its count (if greater than 1) to `chars`.
 * - After the loop, handle the last group in the same way.
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(1)
 */
