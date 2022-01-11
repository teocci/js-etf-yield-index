import Security from './security.js'

export default class ETF extends Security {
    constructor(name, ticket) {
        super(name, ticket)
    }

    tyr() {
        return this.yield - this.ter
    }

    yieldRatio() {
        return this.price / this.tyr()
    }

    yieldRevenue() {
        return this.price * this.tyr()
    }
}