
import { AbstractControl } from '@angular/forms';


export  class MyValidators {
    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 1000) {
            return {price_invalid: true};
        }
        return null;
    }
    static isPasswordValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 1000) {
            return {price_invalid: true};
        }
        return null;
    }
  }
