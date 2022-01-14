function defaultComparator(a, b) {
    return a < b
}

export default class Heap {
    constructor(items, comparator) {
        this.items = items || []
        this.comparator = comparator || defaultComparator

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
        return Math.floor((index - 1) / 2)
    }

    heapify() {
        for (let index = Math.floor((this.size + 1) / 2); index >= 0; index--) {
            this.sinkDown(index)
        }
    }

    bubbleUp() {
        // the index of the element we have just pushed
        let index = this.size - 1

        const parentIndex = this.parent(index)
        while (index > 0) {
            // if parentElt < elt, stop
            if (this.comparator(parentIndex, index)) return

            // swap
            this.swap(index, parentIndex)

            index = parentIndex
        }
    }

    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    sinkDown(index) {
        while (true) {
            let curr = index

            const left = this.leftChild(index)
            const right = this.rightChild(index)
            let swapIndex = -1

            if (left < this.size && this.comparator(this.items[swapIndex], this.items[left])) {
                swapIndex = left
            }

            if (right < this.size && this.comparator(this.items[swapIndex], this.items[right])) {
                swapIndex = right
            }

            // if we don't have a swap, stop
            if (swapIndex === -1) return

            this.swap(curr, swapIndex)
            curr = swapIndex
        }
    }
}