export default class Security {
    constructor(name, ticket) {
        this.name = name
        this.ticket = ticket
        this.price = null
        this.yield = null
        this.ter = null
    }

    /**
     * Net yield ratio
     *
     * @returns {number}
     */
    nyr() {
        return this.yield - this.ter
    }

    /**
     * Price dividend ratio
     *
     * @returns {number}
     */
    pdr() {
        return this.price / this.nyr()
    }

    dividends() {
        return this.price * this.yield
    }

    yieldRevenue() {
        return this.price * this.nyr()
    }
}