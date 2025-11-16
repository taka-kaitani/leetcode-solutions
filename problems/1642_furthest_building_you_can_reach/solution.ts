/**
 * LeetCode Problem: 1642. Furthest Building You Can Reach
 * https://leetcode.com/problems/furthest-building-you-can-reach/
 *
 * Solution by Takanori Kaitani
 */
function furthestBuilding(heights: number[], bricks: number, ladders: number): number {
    const n = heights.length;
    const climbsHeap = new MyMinHeap();

    for (let i = 0; i < n - 1; i++) {
        const climb = heights[i + 1] - heights[i];
        if (climb <= 0) continue;

        climbsHeap.push(climb);
        if (climbsHeap.size() > ladders) bricks -= climbsHeap.popMin()!;

        if (bricks < 0) return i;
    }

    return n - 1;
}

class MyMinHeap {
    private heap: number[] = [];

    private swap(a: number, b: number): void {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[parent]) return;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        const n = this.heap.length;
        while (true) {
            const left  = 2 * i + 1;
            const right = 2 * i + 2;
            let smallest = i;

            if (left  < n && this.heap[left]  < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === i) return;

            this.swap(i, smallest);
            i = smallest;
        }
    }

    push(n: number): void {
        this.heap.push(n);
        this.bubbleUp(this.heap.length - 1);
    }

    popMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop()!;
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    size(): number {
        return this.heap.length;
    }
}

/**
 * # Approach
 * - Use a priority queue `MyMinHeap` to find the furthest building we can reach.
 * - During traversal of `heights`, if we need climb,
 *   1. Store the height to climb to the heap.
 *   2. If `heap.size > ladders`, append bricks to the minimum climb seen before.
 *   3. If `bricks < 0` return the current index as a result.
 * - If we can finish the loop without bricks' shortage, return the last index of `height`.
 * 
 * # Complexity
 * - Time:  O(n log n)
 *   - O(log n) for each heap operation
 * - Space: O(n) for heap
 */
