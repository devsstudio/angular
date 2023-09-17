import { ValidatorFn } from "@angular/forms";
import { checkArrayUnique } from "./array-unique.validator";
import { isGreaterThanOrEqual, isLessThanOrEqual } from "./arithmetic.validator";
import { mustMatchValidator } from "./must-match.validator";

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

    static mustMatchValidator(controlName: string, matchingControlName: string) {
        return mustMatchValidator(controlName, matchingControlName);
    }
}