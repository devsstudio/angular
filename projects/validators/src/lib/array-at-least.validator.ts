import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

interface ArrayAtLeastItem {
    [key: string]: any,
}

function _checkAtLeast(inputs: ArrayAtLeastItem[], field: string, value: number | string | boolean, quantity: number = 1) {

    var count = inputs.reduce<number>((acc, cur) => {
        if (cur[field] === value) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return count === quantity;
}

export function checkArrayAtLeast(field: string, value: number | string | boolean, quantity: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const items = control.value as ArrayAtLeastItem[];

        if (!_checkAtLeast(items, field, value, quantity)) {
            return { atLeast: { value: control.value } };
        }

        return null;
    };
}