import { isEqual } from "lodash";

// 値オブジェクト
// 不変、値同士の比較可能、副作用無し
export class Rating {
    private readonly _value: number;

    static readonly MAX = 5;
    static readonly MIN = 1;

    constructor(value: number) {
        this.validate(value);
        this._value = value;
    }

    protected validate(value: number): void {
        if (!Number.isInteger(value)) {
            throw new Error("評価は整数値で無ければなりません。");
        }
        
        if (value < Rating.MIN || value > Rating.MAX) {
            throw new Error(`評価は${Rating.MIN}から${Rating.MAX}の整数値でなければなりません。`);
        }
    }

    equals(other: Rating): boolean {
        return isEqual(this._value, other._value);
    }

    get value(): number {
        return this._value;
    }

    /**
     * 評価の品質係数を返す (0.0 ~ 1.0)
     */
    getQualityFactor(): number {
        return (this._value - Rating.MIN) / (Rating.MAX - Rating.MIN);
    }
}