import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { generateAlias } from "@devs-studio/string";

interface ArrayUniqueItem {
    [key: string]: any,
}

export enum ArrayUniqueProcessType {
    CASEINSENSITIVE = "CASEINSENSITIVE",
    ALIAS = "ALIAS",
    SPACES = "SPACES"
}

function _checkDuplicates(inputs: ArrayUniqueItem[], fields: string[], processType: ArrayUniqueProcessType) {

    var items = inputs.reduce<string[]>((acc, cur) => {
        // Verificar si cur es un objeto vacío
        if (Object.keys(cur).length === 0) {
            return acc; // Ignorar objetos vacíos
        }

        var parts = [];
        for (let field of fields) {
            var value = cur[field].toLowerCase();
            switch (processType) {
                case ArrayUniqueProcessType.ALIAS:
                    parts.push(generateAlias(value));
                    break;
                case ArrayUniqueProcessType.SPACES:
                    parts.push(value.replace(/\s/g, ''));
                    break;
                default:
                    parts.push(value);
                    break;
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

export function checkArrayUnique(fields: string[], processType: ArrayUniqueProcessType = ArrayUniqueProcessType.CASEINSENSITIVE): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const items = control.value as ArrayUniqueItem[];

        if (!_checkDuplicates(items, fields, processType)) {
            return { unique: { value: control.value } };
        }

        return null;
    };
}