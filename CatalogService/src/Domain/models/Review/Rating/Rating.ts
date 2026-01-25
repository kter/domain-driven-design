import { isEqual } from "lodash";

// 値オブジェクト
// 不変、値同士の比較可能、副作用無し
export class Rating {
    private readonly _value: number;

    constructor(value: number) {
        this._value = value;
    }

    equals(other: Rating): boolean {
        return isEqual(this._value, other._value);
    }

    get value(): number {
        return this._value;
    }
}
