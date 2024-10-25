import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { validateSerie } from '@devs-studio/sunat/dist/annex/annex-5';

export function isValidDocumentSerieDeduced(
    file_code_attribute: string | null,
    file_code: string | null,
    sunat_code_attribute: string | null,
    sunat_code: string | null
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const serie = control.value as string;
        const formGroup = control.parent as FormGroup

        if (formGroup) {
            file_code = file_code_attribute ? formGroup.get(file_code_attribute)?.value : file_code;
            sunat_code = sunat_code_attribute ? formGroup.get(sunat_code_attribute)?.value : sunat_code;

            if (!validateSerie(file_code || '', sunat_code || '', serie, true) && !validateSerie(file_code || '', sunat_code || '', serie, false)) {
                return { isValidDocumentSerieDeduced: { value: control.value } };
            }
        }

        return null;
    };
}