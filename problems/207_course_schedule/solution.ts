/**
 * LeetCode Problem: 207. Course Schedule
 * https://leetcode.com/problems/course-schedule/
 *
 * Solution by Takanori Kaitani
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph = Array.from({ length: numCourses}, () => new Array<number>());
    const indegrees = new Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) {
        graph[b].push(a);
        indegrees[a]++;
    }

    let queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) queue.push(i);
    }

    let taken = 0;
    for (let qi = 0; qi < queue.length; qi++) {
        const curr = queue[qi];
        taken++;

        for (const next of graph[curr]) {
            indegrees[next]--;
            if (indegrees[next] === 0) queue.push(next);
        }
    }

    return taken === numCourses;
}
/**
 * # Approach (Kahn's Algorithm / Topological Sort)
 * - Model courses as a directed graph:
 *   - prerequisites [a, b] means you must take b before a, so add an edge b -> a.
 * - Compute `indegree[v]` = number of prerequisites still required for course v.
 * - Initialize a queue with all courses whose indegree is 0 (can be taken now).
 * - Repeatedly:
 *   - Pop one course from the queue (taking it is always safe because it has no remaining prerequisites).
 *   - For each neighbor `next` (courses that depend on it), decrement `indegree[next]`.
 *   - If `indegree[next]` becomes 0, push it into the queue.
 * - If we can process all courses, there is no cycle -> return true.
 * - If we get stuck early (queue becomes empty while some courses remain),
 *   the remaining subgraph has no indegree-0 node, which implies a cycle -> return false.
 *
 * # Complexity
 * - Time:  O(V + E)  where V = numCourses, E = prerequisites.length
 * - Space: O(V + E)  for adjacency list + indegree array + queue
 */
