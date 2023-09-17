import { ValidatorFn } from "@angular/forms";
import { checkArrayUnique } from "./array-unique.validator";
import { isGreaterThanOrEqual, isLessThanOrEqual } from "./arithmetic.validator";

export class DevsValidators {
    static checkArrayUnique(fields: string[], alias: boolean): ValidatorFn {
        return checkArrayUnique(fields, alias);
    }

    static isGreaterThanOrEqual(right: string): ValidatorFn {
        return isGreaterThanOrEqual(right);
    }

    static isLessThanOrEqual(right: string): ValidatorFn {
        return isLessThanOrEqual(right);
    }
}