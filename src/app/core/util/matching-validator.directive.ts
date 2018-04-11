import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appMatchingValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchingValidatorDirective,
      multi: true 
    }
  ],
  exportAs: 'MatchingValidatorDirective'
})
export class MatchingValidatorDirective implements Validator {
    @Input() appMatchingValidator: string
    validate(control: AbstractControl) : {[key: string] : any} | null {

        const controlToCompare = control.parent.get(this.appMatchingValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
          return {
            'mismatch': true
          }
        }
        return null;
  }
}