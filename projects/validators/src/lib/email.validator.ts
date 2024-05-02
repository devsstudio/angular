import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import validator, { IsEmailOptions } from 'validator';

export function isValidEmail(options: IsEmailOptions | undefined): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const emailAddress = control.value;

        if (!emailAddress) {
            // Si el campo está vacío, consideramos que es válido
            return null;
        }

        try {
            // Intenta parsear el número de teléfono
            const isValid = validator.isEmail(emailAddress, options);
            return isValid ? null : { email: true };
        } catch (e) {
            // Si hay un error al parsear, consideramos que el número no es válido
            return { email: true };
        }
    };
}
