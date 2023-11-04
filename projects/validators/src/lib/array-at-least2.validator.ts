import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

interface ArrayAtLeastItem {
    [key: string]: any,
}

function _checkAtLeast2(inputs: ArrayAtLeastItem[], fn: (val: any) => boolean, quantity: number = 1) {

    var count = inputs.reduce<number>((acc, cur) => {
        if (fn(cur)) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);

    return count === quantity;
}

export function checkArrayAtLeast2(fn: (val: any) => boolean, quantity: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const items = control.value as ArrayAtLeastItem[];

        if (!_checkAtLeast2(items, fn, quantity)) {
            return { atLeast: { value: control.value } };
        }

        return null;
    };
}