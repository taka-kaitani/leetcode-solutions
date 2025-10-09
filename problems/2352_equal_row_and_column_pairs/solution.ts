/**
 * LeetCode Problem: 2352. Equal Row and Column Pairs
 * https://leetcode.com/problems/equal-row-and-column-pairs/
 *
 * Solution by Takanori Kaitani
 */
function equalPairs(grid: number[][]): number {
    const n = grid[0].length;

    // Store rows
    let rowMap = new Map<string, number>();
    for (const row of grid) {
        const key = row.join(',');
        rowMap.set(key, (rowMap.get(key) ?? 0) + 1);
    }

    let count = 0;
    // Loop each column
    for (let i = 0; i < n; i++) {
        let column = [];
        for (let j = 0; j < n; j++) {
            column.push(grid[i][j]);
        }
        const key = column.join(',');
        count += (rowMap.get(key) ?? 0);
    }

    return count;
};
