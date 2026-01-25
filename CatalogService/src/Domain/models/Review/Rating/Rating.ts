import { ValueObject } from "../../shared/ValueObject";

// 値オブジェクト
// 不変、値同士の比較可能、副作用無し
type RatingValue = number;
export class Rating extends ValueObject<RatingValue, "Rating"> {
    static readonly MAX = 5;
    static readonly MIN = 1;

    constructor(value: RatingValue) {
        super(value);
    }

    protected validate(value: RatingValue): void {
        if (!Number.isInteger(value)) {
            throw new Error("評価は整数値で無ければなりません。");
        }
        
        if (value < Rating.MIN || value > Rating.MAX) {
            throw new Error(`評価は${Rating.MIN}から${Rating.MAX}の整数値でなければなりません。`);
        }
    }

    /**
     * 評価の品質係数を返す (0.0 ~ 1.0)
     */
    getQualityFactor(): number {
        return (this._value - Rating.MIN) / (Rating.MAX - Rating.MIN);
    }
}