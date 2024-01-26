import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import parsePhoneNumber, { CountryCode } from 'libphonenumber-js';

export function isValidPhoneNumber(country?: CountryCode): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const phoneNumber = control.value;

        if (!phoneNumber) {
            // Si el campo está vacío, consideramos que es válido
            return null;
        }

        try {
            // Intenta parsear el número de teléfono
            const phoneNumberInstance = parsePhoneNumber(phoneNumber, country);

            // Verifica si el número es válido
            if (!phoneNumberInstance)
                return { phoneNumber: true };

            const isValid = phoneNumberInstance.isValid();

            return isValid ? null : { phoneNumber: true };
        } catch (e) {
            // Si hay un error al parsear, consideramos que el número no es válido
            return { phoneNumber: true };
        }
    };
}
