import Heap from './heap.js'

export default class MinHeap extends Heap {
    constructor(items = [], comparator = (a, b) => a > b) {
        super(items, comparator)
    }
}