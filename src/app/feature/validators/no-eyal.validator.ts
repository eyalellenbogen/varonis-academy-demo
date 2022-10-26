import { Directive } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
} from '@angular/forms';

export const noEyal: ValidatorFn = (control: AbstractControl) => {
  return control.value?.indexOf('eyal') >= 0 ? { noEyal: true } : null;
};

@Directive({
  selector: '[noEyal]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoEyalValidatorDirective,
      multi: true,
    },
  ],
})
export class NoEyalValidatorDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return noEyal(control);
  }
}
