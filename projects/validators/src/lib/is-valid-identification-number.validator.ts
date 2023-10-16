import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validateNumber } from '@devs-studio/sunat/dist/table/table-2';

export function isValidIdentificationNumber(code_attribute: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value as string;
        const formGroup = control.parent as FormGroup

        if (formGroup) {
            const code = formGroup.get(code_attribute)?.value;

            if (!validateNumber(code, value)) {
                return { isValidIdentificationNumber: { value: control.value } };
            }
        }

        return null;
    };
}