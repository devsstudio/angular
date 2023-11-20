import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validateSerie } from '@devs-studio/sunat/dist/annex/annex-5';

export function isValidDocumentSerie(file_code_attribute: string, sunat_code_attribute: string, is_electronic_attribute: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const serie = control.value as string;
        const formGroup = control.parent as FormGroup

        if (formGroup) {
            const file_code = formGroup.get(file_code_attribute)?.value;
            const sunat_code = formGroup.get(sunat_code_attribute)?.value;
            const is_electronic = formGroup.get(is_electronic_attribute)?.value;

            if (!validateSerie(file_code, sunat_code, serie, is_electronic)) {
                return { isValidDocumentSerie: { value: control.value } };
            }
        }

        return null;
    };
}