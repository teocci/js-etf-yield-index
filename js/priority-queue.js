import Heap from './heap.js'

export default class PriorityQueue extends Heap {
    constructor(iterable = [], comparator = (a, b) => a[0] > b[0]) {
        super([], comparator)
        Array.from(iterable).forEach((el) => this.add(el))
    }

    /**
     * Add data to the Queue with Priority
     * @param {[number, any]|any} value - Pair with [priority, value]
     *  any object as value is also possible if a custom comparator is passed in.
     * @returns {void}
     */
    enqueue(value) {
        this.push(value)
    }

    /**
     * Remove from the queue the element with the highest priority.
     * @returns {[number, any]|any}
     */
    dequeue() {
        return this.remove()
    }
}