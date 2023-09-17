import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

function _baseFunction(right: string, rule: string, callback: (left: Number, right: Number) => {}): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const leftValue = Number(control.value);
        const formGroup = control.parent as FormGroup

        if (formGroup) {
            const rightValue = Number(formGroup.get(right)?.value);

            if (!Number.isNaN(leftValue) && !Number.isNaN(rightValue) && !callback(leftValue, rightValue)) {
                return { [rule]: true };
            }
        }

        return null;
    };
}


export function isGreaterThanOrEqual(right: string): ValidatorFn {
    return _baseFunction(right, 'greaterThanOrEqual', (left: Number, right: Number) => {
        return left >= right;
    })
}

export function isLessThanOrEqual(right: string): ValidatorFn {
    return _baseFunction(right, 'lessThanOrEqual', (left: Number, right: Number) => {
        return left <= right;
    })
}