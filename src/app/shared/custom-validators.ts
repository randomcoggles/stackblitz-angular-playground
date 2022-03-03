
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

export class CustomValidators extends Validators {
  
  static cpf(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  {
      console.log('---->>> ', control);
        return control.value?.toLowerCase().length === 11 
            ? null : {value: control.value, message: 'cpf inválido'};
    }
  }

}