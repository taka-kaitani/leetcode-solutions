/**
 * LeetCode Problem: 443. String Compression
 * https://leetcode.com/problems/string-compression/
 *
 * Solution by Takanori Kaitani
 */
function compress(chars: string[]): number {
    const n = chars.length;
    let head = 0;

    for (let i = 0; i < n; ) {
        let j = i;
        while (chars[j] === chars[i] && j < n) {
            j++;
        }
        const count = j - i;

        // Write the character
        chars[head++] = chars[i];

        // Write the count
        if (count > 1) {
            for (const digit of String(count)) {
                chars[head++] = digit;
            }
        }

        i = j;
    }

    return head;
};
