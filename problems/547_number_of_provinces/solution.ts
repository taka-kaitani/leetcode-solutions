/**
 * LeetCode Problem: 547. Number of Provinces
 * https://leetcode.com/problems/number-of-provinces/
 *
 * Solution by Takanori Kaitani
 */
function findCircleNum(isConnected: number[][]): number {
    const n = isConnected.length;
    let isSeen = new Array<boolean>(n).fill(false);
    let province = 0;
    for (let i = 0; i < n; i++) {
        if (!isSeen[i]) {
            province++;
            traverse(isSeen, isConnected, i);
        }
    }

    return province;
};

function traverse(isSeen: Array<boolean>, isConnected: number[][], city: number): void {
    isSeen[city] = true;
    const n = isConnected.length;
    for (let j = 0; j < n; j++) {
        if (!isSeen[j] && isConnected[city][j] === 1) {
            traverse(isSeen, isConnected, j);
        }
    }
}
