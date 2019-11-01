import { FormGroup } from '@angular/forms';

export function forbiddenEqualNamesValidator(name: string, secondName: string) {
    return (formGroup: FormGroup) => {
        const mainControl = formGroup.controls[name];
        const secondControl = formGroup.controls[secondName];

        const isEqual = mainControl.value.trim() === secondControl.value.trim();

        isEqual ? mainControl.setErrors({ nameEqual: true }) : mainControl.setErrors(null);
    };
}
