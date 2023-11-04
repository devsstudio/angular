import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { generateAlias } from "@devs-studio/string";

interface ArrayUniqueItem {
    [key: string]: any,
}

function _checkDuplicates(inputs: ArrayUniqueItem[], fields: string[], alias: boolean) {

    var items = inputs.reduce<string[]>((acc, cur) => {
        // Verificar si cur es un objeto vacío
        if (Object.keys(cur).length === 0) {
            return acc; // Ignorar objetos vacíos
        }

        var parts = [];
        for (let field of fields) {
            if (cur[field] !== null && cur[field] !== undefined) {
                if (alias) {
                    parts.push(generateAlias(cur[field]));
                } else {
                    parts.push(cur[field]);
                }
            } else {
                return acc;
            }

        }
        acc.push(parts.join('|'));
        return acc;
    }, []);

    var uniques = items.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

    return items.length === uniques.length;
}

export function checkArrayUnique(fields: string[], alias: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const items = control.value as ArrayUniqueItem[];

        if (!_checkDuplicates(items, fields, alias)) {
            return { unique: { value: control.value } };
        }

        return null;
    };
}