export default class Queue {

    // An array is used to implement priority
    constructor()
    {
        this.items = []
    }

    enqueue(item)
    {
        this.items.push(item)
    }

    dequeue() {
        return this.items.shift()
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        return !this.isEmpty() ? this.items[0] : null
    }

    length() {
        return this.items.length
    }
}