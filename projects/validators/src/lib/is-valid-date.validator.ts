import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from 'moment';

function _isValidDate(format: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value as string;

        if (value && !moment(value, format, true).isValid()) {
            return { 'isValidDate': true };
        }

        return null;
    };
}

export function isValidDate(format: string): ValidatorFn {
    return _isValidDate(format)
}