/**
 * LeetCode Problem: 2462. Total Cost to Hire K Workers
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 *
 * Solution by Takanori Kaitani
 */
function totalCost(costs: number[], k: number, candidates: number): number {
    const heap = new MinHeapIdx(costs);
    const n = costs.length;
    let left = 0;
    let right = n - 1;
    while (left < candidates) heap.insert(left++);
    while (right > n - 1 - candidates && right >= left) heap.insert(right--);

    let total = 0;
    for (let i = 0; i < k; i++) {
        const cheapestIdx = heap.popSmallest();

        // Insert next candidate if needed
        if (cheapestIdx === undefined) return total; // It can't occur
        else if (left <= right) {
            if (cheapestIdx < left) heap.insert(left++);
            else                    heap.insert(right--);
        }

        total += costs[cheapestIdx];
    }

    return total;
}

class MinHeapIdx {
    private costs: number[] = [];
    private heap: number[] = []; // stores indices of costs
    constructor(costs: number[]) {
        this.costs = costs;
    }

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private less(i: number, j: number): boolean {
        const iVal = this.costs[this.heap[i]];
        const jVal = this.costs[this.heap[j]];
        return (
            iVal < jVal ||
            (iVal === jVal && this.heap[i] < this.heap[j])
        );
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.less(parent, i)) return;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        while (true) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let smallest = i;

            if (left < this.size() && this.less(left, smallest)) smallest = left;
            if (right < this.size() && this.less(right, smallest)) smallest = right;

            if (i === smallest) return;
            this.swap(i, smallest);
            i = smallest;
        }
    }

    private size(): number {
        return this.heap.length;
    }

    insert(idx: number): void {
        this.heap.push(idx);
        this.bubbleUp(this.size() - 1);
    }

    popSmallest(): number | undefined {
        if (this.size() === 0) return undefined;
        if (this.size() === 1) return this.heap.pop()!;

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!
        this.bubbleDown(0);
        return top;
    }
}

/**
 * # Approach
 * - Use a min-heap (priority queue) to always pick the worker with the lowest cost
 *   from the current pool of candidates.
 *
 * - We maintain two pointers:
 *   - `left`: the next unused index from the beginning of `costs`.
 *   - `right`: the next unused index from the end of `costs`.
 *
 * - Initialization:
 *   - Push up to `candidates` workers from the left side into the heap.
 *   - Push up to `candidates` workers from the right side into the heap,
 *     making sure we do not push the same index twice (`right >= left`).
 *
 * - The heap (`MinHeapIdx`) stores indices into `costs` and orders them by:
 *   1. smaller `costs[index]` first
 *   2. if costs are equal, smaller `index` first (to satisfy the problem's
 *      tie-breaking rule).
 *
 * - Then, for each of the `k` hiring sessions:
 *   - Pop the index `i` with the smallest (cost, index) from the heap.
 *   - Add `costs[i]` to the running `total`.
 *   - If there are still unused workers between `left` and `right`:
 *     - If `i` came from the left block (`i < left`), push the next `left` index and increment `left`.
 *     - Otherwise, push the next `right` index and decrement `right`.
 *   - This keeps the heap containing at most `2 * candidates` workers at any time.
 *
 * - After `k` iterations, `total` is the minimum total cost to hire `k` workers.
 *
 * # Complexity
 * - Let:
 *   - `n` be the number of workers (`costs.length`).
 *   - `c` be `candidates`.
 * - Each worker index is inserted into the heap at most once, and the heap size is
 *   bounded by `O(c)` (at most `2c` elements).
 * - We perform:
 *   - Up to `O(n)` heap inserts in total (initial + refill).
 *   - Exactly `k` heap pops.
 * - Time: O((n + k) × log c)
 *   - Each heap operation costs O(log c), heap size ≤ O(c).
 * - Space: O(c) for the heap, plus O(1) extra pointers.
 */
