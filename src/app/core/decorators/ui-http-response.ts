
export function AppHttpSubscription( ) {}
/*
export function AppHttpSubscription( ) {
  return function(target: Function, key: string, descriptor: any) {

    const originalMethod = descriptor.value; 

    descriptor.value =  function (...args: any[]) {

      console.log(`Entering ${key} method`);
      const result = originalMethod.apply(this, args);
      console.log(`Leaving ${key} method` );

      return result;
    }

    return descriptor;
  }
  static get cnpj(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      function validate(cnpjStr: string): boolean {
        if (cnpjStr === "" || cnpjStr === null || cnpjStr === undefined) {
          return true;
        }

        const cnpj = cnpjStr.replace(/\D/g, "");

        if (cnpj.length !== 14) {
          return false;
        }

        if (
          cnpj === "00000000000000" ||
          cnpj === "11111111111111" ||
          cnpj === "22222222222222" ||
          cnpj === "33333333333333" ||
          cnpj === "44444444444444" ||
          cnpj === "55555555555555" ||
          cnpj === "66666666666666" ||
          cnpj === "77777777777777" ||
          cnpj === "88888888888888" ||
          cnpj === "99999999999999"
        ) {
          return false;
        }

        let length = cnpj.length - 2;
        let numbers = cnpj.substring(0, length);
        const digits = cnpj.substring(length);
        let sum = 0;
        let pos = length - 7;

        for (let i = length; i >= 1; i--) {
          sum += +numbers.charAt(length - i) * pos--;
          if (pos < 2) {
            pos = 9;
          }
        }
        let resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        // tslint:disable-next-line:triple-equals
        if (resultado != +digits.charAt(0)) {
          return false;
        }

        length = length + 1;
        numbers = cnpj.substring(0, length);
        sum = 0;
        pos = length - 7;
        for (let i = length; i >= 1; i--) {
          sum += +numbers.charAt(length - i) * pos--;
          if (pos < 2) {
            pos = 9;
          }
        }
        resultado = sum % 11 < 2 ? 0 : 11 - (sum % 11);
        // tslint:disable-next-line:triple-equals
        if (resultado != +digits.charAt(1)) {
          return false;
        }

        return true;
      }
      if (!control.value || validate(control.value)) {
        return null;
      }
      return { cnpj: true };
    };
  }

  static get cpf(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      function validate(cpfStr: string): boolean {
        // tslint:disable-next-line:prefer-const
        if (cpfStr === "" || cpfStr === null || cpfStr === undefined) {
          return true;
        }
        const cpf = cpfStr.replace(/\D/g, "");

        if (cpf.length !== 11) {
          return false;
        }

        // tslint:disable-next-line:curly
        if (cpf === "") return false;
        // Elimina CPFs invalidos conhecidos
        if (
          cpf.length !== 11 ||
          cpf === "00000000000" ||
          cpf === "11111111111" ||
          cpf === "22222222222" ||
          cpf === "33333333333" ||
          cpf === "44444444444" ||
          cpf === "55555555555" ||
          cpf === "66666666666" ||
          cpf === "77777777777" ||
          cpf === "88888888888" ||
          cpf === "99999999999"
        ) {
          return false;
        }

        let add = 0;
        // tslint:disable-next-line:radix
        for (let i = 0; i < 9; i++) {
          add += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
          rev = 0;
        }

        // tslint:disable-next-line:radix
        if (rev !== parseInt(cpf.charAt(9))) {
          return false;
        }

        add = 0;
        // tslint:disable-next-line:radix
        for (let i = 0; i < 10; i++) {
          add += parseInt(cpf.charAt(i)) * (11 - i);
        }
        rev = 11 - (add % 11);

        if (rev === 10 || rev === 11) {
          rev = 0;
        }

        // tslint:disable-next-line:radix
        if (rev !== parseInt(cpf.charAt(10))) {
          return false;
        }

        return true;
      }
      if (!control.value || validate(control.value)) {
        return null;
      }
      return { cpf: true };
    };
  }

  static minDate(minDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const date = new Date(control.value);
      if (minDate.getTime() <= date.getTime()) {
        return null;
      }
      return { minDate: true, requiredMinDate: minDate };
    };
  }

  static maxDate(maxDate: Date): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const date = new Date(control.value);
      if (maxDate.getTime() >= date.getTime()) {
        return null;
      }
      return { maxDate: true, requiredMaxDate: maxDate };
    };
  }
}
*/