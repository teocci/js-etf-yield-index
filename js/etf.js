import Security from './security.js'

export default class ETF extends Security {
    constructor(name, ticket) {
        super(name, ticket)
    }

    yieldRatio() {
        return this.price / (this.yield - this.ter)
    }

    yieldRevenue() {
        return this.price * (this.yield - this.ter)
    }
}