/**
 * LeetCode Problem: 6. Zigzag Conversion
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * Solution by Takanori Kaitani
 */
function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    const n = s.length;
    const period = numRows * 2 - 2;
    const arr: string[] = [];

    // First row
    for (let j = 0; j < n; j += period) {
        arr.push(s[j]);
    }

    // Middle rows
    for (let i = 1; i < numRows - 1; i++) {
        for (let j = 0; j + i < n; j += period) {
            arr.push(s[j + i]); // Vertical
            const diag = j + period - i;
            if (diag < n) arr.push(s[diag]);
        }
    }

    // Last row
    for (let j = numRows - 1; j < n; j += period) {
        arr.push(s[j]);
    }

    return arr.join('');
}

/**
 * # Approach
 * - Use the cycle length `period = 2*numsRows - 2`.
 * - Characters in rot:
 *   - Row 0: indices j, j+period, j+2*period, ...
 *   - Row numsRows: j+(numsRows-1), j+(numsRows-1)+period, ...
 *   - Row i: two indices per cycle:
 *     j+i (vertical) nad j+period-i (diagonal)
 * - Append characters row by row to build the result
 * 
 * # Complexity
 * - Time:  O(n)
 * - Space: O(n)
 */
