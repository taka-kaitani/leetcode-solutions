/**
 * LeetCode Problem: 210. Course Schedule II
 * https://leetcode.com/problems/course-schedule-ii/
 *
 * Solution by Takanori Kaitani
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const graph = Array.from({ length: numCourses }, () => new Array<number>());
    const indeg = new Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        indeg[a]++;
    }

    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indeg[i] === 0) queue.push(i);
    }

    const taken: number[] = [];
    for (let qi = 0; qi < queue.length; qi++) {
        const curr = queue[qi];
        taken.push(curr);

        for (const next of graph[curr]) {
            indeg[next]--;
            if (indeg[next] === 0) queue.push(next);
        }
    }

    return taken.length === numCourses ? taken : [];
}

/**
 * # Approach (Kahn's Algorithm / Topological Sort)
 * - Build a directed graph:
 *   - prerequisites [a, b] means b must be taken before a, so add edge b -> a.
 * - Maintain:
 *   - `graph[u]`: list of courses that become available after taking `u`
 *   - `indeg[v]`: number of prerequisites remaining for course `v`
 *
 * - Initialize a queue with all courses having `indeg === 0` (can be taken immediately).
 * - Process the queue in order:
 *   - Pop/scan a course `curr` and append it to `taken`.
 *   - For each neighbor `next` in `graph[curr]`:
 *     - Decrement `indeg[next]` (one prerequisite is satisfied).
 *     - If `indeg[next]` becomes 0, push it into the queue.
 *
 * - If we appended all `numCourses` courses, `taken` is a valid order.
 * - Otherwise, a cycle exists (we got stuck with remaining courses having indeg > 0),
 *   so return [].
 *
 * # Complexity
 * - Time:  O(V + E)  where V = numCourses, E = prerequisites.length
 * - Space: O(V + E)  for the adjacency list, indegree array, queue, and output
 */
