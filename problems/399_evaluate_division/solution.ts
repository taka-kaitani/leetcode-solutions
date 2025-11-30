/**
 * LeetCode Problem: 399. Evaluate Division
 * https://leetcode.com/problems/evaluate-division/
 *
 * Solution by Takanori Kaitani
 */
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const graph = new Map<string, Map<string, number>>();
    for (let i = 0; i < values.length; i++) {
        const [a, b] = equations[i];
        const v = values[i];
        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());
        graph.get(a)!.set(b, v);     // a/b = v
        graph.get(b)!.set(a, 1 / v); // b/a = 1/v
    }

    function dfs(curr: string, target: string, visited: Set<string>): number | undefined {
        if (visited.has(curr) || !graph.has(curr)) return;
        if (curr === target) return 1;
        visited.add(curr);

        const neighbor = graph.get(curr)!;
        if (neighbor.has(target)) return neighbor.get(target)!;

        for (const [next, weight] of neighbor) {
            const nextRes = dfs(next, target, visited);
            if (nextRes !== undefined) return weight * nextRes; // curr/target = curr/next * next/target
        }
    }

    const res: number[] = [];
    for (const [a, b] of queries) {
        const value = dfs(a, b, new Set<string>());
        res.push(value === undefined ? -1 : value);
    }

    return res;
}

/**
 * # Approach
 * - Model each variables as a node in a graph, and each equation `a/b = v` as two directed edges:
 *   - `a -> b` with weight `v`
 *   - `b -> a` with weight `1/v`
 * 
 * - To anser a query `a/b`:
 *   - Perform a depth-first search (DFS) starting from `a`.
 *   - While traversing a path `a -> x1 -> ... -> b`, we maintain the product of edge weights along the path,
 *     which represents the ratio `a/b`.
 *   - If we reach `b`, the accumulated product is the answer.
 *   - If `a` or `b` does not exist in the graph, or there is no path from `a` to `b`, return -1.
 * 
 * - DFS details:
 *   - Use a `visited` set to avoid cycles in the graph.
 *   - Base cases:
 *     - If `curr` is not in the graph, return `undefined`.
 *     - If `curr === target`, return `1` (since `x/x = 1`).
 *   - For each neighbor `next` of `curr` with weight `w`:
 *     - Recursively compute `next/target`.
 *     - If that result if defined, then:
 *       `curr/target = curr/next * next/target = w * result`.
 * 
 * # Complexity
 * - Let:
 *   - V = number of distinct variables,
 *   - E = number of equations,
 *   - Q = number of queries.
 * - Time: O(Q × (V + E)) in the worst case, since each query may DFS over over the entire graph.
 * - Space; O(V + E) for the graph plus O(V) for the recursion stack and visited set in the worst case.
 */
