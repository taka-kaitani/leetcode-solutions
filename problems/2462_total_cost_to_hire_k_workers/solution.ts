/**
 * LeetCode Problem: 2462. Total Cost to Hire K Workers
 * https://leetcode.com/problems/total-cost-to-hire-k-workers/
 *
 * Solution by Takanori Kaitani
 */

// Helper MinHeap class
class MyMinHeap {
    private heap: number[] = [];

    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[i] >= this.heap[parent]) break;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        const n = this.heap.length;
        while (true) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let smallest = i;

            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

            if (smallest === i) break;
            this.swap(i, smallest);
            i = smallest;
        }
    }

    push(val: number): void {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);
        return top;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }
}

function totalCost(costs: number[], k: number, candidates: number): number {
    const n = costs.length;
    let left = 0;
    let right = n - 1;
    let total = 0;
    let heapL = new MyMinHeap();
    let heapR = new MyMinHeap();

    // Init heaps
    while (left <= right && left < candidates) {
        heapL.push(costs[left]);
        left++;
    }
    while (right >= left && n - 1 - right < candidates) {
        heapR.push(costs[right]);
        right--;
    }

    // Iterate k sessions
    for (let i = 0; i < k; i++) {
        const leftTop = heapL.peek();
        const rightTop = heapR.peek();
        if (leftTop === undefined && rightTop === undefined) break;

        if (rightTop === undefined || (leftTop !== undefined && leftTop <= rightTop)) {
            total += heapL.pop()!;
            if (left <= right) heapL.push(costs[left++]);
        } else {
            total += heapR.pop()!;
            if (left <= right) heapR.push(costs[right--]);
        }
    }

    return total;
};
