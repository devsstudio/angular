import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isElectronic, validateCorrelative } from '@devs-studio/sunat/dist/annex/annex-5';

export function isValidDocumentCorrelativeDeduced(
    file_code_attribute: string | null,
    file_code: string | null,
    sunat_code_attribute: string | null,
    sunat_code: string | null,
    serie_attribute: string | null,
    serie: string | null
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const correlative = control.value as string;
        const formGroup = control.parent as FormGroup

        if (formGroup) {
            file_code = file_code_attribute ? formGroup.get(file_code_attribute)?.value : file_code;
            sunat_code = sunat_code_attribute ? formGroup.get(sunat_code_attribute)?.value : sunat_code;
            serie = serie_attribute ? formGroup.get(serie_attribute)?.value : serie;

            const is_electronic = isElectronic(sunat_code || '', serie || '');

            if (!validateCorrelative(file_code || '', sunat_code || '', correlative, is_electronic)) {
                return { isValidDocumentCorrelativeDeduced: { value: control.value } };
            }
        }

        return null;
    };
}