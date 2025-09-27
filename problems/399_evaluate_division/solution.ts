/**
 * LeetCode Problem: 399. Evaluate Division
 * https://leetcode.com/problems/evaluate-division/
 *
 * Solution by Takanori Kaitani
 */
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let map = new Map<string, Map<string, number>>();
    const n = equations.length;
    for (let i = 0; i < n; i++) {
        const a = equations[i][0];
        const b = equations[i][1];
        if (!map.has(a)) map.set(a, new Map());
        if (!map.has(b)) map.set(b, new Map());
        map.get(a)!.set(b, values[i]);
        map.get(b)!.set(a, 1 / values[i]);
    }

    let res: number[] = [];
    for (const [q0, q1] of queries) {
        res.push(division(map, new Set(), q0, q1));
    }

    return res;
};

/**
 * Compute the division `q0 / q1`.
 * If the answer cannot be determined, return -1.
 */
function division(map: Map<string, Map<string, number>>, visited: Set<string>, a: string, b: string): number {
    if (!map.has(a) || !map.has(b)) return -1;

    if (a === b) return 1;

    const inner = map.get(a)!;
    if (inner.has(b)) {
        return inner.get(b)!;
    }

    visited.add(a);
    for (const [key, val] of inner) {
        if (visited.has(key)) continue;

        const div = division(map, visited, key, b);
        if (div > 0) return val * div;
    }

    return -1;
}

// test
const e = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
const v = [3.0,4.0,5.0,6.0];
const q = [["x5","x2"],["x2","x4"]];
calcEquation(e,v,q);