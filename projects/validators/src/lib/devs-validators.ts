import { ValidatorFn } from "@angular/forms";
import { checkArrayUnique } from "./array-unique.validator";
import { isGreaterThanOrEqual, isLessThanOrEqual } from "./arithmetic.validator";
import { mustMatchValidator } from "./must-match.validator";
import { isEnum } from "./is-enum.validator";
import { isValidDate } from "./is-valid-date.validator";
import { isValidIdentificationNumber } from "./is-valid-identification-number.validator";
import { checkArrayAtLeast } from "./array-at-least.validator";
import { checkArrayAtLeast2 } from "./array-at-least2.validator";
import { isValidDocumentSerie } from "./is-valid-document-serie.validator";

export class DevsValidators {
    static checkArrayUnique(fields: string[], alias: boolean): ValidatorFn {
        return checkArrayUnique(fields, alias);
    }

    static checkArrayAtLeast(field: string, value: string | number | boolean, quantity: number = 1): ValidatorFn {
        return checkArrayAtLeast(field, value, quantity);
    }

    static checkArrayAtLeast2(fn: (val: any) => boolean, quantity: number = 1): ValidatorFn {
        return checkArrayAtLeast2(fn, quantity);
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

    static isEnum(entity: Object) {
        return isEnum(entity);
    }

    static isValidDate(format: string) {
        return isValidDate(format);
    }

    static isValidIdentificationNumber(controlName: string) {
        return isValidIdentificationNumber(controlName);
    }

    static isValidDocumentSerie(fileCodeControlname: string, sunatCodeControName: string, isElectronicControlName: string) {
        return isValidDocumentSerie(fileCodeControlname, sunatCodeControName, isElectronicControlName);
    }
}