import {
    AbstractControl, 
    NG_VALIDATORS, 
    Validator, 
    ValidatorFn
} from '@angular/forms';
import {Directive} from '@angular/core';

export function cpf(): ValidatorFn {  
    return (control: AbstractControl): { [key: string]: any } | null =>  {
      console.log('---->>> ', control.value);
        return control.value?.toLowerCase().length === 11 
            ? null : {cpf: control.value, message: 'cpf inválido'};
    }
}

@Directive({  
    selector: '[cpf]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CpfDirective,
        multi: true
    }]
})
export class CpfDirective implements Validator { 
    
    validate(control: AbstractControl): { [key: string]: any } | null {
      console.log('Hitttt!!!!!!!!!');

        return cpf()(control);  
    }
}



