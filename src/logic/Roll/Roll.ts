import IRoll from './IRoll'
import RollBuilder from './RollBuilder'

const { floor, random } = Math

export default class Roll implements IRoll {
    private _asPool!: number[]
    private _total!: number
    private readonly _quantity: number
    private readonly _sides: number
    private readonly _isPercent: boolean
    private readonly _isStats: boolean

    constructor(rollBuilder: RollBuilder) {
        this._quantity = rollBuilder.quantity
        this._sides = rollBuilder.sides
        this._isPercent = rollBuilder.isPercent
        this._isStats = rollBuilder.isStats

        this._init()
    }

    private _init() {
        const { percentile, stats, rollDice } = Roll

        switch (true) {
            case this._isPercent:
                this.value = percentile()
                break
            case this._isStats:
                this.value = stats()
                break

            default:
                this.value = rollDice(this)
                break
        }
    }

    private static MIN_DIE_VALUE = 1
    private static d = (sides: number): number => {
        const { MIN_DIE_VALUE } = Roll
        return floor(random() * (sides - MIN_DIE_VALUE) + MIN_DIE_VALUE)
    }

    private static rollDiceAsPool = ({
        sides,
        quantity,
    }: {
        sides: number
        quantity: number
    }): number[] => {
        const res = []
        for (let i = 0; i < quantity; i++) {
            res.push(Roll.d(sides))
        }
        return res
    }

    private static stat = (): number => {
        return new RollBuilder(3).d(6).total
    }

    private static NUMBER_OF_STATS = 6
    private static stats = (): number[] => {
        const res: number[] = []
        const { NUMBER_OF_STATS, stat } = Roll
        for (let i = 0; i < NUMBER_OF_STATS; i++) {
            res.push(stat())
        }
        return res
    }

    private static rollDice = (roll: { sides: number; quantity: number }) => {
        return Roll.rollDiceAsPool(roll)
    }

    private static percentile = (): number => {
        const { d } = Roll
        const tensPlace = d(10) + ''
        const onesPlace = d(10) + ''
        let res = 0

        if (tensPlace == '10' && onesPlace == '10') {
            res = 100
        } else if (tensPlace == '10') {
            res = Number(onesPlace)
        } else {
            res = Number(tensPlace + onesPlace + '')
        }

        return res
    }

    public get asPool() {
        return this._asPool
    }

    public get total() {
        return this._total
    }

    public get sides() {
        return this._sides
    }

    public get quantity() {
        return this._quantity
    }

    private static addUp = (x: number, y: number) => x + y
    private set value(asPool: number[] | number) {
        const { addUp } = Roll
        this._asPool = asPool = Array.isArray(asPool) ? asPool : [asPool]
        this._total = asPool.reduce(addUp)
    }
}
