/**
 * LeetCode Problem: 295. Find Median from Data Stream
 * https://leetcode.com/problems/find-median-from-data-stream/
 *
 * Solution by Takanori Kaitani
 */
class MedianFinder {
    private hasEvenCount = true;
    private smallerHalf = new MyMaxHeap(); // number of elements is equal to or 1 more than that of largerHalf
    private largerHalf = new MyMinHeap();

    addNum(num: number): void {
        if (this.hasEvenCount) {
            const largerTop = this.largerHalf.top();
            if (largerTop !== undefined && num >= largerTop) {
                this.largerHalf.pop();
                this.largerHalf.push(num);
                this.smallerHalf.push(largerTop);
            } else {
                this.smallerHalf.push(num);
            }
        } else {
            const smallerTop = this.smallerHalf.top()!;
            if (num >= smallerTop) {
                this.largerHalf.push(num);
            } else {
                this.smallerHalf.pop();
                this.smallerHalf.push(num);
                this.largerHalf.push(smallerTop);
            }
        }

        this.hasEvenCount = !this.hasEvenCount;
    }

    findMedian(): number | undefined {
        const smallerTop = this.smallerHalf.top();
        if (smallerTop === undefined) return undefined; // leetcode solution doesn't need it

        return this.hasEvenCount
            ? (smallerTop + this.largerHalf.top()!) / 2
            : smallerTop;
    }
}

class MyHeap {
    protected heap: number[] = [];

    protected swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    top(): number | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }
}

class MyMinHeap extends MyHeap {
    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = (i - 1) >>> 1;
            if (this.heap[i] > this.heap[parent]) return;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        while (true) {
            const left = (i << 1) + 1;
            const right = (i << 1) + 2;
            let smallest = i;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest === i) return;
            this.swap(i, smallest);
            i = smallest;
        }
    }

    push(num: number): void {
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.heap.length < 2) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);

        return top;
    }
}

class MyMaxHeap extends MyHeap {
    private bubbleUp(i: number): void {
        while (i > 0) {
            const parent = (i - 1) >>> 1;
            if (this.heap[i] < this.heap[parent]) return;
            this.swap(i, parent);
            i = parent;
        }
    }

    private bubbleDown(i: number): void {
        while (true) {
            const left = (i << 1) + 1;
            const right = (i << 1) + 2;
            let largest = i;
            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest === i) return;
            this.swap(i, largest);
            i = largest;
        }
    }

    push(num: number): void {
        this.heap.push(num);
        this.bubbleUp(this.heap.length - 1);
    }

    pop(): number | undefined {
        if (this.heap.length < 2) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown(0);

        return top;
    }
}

/**
 * # Approach
 * - Use two heaps to maintain the median
 *   - MyMaxHeap: for smaller half
 *   - MyMinHeap: for larger half
 * - Balance heaps on each insert to keep sizes equal (or smallerHalf +1 when odd)
 * 
 * # Complexity
 * - Time:
 *   - addNum: O(log n) heap push/pop operations
 *   - findMedian: O(1) just peak at heap tops
 * - Space: O(n)
 */
