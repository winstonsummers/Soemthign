import IRollBuilder from './IRollBuilder'
import Roll from './Roll'

export default class RollBuilder implements IRollBuilder {
    private readonly _quantity: number
    private _sides?: number
    private _isPercent: boolean = false
    private _isStats: boolean = false

    constructor(quantity: number = 1) {
        this._quantity = quantity
    }

    d(sides: number) {
        this._sides = sides
        return new Roll(this)
    }

    percentile() {
        this._isPercent = true
        return new Roll(this)
    }

    stats() {
        this._isStats = true
        return new Roll(this)
    }

    get quantity() {
        return this._quantity
    }

    get sides() {
        return this._sides || 0
    }

    get isPercent() {
        return this._isPercent
    }

    get isStats() {
        return this._isStats
    }
}
