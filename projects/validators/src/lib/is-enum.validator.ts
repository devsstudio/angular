import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isEnum(entity: Object): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value as string;

        if (value && !Object.values(entity).includes(value)) {
            return { isEnum: { value: control.value } };
        }

        return null;
    };
}