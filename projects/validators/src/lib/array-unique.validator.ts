import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ArrayObjectHelper, ArrayUniqueProcessType, ArrayUniqueItem } from "@devs-studio/array";

export function checkArrayUnique(fields: string[], processType: ArrayUniqueProcessType = ArrayUniqueProcessType.CASEINSENSITIVE): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const items = control.value as ArrayUniqueItem[];

        if (!ArrayObjectHelper.checkDuplicates(items, fields, processType)) {
            return { unique: { value: control.value } };
        }

        return null;
    };
}