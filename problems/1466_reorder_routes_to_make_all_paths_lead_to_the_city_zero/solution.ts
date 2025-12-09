/**
 * LeetCode Problem: 1466. Reorder Routes to Make All Paths Lead to the City Zero
 * https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
 *
 * Solution by Takanori Kaitani
 */
function minReorder(n: number, connections: number[][]): number {
    const graph = new Map<number, Map<number, number>>();
    for (const [from, to] of connections) {
        if (!graph.has(from)) graph.set(from, new Map());
        if (!graph.has(to)) graph.set(to, new Map());

        graph.get(from)!.set(to, 1);
        graph.get(to)!.set(from, 0);
    }

    let changes = 0;
    let currCities = [0];
    while (currCities.length) {
        let nextCities = [];
        for (const curr of currCities) {
            if (!graph.has(curr)) continue;
            const currGraph = graph.get(curr)!;
            for (const next of Array.from(currGraph.keys())) {
                // Change direction if needed
                changes += currGraph.get(next)!;

                // Store the next city
                nextCities.push(next);

                // Avoid revisiting
                currGraph.delete(next);
                graph.get(next)!.delete(curr);
            }
        }
        currCities = nextCities;
    }

    return changes;
}

/**
 * # Approach
 * - Build an undirected graph where each edge stores whether it needs to be reversed
 *   when traversed in a certain direction.
 * 
 * - For each directed road (from -> to) it the input:
 *   - Add an edge `from -> to` with weight 1:
 *     - If we traverse from `from` to `to` (away from 0),
 *       this road must be reversed so that `to` can reach city 0, so it contributes 1 change.
 *     - If we traverse from `to` to `from` (toward 0),
 *       the road direction is already correct, so it contributes 0 changes.
 * 
 * - Perform BFS starting from city 0:
 *   - For each edge `curr -> next` visited for the first time:
 *     - Add its weight to the answer (0 or 1).
 *     - Push `next` into the next frontier.
 *     - Remove the undirected edge between `curr` and `next` from the graph to avoid revisiting.
 * 
 * - Since the given graph is a tree (n cities and n-1 roads),
 *   BFS from 0 visits every city exactly once and examine each roads exactly once.
 *   The sum of the edge weight encountered is the minimum number of roads
 *   that must be reversed so every city can reach city 0.
 * 
 * - Use a breadth-first search (BFS) to visit all the cities in the graph, started from `0`.
 * - At each visit:
 *   - Add the value of `a => b` in the graph to the result count `changes`.
 *     - `changes += currGraph.get(next)!`
 *   - Prepare the next cities to visit.
 *     - `nextCities.push(next)`
 *   - Delete the roads already visited to avoid revisit.
 *     - `currGraph.delete(next)`
 *     - `graph.get(next)!.delete(curr)`
 * 
 * - After visiting all cities, return `changes` as total number of reordering.
 * 
 * # Complexity
 * - Let:
 *   - V be the number of cities
 *   - E be the number of roads (E = V - 1)
 * - Time: O(V + E) = O(n)
 * - Space: O(V + E) = O(n)
 */
