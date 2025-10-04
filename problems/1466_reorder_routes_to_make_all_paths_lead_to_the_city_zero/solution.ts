/**
 * LeetCode Problem: 1466. Reorder Routes to Make All Paths Lead to the City Zero
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 *
 * Solution by Takanori Kaitani
 */
function minReorder(n: number, connections: [number, number][]): number {
    // Store the weighted graph
    // Map<from, Map<to, needChange>>
    let graph = new Map<number, [number, number][]>();
    for (const [from, to] of connections) {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to))   graph.set(to, []);
        graph.get(from)!.push([to, 1]);
        graph.get(to)!.push([from, 0]);
    }

    let changes = 0;

    function dfs(node: number, parent: number): void {
        for (const [neighbor, needChange] of graph.get(node) ?? []) {
            if (neighbor === parent) continue;
            changes += needChange;
            dfs(neighbor, node)
        }
    }

    dfs(0, -1);

    return changes;
};
