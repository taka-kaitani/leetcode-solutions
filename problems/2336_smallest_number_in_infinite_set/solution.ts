/**
 * LeetCode Problem: 2336. Smallest Number in Infinite Set
 * https://leetcode.com/problems/smallest-number-in-infinite-set/
 *
 * Solution by Takanori Kaitani
 */
class SmallestInfiniteSet {
    popped: Set<number> = new Set();
    smallest: number = 1;

    popSmallest(): number {
        while (this.popped.has(this.smallest)) this.smallest++;
        this.popped.add(this.smallest);

        return this.smallest;
    }

    addBack(num: number): void {
        this.popped.delete(num);
        this.smallest = Math.min(this.smallest, num);
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */