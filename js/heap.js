export default class Heap {
    constructor(items, comparator = (a, b) => a < b) {
        this.items = items || []
        this.comparator = comparator

        this.heapify()
    }

    empty() {
        return this.size === 0
    }

    pop() {
        return this.remove(0)
    }

    remove(index) {
        if (this.size === 0) return

        // swap with last
        this.swap(index, this.size - 1)

        // remove element
        const value = this.items.pop()
        this.sinkDown(index)

        return value
    }

    push(item) {
        // push element to the end of the heap
        this.items.push(item)
        this.bubbleUp()
    }

    set size(len) {
        this.items.length = len
    }

    get size() {
        return this.items.length
    }

    peek() {
        if (this.size === 0) return

        return this.items[0]
    }

    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} a index a
     * @param {number} b index b
     */
    swap(a, b) {
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]]
    }

    compareIndex(a, b) {
        return this.comparator(this.items[a], this.items[b])
    }

    leftChild(index) {
        return index * 2 + 1
    }

    rightChild(index) {
        return index * 2 + 2
    }

    parent(index) {
        return Math.ceil(index / 2 - 1)
    }

    topChildIndex(index) {
        const left = this.leftChild(index)
        const right = this.rightChild(index)

        return right < this.size && this.comparator(left, right) ? right : left
    }

    heapify() {
        for (let index = Math.floor((this.size + 1) / 2); index >= 0; index--) {
            this.sinkDown(index)
        }
    }

    bubbleUp() {
        // the index of the element we have just pushed
        let index = this.size - 1

        let parentIndex = this.parent(index)
        while (parentIndex >= 0 && this.comparator(parentIndex, index) > 0) {
            // swap
            this.swap(parentIndex, index)

            index = parentIndex
            parentIndex = this.parent(index)
        }
    }

    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    sinkDown(index) {
        let curr = index

        while (this.leftChild(curr) < this.size && this.comparator(curr, this.topChildIndex(curr))) {
            const next = this.topChildIndex(curr)

            this.swap(curr, next)

            curr = next
        }
    }
}