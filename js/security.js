export default class Security {
    constructor(name, ticket) {
        this.name = name
        this.ticket = ticket
        this.price = null
        this.yield = null
        this.ter = null
    }

    calculateRevenue() {
        return this.price * (this.yield - this.ter)
    }
}