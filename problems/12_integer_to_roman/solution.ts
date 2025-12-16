/**
 * LeetCode Problem: 12. Integer to Roman
 * https://leetcode.com/problems/integer-to-roman/
 *
 * Solution by Takanori Kaitani
 */
function intToRoman(num: number): string {
    const romanNums: [string, number][] = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ]
    let remaining = num;
    const res :string[] = [];
    for (const [symbol, value] of romanNums) {
        if (remaining >= value) {
            const freq = Math.floor(remaining / value);
            res.push(symbol.repeat(freq));
            remaining %= value;
        }
    }

    return res.join('');
}

/**
 * # Approach
 * - Greedy with ordered (symbol, value) pairs `romanNums` including subtractive forms (CM, CD, ...).
 * - For each pair from large to small, append it `freq = floor(remaining / value)` times
 *   and reduce `remaining %= value`
 * 
 * - Use an Object `romanNums` which represents the relations between symbols and values.
 * - Iterate it from largest value to smallest one:
 *   - If `num >= value`, append the symbols to the result
 *     and subtract the appended value from `num`.
 * 
 * # Complexity
 * - Time:  O(1) (13 fixed pairs)
 * - Space: O(1)
 */
