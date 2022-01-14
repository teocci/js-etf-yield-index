import Heap from './heap.js'

export default class MaxHeap extends Heap {
    constructor(items = [], comparator = (a, b) => b > a) {
        super(items, comparator)
    }
}