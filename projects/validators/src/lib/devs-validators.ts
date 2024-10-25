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
import { isValidPhoneNumber } from "./phone-number.validator";
import { CountryCode } from "libphonenumber-js";
import { IsEmailOptions } from "validator";
import { isValidEmail } from "./email.validator";
import { ArrayUniqueProcessType } from "@devs-studio/array";
import { isValidDocumentCorrelative } from "./is-valid-document-correlative.validator";
import { isValidDocumentSerieDeduced } from "./is-valid-document-serie-deduced.validator";
import { isValidDocumentCorrelativeDeduced } from "./is-valid-document-correlative-deduced.validator";

export class DevsValidators {
    static checkArrayUnique(fields: string[], processType: ArrayUniqueProcessType = ArrayUniqueProcessType.NONE): ValidatorFn {
        return checkArrayUnique(fields, processType);
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

    static isValidDocumentCorrelative(fileCodeControlname: string, sunatCodeControName: string, isElectronicControlName: string) {
        return isValidDocumentCorrelative(fileCodeControlname, sunatCodeControName, isElectronicControlName);
    }

    static isValidDocumentSerieDeduced(fileCodeControlname: string | null, fileCode: string | null, sunatCodeControName: string | null, sunatCode: string | null) {
        return isValidDocumentSerieDeduced(fileCodeControlname, fileCode, sunatCodeControName, sunatCode);
    }

    static isValidDocumentCorrelativeDeduced(fileCodeControlname: string | null, fileCode: string | null, sunatCodeControName: string | null, sunatCode: string | null, serieControlName: string | null, serie: string | null) {
        return isValidDocumentCorrelativeDeduced(fileCodeControlname, fileCode, sunatCodeControName, sunatCode, serieControlName, serie);
    }

    static isValidPhoneNumber(country?: CountryCode) {
        return isValidPhoneNumber(country);
    }

    static isValidEmail(options: IsEmailOptions | undefined = undefined) {
        return isValidEmail(options);
    }
}