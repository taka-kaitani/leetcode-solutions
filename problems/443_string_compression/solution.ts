/**
 * LeetCode Problem: 443. String Compression
 * https://leetcode.com/problems/string-compression/
 *
 * Solution by Takanori Kaitani
 */
function compress(chars: string[]): number {
    // Init by first element
    let left = 0;
    let top = chars[0];
    let freq = 1;

    function writeChars(): void {
        chars[left++] = top;
        if (freq >= 2) {
            const freqStr = String(freq);
            for (const digit of freqStr) chars[left++] = digit;
        }
    }

    for (let i = 1; i < chars.length; i++) {
        const ch = chars[i]
        if (ch === top) {
            freq++;
        } else {
            writeChars();
            top = ch;
            freq = 1;
        }
    }
    writeChars();

    return left;
}

/**
 * # Approach
 * - Compress the character array in-place using a single pass.
 * - Group consecutive identical characters:
 *   - If the group's length is 1, write just the character.
 *   - Otherwise, write the character followed by the group's length in digits.
 * - During traversal, maintain three pieces of state:
 *   - `left`: the next write index in `chars`.
 *   - `top`: the character of the current group.
 *   - `freq`: how many times we've seen `top` consecutively.
 * - After processing all groups, return `left` as the new length of the array.
 * 
 * # Complexity
 * - Time: O(n)
 * - Space: O(1)
 */
