/**
 * LeetCode Problem: 785. Is Graph Bipartite
 * https://leetcode.com/problems/is-graph-bipartite/
 *
 * Solution by Takanori Kaitani
 */
function isBipartite(graph: number[][]): boolean {
    // -1 (unvisited) and 2 colors `0` and `1`
    const color = new Array(graph.length).fill(-1);

    for (let i = 0; i < graph.length; i++) {
        if (color[i] !== -1) continue;

        // BFS from unvisited node
        const queue = [i];
        color[i] = 0;
        while (queue.length > 0) {
            const node = queue.shift()!;
            for (const neighbor of graph[node]) {
                if (color[neighbor] === -1) {
                    color[neighbor] = color[node] ^ 1;
                    queue.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return false;
                }
            }
        }
    }

    return true;
}

/**
 * # Approach
 * - Use BFS to paint each node in one of 2 colors (0 or 1).
 * 
 * # Complexity
 * - Time:  O(V + E)
 * - Space: O(V)
 */
